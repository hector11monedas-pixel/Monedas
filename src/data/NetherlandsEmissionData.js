// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getNetherlandsCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === YELLOW: Set Only ===

    // 2017: 1c 2c 20c 50c 1€ 2€
    if (y === 2017) {
        if ([0.01, 0.02, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2018 (User typed 2028, assuming typo for 2018): 1c 2c 50c 1€ 2€
    if (y === 2018) {
        if ([0.01, 0.02, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2019: 1c 2c 20c 50c 1€ 2€
    if (y === 2019) {
        if ([0.01, 0.02, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2020: 1c 2c 10c 20c 50c 1€ 2€ (All except 5c)
    if (y === 2020) {
        if ([0.01, 0.02, 0.10, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2021: 1c 2c 5c 10c 20c 50c 1€ 2€ (All coins)
    if (y === 2021) return STATUS_SET_ONLY;

    // 2022: 1c 2c 50c 1€ 2€
    if (y === 2022) {
        if ([0.01, 0.02, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2023: 1c 2c 1€ 2€
    if (y === 2023) {
        if ([0.01, 0.02, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2024: 1c 2c 10c 50c 1€
    if (y === 2024) {
        if ([0.01, 0.02, 0.10, 0.50, 1.00].includes(val)) return STATUS_SET_ONLY;
    }

    // === GREEN: Circulation (The rest) ===
    return STATUS_CIRCULATION;
};
