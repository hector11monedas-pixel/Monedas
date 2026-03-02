const STATUS_CIRCULATION = 'standard'; // Green
const STATUS_SET_ONLY = 'set_only';   // Yellow
const STATUS_NOT_ISSUED = 'not_issued'; // Red

export const getGreeceCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2002) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    // 5c: 2004 (Low / 3.5€ SC), 2013 (Prueba)
    if (val === 0.05) {
        if (y === 2004 || y === 2013) return STATUS_SET_ONLY;
    }

    // 10c: 2012, 2014, 2015, 2021, 2022 are Pruebas.
    if (val === 0.10) {
        if ([2012, 2014, 2015, 2021, 2022].includes(y)) return STATUS_SET_ONLY;
    }

    // 20c: 2012-2018 are Pruebas.
    if (val === 0.20) {
        if (y >= 2012 && y <= 2018) return STATUS_SET_ONLY;
    }

    // 50c: 2012-2018, 2022 are Pruebas.
    if (val === 0.50) {
        if ((y >= 2012 && y <= 2018) || y === 2022) return STATUS_SET_ONLY;
    }

    // 1€: 2012-2022 are Pruebas.
    if (val === 1.00) {
        if (y >= 2012 && y <= 2022) return STATUS_SET_ONLY;
    }

    // 2€: 2004, 2007, 2011-2022 are Pruebas.
    if (val === 2.00) {
        if ([2004, 2007].includes(y) || (y >= 2011 && y <= 2022)) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
