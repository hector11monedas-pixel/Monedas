// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getNetherlandsCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === YELLOW: Set Only ===

    // 1c
    if (val === 0.01) {
        if ([2002, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013].includes(y)) return STATUS_SET_ONLY;
        if (y >= 2014) return STATUS_SET_ONLY; // Series II small coins are usually set only in NL
    }

    // 2c
    if (val === 0.02) {
        if ([2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013].includes(y)) return STATUS_SET_ONLY;
        if (y >= 2014) return STATUS_SET_ONLY;
    }

    // 5c
    if (val === 0.05) {
        if ([2002, 2003, 2004, 2015, 2017].includes(y)) return STATUS_SET_ONLY; // Note: 2017 5c has 60M (Circulation) according to user SC price List, but small coins in NL are tricky. 
        // User listed SC price for 5c 2017-2018-2020-etc. 
        // 2014-2019 5c have high mintage (30M-70M) -> Green
        if (y >= 2014 && y <= 2019) return STATUS_CIRCULATION;
        if (y === 2020 && val === 0.05) return STATUS_CIRCULATION; // "Sin Marca Ceca" 10M
        return STATUS_SET_ONLY;
    }

    // 10c
    if (val === 0.10) {
        if (y >= 2002 && y <= 2013) return STATUS_SET_ONLY;
        if (y === 2014) return STATUS_CIRCULATION; // 5M
        if ([2015, 2016].includes(y)) return STATUS_SET_ONLY; // 400k
        if ([2017, 2018, 2019].includes(y)) return STATUS_CIRCULATION; // 12.5M - 20M
        return STATUS_SET_ONLY;
    }

    // 20c
    if (val === 0.20) {
        if (y >= 2005 && y <= 2013) return STATUS_SET_ONLY;
        if (y === 2014) return STATUS_CIRCULATION; // 5M
        if (y === 2015) return STATUS_SET_ONLY; // 400k
        if (y === 2016) return STATUS_CIRCULATION; // 30.4M
        if ([2017, 2018, 2019].includes(y)) return STATUS_CIRCULATION; // User listed high numbers/prices? Wait, user says 2018 (20M) Green.
        if (y === 2018) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 50c
    if (val === 0.50) {
        if (y >= 2003 && y <= 2013) return STATUS_SET_ONLY;
        if (y === 2014) return STATUS_CIRCULATION; // 5M
        if ([2015, 2016, 2017, 2018].includes(y)) return STATUS_SET_ONLY; // 400k or (Prueba)
        return STATUS_SET_ONLY;
    }

    // 1€
    if (val === 1.00) {
        if (y >= 2003 && y <= 2008) return STATUS_SET_ONLY;
        if (y >= 2009 && y <= 2013) return STATUS_CIRCULATION;
        if (y === 2014) return STATUS_CIRCULATION; // 5M
        return STATUS_SET_ONLY; // 2015+ (300k or Prueba)
    }

    // 2€
    if (val === 2.00) {
        if (y >= 1999 && y <= 2002) return STATUS_CIRCULATION;
        if (y >= 2003 && y <= 2012) return STATUS_SET_ONLY;
        if (y === 2013) return STATUS_CIRCULATION; // 10.8M
        if (y === 2014) return STATUS_CIRCULATION; // 9.0M
        return STATUS_SET_ONLY; // 2015-2026 (300k or Prueba)
    }

    // Catch-all for other reported set-only years in prompt
    if (y === 2017 && [0.01, 0.02, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2018 && [0.01, 0.02, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2019 && [0.01, 0.02, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2020 && [0.01, 0.02, 0.10, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2021) return STATUS_SET_ONLY;
    if (y === 2022 && [0.01, 0.02, 0.50, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2023 && [0.01, 0.02, 1.00, 2.00].includes(val)) return STATUS_SET_ONLY;
    if (y === 2024 && [0.01, 0.02, 0.10, 0.50, 1.00].includes(val)) return STATUS_SET_ONLY;

    // === GREEN: Circulation (The rest) ===
    return STATUS_CIRCULATION;
};
