export const getCroatiaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Croatia joined in 2023
    if (y < 2023) return 'not_issued';

    // 2023 is the only confirmed circulation year (Massive mintage)
    if (y === 2023) {
        return 'issued';
    }

    // 2024, 2025, 2026 are marked as "Prueba" / Set Only (Low mintage ~7.5k)
    // User provided data: 2024 (7.500), 2025 (7.500), 2026 (6.000)
    if (y >= 2024 && y <= 2026) {
        return 'set_only';
    }

    // Future years
    if (y > 2026) return 'not_issued';

    return 'not_issued';
};

export const getEmissionStatus = getCroatiaCoinStatus;
