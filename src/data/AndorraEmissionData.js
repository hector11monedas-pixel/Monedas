
export const STATUS_CIRCULATION = 'circulation'; // Green
export const STATUS_SET_ONLY = 'set_only';       // Yellow
export const STATUS_NOT_ISSUED = 'not_issued';   // Red

// Helper to check array inclusion
const isSetOnly = (year, values) => values.includes(year);

export const getAndorraCoinStatus = (year, value) => {
    // Andorra started in 2014
    if (year < 2014) return STATUS_NOT_ISSUED;
    if (year > 2025) return STATUS_CIRCULATION; // Assumption for future

    // Logic based on the provided table (Yellow Cells = Set Only)

    // === 2 EURO ===
    if (value === 2.00) {
        // Yellow: 2016, 2025
        if ([2016, 2025].includes(year)) return STATUS_SET_ONLY;
    }

    // === 1 EURO ===
    if (value === 1.00) {
        // Yellow: 2015, 2017, 2018, 2019, 2020, 2022, 2023
        if ([2015, 2017, 2018, 2019, 2020, 2022, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 50 CENT ===
    if (value === 0.50) {
        // Yellow: 2015, 2016, 2023
        if ([2015, 2016, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 20 CENT ===
    if (value === 0.20) {
        // Yellow: 2015, 2016, 2023
        if ([2015, 2016, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 10 CENT ===
    if (value === 0.10) {
        // Yellow: 2015, 2016, 2023
        if ([2015, 2016, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 5 CENT ===
    if (value === 0.05) {
        // Yellow: 2015, 2016, 2020, 2021, 2023
        if ([2015, 2016, 2020, 2021, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 2 CENT ===
    if (value === 0.02) {
        // Yellow: 2015, 2016, 2020, 2023
        if ([2015, 2016, 2020, 2023].includes(year)) return STATUS_SET_ONLY;
    }

    // === 1 CENT ===
    if (value === 0.01) {
        // Yellow: 2015, 2016, 2020, 2023, 2024
        if ([2015, 2016, 2020, 2023, 2024].includes(year)) return STATUS_SET_ONLY;
    }

    return STATUS_CIRCULATION;
};
