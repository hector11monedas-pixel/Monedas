
export const STATUS_CIRCULATION = 'circulation';
export const STATUS_SET_ONLY = 'set_only';
export const STATUS_NOT_ISSUED = 'not_issued';

export const AFGHANISTAN_DENOMINATIONS = [
    { value: 1, label: '1 Afgani', id: '1afn', image: '/img/coins/af/1_Afghan_Afghanis_Reverse.jpg', estimatedValue: 1.00 },
    { value: 2, label: '2 Afganis', id: '2afn', image: '/img/coins/af/2_Afghan_Afghanis_Reverse.jpg', estimatedValue: 1.50 },
    { value: 5, label: '5 Afganis', id: '5afn', image: '/img/coins/af/5_Afghan_Afghanis_Reverse.jpg', estimatedValue: 3.00 }
];

export const getAfghanistanCoinStatus = (year) => {
    const y = parseInt(year);

    // Only 2004 and 2005 issued
    if (y === 2004 || y === 2005) {
        return STATUS_CIRCULATION;
    }

    return STATUS_NOT_ISSUED;
};

export const AFGHANISTAN_PERIODS = [
    {
        id: 'second-afghani',
        name: 'Segundo afgani (2002-actualidad)',
        startYear: 2004,
        endYear: 2005,
        denominations: AFGHANISTAN_DENOMINATIONS
    }
];
