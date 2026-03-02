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
            estimatedPrice: '9.00€ - 19.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 },
                { type: 'BU', title: 'Set Anual', quantity: 145000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 70000 }
            ]
        },
        {
            year: 2007,
            subject: 'Mecklenburg-Vorpommern (Castillo de Schwerin)',
            image: '/img/coins/2007/germany.jpg?v=203',
            estimatedPrice: '10.00€'
        },
        {
            year: 2008,
            subject: 'Hamburg (St. Michaelis)',
            image: '/img/coins/2008/alemania.jpg?v=203',
            date: '01-02-2008',
            mintage: 30000000,
            description: 'La moneda muestra la iglesia barroca de St. Michaelis, conocida popularmente como "Michel". Es un símbolo de la ciudad y del estado federal de Hamburgo. Debajo de la imagen aparece la inscripción "HAMBURG". En la parte superior derecha se encuentra la marca de ceca.',
            designer: 'Erich Ott',
            edge: 'EINIGKEIT UND RECHT UND FREIHEIT',
            estimatedPrice: '4.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 },
                { type: 'BU', title: 'Set Anual', quantity: 140000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 70000 }
            ]
        },
        { year: 2009, subject: 'Saarland (Ludwigskirche)', image: '/img/coins/2009/germany-2-euro-2009.jpg', mintage: 30000000, estimatedPrice: '5.00€' },
        { year: 2010, subject: 'Bremen (Ayuntamiento y Roland)', image: '/img/coins/2010/germany-2-euro-2010.jpg', mintage: 30000000, estimatedPrice: '5.00€' },
        { year: 2011, subject: 'Nordrhein-Westfalen (Catedral de Colonia)', image: '/img/coins/2011/germany-2-euro-2011.jpg', mintage: 30000000, estimatedPrice: '7.00€' },
        { year: 2012, subject: 'Bayern (Castillo de Neuschwanstein)', image: '/img/coins/2012/germany-2-euro-2012.jpg', mintage: 30000000, estimatedPrice: '4.00€' },

        { year: 2013, subject: 'Baden-Württemberg (Monasterio de Maulbronn)', image: '/img/coins/2013/germany-2-euro-2013-baden.jpg', mintage: 30000000, estimatedPrice: '4.20€' },
        { year: 2013, subject: '50 Aniv. Tratado del Elíseo', image: '/img/coins/2013/germany-2-euro-2013-tratado.jpg', mintage: 11000000, estimatedPrice: '3.90€' },
        { year: 2014, subject: 'Niedersachsen (Iglesia de San Miguel)', image: '/img/coins/2014/germany-2-euro-2014.jpg', mintage: 30000000, estimatedPrice: '5.90€' },
        { year: 2015, subject: 'Hessen (Paulskirche)', image: '/img/coins/2015/germany-2-euro-2015-hesse.jpg', mintage: 30000000, estimatedPrice: '5.90€' },
        { year: 2015, subject: '25 Aniv. Reunificación Alemana', image: '/img/coins/2015/germany-2-euro-2015-reunificacion.jpg', mintage: 30000000, estimatedPrice: '4.00€' },
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
        { year: 2014, subject: '20 Aniv. Ingreso en el Consejo de Europa', image: '/img/coins/2014/andorra-2-euro-2014.jpg', mintage: 105000, estimatedPrice: '43.00€' },
        { year: 2015, subject: '25 Años Firma Acuerdo Aduanero', image: '/img/coins/2015/andorra-2-euro-2015-ue.jpg', mintage: 85000, estimatedPrice: '36.00€' },
        { year: 2015, subject: '30 Aniv. Mayoría de Edad', image: '/img/coins/2015/andorra-2-euro-2015-ley.jpg', mintage: 85000, estimatedPrice: '36.00€' },
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
            estimatedPrice: '6.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 6880000 },
                { type: 'BU', title: 'Set Anual', quantity: 100000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 20000 }
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
            description: 'La moneda muestra los perfiles superpuestos del Rey Alberto II de Bélgica y el Gran Duque Enrique de Luxemburgo mirando hacia la izquierda. Las iniciales del grabador "LL" aparecen a la derecha.',
            designer: 'Luc Luycx',
            edge: '2 ** (x6)',
            estimatedPrice: '16.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5977000 },
                { type: 'BU', title: 'Coincard', quantity: 20000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 3000 }
            ]
        },
        {
            year: 2006,
            subject: 'Atomium',
            image: '/img/coins/2006/belgium.jpg?v=202',
            date: '10-04-2006',
            mintage: 5000000,
            description: 'La moneda muestra una imagen del Atomium. A la derecha aparecen las iniciales del grabador "LL". En la base del Atomium hay dos marcas de ceca.',
            designer: 'Luc Luycx',
            edge: '2 ** (x6)',
            estimatedPrice: '12.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 },
                { type: 'BU', title: 'Coincard', quantity: 20000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 3000 } // Estimated
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/belgium-2-euro-2008.jpg?v=203',
            date: '01-06-2008',
            mintage: 5018000,
            description: 'La moneda conmemora el 60º aniversario de la Declaración Universal de Derechos Humanos. Muestra líneas curvas que forman un rostro y el texto de la declaración.',
            estimatedPrice: '6.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 4988000 },
                { type: 'BU', title: 'Coincard', quantity: 12000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 0 } // Included in sets logic usually
            ]
        },
        { year: 2009, subject: '200 Aniv. Louis Braille', image: '/img/coins/2009/belgium-2-euro-2009.jpg', mintage: 5000000, estimatedPrice: '7.00€' },
        { year: 2010, subject: 'Presidencia UE', image: '/img/coins/2010/belgium-2-euro-2010.jpg', mintage: 5000000, estimatedPrice: '4.50€' },
        { year: 2011, subject: '100 Aniv. Día de la Mujer', image: '/img/coins/2011/belgium-2-euro-2011.jpg', mintage: 5000000, estimatedPrice: '7.20€' },
        { year: 2012, subject: '75 Aniv. Concurso Reina Elisabeth', image: '/img/coins/2012/belgium-2-euro-2012.jpg', mintage: 5000000, estimatedPrice: '5.30€' },
        { year: 2013, subject: 'Instituto Real Meteorológico', image: '/img/coins/2013/belgium-2-euro-2013.jpg', mintage: 2000000, estimatedPrice: '5.20€' },
        { year: 2014, subject: '100 Aniv. Primera Guerra Mundial', image: '/img/coins/2014/belgium-2-euro-2014-guerra.jpg', mintage: 1750000, estimatedPrice: '3.90€' },
        { year: 2014, subject: '150 Años Cruz Roja', image: '/img/coins/2014/belgium-2-euro-2014-cruz.jpg', mintage: 287500, estimatedPrice: '21.00€' },
        { year: 2015, subject: 'Año Europeo del Desarrollo', image: '/img/coins/2015/belgium-2-euro-2015.jpg', mintage: 250000, estimatedPrice: '9.90€' },
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
        { year: 2009, subject: '20 Aniv. Revolución de Terciopelo', image: '/img/coins/2009/slovakia-2-euro-2009.jpg', mintage: 1000000, estimatedPrice: '4.50€' },
        { year: 2011, subject: '20 Aniv. Grupo Visegrád', image: '/img/coins/2011/slovakia-2-euro-2011.jpg', mintage: 1000000, estimatedPrice: '5.50€' },
        { year: 2013, subject: '1150 Aniv. Misión Cirilo y Metodio', image: '/img/coins/2013/slovakia-2-euro-2013.jpg', mintage: 1000000, estimatedPrice: '5.30€' },
        { year: 2014, subject: '10 Aniv. Ingreso UE', image: '/img/coins/2014/slovakia-2-euro-2014.jpg', mintage: 1000000, estimatedPrice: '5.20€' },
        { year: 2015, subject: '200 Aniv. Ľudovít Štúr', image: '/img/coins/2015/slovakia-2-euro-2015.jpg', mintage: 1000000, estimatedPrice: '4.40€' },
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
            image: '/img/coins/2008/slovenia-2-euro-2008.jpg?v=203',
            date: '26-05-2008',
            mintage: 1000000,
            description: 'La moneda conmemora el 500º aniversario del nacimiento de Primož Trubar, reformador protestante esloveno y autor del primer libro impreso en esloveno. Muestra su retrato lateral.',
            estimatedPrice: '6.00€',
            edge: 'SLOVENIJA + punto',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 955000 },
                { type: 'BU', title: 'Set Anual', quantity: 40000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 5000 }
            ]
        },
        { year: 2010, subject: '200 Aniv. Jardín Botánico Liubliana', image: '/img/coins/2010/slovenia-2-euro-2010.jpg', mintage: 1000000, estimatedPrice: '6.00€' },
        { year: 2011, subject: '100 Aniv. Franc Rozman', image: '/img/coins/2011/slovenia-2-euro-2011.jpg', mintage: 1000000, estimatedPrice: '5.00€' },
        { year: 2013, subject: '800 Aniv. Cueva de Postojna', image: '/img/coins/2013/slovenia-2-euro-2013.jpg', mintage: 1000000, estimatedPrice: '8.90€' },
        { year: 2014, subject: '600 Aniv. Coronación Barbara Celje', image: '/img/coins/2014/slovenia-2-euro-2014.jpg', mintage: 1000000, estimatedPrice: '4.00€' },
        { year: 2015, subject: '2000 Aniv. Emona (Liubliana)', image: '/img/coins/2015/slovenia-2-euro-2015.jpg', mintage: 1000000, estimatedPrice: '5.50€' },
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
            image: '/img/coins/2005/spain.jpg?v=191',
            date: '30-06-2005',
            mintage: 8000000,
            description: 'La moneda conmemora el IV Centenario de la primera edición de "El Ingenioso Hidalgo Don Quijote de la Mancha". El diseño muestra a Don Quijote sosteniendo una lanza, con molinos de viento al fondo. La inscripción "ESPAÑA" aparece incusa en la superficie a la izquierda.',
            designer: 'Begoña Castellanos (FNMT)',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '8.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 7950000 },
                { type: 'BU', title: 'Cartera', quantity: 40000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 10000 }
            ]
        },
        { year: 2010, subject: 'Centro Histórico de Córdoba', image: '/img/coins/2010/spain-2-euro-2010.jpg', mintage: 4000000, estimatedPrice: '5.00€' },
        { year: 2011, subject: 'Alhambra de Granada', image: '/img/coins/2011/spain-2-euro-2011.jpg', mintage: 4000000, estimatedPrice: '6.00€' },
        { year: 2012, subject: 'Catedral de Burgos', image: '/img/coins/2012/spain-2-euro-2012.jpg', mintage: 4000000, estimatedPrice: '4.20€' },
        { year: 2013, subject: 'El Escorial', image: '/img/coins/2013/spain-2-euro-2013.jpg', mintage: 4000000, estimatedPrice: '7.70€' },
        { year: 2014, subject: 'Park Güell (Gaudí)', image: '/img/coins/2014/spain-2-euro-2014-parque.jpg', mintage: 8000000, estimatedPrice: '4.50€' },
        { year: 2014, subject: 'Felipe VI (Proclamación)', image: '/img/coins/2014/spain-2-euro-2014-rey.jpg', mintage: 8000000, estimatedPrice: '5.80€' },
        { year: 2015, subject: 'Cueva de Altamira', image: '/img/coins/2015/spain-2-euro-2015.jpg', mintage: 4000000, estimatedPrice: '5.50€' },
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
        { year: 2026, subject: 'La Sagrada Familia' },
        { year: 2026, subject: 'Emisión 2026' },
    ],
    'Estonia': [
        { year: 2016, subject: '100 Aniv. Paul Keres' },
        { year: 2017, subject: 'Camino a la Independencia' },
        { year: 2018, subject: '100 Aniv. República de Estonia' },
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
            description: 'La moneda conmemora la quinta ampliación de la Unión Europea en 2004, que sumó diez nuevos estados miembros. El diseño estilizado representa un pilar del cual brotan diez brotes hacia arriba. Las letras "EU" aparecen cerca del pilar, junto con el año "2004" en la parte superior, rodeado por las doce estrellas de la UE.',
            designer: 'Pertti Mäkinen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '55.90€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 931400 },
                { type: 'BU', title: 'Set Anual', quantity: 54000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 5000 }
            ]
        },
        {
            year: 2005,
            subject: '60 Aniv. Naciones Unidas',
            image: '/img/coins/2005/finland.jpg?v=191',
            date: '25-10-2005',
            mintage: 2000000,
            description: 'La moneda conmemora el 60º aniversario de las Naciones Unidas y el 50º aniversario de la adhesión de Finlandia. El diseño muestra una paloma de la paz formada por piezas de rompecabezas. Debajo de la paloma aparece la inscripción "FINLAND - UN".',
            designer: 'Tapio Kettunen',
            edge: 'YK 1945 - 2005 FN + cabezas de león',
            estimatedPrice: '7.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1948394 },
                { type: 'BU', title: 'Set Anual', quantity: 51606 } // Mintage logic checks out
            ]
        },
        {
            year: 2006,
            subject: '100 Aniv. Sufragio Universal',
            image: '/img/coins/2006/finland.jpg?v=202',
            date: '04-10-2006',
            mintage: 2500000,
            description: 'La moneda conmemora el centenario del sufragio universal y paritario en Finlandia. El diseño muestra dos rostros estilizados, uno masculino y otro femenino, separados por una fina línea curva.',
            designer: 'Pertti Mäkinen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '11.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2467100 },
                { type: 'BU', title: 'Set Anual', quantity: 23300 },
                { type: 'PROOF', title: 'Set Proof', quantity: 9600 }
            ]
        },
        {
            year: 2007,
            subject: '90 Aniv. Independencia',
            image: '/img/coins/2007/finland.jpg?v=203',
            date: '01-12-2007',
            mintage: 2000000,
            description: 'La moneda conmemora el 90º aniversario de la independencia de Finlandia. Muestra una barca de nueve remos con remeros, simbolizando la colaboración. El año de emisión (2007) y el año de independencia (1917) aparecen encima y debajo de la imagen.',
            designer: 'Reijo Paavilainen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '12.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/finland-2-euro-2008.jpg?v=203',
            date: '24-10-2008',
            mintage: 1500000,
            description: 'La moneda conmemora el 60º aniversario de la Declaración Universal de Derechos Humanos. Muestra una figura humana dentro de un corazón, subrayando el valor de la vida.',
            designer: 'Tapio Kettunen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '20.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1474500 },
                { type: 'BU', title: 'Set Anual', quantity: 20000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 5500 }
            ]
        },
        { year: 2009, subject: '200 Aniv. Autonomía Finesa', image: '/img/coins/2009/finland-2-euro-2009.jpg', mintage: 1600000, estimatedPrice: '16.00€' },
        { year: 2010, subject: 'Decreto de la Moneda 1860', image: '/img/coins/2010/finland-2-euro-2010.jpg', mintage: 1600000, estimatedPrice: '6.00€' },
        { year: 2011, subject: '200 Aniv. Banco de Finlandia', image: '/img/coins/2011/finland-2-euro-2011.jpg', mintage: 1500000, estimatedPrice: '7.00€' },
        { year: 2012, subject: 'Helene Schjerfbeck', image: '/img/coins/2012/finland-2-euro-2012.jpg', mintage: 2000000, estimatedPrice: '5.50€' },
        { year: 2013, subject: 'Parlamento de 1863', image: '/img/coins/2013/finland-2-euro-2013-parlamento.jpg', mintage: 1000000, estimatedPrice: '6.20€' },
        { year: 2013, subject: 'F. E. Sillanpää', image: '/img/coins/2013/finland-2-euro-2013-frans.jpg', mintage: 1500000, estimatedPrice: '6.50€' },
        { year: 2014, subject: 'Tove Jansson', image: '/img/coins/2014/finland-2-euro-2014-tove.jpg', mintage: 1500000, estimatedPrice: '5.50€' },
        { year: 2014, subject: 'Ilmari Tapiovaara', image: '/img/coins/2014/finland-2-euro-2014-ilmari.jpg', mintage: 1000000, estimatedPrice: '6.50€' },
        { year: 2015, subject: 'Jean Sibelius', image: '/img/coins/2015/finland-2-euro-2015-jean.jpg', mintage: 1000000, estimatedPrice: '5.90€' },
        { year: 2015, subject: 'Akseli Gallen-Kallela', image: '/img/coins/2015/finland-2-euro-2015-akseli.jpg', mintage: 500000, estimatedPrice: '5.90€' },
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
            image: '/img/coins/2008/france-2-euro-2008.jpg?v=203',
            date: '01-07-2008',
            mintage: 20084000,
            description: 'La moneda conmemora la Presidencia francesa del Consejo de la Unión Europea en el segundo semestre de 2008. Muestra la inscripción "2008 PRÉSIDENCE FRANÇAISE UNION EUROPÉENNE RF".',
            estimatedPrice: '5.80€',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 20000000 },
                { type: 'BU', title: 'Set Anual', quantity: 40000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 10000 }
            ]
        },
        { year: 2010, subject: 'Llamamiento 1940 (De Gaulle)', image: '/img/coins/2010/france-2-euro-2010.jpg', mintage: 20000000, estimatedPrice: '4.00€' },
        { year: 2011, subject: 'Fiesta de la Música', image: '/img/coins/2011/france-2-euro-2011.jpg', mintage: 10000000, estimatedPrice: '5.00€' },
        { year: 2012, subject: 'Abbé Pierre', image: '/img/coins/2012/france-2-euro-2012.jpg', mintage: 1000000, estimatedPrice: '5.00€' },
        { year: 2013, subject: 'Tratado del Elíseo', image: '/img/coins/2013/france-2-euro-2013-tratado.jpg', mintage: 10000000, estimatedPrice: '6.20€' },
        { year: 2013, subject: 'Pierre de Coubertin', image: '/img/coins/2013/france-2-euro-2013-pierre.jpg', mintage: 1000000, estimatedPrice: '7.70€' },
        { year: 2014, subject: 'Día Mundial SIDA', image: '/img/coins/2014/france-2-euro-2014-sida.jpg', mintage: 3000000, estimatedPrice: '5.45€' },
        { year: 2014, subject: 'Desembarco de Normandía', image: '/img/coins/2014/france-2-euro-2014-normandia.jpg', mintage: 3000000, estimatedPrice: '7.20€' },
        { year: 2015, subject: 'Paz en Europa 1945-2015', image: '/img/coins/2015/france-2-euro-2015-guerra.jpg', mintage: 4000000, estimatedPrice: '4.50€' },
        { year: 2015, subject: 'Federación Festival', image: '/img/coins/2015/france-2-euro-2015-fiesta.jpg', mintage: 4000000, estimatedPrice: '5.00€' },
        { year: 2016, subject: 'Copa Euro UEFA 2016', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2016, subject: 'François Mitterrand', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2017, subject: 'Lucha contra Cáncer Mama', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2017, subject: 'Rodin', mintage: 10000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: 'Aciano de Francia', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2018, subject: 'Simone Veil', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
        { year: 2019, subject: '60 Aniv. Astérix', mintage: 310000, estimatedPrice: '12.00€ - 20.00€' },
        { year: 2019, subject: '30 Aniv. Muro de Berlín', mintage: 15000000, estimatedPrice: '3.00€ - 4.50€' },
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
        { year: 2004, subject: 'Juegos Olímpicos Atenas', image: '/img/coins/2004/greece.jpg', mintage: 50000000, estimatedPrice: '7.70€' },
        { year: 2010, subject: 'Batalla de Maratón', image: '/img/coins/2010/greece-2-euro-2010.jpg', mintage: 2500000, estimatedPrice: '8.00€' },
        { year: 2011, subject: 'Juegos Olímpicos Especiales', image: '/img/coins/2011/greece-2-euro-2011.jpg', mintage: 1000000, estimatedPrice: '5.00€' },
        { year: 2013, subject: 'Unión de Creta con Grecia', image: '/img/coins/2013/greece-2-euro-2013-creta.jpg', mintage: 750000, estimatedPrice: '7.20€' },
        { year: 2013, subject: 'Academia Platónica', image: '/img/coins/2013/greece-2-euro-2013-academia.jpg', mintage: 750000, estimatedPrice: '6.90€' },
        { year: 2014, subject: '400 Aniv. El Greco', image: '/img/coins/2014/greece-2-euro-2014-greco.jpg', mintage: 750000, estimatedPrice: '7.70€' },
        { year: 2014, subject: '150 Aniv. Unión Islas Jónicas', image: '/img/coins/2014/greece-2-euro-2014-islas.jpg', mintage: 750000, estimatedPrice: '7.70€' },
        { year: 2015, subject: '75 Aniv. Muerte Spyros Louis', image: '/img/coins/2015/greece-2-euro-2015.jpg', mintage: 750000, estimatedPrice: '6.60€' },
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
            description: 'La moneda celebra el 50º aniversario del Programa Mundial de Alimentos (WFP). El diseño central muestra un globo terráqueo inclinado hacia la derecha con la inscripción "WORLD FOOD PROGRAMME". Detrás del globo emergen una espiga de trigo, una de maíz y una de arroz, representando las fuentes de alimento básicas del mundo. A la derecha figuran las iniciales "RI" (Repubblica Italiana) y las iniciales de la grabadora Uliana Pernazza "UP".',
            designer: 'Uliana Pernazza (UP)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '7.30€',
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
            description: 'La moneda conmemora el 1er aniversario de la firma de la Constitución Europea. El diseño central representa a Europa y el toro, con Europa sosteniendo una pluma y el texto de la Constitución. La inscripción "COSTITUZIONE EUROPEA" rodea la parte inferior.',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.50€',
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
            description: 'La moneda conmemora los XX Juegos Olímpicos de Invierno de Turín 2006. El diseño muestra a un esquiador en acción y la Mole Antonelliana (edificio símbolo de Turín).',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 40000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/italy-2-euro-2008.jpg?v=203',
            date: '10-12-2008',
            mintage: 5000000,
            description: 'La moneda muestra a un hombre y una mujer con una rama de olivo, una espiga de maíz, una rueda dentada y alambre de púas, símbolos del derecho a la paz, la alimentación, el trabajo y la libertad. El monograma "RI" y el año "2008" están entre las figuras. Abajo, "DIRITTI UMANI" y el número "60" formado por eslabones de cadena.',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '8.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 }
            ]
        },
        { year: 2009, subject: 'Louis Braille', image: '/img/coins/2009/italy-2-euro-2009.jpg', mintage: 2000000, estimatedPrice: '5.50€' },
        { year: 2010, subject: 'Cavour', image: '/img/coins/2010/italy-2-euro-2010.jpg', mintage: 4000000, estimatedPrice: '4.00€' },
        { year: 2011, subject: '150 Aniv. Unificación Italia', image: '/img/coins/2011/italy-2-euro-2011.jpg', mintage: 10000000, estimatedPrice: '6.50€' },
        { year: 2012, subject: 'Giovanni Pascoli', image: '/img/coins/2012/italy-2-euro-2012.jpg', mintage: 15000000, estimatedPrice: '5.50€' },
        { year: 2013, subject: 'Giuseppe Verdi', image: '/img/coins/2013/italy-2-euro-2013-verdi.jpg', mintage: 10000000, estimatedPrice: '5.90€' },
        { year: 2013, subject: 'Giovanni Boccaccio', image: '/img/coins/2013/italy-2-euro-2013-bocaccio.jpg', mintage: 10000000, estimatedPrice: '4.90€' },
        { year: 2014, subject: 'Carabinieri', image: '/img/coins/2014/italy-2-euro-2014-carabineros.jpg', mintage: 6500000, estimatedPrice: '4.50€' },
        { year: 2014, subject: 'Galileo Galilei', image: '/img/coins/2014/italy-2-euro-2014-galileo.jpg', mintage: 6500000, estimatedPrice: '5.90€' },
        { year: 2015, subject: 'Dante Alighieri', image: '/img/coins/2015/italy-2-euro-2015-dante.jpg', mintage: 3500000, estimatedPrice: '4.90€' },
        { year: 2015, subject: 'EXPO Milan', image: '/img/coins/2015/italy-2-euro-2015-expo.jpg', mintage: 3500000, estimatedPrice: '4.90€' },
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
        // { year: 2024, subject: 'Guardia di Finanza (150 Aniv)' }, // Removed duplicate as requested
        { year: 2025, subject: 'Corte Suprema de Casación', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 3000000, estimatedPrice: '3.50€ - 5.50€' },
    ],
    'Letonia': [
        { year: 2014, subject: 'Riga Capital Cultura', image: '/img/coins/2014/latvia-2-euro-2014.jpg', mintage: 1000000, estimatedPrice: '4.90€' },
        { year: 2015, subject: 'Presidencia UE', image: '/img/coins/2015/latvia-2-euro-2015-presidencia.jpg', mintage: 1000000, estimatedPrice: '6.20€' },
        { year: 2015, subject: 'Cigüeña Negra', image: '/img/coins/2015/latvia-2-euro-2015-cigueña.jpg', mintage: 1000000, estimatedPrice: '4.50€' },
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
        { year: 2015, subject: 'Idioma Lituano', image: '/img/coins/2015/lithuania-2-euro-2015.jpg', mintage: 1000000, estimatedPrice: '6.50€' },
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
            description: 'La moneda muestra la efigie del Gran Duque Enrique mirando a la derecha, superpuesta sobre su monograma (una letra "H" especial con corona). El monograma está formado por múltiples letras "H" minúsculas impresas con una técnica especial.',
            designer: 'Yvette Gastauer-Claire',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '7.00€',
            variantDetails: 'Existen dos variantes principales según la presentación:\n- **H a la izquierda:** Se encuentra en los rollos (calidad UNC).\n- **H a la derecha:** Se encuentra en las Coincards (calidad BU) y en los estuches Proof. (Valor est. 80.00€)',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2400000 },
                { type: 'BU', title: 'Set Anual', quantity: 50000 },
                { type: 'BU', title: 'Coincard', quantity: 10000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 1800 }
            ]
        },
        {
            year: 2005,
            subject: '100 Aniv. Muerte Gran Duque Adolfo',
            image: '/img/coins/2005/luxembourg.jpg?v=191',
            date: '15-02-2005',
            mintage: 2769000,
            description: 'La moneda muestra las efigies superpuestas del Gran Duque Enrique y el Gran Duque Adolfo mirando hacia la derecha. "GRANDS-DUCS DE LUXEMBOURG" aparece sobre las efigies. Debajo, "HENRI *1955" y "ADOLPHE †1905".',
            designer: 'Yvette Gastauer-Claire',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '6.00€',
            variantDetails: 'Existen dos variantes principales según la ceca:\n- **Ceca Vantaa (Finlandia):** Letra **S**. (Rollos UNC).\n- **Ceca Pessac (Francia):** Símbolos **Cornucopia y Cuerno**. (Presente en sets, como el recopilatorio de 2008).',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2720000 },
                { type: 'BU', title: 'Set / Coincard', quantity: 45000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 4000 }
            ]
        },
        {
            year: 2006,
            subject: '25 Aniv. Gran Duque Guillermo',
            image: '/img/coins/2006/luxembourg.jpg?v=202',
            date: '01-02-2006',
            mintage: 1000000,
            description: 'La moneda conmemora el 25º cumpleaños del Gran Duque Heredero Guillermo. Muestra su efigie superpuesta a la de su padre, el Gran Duque Enrique.',
            designer: 'Patrice Bernabei',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '8.00€',
            variantDetails: 'Existen dos variantes principales según la ceca:\n- **Ceca Vantaa (Finlandia):** Letra **S**. (Rollos UNC).\n- **Ceca Pessac (Francia):** Símbolos **Cornucopia y Cuerno**. (Presente en sets, como el recopilatorio de 2008).',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Coincard / Set', quantity: 45000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 2000 }
            ]
        },
        {
            year: 2007,
            subject: 'Palacio Gran Ducal',
            image: '/img/coins/2007/luxembourg-2-euro-2007.jpg?v=203',
            date: '02-02-2007',
            mintage: 1100000,
            description: 'La moneda muestra la efigie del Gran Duque Enrique superpuesta a la imagen del Palacio Gran Ducal. El texto "LËTZEBUERG" aparece en la base.',
            designer: 'Alain Hoffmann',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.00€ - 7.00€',
            variantDetails: 'Existen dos variantes principales según la ceca:\n- **Ceca Vantaa (Finlandia):** Letra **S**. (Rollos UNC).\n- **Ceca Pessac (Francia):** Símbolos **Cornucopia y Cuerno**. (Sets BU/Proof).',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Coincard / Set', quantity: 15000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 5000 } // Estimated
            ]
        },
        {
            year: 2008,
            subject: 'Castillo de Berg',
            image: '/img/coins/2008/luxembourg-2-euro-2008.jpg?v=203',
            date: '01-02-2008',
            mintage: 1047000,
            description: 'La moneda muestra las efigies superpuestas del Gran Duque Enrique y el Castillo de Berg. Muestra la palabra "LËTZEBUERG" seguida del año.',
            estimatedPrice: '8.00€',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Set / Coincard', quantity: 25000 }, // Estimated
                { type: 'PROOF', title: 'Caja Proof', quantity: 6000 } // Estimated
            ]
        },
        { year: 2009, subject: 'Gran Duquesa Carlota', image: '/img/coins/2009/luxembourg-2-euro-2009.jpg', mintage: 800000, estimatedPrice: '6.50€' },
        { year: 2010, subject: 'Escudo de Armas', image: '/img/coins/2010/luxembourg-2-euro-2010.jpg', mintage: 500000, estimatedPrice: '11.00€' },
        { year: 2011, subject: 'Juan de Luxemburgo', image: '/img/coins/2011/luxembourg-2-euro-2011.jpg', mintage: 700000, estimatedPrice: '6.50€' },
        { year: 2012, subject: 'Guillermo IV', image: '/img/coins/2012/luxembourg-2-euro-2012-guillermo.jpg', mintage: 700000, estimatedPrice: '5.00€' },
        { year: 2012, subject: 'Boda Principesca', image: '/img/coins/2012/luxembourg-2-euro-2012-boda.jpg', mintage: 500000, estimatedPrice: '7.00€' },
        { year: 2013, subject: 'Himno Nacional', image: '/img/coins/2013/luxembourg-2-euro-2013.jpg', mintage: 500000, estimatedPrice: '5.00€' },
        { year: 2014, subject: '175 Aniv. Independencia', image: '/img/coins/2014/luxembourg-2-euro-2014-independencia.jpg', mintage: 500000, estimatedPrice: '5.50€' },
        { year: 2014, subject: 'Ascensión al Trono', image: '/img/coins/2014/luxembourg-2-euro-2014-juan.jpg', mintage: 500000, estimatedPrice: '5.90€' },
        { year: 2015, subject: '15 Aniv. Trono Henri', image: '/img/coins/2015/luxembourg-2-euro-2015-enrique.jpg', mintage: 500000, estimatedPrice: '3.50€' },
        { year: 2015, subject: '125 Aniv. Dinastía Nassau', image: '/img/coins/2015/luxembourg-2-euro-2015-casa.jpg', mintage: 500000, estimatedPrice: '5.90€' },
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
        { year: 2011, subject: 'Primeros Representantes', image: '/img/coins/2011/malta-2-euro-2011.jpg', mintage: 430000, estimatedPrice: '17.00€' },
        { year: 2012, subject: 'Mayoría Representativa', image: '/img/coins/2012/malta-2-euro-2012.jpg', mintage: 400000, estimatedPrice: '12.00€', variants: ['Normal (12.00€)', 'Variante Ceca (16.00€)'] },
        { year: 2013, subject: 'Autogobierno 1921', image: '/img/coins/2013/malta-2-euro-2013.jpg', mintage: 500000, estimatedPrice: '5.90€', variants: ['Normal (5.90€)', 'Variante Ceca (22.00€)'] },
        { year: 2014, subject: 'Independencia 1964', image: '/img/coins/2014/malta-2-euro-2014-independencia.jpg', mintage: 400000, estimatedPrice: '7.50€', variants: ['Normal (7.50€)', 'Variante Ceca (25.00€)'] },
        { year: 2014, subject: 'Policía de Malta', image: '/img/coins/2014/malta-2-euro-2014-policia.jpg', mintage: 300000, estimatedPrice: '16.00€' },
        { year: 2015, subject: 'República 1974', image: '/img/coins/2015/malta-2-euro-2015-republica.jpg', mintage: 400000, estimatedPrice: '5.90€', variants: ['Normal (5.90€)', 'Variante Ceca (33.00€)'] },
        { year: 2015, subject: 'Primer Vuelo Malta', image: '/img/coins/2015/malta-2-euro-2015-vuelo.jpg', mintage: 300000, estimatedPrice: '7.90€', variants: ['Normal (7.90€)', 'Variante Ceca (25.90€)'] },
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
        { year: 2023, subject: 'Copérnico' },
        { year: 2023, subject: 'Napoleón en Malta' },
        { year: 2024, subject: 'Abeja Maltesa' },
        { year: 2024, subject: 'Ciudadela de Gozo', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 85000, estimatedPrice: '25.00€ - 45.00€' },
    ],
    'Mónaco': [
        {
            year: 2007,
            subject: '25 Aniv. Muerte Grace Kelly',
            image: '/img/coins/2007/monaco-2-euro-2007.jpg?v=203',
            date: '01-07-2007',
            mintage: 20001,
            description: 'La moneda conmemora el 25º aniversario de la muerte de la Princesa Grace Kelly. Muestra su efigie de perfil mirando a la izquierda. Es la moneda de 2 euros más valiosa y buscada.',
            designer: 'Roger Bernard Baron',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '2900.00€',
            formats: [
                { type: 'BU', title: 'Estuche Oficial', quantity: 20001 }
            ]
        },
        { year: 2011, subject: 'Boda Príncipe Alberto II', image: '/img/coins/2011/monaco-2-euro-2011.jpg', mintage: 147877, estimatedPrice: '79.00€' },
        { year: 2012, subject: '500 Aniv. Soberanía', image: '/img/coins/2012/monaco-2-euro-2012.jpg', estimatedPrice: '80.00€' },
        { year: 2013, subject: '20 Aniv. Ingreso ONU', image: '/img/coins/2013/monaco-2-euro-2013.jpg', mintage: 1224151, estimatedPrice: '10.50€' },
        { year: 2015, subject: '800 Aniv. Fortaleza', image: '/img/coins/2015/monaco-2-euro-2015.jpg', mintage: 10000, estimatedPrice: '3390.00€' },
        { year: 2016, subject: '150 Aniv. Monte Carlo', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2017, subject: 'Carabineros del Príncipe' },
        { year: 2018, subject: 'François Joseph Bosio', mintage: 16000, estimatedPrice: '400€ - 800€' },
        { year: 2019, subject: 'Honoré V' },
        { year: 2020, subject: '300 Aniv. Honoré III' },
        { year: 2021, subject: '10 Aniv. Boda Alberto II' },
        { year: 2022, subject: '100 Aniv. Alberto I' },
        { year: 2023, subject: 'Rainiero III' },
        { year: 2024, subject: '500 Aniv. Tratado con Carlos V', mintage: 15000, estimatedPrice: '500€ - 900€' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
    ],
    'Países Bajos': [
        { year: 2011, subject: 'Erasmo de Rotterdam', image: '/img/coins/2011/netherlands-2-euro-2011.jpg', estimatedPrice: '13.00€' },
        { year: 2013, subject: 'Cambio de Trono', image: '/img/coins/2013/netherlands-2-euro-2013-coronacion.jpg', estimatedPrice: '3.90€' },
        { year: 2013, subject: '200 Años Reino', image: '/img/coins/2013/netherlands-2-euro-2013-reino.jpg', estimatedPrice: '6.50€' },
        { year: 2014, subject: 'Despedida de la Reina Beatriz', image: '/img/coins/2014/netherlands-2-euro-2014.jpg', estimatedPrice: '5.90€' }, // Double-check if this is commemorative or standard. Usually handled as standard but 2014 was special.
        // { year: 2025, subject: '750 Aniv. Amsterdam' }, // Removed 2025 as requested
    ],
    'Portugal': [
        {
            year: 2007,
            subject: 'Presidencia UE',
            image: '/img/coins/2007/portugal.jpg?v=203',
            date: '01-07-2007',
            mintage: 2000000,
            description: 'La moneda conmemora la Presidencia portuguesa del Consejo de la Unión Europea. El diseño muestra un alcornoque (Quercus suber) con el Escudo de Portugal bajo las ramas. La inscripción "PRESIDÊNCIA DO CONSELHO DA UE" aparece en arco.',
            designer: 'Irene Vilar',
            edge: 'Cinco escudos y siete castillos',
            estimatedPrice: '3.60€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1975000 },
                { type: 'BU', title: 'Set Anual', quantity: 15000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 10000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/portugal-2-euro-2008.jpg?v=203',
            date: '15-09-2008',
            mintage: 1000000, // Reduced to 1M vs ECB sometimes says differs, standard resource says 1,025,000 incl sets
            description: 'La moneda muestra el escudo de Portugal arriba y un diseño geométrico abajo, con la leyenda "60 ANOS DA DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS".',
            designer: 'João Duarte',
            edge: 'Cinco escudos y siete castillos',
            estimatedPrice: '4.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Set Anual', quantity: 15000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 10000 }
            ]
        },
        { year: 2009, subject: 'Juegos de la Lusofonía', image: '/img/coins/2009/portugal-2-euro-2009.jpg', estimatedPrice: '7.00€' },
        { year: 2010, subject: 'República Portuguesa', image: '/img/coins/2010/portugal-2-euro-2010.jpg', estimatedPrice: '7.00€' },
        { year: 2011, subject: 'Fernão Mendes Pinto', image: '/img/coins/2011/portugal-2-euro-2011.jpg', mintage: 500000, estimatedPrice: '9.00€' },
        { year: 2012, subject: 'Guimaraes Capital Cultura', image: '/img/coins/2012/portugal-2-euro-2012.jpg', estimatedPrice: '6.50€' },
        { year: 2013, subject: 'Torre de los Clérigos', image: '/img/coins/2013/portugal-2-euro-2013.jpg', estimatedPrice: '5.90€' },
        { year: 2014, subject: '25 Abril', image: '/img/coins/2014/portugal-2-euro-2014-revolucion.jpg', estimatedPrice: '5.50€' },
        { year: 2014, subject: 'Año Agricultura Familiar', image: '/img/coins/2014/portugal-2-euro-2014-agricultura.jpg', estimatedPrice: '5.50€' },
        { year: 2015, subject: 'Cruz Roja Portuguesa', image: '/img/coins/2015/portugal-2-euro-2015-cruz.jpg', mintage: 500000, estimatedPrice: '4.80€' },
        { year: 2015, subject: 'Timor', image: '/img/coins/2015/portugal-2-euro-2015-timor.jpg', estimatedPrice: '5.45€' },
        { year: 2016, subject: 'Equipo Olímpico' },
        { year: 2016, subject: 'Puente 25 Abril' },
        { year: 2017, subject: 'Policía Seguridad Pública', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2017, subject: 'Raúl Brandão' },
        { year: 2018, subject: 'Imprenta Nacional' },
        { year: 2018, subject: 'Jardín Botánico Ajuda' },
        { year: 2019, subject: 'Magallanes', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2019, subject: 'Universidad de Madeira', mintage: 750000, estimatedPrice: '5.00€ - 8.00€' },
        { year: 2020, subject: 'Universidad Coimbra', mintage: 360000, estimatedPrice: '7.50€ - 12.00€' },
        { year: 2020, subject: 'ONU 75 Años' },
        { year: 2021, subject: 'Presidencia UE', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2021, subject: 'Juegos Olímpicos Tokio', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2022, subject: 'Vuelo Atlántico Sur' },
        { year: 2023, subject: 'Jornada Mundial Juventud', mintage: 1000000, estimatedPrice: '4.50€ - 7.50€' },
        { year: 2023, subject: 'Paz' },
        { year: 2024, subject: '50 Aniv. Revolución Claveles' },
        { year: 2024, subject: 'Equipo Olímpico París 2024' },
        { year: 2025, subject: 'Turismo Sostenible' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 500000, estimatedPrice: '6.00€ - 10.00€' },
    ],
    'San Marino': [
        {
            year: 2004,
            subject: 'Bartolomeo Borghesi',
            image: '/img/coins/2004/san_marino.png',
            date: '16-12-2004',
            mintage: 110000,
            description: 'La moneda conmemora al historiador y numismático Bartolomeo Borghesi. El motivo central es un busto de Borghesi, flanqueado a la izquierda por su nombre y a la derecha por el nombre del estado "SAN MARINO". Es una de las monedas más buscadas por los coleccionistas debido a su baja tirada.',
            designer: 'Ettore Lorenzo Frapiccini (E.L.F.)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '120.00€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 110000 }
            ]
        },
        {
            year: 2005,
            subject: 'Año Mundial de la Física',
            image: '/img/coins/2005/san_marino.jpg?v=191',
            date: '14-10-2005',
            mintage: 130000,
            description: 'La moneda conmemora el Año Mundial de la Física 2005. El diseño es una interpretación libre de la pintura alegórica "La física antigua" o "El estudio de los planetas" de Galileo Galilei. Muestra a Galileo en un escritorio con un globo terráqueo. En la parte inferior se lee "ANNO MONDIALE DELLA FISICA".',
            designer: 'Luciana De Simoni (LDS)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '110.00€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 130000 }
            ]
        },
        {
            year: 2006,
            subject: '500 Aniv. Muerte Colón',
            image: '/img/coins/2006/san_marino.jpg?v=202',
            date: '17-10-2006',
            mintage: 120000,
            description: 'La moneda conmemora el 500º aniversario de la muerte de Cristóbal Colón. Muestra un retrato del navegante y las tres carabelas (Niña, Pinta, Santa María).',
            designer: 'Luciana De Simoni (LDS)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '80.00€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 120000 }
            ]
        },
        {
            year: 2007,
            subject: 'Giuseppe Garibaldi',
            image: '/img/coins/2007/san_marino-2-euro-2007.jpg?v=203',
            date: '09-10-2007',
            mintage: 130000,
            description: 'La moneda conmemora el bicentenario del nacimiento de Giuseppe Garibaldi. Muestra un retrato grabado del revolucionario italiano. Inscripciones "SAN MARINO" y "2007".',
            designer: 'Ettore Lorenzo Frapiccini (E.L.F.)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '45€ - 65€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 130000 }
            ]
        },
        {
            year: 2008,
            subject: 'Año Diálogo Intercultural',
            image: '/img/coins/2008/san_marino-2-euro-2008.jpg?v=203',
            date: '20-05-2008',
            mintage: 130000,
            description: 'La moneda conmemora el Año Europeo del Diálogo Intercultural. Muestra siluetas humanas unidas representando el entendimiento pacífico y la convivencia entre culturas.',
            estimatedPrice: '70.00€',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 130000 }
            ]
        },
        { year: 2009, subject: 'Creatividad e Innovación', image: '/img/coins/2009/san_marino-2-euro-2009.jpg', estimatedPrice: '33.00€' },
        { year: 2010, subject: 'Sandro Botticelli', image: '/img/coins/2010/san_marino-2-euro-2010.jpg', mintage: 130000, estimatedPrice: '33.00€' },
        { year: 2011, subject: 'Giorgio Vasari', image: '/img/coins/2011/san_marino-2-euro-2011.jpg', mintage: 130000, estimatedPrice: '30.00€' },
        { year: 2012, subject: '10 Años Euro', image: '/img/coins/2012/san_marino-2-euro-2012.jpg', estimatedPrice: '25.00€' },
        { year: 2013, subject: 'Pinturicchio', image: '/img/coins/2013/san_marino-2-euro-2013.jpg', mintage: 110000, estimatedPrice: '39.00€' },
        { year: 2014, subject: 'Donato Bramante', image: '/img/coins/2014/san_marino-2-euro-2014-bramante.jpg', mintage: 110000, estimatedPrice: '32.00€' },
        { year: 2014, subject: 'Giacomo Puccini', image: '/img/coins/2014/san_marino-2-euro-2014-puccini.jpg', mintage: 100000, estimatedPrice: '35.00€' },
        { year: 2015, subject: 'Dante Alighieri', image: '/img/coins/2015/san_marino-2-euro-2015-dante.jpg', mintage: 100000, estimatedPrice: '29.00€' },
        { year: 2015, subject: 'Unificación de Alemania', image: '/img/coins/2015/san_marino-2-euro-2015-reunificacion.jpg', estimatedPrice: '32.00€' },
        { year: 2016, subject: 'Donatello', mintage: 85000, estimatedPrice: '70€ - 110€' },
        { year: 2016, subject: 'Shakespeare' },
        { year: 2017, subject: 'Giotto', mintage: 70500, estimatedPrice: '80€ - 130€' },
        { year: 2017, subject: 'Año Turismo Sostenible' },
        { year: 2018, subject: 'Tintoretto', mintage: 60500, estimatedPrice: '90€ - 140€' },
        { year: 2018, subject: 'Bernini' },
        { year: 2019, subject: 'Leonardo da Vinci', mintage: 54150, estimatedPrice: '100€ - 160€' },
        { year: 2019, subject: 'Filippo Lippi', mintage: 54150, estimatedPrice: '100€ - 160€' },
        { year: 2020, subject: 'Rafael Sanzio' },
        { year: 2020, subject: 'Giambattista Tiepolo', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2021, subject: 'Caravaggio', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2021, subject: 'Albrecht Dürer', mintage: 54000, estimatedPrice: '100€ - 160€' },
        { year: 2022, subject: 'Piero della Francesca', mintage: 55000, estimatedPrice: '95€ - 150€' },
        { year: 2022, subject: 'Antonio Canova', mintage: 55000, estimatedPrice: '95€ - 150€' },
        { year: 2023, subject: 'Perugino' },
        { year: 2023, subject: 'Luca Signorelli', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2024, subject: '50 Aniv. Declaración de Derechos' },
        { year: 2024, subject: '530 Aniv. Ghirlandaio' },
        { year: 2025, subject: 'Emisión 2025 (1)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2025, subject: 'Emisión 2025 (2)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2026, subject: 'Emisión 2026 (1)', mintage: 56000, estimatedPrice: '95€ - 150€' },
        { year: 2026, subject: 'Emisión 2026 (2)', mintage: 56000, estimatedPrice: '95€ - 150€' },
    ],
    'Vaticano': [
        {
            year: 2004,
            subject: '75 Aniv. Ciudad del Vaticano',
            image: '/img/coins/2004/vatican.png',
            date: '16-12-2004',
            mintage: 85000,
            description: 'La moneda celebra el 75º Aniversario de la Fundación del Estado de la Ciudad del Vaticano (1929-2004). El diseño muestra un plano esquemático de las murallas de la Ciudad del Vaticano con la Basílica de San Pedro en primer plano. Las inscripciones incluyen "75o ANNO DELLO STATO" y los años "1929-2004".',
            designer: 'Guido Veroi / L.D.S. INC.',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '150.00€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 85000 }
            ]
        },
        {
            year: 2005,
            subject: 'XX Jornada Mundial de la Juventud',
            image: '/img/coins/2005/vatican.jpg?v=191',
            date: '06-12-2005',
            mintage: 100000,
            description: 'La moneda conmemora la 20ª Jornada Mundial de la Juventud celebrada en Colonia en agosto de 2005. El diseño muestra la Catedral de Colonia con un cometa pasando por encima. La inscripción "XX GIORNATA MONDIALE DELLA GIOVENTÙ" rodea la parte superior.',
            designer: 'Daniela Longo / E.L. Frapiccini',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '200.00€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 } // Often strictly limited to sets
            ]
        },
        {
            year: 2006,
            subject: '500 Aniv. Guardia Suiza',
            image: '/img/coins/2006/vatican.jpg?v=202',
            date: '09-11-2006',
            mintage: 100000,
            description: 'La moneda conmemora el V Centenario de la Guardia Suiza Pontificia. Muestra a un guardia prestando juramento sobre la bandera de la Guardia. Inscripciones: "GUARDIA SVIZZERA PONTIFICIA" y "CITTÀ DEL VATICANO".',
            designer: 'Orietta Rossi (O. ROSSI)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '210.00€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 }
            ]
        },
        {
            year: 2007,
            subject: '80 Cumpleaños Benedicto XVI',
            image: '/img/coins/2007/vatican.jpg?v=203',
            date: '23-10-2007',
            mintage: 100000,
            description: 'La moneda conmemora el 80º cumpleaños de Su Santidad el Papa Benedicto XVI. Muestra su perfil mirando hacia la izquierda. Leyenda: "BENEDICTI XVI P.M. AETATIS ANNO LXXX CITTA\' DEL VATICANO".',
            designer: 'Daniela Longo',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '130.00€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 }
            ]
        },
        {
            year: 2008,
            subject: 'Año de San Pablo',
            image: '/img/coins/2008/vatican_city-2-euro-2008.jpg?v=203',
            date: '15-10-2008',
            mintage: 106084,
            description: 'La moneda conmemora el 2.000 aniversario del nacimiento del Apóstol Pablo. Muestra la conversión de San Pablo en el camino a Damasco. Inscripción "CITTÀ DEL VATICANO".',
            designer: 'Guido Veroi / Luciana De Simoni',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '90.00€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 }
            ]
        },
        { year: 2009, subject: 'Año Internacional Astronomía', image: '/img/coins/2009/vatican_city-2-euro-2009.jpg', estimatedPrice: '70.00€' },
        { year: 2010, subject: 'Año Sacerdotal', image: '/img/coins/2010/vatican_city-2-euro-2010.jpg', mintage: 115000, estimatedPrice: '49.00€' },
        { year: 2011, subject: 'Jornada Mundial Juventud Madrid', image: '/img/coins/2011/vatican_city-2-euro-2011.jpg', mintage: 115000, estimatedPrice: '36.00€' },
        { year: 2012, subject: 'Encuentro Mundial Familias', image: '/img/coins/2012/vatican_city-2-euro-2012.jpg', estimatedPrice: '36.00€' },
        { year: 2013, subject: 'Sede Vacante', image: '/img/coins/2013/vatican_city-2-euro-2013-sede.jpg', estimatedPrice: '59.00€' },
        { year: 2013, subject: 'Jornada Mundial Juventud Río', image: '/img/coins/2013/vatican_city-2-euro-2013-jmj.jpg', mintage: 125000, estimatedPrice: '45.00€' },
        { year: 2014, subject: 'Caída Muro Berlín', image: '/img/coins/2014/vatican_city-2-euro-2014.jpg', estimatedPrice: '46.00€' },
        { year: 2015, subject: 'Encuentro Mundial Familias', image: '/img/coins/2015/vatican_city-2-euro-2015.jpg', estimatedPrice: '40.00€' },
        { year: 2016, subject: 'Año Santo Misericordia', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2016, subject: 'Gendarmería Vaticana', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2017, subject: 'San Pedro y San Pablo' },
        { year: 2017, subject: 'Apariciones Fátima', mintage: 105000, estimatedPrice: '65€ - 110€' },
        { year: 2018, subject: 'Año Europeo Patrimonio Cultural' },
        { year: 2018, subject: 'Padre Pío', mintage: 101000, estimatedPrice: '70€ - 120€' },
        { year: 2019, subject: '90 Aniv. Estado Vaticano' },
        { year: 2019, subject: 'Capilla Sixtina', mintage: 85000, estimatedPrice: '80€ - 130€' },
        { year: 2020, subject: 'Juan Pablo II', mintage: 74000, estimatedPrice: '90€ - 150€' },
        { year: 2020, subject: 'Rafael Sanzio' },
        { year: 2021, subject: 'Dante Alighieri', mintage: 86000, estimatedPrice: '80€ - 130€' },
        { year: 2021, subject: 'Caravaggio', mintage: 86000, estimatedPrice: '80€ - 130€' },
        { year: 2022, subject: 'Pablo VI' },
        { year: 2022, subject: 'Madre Teresa' },
        { year: 2023, subject: 'Perugino' },
        { year: 2023, subject: '150 Muerte Manzoni' },
        { year: 2024, subject: '150 Aniv. Santo Tomás de Aquino' },
        { year: 2024, subject: 'Emisión 2024 (2)', mintage: 80000, estimatedPrice: '80€ - 130€' },
        { year: 2025, subject: 'Jubileo 2025 (Año Santo)' },
        { year: 2025, subject: '1700 Aniv. Concilio de Nicea' },
        { year: 2025, subject: 'Emisión 2025 (3)' },
    ],
    'Croacia': [
        { year: 2023, subject: 'Introducción del Euro' },
        { year: 2024, subject: 'Marko Marulić' },
        { year: 2024, subject: 'Casco Antiguo de Varaždin' },
        { year: 2025, subject: '1100 Aniv. Reino de Croacia' },
        { year: 2025, subject: 'Isla de Hvar' },
    ],
    // Note: Lituania and Austria duplicates removed in previous steps or handled safely by Object keys usage but explicitly defining implies overrides.
};

// Generates the full list for a specific country
export const getCatalogForCountry = (countryName) => {
    // 1. Get Country Specific Issues
    const specificIssues = (COUNTRY_CATALOGS[countryName] || []).map(item => ({
        ...item,
        country: countryName
    }));

    // 2. Get Joint Issues for this country
    const countryJointIssues = JOINT_ISSUES.filter(joint => hasJointIssue(countryName, joint.year))
        .map(joint => {
            let image = null;
            if (joint.year === 2007) {
                const map2007 = {
                    'Alemania': 'alemania-tratado.jpg',
                    'Austria': 'treaty_austria.jpg',
                    'Bélgica': 'treaty_belgium.jpg',
                    'Eslovenia': 'eslovenia-trtado.jpg',
                    'España': 'treaty_spain.jpg',
                    'Finlandia': 'finlandia-tratado.jpg',
                    'Francia': 'treaty_france.jpg',
                    'Grecia': 'grecia-tratado.jpg',
                    'Irlanda': 'treaty_ireland.jpg',
                    'Italia': 'treaty_italy.jpg',
                    'Luxemburgo': 'luxemburgo-tratado.jpg',
                    'Países Bajos': 'treaty_netherlands.jpg',
                    'Portugal': 'portugal-tratado.jpg'
                };
                if (map2007[countryName]) {
                    image = `/img/coins/2007/${map2007[countryName]}?v=203`;
                }
            }

            if (joint.year === 2009 && joint.subject.includes('UEM')) {
                const map2009 = {
                    'Alemania': 'germany-uem.jpg',
                    'Austria': 'austria-2-euro-2009.jpg',
                    'Bélgica': 'belgium-uem.jpg',
                    'Chipre': 'cyprus-2-euro-2009.jpg',
                    'Eslovaquia': 'slovakia-uem.jpg',
                    'Eslovenia': 'slovenia-2-euro-2009.jpg',
                    'España': 'spain-2-euro-2009.jpg',
                    'Finlandia': 'finland-2-uem.jpg',
                    'Francia': 'france-2-euro-2009.jpg',
                    'Grecia': 'greece-2-euro-2009.jpg',
                    'Irlanda': 'ireland-2-euro-2009.jpg',
                    'Italia': 'italy-2-uem.jpg',
                    'Luxemburgo': 'luxembourg-2-uem.jpg',
                    'Malta': 'malta-2-euro-2009.jpg',
                    'Países Bajos': 'netherlands-2-euro-2009.jpg',
                    'Portugal': 'portugal-uem.jpg'
                };
                if (map2009[countryName]) {
                    image = `/img/coins/2009/${map2009[countryName]}`;
                }
            }

            if (joint.year === 2012 && joint.subject.includes('10 Aniv. Billetes y Monedas Euro')) {
                const tyeImages = {
                    'Alemania': '/img/coins/2012/germany-2-euro-2012-comun.jpg',
                    'Austria': '/img/coins/2012/austria-2-euro-2012.jpg',
                    'Bélgica': '/img/coins/2012/belgium-2-euro-2012-comun.jpg',
                    'Chipre': '/img/coins/2012/cyprus-2-euro-2012.jpg',
                    'Eslovaquia': '/img/coins/2012/slovakia-2-euro-2012.jpg',
                    'Eslovenia': '/img/coins/2012/slovenia-2-euro-2012.jpg',
                    'España': '/img/coins/2012/spain-2-euro-2012-comun.jpg',
                    'Estonia': '/img/coins/2012/estonia-2-euro-2012.jpg',
                    'Finlandia': '/img/coins/2012/finland-2-euro-2012-comun.jpg',
                    'Francia': '/img/coins/2012/france-2-euro-2012-comun.jpg',
                    'Grecia': '/img/coins/2012/greece-2-euro-2012.jpg',
                    'Irlanda': '/img/coins/2012/ireland-2-euro-2012.jpg',
                    'Italia': '/img/coins/2012/italy-2-euro-2012-comun.jpg',
                    'Luxemburgo': '/img/coins/2012/luxembourg-2-euro-2012-comun.jpg',
                    'Malta': '/img/coins/2012/malta-2-euro-2012-comun.jpg',
                    'Países Bajos': '/img/coins/2012/netherlands-2-euro-2012.jpg',
                    'Portugal': '/img/coins/2012/portugal-2-euro-2012-comun.jpg'
                };
                image = tyeImages[countryName] || null;
            }

            if (joint.year === 2015 && joint.subject.includes('Bandera')) {
                const flagImages = {
                    'Alemania': '/img/coins/2015/germany-2-euro-2015-comun.jpg',
                    'Austria': '/img/coins/2015/austria-2-euro-2015.jpg',
                    'Bélgica': '/img/coins/2015/belgium-2-euro-2015-comun.jpg',
                    'Chipre': '/img/coins/2015/cyprus-2-euro-2015.jpg',
                    'Eslovaquia': '/img/coins/2015/slovakia-2-euro-2015-comun.jpg',
                    'Eslovenia': '/img/coins/2015/slovenia-2-euro-2015-comun.jpg',
                    'España': '/img/coins/2015/spain-2-euro-2015-comun.jpg',
                    'Estonia': '/img/coins/2015/estonia-2-euro-2015.jpg',
                    'Finlandia': '/img/coins/2015/finland-2-euro-2015-comun.jpg',
                    'Francia': '/img/coins/2015/france-2-euro-2015-comun.jpg',
                    'Grecia': '/img/coins/2015/greece-2-euro-2015-comun.jpg',
                    'Irlanda': '/img/coins/2015/ireland-2-euro-2015.jpg',
                    'Italia': '/img/coins/2015/italy-2-euro-2015-comun.jpg',
                    'Letonia': '/img/coins/2015/latvia-2-euro-2015-comun.jpg',
                    'Lituania': '/img/coins/2015/lithuania-2-euro-2015-comun.jpg',
                    'Luxemburgo': '/img/coins/2015/luxembourg-2-euro-2015-comun.jpg',
                    'Malta': '/img/coins/2015/malta-2-euro-2015-comun.jpg',
                    'Países Bajos': '/img/coins/2015/netherlands-2-euro-2015.jpg',
                    'Portugal': '/img/coins/2015/portugal-2-euro-2015-comun.jpg'
                };
                image = flagImages[countryName] || null;
            }

            let variantDetails = null;
            let variants = null;
            let price = joint.estimatedPrice;
            let romaPrices = {};

            let uemPrices = {};

            if (joint.year === 2007) {
                romaPrices = {
                    'Alemania': { 'A': '11.00€', 'D': '7.00€', 'F': '10.00€', 'G': '8.00€', 'J': '9.00€' },
                    'Austria': '8.00€', 'Bélgica': '7.00€', 'Eslovenia': '32.00€',
                    'España': '8.00€', 'Finlandia': { 'Canto Tipo A': '11.00€', 'Canto Tipo B': '190.00€' },
                    'Francia': '11.00€', 'Grecia': '9.00€', 'Irlanda': '10.00€',
                    'Italia': '10.00€', 'Luxemburgo': '9.00€', 'Países Bajos': '8.00€',
                    'Portugal': '8.00€'
                };

                const countryPricing = romaPrices[countryName];
                if (countryPricing) {
                    if (typeof countryPricing === 'object') {
                        // Multi-variant (Germany, Finland)
                        variants = Object.entries(countryPricing).map(([v, p]) => `${v} (${p})`);
                    } else {
                        // Single-variant
                        variants = null;
                    }
                }

                if (countryName === 'Finlandia') {
                    variantDetails = 'Existen dos variantes de canto: A (Texto legible con cara arriba) y B (Texto invertido).';
                }
            }

            if (joint.year === 2009 && joint.subject.includes('UEM')) {
                uemPrices = {
                    'Alemania': { 'A': '12.00€', 'D': '12.00€', 'F': '12.00€', 'G': '12.00€', 'J': '12.00€' },
                    'Austria': '8.80€', 'Bélgica': '8.00€', 'Chipre': '8.00€', 'Eslovaquia': '8.00€', 'Eslovenia': '8.00€',
                    'España': { 'Normal': '7.00€', 'Estrellas Grandes': '50.00€' },
                    'Finlandia': { 'Canto Tipo A': '15.00€', 'Canto Tipo B': '27.00€' },
                    'Francia': '10.00€', 'Grecia': '8.00€', 'Irlanda': '13.00€',
                    'Italia': '12.00€', 'Luxemburgo': { 'Normal': '9.00€', 'Variante ceca (Proof)': '140.00€' },
                    'Malta': '4.50€', 'Países Bajos': '10.50€', 'Portugal': '8.00€'
                };

                if (countryName === 'Finlandia') {
                    variantDetails = 'Existen dos variantes de canto: A (Texto legible con cara arriba) y B (Texto invertido).';
                }
                if (countryName === 'España') {
                    variantDetails = 'La variante "Estrellas Grandes" es un error en el tamaño de las estrellas de la UE.';
                }
            }

            if (joint.year === 2012 && joint.subject.includes('10 Aniv. Billetes y Monedas')) {
                const tyePrices = {
                    'Alemania': { 'A': '9.00€', 'D': '7.00€', 'F': '5.50€', 'G': '6.00€', 'J': '6.00€' },
                    'Austria': '3.50€', 'Bélgica': '5.50€', 'Chipre': '8.00€', 'Eslovaquia': '6.00€', 'Eslovenia': '7.50€',
                    'España': '6.00€', 'Estonia': '7.00€', 'Finlandia': '8.50€',
                    'Francia': '9.00€', 'Grecia': '10.00€', 'Irlanda': '14.00€',
                    'Italia': '6.00€', 'Luxemburgo': '5.00€', 'Malta': '10.00€',
                    'Países Bajos': '5.00€', 'Portugal': '5.50€'
                };

                const countryPricing = tyePrices[countryName];
                if (countryPricing) {
                    if (typeof countryPricing === 'object') {
                        variants = Object.entries(countryPricing).map(([v, p]) => `${v} (${p})`);
                    } else {
                        variants = null;
                        price = countryPricing;
                    }
                }
            }

            if (joint.year === 2015 && joint.subject.includes('Bandera')) {
                const flagPrices = {
                    'Alemania': { 'A': '6.00€', 'D': '6.00€', 'F': '6.00€', 'G': '6.00€', 'J': '6.00€' },
                    'Austria': '5.90€', 'Bélgica': '8.90€', 'Chipre': '6.90€', 'Eslovaquia': '5.50€', 'Eslovenia': '6.50€',
                    'España': '6.60€', 'Estonia': '9.50€', 'Finlandia': '6.00€',
                    'Francia': { 'Normal': '7.70€', 'Color': '125.00€' },
                    'Grecia': '7.20€', 'Irlanda': '8.80€',
                    'Italia': '7.80€', 'Letonia': '6.50€', 'Lituania': '6.50€', 'Luxemburgo': '7.90€', 'Malta': '6.90€',
                    'Países Bajos': { 'Normal': '8.80€', 'Color (Tipo 1)': '1350.00€', 'Color (Tipo 2)': '1350.00€', 'Color (Tipo 3)': '1350.00€' },
                    'Portugal': '6.90€'
                };

                const countryPricing = flagPrices[countryName];
                if (countryPricing) {
                    if (typeof countryPricing === 'object') {
                        variants = Object.entries(countryPricing).map(([v, p]) => `${v} (${p})`);
                    } else {
                        variants = null;
                        price = countryPricing;
                    }
                }
            }

            if (joint.year === 2007 && typeof romaPrices[countryName] === 'string') {
                price = romaPrices[countryName];
            } else if (joint.year === 2009 && typeof uemPrices[countryName] === 'string') {
                price = uemPrices[countryName];
            } else if (joint.year === 2012 && joint.subject.includes('10 Aniv. Billetes y Monedas') && typeof joint.estimatedPrice === 'undefined') {
                const tyePricesObj = {
                    'Austria': '3.50€', 'Bélgica': '5.50€', 'Chipre': '8.00€', 'Eslovaquia': '6.00€', 'Eslovenia': '7.50€',
                    'España': '6.00€', 'Estonia': '7.00€', 'Finlandia': '8.50€',
                    'Francia': '9.00€', 'Grecia': '10.00€', 'Irlanda': '14.00€',
                    'Italia': '6.00€', 'Luxemburgo': '5.00€', 'Malta': '10.00€',
                    'Países Bajos': '5.00€', 'Portugal': '5.50€'
                };
                price = tyePricesObj[countryName];
            } else if (joint.year === 2015 && joint.subject.includes('Bandera') && typeof joint.estimatedPrice === 'undefined') {
                const flagPricesObj = {
                    'Austria': '5.90€', 'Bélgica': '8.90€', 'Chipre': '6.90€', 'Eslovaquia': '5.50€', 'Eslovenia': '6.50€',
                    'España': '6.60€', 'Estonia': '9.50€', 'Finlandia': '6.00€',
                    'Grecia': '7.20€', 'Irlanda': '8.80€',
                    'Italia': '7.80€', 'Letonia': '6.50€', 'Lituania': '6.50€', 'Luxemburgo': '7.90€', 'Malta': '6.90€',
                    'Portugal': '6.90€'
                };
                price = flagPricesObj[countryName];
            }

            return {
                ...joint,
                country: countryName,
                isJoint: true,
                image: image || joint.image,
                variantDetails: variantDetails || joint.variantDetails,
                variants: variants || joint.variants,
                estimatedPrice: price
            };
        });

    // 3. Merge and Sort
    const fullList = [...specificIssues, ...countryJointIssues].sort((a, b) => b.year - a.year);

    // 4. Post-process to add default variants (e.g. Germany Mints)
    return fullList.map(item => {
        // GERMANY: All have 5 mints, but 2008 Hamburg has a famous Error (Old Map)
        if (countryName === 'Alemania') {
            if (item.year === 2008 && item.subject.includes('Hamburg')) {
                // Special case: standard mints + error variants if desired, or simplified
                // Let's offer the error as a specific variant option if they have it
                return { ...item, variants: ['A (9.00€)', 'D (4.00€)', 'F (4.00€)', 'G (4.00€)', 'J (4.00€)', 'Error Mapa (40.00€)'] };
            }
            if (item.year === 2009 && item.subject.includes('Saarland')) {
                return { ...item, variants: ['A (5.00€)', 'D (5.00€)', 'F (5.00€)', 'G (10.00€)', 'J (5.00€)'] };
            }
            if (item.year === 2010 && item.subject.includes('Bremen')) {
                return { ...item, variants: ['A (4.00€)', 'D (5.00€)', 'F (4.50€)', 'G (5.00€)', 'J (4.00€)'] };
            }
            if (item.year === 2011 && item.subject.includes('Nordrhein')) {
                return { ...item, variants: ['A (7.00€)', 'D (4.00€)', 'F (4.00€)', 'G (4.00€)', 'J (4.00€)'] };
            }
            if (item.year === 2012 && item.subject.includes('Bayern')) {
                return { ...item, variants: ['A (4.00€)', 'D (3.50€)', 'F (3.50€)', 'G (3.50€)', 'J (3.50€)'] };
            }
            if (item.year === 2013 && item.subject.includes('Maulbronn')) {
                return { ...item, variants: ['A (4.20€)', 'D (5.90€)', 'F (3.90€)', 'G (3.90€)', 'J (3.90€)'] };
            }
            if (item.year === 2013 && item.subject.includes('Elíseo')) {
                return { ...item, variants: ['A (3.90€)', 'D (4.90€)', 'F (3.90€)', 'G (4.90€)', 'J (3.90€)'] };
            }
            if (item.year === 2014 && item.subject.includes('Niedersachsen')) {
                return { ...item, variants: ['A (5.90€)', 'D (5.90€)', 'F (5.90€)', 'G (5.90€)', 'J (5.90€)'] };
            }
            if (item.year === 2015 && item.subject.includes('Hessen')) {
                return { ...item, variants: ['A (6.90€)', 'D (5.90€)', 'F (5.90€)', 'G (5.90€)', 'J (5.90€)'] };
            }
            if (item.year === 2015 && item.subject.includes('Reunificación')) {
                return { ...item, variants: ['A (4.50€)', 'D (4.00€)', 'F (4.00€)', 'G (4.00€)', 'J (4.00€)'] };
            }
            if (item.year === 2006) {
                return { ...item, variants: ['A (9.00€)', 'D (9.00€)', 'F (9.00€)', 'G (9.00€)', 'J (19.00€)'] };
            }
            if (item.year === 2007 && item.subject.includes('Schwerin')) {
                return { ...item, variants: GERMAN_MINTS, estimatedPrice: '10.00€' };
            }
            // IF it already has variants populated (like Joint Issues with prices), don't overwrite
            if (item.variants) {
                return item;
            }
            return { ...item, variants: GERMAN_MINTS };
        }

        // LUXEMBOURG: Variants (Manual Re-entry)
        if (countryName === 'Luxemburgo') {
            // IF it already has variants populated from Joint Issues logic (prices), don't overwrite
            if (item.isJoint && item.variants && (item.year === 2007 || item.year === 2009 || item.year === 2012)) {
                return item;
            }

            let variants = ['Normal'];

            // 1. Special Cases & Base Variants (Photo, Proof, Microlettering)
            // Joint 2009 (UEM) is handled above.
            // Joint 2022 (Erasmus)
            if (item.year === 2022 && item.isJoint) {
                variants.push('Variante ceca (Proof)', 'Variante ceca (Set)');
            }
            // 2004 Monogram
            else if (item.year === 2004 && item.subject.includes('Monograma')) {
                variants.push('H a la derecha (80€)');
            }
            // 2020 Charles
            else if (item.year === 2020 && item.subject.includes('Charles')) {
                variants.push('Variante Foto 1', 'Variante Foto 2');
            }
            // 2021 (Both)
            else if (item.year === 2021) {
                variants.push('Variante Foto 1', 'Variante Foto 2', 'Variante Foto 3');
            }
            // 2023, 2024, 2025 (All)
            else if ([2023, 2024, 2025].includes(item.year)) {
                variants.push('Variante Foto');
            }

            // 2. Add "Variante Ceca" (Mint Mark)
            // Years: 2005, 2006, 2016-2025 (Modified by request)
            const hasCeca1 = [2005, 2006, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].includes(item.year);
            const is2022Erasmus = item.year === 2022 && item.isJoint;

            if (hasCeca1 && !is2022Erasmus) {
                if (item.year === 2005 || item.year === 2006) {
                    variants.push('Ceca Vantaa - Letra S (1650€)');
                } else {
                    variants.push('Variante ceca');
                }
            }

            // 3. Add "Variante Ceca 2"
            // Years: 2018, 2019, 2020, 2021, 2022, 2023, 2025
            const hasCeca2 = [2018, 2019, 2020, 2021, 2022, 2023, 2025].includes(item.year);
            if (hasCeca2 && !is2022Erasmus) {
                variants.push('Variante ceca 2');
            }

            if (variants.length > 1) {
                // Remove duplicates if any
                const uniqueVariants = [...new Set(variants)];
                return { ...item, variants: uniqueVariants };
            }
        }

        // MALTA: Mint Marks (Roll vs Coincard)
        // User Request: specific list for 2 variants (No Mark vs Mark)
        // EXCEPTION: Joint Issues (Comunes) do NOT have variants.
        if (countryName === 'Malta') {
            // Exception: 2014 Police has no variants
            if (item.year === 2014 && item.subject.includes('Policía')) {
                return item;
            }

            const hasVariants =
                !item.isJoint && (
                    (item.year >= 2012 && item.year <= 2020) ||
                    (item.year === 2021 && item.subject.includes('Tarxien'))
                );

            if (hasVariants) {
                // If it already has specific variants (with prices), do not override
                if (item.variants && item.variants.length > 0) {
                    return item;
                }

                // Specific "Temple" series: 3 Variants (No Mark, Coincard/Mark, Wallet/F)
                const isFTemple =
                    (item.subject.toLowerCase().includes('templo') || item.subject.toLowerCase().includes('templos')) &&
                    [2016, 2017, 2019, 2020, 2021].includes(item.year);

                if (isFTemple) {
                    return { ...item, variants: ['Sin Marca (Rollo)', 'Marca Ceca (Coincard)', 'Cartera (F)'] };
                }

                return { ...item, variants: ['Sin Marca (Rollo)', 'Marca Ceca (Coincard)'] };
            }
        }

        // FRANCE: Color Coins
        // 2015 Joint (Flag) is isJoint=true + year 2015.
        const isFranceColorYear = [2008, 2014, 2015, 2017, 2018, 2024].includes(item.year);

        if (countryName === 'Francia' && isFranceColorYear) {
            const subject = item.subject.toLowerCase();
            if (item.year === 2008 && subject.includes('presidencia')) {
                return { ...item, variants: ['Normal (5.80€)', 'Color (130.00€)'] };
            }
            if (item.year === 2014 && subject.includes('sida')) {
                return { ...item, variants: ['Normal (5.45€)', 'Color (159.00€)'] };
            }
            if (item.year === 2015 && subject.includes('federación')) {
                return { ...item, variants: ['Normal (5.00€)', 'Color (159.00€)'] };
            }
            const isColorCandidate =
                (item.year === 2017 && subject.includes('cáncer')) ||
                (item.year === 2018 && subject.includes('aciano')) ||
                (item.year === 2024 && subject.includes('antorcha'));

            // Don't override if joint issue already set calculated price variants
            if (item.isJoint && item.variants && item.variants.some(v => v.includes('€'))) {
                return item;
            }

            if (isColorCandidate) {
                return { ...item, variants: ['Normal', 'Color'] };
            }

            // Fallback for 2015 joint if variants aren't priced
            if (item.year === 2015 && item.isJoint && (!item.variants || !item.variants.some(v => v.includes('€')))) {
                return { ...item, variants: ['Normal', 'Color'] };
            }
        }

        // BELGIUM: Remove FDC/Proof. Add Edge Variants for 2014 Red Cross (Cruz Roja)
        if (countryName === 'Bélgica') {
            if (item.year === 2014 && item.subject.includes('Cruz Roja')) {
                return { ...item, variants: ['Normal (21.00€)', 'Canto Italia (890.00€)', 'Canto Países Bajos (890.00€)'] };
            }
            return item;
        }

        // FINLAND: Edge Variants for 2007 and 2009 (User request - Only for Joint Issues / "Comunes")
        if (countryName === 'Finlandia' && (item.year === 2007 || item.year === 2009) && item.isJoint) {
            // Let joint logic define prices, only override if lacking prices.
            // Actually, we don't need this if Joint logic is already setting variants with prices.
            if (!item.variants || typeof item.variants[0] !== 'string' || !item.variants[0].includes('€')) {
                if (item.year === 2007) {
                    return { ...item, variants: ['Canto Tipo A (11.00€)', 'Canto Tipo B (190.00€)'] };
                }
                return { ...item, variants: ['Canto Tipo A', 'Canto Tipo B'] };
            }
        }

        // NETHERLANDS: Color Variants
        if (countryName === 'Países Bajos') {
            // 2013 "200 Años Reino": Normal + Color
            if (item.year === 2013 && item.subject.includes('200 Años')) {
                return { ...item, variants: ['Normal (6.50€)', 'Color (270.00€)'] };
            }

            // 2014 Reina Beatriz Color Variant
            if (item.year === 2014 && item.subject.includes('Reina Beatriz')) {
                return { ...item, variants: ['Normal (5.90€)', 'Variante Color Azul (329.00€)', 'Variante Color Roja (329.00€)'] };
            }

            // 2014 & 2015: 4 variants (Normal + 3 Colors)
            if (item.year === 2014 || item.year === 2015) {
                // Do not overwrite joint issue if it already processed its valid variants
                if (item.variants && item.variants.some(v => v.includes('€'))) {
                    return item;
                }
                return { ...item, variants: ['Normal', 'Color (Tipo 1)', 'Color (Tipo 2)', 'Color (Tipo 3)'] };
            }
        }

        // LITHUANIA: 2021 Biosphere Edge Error
        if (countryName === 'Lituania' && item.year === 2021 && item.subject.includes('Biosfera')) {
            return { ...item, variants: ['Normal', 'Error en Canto'] };
        }

        // PORTUGAL
        if (countryName === 'Portugal') {
            // Color Variants for 2017 Police & 2024 Olympic Team
            if ((item.year === 2017 && item.subject.includes('Policía')) ||
                (item.year === 2024 && item.subject.includes('Olímpico'))) {
                return { ...item, variants: ['Normal', 'Color'] };
            }
        }

        // SPAIN: 2009 Error (Large Stars)
        // Handled directly correctly in Joint Issues block, but if someone edits Spain specific later
        if (countryName === 'España' && item.year === 2009 && item.subject.includes('UEM')) {
            // Only acts as a safety fallback since joint logic already overrides
            if (!item.variants) {
                return { ...item, variants: ['Normal (7.00€)', 'Error Estrellas Grandes (50.00€)'] };
            }
        }

        return item;
    });
};

// Export raw catalog for reference if needed
export const COMMEMORATIVE_CATALOG = Object.keys(COUNTRY_CATALOGS).reduce((acc, country) => {
    return [...acc, ...getCatalogForCountry(country)];
}, []);

// NEW: Calculate Total Catalog Size effectively
export const calculateCommemorativeCatalogSize = () => {
    return Object.keys(COUNTRY_CATALOGS).reduce((total, country) => {
        const countryList = getCatalogForCountry(country);

        const count = countryList.reduce((acc, item) => {
            // If item has variants/mints defined, count them. 
            // Otherwise count as 1.
            // Note: Data migration for Germany will add these variants dynamically or statically
            if (item.variants && item.variants.length > 0) {
                return acc + item.variants.length;
            }
            // Fallback for Germany if not yet migrated in data but we know it has 5 mints
            // This can be removed once data is fully updated
            if (country === 'Alemania') {
                return acc + 5;
            }
            return acc + 1;
        }, 0);

        return total + count;
    }, 0);
};

export const getCommemorativesByYear = (year) => {
    return COMMEMORATIVE_CATALOG.filter(coin => coin.year === year);
};

export { JOINT_ISSUES, COUNTRY_CATALOGS, hasJointIssue };
