// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getSanMarinoCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === GREEN: Circulation ===

    // 2002: 20c (182k), 50c (110k), 1€ (240k), 2€ (135k)
    if (y === 2002 && [0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;

    // 2003: 20c (360k), 50c (345k)
    if (y === 2003 && [0.20, 0.50].includes(val)) return STATUS_CIRCULATION;

    // 2004: 1c (1.5M), 2c (1.4M), 5c (1M)
    if (y === 2004 && [0.01, 0.02, 0.05].includes(val)) return STATUS_CIRCULATION;

    // 2005: 20c (330k), 50c (249k)
    if (y === 2005 && [0.20, 0.50].includes(val)) return STATUS_CIRCULATION;

    // 2006: 50c (193k)
    if (y === 2006 && val === 0.50) return STATUS_CIRCULATION;

    // 2007: 50c (320k)
    if (y === 2007 && val === 0.50) return STATUS_CIRCULATION;

    // 2008: 20c (1.1M), 50c (1.3M)
    if (y === 2008 && [0.20, 0.50].includes(val)) return STATUS_CIRCULATION;

    // 2009: 1€ (1M)
    if (y === 2009 && val === 1.00) return STATUS_CIRCULATION;

    // 2010: 1€ (996k)
    if (y === 2010 && val === 1.00) return STATUS_CIRCULATION;

    // 2011: 2€ (631k)
    if (y === 2011 && val === 2.00) return STATUS_CIRCULATION;

    // 2012: 2€ (673k)
    if (y === 2012 && val === 2.00) return STATUS_CIRCULATION;

    // 2013: 20c (65k), 50c (77k), 1€ (417k), 2€ (637k)
    if (y === 2013 && [0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;

    // 2014: 1€ (1.5M), 50c (723k)
    if (y === 2014 && [0.50, 1.00].includes(val)) return STATUS_CIRCULATION;

    // 2015: 20c (50k), 50c (750k), 1€ (1.6M)
    if (y === 2015 && [0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;

    // 2016: 20c (200k), 2€ (874k)
    if (y === 2016 && [0.20, 2.00].includes(val)) return STATUS_CIRCULATION;

    // 2017: 20c (1.3M), 1€ (500k), 2€ (600k)
    if (y === 2017 && [0.20, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;

    // 2018: 20c (600k), 50c (1.1M), 1€ (1.1M)
    if (y === 2018 && [0.20, 0.50, 1.00].includes(val)) return STATUS_CIRCULATION;

    // 2019-2020: 50c, 1€, 2€ (Bajo mintage pero no marcadas como Prueba)
    if ((y === 2019 || y === 2020) && [0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;

    // 2021-2022: Solo coleccionismo (Tiradas muy bajas <30k)
    if ((y === 2021 || y === 2022)) return STATUS_SET_ONLY;

    // 2023-2026: 20c, 50c, 1€, 2€ (Vuelven las tiradas para circulación)
    if (y >= 2023 && [0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else) ===
    return STATUS_SET_ONLY;
};

export const getEmissionStatus = getSanMarinoCoinStatus;
