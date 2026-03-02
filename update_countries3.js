import fs from 'fs';

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

const updatedFr = `    'Francia': [
        {
            year: 2008,
            subject: 'Presidencia UE',
            image: '/img/coins/2008/france.jpg',
            date: '01-07-2008',
            mintage: 20000000,
            estimatedPrice: '3.00€ - 4.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 20000000 }
            ]
        },
        { year: 2010, subject: 'Llamamiento 1940 (De Gaulle)', mintage: 20000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2011, subject: 'Fiesta de la Música', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2012, subject: 'Abbé Pierre', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2013, subject: 'Tratado del Elíseo', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: 'Pierre de Coubertin', mintage: 1000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2014, subject: 'Día Mundial SIDA', mintage: 3000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Desembarco de Normandía', mintage: 3000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: 'Paz en Europa 1945-2015', mintage: 4000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2015, subject: 'Federación Festival', mintage: 4000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2016, subject: 'Copa Euro UEFA 2016', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2016, subject: 'François Mitterrand', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2017, subject: 'Lucha contra Cáncer Mama', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2017, subject: 'Rodin', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: 'Aciano de Francia', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: 'Simone Veil', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2019, subject: '60 Aniv. Astérix', mintage: 310000, estimatedPrice: '12.00€ - 20.00€' }, // Sólo coincards
        { year: 2019, subject: '30 Aniv. Muro Berlín', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2020, subject: 'De Gaulle (Llamamiento)', mintage: 18000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2020, subject: 'Investigación Médica', mintage: 310000, estimatedPrice: '12.00€ - 20.00€' },
        { year: 2021, subject: 'UNICEF 75 Años', mintage: 7500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2021, subject: 'Juegos Olímpicos París 2024 (1/4)', mintage: 510000, estimatedPrice: '10.00€ - 16.00€' },
        { year: 2022, subject: '90 Aniv. Jacques Chirac', mintage: 9000000, estimatedPrice: '3.00€ - 5.00€' },
        { year: 2022, subject: 'Juegos Olímpicos París 2024 (2/4)', mintage: 260000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2023, subject: 'Juegos Olímpicos París 2024 (3/4)', mintage: 260000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2023, subject: 'Copa Mundial Rugby', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2024, subject: 'Hércules (JJOO)', mintage: 24000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2024, subject: 'Antorcha Olímpica (JJOO)', mintage: 260000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2025, subject: 'Louvre', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
    ],`;
const startFr = content.indexOf("'Francia': [");
const endFr = content.indexOf("    'Grecia': [");
content = content.substring(0, startFr) + updatedFr + '\n' + content.substring(endFr);

const updatedCy = `    'Chipre': [
        { year: 2017, subject: 'Paphos Capital Europea Cultura', mintage: 430000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2020, subject: '30 Aniv. Instituto Neurología Genética', mintage: 412000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: '60 Aniv. Banco Central Chipre', mintage: 412000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2024, subject: '20 Años Ingreso UE', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2026, subject: 'Presidencia UE', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
    ],`;
const startCy = content.indexOf("'Chipre': [");
const endCy = content.indexOf("    'Eslovaquia': [");
content = content.substring(0, startCy) + updatedCy + '\n' + content.substring(endCy);

const updatedSl = `    'Eslovaquia': [
        { year: 2009, subject: '20 Aniv. Revolución de Terciopelo', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: '20 Aniv. Grupo Visegrád', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: '1150 Aniv. Misión Cirilo y Metodio', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: '10 Aniv. Ingreso UE', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: '200 Aniv. Ľudovít Štúr', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: 'Presidencia UE', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: '550 Aniv. Universitas Istropolitana', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2018, subject: '25 Aniv. República Eslovaca', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2019, subject: '100 Aniv. Muerte Milan Rastislav', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2020, subject: '20 Aniv. Ingreso OCDE', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2021, subject: '100 Aniv. Alexander Dubček', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2022, subject: '300 Aniv. Máquina Vapor Atmosférica', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2023, subject: '100 Aniv. Primer Transfusión Sangre', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2023, subject: '200 Aniv. Correo Expreso Viena-Bratislava', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2024, subject: '100 Aniv. Maratón de la Paz de Košice', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2025, subject: '100 Aniv. Primer Torneo Deportivo Internacional', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2026, subject: '100 Aniv. Radiodifusión Eslovaca', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
    ],`;
const startSl = content.indexOf("'Eslovaquia': [");
const endSl = content.indexOf("    'Eslovenia': [");
content = content.substring(0, startSl) + updatedSl + '\n' + content.substring(endSl);

const updatedSlovenia = `    'Eslovenia': [
        {
            year: 2008,
            subject: '500 Aniv. Primož Trubar',
            image: 'https://commons.wikimedia.org/w/thumb.php?f=SL_2%E2%82%AC_2008_Trubar.png&w=500',
            date: '26-05-2008',
            mintage: 1000000,
            estimatedPrice: '3.50€ - 6.00€'
        },
        { year: 2010, subject: '200 Aniv. Jardín Botánico Liubliana', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: '100 Aniv. Franc Rozman', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: '800 Aniv. Cueva de Postojna', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: '600 Aniv. Coronación Barbara Celje', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2015, subject: '2000 Aniv. Emona (Liubliana)', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2016, subject: '25 Aniv. Independencia', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2017, subject: '10 Aniv. Euro en Eslovenia', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2018, subject: 'Día Mundial de las Abejas', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2019, subject: '100 Aniv. Universidad de Liubliana', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2020, subject: '500 Aniv. Adam Bohorič', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2021, subject: '200 Aniv. Museo Regional Carniola', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2022, subject: '150 Aniv. Jože Plečnik', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2023, subject: '150 Aniv. Josip Plemelj', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2024, subject: '250 Aniv. Biblioteca Nacional', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2025, subject: 'Mito de la Reina de las Serpientes', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
    ],`;
const startSlo = content.indexOf("'Eslovenia': [");
const endSlo = content.indexOf("    'España': [");
content = content.substring(0, startSlo) + updatedSlovenia + '\n' + content.substring(endSlo);

fs.writeFileSync('src/data/CommemorativeCatalog.js', content);
console.log('Filled France, Cyprus, Slovakia, Slovenia.');
