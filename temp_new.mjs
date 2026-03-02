// Commemorative Catalog 2004-2025
// Includes Joint Issues and Country-Specific Releases

export const GERMAN_MINTS = ['A', 'D', 'F', 'G', 'J'];

const JOINT_ISSUES = [
    {
        year: 2007,
        subject: '50 Aniv. Tratado de Roma',
        participants: ['Alemania', 'Austria', 'Bélgica', 'Eslovenia', 'España', 'Finlandia', 'Francia', 'Grecia', 'Irlanda', 'Italia', 'Luxemburgo', 'Países Bajos', 'Portugal'],
        description: 'La moneda conmemora el 50º aniversario del Tratado de Roma. El diseño muestra el documento del Tratado firmado por los seis estados fundadores sobre un fondo que evoca el pavimento de la Plaza del Campidoglio en Roma (diseñado por Miguel Ángel), donde se firmó el tratado el 25 de marzo de 1957. La inscripción varía según el país.',
        designer: 'Helmut Andexlinger',
        estimatedPrice: 'Variable según país'
    },
    { year: 2009, subject: '10 Aniv. Unión Económica y Monetaria (UEM)', participants: ['Alemania', 'Austria', 'Bélgica', 'Chipre', 'Eslovaquia', 'Eslovenia', 'España', 'Finlandia', 'Francia', 'Grecia', 'Irlanda', 'Italia', 'Luxemburgo', 'Malta', 'Países Bajos', 'Portugal'] },
    { year: 2012, subject: '10 Aniv. Billetes y Monedas Euro', participants: ['Alemania', 'Austria', 'Bélgica', 'Chipre', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Irlanda', 'Italia', 'Luxemburgo', 'Malta', 'Países Bajos', 'Portugal'] },
    { year: 2015, subject: '30 Aniv. Bandera Europea', participants: ['Alemania', 'Austria', 'Bélgica', 'Chipre', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Irlanda', 'Italia', 'Letonia', 'Lituania', 'Luxemburgo', 'Malta', 'Países Bajos', 'Portugal'] },
    { year: 2022, subject: '35 Aniv. Programa Erasmus', participants: ['Alemania', 'Austria', 'Bélgica', 'Chipre', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Irlanda', 'Italia', 'Letonia', 'Lituania', 'Luxemburgo', 'Malta', 'Países Bajos', 'Portugal'] }
];

// Helper to determine if a country participated in a joint issue
const hasJointIssue = (country, year) => {
    const issue = JOINT_ISSUES.find(i => i.year === year);
    if (!issue) return false;
    return issue.participants.includes(country);
};

// Specific Catalogs per Country
const COUNTRY_CATALOGS = {

    'Alemania': [
        // German Bundesländer Series I
        {
            year: 2006,
            subject: 'Schleswig-Holstein (Holstentor)',
            image: '/img/coins/2006/germany.jpg?v=202',
            date: '03-02-2006',
            mintage: 30000000,
            description: 'La moneda muestra la Holstentor, puerta emblemática de la ciudad de Lübeck. Debajo de la puerta aparecen las palabras "SCHLESWIG-HOLSTEIN". Es la primera de la serie de los "Länder" (estados federados).',
            designer: 'Heinz Hoyer',
            edge: 'EINIGKEIT UND RECHT UND FREIHEIT',
            estimatedPrice: '3.00€ - 4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 }
            ]
        },
        {
            year: 2007,
            subject: 'Mecklenburg-Vorpommern (Castillo de Schwerin)',
            image: '/img/coins/2007/germany.jpg?v=203',
            mintage: 30000000,
            estimatedPrice: '3.00€ - 4.50€'
        },
        {
            year: 2008,
            subject: 'Hamburg (St. Michaelis)',
            image: 'https://commons.wikimedia.org/w/thumb.php?f=Germany-2-euro-2008.jpg&w=500',
            date: '01-02-2008',
            mintage: 30000000,
            description: 'La moneda muestra la iglesia barroca de St. Michaelis, conocida popularmente como "Michel".',
            designer: 'Erich Ott',
            edge: 'EINIGKEIT UND RECHT UND FREIHEIT',
            estimatedPrice: '3.00€ - 4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 }
            ]
        },
        { year: 2009, subject: 'Saarland (Ludwigskirche)', image: '/img/coins/2009/germany.jpg', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2010, subject: 'Bremen (Ayuntamiento y Roland)', image: '/img/coins/2010/germany.jpg', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2011, subject: 'Nordrhein-Westfalen (Catedral de Colonia)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2012, subject: 'Bayern (Castillo de Neuschwanstein)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },

        { year: 2013, subject: 'Baden-Württemberg (Monasterio de Maulbronn)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: '50 Aniv. Tratado del Elíseo', mintage: 11000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2014, subject: 'Niedersachsen (Iglesia de San Miguel)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2015, subject: 'Hessen (Paulskirche)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2015, subject: '25 Aniv. Reunificación Alemana', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2016, subject: 'Sachsen (Zwinger de Dresde)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2017, subject: 'Rheinland-Pfalz (Porta Nigra)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: 'Berlin (Palacio de Charlottenburg)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: '100 Aniv. Helmut Schmidt', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2019, subject: 'Bundesrat (70 Aniversario)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2019, subject: '30 Aniv. Caída Muro de Berlín', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2020, subject: 'Brandenburg (Palacio de Sanssouci)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2020, subject: '50 Aniv. Genuflexión de Varsovia', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2021, subject: 'Sachsen-Anhalt (Catedral de Magdeburgo)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2022, subject: 'Thüringen (Castillo de Wartburg)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        // Bundesländer Series II
        { year: 2023, subject: 'Hamburg (Elbphilharmonie)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2023, subject: '1275 Aniv. Carlomagno', mintage: 20000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2024, subject: 'Mecklenburg-Vorpommern (Königsstuhl)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2024, subject: '175 Aniv. Constitución Paulskirche', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2025, subject: 'Saarland (Saarschleife)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2025, subject: '35 Aniv. Unidad Alemana', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2026, subject: 'Bremen II (Klimahaus Bremerhaven)', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2026, subject: '275 Aniv. Nacimiento Goethe', mintage: 30000000, estimatedPrice: '3.00€ - 4.50€' },
    ],

    'Andorra': [
        { year: 2014, subject: '20 Aniv. Ingreso en el Consejo de Europa', mintage: 105000, estimatedPrice: '30€ - 50€' },
        { year: 2015, subject: '20 Años Firma Acuerdo Aduanero', mintage: 85000, estimatedPrice: '20€ - 35€' },
        { year: 2015, subject: '30 Aniv. Mayoría de Edad', mintage: 85000, estimatedPrice: '20€ - 35€' },
        { year: 2016, subject: '25 Aniv. Radio y Televisión de Andorra', mintage: 85000, estimatedPrice: '15€ - 25€' },
        { year: 2016, subject: '150 Aniv. Nueva Reforma 1866', mintage: 85000, estimatedPrice: '15€ - 25€' },
        { year: 2017, subject: '100 Aniv. Himno de Andorra', mintage: 85000, estimatedPrice: '15€ - 25€' },
        { year: 2017, subject: 'El País de los Pirineos', mintage: 85000, estimatedPrice: '15€ - 25€' },
        { year: 2018, subject: '25 Aniv. Constitución de Andorra', mintage: 75000, estimatedPrice: '18€ - 30€' },
        { year: 2018, subject: '70 Aniv. Declaración Derechos Humanos', mintage: 75000, estimatedPrice: '18€ - 30€' },
        { year: 2019, subject: 'Finales Copa del Mundo de Esquí', mintage: 60000, estimatedPrice: '25€ - 40€' },
        { year: 2019, subject: '600 Aniv. Consell de la Terra', mintage: 60000, estimatedPrice: '25€ - 40€' },
        { year: 2020, subject: '27 Cumbre Iberoamericana', mintage: 73500, estimatedPrice: '20€ - 35€' },
        { year: 2020, subject: '50 Aniv. Sufragio Universal Femenino', mintage: 60000, estimatedPrice: '25€ - 40€' },
        { year: 2021, subject: '100 Aniv. Coronación Meritxell', mintage: 73750, estimatedPrice: '18€ - 30€' },
        { year: 2021, subject: 'Cuidamos de nuestros mayores', mintage: 70000, estimatedPrice: '20€ - 35€' },
        { year: 2022, subject: '10 Aniv. Acuerdo Monetario', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2022, subject: 'Leyenda de Carlomagno', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2023, subject: '30 Aniv. Ingreso en la ONU', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2023, subject: 'Fiestas del Fuego del Solsticio', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2024, subject: '100 Aniv. Esquí en Andorra', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2024, subject: 'Copa del Mundo BTT', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2025, subject: 'Juegos de los Pequeños Estados de Europa', mintage: 70000, estimatedPrice: '18€ - 30€' },
        { year: 2025, subject: 'Casa de la Vall', mintage: 70000, estimatedPrice: '18€ - 30€' },
    ],
    'Austria': [
        {
            year: 2005,
            subject: '50 Aniv. Tratado de Estado de Austria',
            image: '/img/coins/2005/austria.jpg?v=191',
            date: '11-05-2005',
            mintage: 7000000,
            description: 'El centro de la moneda muestra una reproducción de las firmas y sellos del Tratado de Estado de Austria, firmado en mayo de 1955. La inscripción "50 JAHRE STAATSVERTRAG" aparece sobre los sellos. El fondo tiene rayas verticales que representan los colores nacionales de Austria (rojo-blanco-rojo).',
            designer: 'Helmut Andexlinger',
            edge: '2 EURO *** (x4)',
            estimatedPrice: '15€ - 25€ (UNC)',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 6880000 }
            ]
        },
        { year: 2016, subject: '200 Aniv. Banco Nacional de Austria', mintage: 16000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: '100 Años República de Austria', mintage: 18100100, estimatedPrice: '3.00€ - 4.50€' },
    ],
    'Bélgica': [
        {
            year: 2005,
            subject: 'Unión Económica Bélgica-Luxemburgo',
            image: '/img/coins/2005/belgium.jpg?v=191',
            date: '20-05-2005',
            mintage: 6000000,
            description: 'La moneda muestra los perfiles superpuestos del Rey Alberto II de Bélgica y el Gran Duque Enrique de Luxemburgo mirando hacia la izquierda.',
            designer: 'Luc Luycx',
            edge: '2 ** (x6)',
            estimatedPrice: '6€ - 12€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5977000 }
            ]
        },
        {
            year: 2006,
            subject: 'Atomium',
            image: '/img/coins/2006/belgium.jpg?v=202',
            date: '10-04-2006',
            mintage: 5000000,
            description: 'La moneda muestra una imagen del Atomium.',
            designer: 'Luc Luycx',
            edge: '2 ** (x6)',
            estimatedPrice: '5.00€ - 8.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/belgium.jpg',
            date: '01-05-2008',
            mintage: 5000000,
            estimatedPrice: '4.00€ - 7.00€'
        },
        { year: 2009, subject: '200 Aniv. Louis Braille', mintage: 5000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2010, subject: 'Presidencia UE', mintage: 5000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2011, subject: '100 Aniv. Día de la Mujer', mintage: 5000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2012, subject: '75 Aniv. Concurso Reina Elisabeth', mintage: 5000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: '100 Aniv. Tour de Francia', mintage: 2000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2013, subject: 'Instituto Real Meteorológico', mintage: 2000000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2014, subject: '100 Aniv. Primera Guerra Mundial', mintage: 1750000, estimatedPrice: '5.00€ - 9.00€' },
        { year: 2014, subject: '150 Años Cruz Roja', mintage: 287500, estimatedPrice: '25€ - 45€' },
        { year: 2015, subject: 'Año Europeo del Desarrollo', mintage: 250000, estimatedPrice: '15€ - 25€' },
        { year: 2016, subject: 'Juegos Olímpicos Río', mintage: 375000, estimatedPrice: '10€ - 18€' },
        { year: 2016, subject: 'Child Focus', mintage: 1020000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2017, subject: 'Universidad de Lieja', mintage: 200000, estimatedPrice: '15€ - 25€' },
        { year: 2017, subject: 'Universidad de Gante', mintage: 200000, estimatedPrice: '15€ - 25€' },
        { year: 2018, subject: 'Mayo del 68', mintage: 257500, estimatedPrice: '12€ - 20€' },
        { year: 2018, subject: 'Satélite ESRO 2B', mintage: 257500, estimatedPrice: '15€ - 25€' },
        { year: 2019, subject: '450 Aniv. Pieter Brueghel', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2019, subject: '25 Aniv. Instituto Monetario Europeo', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2020, subject: 'Año Internacional Sanidad Vegetal', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2020, subject: 'Jan van Eyck', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2021, subject: 'Unión Económica Bélgica-Luxemburgo', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2021, subject: 'Carlos V', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2022, subject: 'Sector Sanitario (COVID-19)', mintage: 2000000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'Año del Art Nouveau', mintage: 155000, estimatedPrice: '15€ - 25€' },
        { year: 2024, subject: 'Presidencia UE', mintage: 130000, estimatedPrice: '15€ - 25€' },
        { year: 2024, subject: 'Lucha contra Cáncer', mintage: 130000, estimatedPrice: '15€ - 25€' },
        { year: 2025, subject: '750 Aniv. Gremio de Cerveceros', mintage: 130000, estimatedPrice: '15€ - 25€' },
        { year: 2025, subject: 'Centenario Universidad KU Leuven', mintage: 130000, estimatedPrice: '15€ - 25€' },
    ],
    'Chipre': [
        { year: 2017, subject: 'Paphos Capital Europea Cultura', mintage: 430000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2020, subject: '30 Aniv. Instituto Neurología Genética', mintage: 412000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: '60 Aniv. Banco Central Chipre', mintage: 412000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2024, subject: '20 Años Ingreso UE', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2026, subject: 'Presidencia UE', mintage: 400000, estimatedPrice: '4.50€ - 7.50€' },
    ],
    'Eslovaquia': [
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
    ],
    'Eslovenia': [
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
    ],
    'España': [
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
    ],
    'Estonia': [
        { year: 2016, subject: '100 Aniv. Paul Keres' },
        { year: 2017, subject: 'Camino a la Independencia' },
        { year: 2018, subject: '100 Aniv. República de Estonia' }, // Joint with LV/LT
        { year: 2018, subject: '100 Aniv. Independencia' },
        { year: 2019, subject: '150 Aniv. Festival de la Canción' },
        { year: 2019, subject: '100 Aniv. Universidad de Tartu' },
        { year: 2020, subject: '200 Aniv. Antártida' },
        { year: 2020, subject: 'Tratado de Paz de Tartu' },
        { year: 2021, subject: 'Pueblos Finougrios' },
        { year: 2021, subject: 'El Lobo (Animal Nacional)' },
        { year: 2022, subject: '150 Aniv. Sociedad Literaria' },
        { year: 2022, subject: 'Slava Ukraini' },
        { year: 2023, subject: 'Ave Nacional (Golondrina)' },
        { year: 2024, subject: 'Flor Nacional (Aciano)' },
        { year: 2025, subject: '500 Aniv. Primer Libro Estonio' },
        { year: 2026, subject: 'Estado Digital' },
    ],
    'Finlandia': [
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
    ],
    'Francia': [
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
    ],
    'Grecia': [
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
    ],
    'Irlanda': [
        { year: 2016, subject: 'Levantamiento de Pascua', mintage: 4500000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2019, subject: 'Dáil Éireann (100 Aniv)', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2023, subject: '50 Aniv. Unión Europea', mintage: 500000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 1000000, estimatedPrice: '4.00€ - 6.00€' },
    ],
    'Italia': [
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
    ],
    'Letonia': [
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
    ],
    'Lituania': [
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
    ],
    'Luxemburgo': [
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
    ],
    'Malta': [
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
        { year: 2019, subject: 'Templo Ta\' Ħaġrat', mintage: 300000, estimatedPrice: '10.00€ - 18.00€' },
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
    ],
    'Mónaco': [
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
    ],
    'Países Bajos': [
        { year: 2011, subject: '500 Aniv. Elogio de la Locura', mintage: 4000000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2013, subject: 'Anuncio Traspaso Trono', mintage: 20000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2013, subject: '200 Aniv. Reino de Holanda', mintage: 3500000, estimatedPrice: '4.00€ - 6.00€' },
        { year: 2014, subject: 'Doble Retrato Rey Guillermo', mintage: 5000000, estimatedPrice: '4.00€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026', mintage: 3000000, estimatedPrice: '4.00€ - 6.00€' },
    ],
    'Portugal': [
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
    ],
    'San Marino': [
        {
            year: 2004,
            subject: 'Bartolomeo Borghesi',
            image: '/img/coins/2004/san_marino.png',
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
    ],
    'Vaticano': [
        {
            year: 2004,
            subject: '75 Aniv. Fundación Estado',
            image: '/img/coins/2004/vatican.png',
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
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 80000, estimatedPrice: '80€ - 130€' }
    ]
};

export const calculateCommemorativeCatalogSize = () => {
    let count = JOINT_ISSUES.length * 19; // Approximation for joint issues isn't great, better to just sum carefully
    count = 0;
    Object.keys(COUNTRY_CATALOGS).forEach(country => {
        count += getCatalogForCountry(country).length;
    });
    return count;
};

export const getCatalogForCountry = (country) => {
    const list = [];
    if (COUNTRY_CATALOGS[country]) {
        list.push(...COUNTRY_CATALOGS[country].map(c => ({ ...c, country })));
    }
    JOINT_ISSUES.forEach(issue => {
        if (issue.participants.includes(country)) {
            list.push({ ...issue, country, isJoint: true });
        }
    });
    return list.sort((a, b) => a.year - b.year);
};

export const getCommemorativesByYear = (year) => {
    const list = [];
    JOINT_ISSUES.forEach(issue => {
        if (issue.year === year) {
            issue.participants.forEach(country => {
                list.push({ ...issue, country, isJoint: true });
            });
        }
    });
    Object.entries(COUNTRY_CATALOGS).forEach(([country, coins]) => {
        coins.forEach(coin => {
            if (coin.year === year) {
                list.push({ ...coin, country });
            }
        });
    });
    return list;
};

export { JOINT_ISSUES, COUNTRY_CATALOGS, hasJointIssue };
