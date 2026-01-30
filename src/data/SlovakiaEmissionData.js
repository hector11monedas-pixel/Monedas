
// Helper to generate ranges because the lists are long
// range(2009, 2013) -> [2009, 2010, 2011, 2012, 2013]
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const SLOVAKIA_CIRCULATION = {
    '1c': [
        // 2009: Todas
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2026
    ],
    '2c': [
        // 2009: Todas
        2009, 2010, 2011, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2026
    ],
    '5c': [
        // 2009: Todas
        2009, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
    ],
    '10c': [
        // 2009: Todas
        2009, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
    ],
    '20c': [
        // 2009: Todas
        2009, 2026
    ],
    '50c': [
        // 2009: Todas
        2009, 2026
    ],
    '1€': [
        // 2009: Todas
        2009, 2021, 2024, 2025, 2026
    ],
    '2€': [
        // 2009: Todas
        2009, 2011, 2015, 2016, 2017, 2020, 2022, 2024, 2025, 2026
    ]
};

export const getSlovakiaCoinStatus = (year, denomination) => {
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

    const circulationYears = SLOVAKIA_CIRCULATION[key];

    // If year is in the circulation list, it's standard (Circulation/Green)
    if (circulationYears && circulationYears.includes(y)) {
        return 'standard';
    }

    // Otherwise, it's Set Only (Yellow)
    // The user said: "Las que te digo son verdes, las demas amarillas"
    return 'set_only';
};
