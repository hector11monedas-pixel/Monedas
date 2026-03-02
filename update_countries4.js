import fs from 'fs';

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

const updatedGreece = `    'Grecia': [
        { year: 2004, subject: 'Juegos Olímpicos Atenas', image: '/img/coins/2004/greece.jpg', mintage: 50000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2010, subject: 'Batalla de Maratón', mintage: 2500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: 'Juegos Olímpicos Especiales', mintage: 1000000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2013, subject: 'Unión de Creta con Grecia', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2013, subject: 'Academia Platónica', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2014, subject: '400 Aniv. El Greco', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2014, subject: '150 Aniv. Unión Islas Jónicas', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2015, subject: '75 Aniv. Muerte Spyros Louis', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2016, subject: '120 Aniv. Dimitri Mitropoulos', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2016, subject: 'Holocausto Arkadi', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2017, subject: 'Nikos Kazantzakis', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2017, subject: 'Sitio Arqueológico de Filipos', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2018, subject: 'Kostis Palamas', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2018, subject: 'Dodecaneso', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2019, subject: 'Manolis Andronicos', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2019, subject: 'Andreas Kalvos', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Batalla de las Termópilas', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Unión de Tracia', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2021, subject: 'Revolución Griega', mintage: 1500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2022, subject: 'Constitución Griega', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2023, subject: 'Maria Callas', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2023, subject: 'Constantin Carathéodory', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2024, subject: '150 Aniv. Penélope Delta', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2024, subject: '50 Aniv. Restauración Democracia', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
    ],`;
const startGr = content.indexOf("'Grecia': [");
const endGr = content.indexOf("    'Irlanda': [");
content = content.substring(0, startGr) + updatedGreece + '\n' + content.substring(endGr);

const updatedIr = `    'Irlanda': [
        { year: 2016, subject: 'Levantamiento de Pascua', mintage: 4500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2019, subject: 'Dáil Éireann (100 Aniv)', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2023, subject: '50 Aniv. Unión Europea', mintage: 500000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
    ],`;
const startIr = content.indexOf("'Irlanda': [");
const endIr = content.indexOf("    'Italia': [");
content = content.substring(0, startIr) + updatedIr + '\n' + content.substring(endIr);

const updatedIt = `    'Italia': [
        {
            year: 2004,
            subject: 'Programa Mundial de Alimentos',
            image: '/img/coins/2004/italy.png',
            date: '13-12-2004',
            mintage: 16000000,
            estimatedPrice: '3.50€ - 5.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 16000000 }
            ]
        },
        {
            year: 2005,
            subject: 'Constitución Europea',
            image: '/img/coins/2005/italy.jpg?v=191',
            date: '29-10-2005',
            mintage: 18000000,
            estimatedPrice: '3.50€ - 5.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 18000000 }
            ]
        },
        {
            year: 2006,
            subject: 'Juegos Olímpicos Turín',
            image: '/img/coins/2006/italy.jpg?v=202',
            date: '10-02-2006',
            mintage: 40000000,
            estimatedPrice: '3.00€ - 4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 40000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2_%E2%82%AC_commemorativo_Italia_2008.jpg&w=500',
            date: '10-12-2008',
            mintage: 5000000,
            estimatedPrice: '3.50€ - 5.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 }
            ]
        },
        { year: 2009, subject: 'Louis Braille', mintage: 2000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2010, subject: 'Cavour', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: '150 Aniv. Unificación Italia', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2012, subject: 'Giovanni Pascoli', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: 'Giuseppe Verdi', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: 'Giovanni Boccaccio', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2014, subject: 'Carabinieri', mintage: 6500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2014, subject: 'Galileo Galilei', mintage: 6500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2015, subject: 'Dante Alighieri', mintage: 3500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: 'EXPO Milan', mintage: 3500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Donatello', mintage: 1500000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2016, subject: 'Plauto', mintage: 1500000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2017, subject: 'San Marcos Venecia', mintage: 1500000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2017, subject: 'Tito Livio', mintage: 1500000, estimatedPrice: '4.50€ - 7.00€' },
        { year: 2018, subject: 'Ministerio Sanidad', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2018, subject: 'Constitución Italiana', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2019, subject: 'Leonardo da Vinci', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2020, subject: 'Vigili del Fuoco', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2020, subject: 'Maria Montessori', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2021, subject: 'Roma Capital', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2021, subject: 'Profesiones Sanitarias', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2022, subject: 'Policía Nacional', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2022, subject: 'Jueces Falcone y Borsellino', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2023, subject: 'Fuerza Aérea', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2023, subject: 'Alessandro Manzoni', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2024, subject: 'Guardia di Finanza', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2024, subject: 'Rita Levi-Montalcini', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2025, subject: 'Corte Suprema de Casación', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
    ],`;
const startIt = content.indexOf("'Italia': [");
const endIt = content.indexOf("    'Letonia': [");
content = content.substring(0, startIt) + updatedIt + '\n' + content.substring(endIt);

const updatedLv = `    'Letonia': [
        { year: 2014, subject: 'Riga Capital Cultura', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: 'Presidencia UE', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: 'Cigüeña Negra', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Agricultura Letona', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Región de Vidzeme', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: 'Región de Kurzeme', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2017, subject: 'Región de Latgale', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2018, subject: 'Estados Bálticos (Conjunta)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2018, subject: 'Región de Zemgale', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2019, subject: 'Sol Naciente', mintage: 300000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Cerámica de Latgale', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2021, subject: '100 Aniv. Reconocimiento de iure', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2022, subject: 'Alfabetización Financiera', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'Girasol Ucraniano', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2024, subject: 'Emisión 2024', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2025, subject: 'Patrimonio Hanseático', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
    ],`;
const startLv = content.indexOf("'Letonia': [");
const endLv = content.indexOf("    'Lituania': [");
content = content.substring(0, startLv) + updatedLv + '\n' + content.substring(endLv);

const updatedLt = `    'Lituania': [
        { year: 2015, subject: 'Lengua Lituana', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Cultura Báltica', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: 'Vilnius Capital Cultura', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2018, subject: 'Festival Canto y Danza', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2018, subject: 'Estados Bálticos (Conjunta)', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2019, subject: 'Sutartinės (Canciones)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2019, subject: 'Samogitia', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2020, subject: 'Colina de las Cruces', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2020, subject: 'Aukštaitija', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2021, subject: 'Reserva Biosfera Žuvintas', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2021, subject: 'Dzūkija', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2022, subject: '100 Años Baloncesto', mintage: 750000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2022, subject: 'Suvalkija', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'Junto con Ucrania', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2024, subject: 'Jardines de Paja (Sodai)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2025, subject: 'Pintura Simbolista (Čiurlionis)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 500000, estimatedPrice: '4.50€ - 7.50€' },
    ],`;
const startLt = content.indexOf("'Lituania': [");
const endLt = content.indexOf("    'Luxemburgo': [");
content = content.substring(0, startLt) + updatedLt + '\n' + content.substring(endLt);

fs.writeFileSync('src/data/CommemorativeCatalog.js', content);
console.log('Filled Greece, Ireland, Italy, Latvia, Lithuania.');
