
// Definitions of status
export const STATUS_CIRCULATION = 'circulation'; // Green
export const STATUS_SET_ONLY = 'set_only';       // Yellow
export const STATUS_NOT_ISSUED = 'not_issued';   // Red

// Default to circulation if not specified
const DEFAULT_STATUS = STATUS_CIRCULATION;

// Ranges based on visual interpretation of user tables
// NOTE: This is a simplification. Real data is very granular.
// We focus on the "Red" (Not Issued) 2 Euro coins first, and major "Set Only" blocks.

export const getGermanCoinStatus = (year, mint, value) => {
    // Value is float (e.g. 0.01, 2.00)

    // === 2 EURO STANDARD ===
    if (value === 2.00) {
        // Red Zone: Not Issued
        const notIssuedYears = [2007, 2009, 2012, 2013, 2015, 2018];
        if (notIssuedYears.includes(year)) return STATUS_NOT_ISSUED;

        // Yellow Zone: Set Only
        // 2004: F, G
        if (year === 2004 && ['F', 'G'].includes(mint)) return STATUS_SET_ONLY;
        // 2005, 2006, 2022: All
        if ([2005, 2006, 2022].includes(year)) return STATUS_SET_ONLY;
    }

    // === 1 EURO STANDARD ===
    if (value === 1.00) {
        // Yellow Zone: Set Only
        // 2003: D, F, G
        if (year === 2003 && ['D', 'F', 'G'].includes(mint)) return STATUS_SET_ONLY;
        // 2004: J
        if (year === 2004 && mint === 'J') return STATUS_SET_ONLY;
        // 2005: A, D, F, G
        if (year === 2005 && ['A', 'D', 'F', 'G'].includes(mint)) return STATUS_SET_ONLY;
        // 2006-2025: All
        if (year >= 2006 && year <= 2025) return STATUS_SET_ONLY;
    }

    // === 50 CENT ===
    if (value === 0.50) {
        // Yellow Zone: Set Only
        // 2003: A, F, G
        if (year === 2003 && ['A', 'F', 'G'].includes(mint)) return STATUS_SET_ONLY;
        // 2004: D, J
        if (year === 2004 && ['D', 'J'].includes(mint)) return STATUS_SET_ONLY;
        // 2005-2021: All
        if (year >= 2005 && year <= 2021) return STATUS_SET_ONLY;
    }

    // === 20 CENT ===
    if (value === 0.20) {
        // Yellow Zone: Set Only
        // 2003: J
        if (year === 2003 && mint === 'J') return STATUS_SET_ONLY;
        // 2004: A, F, G, J
        if (year === 2004 && ['A', 'F', 'G', 'J'].includes(mint)) return STATUS_SET_ONLY;
        // 2025: All 
        // User list said: 2003J-2004A-2004F-2004G-2004J-2025
        // Wait, did they mean ONLY 2025 or a range? "20c... 2025". Usually singular year.
        // Assuming just 2025.
        if (year === 2025) return STATUS_SET_ONLY;
    }

    // === 10 CENT ===
    if (value === 0.10) {
        // Yellow Zone: Set Only
        // 2004: A, J
        if (year === 2004 && ['A', 'J'].includes(mint)) return STATUS_SET_ONLY;
        // 2005-2016: All
        if (year >= 2005 && year <= 2016) return STATUS_SET_ONLY;
        // 2025: All
        if (year === 2025) return STATUS_SET_ONLY;
    }

    // === 5 CENT ===
    if (value === 0.05) {
        // Yellow Zone: Set Only
        if ([2003, 2024, 2025].includes(year)) return STATUS_SET_ONLY;
    }

    // === 2 CENT ===
    if (value === 0.02) {
        // Yellow Zone: Set Only
        if ([2024, 2025].includes(year)) return STATUS_SET_ONLY;
    }

    // === 1 CENT ===
    if (value === 0.01) {
        // Yellow Zone: Set Only
        if ([2003, 2006, 2022, 2025].includes(year)) return STATUS_SET_ONLY;
    }

    // Default
    return STATUS_CIRCULATION;
};
