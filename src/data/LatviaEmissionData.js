// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getLatviaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2014 || y > 2026) return STATUS_NOT_ISSUED;

    // GREEN: Circulation
    // 2014: All
    if (y === 2014) return STATUS_CIRCULATION;

    // 2016: 1 Euro (10M mintage)
    if (y === 2016 && val === 1.00) return STATUS_CIRCULATION;

    // 2019: 5 Cents (15M mintage)
    if (y === 2019 && val === 0.05) return STATUS_CIRCULATION;

    // Based on user list, all others are (Prueba) -> Set Only
    return STATUS_SET_ONLY;
};



