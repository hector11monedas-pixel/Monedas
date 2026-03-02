import fs from 'fs';

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

const updatedLu = `    'Luxemburgo': [
        {
            year: 2004,
            subject: 'Monograma Gran Duque Enrique',
            image: '/img/coins/2004/luxembourg.png',
            date: '23-06-2004',
            mintage: 2481800,
            estimatedPrice: '4.00€ - 8.00€ (UNC)',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2400000 }
            ]
        },
        {
            year: 2005,
            subject: '100 Aniv. Muerte Gran Duque Adolfo',
            image: '/img/coins/2005/luxembourg.jpg?v=191',
            date: '15-02-2005',
            mintage: 2769000,
            estimatedPrice: '5.00€ - 10.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2720000 }
            ]
        },
        {
            year: 2006,
            subject: '25 Aniv. Gran Duque Guillermo',
            image: '/img/coins/2006/luxembourg.jpg?v=202',
            date: '01-02-2006',
            mintage: 1000000,
            estimatedPrice: '5.00€ - 9.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 }
            ]
        },
        {
            year: 2007,
            subject: 'Palacio Gran Ducal',
            image: '/img/coins/2007/luxembourg.jpg?v=203',
            date: '02-02-2007',
            mintage: 1100000,
            estimatedPrice: '4.00€ - 7.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 }
            ]
        },
        {
            year: 2008,
            subject: 'Castillo de Berg',
            image: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/%E2%82%AC2_commemorative_coin_Luxembourg_2008.png&w=500',
            date: '01-02-2008',
            mintage: 1000000,
            estimatedPrice: '4.50€ - 7.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 }
            ]
        },
        { year: 2009, subject: 'Gran Duquesa Carlota', mintage: 800000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2010, subject: 'Escudo de Armas', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2011, subject: 'Juan de Luxemburgo', mintage: 700000, estimatedPrice: '5.50€ - 9.00€' },
        { year: 2012, subject: 'Guillermo IV', mintage: 700000, estimatedPrice: '5.50€ - 9.00€' },
        { year: 2012, subject: 'Boda Principesca', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2013, subject: 'Himno Nacional', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2014, subject: '175 Aniv. Independencia', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2014, subject: 'Ascensión al Trono', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2015, subject: '15 Aniv. Trono Henri', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2015, subject: '125 Aniv. Dinastía Nassau', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2016, subject: 'Puente Gran Duquesa Carlota', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2017, subject: 'Servicio Militar Voluntario', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2017, subject: '200 Aniv. Guillermo III', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2018, subject: '150 Aniv. Constitución', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2018, subject: 'Guillermo I', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2019, subject: 'Sufragio Universal', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2019, subject: '100 Aniv. Gran Duquesa Carlota', mintage: 300000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2020, subject: 'Nacimiento Príncipe Charles', mintage: 320000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2020, subject: 'Emisión 2020 (2)', mintage: 320000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2021, subject: '40 Aniv. Boda Henri y Teresa', mintage: 320000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2021, subject: '100 Aniv. Jean', mintage: 320000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2022, subject: '10 Aniv. Boda Guillaume y Stephanie', mintage: 250000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2022, subject: '50 Aniv. Bandera de Luxemburgo', mintage: 250000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2023, subject: '175 Aniv. Parlamento', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2023, subject: '25 Aniv. Comité Olímpico', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2024, subject: '175 Aniv. Franco Luxemburgués', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2024, subject: '100 Aniv. Febe del Gran Duque Juan', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 120000, estimatedPrice: '15.00€ - 25.00€' },
    ],`;
const startLu = content.indexOf("'Luxemburgo': [");
const endLu = content.indexOf("    'Malta': [");
content = content.substring(0, startLu) + updatedLu + '\n' + content.substring(endLu);

const updatedMalta = `    'Malta': [
        { year: 2011, subject: 'Primeros Representantes', mintage: 430000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2012, subject: 'Mayoría Representativa', mintage: 400000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2013, subject: 'Autogobierno 1921', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2014, subject: 'Independencia 1964', mintage: 400000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2014, subject: 'Policía de Malta', mintage: 300000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2015, subject: 'República 1974', mintage: 400000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2015, subject: 'Primer Vuelo Malta', mintage: 300000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2016, subject: 'Templos Ġgantija', mintage: 350000, estimatedPrice: '9.00€ - 16.00€' },
        { year: 2016, subject: 'Solidaridad con Amor', mintage: 380000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2017, subject: 'Templo Ħaġar Qim', mintage: 350000, estimatedPrice: '9.00€ - 16.00€' },
        { year: 2017, subject: 'Paz', mintage: 380000, estimatedPrice: '8.00€ - 15.00€' },
        { year: 2018, subject: 'Templo Mnajdra', mintage: 300000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2018, subject: 'Patrimonio Cultural', mintage: 320000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2019, subject: 'Templo Ta\\' Ħaġrat', mintage: 300000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2019, subject: 'Naturaleza y Medio Ambiente', mintage: 320000, estimatedPrice: '10.00€ - 18.00€' },
        { year: 2020, subject: 'Templo Skorba', mintage: 150000, estimatedPrice: '18.00€ - 30.00€' },
        { year: 2020, subject: 'Juegos', mintage: 220000, estimatedPrice: '12.00€ - 20.00€' },
        { year: 2021, subject: 'Templos Tarxien', mintage: 150000, estimatedPrice: '18.00€ - 30.00€' },
        { year: 2021, subject: 'Héroes Pandemia', mintage: 60000, estimatedPrice: '30.00€ - 50.00€' },
        { year: 2022, subject: 'Hipogeo Hal Saflieni', mintage: 150000, estimatedPrice: '18.00€ - 30.00€' },
        { year: 2022, subject: 'Resolución Paz y Seguridad', mintage: 50000, estimatedPrice: '35.00€ - 60.00€' },
        { year: 2023, subject: 'Llegada Franceses a Malta', mintage: 80000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2023, subject: 'Nicolás Copérnico', mintage: 80000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2024, subject: 'Ciudadela de Gozo', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2024, subject: 'Abeja Melífera', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2025, subject: 'Pintura Simbolista', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
    ],`;
const startMa = content.indexOf("'Malta': [");
const endMa = content.indexOf("    'Mónaco': [");
content = content.substring(0, startMa) + updatedMalta + '\n' + content.substring(endMa);

const updatedMo = `    'Mónaco': [
        { year: 2007, subject: 'Grace Kelly', mintage: 20000, estimatedPrice: '2000€ - 3500€' },
        { year: 2011, subject: 'Boda Príncipe Alberto II', mintage: 147877, estimatedPrice: '80€ - 150€' },
        { year: 2012, subject: '500 Aniv. Fundación Soberanía', mintage: 110000, estimatedPrice: '120€ - 200€' },
        { year: 2013, subject: '20 Aniv. Ingreso ONU', mintage: 1224151, estimatedPrice: '10€ - 18€' },
        { year: 2015, subject: '800 Aniv. Fortaleza Roca', mintage: 10000, estimatedPrice: '1200€ - 2000€' },
        { year: 2016, subject: '150 Aniv. Monte Carlo', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2017, subject: 'Compañía de Carabineros', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2018, subject: 'François Joseph Bosio', mintage: 16000, estimatedPrice: '400€ - 800€' },
        { year: 2019, subject: '200 Aniv. Honorato V', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2020, subject: 'Príncipe Honorato III', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2021, subject: '10 Aniv. Boda Alberto y Charlene', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2022, subject: '100 Aniv. Muerte Alberto I', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2023, subject: '100 Aniv. Rainiero III', mintage: 25000, estimatedPrice: '300€ - 500€' },
        { year: 2024, subject: '500 Aniv. Tratado con Carlos V', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2025, subject: 'Emisión 2025', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 15000, estimatedPrice: '500€ - 900€' },
    ],`;
const startMo = content.indexOf("'Mónaco': [");
const endMo = content.indexOf("    'Países Bajos': [");
content = content.substring(0, startMo) + updatedMo + '\n' + content.substring(endMo);

const updatedNl = `    'Países Bajos': [
        { year: 2011, subject: '500 Aniv. Elogio de la Locura', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: 'Anuncio Traspaso Trono', mintage: 20000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: '200 Aniv. Reino de Holanda', mintage: 3500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Doble Retrato Rey Guillermo', mintage: 5000000, estimatedPrice: '4.00€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 3000000, estimatedPrice: '4.00€ - 6.00€' },
    ],`;
const startNl = content.indexOf("'Países Bajos': [");
const endNl = content.indexOf("    'Portugal': [");
content = content.substring(0, startNl) + updatedNl + '\n' + content.substring(endNl);

const updatedPt = `    'Portugal': [
        {
            year: 2007,
            subject: 'Presidencia UE',
            image: '/img/coins/2007/portugal.jpg?v=203',
            date: '02-07-2007',
            mintage: 2000000,
            estimatedPrice: '5.00€ - 8.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1980000 }
            ]
        },
        { year: 2008, subject: '60 Aniv. Derechos Humanos', mintage: 1000000, estimatedPrice: '5.00€ - 9.00€' },
        { year: 2009, subject: 'Juegos Lusofonía', mintage: 1250000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2010, subject: 'Aniversario República', mintage: 2000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: 'Fernão Mendes Pinto', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2012, subject: 'Guimarães Capital Cultura', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2013, subject: 'Clérigos', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2014, subject: 'Revolución Claveles', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2014, subject: 'Año Família Ovelha', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2015, subject: 'Cruz Roja Portuguesa', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2015, subject: 'Timor Leste', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2016, subject: 'Juegos Olímpicos Río', mintage: 650000, estimatedPrice: '5.50€ - 8.50€' },
        { year: 2016, subject: 'Ponte 25 de Abril', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2017, subject: 'Policía Seguridad Pública', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2017, subject: 'Raul Brandão', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2018, subject: 'INCM', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2018, subject: 'Jardín Botánico Ayuda', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2019, subject: 'Descubrimiento Madeira', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2019, subject: 'Magallanes', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Universidad Coimbra', mintage: 360000, estimatedPrice: '7.50€ - 12.00€' },
        { year: 2020, subject: 'Naciones Unidas', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2021, subject: 'Presidencia UE', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2021, subject: 'Juegos Olímpicos Tokio', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2022, subject: 'Vuelo Cruzando el Atlántico Sur', mintage: 1000000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'Jornada Mundial Juventud', mintage: 1000000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'La Paz en Europa', mintage: 1000000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2024, subject: 'Revolución Claveles (50 Aniv)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2024, subject: 'Participación JJOO', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
    ],`;
const startPt = content.indexOf("'Portugal': [");
const endPt = content.indexOf("    'San Marino': [");
content = content.substring(0, startPt) + updatedPt + '\n' + content.substring(endPt);

const updatedSm = `    'San Marino': [
        {
            year: 2004,
            subject: 'Bartolomeo Borghesi',
            image: '/img/coins/2004/sanmarino.jpg',
            date: '15-12-2004',
            mintage: 110000,
            estimatedPrice: '120€ - 180€',
            formats: [
                { type: 'BU', title: 'Blister', quantity: 110000 }
            ]
        },
        {
            year: 2005,
            subject: 'Años Mundiales de la Física',
            image: '/img/coins/2005/sanmarino.jpg?v=191',
            date: '14-10-2005',
            mintage: 130000,
            estimatedPrice: '110€ - 160€',
            formats: [
                { type: 'BU', title: 'Blister', quantity: 130000 }
            ]
        },
        {
            year: 2006,
            subject: '500 Aniv. Muerte Cristóbal Colón',
            image: '/img/coins/2006/sanmarino.jpg?v=202',
            date: '17-10-2006',
            mintage: 120000,
            estimatedPrice: '90€ - 140€',
            formats: [
                { type: 'BU', title: 'Blister', quantity: 120000 }
            ]
        },
        {
            year: 2007,
            subject: 'Bicentenario Nacimiento Garibaldi',
            image: '/img/coins/2007/sanmarino.jpg?v=203',
            date: '09-10-2007',
            mintage: 130000,
            estimatedPrice: '40€ - 70€',
            formats: [
                { type: 'BU', title: 'Blister', quantity: 130000 }
            ]
        },
        {
            year: 2008,
            subject: 'Año Europeo del Diálogo Intercultural',
            image: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/San_Marino_%E2%82%AC2_Commemorative_2008.jpg&w=500',
            date: '05-09-2008',
            mintage: 130000,
            estimatedPrice: '60€ - 100€',
            formats: [
                { type: 'BU', title: 'Blister', quantity: 130000 }
            ]
        },
        { year: 2009, subject: 'Año Europeo de la Creatividad', mintage: 130000, estimatedPrice: '50€ - 80€' },
        { year: 2010, subject: 'Sandro Botticelli', mintage: 130000, estimatedPrice: '50€ - 80€' },
        { year: 2011, subject: 'Giorgio Vasari', mintage: 130000, estimatedPrice: '50€ - 80€' },
        { year: 2012, subject: '10 Años del Euro', mintage: 130000, estimatedPrice: '45€ - 75€' },
        { year: 2013, subject: 'Pinturicchio', mintage: 110000, estimatedPrice: '60€ - 90€' },
        { year: 2014, subject: 'Donato Bramante', mintage: 110000, estimatedPrice: '60€ - 90€' },
        { year: 2014, subject: 'Giacomo Puccini', mintage: 100000, estimatedPrice: '65€ - 95€' },
        { year: 2015, subject: 'Dante Alighieri', mintage: 100000, estimatedPrice: '65€ - 95€' },
        { year: 2015, subject: 'Reunificación Alemana', mintage: 100000, estimatedPrice: '65€ - 95€' },
        { year: 2016, subject: 'Donatello', mintage: 85000, estimatedPrice: '70€ - 110€' },
        { year: 2016, subject: 'William Shakespeare', mintage: 80000, estimatedPrice: '75€ - 120€' },
        { year: 2017, subject: 'Giotto', mintage: 70500, estimatedPrice: '80€ - 130€' },
        { year: 2017, subject: 'Turismo Sostenible', mintage: 70500, estimatedPrice: '80€ - 130€' },
        { year: 2018, subject: 'Tintoretto', mintage: 60500, estimatedPrice: '90€ - 140€' },
        { year: 2018, subject: 'Gian Lorenzo Bernini', mintage: 60500, estimatedPrice: '90€ - 140€' },
        { year: 2019, subject: 'Leonardo da Vinci', mintage: 54150, estimatedPrice: '100€ - 160€' },
        { year: 2019, subject: 'Filippo Lippi', mintage: 54150, estimatedPrice: '100€ - 160€' },
        { year: 2020, subject: 'Rafael', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2020, subject: 'Giambattista Tiepolo', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2021, subject: 'Caravaggio', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2021, subject: 'Albrecht Dürer', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2022, subject: 'Piero della Francesca', mintage: 55000, estimatedPrice: '95€ - 150€' },
        { year: 2022, subject: 'Antonio Canova', mintage: 55000, estimatedPrice: '95€ - 150€' },
        { year: 2023, subject: 'Pinturicchio (500 Aniv)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2023, subject: 'Luca Signorelli', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2024, subject: 'Emisión 2024 (1)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2024, subject: 'Emisión 2024 (2)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 56000, estimatedPrice: '95€ - 150€' },
    ],`;
const startSm = content.indexOf("'San Marino': [");
const endSm = content.indexOf("    'Vaticano': [");
content = content.substring(0, startSm) + updatedSm + '\n' + content.substring(endSm);

const updatedVa = `    'Vaticano': [
        {
            year: 2004,
            subject: '75 Aniv. Fundación Estado',
            image: '/img/coins/2004/vatican.jpg',
            date: '15-12-2004',
            mintage: 85000,
            estimatedPrice: '140€ - 220€',
            formats: [
                { type: 'BU', title: 'Folder', quantity: 85000 }
            ]
        },
        {
            year: 2005,
            subject: 'XX Jornada Mundial Juventud',
            image: '/img/coins/2005/vatican.jpg?v=191',
            date: '06-12-2005',
            mintage: 100000,
            estimatedPrice: '250€ - 400€',
            formats: [
                { type: 'BU', title: 'Folder', quantity: 100000 }
            ]
        },
        {
            year: 2006,
            subject: 'Guardia Suiza Pontificia',
            image: '/img/coins/2006/vatican.jpg?v=202',
            date: '09-11-2006',
            mintage: 100000,
            estimatedPrice: '180€ - 300€',
            formats: [
                { type: 'BU', title: 'Folder', quantity: 100000 }
            ]
        },
        {
            year: 2007,
            subject: '80 Cumpleaños Benedicto XVI',
            image: '/img/coins/2007/vatican.jpg?v=203',
            date: '23-10-2007',
            mintage: 100000,
            estimatedPrice: '100€ - 160€',
            formats: [
                { type: 'BU', title: 'Folder', quantity: 100000 }
            ]
        },
        {
            year: 2008,
            subject: 'Año de San Pablo',
            image: 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/San_Paolo.jpg&w=500',
            date: '15-10-2008',
            mintage: 100000,
            estimatedPrice: '90€ - 150€',
            formats: [
                { type: 'BU', title: 'Folder', quantity: 100000 }
            ]
        },
        { year: 2009, subject: 'Año de la Astronomía (Galileo)', mintage: 106000, estimatedPrice: '80€ - 140€' },
        { year: 2010, subject: 'Año Sacerdotal', mintage: 115000, estimatedPrice: '60€ - 100€' },
        { year: 2011, subject: 'Jornada Mundial Juventud Madrid', mintage: 115000, estimatedPrice: '60€ - 100€' },
        { year: 2012, subject: 'VII Encuentro Mundial Familias', mintage: 115000, estimatedPrice: '60€ - 100€' },
        { year: 2013, subject: 'Sede Vacante 2013', mintage: 125000, estimatedPrice: '50€ - 90€' },
        { year: 2013, subject: 'Jornada Mundial Juventud Río', mintage: 125000, estimatedPrice: '50€ - 90€' },
        { year: 2014, subject: 'Caída Muro de Berlín', mintage: 103000, estimatedPrice: '70€ - 120€' },
        { year: 2015, subject: 'Encuentro Familias Filadelfia', mintage: 122000, estimatedPrice: '50€ - 90€' },
        { year: 2016, subject: 'Gendarmería Vaticana', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2016, subject: 'Año Santo Misericordia', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2017, subject: 'Apariciones Fátima', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2017, subject: 'Martirio San Pedro y San Pablo', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2018, subject: 'Padre Pío', mintage: 101000, estimatedPrice: '70€ - 120€' },
        { year: 2018, subject: 'Patrimonio Cultural', mintage: 101000, estimatedPrice: '70€ - 120€' },
        { year: 2019, subject: 'Fundación Estado 1929', mintage: 85000, estimatedPrice: '80€ - 130€' },
        { year: 2019, subject: 'Capilla Sixtina', mintage: 85000, estimatedPrice: '80€ - 130€' },
        { year: 2020, subject: 'Juan Pablo II', mintage: 74000, estimatedPrice: '90€ - 150€' },
        { year: 2020, subject: 'Rafael', mintage: 74000, estimatedPrice: '90€ - 150€' },
        { year: 2021, subject: 'Caravaggio', mintage: 86000, estimatedPrice: '80€ - 130€' },
        { year: 2021, subject: 'Dante Alighieri', mintage: 86000, estimatedPrice: '80€ - 130€' },
        { year: 2022, subject: 'Papa Pablo VI', mintage: 78000, estimatedPrice: '85€ - 140€' },
        { year: 2022, subject: 'Madre Teresa Cúcuta', mintage: 78000, estimatedPrice: '85€ - 140€' },
        { year: 2023, subject: 'Pinturicchio (500 Aniv) / Pietro Perugino', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2023, subject: 'Alessandro Manzoni', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2024, subject: 'Emisión 2024 (1)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2024, subject: 'Emisión 2024 (2)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 80000, estimatedPrice: '80€ - 130€' },
    ]`;
const startVa = content.indexOf("'Vaticano': [");
const endVa = content.lastIndexOf("]");
// Since Vaticano is the last one in COUNTRY_CATALOGS, we find the end of its array by finding the closing array bracket right before the end of the object
content = content.substring(0, startVa) + updatedVa + '\n};\n\nexport { JOINT_ISSUES, COUNTRY_CATALOGS, hasJointIssue };\n';

fs.writeFileSync('src/data/CommemorativeCatalog.js', content);
console.log('Filled remaining countries.');
