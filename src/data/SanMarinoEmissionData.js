// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getSanMarinoCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === GREEN: Circulation ===

    // 2002: 20c, 50c, 1€, 2€
    if (y === 2002) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2003: 20c, 50c
    if (y === 2003) {
        if ([0.20, 0.50].includes(val)) return STATUS_CIRCULATION;
    }

    // 2004: 1c, 2c, 5c
    if (y === 2004) {
        if ([0.01, 0.02, 0.05].includes(val)) return STATUS_CIRCULATION;
    }

    // 2005: 20c, 50c
    if (y === 2005) {
        if ([0.20, 0.50].includes(val)) return STATUS_CIRCULATION;
    }

    // 2006: 50c
    if (y === 2006 && val === 0.50) return STATUS_CIRCULATION;

    // 2007: 50c
    if (y === 2007 && val === 0.50) return STATUS_CIRCULATION;

    // 2008: 20c, 50c
    if (y === 2008) {
        if ([0.20, 0.50].includes(val)) return STATUS_CIRCULATION;
    }

    // 2009: 1€
    if (y === 2009 && val === 1.00) return STATUS_CIRCULATION;

    // 2010: 1€
    if (y === 2010 && val === 1.00) return STATUS_CIRCULATION;

    // 2011: 2€
    if (y === 2011 && val === 2.00) return STATUS_CIRCULATION;

    // 2012: 2€
    if (y === 2012 && val === 2.00) return STATUS_CIRCULATION;

    // 2013: 20c, 50c, 1€, 2€
    if (y === 2013) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2014: 50c, 1€
    if (y === 2014) {
        if ([0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2015: 20c, 50c, 1€
    if (y === 2015) {
        if ([0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2016: 20c, 2€
    if (y === 2016) {
        if ([0.20, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2017: 20c, 1€, 2€
    if (y === 2017) {
        if ([0.20, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2018: 20c, 50c, 1€
    if (y === 2018) {
        if ([0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2019: 50c, 1€, 2€
    if (y === 2019) {
        if ([0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2020: 50c, 1€, 2€
    if (y === 2020) {
        if ([0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2021: 20c, 50c, 1€, 2€
    if (y === 2021) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2022: 50c, 1€, 2€
    if (y === 2022) {
        if ([0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2023: 20c, 50c, 1€, 2€
    if (y === 2023) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2024: 20c, 50c, 1€, 2€
    if (y === 2024) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2025: 20c, 50c, 1€, 2€
    if (y === 2025) {
        if ([0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2026: Todas
    if (y === 2026) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else) ===
    return STATUS_SET_ONLY;
};
