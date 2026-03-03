const STATUS_CIRCULATION = 'standard'; // Green
const STATUS_SET_ONLY = 'set_only';   // Yellow
const STATUS_NOT_ISSUED = 'not_issued'; // Red

export const getFranceCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 1999) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    // 1c: 2002 (325k), 2021 (120k)
    if (val === 0.01) {
        if (y === 2002 || y === 2021) return STATUS_SET_ONLY;
    }
    // 2c: 2002 (224k), 2021 (140k)
    if (val === 0.02) {
        if (y === 2002 || y === 2021) return STATUS_SET_ONLY;
    }
    // 5c: 2021 (100k)
    if (val === 0.05) {
        if (y === 2021) return STATUS_SET_ONLY;
    }

    // 10c: 2021 (80k)
    if (val === 0.10) {
        if (y === 2021) return STATUS_SET_ONLY;
    }

    // 20c: 2003-2006 (Prueba), 2012 (Prueba), 2016 (Prueba), 2021 (140k)
    if (val === 0.20) {
        if ([2003, 2004, 2005, 2006, 2012, 2016, 2021].includes(y)) return STATUS_SET_ONLY;
    }

    // 50c: 2003-2017 (Prueba), 2021 (80k)
    if (val === 0.50) {
        if ((y >= 2003 && y <= 2017) || y === 2021) return STATUS_SET_ONLY;
    }

    // 1€: 2003-2021 (Prueba/60k), 2022-2026 (Prueba)
    if (val === 1.00) {
        if (y >= 2003 && y <= 2026) return STATUS_SET_ONLY;
    }

    // 2€: 2003-2010 (Prueba), 2021 (80k)
    if (val === 2.00) {
        if ((y >= 2003 && y <= 2010) || y === 2021) return STATUS_SET_ONLY;
    }

    // Default to circulation
    return STATUS_CIRCULATION;
}

/**
 * Determines the series index for French Euro coins.
 * 1c-5c: Always Series 0.
 * 10c-50c: Series 0 (1999-2023), Series 1 (2024-Present).
 * 1€-2€: Series 0 (1999-2021), Series 1 (2022-Present).
 */
export const getFranceSeriesIndex = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (val <= 0.05) return 0;

    if (val <= 0.50) {
        return y >= 2024 ? 1 : 0;
    }

    if (val <= 2.00) {
        return y >= 2022 ? 1 : 0;
    }

    return 0;
};

export const getEmissionStatus = getFranceCoinStatus;
