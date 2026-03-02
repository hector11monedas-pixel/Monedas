import { convertToEuro } from './currencyUtils';
import { REGULAR_PRICES, getRegularCoinPrice } from '../data/RegularPriceCatalog';
import { getCzechCoinPrice } from '../data/CzechPriceCatalog';
import { getSpainCoinPrice } from '../data/SpainCoinsData';
import { JOINT_ISSUES, COUNTRY_CATALOGS } from '../data/CommemorativeCatalog';
import { BANKNOTE_DATA } from '../data/BanknoteData';
import { EURO_PRICING } from '../data/EuroPricing';
import { ABKHAZIA_COMM_DATA } from '../data/AbkhaziaCommemorativeData';
import { ABKHAZIA_INV_DATA } from '../data/AbkhaziaInvestmentData';
import { parseFaceValue } from './coinUtils';

/**
 * Removes price hints like " (123€)" from a string.
 * @param {string} name - The string to clean
 * @returns {string} The cleaned string
 */
export const stripPriceHint = (name) => {
    if (!name) return '';
    return name.replace(/\s*\(\d+([.,]\d+)?\s*€\)\s*$/, '').trim();
};

// Helper to parse "3.00€ - 5.00€" strings
const parseStringRange = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;

    // Clean currency symbols
    const cleanStr = priceStr.replace(/[€$£]/g, '').trim();

    if (cleanStr.includes('-')) {
        const parts = cleanStr.split('-').map(p => parseFloat(p.replace(',', '.')));
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return (parts[0] + parts[1]) / 2;
        }
    }

    const num = parseFloat(cleanStr.replace(',', '.'));
    return isNaN(num) ? 0 : num;
};

/**
 * Calculates the full valuation of a single collection item.
 * @param {Object} item - The stored item object
 * @returns {Object} { faceValue, estimatedValue, currency } (All values in EUR)
 */
export const getItemValuation = (item) => {
    let faceValue = 0;
    let estimatedValue = 0;
    let currency = 'EUR';
    let isGradeSpecific = false;

    // 1. Determine Face Value & Currency
    if (item.category === 'banknote' || item.category === 'banknotes') {
        const countryKey = Object.keys(BANKNOTE_DATA).find(k => BANKNOTE_DATA[k].country === item.country);
        if (countryKey) {
            const data = BANKNOTE_DATA[countryKey];
            const match = data.currency.match(/\((.*?)\)/);
            currency = match ? match[1] : 'EUR';
        }
        faceValue = convertToEuro(parseFaceValue(item.value), currency);
    } else {
        const yr = parseInt(item.year);
        // New currency detection logic
        if (item.country === 'República Checa') {
            currency = 'CZK';
        } else if (item.country === 'España') {
            if (item.category === 'euro') {
                currency = 'Euro';
            } else if (yr < 2002 || item.category === 'world' || item.category === 'spain') {
                currency = 'Pesetas';
            } else {
                currency = 'Euro';
            }
        } else if (item.country === 'Afganistán') {
            currency = 'Afgani';
        } else if (item.category === 'euro') {
            currency = 'Euro';
        } else if (item.currency) { // Fallback to item.currency if set
            currency = item.currency;
        }
        faceValue = convertToEuro(parseFaceValue(item.value), currency);
    }

    // 2. Determine Estimated Value

    // A. User Override (Highest Priority)
    // IMPORTANT: If user manually entered a price, we RETURN IMMEDIATELY.
    // We do NOT apply factors to user-provided estimates.
    if (item.estimatedValue !== undefined && item.estimatedValue !== null && item.estimatedValue !== '') {
        const manualVal = parseFloat(item.estimatedValue) || 0;
        return {
            faceValue,
            estimatedValue: manualVal > faceValue ? manualVal : faceValue,
            currency: 'EUR'
        };
    }

    // B. Catalog Lookups
    // B1. Banknotes
    if (item.category === 'banknote' || item.category === 'banknotes') {
        const countryKey = Object.keys(BANKNOTE_DATA).find(k => BANKNOTE_DATA[k].country === item.country);
        if (countryKey && item.banknoteId) {
            const countryData = BANKNOTE_DATA[countryKey];
            let match = null;
            countryData.seriesList.forEach(series => {
                const bMatch = series.banknotes.find(b => b.id === item.banknoteId);
                if (bMatch) match = bMatch;
            });

            if (match && match.estimatedValue) {
                estimatedValue = parseStringRange(match.estimatedValue);
            }
        }
    }
    // B2. Commemoratives
    else if (item.category === 'commemorative' || item.isCommemorative) {
        if (item.year && item.country) {
            const countryCoins = COUNTRY_CATALOGS[item.country] || [];
            let match = countryCoins.find(c =>
                c.year === parseInt(item.year) &&
                (c.subject === item.subject || (item.subject && c.subject && item.subject.includes(c.subject.substring(0, 10))))
            );

            if (!match) {
                match = JOINT_ISSUES.find(c =>
                    c.year === parseInt(item.year) &&
                    c.participants.includes(item.country) &&
                    (c.subject === item.subject || (item.subject && c.subject && item.subject.includes(c.subject.substring(0, 10))))
                );
            }

            if (match && match.estimatedPrice) {
                estimatedValue = parseStringRange(match.estimatedPrice);
            }

            // C. Price Hint Extraction (e.g. "Variant (80€)")
            // If the mint (variant) name contains a price in parentheses, it takes priority
            if (item.mint && item.mint.includes('(') && item.mint.includes('€')) {
                const hintMatch = item.mint.match(/\((\d+([.,]\d+)?)\s*€\)/);
                if (hintMatch && hintMatch[1]) {
                    const hintValue = parseFloat(hintMatch[1].replace(',', '.'));
                    if (!isNaN(hintValue)) {
                        estimatedValue = hintValue;
                    }
                }
            }
        }
    }
    // B3. Spain (Pesetas, Franco, Republic, Local)
    else if (item.country === 'España' && (item.category === 'spain' || item.category === 'world')) {
        const result = getSpainCoinPrice(item);
        if (result) {
            estimatedValue = result.price;
            isGradeSpecific = result.isGradeSpecific;
        }
    }
    // B4. Abkhazia
    else if (item.country === 'Abjasia' || item.country === 'Abkhazia') {
        let allAbCoins = [];
        if (ABKHAZIA_COMM_DATA && ABKHAZIA_COMM_DATA.seriesList) {
            ABKHAZIA_COMM_DATA.seriesList.forEach(s => allAbCoins.push(...s.coins));
        }
        if (ABKHAZIA_INV_DATA && ABKHAZIA_INV_DATA.seriesList) {
            ABKHAZIA_INV_DATA.seriesList.forEach(s => allAbCoins.push(...s.coins));
        }

        // 1. Try exact match by ID if present
        let match = allAbCoins.find(c => c.id === item.coinId || c.id === item.id);

        // 2. Try match by name & year
        if (!match) {
            match = allAbCoins.find(c =>
                c.year === item.year &&
                (c.name === item.name || c.name === item.subject)
            );
        }

        if (match && match.estimatedValue) {
            estimatedValue = parseStringRange(match.estimatedValue);
        }
    }
    // B4. Euro Catalog (New Structure: Spain, etc.)
    if (item.category === 'euro' && EURO_PRICING[item.country]) {
        const valMap = {
            '1 cent. €': '1c', '2 cents €': '2c', '5 cents €': '5c',
            '10 cents €': '10c', '20 cents €': '20c', '50 cents €': '50c',
            '1 €': '1e', '2 €': '2e',
            '12 €': '12e', '20 €': '20e', '30 €': '30e', '40 €': '40e'
        };

        let pricingKey = valMap[item.value];

        // Fallback for numeric inputs if item.value is just a number
        if (!pricingKey && !isNaN(parseFloat(item.value))) {
            const v = parseFloat(item.value);
            if (v === 0.01) pricingKey = '1c';
            else if (v === 0.02) pricingKey = '2c';
            else if (v === 0.05) pricingKey = '5c';
            else if (v === 0.10) pricingKey = '10c';
            else if (v === 0.20) pricingKey = '20c';
            else if (v === 0.50) pricingKey = '50c';
            else if (v === 1.00) pricingKey = '1e';
            else if (v === 2.00) pricingKey = '2e';
            else if (v === 12.00) pricingKey = '12e';
            else if (v === 20.00) pricingKey = '20e';
            else if (v === 30.00) pricingKey = '30e';
            else if (v === 40.00) pricingKey = '40e';
        }

        if (item.isCommemorative && (pricingKey === '2e' || parseFloat(item.value) === 2)) {
            pricingKey = '2e_comm';
        }

        const countryData = EURO_PRICING[item.country];
        if (countryData && pricingKey && countryData[pricingKey]) {
            const entry = countryData[pricingKey][parseInt(item.year)];
            // Entry can be an object or array of objects. 
            // For auto-pricing, we pick the first one or the max price? 
            // Usually just picking the first valid price is safe for default.
            // If array, maybe take the lowest?

            if (entry) {
                const entries = Array.isArray(entry) ? entry : [entry];

                // Try to find a specific match for the Mint/Variant
                let validEntry = null;
                if (item.mint) {
                    validEntry = entries.find(e => e.mint === item.mint || e.variant === item.mint || (e.name && e.name.includes(item.mint)));
                }

                // Fallback to the first valid one if no specific match
                if (!validEntry) {
                    validEntry = entries.find(e => e.price > 0);
                }

                if (validEntry) {
                    estimatedValue = validEntry.price;
                }
            }
        }
    }

    // B5. Regular Prices (Fallback / Other Countries)
    if (estimatedValue === 0) { // Only if not found in EURO_PRICING
        if (item.country === 'República Checa') {
            const czPrice = getCzechCoinPrice(item.year, parseFaceValue(item.value));
            if (czPrice) estimatedValue = czPrice;
        } else {
            const catalogPrice = getRegularCoinPrice(item.country, item.year, parseFaceValue(item.value));
            if (catalogPrice) {
                estimatedValue = catalogPrice;
            }
        }
    }

    // 3. Apply Condition Factor
    // IMPORTANT: Condition factors apply ONLY to generic catalog prices (usually UNC/SC).
    // If the catalog lookup returned a GRADE-SPECIFIC price (isGradeSpecific), we skip this.
    if (!isGradeSpecific && item.condition && estimatedValue > faceValue) {
        const conditionFactors = {
            'Proof': 1.2,
            'UNC': 1.0,
            'SC': 1.0,
            'EBC': 0.80,
            'MBC': 0.50,
            'BC': 0.25,
            'RC': 0.10
        };

        const factor = conditionFactors[item.condition];
        if (factor !== undefined) {
            estimatedValue = estimatedValue * factor;
        }
    }

    // 4. Fallback: Estimated Value shouldn't be less than Face Value
    if (estimatedValue < faceValue) {
        estimatedValue = faceValue;
    }

    return {
        faceValue,
        estimatedValue,
        currency: 'EUR' // We normalized to EUR
    };
};

/**
 * Calculates total valuation for a list of items.
 */
export const calculateCollectionValuation = (items) => {
    return items.reduce((acc, item) => {
        const val = getItemValuation(item);
        const qty = parseInt(item.quantity) || 1;

        return {
            faceValue: acc.faceValue + (val.faceValue * qty),
            estimatedValue: acc.estimatedValue + (val.estimatedValue * qty),
            investment: acc.investment + (parseFloat(item.purchasePrice) || 0) // purchasePrice is usually per lot/entry
        };
    }, { faceValue: 0, estimatedValue: 0, investment: 0 });
};
