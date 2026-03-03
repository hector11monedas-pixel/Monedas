
// Helper to generate ranges because the lists are long
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const BELGIUM_CIRCULATION = {
    '1c': [
        1999, 2001, 2003, 2004, 2006, 2007,
        ...range(2009, 2013),
        ...range(2015, 2017)
    ],
    '2c': [
        2000, 2003, 2004, 2006, 2007, 2009, 2010,
        ...range(2012, 2016)
    ],
    '5c': [
        1999,
        ...range(2003, 2006),
        ...range(2010, 2019),
        2022
    ],
    '10c': [
        1999, 2001, 2002, 2003, 2004, 2005,
        ...range(2010, 2012),
        2015, 2017, 2018, 2019
    ],
    '20c': [
        2000,
        ...range(2002, 2006),
        2008, 2009, 2010, 2011,
        2019
    ],
    '50c': [
        1999, 2002, 2003, 2004,
        2007, 2008, 2009, 2011, 2012, 2013,
        2014, 2015, 2016, 2017, 2019
    ],
    '1€': [
        1999,
        ...range(2002, 2004),
        2008, 2009, 2011, 2012
    ],
    '2€': [
        2000,
        ...range(2002, 2011),
        2019
    ]
};

export const getBelgiumCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

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

    if (!key) return 'standard';

    const circulationYears = BELGIUM_CIRCULATION[key];

    // If year is in the circulation list, it's standard (Green/Transparent)
    if (circulationYears.includes(y)) {
        return 'standard';
    }

    // Otherwise, it's Set Only (Yellow)
    return 'set_only';
};

export const getEmissionStatus = getBelgiumCoinStatus;
