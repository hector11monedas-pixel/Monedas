
export const STATUS_CIRCULATION = 'standard'; // Green
export const STATUS_SET_ONLY = 'set_only';   // Yellow
export const STATUS_NOT_ISSUED = 'not_issued'; // Red

const ESTONIA_CIRCULATION = {
    '1c': [2011, 2012, 2015, 2017, 2018, 2019, 2022, 2026],
    '2c': [2011, 2012, 2015, 2017, 2018, 2020, 2021, 2022, 2026],
    '5c': [2011, 2017, 2018, 2022, 2023, 2026],
    '10c': [2011, 2018, 2022, 2023, 2026],
    '20c': [2011, 2017, 2018, 2020, 2021, 2023, 2026],
    '50c': [2011, 2018, 2026],
    '1€': [2011, 2018, 2026],
    '2€': [2011, 2018, 2023, 2026]
};

const ESTONIA_SETS = {
    '1c': [2016],
    '2c': [2016],
    '5c': [2016],
    '10c': [2016],
    '20c': [2016, 2022],
    '50c': [2016, 2022],
    '1€': [2016, 2022],
    '2€': [2016, 2022]
};

export const getEstoniaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Estonia started in 2011
    if (y < 2011) return STATUS_NOT_ISSUED;

    // Map denom value to key
    let key = null;
    if (val === 0.01) key = '1c';
    else if (val === 0.02) key = '2c';
    else if (val === 0.05) key = '5c';
    else if (val === 0.10) key = '10c';
    else if (val === 0.20) key = '20c';
    else if (val === 0.50) key = '50c';
    else if (val === 1.00) key = '1€';
    else if (val === 2.00) key = '2€';

    if (!key) return STATUS_CIRCULATION;

    // Check Circulation (Green)
    if (ESTONIA_CIRCULATION[key]?.includes(y)) {
        return STATUS_CIRCULATION;
    }

    // Check Sets (Yellow)
    if (ESTONIA_SETS[key]?.includes(y)) {
        return STATUS_SET_ONLY;
    }

    // Default: Not Issued (Red)
    return STATUS_NOT_ISSUED;
};
