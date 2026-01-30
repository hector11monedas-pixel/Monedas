// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getItalyCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // 1c and 2c (0.01, 0.02) - 2018 to 2025
    if (val === 0.01 || val === 0.02) {
        if (y >= 2018 && y <= 2025) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
