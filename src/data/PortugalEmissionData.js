// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getPortugalCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === YELLOW: Set Only ===

    // 2003: 1c, 2c, 5c
    if (y === 2003) {
        if ([0.01, 0.02, 0.05].includes(val)) return STATUS_SET_ONLY;
    }

    // 2007: 10c, 20c, 50c, 2€
    if (y === 2007) {
        if ([0.10, 0.20, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2008: 2€
    if (y === 2008 && val === 2.00) return STATUS_SET_ONLY;

    // 2009: 2€
    if (y === 2009 && val === 2.00) return STATUS_SET_ONLY;

    // 2010: 10c, 2€
    if (y === 2010) {
        if ([0.10, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2011: 10c, 50c, 2€
    if (y === 2011) {
        if ([0.10, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2012: 10c, 20c, 50c, 1€, 2€
    if (y === 2012) {
        if ([0.10, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2013: Todas
    if (y === 2013) return STATUS_SET_ONLY;

    // 2014: 5c, 10c, 20c, 50c, 2€
    if (y === 2014) {
        if ([0.05, 0.10, 0.20, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2015: 5c, 10c, 2€
    if (y === 2015) {
        if ([0.05, 0.10, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2016: 2€
    if (y === 2016 && val === 2.00) return STATUS_SET_ONLY;

    // 2017: 2€
    if (y === 2017 && val === 2.00) return STATUS_SET_ONLY;

    // 2018: 1c, 2c, 50c, 2€
    if (y === 2018) {
        if ([0.01, 0.02, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2019: 2c, 20c, 2€
    if (y === 2019) {
        if ([0.02, 0.20, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2020: 2c, 10c, 50c, 2€
    if (y === 2020) {
        if ([0.02, 0.10, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2021: 1c, 2c, 1€, 2€
    if (y === 2021) {
        if ([0.01, 0.02, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2022: Todas
    if (y === 2022) return STATUS_SET_ONLY;

    // 2023: 2c, 10c, 20c, 50c, 1€
    if (y === 2023) {
        if ([0.02, 0.10, 0.20, 0.50, 1.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2024: 1c, 2c, 50c, 2€
    if (y === 2024) {
        if ([0.01, 0.02, 0.50, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // === GREEN: Circulation (The rest) ===
    return STATUS_CIRCULATION;
};
