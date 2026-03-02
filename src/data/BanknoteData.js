// 1993 Stamped Provisional Notes (Real images acquired)
import cz100s_93 from '../assets/banknotes/cz/100_czk_1993_stamp_obv.jpg';
import cz100sr_93 from '../assets/banknotes/cz/100_kcs_1961_rev.jpg';
import cz500s_93 from '../assets/banknotes/cz/500_czk_1993_stamp_obv.jpg';
import cz500sr_93 from '../assets/banknotes/cz/500_kcs_1973_rev.jpg';
import cz1000s_93 from '../assets/banknotes/cz/1000_czk_1993_stamp_obv.jpg';
import cz1000sr_93 from '../assets/banknotes/cz/1000_kcs_1985_rev.jpg';

// Standard / Current Variants (Legacy references)
import cz100Obv from '../assets/banknotes/cz/100_czk_obverse.jpg';
import cz100Rev from '../assets/banknotes/cz/100_czk_reverse.jpg';
import cz200Obv from '../assets/banknotes/cz/200_czk_obverse.jpg';
import cz200Rev from '../assets/banknotes/cz/200_czk_reverse.jpg';
import cz500Obv from '../assets/banknotes/cz/500_czk_obverse.jpg';
import cz500Rev from '../assets/banknotes/cz/500_czk_reverse.jpg';
import cz1000Obv from '../assets/banknotes/cz/1000_czk_obverse.jpg';
import cz1000Rev from '../assets/banknotes/cz/1000_czk_reverse.jpg';
import cz2000Obv from '../assets/banknotes/cz/2000_czk_obverse.jpg';
import cz2000Rev from '../assets/banknotes/cz/2000_czk_reverse.jpg';
import cz5000Rev from '../assets/banknotes/cz/5000_czk_reverse.jpg';

// Retired (Legacy// Retired (Legacy references)
import cz20Rev from '../assets/banknotes/cz/20_czk_reverse.jpg';
import cz50Rev from '../assets/banknotes/cz/50_czk_reverse.jpg';

// --- NEW FULL ASSETS ---
// 1993 Series
import cz100_93 from '../assets/banknotes/cz_full/100_czk_1993_obv.jpg';
import cz200_93 from '../assets/banknotes/cz_full/200_czk_1993_obv.jpg';
import cz500_93 from '../assets/banknotes/cz_full/500_czk_1993_obv.jpg';
import cz1000_93 from '../assets/banknotes/cz_full/1000_czk_1993_obv.jpg';
import cz50_93 from '../assets/banknotes/cz_full/50_czk_1993_obv.jpg';

// Transition / Upgrades
import cz20_94 from '../assets/banknotes/cz_full/20_czk_1994_obv.jpg';
import cz100_18 from '../assets/banknotes/cz_full/100_czk_2018_obv.jpg';
import cz1000_23 from '../assets/banknotes/cz_full/1000_czk_2023_obv.jpg';
import cz2000_07 from '../assets/banknotes/cz_full/2000_czk_2007_obv.jpg';
import cz5000_99 from '../assets/banknotes/cz_full/5000_czk_1999_obv.jpg';
import cz5000_09 from '../assets/banknotes/cz_full/5000_czk_2009_obv.jpg';

// Commemorative
import cz100_19_obv from '../assets/banknotes/cz_full/100_czk_2019_obv.jpg';
import cz100_19_rev from '../assets/banknotes/cz_full/100_czk_2019_rev.jpg';
import cz100_22_obv from '../assets/banknotes/cz_full/100_czk_2022_obv.jpg';
import cz100_22_rev from '../assets/banknotes/cz_full/100_czk_2022_rev.jpg';

export const BANKNOTE_DATA = {
    'cz': {
        country: 'República Checa',
        currency: 'Corona Checa (CZK)',
        seriesList: [
            {
                id: 'series-current',
                name: 'Serie Actual (Válidos)',
                description: 'Billetes de curso legal con las máximas medidas de seguridad (hilo ancho de 3mm).',
                coverImage: cz100Obv,
                banknotes: [
                    {
                        id: 'cz-100-2018-a',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 2018 (P-28)',
                        mainColor: '#2E8B57',
                        dimensions: '140 x 69 mm',
                        obverseDescription: 'Carlos IV. Hilo ancho (3mm).',
                        reverseDescription: 'Sello de la Universidad Carolina',
                        obverseImage: cz100_18,
                        reverseImage: cz100Rev,
                        emissionYears: ['2018'],
                        status: 'Válido',
                        governor: 'Jiří Rusnok',
                        estimatedValue: '4,00 €',
                        notes: 'Pick P-25a. Prefijos: J, K.'
                    },
                    {
                        id: 'cz-200-2018-a',
                        value: 200,
                        unit: 'Kč',
                        name: '200 Coronas 2018 (P-29)',
                        mainColor: '#FF8C00',
                        dimensions: '146 x 69 mm',
                        obverseDescription: 'J.A. Komenský. Hilo ancho.',
                        reverseDescription: 'Manos de adulto y niño',
                        obverseImage: cz200Obv,
                        reverseImage: cz200Rev,
                        emissionYears: ['2018'],
                        status: 'Válido',
                        governor: 'Jiří Rusnok',
                        estimatedValue: '8,00 €',
                        notes: 'Pick P-26a. Prefijos: J, K.'
                    },
                    {
                        id: 'cz-500-2009-v',
                        value: 500,
                        unit: 'Kč',
                        name: '500 Coronas 2009 (P-24)',
                        mainColor: '#A0522D',
                        dimensions: '152 x 69 mm',
                        obverseDescription: 'Božena Němcová. Hilo ancho.',
                        reverseDescription: 'Mujer laureada',
                        obverseImage: cz500Obv,
                        reverseImage: cz500Rev,
                        emissionYears: ['2009'],
                        status: 'Válido',
                        governor: 'Zdeněk Tůma',
                        estimatedValue: '25,00 €',
                        notes: 'Pick P-21a. Hilo de 3mm con cambio de color. Prefijos: E, F.'
                    },
                    {
                        id: 'cz-1000-2008-v',
                        value: 1000,
                        unit: 'Kč',
                        name: '1000 Coronas 2008 (P-25)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'František Palacký. Hilo ancho.',
                        reverseDescription: 'Águila',
                        obverseImage: cz1000Obv,
                        reverseImage: cz1000Rev,
                        emissionYears: ['2008'],
                        status: 'Válido',
                        governor: 'Zdeněk Tůma',
                        estimatedValue: '45,00 €',
                        notes: 'Pick P-24a. Prefijos: E, F, G, H, I, J.'
                    },
                    {
                        id: 'cz-2000-2007-v',
                        value: 2000,
                        unit: 'Kč',
                        name: '2000 Coronas 2007 (P-26)',
                        mainColor: '#556B2F',
                        dimensions: '164 x 74 mm',
                        obverseDescription: 'Ema Destinnová. Hilo ancho.',
                        reverseDescription: 'Euterpe',
                        obverseImage: cz2000_07,
                        reverseImage: cz2000Rev,
                        emissionYears: ['2007'],
                        status: 'Válido',
                        governor: 'Zdeněk Tůma',
                        estimatedValue: '85,00 €',
                        notes: 'Pick P-21. Prefijos: E, F.'
                    },
                    {
                        id: 'cz-5000-2009-v',
                        value: 5000,
                        unit: 'Kč',
                        name: '5000 Coronas 2009 (P-27)',
                        mainColor: '#483D8B',
                        dimensions: '170 x 74 mm',
                        obverseDescription: 'T.G. Masaryk. Seguridad 2009.',
                        reverseDescription: 'Edificios de Praga',
                        obverseImage: cz5000_09,
                        reverseImage: cz5000Rev,
                        emissionYears: ['2009'],
                        status: 'Válido',
                        governor: 'Zdeněk Tůma',
                        estimatedValue: '210,00 €',
                        notes: 'Pick P-23b. Prefijo: C.'
                    },
                    {
                        id: 'cz-5000-2023-a',
                        value: 5000,
                        unit: 'Kč',
                        name: '5000 Coronas 2023 (P-27b)',
                        mainColor: '#483D8B',
                        dimensions: '170 x 74 mm',
                        obverseDescription: 'T.G. Masaryk. Firma de Michl.',
                        reverseDescription: 'Edificios de Praga',
                        obverseImage: cz5000_09,
                        reverseImage: cz5000Rev,
                        emissionYears: ['2023'],
                        status: 'Válido',
                        governor: 'Aleš Michl',
                        estimatedValue: '205,00 €',
                        notes: 'Nueva firma (Michl, 2023).'
                    }
                ]
            },
            {
                id: 'series-commem-special',
                name: 'Conmemorativos y Especiales',
                description: 'Billetes de colección y aniversarios con sobrecargas.',
                coverImage: cz100_19_obv,
                banknotes: [
                    {
                        id: 'cz-100-2019-commem',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 2019 (P-30 / Rašín)',
                        mainColor: '#2E8B57',
                        dimensions: '194 x 84 mm',
                        obverseDescription: 'Alois Rašín, primer ministro de finanzas. Centenario de la Moneda.',
                        reverseDescription: 'Edificio del Banco Nacional Checoslovaco en Praga.',
                        obverseImage: cz100_19_obv,
                        reverseImage: cz100_19_rev,
                        emissionYears: ['2019'],
                        status: 'Válido',
                        governor: 'Jiří Rusnok',
                        estimatedValue: '45,00 €',
                        notes: 'Pick P-27. Primera emisión conmemorativa. Edición limitada de 20.000 unidades.'
                    },
                    {
                        id: 'cz-100-2022-commem',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 2022 (P-31 / Engliš)',
                        mainColor: '#2E8B57',
                        dimensions: '194 x 84 mm',
                        obverseDescription: 'Karel Engliš, importante economista checo.',
                        reverseDescription: 'Palacio Clam-Gallas en Praga.',
                        obverseImage: cz100_22_obv,
                        reverseImage: cz100_22_rev,
                        emissionYears: ['2022'],
                        status: 'Válido',
                        governor: 'Jiří Rusnok',
                        estimatedValue: '45,00 €',
                        notes: 'Pick P-28. Segunda emisión de la serie de economistas. Edición de 20.000 unidades.'
                    },
                    {
                        id: 'cz-1000-2023-commem',
                        value: 1000,
                        unit: 'Kč',
                        name: '1000 Coronas 2023 (P-32 / 30 Aniv. CNB)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'František Palacký con sobrecarga: Logotipo 30 años y sello de 1993.',
                        reverseDescription: 'Águila con escudo checo.',
                        obverseImage: cz1000_23,
                        reverseImage: cz1000Rev,
                        emissionYears: ['2023'],
                        status: 'Válido',
                        governor: 'Aleš Michl',
                        estimatedValue: '80,00 €',
                        notes: 'Billete regular con sobrecarga especial. Conmemora el 30 aniversario de la partición monetaria.'
                    }
                ]
            },
            {
                id: 'series-retired-low',
                name: 'Denominaciones Retiradas (20 y 50 Kč)',
                description: 'Billetes que dejaron de circular y fueron reemplazados por monedas.',
                banknotes: [
                    {
                        id: 'cz-20-1994-a',
                        value: 20,
                        unit: 'Kč',
                        name: '20 Coronas 1994 (P-10a)',
                        mainColor: '#4682B4',
                        dimensions: '128 x 64 mm',
                        obverseDescription: 'Rey Přemysl Otakar I. Hilo de 1.4 mm.',
                        reverseDescription: 'Sello real',
                        obverseImage: cz20_94,
                        reverseImage: cz20Rev,
                        emissionYears: ['1994'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '12,00 €',
                        notes: 'Pick P-10a. Prefijos: A, B. Retirado en 2008. Sin letra "K" en el reverso.'
                    },
                    {
                        id: 'cz-20-1994-b',
                        value: 20,
                        unit: 'Kč',
                        name: '20 Coronas 1996 (P-10b)',
                        mainColor: '#4682B4',
                        dimensions: '128 x 64 mm',
                        obverseDescription: 'Rey Přemysl Otakar I. Firma Tošovský.',
                        reverseDescription: 'Sello real',
                        obverseImage: cz20_94,
                        reverseImage: cz20Rev,
                        emissionYears: ['1996'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '10,00 €',
                        notes: 'Pick P-10b. Versión de 1996. Prefijo: B. Retirado en 2008.'
                    },
                    {
                        id: 'cz-50-1993-a',
                        value: 50,
                        unit: 'Kč',
                        name: '50 Coronas 1993 (P-4)',
                        mainColor: '#DB7093',
                        dimensions: '134 x 64 mm',
                        obverseDescription: 'Santa Inés de Bohemia. Hilo estrecho.',
                        reverseDescription: 'Bóveda gótica',
                        obverseImage: cz50_93,
                        reverseImage: cz50Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '15,00 €',
                        notes: 'Pick P-4. Impreso por Thomas De La Rue. Prefijos: A01–A45. Sin símbolo en reverso.'
                    },
                    {
                        id: 'cz-50-1994-a',
                        value: 50,
                        unit: 'Kč',
                        name: '50 Coronas 1994 (P-11)',
                        mainColor: '#DB7093',
                        dimensions: '134 x 64 mm',
                        obverseDescription: 'Santa Inés de Bohemia. Hilo de 1.4mm.',
                        reverseDescription: 'Bóveda gótica con símbolo de corazón.',
                        obverseImage: cz50_93,
                        reverseImage: cz50Rev,
                        emissionYears: ['1994'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '12,00 €',
                        notes: 'Pick P-11. Retirado en 2022.'
                    },
                    {
                        id: 'cz-50-1997-a',
                        value: 50,
                        unit: 'Kč',
                        name: '50 Coronas 1997 (P-17)',
                        mainColor: '#DB7093',
                        dimensions: '134 x 64 mm',
                        obverseDescription: 'Santa Inés de Bohemia. Serie 1997.',
                        reverseDescription: 'Bóveda gótica con símbolo de corazón.',
                        obverseImage: cz50_93,
                        reverseImage: cz50Rev,
                        emissionYears: ['1997'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '10,00 €',
                        notes: 'Pick P-17. Impreso en República Checa (STC). Prefijos: E21, E67. Retirado en 2022.'
                    }
                ]
            },
            {
                id: 'series-retired-mid',
                name: 'Denominaciones Retiradas (100 a 500 Kč)',
                description: 'Billetes de las primeras series tras la separación, retirados en 2007 (serie 1993) y 2022 (series 1995-1998).',
                banknotes: [
                    {
                        id: 'cz-100-1993-a',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 1993 (P-5)',
                        mainColor: '#2E8B57',
                        dimensions: '140 x 69 mm',
                        obverseDescription: 'Carlos IV. Primera serie regular.',
                        reverseDescription: 'Sello de la Universidad Carolina. Sin símbolo.',
                        obverseImage: cz100_93,
                        reverseImage: cz100Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '35,00 €',
                        notes: 'Pick P-5. Impreso por Thomas De La Rue. Prefijos: A01–A71. Retirado en 2007.'
                    },
                    {
                        id: 'cz-100-1995-a',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 1995 (P-12)',
                        mainColor: '#2E8B57',
                        dimensions: '140 x 69 mm',
                        obverseDescription: 'Carlos IV. Hilo de 1.4 mm.',
                        reverseDescription: 'Sello con letra "K" en el reverso.',
                        obverseImage: cz100_93,
                        reverseImage: cz100Rev,
                        emissionYears: ['1995'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '25,00 €',
                        notes: 'Pick P-12. Retirado en 2022.'
                    },
                    {
                        id: 'cz-100-1997-a',
                        value: 100,
                        unit: 'Kč',
                        name: '100 Coronas 1997 (P-18)',
                        mainColor: '#2E8B57',
                        dimensions: '140 x 69 mm',
                        obverseDescription: 'Carlos IV. Firma Tošovský.',
                        reverseDescription: 'Sello con letra "K" en el reverso.',
                        obverseImage: cz100_93,
                        reverseImage: cz100Rev,
                        emissionYears: ['1997'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '20,00 €',
                        notes: 'Pick P-18. Retirado en 2022.'
                    },
                    {
                        id: 'cz-200-1993-a',
                        value: 200,
                        unit: 'Kč',
                        name: '200 Coronas 1993 (P-6)',
                        mainColor: '#FF8C00',
                        dimensions: '146 x 69 mm',
                        obverseDescription: 'John Amos Comenius. Sin símbolo en reverso.',
                        reverseDescription: 'Manos de adulto y niño',
                        obverseImage: cz200_93,
                        reverseImage: cz200Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '25,00 €',
                        notes: 'Pick P-6. Retirado en 2007.'
                    },
                    {
                        id: 'cz-200-1996-a',
                        value: 200,
                        unit: 'Kč',
                        name: '200 Coronas 1996 (P-13)',
                        mainColor: '#FF8C00',
                        dimensions: '146 x 69 mm',
                        obverseDescription: 'J.A. Komenský. Hilo de 1.4 mm.',
                        reverseDescription: 'Sello con libro en el reverso.',
                        obverseImage: cz200_93,
                        reverseImage: cz200Rev,
                        emissionYears: ['1996'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '20,00 €',
                        notes: 'Pick P-13. Retirado en 2022.'
                    },
                    {
                        id: 'cz-200-1998-a',
                        value: 200,
                        unit: 'Kč',
                        name: '200 Coronas 1998 (P-19)',
                        mainColor: '#FF8C00',
                        dimensions: '146 x 69 mm',
                        obverseDescription: 'J.A. Komenský. Firma Tošovský.',
                        reverseDescription: 'Sello con libro en el reverso.',
                        obverseImage: cz200_93,
                        reverseImage: cz200Rev,
                        emissionYears: ['1998'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '18,00 €',
                        notes: 'Pick P-19. Hilo de seguridad mejorado. Retirado en 2022.'
                    },
                    {
                        id: 'cz-500-1993-a',
                        value: 500,
                        unit: 'Kč',
                        name: '500 Coronas 1993 (P-7)',
                        mainColor: '#A0522D',
                        dimensions: '152 x 69 mm',
                        obverseDescription: 'Božena Němcová. Sin símbolo en reverso.',
                        reverseDescription: 'Mujer laureada',
                        obverseImage: cz500_93,
                        reverseImage: cz500Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '40,00 €',
                        notes: 'Pick P-7. Retirado en 2007.'
                    },
                    {
                        id: 'cz-500-1995-a',
                        value: 500,
                        unit: 'Kč',
                        name: '500 Coronas 1995 (P-14)',
                        mainColor: '#A0522D',
                        dimensions: '152 x 69 mm',
                        obverseDescription: 'Božena Němcová. Hilo de 1.4 mm.',
                        reverseDescription: 'Sello con rosa en el reverso.',
                        obverseImage: cz500_93,
                        reverseImage: cz500Rev,
                        emissionYears: ['1995'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '35,00 €',
                        notes: 'Pick P-14. Retirado en 2022.'
                    },
                    {
                        id: 'cz-500-1997-a',
                        value: 500,
                        unit: 'Kč',
                        name: '500 Coronas 1997 (P-20)',
                        mainColor: '#A0522D',
                        dimensions: '152 x 69 mm',
                        obverseDescription: 'Božena Němcová. Firma Tošovský.',
                        reverseDescription: 'Sello con rosa en el reverso.',
                        obverseImage: cz500_93,
                        reverseImage: cz500Rev,
                        emissionYears: ['1997'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '30,00 €',
                        notes: 'Pick P-20. Retirado en 2022.'
                    }
                ]
            },
            {
                id: 'series-retired-high',
                name: 'Denominaciones Retiradas (1000 a 5000 Kč)',
                description: 'Billetes de mayor valor retirados (series de 1993) o reemplazados por versiones con mejor seguridad (series 1996-1999).',
                banknotes: [
                    {
                        id: 'cz-1000-1993-a',
                        value: 1000,
                        unit: 'Kč',
                        name: '1000 Coronas 1993 (P-8)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'František Palacký. Sin símbolo en reverso.',
                        reverseDescription: 'Águila. Firma Tošovský.',
                        obverseImage: cz1000_93,
                        reverseImage: cz1000Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '55,00 €',
                        notes: 'Pick P-8. Prefijos: A, B. Retirado en 2001.'
                    },
                    {
                        id: 'cz-1000-1996-a',
                        value: 1000,
                        unit: 'Kč',
                        name: '1000 Coronas 1996 (P-15)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'František Palacký. Hilo de 1.4 mm.',
                        reverseDescription: 'Águila con símbolo de la ciudad.',
                        obverseImage: cz1000_93,
                        reverseImage: cz1000Rev,
                        emissionYears: ['1996'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '50,00 €',
                        notes: 'Pick P-15. Retirado en 2022.'
                    },
                    {
                        id: 'cz-2000-1996-a',
                        value: 2000,
                        unit: 'Kč',
                        name: '2000 Coronas 1996 (P-16)',
                        mainColor: '#556B2F',
                        dimensions: '164 x 74 mm',
                        obverseDescription: 'Ema Destinnová. Serie 1996.',
                        reverseDescription: 'Euterpe. Firma Tošovský.',
                        obverseImage: cz2000Obv,
                        reverseImage: cz2000Rev,
                        emissionYears: ['1996'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '70,00 €',
                        notes: 'Pick P-16. Retirado en 2022.'
                    },
                    {
                        id: 'cz-2000-1999-a',
                        value: 2000,
                        unit: 'Kč',
                        name: '2000 Coronas 1999 (P-22)',
                        mainColor: '#556B2F',
                        dimensions: '164 x 74 mm',
                        obverseDescription: 'Ema Destinnová. Hilo mejorado.',
                        reverseDescription: 'Euterpe. Firma Tošovský.',
                        obverseImage: cz2000Obv,
                        reverseImage: cz2000Rev,
                        emissionYears: ['1999'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '65,00 €',
                        notes: 'Pick P-22. Retirado en 2022.'
                    },
                    {
                        id: 'cz-5000-1993-a',
                        value: 5000,
                        unit: 'Kč',
                        name: '5000 Coronas 1993 (P-9)',
                        mainColor: '#483D8B',
                        dimensions: '170 x 74 mm',
                        obverseDescription: 'T.G. Masaryk. Primera serie.',
                        reverseDescription: 'Edificios de Praga. Sin símbolo en reverso.',
                        obverseImage: cz5000_99,
                        reverseImage: cz5000Rev,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'Josef Tošovský',
                        estimatedValue: '280,00 €',
                        notes: 'Pick P-9. Retirado en 2001.'
                    },
                    {
                        id: 'cz-5000-1999-a',
                        value: 5000,
                        unit: 'Kč',
                        name: '5000 Coronas 1999 (P-23)',
                        mainColor: '#483D8B',
                        dimensions: '170 x 74 mm',
                        obverseDescription: 'T.G. Masaryk. Hilo ancho.',
                        reverseDescription: 'Edificios de Praga. Firma Tošovský.',
                        obverseImage: cz5000_99,
                        reverseImage: cz5000Rev,
                        emissionYears: ['1999'],
                        status: 'Válido',
                        governor: 'Josef Tošovský',
                        estimatedValue: '250,00 €',
                        notes: 'Pick P-23. Válido por tener hilo ancho de seguridad.'
                    }
                ]
            },
            {
                id: 'cz-series-1993-stamp',
                name: 'Serie Provisional (1993 con Sello)',
                description: 'Billetes checoslovacos revalidados con sellos adhesivos o impresos tras la separación.',
                banknotes: [
                    {
                        id: 'cz-100-1993-stamp-a',
                        value: 100,
                        unit: 'Kčs',
                        name: '100 Coronas 1993 (P-1a)',
                        mainColor: '#2E8B57',
                        dimensions: '150 x 70 mm',
                        obverseDescription: 'Obreros y pareja campesina. Sello adhesivo C (100).',
                        reverseDescription: 'Puente de Carlos. Diseño de 1961.',
                        obverseImage: cz100s_93,
                        reverseImage: cz100sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'S. Potáč (original)',
                        estimatedValue: '120,00 €',
                        notes: 'Pick P-1a. Sello adhesivo sobre billete de 1961. Prefijos: G, M, R, S, T.'
                    },
                    {
                        id: 'cz-100-1993-stamp-b',
                        value: 100,
                        unit: 'Kčs',
                        name: '100 Coronas 1993 (P-1b)',
                        mainColor: '#2E8B57',
                        dimensions: '150 x 70 mm',
                        obverseDescription: 'Obreros y pareja campesina. Sello adhesivo.',
                        reverseDescription: 'Puente de Carlos',
                        obverseImage: cz100s_93,
                        reverseImage: cz100sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'S. Potáč (original)',
                        estimatedValue: '110,00 €',
                        notes: 'Pick P-1b.Variante de prefijos de impresión: B, C, D, P.'
                    },
                    {
                        id: 'cz-500-1993-stamp-a',
                        value: 500,
                        unit: 'Kčs',
                        name: '500 Coronas 1993 (P-2a)',
                        mainColor: '#A0522D',
                        dimensions: '154 x 68 mm',
                        obverseDescription: 'Soldados. Sello adhesivo azul "D 500".',
                        reverseDescription: 'Castillo de Devin. Diseño de 1973.',
                        obverseImage: cz500s_93,
                        reverseImage: cz500sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'S. Potáč (original)',
                        estimatedValue: '180,00 €',
                        notes: 'Pick P-2a. Sello adhesivo azul. Prefijos: U, Z.'
                    },
                    {
                        id: 'cz-500-1993-stamp-b',
                        value: 500,
                        unit: 'Kčs',
                        name: '500 Coronas 1993 (P-2b)',
                        mainColor: '#A0522D',
                        dimensions: '154 x 68 mm',
                        obverseDescription: 'Soldados. Sello impreso sobre papel opaco.',
                        reverseDescription: 'Castillo de Devin',
                        obverseImage: cz500s_93,
                        reverseImage: cz500sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'S. Potáč (original)',
                        estimatedValue: '250,00 €',
                        notes: 'Pick P-2b. Sello "D 500" variante papel opaco. Prefijo: W.'
                    },
                    {
                        id: 'cz-1000-1993-stamp-a',
                        value: 1000,
                        unit: 'Kčs',
                        name: '1000 Coronas 1993 (P-3a)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'Bedřich Smetana. Sello adhesivo verde "M 1000".',
                        reverseDescription: 'Vyšehrad. Diseño de 1985.',
                        obverseImage: cz1000s_93,
                        reverseImage: cz1000sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'J. Stejskal (original)',
                        estimatedValue: '250,00 €',
                        notes: 'Pick P-3a. Sello verde "M 1000". Prefijo: C.'
                    },
                    {
                        id: 'cz-1000-1993-stamp-b',
                        value: 1000,
                        unit: 'Kčs',
                        name: '1000 Coronas 1993 (P-3b)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'Bedřich Smetana. Sello adhesivo.',
                        reverseDescription: 'Vyšehrad',
                        obverseImage: cz1000s_93,
                        reverseImage: cz1000sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'J. Stejskal (original)',
                        estimatedValue: '220,00 €',
                        notes: 'Pick P-3b. Variante de prefijo: U. Sello adhesivo.'
                    },
                    {
                        id: 'cz-1000-1993-stamp-c',
                        value: 1000,
                        unit: 'Kčs',
                        name: '1000 Coronas 1993 (P-3c)',
                        mainColor: '#8A2BE2',
                        dimensions: '158 x 74 mm',
                        obverseDescription: 'Bedřich Smetana. Sello impreso (Overprint).',
                        reverseDescription: 'Vyšehrad',
                        obverseImage: cz1000s_93,
                        reverseImage: cz1000sr_93,
                        emissionYears: ['1993'],
                        status: 'Retirado',
                        governor: 'J. Stejskal (original)',
                        estimatedValue: '350,00 €',
                        notes: 'Pick P-3c. Sello impreso directamente (no adhesivo). Prefijo: U.'
                    }
                ]
            }
        ]
    },
    'af': {
        country: 'Afganistán',
        currency: 'Afgani (AFN)',
        seriesList: [
            {
                id: 'af-series-2002',
                name: 'Serie 2002 (Reforma Monetaria)',
                description: 'Billetes introducidos tras la caída de los talibanes para unificar la moneda nacional.',
                banknotes: [
                    {
                        id: 'af-1-2002',
                        value: 1,
                        unit: 'Af',
                        name: '1 Afgani 2002 (P-64)',
                        mainColor: '#FFC0CB',
                        dimensions: '131 x 55 mm',
                        obverseDescription: 'Sello del Banco de Afganistán (DAB).',
                        reverseDescription: 'Mezquita Azul de Mazar-e-Sharif.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1AfghanAfghani.JPG?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1AfghanAfghani(reverse).JPG?width=800',
                        emissionYears: ['2002', '2004'],
                        status: 'Retirado',
                        estimatedValue: '1,50 €',
                        notes: 'Pick P-64. Firmas: Ahady/Arsala. Marca de agua: Mirwais Khan Hotaki.'
                    },
                    {
                        id: 'af-2-2002',
                        value: 2,
                        unit: 'Af',
                        name: '2 Afghanis 2002 (P-65)',
                        mainColor: '#ADD8E6',
                        dimensions: '131 x 55 mm',
                        obverseDescription: 'Sello del Banco de Afganistán.',
                        reverseDescription: 'Arco de la Victoria de Paghman.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Afghanis_(2002_-_top).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Afghanis_(2002_-_back).jpg?width=800',
                        emissionYears: ['2002', '2004'],
                        status: 'Retirado',
                        estimatedValue: '1,50 €',
                        notes: 'Pick P-65. Firmas: Ahady/Arsala. Marca de agua: Mirwais Khan Hotaki.'
                    },
                    {
                        id: 'af-5-2002',
                        value: 5,
                        unit: 'Af',
                        name: '5 Afghanis 2002 (P-66)',
                        mainColor: '#556B2F',
                        dimensions: '131 x 55 mm',
                        obverseDescription: 'Sello del Banco de Afganistán.',
                        reverseDescription: 'Fortaleza de Bala Hissar (Kabul).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/5_Afghanis_(2002_-_top).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/5_Afghanis_(2002_-_back).jpg?width=800',
                        emissionYears: ['2002', '2004'],
                        status: 'Retirado',
                        estimatedValue: '2,00 €',
                        notes: 'Pick P-66. Firmas: Ahady/Arsala. Marca de agua: Mirwais Khan Hotaki.'
                    },
                    {
                        id: 'af-10-2002',
                        value: 10,
                        unit: 'Af',
                        name: '10 Afghanis 2002 (P-67)',
                        mainColor: '#F0E68C',
                        dimensions: '136 x 56 mm',
                        obverseDescription: 'Mausoleo de Mirwais Khan Hotaki (Kandahar).',
                        reverseDescription: 'Arco de la Victoria de Paghman.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/10_Afghanis_(2002_-_top).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/10_Afghanis_(2002_-_back).jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '2,50 €',
                        notes: 'Pick P-67. Serie de 2002 (SH1381). Marca de agua: Mirwais Khan Hotaki. Color verde amarillento.'
                    },
                    {
                        id: 'af-20-2002',
                        value: 20,
                        unit: 'Af',
                        name: '20 Afghanis 2002 (P-68)',
                        mainColor: '#8B4513',
                        dimensions: '140 x 58 mm',
                        obverseDescription: 'Mausoleo del Sultán Mahmud (Ghazni).',
                        reverseDescription: 'Palacio de Arg (Kabul).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/20_Afghanis_(2002_-_top).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/20_Afghanis_(2002_-_back).jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '3,00 €',
                        notes: 'Pick P-68. Las variantes iniciales carecen de "cornerstones" en la marca de agua.'
                    },
                    {
                        id: 'af-50-2002',
                        value: 50,
                        unit: 'Af',
                        name: '50 Afghanis 2002 (P-69)',
                        mainColor: '#006400',
                        dimensions: '144 x 60 mm',
                        obverseDescription: 'Mezquita Shah-do-Shamshira (Kabul).',
                        reverseDescription: 'Paso de Salang (Hindu Kush).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/50_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/50_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '5,00 €',
                        notes: 'Pick P-69. Variantes: P-69a/b (sin cornerstones) y P-69c-f (con "cornerstones" y guilloche modificado).'
                    },
                    {
                        id: 'af-100-2002',
                        value: 100,
                        unit: 'Af',
                        name: '100 Afghanis 2002 (P-70)',
                        mainColor: '#9370DB',
                        dimensions: '148 x 62 mm',
                        obverseDescription: 'Mezquita Pul-e Khishti (Kabul).',
                        reverseDescription: 'Arco de Qala-e-Bost (Lashkar Gah).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/100_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/100_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '6,50 €',
                        notes: 'Pick P-70. Firma: Ahady/Arsala. Marca de agua con Mausoleo y cornerstones.'
                    },
                    {
                        id: 'af-500-2002',
                        value: 500,
                        unit: 'Af',
                        name: '500 Afghanis 2002 (P-71)',
                        mainColor: '#4169E1',
                        dimensions: '152 x 64 mm',
                        obverseDescription: 'Gran Mezquita de Herat.',
                        reverseDescription: 'Torre de control del aeropuerto de Kandahar.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/500_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/500_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '20,00 €',
                        notes: 'Pick P-71. Numeral "500" bajo campo iridiscente IZQ, holograma DER. (Variante P-73 tiene posiciones inversas).'
                    },
                    {
                        id: 'af-1000-2002',
                        value: 1000,
                        unit: 'Af',
                        name: '1000 Afghanis 2002 (P-72)',
                        mainColor: '#D2691E',
                        dimensions: '156 x 66 mm',
                        obverseDescription: 'Mezquita Azul de Mazar-e-Sharif.',
                        reverseDescription: 'Mausoleo de Ahmad Shah Durrani (Kandahar).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1000_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1000_Afghani_banknote_of_Afghanistan_back_and_front.jpg?width=800',
                        emissionYears: ['2002', '2004', '2008'],
                        status: 'Válido',
                        estimatedValue: '35,00 €',
                        notes: 'Pick P-72. Numeral "1000" bajo campo iridiscente IZQ, holograma DER. (Variante P-74 tiene posiciones inversas).'
                    }
                ]
            }
        ]
    },
    'ab': {
        country: 'Abjasia',
        currency: 'Apsar (AP)',
        seriesList: [
            {
                id: 'ab-series-2018-2024',
                name: 'Emisiones Conmemorativas (Apsar)',
                description: 'Billetes emitidos por el Banco Nacional de la República de Abjasia. Aunque son de curso legal, su uso es principalmente coleccionista.',
                coverImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/500_Abkhazian_apsar_-_2018_(obverse).jpg?width=800',
                banknotes: [
                    {
                        id: 'ab-10-2024',
                        value: 10,
                        unit: 'AP',
                        name: '10 Apsars 2024 (Leopardo)',
                        mainColor: '#C0C0C0',
                        dimensions: '150 x 65 mm',
                        obverseDescription: 'Leopardo del Cáucaso y hacha de bronce ornamentada.',
                        reverseDescription: 'Hacha de bronce antigua y vara tradicional (Alabasha).',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/10_Abkhazian_apsar_-_2024_(obverse).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/10_Abkhazian_apsar_-_2024_(reverse).jpg?width=800',
                        emissionYears: ['2024'],
                        status: 'Válido',
                        estimatedValue: '8,50 €',
                        notes: 'Conmemora la fauna y cultura antigua de Abjasia.'
                    },
                    {
                        id: 'ab-25-2023',
                        value: 25,
                        unit: 'AP',
                        name: '25 Apsars 2023 (30º Aniv. Victoria)',
                        mainColor: '#87CEEB',
                        dimensions: '150 x 65 mm',
                        obverseDescription: 'Símbolos de victoria y escudo de armas.',
                        reverseDescription: 'Escena de batalla y monumento.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/25_Abkhazian_apsar_-_2023_(obverse).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/25_Abkhazian_apsar_-_2023_(reverse).jpg?width=800',
                        emissionYears: ['2023'],
                        status: 'Válido',
                        estimatedValue: '70,00 €',
                        notes: 'Conmemora el 30 aniversario de la victoria.'
                    },
                    {
                        id: 'ab-50-2025',
                        value: 50,
                        unit: 'AP',
                        name: '50 Apsars 2025 (Delfines)',
                        mainColor: '#40E0D0',
                        dimensions: '150 x 65 mm',
                        obverseDescription: 'Delfines del Mar Negro y símbolos marinos.',
                        reverseDescription: 'Anclas y motivos náuticos.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/50_Abkhazian_apsar_-_2025_(obverse).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/50_Abkhazian_apsar_-_2025_(reverse).jpg?width=800',
                        emissionYears: ['2025'],
                        status: 'Válido',
                        estimatedValue: '35,00 €',
                        notes: 'Representa la biodiversidad marina de Abjasia.'
                    },
                    {
                        id: 'ab-100-2024',
                        value: 100,
                        unit: 'AP',
                        name: '100 Apsars 2024 (Ciervo)',
                        mainColor: '#FFD700',
                        dimensions: '150 x 65 mm',
                        obverseDescription: 'Ciervo rojo y picos nevados del Cáucaso.',
                        reverseDescription: 'Monumentos históricos de Abjasia.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/100_Abkhazian_apsar_-_2024_(obverse).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/100_Abkhazian_apsar_-_2024_(reverse).jpg?width=800',
                        emissionYears: ['2024'],
                        status: 'Válido',
                        estimatedValue: '80,00 €',
                        notes: 'Billete con altos niveles de seguridad.'
                    },
                    {
                        id: 'ab-500-2018',
                        value: 500,
                        unit: 'AP',
                        name: '500 Apsars 2018 (Vladislav Ardzinba)',
                        mainColor: '#A52A2A',
                        dimensions: '150 x 65 mm',
                        obverseDescription: 'Primer presidente Vladislav Ardzinba y bandera.',
                        reverseDescription: 'Símbolos de estado y mapas.',
                        obverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/500_Abkhazian_apsar_-_2018_(obverse).jpg?width=800',
                        reverseImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/500_Abkhazian_apsar_-_2018_(reverse).jpg?width=800',
                        emissionYears: ['2018'],
                        status: 'Válido',
                        estimatedValue: '280,00 €',
                        notes: 'Primer billete emitido por el Banco Nacional de Abjasia.'
                    }
                ]
            }
        ]
    }
};
