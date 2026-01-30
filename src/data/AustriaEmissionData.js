export const getAustriaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Red (Not Issued) - Specifically 2€ (value 2) for certain years
    // The user listed: 2005, 2007, 2009, 2016, 2018
    if (val === 2) {
        if ([2005, 2007, 2009, 2016, 2018].includes(y)) return 'not_issued';
    }

    // Yellow (Set Only)
    // 1c, 2c, 5c (0.01, 0.02, 0.05) - 2016
    if ([0.01, 0.02, 0.05].includes(val) && y === 2016) return 'set_only';

    // 10c (0.10) - 2003
    if (val === 0.1 && y === 2003) return 'set_only';

    // 50c (0.50) - 2012, 2013, 2014, 2015
    if (val === 0.5 && [2012, 2013, 2014, 2015].includes(y)) return 'set_only';

    // 1€ (1.00) - 2003, 2012, 2013, 2014, 2015
    if (val === 1 && [2003, 2012, 2013, 2014, 2015].includes(y)) return 'set_only';

    return 'standard';
};

export const getAustriaNotIssuedCount = () => {
    // 2€: 2005, 2007, 2009, 2016, 2018 (5 coins)
    return 5;
};
