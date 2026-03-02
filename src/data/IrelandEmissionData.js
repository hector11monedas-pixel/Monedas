const STATUS_CIRCULATION = 'standard'; // Green
const STATUS_SET_ONLY = 'set_only';   // Yellow
const STATUS_NOT_ISSUED = 'not_issued'; // Red

export const getIrelandCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2002) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    // 1c: 2015-2025 (Low mintage or Prueba)
    if (val === 0.01) {
        if (y >= 2015) return STATUS_SET_ONLY;
    }

    // 2c: 2015-2025 (Low mintage or Prueba)
    if (val === 0.02) {
        if (y >= 2015) return STATUS_SET_ONLY;
    }

    // 5c: 2010-2017 (Low), 2021-2025 (Prueba). 2018-2020 are circulation.
    if (val === 0.05) {
        if ((y >= 2010 && y <= 2017) || y >= 2021) return STATUS_SET_ONLY;
    }

    // 10c: 2010-2014 (Low), 2017 (Low), 2018 (Prueba), 2020-2025 (Prueba)
    if (val === 0.10) {
        if ((y >= 2010 && y <= 2014) || y === 2017 || y === 2018 || y >= 2020) return STATUS_SET_ONLY;
    }

    // 20c: 2010-2017 (Low), 2018-2025 (Prueba)
    if (val === 0.20) {
        if (y >= 2010) return STATUS_SET_ONLY;
    }

    // 50c: 2008 (Low), 2010-2017 (Low), 2018-2025 (Prueba)
    if (val === 0.50) {
        if (y === 2008 || y >= 2010) return STATUS_SET_ONLY;
    }

    // 1€: 2010-2017 (Low), 2018-2025 (Prueba)
    if (val === 1.00) {
        if (y >= 2010) return STATUS_SET_ONLY;
    }

    // 2€: 2004 (Low), 2009 (Low), 2011 (Low), 2013 (Low), 2017 (Low), 2018-2025 (Prueba)
    if (val === 2.00) {
        if ([2004, 2009, 2011, 2013].includes(y) || y >= 2017) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
