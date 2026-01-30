export const EURO_DATA = {
    // Founders (Coins dated 1999-2002 start)
    'Bélgica': { startYear: 1999 },
    'España': { startYear: 1999 },
    'Finlandia': { startYear: 1999 },
    'Francia': { startYear: 1999 },
    'Países Bajos': { startYear: 1999 },

    // Founders (Coins dated 2002 start)
    'Alemania': { startYear: 2002 },
    'Austria': { startYear: 2002 },
    'Irlanda': { startYear: 2002 },
    'Italia': { startYear: 2002 },
    'Luxemburgo': { startYear: 2002 },
    'Portugal': { startYear: 2002 },
    'Grecia': { startYear: 2002 }, // Joined 2001, coins 2002

    // Microstates (dated 2002+ usually, some gaps but start is key)
    'Mónaco': { startYear: 2001 }, // Some 2001 proof sets exist
    'San Marino': { startYear: 2002 },
    'Vaticano': { startYear: 2002 },

    // Joiners
    'Eslovenia': { startYear: 2007 },
    'Chipre': { startYear: 2008 },
    'Malta': { startYear: 2008 },
    'Eslovaquia': { startYear: 2009 },
    'Estonia': { startYear: 2011 },
    'Andorra': { startYear: 2014 },
    'Letonia': { startYear: 2014 },
    'Lituania': { startYear: 2015 },
    'Croacia': { startYear: 2023 },

    // Future / Pending
    'Bulgaria': { startYear: 2026 }, // Targeted
};

export const getCountryStartYear = (countryName) => {
    const data = EURO_DATA[countryName];
    return data ? data.startYear : 1999; // Default to 1999 if unknown
};

export const calculateCountryEuroCatalogSize = (countryName, options = { germanMints: true, greeceMints: true }) => {
    const data = EURO_DATA[countryName];
    if (!data) return 0;

    const startYear = data.startYear;
    const endYear = 2026; // Fixed cap
    if (startYear > endYear) return 0;

    let validYears = (endYear - startYear) + 1;
    let slots = validYears * 8; // 8 denominations per year

    // Germany has 5 Mints (A, D, F, G, J) for all standard coins
    if (countryName === 'Alemania') {
        if (options.germanMints !== false) {
            slots *= 5; // Default behavior (Mints Enabled)
            // Subtract Not Issued 2 Euro coins: 2007, 2009, 2012, 2013, 2015, 2018
            // 6 coins * 5 mints = 30 coins not issued
            slots -= 30;
        } else {
            // Mints Disabled (Generic Mode): 1 set per year
            // Subtract Not Issued 2 Euro coins (6 coins * 1 mint = 6 coins not issued)
            slots -= 6;
        }
    }

    if (countryName === 'Austria') {
        // Subtract Not Issued 2 Euro coins: 2005, 2007, 2009, 2016, 2018 (5 coins)
        slots -= 5;
    }

    if (countryName === 'Grecia') {
        // 2002 extra row (8 coins)
        if (options.greeceMints !== false) {
            slots += 8;
        }
    }

    return slots;
};

export const calculateTotalEuroCatalogSize = (options = { germanMints: true, greeceMints: true }) => {
    let total = 0;
    const countries = Object.keys(EURO_DATA);

    countries.forEach(country => {
        total += calculateCountryEuroCatalogSize(country, options);
    });

    return total;
};
