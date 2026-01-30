// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getMaltaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === RED: Not Issued ===
    // 2009: All
    if (y === 2009) return STATUS_NOT_ISSUED;

    // 2010: 1c, 2c, 5c, 10c, 20c, 50c, 1€ (All except 2€)
    if (y === 2010 && val !== 2.00) return STATUS_NOT_ISSUED;

    // === GREEN: Circulation ===
    // 2008: All
    if (y === 2008) return STATUS_CIRCULATION;

    // 2010: 2€ (Implicitly handled if we return set_only for others, but let's be explicit)
    if (y === 2010 && val === 2.00) return STATUS_CIRCULATION;

    // 2013: 1c, 2c, 5c, 50c, 2€
    if (y === 2013) {
        if ([0.01, 0.02, 0.05, 0.50, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2014: User listed empty, implying None -> Yellow default.

    // 2015: 2c, 5c, 2€
    if (y === 2015) {
        if ([0.02, 0.05, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2016: 1c, 2c, 5c, 10c, 20c, 50c, 1€, 2€ (All)
    if (y === 2016) return STATUS_CIRCULATION;

    // 2017: 1c, 5c, 10c, 50c, 1€
    if (y === 2017) {
        if ([0.01, 0.05, 0.10, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2018: 1c, 2c
    if (y === 2018) {
        if ([0.01, 0.02].includes(val)) return STATUS_CIRCULATION;
    }

    // 2019: 1c, 5c, 10c, 20c, 50c, 1€
    if (y === 2019) {
        if ([0.01, 0.05, 0.10, 0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2020: 2c, 5c, 10c, 20c, 50c, 1€
    if (y === 2020) {
        if ([0.02, 0.05, 0.10, 0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2021: 1c, 2c, 5c, 10c, 20c, 50c, 1€
    if (y === 2021) {
        if ([0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2022: 1c, 2c, 5c, 10c, 20c
    if (y === 2022) {
        if ([0.01, 0.02, 0.05, 0.10, 0.20].includes(val)) return STATUS_CIRCULATION;
    }

    // 2023: 5c, 10c, 20c, 50c, 1€
    if (y === 2023) {
        if ([0.05, 0.10, 0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2024: 20c
    if (y === 2024 && val === 0.20) return STATUS_CIRCULATION;

    // 2025: 2c, 20c, 2€
    if (y === 2025) {
        if ([0.02, 0.20, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2026: All
    if (y === 2026) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else) ===
    return STATUS_SET_ONLY;
};
