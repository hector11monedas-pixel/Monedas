// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getMonacoCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Monaco joined Euro in 2001
    if (y < 2001 || y > 2026) return STATUS_NOT_ISSUED;

    // Red: Not Issued (Strict cases)
    if (y === 2008) return STATUS_NOT_ISSUED;
    if (y === 2005 && ![0.01, 0.02, 0.05].includes(val)) return STATUS_NOT_ISSUED;
    if (y === 2007 && val !== 1.00) return STATUS_NOT_ISSUED;
    if (y === 2010 && val !== 2.00) return STATUS_NOT_ISSUED;
    if (y >= 2011 && y <= 2013 && val !== 2.00 && val !== 1.00 && y !== 2013) {
        // Simple catch for red blocks in some years, but user provided Pruebas for most
    }

    // Circulation logic (Green) based on user data

    // 2.00€
    if (val === 2.00) {
        if ([2001, 2002, 2003, 2009, 2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 1.00€
    if (val === 1.00) {
        if ([2001, 2002, 2003, 2007, 2014, 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // Small Denominations (1c - 50c)
    // 2001: All
    if (y === 2001) return STATUS_CIRCULATION;
    // 2002, 2003: 10c, 20c, 50c
    if ((y === 2002 || y === 2003) && val >= 0.10) return STATUS_CIRCULATION;

    // Everything else listed as (Prueba) or low mintage
    // If it's a valid year and not Circulation, it's Set Only
    // BUT we must filter those marked as Red in the previous logic if they aren't Pruebas.
    // The user provided Pruebas for many years (2006, 2009, 2011, 2013, 2014, 2017, 2020, 2025)

    const isPruebaYear = [2006, 2009, 2011, 2013, 2014, 2017, 2020, 2025].includes(y);
    if (isPruebaYear) return STATUS_SET_ONLY;

    // Default catch-alls for specific gaps
    if (y === 2010 && val === 2.00) return STATUS_SET_ONLY; // 2€ 2010 is Prueba
    if (y === 2002 || y === 2004 || y === 2005) {
        if ([0.01, 0.02, 0.05].includes(val)) return STATUS_SET_ONLY;
    }
    if (y === 2004 && val >= 0.10) return STATUS_SET_ONLY;

    // Final fallback: If not explicitly green or red, use set_only for existing years
    return STATUS_SET_ONLY;
};

