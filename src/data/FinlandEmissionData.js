
export const STATUS_CIRCULATION = 'standard'; // Green
export const STATUS_SET_ONLY = 'set_only';   // Yellow
export const STATUS_NOT_ISSUED = 'not_issued'; // Red

export const getFinlandCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Get denom string key like '1c', '10c' for consistent checking if needed, 
    // but here we can check values directly.

    // 1. RED (No Emitidas / Not Issued)
    // 2019: 1c, 2c, 10c, 20c, 50c, 1€
    if (y === 2019) {
        // Only 5c (0.05) and 2€ (2.00) are NOT in the red list?
        // User said: "2019: 1c, 2c, 10c, 20c, 50c, 1€" are Red.
        // So 5c and 2€ are NOT Red (presumably Green/Yellow? User said "verdes: el resto").
        const redValues = [0.01, 0.02, 0.10, 0.20, 0.50, 1.00];
        if (redValues.includes(val)) {
            return STATUS_NOT_ISSUED;
        }
    }

    // 2. YELLOW (Sets / Amarillas)
    // 2020, 2021, 2022, 2023, 2024: Todas
    const yellowYears = [2020, 2021, 2022, 2023, 2024];
    if (yellowYears.includes(y)) {
        return STATUS_SET_ONLY;
    }

    // 3. GREEN (Circulation / Verdes)
    // "El resto" -> Default to standard
    return STATUS_CIRCULATION;
};
