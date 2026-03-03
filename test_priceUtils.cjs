// test_priceUtils.js
const fs = require('fs');

// Create mock data
const COUNTRY_CATALOGS = {
    Luxemburgo: [
        { year: 2016, subject: 'Puente Gran Duquesa Carlota', estimatedPrice: '6.00€' }
    ]
};
const EURO_PRICING = {
    Luxemburgo: {
        '2e_comm': {
            2016: { mint: 'Normal', price: 6 } // Just simulating
        }
    }
};

// Simplified priceUtils logic
function getItemValuation(item) {
    let faceValue = 2; // Mock face value handling
    let estimatedValue = 0;
    let currency = 'EUR';

    // B2. Commemoratives
    if (item.category === 'commemorative' || item.isCommemorative) {
        if (item.year && item.country) {
            const countryCoins = COUNTRY_CATALOGS[item.country] || [];
            let match = countryCoins.find(c =>
                c.year === parseInt(item.year) &&
                (c.subject === item.subject || (item.subject && c.subject && item.subject.includes(c.subject.substring(0, 10))))
            );

            if (match && match.estimatedPrice) {
                estimatedValue = parseFloat(match.estimatedPrice); // mock parseStringRange
                console.log('B2: Found commem price ->', estimatedValue);
            }

            // C. Price Hint Extraction
            if (item.mint && item.mint.includes('(') && item.mint.includes('€')) {
                const hintMatch = item.mint.match(/\((\d+([.,]\d+)?)\s*€\)/);
                if (hintMatch && hintMatch[1]) {
                    const hintValue = parseFloat(hintMatch[1].replace(',', '.'));
                    if (!isNaN(hintValue)) {
                        console.log('C: Found hint ->', hintValue);
                        return { faceValue, estimatedValue: hintValue, currency };
                    }
                }
            }
        }
    }

    // B4. Euro Catalog
    if (item.category === 'euro' && EURO_PRICING[item.country]) {
        let pricingKey = '2e_comm'; // mocked
        const countryData = EURO_PRICING[item.country];

        if (countryData && pricingKey && countryData[pricingKey]) {
            const entry = countryData[pricingKey][parseInt(item.year)];
            if (entry) {
                const entries = Array.isArray(entry) ? entry : [entry];
                let validEntry = null;
                if (item.mint) {
                    validEntry = entries.find(e => e.mint === item.mint || e.variant === item.mint || (e.name && e.name.includes(item.mint)));
                }
                if (!validEntry) {
                    validEntry = entries.find(e => e.price > 0);
                }

                if (validEntry && validEntry.price > 0) {
                    // Only override if we don't have a price yet, OR if this is a specific variant match
                    if (estimatedValue === 0 || item.mint) {
                        estimatedValue = validEntry.price;
                        console.log('B4: Set price ->', estimatedValue, 'from validEntry:', validEntry);
                    }
                }
            }
        }
    }

    return { faceValue, estimatedValue, currency };
}

console.log('--- TEST NORMAL ---');
console.log(getItemValuation({ category: 'euro', country: 'Luxemburgo', year: '2016', isCommemorative: true, subject: 'Puente Gran Duquesa Carlota', mint: 'Normal' }));

console.log('--- TEST VARIANT ---');
console.log(getItemValuation({ category: 'euro', country: 'Luxemburgo', year: '2016', isCommemorative: true, subject: 'Puente Gran Duquesa Carlota', mint: 'Variante (690.00€)' }));
