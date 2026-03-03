

export const EURO_SERIES = {
    'España': [
        {
            name: 'Serie I (Juan Carlos I)',
            years: [1999, 2009],
            description: 'Diseño original con el busto del Rey Juan Carlos I (1€, 2€), Miguel de Cervantes (10c, 20c, 50c) y la Catedral de Santiago (1c, 2c, 5c).',
            image: 'https://en.numista.com/catalogue/photos/espagne/88-original.jpg'
        },
        {
            name: 'Serie II (Actualización UE)',
            years: [2010, 2014],
            description: 'Actualización para cumplir las directrices de la UE. Las estrellas del anillo exterior ya no tienen relieve central.',
            image: 'https://en.numista.com/catalogue/photos/espagne/10862-original.jpg'
        },
        {
            name: 'Serie III (Felipe VI)',
            years: [2015, 2026],
            description: 'Nuevo busto del Rey Felipe VI en las monedas de 1€ y 2€.',
            image: 'https://en.numista.com/catalogue/photos/espagne/63283-original.jpg',
            excludedDenominations: ['0.01', '0.02', '0.05', '0.10', '0.20', '0.50']
        }
    ],
    'Alemania': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'Rama de roble, Puerta de Brandeburgo y el Águila Federal.',
            image: 'https://www.fleur-de-coin.com/images/coins/national/germany/2euro.jpg'
        }
    ],
    'Austria': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'Flores alpinas, arquitectura de Viena, Bertha von Suttner y Mozart.',
            image: 'https://www.fleur-de-coin.com/images/coins/national/austria/2euro.jpg'
        }
    ],
    'Bélgica': [
        {
            name: 'Serie I (Alberto II)',
            years: [1999, 2007],
            description: 'Diseño original con el retrato del Rey Alberto II y su monograma en el anillo exterior.',
            image: '/img/coins/belgium/2_euro_s1.jpg'
        },
        {
            name: 'Serie II (Diseño 2008)',
            years: [2008, 2008],
            description: 'Actualización del diseño: monograma y año se mueven al círculo interior. El retrato fue ligeramente modificado este año.',
            image: '/img/coins/belgium/2_euro_s2.jpg'
        },
        {
            name: 'Serie III (Retrato restaurado)',
            years: [2009, 2013],
            description: 'Se recuperó el retrato original de la Serie I, pero manteniendo la estructura de 2008 para cumplir las normativas UE.',
            image: '/img/coins/belgium/2_euro_s3.jpg'
        },
        {
            name: 'Serie IV (Rey Felipe)',
            years: [2014, 2026],
            description: 'Efigie del Rey Felipe, quien ascendió al trono tras la abdicación de su padre Alberto II.',
            image: '/img/coins/belgium/2_euro_s4.jpg'
        }
    ],
    'Francia': [
        {
            name: 'Serie I (Original)',
            years: [1999, 2021],
            description: 'Árbol de la Vida y Marianne.',
            image: 'https://www.fleur-de-coin.com/images/coins/national/france/2euro.jpg',
            denominationYears: {
                '0.01': [1999, 2026],
                '0.02': [1999, 2026],
                '0.05': [1999, 2026],
                '0.10': [1999, 2023],
                '0.20': [1999, 2023],
                '0.50': [1999, 2023]
            }
        },
        {
            name: 'Serie II',
            years: [2022, 2026],
            description: 'Nuevo Árbol de la Vida y Mujeres Ilustres.',
            image: 'https://www.fleur-de-coin.com/images/coins/national/france/2euro2022.jpg',
            excludedDenominations: ['0.01', '0.02', '0.05'],
            denominationYears: {
                '0.10': [2024, 2026],
                '0.20': [2024, 2026],
                '0.50': [2024, 2026]
            }
        }
    ],
    'Italia': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'Coliseo, Venus de Botticelli, Dante Alighieri.',
            image: 'https://www.fleur-de-coin.com/images/coins/national/italy/2euro.jpg'
        }
    ],
    'Grecia': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'Historia naval, figuras políticas y mitología (Europa/Toro).',
            image: 'https://www.fleur-de-coin.com/images/coins/national/greece/2euro.jpg'
        }
    ],
    'Países Bajos': [
        {
            name: 'Serie I (Beatriz)',
            years: [1999, 2013],
            description: 'Retrato de la Reina Beatriz.',
            image: '/img/coins/netherlands/2e-s1.jpg'
        },
        {
            name: 'Serie II (Guillem-Alejandro)',
            years: [2014, 2026],
            description: 'Retrato del Rey Guillermo Alejandro.',
            image: '/img/coins/netherlands/2e-s2.jpg'
        }
    ],
    'Portugal': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'Sellos reales de 1134, 1142 y 1144.',
            image: '/img/coins/portugal/2e.jpg'
        }
    ],


    'San Marino': [
        {
            name: 'Serie I',
            years: [2002, 2016],
            description: 'Palazzo Pubblico, La Guaita, La Cesta, El Montale y otros símbolos.',
            image: '/img/coins/sanmarino/2e-s1.jpg'
        },
        {
            name: 'Serie II',
            years: [2017, 2026],
            description: 'San Marino, Monasterio de Santa Clara, San Quirino y otros monumentos.',
            image: '/img/coins/sanmarino/2e-s2.jpg'
        }
    ],
    'Vaticano': [
        {
            name: 'Serie I (Juan Pablo II)',
            years: [2002, 2005],
            description: 'Efigie del Papa Juan Pablo II.',
            image: '/img/coins/vaticano/2e-s1.jpg'
        },
        {
            name: 'Serie II (Sede Vacante)',
            years: [2005, 2005],
            description: 'Escudo de armas del Camarlengo.',
            image: '/img/coins/vaticano/2e-s2.jpg'
        },
        {
            name: 'Serie III (Benedicto XVI)',
            years: [2006, 2013],
            description: 'Efigie del Papa Benedicto XVI.',
            image: '/img/coins/vaticano/2e-s3.jpg'
        },
        {
            name: 'Serie IV (Francisco)',
            years: [2014, 2016],
            description: 'Efigie del Papa Francisco.',
            image: '/img/coins/vaticano/2e-s4.jpg'
        },
        {
            name: 'Serie V (Escudo)',
            years: [2017, 2026],
            description: 'Escudo de armas del Papa Francisco.',
            image: '/img/coins/vaticano/2e-s5.jpg'
        }
    ],
    'Mónaco': [
        {
            name: 'Serie I (Raniero III)',
            years: [2001, 2005],
            description: 'Escudo, Sello de Raniero III y retratos de Raniero III / Alberto II.',
            image: '/img/coins/monaco/2e-s1.jpg'
        },
        {
            name: 'Serie II (Alberto II)',
            years: [2006, 2024],
            description: 'Monograma y retrato del Príncipe Alberto II.',
            image: '/img/coins/monaco/2e-s2.jpg'
        },
        {
            name: 'Serie III (Nuevo Diseño 2025)',
            years: [2025, 2026],
            description: 'Actualización del diseño para las monedas de 1€ y 2€.',
            image: '/img/coins/monaco/2e-s3.jpg',
            excludedDenominations: ['0.01', '0.02', '0.05', '0.10', '0.20', '0.50']
        }



    ],

    'Finlandia': [
        {
            name: 'Serie I',
            years: [1999, 2026],
            description: 'León heráldico, Cisnes y Moras boreales.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Finland_2001.png?width=200'
        }
    ],
    'Irlanda': [
        {
            name: 'Serie I',
            years: [2002, 2026],
            description: 'El arpa celta.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ir_2_euro_1.png?width=200'
        }
    ],
    'Luxemburgo': [
        {
            name: 'Serie I (Gran Duque Enrique)',
            years: [2002, 2025],
            description: 'Retrato del Gran Duque Enrique.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/L_2_euro_1.png?width=200'
        },
        {
            name: 'Serie II (Nuevo Diseño 2026)',
            years: [2026, 2026],
            description: 'Actualización del diseño nacional para el año 2026.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/L_2_euro_1.png?width=200' // Placeholder image
        }
    ],

    'Estonia': [
        {
            name: 'Serie I',
            years: [2011, 2026],
            description: 'Mapa de Estonia.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_euro_Estonia.png?width=200'
        }
    ],
    'Letonia': [
        {
            name: 'Serie I',
            years: [2014, 2026],
            description: 'Doncella letona, Libertad y Escudo.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/LV_2_eiro.png?width=200'
        }
    ],
    'Lituania': [
        {
            name: 'Serie I',
            years: [2015, 2026],
            description: 'El Vytis (Caballero).',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Lithuania.png?width=200'
        }
    ],
    'Eslovaquia': [
        {
            name: 'Serie I',
            years: [2009, 2026],
            description: 'Escudo, Monte Kriváň y Castillo.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Slovakia.png?width=200'
        }
    ],
    'Eslovenia': [
        {
            name: 'Serie I',
            years: [2007, 2026],
            description: 'Motivos históricos y culturales.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Slovenia.png?width=200'
        }
    ],
    'Chipre': [
        {
            name: 'Serie I',
            years: [2008, 2026],
            description: 'Ídolo de Pomos, Barco de Kyrenia y Muflón.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Cyprus.png?width=200'
        }
    ],
    'Malta': [
        {
            name: 'Serie I',
            years: [2008, 2026],
            description: 'Cruz de Malta, Escudo y Templo de Mnajdra.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_Malta.png?width=200'
        }
    ],
    'Croacia': [
        {
            name: 'Serie I',
            years: [2023, 2026],
            description: 'Mapa de Croacia, Marta, Nikola Tesla y Glagolítico.',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/HR-2eur.png?width=200'
        }
    ],
    'Bulgaria': [
        {
            name: 'Serie I (Tradición)',
            years: [2026, 2026],
            description: 'El Caballero de Madara (céntimos), San Juan de Rila (1€) y Paisio de Hilendar (2€).',
            image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bulgarian_euro_2_obverse.svg?width=200'
        }
    ],
    'Andorra': [
        {
            name: 'Serie I',
            years: [2014, 2026],
            description: 'El rebeco pirenaico (1c-5c), Iglesia de Santa Coloma (10c-50c), Casa de la Vall (1€) y Escudo de armas (2€).',
            image: '/img/coins/andorra/2_euro.jpg'
        }
    ]
};
