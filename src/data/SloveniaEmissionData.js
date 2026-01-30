
const SLOVENIA_CIRCULATION = {
    '1c': [
        // 2007: Todas
        2007, 2008, 2015, 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
    ],
    '2c': [
        // 2007: Todas
        2007, 2008, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
    ],
    '5c': [
        // 2007: Todas
        2007, 2019, 2021, 2022, 2023, 2024, 2026
    ],
    '10c': [
        // 2007: Todas
        2007, 2018, 2019, 2021, 2022, 2023, 2024, 2026
    ],
    '20c': [
        // 2007: Todas
        2007, 2019, 2022, 2023, 2024, 2026
    ],
    '50c': [
        // 2007: Todas
        2007, 2021, 2024, 2026
    ],
    '1€': [
        // 2007: Todas
        2007, 2026
    ],
    '2€': [
        // 2007: Todas
        2007, 2020, 2021, 2022, 2023, 2024, 2026
    ]
};

export const getSloveniaCoinStatus = (year, denomination) => {
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

    const circulationYears = SLOVENIA_CIRCULATION[key];

    // If year is in the circulation list, it's standard (Circulation/Green)
    if (circulationYears && circulationYears.includes(y)) {
        return 'standard';
    }

    // Otherwise, it's Set Only (Yellow)
    // Years 2009-2014, 2017 etc are fully yellow if not in list
    return 'set_only';
};
