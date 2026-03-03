// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getPortugalCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === YELLOW: Set Only ===

    // 1c
    if (val === 0.01) {
        if ([2003, 2013, 2018, 2021, 2022, 2024, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
    }

    // 2c
    if (val === 0.02) {
        if ([2003, 2013, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
    }

    // 5c
    if (val === 0.05) {
        if ([2003, 2013, 2014, 2015, 2022, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
    }

    // 10c
    if (val === 0.10) {
        if ([2007, 2010, 2011, 2012, 2013, 2014, 2015, 2020, 2022, 2023, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
        // 2002-2006, 2008-2009, 2016-2019, 2021, 2024 are issued
    }

    // 20c
    if (val === 0.20) {
        if ([2007, 2012, 2013, 2014, 2019, 2022, 2023, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
        if (y === 2004 || y === 2008) return STATUS_SET_ONLY; // 1M
    }

    // 50c
    if (val === 0.50) {
        if ([2007, 2011, 2012, 2013, 2014, 2018, 2020, 2022, 2023, 2024, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
        if ([2004, 2005, 2006].includes(y)) return STATUS_SET_ONLY; // 1M
    }

    // 1€
    if (val === 1.00) {
        if ([2012, 2013, 2021, 2022, 2023, 2025, 2026, 2027].includes(y)) return STATUS_SET_ONLY;
    }

    // 2€
    if (val === 2.00) {
        if ([2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024, 2025, 2026].includes(y)) return STATUS_SET_ONLY;
        if ([2004, 2005, 2006].includes(y)) return STATUS_SET_ONLY; // 1M
    }


    // === GREEN: Circulation (The rest) ===
    return STATUS_CIRCULATION;
};

export const getEmissionStatus = getPortugalCoinStatus;
