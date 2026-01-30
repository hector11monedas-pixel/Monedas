export const getCroatiaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Default to Standard (Circulation)
    // Croatia started in 2023, most coins are circulation.

    // Yellow (Set Only)
    // 50c, 1€, 2€ (2025)
    if (y === 2025 && [0.50, 1.00, 2.00].includes(val)) {
        return 'set_only';
    }

    return 'standard';
};
