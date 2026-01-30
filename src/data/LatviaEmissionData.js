// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getLatviaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // GREEN: Circulation (Issued for circulation)
    // 2014: All
    if (y === 2014) return STATUS_CIRCULATION;
    // 2016: 1 Euro
    if (y === 2016 && val === 1.00) return STATUS_CIRCULATION;
    // 2019: 5 cents
    if (y === 2019 && val === 0.05) return STATUS_CIRCULATION;
    // 2023: 5 cents
    if (y === 2023 && val === 0.05) return STATUS_CIRCULATION;
    // 2026: All
    if (y === 2026) return STATUS_CIRCULATION;

    // RED: Not Issued
    // 2017: All
    if (y === 2017) return STATUS_NOT_ISSUED;
    // 2023: The rest (since 5c is caught above)
    if (y === 2023) return STATUS_NOT_ISSUED;

    // YELLOW: Set Only (Everything else)
    return STATUS_SET_ONLY;
};
