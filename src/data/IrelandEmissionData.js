// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getIrelandCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // 2015: 1c, 2c
    if (y === 2015) {
        if ([0.01, 0.02].includes(val)) return STATUS_SET_ONLY;
    }

    // 2019: 1c, 2c, 20c, 50c, 1e, 2e
    if (y === 2019) {
        if ([0.01, 0.02, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    }

    // 2021 to 2025: All
    if (y >= 2021 && y <= 2025) {
        return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
