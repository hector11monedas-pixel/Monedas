const STATUS_CIRCULATION = 'standard'; // Green
const STATUS_SET_ONLY = 'set_only';   // Yellow
const STATUS_NOT_ISSUED = 'not_issued'; // Red

const FINLAND_CIRCULATION = {
    '1c': [1999, 2000, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2011, 2012, 2015, 2017, 2019, 2022, 2025],
    '2c': [1999, 2000, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2011, 2012, 2015, 2017, 2018, 2020, 2021, 2022, 2025],
    '5c': [1999, 2000, 2001, 2002, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2021, 2022, 2023, 2025],
    '10c': [1999, 2000, 2001, 2008, 2009, 2011, 2012, 2015, 2021, 2023, 2025],
    '20c': [1999, 2001, 2002, 2008, 2009, 2011, 2012, 2015, 2017, 2018, 2020, 2021, 2023],
    '50c': [1999, 2000, 2001, 2008, 2009, 2011, 2012],
    '1€': [1999, 2000, 2001, 2002, 2004, 2005, 2007, 2008, 2009, 2010, 2011, 2012],
    '2€': [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2019]
};

export const getFinlandCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    if (y < 1999) return STATUS_NOT_ISSUED;
    if (y > 2026) return STATUS_NOT_ISSUED;

    let key = null;
    if (val === 0.01) key = '1c';
    else if (val === 0.02) key = '2c';
    else if (val === 0.05) key = '5c';
    else if (val === 0.10) key = '10c';
    else if (val === 0.20) key = '20c';
    else if (val === 0.50) key = '50c';
    else if (val === 1.00) key = '1€';
    else if (val === 2.00) key = '2€';

    if (!key) return STATUS_CIRCULATION;

    if (FINLAND_CIRCULATION[key]?.includes(y)) {
        return STATUS_CIRCULATION;
    }

    return STATUS_SET_ONLY;
};

export const getEmissionStatus = getFinlandCoinStatus;
