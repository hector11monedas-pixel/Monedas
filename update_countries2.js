import fs from 'fs';

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

const updatedSpain = `    'España': [
        {
            year: 2005,
            subject: 'IV Centenario El Quijote',
            image: '/img/coins/spain/euro/commemorative/spain-2-euro-2005.jpg',
            date: '30-06-2005',
            mintage: 8000000,
            description: 'La moneda conmemora el IV Centenario de la primera edición de "El Ingenioso Hidalgo Don Quijote de la Mancha". El diseño muestra a Don Quijote sosteniendo una lanza, con molinos de viento al fondo.',
            designer: 'Begoña Castellanos',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.00€ - 7.00€'
        },
        { year: 2010, subject: 'Centro Histórico de Córdoba', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2010.jpg', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: 'Alhambra de Granada', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2011.jpg', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2012, subject: 'Catedral de Burgos', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2012-catedral.jpg', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: 'El Escorial', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2013.jpg', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Park Güell (Gaudí)', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2014.jpg', mintage: 8000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2014, subject: 'Felipe VI (Proclamación)', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2014-rey.jpg', mintage: 8000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2015, subject: 'Cueva de Altamira', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2015.jpg', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Acueducto de Segovia', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2016.jpg', mintage: 3400000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: 'Santa María del Naranco', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2017.jpg', mintage: 500000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2018, subject: 'Santiago de Compostela', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2018-santiago.jpg', mintage: 300000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2018, subject: '50 Aniv. Rey Felipe VI', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2018-rey.jpg', mintage: 400000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2019, subject: 'Muralla de Ávila', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2019.jpg', mintage: 500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2020, subject: 'Arquitectura Mudéjar de Aragón', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2020.jpg', mintage: 4000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2021, subject: 'Ciudad Histórica de Toledo', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2021.jpg', mintage: 4000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2022, subject: 'Parque Nacional de Garajonay', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2022-parque.jpg', mintage: 1000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2022, subject: 'V Centenario Vuelta al Mundo', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2022-elcano.jpg', mintage: 1000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2023, subject: 'Ciudad Vieja de Cáceres', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2023-caceres.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2023, subject: 'Presidencia Española UE', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2023-ue.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2024, subject: 'Catedral de Sevilla', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2024-sevilla.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2024, subject: '200 Aniv. Policía Nacional', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2024-policia.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2025, subject: 'Ciudad Vieja de Salamanca', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2025.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Monasterio de Montserrat', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2026-monasterio.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Aniversario Reforma de la Constitución', image: '/img/coins/spain/euro/commemorative/spain-2-euro-2026-reforma-constitucion.jpg', mintage: 1500000, estimatedPrice: '3.50€ - 5.50€' },
    ],`;
const startEs = content.indexOf("'España': [");
const endEs = content.indexOf("    'Estonia': [");
content = content.substring(0, startEs) + updatedSpain + '\n' + content.substring(endEs);

const updatedFinland = `    'Finlandia': [
        {
            year: 2004,
            subject: 'Ampliación Unión Europea',
            image: '/img/coins/2004/finland.png',
            date: '01-07-2004',
            mintage: 1000000,
            estimatedPrice: '40€ - 65€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 931400 }
            ]
        },
        {
            year: 2005,
            subject: '60 Aniv. Naciones Unidas',
            image: '/img/coins/2005/finland.jpg?v=191',
            date: '25-10-2005',
            mintage: 2000000,
            estimatedPrice: '6€ - 12€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1948394 }
            ]
        },
        {
            year: 2006,
            subject: '100 Aniv. Sufragio Universal',
            image: '/img/coins/2006/finland.jpg?v=202',
            date: '04-10-2006',
            mintage: 2500000,
            estimatedPrice: '5.00€ - 8.00€'
        },
        {
            year: 2007,
            subject: '90 Aniv. Independencia',
            image: '/img/coins/2007/finland.jpg?v=203',
            date: '01-12-2007',
            mintage: 2000000,
            estimatedPrice: '4.50€ - 7.00€'
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2_%E2%82%AC_commemorativo_Finlandia_2008.jpg&w=500',
            date: '24-10-2008',
            mintage: 1500000,
            estimatedPrice: '5.00€ - 8.00€'
        },
        { year: 2009, subject: '200 Aniv. Autonomía Finesa', mintage: 1600000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2010, subject: 'Decreto de la Moneda 1860', mintage: 1600000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2011, subject: '200 Aniv. Banco de Finlandia', mintage: 1500000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2012, subject: 'Helene Schjerfbeck', mintage: 2000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: 'Parlamento de 1863', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2013, subject: 'F. E. Sillanpää', mintage: 1500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Tove Jansson', mintage: 1500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Ilmari Tapiovaara', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2015, subject: 'Jean Sibelius', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2015, subject: 'Akseli Gallen-Kallela', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2016, subject: 'Eino Leino', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2016, subject: 'Georg Henrik von Wright', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2017, subject: '100 Aniv. Independencia', mintage: 2500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: 'Naturaleza Finlandesa', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2018, subject: 'Parque Nacional Koli', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2018, subject: 'Cultura de la Sauna', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2019, subject: 'Ley de Gobierno 1919', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2020, subject: 'Universidad de Turku', mintage: 800000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Väinö Linna', mintage: 800000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2021, subject: 'Periodismo Democrático', mintage: 800000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2021, subject: 'Islas Åland', mintage: 800000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2022, subject: 'Ballet Nacional', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2022, subject: 'Investigación Climática', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2023, subject: 'Ley de Conservación Natural', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2023, subject: 'Servicios Sociales y de Salud', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2024, subject: 'Elecciones y Democracia', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2024, subject: 'Arquitectura (Gesellius, Lindgren, Saarinen)', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2025, subject: '500 Aniv. Traducción Nuevo Testamento', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2025, subject: '2ª Emisión 2025', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2026, subject: '150 Aniv. Correo Finlandés', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
        { year: 2026, subject: '2ª Emisión 2026', mintage: 400000, estimatedPrice: '7.00€ - 12.00€' },
    ],`;
const startFin = content.indexOf("'Finlandia': [");
const endFin = content.indexOf("    'Francia': [");
content = content.substring(0, startFin) + updatedFinland + '\n' + content.substring(endFin);

fs.writeFileSync('src/data/CommemorativeCatalog.js', content);
console.log('Filled Spain and Finland.');
