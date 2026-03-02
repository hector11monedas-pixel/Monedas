export const STATUS_CIRCULATION = 'circulation'; // Green
export const STATUS_SET_ONLY = 'set_only';       // Yellow
export const STATUS_NOT_ISSUED = 'not_issued';   // Red

export const CZECH_DENOMINATIONS = [
    { value: 0.10, label: '10 h', id: '10h', obsolete: true, image: '/img/coins/cz/cz_10h.png', estimatedValue: 0.20 },
    { value: 0.20, label: '20 h', id: '20h', obsolete: true, image: '/img/coins/cz/cz_20h.png', estimatedValue: 0.30 },
    { value: 0.50, label: '50 h', id: '50h', obsolete: true, image: '/img/coins/cz/cz_50h.png', estimatedValue: 0.50 },
    { value: 1.00, label: '1 Kč', id: '1kc', image: '/img/coins/cz/cz_1kc.png', estimatedValue: 0.50 },
    { value: 2.00, label: '2 Kč', id: '2kc', image: '/img/coins/cz/cz_2kc.png', estimatedValue: 0.80 },
    { value: 5.00, label: '5 Kč', id: '5kc', image: '/img/coins/cz/cz_5kc.png', estimatedValue: 1.50 },
    { value: 10.00, label: '10 Kč', id: '10kc', image: '/img/coins/cz/cz_10kc.png', estimatedValue: 1.20 },
    { value: 20.00, label: '20 Kč', id: '20kc', image: '/img/coins/cz/cz_20kc.png', estimatedValue: 1.50 },
    { value: 50.00, label: '50 Kč', id: '50kc', image: '/img/coins/cz/cz_50kc.png', estimatedValue: 3.50 }
];

// Helper to determine status based on public official records (CNB)
export const getCzechCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const d = parseFloat(denomination);

    // Initial series 1993 - Mints abroad
    // 1, 2, 5 Kč: Winnipeg (can be represented as HM or Maple)
    // 10, 20, 50 Kč: Hamburg (HM)
    if (y === 1993) {
        if (d >= 10.00) return STATUS_CIRCULATION; // Hamburg
        if (d >= 1.00 && d < 10.00) return STATUS_CIRCULATION; // Winnipeg
        if (d < 1.00) return STATUS_CIRCULATION; // Jablonec (h)
    }

    // 10h: 1993 - 2003 (Retired)
    if (d === 0.10) {
        if (y > 2003) return STATUS_NOT_ISSUED;
        if ([1994, 1996, 2001, 2002].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 20h: 1993 - 2003 (Retired)
    if (d === 0.20) {
        if (y > 2003) return STATUS_NOT_ISSUED;
        if ([1994, 1996, 2001, 2002].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 50h: 1993 - 2008 (Retired)
    if (d === 0.50) {
        if (y > 2008) return STATUS_NOT_ISSUED;
        if ([1994, 1995, 2001, 2002, 2003, 2004, 2005, 2006, 2007].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 1 Kč: 1993-present
    if (d === 1.00) {
        if ([1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 2 Kč: 1993-present
    if (d === 2.00) {
        if ([1996, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2010, 2011, 2013, 2014, 2015].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 5 Kč: 1993-present
    if (d === 5.00) {
        if ([1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005].includes(y)) return STATUS_SET_ONLY;
        if ([2011, 2012, 2014, 2015].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 10 Kč: 1993-present
    if (d === 10.00) {
        if ([1997, 1998, 1999, 2001, 2002, 2005, 2006, 2007, 2011, 2012, 2013, 2014, 2016, 2017].includes(y)) return STATUS_SET_ONLY;
        if (y === 2000) return STATUS_CIRCULATION; // Standard + Petrov (we'll handle Petrov as variant later if needed)
        return STATUS_CIRCULATION;
    }

    // 20 Kč: 1993-present
    if (d === 20.00) {
        if ([1994, 1995, 1996, 2001, 2002, 2005, 2006, 2007, 2008, 2010, 2011, 2016].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    // 50 Kč: 1993-present
    if (d === 50.00) {
        // From 1994 to 2007 was only in sets (except 1993)
        if (y >= 1994 && y <= 2007) return STATUS_SET_ONLY;
        if ([2011, 2012, 2014, 2015, 2016, 2019, 2020].includes(y)) return STATUS_SET_ONLY;
        return STATUS_CIRCULATION;
    }

    return STATUS_CIRCULATION;
};
