const STATUS_CIRCULATION = 'issued';
const STATUS_SET_ONLY = 'set_only';
const STATUS_NOT_ISSUED = 'not_issued';

export const getLuxemburgoCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 2002 || y > 2026) return STATUS_NOT_ISSUED;

    // GREEN: Circulation (High mintage)
    // YELLOW: Set Only (Low mintage, ~50k or less, usually sets/pruebas)

    // 1c, 2c
    if ((val === 0.01 || val === 0.02)) {
        if (y >= 2017 && y <= 2025 && y !== 2023) return STATUS_SET_ONLY;
    }

    // 5c
    if (val === 0.05) {
        if (y === 2017 || y === 2019 || y === 2021) return STATUS_SET_ONLY;
        // 2018 (1.45M), 2020 (2.05M), 2022 (3.05M), 2023 (5.95M), 2024 (2.05M), 2025 (155k) are Circulation
    }

    // 10c
    if (val === 0.10) {
        if (y === 2017 || y === 2019 || y === 2021) return STATUS_SET_ONLY;
        // Others are Circulation (1M+)
    }

    // 20c
    if (val === 0.20) {
        if (y >= 2017 && y <= 2020) return STATUS_SET_ONLY;
        // Others are Circulation (1M+)
    }

    // 50c
    if (val === 0.50) {
        if (y >= 2017 && y <= 2022) return STATUS_SET_ONLY;
        // Others are Circulation
    }

    // 1€
    if (val === 1.00) {
        if (y === 2017 || y === 2018 || y === 2019 || y === 2020 || y === 2022 || y === 2024 || y === 2025) return STATUS_SET_ONLY;
        // 2021 (3.05M), 2023 (4.05M) are Circulation
    }

    // 2€
    if (val === 2.00) {
        if (y >= 2017 && y <= 2022) return STATUS_SET_ONLY;
        // 2023 (6.25M), 2024 (3.05M), 2025 (570k) are Circulation
    }

    return STATUS_CIRCULATION;
};



export const getEmissionStatus = getLuxemburgoCoinStatus;
