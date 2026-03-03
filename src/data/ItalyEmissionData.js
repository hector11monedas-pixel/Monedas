const STATUS_CIRCULATION = 'standard'; // Green
const STATUS_SET_ONLY = 'set_only';   // Yellow
const STATUS_NOT_ISSUED = 'not_issued'; // Red

export const getItalyCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2002) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    // 1c: 2003 (Low), 2018-2025 (Prueba)
    if (val === 0.01) {
        if (y === 2003 || y >= 2018) return STATUS_SET_ONLY;
    }

    // 2c: 2003 (21M - Rare enough for yellow), 2018-2025 (Prueba)
    if (val === 0.02) {
        if (y === 2003 || y >= 2018) return STATUS_SET_ONLY;
    }

    // 5c: 2003 (1.8M), 2004 (9.9M)
    if (val === 0.05) {
        if (y === 2003 || y === 2004) return STATUS_SET_ONLY;
    }

    // 10c: 2003 (29M), 2004 (4.9M), 2013-2016 (10-15M)
    // Looking at prices, 10c 2003 is 1.4€ and 2004 is 12€. 2013-2016 are ~1.8€.
    // We'll mark 2004 as yellow. 2003 is borderline but 1.4€ is high-ish for a 10c.
    if (val === 0.10) {
        if (y === 2003 || y === 2004 || (y >= 2013 && y <= 2016)) return STATUS_SET_ONLY;
    }

    // 20c: 2003 (25M), 2004-2008 (4.9M), 2012 (5M), 2015-2017 (5M)
    if (val === 0.20) {
        if (y === 2003 || (y >= 2004 && y <= 2008) || y === 2012 || (y >= 2015 && y <= 2017)) return STATUS_SET_ONLY;
    }

    // 50c: 2003 (44M), 2004-2008 (4.9M), 2009 (2.4M), 2011-2018 (Low)
    if (val === 0.50) {
        if (y === 2003 || (y >= 2004 && y <= 2008) || y === 2009 || (y >= 2011 && y <= 2018)) return STATUS_SET_ONLY;
    }

    // 1€: 2004-2005 (4.9M), 2012-2023 (Low mintage < 5M, mostly < 1M recently)
    if (val === 1.00) {
        if (y === 2004 || y === 2005 || y >= 2012) return STATUS_SET_ONLY;
    }

    // 2€: 2004 (6.9M), 2007 (4.9M), 2008 (2.5M), 2009 (1.9M), 2014-2015 (Low), 2017 (Low), 2019 (Low)
    if (val === 2.00) {
        if (y === 2004 || y === 2007 || y === 2008 || y === 2009 || y === 2014 || y === 2015 || y === 2017 || y === 2019) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};

export const getEmissionStatus = getItalyCoinStatus;
