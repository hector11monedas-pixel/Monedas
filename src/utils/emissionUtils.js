import { EURO_DATA } from '../data/EuroData';
import { parseFaceValue } from './coinUtils';

// Individual country verification functions are now loaded dynamically via dataService
// Empty registry, to be populated or passed as argument
const STATUS_REGISTRY = {};

/**
 * Gets the list of valid emission years for a given configuration.
 */
export const getValidEmissionYears = (category, country, value, isCommemorative, mint = '', minYear = null, maxYear = null, initialDenomId = null, loadedGlobalData = null) => {
    const currentYear = 2026; // Our fixed app cap

    // Determine bounds
    const lb = minYear !== null ? parseInt(minYear) : 0;
    const ub = maxYear !== null ? parseInt(maxYear) : currentYear;

    if (category === 'euro') {
        if (isCommemorative) {
            // Load COMMEMORATIVE_CATALOG dynamically
            return []; // Should be handled by caller by awaiting data
        } else {
            // Standard Euro Coins
            const countryData = EURO_DATA[country];
            if (!countryData) return [];

            const startYear = countryData.startYear;
            const years = [];
            const parsedValue = parseFaceValue(value);
            const statusFn = STATUS_REGISTRY[country];

            for (let y = ub; y >= Math.max(startYear, lb); y--) {
                if (statusFn) {
                    let status;
                    if (country === 'Alemania') {
                        status = statusFn(y, mint || 'A', parsedValue);
                    } else {
                        status = statusFn(y, parsedValue);
                    }

                    if (status !== 'not_issued') {
                        years.push(y);
                    }
                } else {
                    years.push(y);
                }
            }
            return years;
        }
    }

    if (category === 'world') {
        const val = parseFaceValue(value);

        // Dynamic lookup based on country and loaded data
        if (country === 'República Checa' && loadedGlobalData?.czech) {
            const statusFn = loadedGlobalData.czech.getCzechCoinStatus;
            const years = [];
            for (let y = ub; y >= Math.max(1993, lb); y--) {
                if (statusFn(y, val) !== 'not_issued') years.push(y);
            }
            return years;
        }

        if (country === 'Afganistán' && loadedGlobalData?.afghan) {
            const statusFn = loadedGlobalData.afghan.getAfghanistanCoinStatus;
            const years = [];
            for (let y = ub; y >= Math.max(2004, lb); y--) {
                if (statusFn(y, val) !== 'not_issued') years.push(y);
            }
            return years;
        }

        if (country === 'España' && loadedGlobalData?.spain) {
            const statusFn = loadedGlobalData.spain.getSpainCoinStatus;
            const years = [];
            for (let y = ub; y >= Math.max(1931, lb); y--) {
                // For Spain, we might need the denomId for more accurate filtering
                // If it's passed via extra params, we should use it.
                // For now, let's assume getSpainCoinStatus handles it or we pass a generic check.
                if (statusFn(y, val, initialDenomId) !== 'not_issued') years.push(y);
            }
            return years;
        }

        return [];
    }

    if (category === 'spain') {
        // Broad range for Pesetas/etc (1869-2001)
        const years = [];
        for (let y = Math.min(2001, ub); y >= Math.max(1868, lb); y--) years.push(y);
        return years;
    }

    // Default: Empty or a wide range if we don't know
    return [];
};

/**
 * Calculates the number of valid (non-red) slots for a specific country.
 */
export const calculateCountryCatalogSize = (country, options = { germanMints: true, greeceMints: true, mint: null }, statusFn = null) => {
    const data = EURO_DATA[country];
    if (!data) return 0;

    const startYear = data.startYear;
    const currentYear = 2026;
    let slots = 0;
    const denoms = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00];

    for (let y = startYear; y <= currentYear; y++) {
        denoms.forEach(val => {
            const currentStatusFn = statusFn || STATUS_REGISTRY[country];
            if (currentStatusFn) {
                // Handle Germany mints
                if (country === 'Alemania') {
                    if (options.germanMints) {
                        const mints = options.mint ? [options.mint] : ['A', 'D', 'F', 'G', 'J'];
                        mints.forEach(m => {
                            if (currentStatusFn(y, m, val) !== 'not_issued') slots++;
                        });
                    } else {
                        if (currentStatusFn(y, 'A', val) !== 'not_issued') slots++;
                    }
                } else if (country === 'Grecia') {
                    // Handle Greece 2002 variants
                    if (currentStatusFn(y, val) !== 'not_issued') {
                        slots++;
                    }
                } else {
                    if (currentStatusFn(y, val) !== 'not_issued') slots++;
                }
            } else {
                // Default: All issued
                slots++;
            }
        });
    }
    return slots;
};

/**
 * Calculates the total size of the standard Euro catalog, excluding Not Issued coins.
 */
export const calculateTotalNormalEuroCatalogSize = (options) => {
    return Object.keys(EURO_DATA).reduce((acc, country) => {
        return acc + calculateCountryCatalogSize(country, options);
    }, 0);
};

/**
 * Calculates the number of valid (non-red) slots for a SPECIFIC denomination.
 */
export const calculateDenomCatalogSize = (category, country, denomination, options = { germanMints: true, greeceMints: true, mint: null, minYear: null, maxYear: null }, loadedGlobalData = null, statusFn = null) => {
    if (category === 'euro') {
        const data = EURO_DATA[country];
        if (!data) return 0;
        const startYear = data.startYear;
        const currentYear = 2026;
        let slots = 0;
        // Handle object input for denomination
        const val = typeof denomination === 'object' ? parseFloat(denomination.value) : parseFloat(denomination);

        // Determine effective year range
        const loopStart = options.minYear ? Math.max(startYear, options.minYear) : startYear;
        const loopEnd = options.maxYear ? Math.min(currentYear, options.maxYear) : currentYear;

        for (let y = loopStart; y <= loopEnd; y++) {
            const currentStatusFn = statusFn || STATUS_REGISTRY[country];
            if (currentStatusFn) {
                if (country === 'Alemania') {
                    if (options.germanMints) {
                        const mints = options.mint ? [options.mint] : ['A', 'D', 'F', 'G', 'J'];
                        mints.forEach(m => {
                            if (currentStatusFn(y, m, val) !== 'not_issued') slots++;
                        });
                    } else {
                        if (currentStatusFn(y, 'A', val) !== 'not_issued') slots++;
                    }
                } else {
                    if (currentStatusFn(y, val) !== 'not_issued') slots++;
                }
            } else {
                slots++;
            }
        }
        return slots;
    }

    if (category === 'world' && country === 'República Checa') {
        const statusFn = loadedGlobalData?.czech?.getCzechCoinStatus;
        if (!statusFn) return 0;
        let count = 0;
        const currentYear = 2026;
        const val = parseFloat(denomination);
        for (let y = 1993; y <= currentYear; y++) {
            if (statusFn(y, val) !== 'not_issued') {
                count++;
            }
        }
        return count;
    }

    if (category === 'world' && country === 'Afganistán') {
        const statusFn = loadedGlobalData?.afghan?.getAfghanistanCoinStatus;
        if (!statusFn) return 0;
        let count = 0;
        const currentYear = 2026;
        const val = parseFloat(denomination);
        for (let y = 2004; y <= currentYear; y++) {
            if (statusFn(y, val) !== 'not_issued') {
                count++;
            }
        }
        return count;
    }

    if (category === 'world' && country === 'España') {
        const statusFn = loadedGlobalData?.spain?.getSpainCoinStatus;
        if (!statusFn) return 0;
        let count = 0;
        const val = parseFloat(denomination);
        for (let y = 1868; y <= 2001; y++) {
            if (statusFn(y, val) !== 'not_issued') {
                count++;
            }
        }
        return count;
    }

    return 0;
};

/**
 * Calculates the number of valid (non-red) slots for World countries (Czechia).
 */
export const calculateWorldCatalogSize = (country, loadedGlobalData = null) => {
    if (country === 'República Checa') {
        const czechData = loadedGlobalData?.czech;
        if (!czechData) return 0;
        let count = 0;
        const currentYear = 2026;
        for (let y = 1993; y <= currentYear; y++) {
            czechData.CZECH_DENOMINATIONS.forEach(denom => {
                if (czechData.getCzechCoinStatus(y, denom.value) !== 'not_issued') {
                    count++;
                }
            });
        }
        return count;
    }

    if (country === 'Afganistán') {
        const afghanData = loadedGlobalData?.afghan;
        if (!afghanData) return 0;
        let count = 0;
        const currentYear = 2026;
        for (let y = 2004; y <= currentYear; y++) {
            afghanData.AFGHANISTAN_DENOMINATIONS.forEach(denom => {
                if (afghanData.getAfghanistanCoinStatus(y, denom.value) !== 'not_issued') {
                    count++;
                }
            });
        }
        return count;
    }

    if (country === 'España') {
        const spainData = loadedGlobalData?.spain;
        if (!spainData) return 0;
        let count = 0;
        const mainLists = [
            spainData.SPAIN_REPUBLIC_DENOMINATIONS,
            spainData.SPAIN_CW_LOCAL_DENOMINATIONS,
            spainData.SPAIN_FRANCO_DENOMINATIONS,
            spainData.SPAIN_JC1_DENOMINATIONS,
            spainData.SPAIN_ALFONSO_XIII_DENOMINATIONS,
            spainData.SPAIN_ALFONSO_XII_DENOMINATIONS,
            spainData.SPAIN_PROVISIONAL_DENOMINATIONS
        ];

        mainLists.forEach(list => {
            list.forEach(denom => {
                for (let y = 1868; y <= 2001; y++) {
                    if (spainData.getSpainCoinStatus(y, denom.value, denom.id) !== 'not_issued') {
                        count++;
                        // Add variants
                        if (spainData.SPAIN_VARIANTS[denom.id]?.[y]) {
                            count += spainData.SPAIN_VARIANTS[denom.id][y].length - 1;
                        }
                    }
                }
            });
        });
        return count;
    }

    if (country === 'Abjasia') {
        const abCommData = loadedGlobalData?.abkhazia_comm;
        const abInvData = loadedGlobalData?.abkhazia_inv;
        let count = 0;
        if (abCommData) abCommData.seriesList.forEach(series => count += series.coins.length);
        if (abInvData) abInvData.seriesList.forEach(series => count += series.coins.length);
        return count;
    }

    return 0;
};

/**
 * Calculates the number of valid (non-red) slots for a SPECIFIC period and denomination.
 */
export const calculateWorldDenomPeriodCatalogSize = (country, value, startYear, endYear, loadedGlobalData = null) => {
    // Special case for Abjasia: each denomination in the grid is a unique issue, total is 1
    if (country === 'Abjasia') return 1;

    const statusFn = STATUS_REGISTRY[country] || (country === 'España' ? loadedGlobalData?.spain?.getSpainCoinStatus : null) || (country === 'República Checa' ? loadedGlobalData?.czech?.getCzechCoinStatus : null) || (country === 'Afganistán' ? loadedGlobalData?.afghan?.getAfghanistanCoinStatus : null);

    if (!statusFn) return (endYear - startYear + 1);

    let count = 0;
    const val = typeof value === 'object' ? value.value : parseFloat(value);
    const id = typeof value === 'object' ? value.id : value;

    for (let y = startYear; y <= endYear; y++) {
        if (statusFn(y, val, id) !== 'not_issued') {
            count++;

            // Add variants if any
            if (country === 'España' && loadedGlobalData?.spain) {
                const spainData = loadedGlobalData.spain;
                // Use the provided ID or fallback to first match by value
                let usedId = id;
                if (!usedId || typeof usedId !== 'string') {
                    const allDenoms = [
                        ...spainData.SPAIN_PESETA_DENOMINATIONS,
                        ...spainData.SPAIN_REPUBLIC_DENOMINATIONS,
                        ...spainData.SPAIN_JC1_DENOMINATIONS,
                        ...spainData.SPAIN_FRANCO_DENOMINATIONS
                    ];
                    usedId = allDenoms.find(d => d.value === val)?.id;
                }

                if (usedId && spainData.SPAIN_VARIANTS[usedId]?.[y]) {
                    // Subtract 1 since the base coin is already counted
                    count += spainData.SPAIN_VARIANTS[usedId][y].length - 1;
                }
            }
        }
    }
    return count;
};

/**
 * Calculates the total size of a period's catalog.
 */
export const calculateWorldPeriodCatalogSize = (country, period, loadedGlobalData = null) => {
    // If period has sub-periods, sum their sizes
    if (period.subPeriods) {
        return period.subPeriods.reduce((acc, subP) => {
            return acc + calculateWorldPeriodCatalogSize(country, {
                ...subP,
                startYear: subP.startYear || period.startYear,
                endYear: subP.endYear || period.endYear
            }, loadedGlobalData);
        }, 0);
    }

    const { startYear, endYear, denominations } = period;

    // Special case for Abjasia: each denomination in the config is a unique coin issue
    if (country === 'Abjasia') {
        return denominations.length;
    }

    const statusFn = STATUS_REGISTRY[country] || (country === 'España' ? loadedGlobalData?.spain?.getSpainCoinStatus : null) || (country === 'República Checa' ? loadedGlobalData?.czech?.getCzechCoinStatus : null) || (country === 'Afganistán' ? loadedGlobalData?.afghan?.getAfghanistanCoinStatus : null);

    if (!statusFn) return (endYear - startYear + 1) * denominations.length;

    let count = 0;
    for (let y = startYear; y <= endYear; y++) {
        denominations.forEach(denom => {
            if (statusFn(y, denom.value, denom.id) !== 'not_issued') {
                count++;

                // Add variants
                if (country === 'España' && loadedGlobalData?.spain?.SPAIN_VARIANTS[denom.id]?.[y]) {
                    count += loadedGlobalData.spain.SPAIN_VARIANTS[denom.id][y].length - 1;
                }
            }
        });
    }
    return count;
};

/**
 * Gets the number of years since a country adopted the Euro.
 */
export const getCountryYearsRange = (country) => {
    const data = EURO_DATA[country];
    if (!data) return 0;
    const currentYear = 2026;
    return (currentYear - data.startYear) + 1;
};
