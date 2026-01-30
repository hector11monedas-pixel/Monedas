// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getLithuaniaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === RED: Not Issued ===
    // 2016: 2c, 5c, 10c, 20c, 50c, 1€, 2€ (All except 1c)
    if (y === 2016 && val !== 0.01) return STATUS_NOT_ISSUED;

    // 2017: 5c, 50c, 1€
    if (y === 2017) {
        if ([0.05, 0.50, 1.00].includes(val)) return STATUS_NOT_ISSUED;
    }

    // === GREEN: Circulation ===
    // 2015: All
    if (y === 2015) return STATUS_CIRCULATION;

    // 2016: 1c
    if (y === 2016 && val === 0.01) return STATUS_CIRCULATION;

    // 2017: 1c, 2c, 10c, 20c, 2€
    if (y === 2017) {
        if ([0.01, 0.02, 0.10, 0.20, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2020: 2€
    if (y === 2020 && val === 2.00) return STATUS_CIRCULATION;

    // 2021: 5c, 10c, 2€
    if (y === 2021) {
        if ([0.05, 0.10, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2022: 5c
    if (y === 2022 && val === 0.05) return STATUS_CIRCULATION;

    // 2023: 5c, 10c
    if (y === 2023) {
        if ([0.05, 0.10].includes(val)) return STATUS_CIRCULATION;
    }

    // 2024: 5c, 2€
    if (y === 2024) {
        if ([0.05, 2.00].includes(val)) return STATUS_CIRCULATION;
    }

    // 2025: All
    if (y === 2025) return STATUS_CIRCULATION;

    // 2026: All
    if (y === 2026) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else) ===
    return STATUS_SET_ONLY;
};
