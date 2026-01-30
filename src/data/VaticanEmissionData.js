
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const getVaticanCoinStatus = (year, denomination, variant = null) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Default to Set Only (Yellow)
    let status = 'set_only';

    // Exceptions (Green/Standard)

    // 1. All denominations for specific years
    // 2002, 2008, 2009, 2026
    if ([2002, 2008, 2009, 2026].includes(y)) {
        status = 'standard';
    }

    // 2. Specific Denominations
    // 50c: 2010 to 2026
    if (val === 0.50 && y >= 2010 && y <= 2026) {
        status = 'standard';
    }

    // 1€: 2022 to 2026
    if (val === 1.00 && y >= 2022 && y <= 2026) {
        status = 'standard';
    }

    // Note: 2005 SV and 2005 JP II are likely both Sets (Yellow) 
    // unless covered by rule 1 (which they aren't, 2005 is not in the list).

    return status;
};
