// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';

export const getVaticanCoinStatus = (year, denomination, seriesIndex = null) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // === GREEN: Circulation (Massive issues) ===

    // 50 Cent (The main circulation coin since 2010)
    if (val === 0.50 && y >= 2010 && y <= 2026) return STATUS_CIRCULATION;

    // 2026: Future prediction
    if (y === 2026) return STATUS_CIRCULATION;

    // === YELLOW: Set Only (Everything else is "Prueba" ~100k) ===
    return STATUS_SET_ONLY;
};

export const getEmissionStatus = getVaticanCoinStatus;
