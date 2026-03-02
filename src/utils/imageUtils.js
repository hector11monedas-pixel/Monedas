import { getNationalSideImage } from '../data/NationalEuroImages';
import { JOINT_ISSUES, COUNTRY_CATALOGS } from '../data/CommemorativeCatalog';
import { CZECH_DENOMINATIONS } from '../data/CzechCoinsData';
import { AFGHANISTAN_DENOMINATIONS } from '../data/AfghanistanCoinsData';
import { SPAIN_PESETA_DENOMINATIONS, SPAIN_REPUBLIC_DENOMINATIONS, SPAIN_VARIANTS } from '../data/SpainCoinsData';
import { BANKNOTE_DATA } from '../data/BanknoteData';

export const wrapWithProxy = (url) => {
    if (!url) return null;
    // Only wrap external HTTP(S) URLs that aren't already proxied
    if (typeof url === 'string' && url.startsWith('http') && !url.includes('weserv.nl')) {
        // BYPASS PROXY for stable sources like ECB or Numista to avoid proxy blocks
        if (url.includes('ecb.europa.eu') || url.includes('numista.com')) return url;

        // Prevent double-encoding by decoding first
        const rawUrl = url.includes('%') ? decodeURIComponent(url) : url;
        // Use Weserv proxy for better compatibility and hotlink bypass
        return `https://images.weserv.nl/?url=${encodeURIComponent(rawUrl)}`;
    }
    return url;
};

export const getCoinImage = (item) => {
    if (!item) return null;

    // 1. Banknotes
    if (item.type === 'note' || item.category === 'banknote') {
        // Try to find the banknote image in BanknoteData
        // Dictionary format: Country -> Denom -> Series -> Image
        // But item might just store values.
        // For simplified logic, if we have an ID or specific image path stored in item, use it.
        // Assuming item might not have the full image path stored.

        // If the item has the image property directly (some do if saved that way)
        if (item.image) return item.image;

        // Otherwise try to lookup. Current BanknoteData structure is complex.
        // Let's defer strict lookup for banknotes unless we need it,
        // or just return a placeholder if not found.
        return wrapWithProxy(item.image) || null;
    }

    // 2. Czech Republic
    if (item.country === 'República Checa') {
        const denom = CZECH_DENOMINATIONS.find(d => d.value === parseFloat(item.value));
        return wrapWithProxy(denom ? denom.image : null);
    }

    // 3. Afghanistan
    if (item.country === 'Afganistán') {
        const denom = AFGHANISTAN_DENOMINATIONS.find(d => d.value === parseFloat(item.value));
        return wrapWithProxy(denom ? denom.image : null);
    }

    // 3b. Spain (Pesetas/Republic - World Section)
    if (item.country === 'España' && item.category === 'world') {
        const year = parseInt(item.year);
        const value = parseFloat(item.value);
        let denom = null;

        if (year >= 1931 && year <= 1939) {
            // Priority: Match by ID if available (handles different designs with same value)
            if (item.denomId || item.id) {
                denom = SPAIN_REPUBLIC_DENOMINATIONS.find(d => d.id === (item.denomId || item.id));
            }
            if (!denom) {
                denom = SPAIN_REPUBLIC_DENOMINATIONS.find(d => d.value === value);
            }

            if (denom) {
                // Check for year-specific designs in variants
                const yearVariants = SPAIN_VARIANTS[denom.id]?.[year];
                if (yearVariants && yearVariants.length > 0) {
                    const specificDesign = item.variantId
                        ? yearVariants.find(v => v.id === item.variantId)
                        : yearVariants[0];
                    if (specificDesign) return wrapWithProxy(specificDesign.image);
                }
                return wrapWithProxy(denom.image);
            }
        }

        // Fallback or Standard Pesetas
        if (item.denomId || item.id) {
            denom = SPAIN_PESETA_DENOMINATIONS.find(d => d.id === (item.denomId || item.id));
        }
        if (!denom) {
            denom = SPAIN_PESETA_DENOMINATIONS.find(d => d.value === value);
        }

        if (denom) {
            const yearVariants = SPAIN_VARIANTS[denom.id]?.[year];
            if (yearVariants && yearVariants.length > 0) {
                const specificDesign = item.variantId
                    ? yearVariants.find(v => v.id === item.variantId)
                    : yearVariants[0];
                if (specificDesign) return wrapWithProxy(specificDesign.image);
            }
            return wrapWithProxy(denom.image);
        }
        return null;
    }

    // 4. Commemorative Euro (Category 'euro' AND isCommemorative)
    if (item.category === 'euro' && (item.isCommemorative === true || item.subject)) {
        if (item.year && item.country) {
            const countryCoins = COUNTRY_CATALOGS[item.country] || [];
            let match = countryCoins.find(c =>
                c.year === parseInt(item.year) &&
                (c.subject === item.subject || (item.subject && c.subject.includes(item.subject)))
            );

            if (!match) {
                match = JOINT_ISSUES.find(c =>
                    c.year === parseInt(item.year) &&
                    c.participants.includes(item.country) &&
                    (c.subject === item.subject || (item.subject && c.subject.includes(item.subject)))
                );
            }

            if (match && match.image) {
                return wrapWithProxy(match.image);
            }
        }
        return null;
    }

    // 5. Standard Euro
    if (item.category === 'euro') {
        return wrapWithProxy(getNationalSideImage(item.country, item.value, parseInt(item.year)) || null);
    }

    return wrapWithProxy(item.image) || null;
};
