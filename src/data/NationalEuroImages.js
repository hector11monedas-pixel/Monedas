import { EURO_SERIES } from './EuroSeriesData';

// Mappings for National Sides of Euro Coins across Series
// Note: URLs are external references to reliable numismatic sources or placeholders.
// Strategy: Use a representative image for each series.
// Structure: Country -> SeriesIndex (0-based from EuroSeriesData) -> Denomination (0.01 - 2.00)



// Germany
import de1c from '../assets/coins/germany/1_cent_de.jpg';
import de2c from '../assets/coins/germany/2_cent_de.jpg';
import de5c from '../assets/coins/germany/5_cent_de.jpg';
import de10c from '../assets/coins/germany/10_cent_de.jpg';
import de20c from '../assets/coins/germany/20_cent_de.jpg';
import de50c from '../assets/coins/germany/50_cent_de.jpg';
import de1e from '../assets/coins/germany/1_euro_de.jpg';
import de2e from '../assets/coins/germany/2_euro_de.jpg';

// Belgium
// Local assets in public/img/coins/belgium/ are used now to allow user customization.


// Bulgaria - Local Images (2026 Series)
const bg1c = '/img/coins/bulgaria/1c.jpg';
const bg2c = '/img/coins/bulgaria/2c.jpg';
const bg5c = '/img/coins/bulgaria/5c.jpg';
const bg10c = '/img/coins/bulgaria/10c.jpg';
const bg20c = '/img/coins/bulgaria/20c.jpg';
const bg50c = '/img/coins/bulgaria/50c.jpg';
const bg1e = '/img/coins/bulgaria/1e.jpg';
const bg2e = '/img/coins/bulgaria/2e.jpg';

// Latvia
import lv1c from '../assets/coins/latvia/1_cent_lv.jpg';
import lv2c from '../assets/coins/latvia/2_cent_lv.jpg';
import lv5c from '../assets/coins/latvia/5_cent_lv.png';
import lv10c from '../assets/coins/latvia/10_cent_lv.jpg';
import lv20c from '../assets/coins/latvia/20_cent_lv.jpg';
import lv50c from '../assets/coins/latvia/50_cent_lv.png';
import lv1e from '../assets/coins/latvia/1_euro_lv.jpg';
import lv2e from '../assets/coins/latvia/2_euro_lv.jpg';

// Vatican Series V
// Local assets for Series V were identifical/shifted. Using Wikimedia Commons for reliability.



export const NATIONAL_IMAGES = {
    'Andorra': {
        0: { // Series I (2014-Present)
            '0.01': '/img/coins/andorra/1_2_5_cent.jpg',
            '0.02': '/img/coins/andorra/1_2_5_cent.jpg',
            '0.05': '/img/coins/andorra/1_2_5_cent.jpg',
            '0.10': '/img/coins/andorra/10_20_50_cent.jpg',
            '0.20': '/img/coins/andorra/10_20_50_cent.jpg',
            '0.50': '/img/coins/andorra/10_20_50_cent.jpg',
            '1.00': '/img/coins/andorra/1_euro.jpg',
            '2.00': '/img/coins/andorra/2_euro.jpg'
        }
    },
    'Austria': {
        0: { // Series I (2002-Present)
            '0.01': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/1_Cent,_Austria.jpg&width=300',
            '0.02': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2_Cent,_Austria.jpg&width=300',
            '0.05': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/5_Cent,_Austria.jpg&width=300',
            '0.10': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/10_Cent,_Austria.jpg&width=300',
            '0.20': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/20_Cent,_Austria.jpg&width=300',
            '0.50': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/50_Cent,_Austria.jpg&width=300',
            '1.00': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/1_Euro,_Austria.jpg&width=300',
            '2.00': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2_Euro,_Austria.jpg&width=300'
        }
    },
    'Bélgica': {
        0: { // Series I (1999-2007) - Albert II Rim
            '0.01': '/img/coins/belgium/1c_s1.jpg',
            '0.02': '/img/coins/belgium/2c_s1.jpg',
            '0.05': '/img/coins/belgium/5c_s1.jpg',
            '0.10': '/img/coins/belgium/10c_s1.jpg',
            '0.20': '/img/coins/belgium/20c_s1.jpg',
            '0.50': '/img/coins/belgium/50c_s1.jpg',
            '1.00': '/img/coins/belgium/1e_s1.jpg',
            '2.00': '/img/coins/belgium/2_euro_s1.jpg'
        },
        1: { // Series II (2008) - Albert II Center (Revised Portrait)
            '0.01': '/img/coins/belgium/1c_s2.jpg',
            '0.02': '/img/coins/belgium/2c_s2.jpg',
            '0.05': '/img/coins/belgium/5c_s2.jpg',
            '0.10': '/img/coins/belgium/10c_s2.jpg',
            '0.20': '/img/coins/belgium/20c_s2.jpg',
            '0.50': '/img/coins/belgium/50c_s2.jpg',
            '1.00': '/img/coins/belgium/1e_s2.jpg',
            '2.00': '/img/coins/belgium/2_euro_s2.jpg'
        },
        2: { // Series III (2009-2013) - Albert II Reverted Portrait (Center Monogram)
            '0.01': '/img/coins/belgium/1c_s3.jpg',
            '0.02': '/img/coins/belgium/2c_s3.jpg',
            '0.05': '/img/coins/belgium/5c_s3.jpg',
            '0.10': '/img/coins/belgium/10c_s3.jpg',
            '0.20': '/img/coins/belgium/20c_s3.jpg',
            '0.50': '/img/coins/belgium/50c_s3.jpg',
            '1.00': '/img/coins/belgium/1e_s3.jpg',
            '2.00': '/img/coins/belgium/2_euro_s3.jpg'
        },
        3: { // Series IV (2014-Present) - King Philippe
            '0.01': '/img/coins/belgium/1c_s4.jpg',
            '0.02': '/img/coins/belgium/2c_s4.jpg',
            '0.05': '/img/coins/belgium/5c_s4.jpg',
            '0.10': '/img/coins/belgium/10c_s4.jpg',
            '0.20': '/img/coins/belgium/20c_s4.jpg',
            '0.50': '/img/coins/belgium/50c_s4.jpg',
            '1.00': '/img/coins/belgium/1e_s4.jpg',
            '2.00': '/img/coins/belgium/2_euro_s4.jpg'
        }
    },
    'Bulgaria': {
        0: { // Future Series (2025/2026) - Madara Rider / Ivan Rilski / Paisius
            '0.01': bg1c,
            '0.02': bg2c,
            '0.05': bg5c,
            '0.10': bg10c,
            '0.20': bg20c,
            '0.50': bg50c,
            '1.00': bg1e,
            '2.00': bg2e
        }
    },
    'Croacia': {
        0: { // Series I (2023-Present)
            '0.01': '/img/coins/croacia/1c.jpg',
            '0.02': '/img/coins/croacia/2c.jpg',
            '0.05': '/img/coins/croacia/5c.jpg',
            '0.10': '/img/coins/croacia/10c.jpg',
            '0.20': '/img/coins/croacia/20c.jpg',
            '0.50': '/img/coins/croacia/50c.jpg',
            '1.00': '/img/coins/croacia/1e.jpg',
            '2.00': '/img/coins/croacia/2e.jpg'
        }
    },
    'Chipre': {
        0: { // Series I (2008-Present)
            '0.01': '/img/coins/chipre/1c.jpg',
            '0.02': '/img/coins/chipre/2c.jpg',
            '0.05': '/img/coins/chipre/5c.jpg',
            '0.10': '/img/coins/chipre/10c.jpg',
            '0.20': '/img/coins/chipre/20c.jpg',
            '0.50': '/img/coins/chipre/50c.jpg',
            '1.00': '/img/coins/chipre/1e.jpg',
            '2.00': '/img/coins/chipre/2e.jpg'
        }
    },
    'Eslovenia': {
        0: { // Series I (2007-Present)
            '0.01': '/img/coins/eslovenia/1c.jpg',
            '0.02': '/img/coins/eslovenia/2c.jpg',
            '0.05': '/img/coins/eslovenia/5c.jpg',
            '0.10': '/img/coins/eslovenia/10c.jpg',
            '0.20': '/img/coins/eslovenia/20c.jpg',
            '0.50': '/img/coins/eslovenia/50c.jpg',
            '1.00': '/img/coins/eslovenia/1e.jpg',
            '2.00': '/img/coins/eslovenia/2e.jpg'
        }
    },
    'Estonia': {
        0: { // Series I (2011-Present)
            '0.01': '/img/coins/estonia/1c.jpg',
            '0.02': '/img/coins/estonia/2c.jpg',
            '0.05': '/img/coins/estonia/5c.jpg',
            '0.10': '/img/coins/estonia/10c.jpg',
            '0.20': '/img/coins/estonia/20c.jpg',
            '0.50': '/img/coins/estonia/50c.jpg',
            '1.00': '/img/coins/estonia/1e.jpg',
            '2.00': '/img/coins/estonia/2e.jpg'
        }
    },
    'Finlandia': {
        0: { // Series I (1999-Present)
            '0.01': '/img/coins/finlandia/1c.jpg',
            '0.02': '/img/coins/finlandia/2c.jpg',
            '0.05': '/img/coins/finlandia/5c.jpg',
            '0.10': '/img/coins/finlandia/10c.jpg',
            '0.20': '/img/coins/finlandia/20c.jpg',
            '0.50': '/img/coins/finlandia/50c.jpg',
            '1.00': '/img/coins/finlandia/1e.jpg',
            '2.00': '/img/coins/finlandia/2e.jpg'
        }
    },
    'Francia': {
        0: { // Series I (1999-Present / Variable)
            '0.01': '/img/coins/francia/s1/1c.jpg',
            '0.02': '/img/coins/francia/s1/2c.jpg',
            '0.05': '/img/coins/francia/s1/5c.jpg',
            '0.10': '/img/coins/francia/s1/10c.jpg',
            '0.20': '/img/coins/francia/s1/20c.jpg',
            '0.50': '/img/coins/francia/s1/50c.jpg',
            '1.00': '/img/coins/francia/s1/1e.jpg',
            '2.00': '/img/coins/francia/s1/2e.jpg'
        },
        1: { // Series II (2022-Present / 2024-Present)
            '0.10': '/img/coins/francia/s2/10c.jpg',
            '0.20': '/img/coins/francia/s2/20c.jpg',
            '0.50': '/img/coins/francia/s2/50c.jpg',
            '1.00': '/img/coins/francia/s2/1e.jpg',
            '2.00': '/img/coins/francia/s2/2e.jpg'
        }
    },
    'Alemania': {
        0: { // Series I (2002-Present)
            '0.01': de1c,
            '0.02': de2c,
            '0.05': de5c,
            '0.10': de10c,
            '0.20': de20c,
            '0.50': de50c,
            '1.00': de1e,
            '2.00': de2e
        }
    },
    'Grecia': {
        0: { // Series I (2002-Present)
            '0.01': '/img/coins/grecia/1c.jpg',
            '0.02': '/img/coins/grecia/2c.jpg',
            '0.05': '/img/coins/grecia/5c.jpg',
            '0.10': '/img/coins/grecia/10c.jpg',
            '0.20': '/img/coins/grecia/20c.jpg',
            '0.50': '/img/coins/grecia/50c.jpg',
            '1.00': '/img/coins/grecia/1e.jpg',
            '2.00': '/img/coins/grecia/2e.jpg'
        }
    },
    'Irlanda': {
        0: { // Series I (2002-Present)
            '0.01': '/img/coins/irlanda/1c.jpg',
            '0.02': '/img/coins/irlanda/2c.jpg',
            '0.05': '/img/coins/irlanda/5c.jpg',
            '0.10': '/img/coins/irlanda/10c.jpg',
            '0.20': '/img/coins/irlanda/20c.jpg',
            '0.50': '/img/coins/irlanda/50c.jpg',
            '1.00': '/img/coins/irlanda/1e.jpg',
            '2.00': '/img/coins/irlanda/2e.jpg'
        }
    },
    'Italia': {
        0: { // Series I (2002-Present)
            '0.01': '/img/coins/italia/1c.jpg',
            '0.02': '/img/coins/italia/2c.jpg',
            '0.05': '/img/coins/italia/5c.jpg',
            '0.10': '/img/coins/italia/10c.jpg',
            '0.20': '/img/coins/italia/20c.jpg',
            '0.50': '/img/coins/italia/50c.jpg',
            '1.00': '/img/coins/italia/1e.jpg',
            '2.00': '/img/coins/italia/2e.jpg'
        }
    },
    'Letonia': {
        0: {
            '0.01': lv1c,
            '0.02': lv2c,
            '0.05': lv5c,
            '0.10': lv10c,
            '0.20': lv20c,
            '0.50': lv50c,
            '1.00': lv1e,
            '2.00': lv2e
        }
    },
    'Lituania': {
        0: { // Series I (2015-Present)
            '0.01': '/img/coins/lituania/1c.jpg',
            '0.02': '/img/coins/lituania/2c.jpg',
            '0.05': '/img/coins/lituania/5c.jpg',
            '0.10': '/img/coins/lituania/10c.jpg',
            '0.20': '/img/coins/lituania/20c.jpg',
            '0.50': '/img/coins/lituania/50c.jpg',
            '1.00': '/img/coins/lituania/1e.jpg',
            '2.00': '/img/coins/lituania/2e.jpg'
        }
    },

    'Luxemburgo': {
        0: { // Series I (2002-2025)
            '0.01': '/img/coins/luxemburgo/1c-s1.jpg',
            '0.02': '/img/coins/luxemburgo/2c-s1.jpg',
            '0.05': '/img/coins/luxemburgo/5c-s1.jpg',
            '0.10': '/img/coins/luxemburgo/10c-s1.jpg',
            '0.20': '/img/coins/luxemburgo/20c-s1.jpg',
            '0.50': '/img/coins/luxemburgo/50c-s1.jpg',
            '1.00': '/img/coins/luxemburgo/1e-s1.jpg',
            '2.00': '/img/coins/luxemburgo/2e-s1.jpg'
        },
        1: { // Series II (2026-Present)
            '0.01': '/img/coins/luxemburgo/1c-s2.jpg',
            '0.02': '/img/coins/luxemburgo/2c-s2.jpg',
            '0.05': '/img/coins/luxemburgo/5c-s2.jpg',
            '0.10': '/img/coins/luxemburgo/10c-s2.jpg',
            '0.20': '/img/coins/luxemburgo/20c-s2.jpg',
            '0.50': '/img/coins/luxemburgo/50c-s2.jpg',
            '1.00': '/img/coins/luxemburgo/1e-s2.jpg',
            '2.00': '/img/coins/luxemburgo/2e-s2.jpg'
        }
    },


    'Malta': {
        0: { // Series I (2008-Present)
            '0.01': '/img/coins/malta/1c.jpg',
            '0.02': '/img/coins/malta/2c.jpg',
            '0.05': '/img/coins/malta/5c.jpg',
            '0.10': '/img/coins/malta/10c.jpg',
            '0.20': '/img/coins/malta/20c.jpg',
            '0.50': '/img/coins/malta/50c.jpg',
            '1.00': '/img/coins/malta/1e.jpg',
            '2.00': '/img/coins/malta/2e.jpg'
        }
    },

    'Mónaco': {
        0: { // Series I (Rainier III, 2001-2005)
            '0.01': '/img/coins/monaco/1c-s1.jpg',
            '0.02': '/img/coins/monaco/2c-s1.jpg',
            '0.05': '/img/coins/monaco/5c-s1.jpg',
            '0.10': '/img/coins/monaco/10c-s1.jpg',
            '0.20': '/img/coins/monaco/20c-s1.jpg',
            '0.50': '/img/coins/monaco/50c-s1.jpg',
            '1.00': '/img/coins/monaco/1e-s1.jpg',
            '2.00': '/img/coins/monaco/2e-s1.jpg'
        },
        1: { // Series II (Albert II, 2006-Present)
            '0.01': '/img/coins/monaco/1c-s2.jpg',
            '0.02': '/img/coins/monaco/2c-s2.jpg',
            '0.05': '/img/coins/monaco/5c-s2.jpg',
            '0.10': '/img/coins/monaco/10c-s2.jpg',
            '0.20': '/img/coins/monaco/20c-s2.jpg',
            '0.50': '/img/coins/monaco/50c-s2.jpg',
            '1.00': '/img/coins/monaco/1e-s2.jpg',
            '2.00': '/img/coins/monaco/2e-s2.jpg'
        },
        2: { // Series III (2025-Present)
            '1.00': '/img/coins/monaco/1e-s3.jpg',
            '2.00': '/img/coins/monaco/2e-s3.jpg'
        }
    },


    'Países Bajos': {
        0: { // Series I (Beatrix, 1999-2013)
            '0.01': '/img/coins/netherlands/1c-s1.jpg',
            '0.02': '/img/coins/netherlands/2c-s1.jpg',
            '0.05': '/img/coins/netherlands/5c-s1.jpg',
            '0.10': '/img/coins/netherlands/10c-s1.jpg',
            '0.20': '/img/coins/netherlands/20c-s1.jpg',
            '0.50': '/img/coins/netherlands/50c-s1.jpg',
            '1.00': '/img/coins/netherlands/1e-s1.jpg',
            '2.00': '/img/coins/netherlands/2e-s1.jpg'
        },
        1: { // Series II (Willem-Alexander, 2014-Present)
            '0.01': '/img/coins/netherlands/1c-s2.jpg',
            '0.02': '/img/coins/netherlands/2c-s2.jpg',
            '0.05': '/img/coins/netherlands/5c-s2.jpg',
            '0.10': '/img/coins/netherlands/10c-s2.jpg',
            '0.20': '/img/coins/netherlands/20c-s2.jpg',
            '0.50': '/img/coins/netherlands/50c-s2.jpg',
            '1.00': '/img/coins/netherlands/1e-s2.jpg',
            '2.00': '/img/coins/netherlands/2e-s2.jpg'
        }
    },

    'Portugal': {
        0: { // Series I (2002-Present)
            '0.01': '/img/coins/portugal/1c.jpg',
            '0.02': '/img/coins/portugal/2c.jpg',
            '0.05': '/img/coins/portugal/5c.jpg',
            '0.10': '/img/coins/portugal/10c.jpg',
            '0.20': '/img/coins/portugal/20c.jpg',
            '0.50': '/img/coins/portugal/50c.jpg',
            '1.00': '/img/coins/portugal/1e.jpg',
            '2.00': '/img/coins/portugal/2e.jpg'
        }
    },


    'San Marino': {
        0: { // Series I (2002-2016)
            '0.01': '/img/coins/sanmarino/c1-s1.jpg',
            '0.02': '/img/coins/sanmarino/c2-s1.jpg',
            '0.05': '/img/coins/sanmarino/c5-s1.jpg',
            '0.10': '/img/coins/sanmarino/10c-1s.jpg',
            '0.20': '/img/coins/sanmarino/20c-s1.jpg',
            '0.50': '/img/coins/sanmarino/50c-s1.jpg',
            '1.00': '/img/coins/sanmarino/1e-s1.jpg',
            '2.00': '/img/coins/sanmarino/2e-s1.jpg'
        },
        1: { // Series II (2017-Present)
            '0.01': '/img/coins/sanmarino/c1-s2.jpg',
            '0.02': '/img/coins/sanmarino/c2-s2.jpg',
            '0.05': '/img/coins/sanmarino/c5-s2.jpg',
            '0.10': '/img/coins/sanmarino/10c-s2.jpg',
            '0.20': '/img/coins/sanmarino/20c-s2.jpg',
            '0.50': '/img/coins/sanmarino/50c-s2.jpg',
            '1.00': '/img/coins/sanmarino/1e-s2.jpg',
            '2.00': '/img/coins/sanmarino/2e-s2.jpg'
        }
    },
    'Eslovaquia': {
        0: { // Series I (2009-Present)
            '0.01': '/img/coins/eslovaquia/1c.jpg',
            '0.02': '/img/coins/eslovaquia/2c.jpg',
            '0.05': '/img/coins/eslovaquia/5c.jpg',
            '0.10': '/img/coins/eslovaquia/10c.jpg',
            '0.20': '/img/coins/eslovaquia/20c.jpg',
            '0.50': '/img/coins/eslovaquia/50c.jpg',
            '1.00': '/img/coins/eslovaquia/1e.jpg',
            '2.00': '/img/coins/eslovaquia/2e.jpg'
        }
    },
    'España': {
        0: { // Series I (1999-2009) - Juan Carlos I (Primer tipo)
            '0.01': '/img/coins/spain/euro/normal/1c_s1.jpg',
            '0.02': '/img/coins/spain/euro/normal/2c_s1.jpg',
            '0.05': '/img/coins/spain/euro/normal/5c_s1.jpg',
            '0.10': '/img/coins/spain/euro/normal/10c_s1.jpg',
            '0.20': '/img/coins/spain/euro/normal/20c_s1.jpg',
            '0.50': '/img/coins/spain/euro/normal/50c_s1.jpg',
            '1.00': '/img/coins/spain/euro/normal/1e_s1.jpg',
            '2.00': '/img/coins/spain/euro/normal/2e_s1.jpg'
        },
        1: { // Series II (2010-2014) - Juan Carlos I (Segundo tipo - Nuevo diseño UE)
            '0.01': '/img/coins/spain/euro/normal/1c_s2.jpg',
            '0.02': '/img/coins/spain/euro/normal/2c_s2.jpg',
            '0.05': '/img/coins/spain/euro/normal/5c_s2.jpg',
            '0.10': '/img/coins/spain/euro/normal/10c_s2.jpg',
            '0.20': '/img/coins/spain/euro/normal/20c_s2.jpg',
            '0.50': '/img/coins/spain/euro/normal/50c_s2.jpg',
            '1.00': '/img/coins/spain/euro/normal/1e_s2.jpg',
            '2.00': '/img/coins/spain/euro/normal/2e_s2.jpg'
        },
        2: { // Series III (Felipe VI, 2015-Present)
            '0.01': '/img/coins/spain/euro/normal/1c_s2.jpg',
            '0.02': '/img/coins/spain/euro/normal/2c_s2.jpg',
            '0.05': '/img/coins/spain/euro/normal/5c_s2.jpg',
            '0.10': '/img/coins/spain/euro/normal/10c_s2.jpg',
            '0.20': '/img/coins/spain/euro/normal/20c_s2.jpg',
            '0.50': '/img/coins/spain/euro/normal/50c_s2.jpg',
            '1.00': '/img/coins/spain/euro/normal/1e_s3.jpg',
            '2.00': '/img/coins/spain/euro/normal/2e_s3.jpg'
        }
    },
    'Vaticano': {
        0: { // Series I (Pope John Paul II, 2002-2005)
            '0.01': '/img/coins/vaticano/1c-s1.jpg',
            '0.02': '/img/coins/vaticano/2c-s1.jpg',
            '0.05': '/img/coins/vaticano/5c-s1.jpg',
            '0.10': '/img/coins/vaticano/10c-s1.jpg',
            '0.20': '/img/coins/vaticano/20c-s1.jpg',
            '0.50': '/img/coins/vaticano/50c-s1.jpg',
            '1.00': '/img/coins/vaticano/1e-s1.jpg',
            '2.00': '/img/coins/vaticano/2e-s1.jpg'
        },
        1: { // Series II (Sede Vacante, 2005)
            '0.01': '/img/coins/vaticano/1c-s2.jpg',
            '0.02': '/img/coins/vaticano/2c-s2.jpg',
            '0.05': '/img/coins/vaticano/5c-s2.jpg',
            '0.10': '/img/coins/vaticano/10c-s2.jpg',
            '0.20': '/img/coins/vaticano/20c-s2.jpg',
            '0.50': '/img/coins/vaticano/50c-s2.jpg',
            '1.00': '/img/coins/vaticano/1e-s2.jpg',
            '2.00': '/img/coins/vaticano/2e-s2.jpg'
        },
        2: { // Series III (Benedict XVI, 2006-2013)
            '0.01': '/img/coins/vaticano/1c-s3.jpg',
            '0.02': '/img/coins/vaticano/2c-s3.jpg',
            '0.05': '/img/coins/vaticano/5c-s3.jpg',
            '0.10': '/img/coins/vaticano/10c-s3.jpg',
            '0.20': '/img/coins/vaticano/20c-s3.jpg',
            '0.50': '/img/coins/vaticano/50c-s3.jpg',
            '1.00': '/img/coins/vaticano/1e-s3.jpg',
            '2.00': '/img/coins/vaticano/2e-s3.jpg'
        },
        3: { // Series IV (Pope Francis, 2014-2016)
            '0.01': '/img/coins/vaticano/1c-s4.jpg',
            '0.02': '/img/coins/vaticano/2c-s4.jpg',
            '0.05': '/img/coins/vaticano/5c-s4.jpg',
            '0.10': '/img/coins/vaticano/10c-s4.jpg',
            '0.20': '/img/coins/vaticano/20c-s4.jpg',
            '0.50': '/img/coins/vaticano/50c-s4.jpg',
            '1.00': '/img/coins/vaticano/1e-s4.jpg',
            '2.00': '/img/coins/vaticano/2e-s4.jpg'
        },
        4: { // Series V (Coat of Arms, 2017-Present)
            '0.01': '/img/coins/vaticano/1c-s5.jpg',
            '0.02': '/img/coins/vaticano/2c-s5.jpg',
            '0.05': '/img/coins/vaticano/5c-s5.jpg',
            '0.10': '/img/coins/vaticano/10c-s5.jpg',
            '0.20': '/img/coins/vaticano/20c-s5.jpg',
            '0.50': '/img/coins/vaticano/50c-s5.jpg',
            '1.00': '/img/coins/vaticano/1e-s5.jpg',
            '2.00': '/img/coins/vaticano/2e-s5.jpg'
        }
    }
};

export const getNationalSideImage = (countryName, value, year, explicitSeriesIndex = null) => {
    // 1. Get Country Data
    const countryData = NATIONAL_IMAGES[countryName];
    if (!countryData) return null;

    // 2. Determine Series
    let seriesIndex = 0;

    if (explicitSeriesIndex !== null && typeof explicitSeriesIndex === 'number') {
        seriesIndex = explicitSeriesIndex;
    } else {
        // Fallback to year-based logic if no explicit series provided
        const countrySeries = EURO_SERIES[countryName];
        if (countrySeries) {
            const numVal = typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2);
            for (let i = countrySeries.length - 1; i >= 0; i--) {
                const s = countrySeries[i];
                const sYears = s.denominationYears?.[numVal] || s.years;
                if (year >= sYears[0] && year <= sYears[1]) {
                    // Also check if this denomination is even allowed in this series
                    if (!s.excludedDenominations?.includes(numVal)) {
                        seriesIndex = i;
                        break;
                    }
                }
            }
        }
    }

    // 3. Lookup Image
    const seriesData = countryData[seriesIndex];
    if (!seriesData) return null;

    // Normalize value to a consistent key format (e.g., "0.01", "1.00")
    // This handles both numeric 0.01 and string "0.01" from EuroDenominations.js
    const lookupKey = typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2);

    // CRITICAL: Force normalized lookup for reliability
    const resolvedImage = seriesData[lookupKey] || seriesData[value] || (countryData[0] ? (countryData[0][lookupKey] || countryData[0][value]) : null);

    return resolvedImage || null;
};
