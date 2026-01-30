// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getGreeceCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // 5c (0.05) - 2013
    if (val === 0.05) {
        if (y === 2013) return STATUS_SET_ONLY;
    }

    // 10c (0.10) - 2012, 2014, 2015, 2021, 2022
    if (val === 0.10) {
        if ([2012, 2014, 2015, 2021, 2022].includes(y)) return STATUS_SET_ONLY;
    }

    // 20c (0.20) - 2012 to 2018
    if (val === 0.20) {
        if (y >= 2012 && y <= 2018) return STATUS_SET_ONLY;
    }

    // 50c (0.50) - 2012 to 2018, 2022
    if (val === 0.50) {
        if ((y >= 2012 && y <= 2018) || y === 2022) return STATUS_SET_ONLY;
    }

    // 1€ (1.00) - 2012 to 2022
    if (val === 1.00) {
        if (y >= 2012 && y <= 2022) return STATUS_SET_ONLY;
    }

    // 2€ (2.00) - 2004, 2007, 2011 to 2022
    if (val === 2.00) {
        if ([2004, 2007].includes(y)) return STATUS_SET_ONLY;
        if (y >= 2011 && y <= 2022) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
