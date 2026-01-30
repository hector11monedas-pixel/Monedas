// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getFranceCoinStatus = (year, mint, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // 2c (0.02) - 2002
    if (val === 0.02) {
        if (y === 2002) return STATUS_SET_ONLY;
    }

    // 20c (0.20) - 2003-2006, 2012, 2016
    if (val === 0.20) {
        if ([2003, 2004, 2005, 2006, 2012, 2016].includes(y)) return STATUS_SET_ONLY;
    }

    // 50c (0.50) - 2003 to 2017
    if (val === 0.50) {
        if (y >= 2003 && y <= 2017) return STATUS_SET_ONLY;
    }

    // 1€ (1.00) - 2003 to 2022
    if (val === 1.00) {
        if (y >= 2003 && y <= 2022) return STATUS_SET_ONLY;
    }

    // 2€ (2.00) - 2003 to 2010
    if (val === 2.00) {
        if (y >= 2003 && y <= 2010) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
