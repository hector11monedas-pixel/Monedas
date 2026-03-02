// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

export const getLithuaniaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2015) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    // === GREEN: Circulation ===
    // 2015: All
    if (y === 2015) return STATUS_CIRCULATION;

    // 1 Cent: 2016, 2017
    if (val === 0.01 && (y === 2016 || y === 2017)) return STATUS_CIRCULATION;

    // 2 Cents: 2017
    if (val === 0.02 && y === 2017) return STATUS_CIRCULATION;

    // 5 Cents: 2021, 2022
    if (val === 0.05 && (y === 2021 || y === 2022)) return STATUS_CIRCULATION;

    // 10 Cents: 2017, 2021
    if (val === 0.10 && (y === 2017 || y === 2021)) return STATUS_CIRCULATION;

    // 20 Cents: 2017
    if (val === 0.20 && y === 2017) return STATUS_CIRCULATION;

    // 2 Euro: 2017, 2020, 2021
    if (val === 2.00 && (y === 2017 || y === 2020 || y === 2021)) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Pruebas and others) ===
    return STATUS_SET_ONLY;
};

