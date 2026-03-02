// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getMaltaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Malta joined Euro in 2008
    if (y < 2008 || y > 2026) return STATUS_NOT_ISSUED;

    // Red: Not Issued
    if (y === 2009) return STATUS_NOT_ISSUED;
    if (y === 2010 && val !== 2.00) return STATUS_NOT_ISSUED;

    // Circulation logic (Green) based on user data
    // High mintage (>100k-250k and not marked as Prueba)

    // 1c
    if (val === 0.01) {
        if ([2008, 2013, 2016, 2019].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 2c
    if (val === 0.02) {
        if ([2008, 2013, 2015, 2016, 2020].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 5c
    if (val === 0.05) {
        if ([2008, 2013, 2015, 2016, 2018, 2020, 2022, 2023, 2024, 2025].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 10c
    if (val === 0.10) {
        if ([2008, 2016, 2018, 2020, 2022, 2023, 2024, 2025].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 20c
    if (val === 0.20) {
        if ([2008, 2016, 2021, 2022, 2023, 2024, 2025].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 50c
    if (val === 0.50) {
        if ([2008, 2013, 2016, 2017, 2023, 2024, 2025].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 1€
    if (val === 1.00) {
        if ([2008, 2016, 2017, 2021, 2023].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    // 2€
    if (val === 2.00) {
        if ([2008, 2010, 2013, 2016, 2023, 2024, 2025].includes(y)) return STATUS_CIRCULATION;
        return STATUS_SET_ONLY;
    }

    return STATUS_SET_ONLY;
};

