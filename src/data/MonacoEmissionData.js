// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getMonacoCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === RED: Not Issued ===
    // 2003: 1c, 2c, 5c
    if (y === 2003) {
        if ([0.01, 0.02, 0.05].includes(val)) return STATUS_NOT_ISSUED;
    }
    // 2005: 10c, 20c, 50c, 1€, 2€ (All except 1c, 2c, 5c implied?)
    // Note: User said 2005: 10c..2e are RED.
    if (y === 2005) {
        if ([0.10, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_NOT_ISSUED;
    }
    // 2007: 1c, 2c, 5c, 10c, 20c, 50c, 2€ (Red) -> Only 1€ is Green (handled below)
    if (y === 2007) {
        if (val !== 1.00) return STATUS_NOT_ISSUED;
    }
    // 2008: All
    if (y === 2008) return STATUS_NOT_ISSUED;
    // 2010: 1c - 1€ (Red) -> 2€ is Yellow/Green? (User didn't specify 2€ as Green for 2010, so it falls to Yellow)
    if (y === 2010) {
        if (val !== 2.00) return STATUS_NOT_ISSUED;
    }
    // 2012: 1c - 1€ (Red) -> 2€ is Green below
    if (y === 2012) {
        if (val !== 2.00) return STATUS_NOT_ISSUED;
    }
    // 2015: 1c - 1€ (Red) -> 2€ is Green below
    if (y === 2015) {
        if (val !== 2.00) return STATUS_NOT_ISSUED;
    }
    // 2016: 1c - 50c (Red) -> 1€, 2€ Green below
    if (y === 2016) {
        if (val < 1.00) return STATUS_NOT_ISSUED;
    }
    // 2018, 2019, 2021, 2022, 2023, 2024: 1c - 50c (Red)
    if ([2018, 2019, 2021, 2022, 2023, 2024].includes(y)) {
        if (val < 1.00) return STATUS_NOT_ISSUED;
    }
    // Note: 2020 was not in Red list, but 2020 1e, 2e are Green. Smaller ones -> Yellow?
    // User didn't list 2020 in Red. So 1c-50c 2020 -> Yellow.

    // === GREEN: Circulation ===
    // 2001: All
    if (y === 2001) return STATUS_CIRCULATION;
    // 2002, 2003: 10c, 20c, 50c, 1€, 2€
    if (y === 2002 || y === 2003) {
        if ([0.10, 0.20, 0.50, 1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }
    // 2007: 1€
    if (y === 2007 && val === 1.00) return STATUS_CIRCULATION;
    // 2009: 2€
    if (y === 2009 && val === 2.00) return STATUS_CIRCULATION;
    // 2011: 2€
    if (y === 2011 && val === 2.00) return STATUS_CIRCULATION;
    // 2012: 2€
    if (y === 2012 && val === 2.00) return STATUS_CIRCULATION;
    // 2014: 1€, 2€
    if (y === 2014) {
        if ([1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }
    // 2015: 2€
    if (y === 2015 && val === 2.00) return STATUS_CIRCULATION;
    // 2016 - 2025: 1€, 2€
    // (User listed 2016, 2017(2e only), 2018-2025(1e, 2e))
    // Let's do specific years to be safe.

    // 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025: 1€, 2€
    if ([2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].includes(y)) {
        if ([1.00, 2.00].includes(val)) return STATUS_CIRCULATION;
    }
    // 2017: 2€ Only
    if (y === 2017 && val === 2.00) return STATUS_CIRCULATION;

    // 2026: All
    if (y === 2026) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else) ===
    return STATUS_SET_ONLY;
};
