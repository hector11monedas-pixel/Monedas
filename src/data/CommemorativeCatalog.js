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
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 },
                { type: 'BU', title: 'Set Anual', quantity: 145000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 70000 }
            ]
        },
        {
            year: 2007,
            subject: 'Mecklenburg-Vorpommern (Castillo de Schwerin)',
            image: '/img/coins/2007/germany.jpg?v=203'
        },
        {
            year: 2008,
            subject: 'Hamburg (St. Michaelis)',
            image: null, // Image download failed
            date: '01-02-2008',
            mintage: 30000000,
            description: 'La moneda muestra la iglesia barroca de St. Michaelis, conocida popularmente como "Michel". Es un símbolo de la ciudad y del estado federal de Hamburgo. Debajo de la imagen aparece la inscripción "HAMBURG". En la parte superior derecha se encuentra la marca de ceca.',
            designer: 'Erich Ott',
            edge: 'EINIGKEIT UND RECHT UND FREIHEIT',
            estimatedPrice: '3.00€ - 4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 30000000 },
                { type: 'BU', title: 'Set Anual', quantity: 140000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 70000 }
            ]
        },
        { year: 2009, subject: 'Saarland (Ludwigskirche)' },
        { year: 2010, subject: 'Bremen (Ayuntamiento y Roland)' },
        { year: 2011, subject: 'Nordrhein-Westfalen (Catedral de Colonia)' },
        { year: 2012, subject: 'Bayern (Castillo de Neuschwanstein)' },

        { year: 2013, subject: 'Baden-Württemberg (Monasterio de Maulbronn)' },
        { year: 2013, subject: '50 Aniv. Tratado del Elíseo' }, // Joint with France
        { year: 2014, subject: 'Niedersachsen (Iglesia de San Miguel)' },
        { year: 2015, subject: 'Hessen (Paulskirche)' },
        { year: 2015, subject: '25 Aniv. Reunificación Alemana' },
        { year: 2016, subject: 'Sachsen (Zwinger de Dresde)' },
        { year: 2017, subject: 'Rheinland-Pfalz (Porta Nigra)' },
        { year: 2018, subject: 'Berlin (Palacio de Charlottenburg)' },
        { year: 2018, subject: '100 Aniv. Helmut Schmidt' },
        { year: 2019, subject: 'Bundesrat (70 Aniversario)' },
        { year: 2019, subject: '30 Aniv. Caída Muro de Berlín' }, // Joint with France? No, Germany specific subject matches France
        { year: 2020, subject: 'Brandenburg (Palacio de Sanssouci)' },
        { year: 2020, subject: '50 Aniv. Genuflexión de Varsovia' },
        { year: 2021, subject: 'Sachsen-Anhalt (Catedral de Magdeburgo)' },
        { year: 2022, subject: 'Thüringen (Castillo de Wartburg)' },
        // Bundesländer Series II
        { year: 2023, subject: 'Hamburg (Elbphilharmonie)' },
        { year: 2023, subject: '1275 Aniv. Carlomagno' },
        { year: 2024, subject: 'Mecklenburg-Vorpommern (Königsstuhl)' },
        { year: 2024, subject: '175 Aniv. Constitución Paulskirche' },
        { year: 2025, subject: 'Saarland (Saarschleife)' },
        { year: 2025, subject: '35 Aniv. Unidad Alemana' },
        { year: 2026, subject: 'Bremen II (Klimahaus Bremerhaven)' },
        { year: 2026, subject: '275 Aniv. Nacimiento Goethe' },
    ],
    'Andorra': [
        { year: 2014, subject: '20 Aniv. Ingreso en el Consejo de Europa' },
        { year: 2015, subject: '20 Años Firma Acuerdo Aduanero' },
        { year: 2015, subject: '30 Aniv. Mayoría de Edad' },
        { year: 2016, subject: '25 Aniv. Radio y Televisión de Andorra' },
        { year: 2016, subject: '150 Aniv. Nueva Reforma 1866' },
        { year: 2017, subject: '100 Aniv. Himno de Andorra' },
        { year: 2017, subject: 'El País de los Pirineos' },
        { year: 2018, subject: '25 Aniv. Constitución de Andorra' },
        { year: 2018, subject: '70 Aniv. Declaración Derechos Humanos' },
        { year: 2019, subject: 'Finales Copa del Mundo de Esquí' },
        { year: 2019, subject: '600 Aniv. Consell de la Terra' },
        { year: 2020, subject: '27 Cumbre Iberoamericana' },
        { year: 2020, subject: '50 Aniv. Sufragio Universal Femenino' },
        { year: 2021, subject: '100 Aniv. Coronación Meritxell' },
        { year: 2021, subject: 'Cuidamos de nuestros mayores' },
        { year: 2022, subject: '10 Aniv. Acuerdo Monetario' },
        { year: 2022, subject: 'Leyenda de Carlomagno' },
        { year: 2023, subject: '30 Aniv. Ingreso en la ONU' },
        { year: 2023, subject: 'Fiestas del Fuego del Solsticio' },
        { year: 2024, subject: '100 Aniv. Esquí en Andorra' },
        { year: 2024, subject: 'Copa del Mundo BTT' },
        { year: 2025, subject: 'Juegos de los Pequeños Estados de Europa' },
        { year: 2025, subject: 'Casa de la Vall' },
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
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 6880000 },
                { type: 'BU', title: 'Set Anual', quantity: 100000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 20000 }
            ]
        },
        { year: 2016, subject: '200 Aniv. Banco Nacional de Austria' },
        { year: 2018, subject: '100 Años República de Austria' },
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
            estimatedPrice: '6€ - 12€',
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
            estimatedPrice: '5.00€ - 8.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 },
                { type: 'BU', title: 'Coincard', quantity: 20000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 3000 } // Estimated
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/belgium.jpg',
            date: '01-05-2008',
            mintage: 5000000,
            description: 'La moneda muestra líneas curvas alrededor de un rectángulo marcado con la cifra 60. El año "2008" está inscrito sobre el rectángulo y las palabras "UNIVERSAL DECLARATION OF HUMAN RIGHTS" debajo. El nombre del país aparece en sus tres idiomas oficiales: "BELGIE – BELGIQUE – BELGIEN".',
            designer: 'Luc Luycx',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.00€ - 7.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 4988000 },
                { type: 'BU', title: 'Coincard', quantity: 12000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 0 } // Included in sets logic usually
            ]
        },
        { year: 2009, subject: '200 Aniv. Louis Braille' },
        { year: 2010, subject: 'Presidencia UE' },
        { year: 2011, subject: '100 Aniv. Día de la Mujer' },
        { year: 2012, subject: '75 Aniv. Concurso Reina Elisabeth' },
        { year: 2013, subject: '100 Aniv. Tour de Francia' },
        { year: 2013, subject: 'Instituto Real Meteorológico' },
        { year: 2014, subject: '100 Aniv. Primera Guerra Mundial' },
        { year: 2014, subject: '150 Años Cruz Roja' },
        { year: 2015, subject: 'Año Europeo del Desarrollo' },
        { year: 2016, subject: 'Juegos Olímpicos Río' },
        { year: 2016, subject: 'Child Focus' },
        { year: 2017, subject: 'Universidad de Lieja' },
        { year: 2017, subject: 'Universidad de Gante' },
        { year: 2018, subject: 'Mayo del 68' },
        { year: 2018, subject: 'Satélite ESRO 2B' },
        { year: 2019, subject: '450 Aniv. Pieter Brueghel' },
        { year: 2019, subject: '25 Aniv. Instituto Monetario Europeo' },
        { year: 2020, subject: 'Año Internacional Sanidad Vegetal' },
        { year: 2020, subject: 'Jan van Eyck' },
        { year: 2021, subject: 'Unión Económica Bélgica-Luxemburgo' },
        { year: 2021, subject: 'Carlos V' },
        { year: 2022, subject: 'Sector Sanitario (COVID-19)' },
        { year: 2023, subject: 'Año del Art Nouveau' },
        { year: 2024, subject: 'Presidencia UE' },
        { year: 2024, subject: 'Lucha contra Cáncer' },
        { year: 2025, subject: '750 Aniv. Gremio de Cerveceros' },
        { year: 2025, subject: 'Centenario Universidad KU Leuven' },
    ],
    'Chipre': [
        { year: 2017, subject: 'Paphos Capital Europea Cultura' },
        { year: 2020, subject: '30 Aniv. Instituto Neurología Genética' },
        { year: 2023, subject: '60 Aniv. Banco Central Chipre' },
        { year: 2024, subject: '20 Años Ingreso UE' },
        { year: 2026, subject: 'Presidencia UE' },
    ],
    'Eslovaquia': [
        { year: 2009, subject: '20 Aniv. Revolución de Terciopelo' },
        { year: 2011, subject: '20 Aniv. Grupo Visegrád' },
        { year: 2013, subject: '1150 Aniv. Misión Cirilo y Metodio' },
        { year: 2014, subject: '10 Aniv. Ingreso UE' },
        { year: 2015, subject: '200 Aniv. Ľudovít Štúr' },
        { year: 2016, subject: 'Presidencia UE' },
        { year: 2017, subject: '550 Aniv. Universitas Istropolitana' },
        { year: 2018, subject: '25 Aniv. República Eslovaca' },
        { year: 2019, subject: '100 Aniv. Muerte Milan Rastislav' },
        { year: 2020, subject: '20 Aniv. Ingreso OCDE' },
        { year: 2021, subject: '100 Aniv. Alexander Dubček' },
        { year: 2022, subject: '300 Aniv. Máquina Vapor Atmosférica' },
        { year: 2023, subject: '100 Aniv. Primer Transfusión Sangre' },
        { year: 2023, subject: '200 Aniv. Correo Expreso Viena-Bratislava' },
        { year: 2024, subject: '100 Aniv. Maratón de la Paz de Košice' },
        { year: 2025, subject: '100 Aniv. Primer Torneo Deportivo Internacional' },
        { year: 2026, subject: '100 Aniv. Radiodifusión Eslovaca' },
        { year: 2026, subject: 'Emisión 2026' },
    ],
    'Eslovenia': [
        {
            year: 2008,
            subject: '500 Aniv. Primož Trubar',
            image: null, // Image download failed
            date: '26-05-2008',
            mintage: 1000000,
            description: 'La moneda muestra la efigie de Primož Trubar de perfil. Las inscripciones "PRIMOŽ TRUBAR" y "1508 • 1586" aparecen a la izquierda, y "SLOVENIJA 2008" abajo a la derecha.',
            designer: 'Miljenko Licul / Maja Licul / Janez Boljka',
            edge: 'SLOVENIJA + punto',
            estimatedPrice: '3.50€ - 6.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 955000 },
                { type: 'BU', title: 'Set Anual', quantity: 40000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 5000 }
            ]
        },
        { year: 2010, subject: '200 Aniv. Jardín Botánico Liubliana' },
        { year: 2011, subject: '100 Aniv. Franc Rozman' },
        { year: 2013, subject: '800 Aniv. Cueva de Postojna' },
        { year: 2014, subject: '600 Aniv. Coronación Barbara Celje' },
        { year: 2015, subject: '2000 Aniv. Emona (Liubliana)' },
        { year: 2016, subject: '25 Aniv. Independencia' },
        { year: 2017, subject: '10 Aniv. Euro en Eslovenia' },
        { year: 2018, subject: 'Día Mundial de las Abejas' },
        { year: 2019, subject: '100 Aniv. Universidad de Liubliana' },
        { year: 2020, subject: '500 Aniv. Adam Bohorič' },
        { year: 2021, subject: '200 Aniv. Museo Regional Carniola' },
        { year: 2022, subject: '150 Aniv. Jože Plečnik' },
        { year: 2023, subject: '150 Aniv. Josip Plemelj' },
        { year: 2024, subject: '250 Aniv. Biblioteca Nacional' },
        { year: 2025, subject: 'Mito de la Reina de las Serpientes' },
        { year: 2026, subject: 'Emisión 2026' },
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
            estimatedPrice: '4.00€ - 7.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 7950000 },
                { type: 'BU', title: 'Cartera', quantity: 40000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 10000 }
            ]
        },
        { year: 2010, subject: 'Centro Histórico de Córdoba' },
        { year: 2011, subject: 'Alhambra de Granada' },
        { year: 2012, subject: 'Catedral de Burgos' },
        { year: 2013, subject: 'El Escorial' },
        { year: 2014, subject: 'Park Güell (Gaudí)' },
        { year: 2014, subject: 'Felipe VI (Proclamación)' },
        { year: 2015, subject: 'Cueva de Altamira' },
        { year: 2016, subject: 'Acueducto de Segovia' },
        { year: 2017, subject: 'Santa María del Naranco' },
        { year: 2018, subject: 'Santiago de Compostela' },
        { year: 2018, subject: '50 Aniv. Rey Felipe VI' },
        { year: 2019, subject: 'Muralla de Ávila' },
        { year: 2020, subject: 'Arquitectura Mudéjar de Aragón' },
        { year: 2021, subject: 'Ciudad Histórica de Toledo' },
        { year: 2022, subject: 'Parque Nacional de Garajonay' },
        { year: 2022, subject: 'V Centenario Vuelta al Mundo' },
        { year: 2023, subject: 'Ciudad Vieja de Cáceres' },
        { year: 2023, subject: 'Presidencia Española UE' },
        { year: 2024, subject: 'Catedral de Sevilla' },
        { year: 2024, subject: '200 Aniv. Policía Nacional' },
        { year: 2025, subject: 'Ciudad Vieja de Salamanca' },
        { year: 2026, subject: 'La Sagrada Familia' },
        { year: 2026, subject: 'Emisión 2026' },
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
            description: 'La moneda conmemora la quinta ampliación de la Unión Europea en 2004, que sumó diez nuevos estados miembros. El diseño estilizado representa un pilar del cual brotan diez brotes hacia arriba. Las letras "EU" aparecen cerca del pilar, junto con el año "2004" en la parte superior, rodeado por las doce estrellas de la UE.',
            designer: 'Pertti Mäkinen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '40€ - 65€',
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
            estimatedPrice: '6€ - 12€',
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
            estimatedPrice: '5.00€ - 8.00€',
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
            estimatedPrice: '4.50€ - 7.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 2000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: null, // Image download failed
            date: '24-10-2008',
            mintage: 1500000,
            description: 'La moneda muestra una figura humana dentro de un corazón y, debajo, la inscripción "HUMAN RIGHTS". Las siglas "FI" de Finlandia, la "K" del escultor y la marca de ceca aparecen en la parte inferior.',
            designer: 'Tapio Kettunen',
            edge: 'SUOMI FINLAND + tres cabezas de león',
            estimatedPrice: '5.00€ - 8.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1474500 },
                { type: 'BU', title: 'Set Anual', quantity: 20000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 5500 }
            ]
        },
        { year: 2009, subject: '200 Aniv. Autonomía Finesa' },
        { year: 2010, subject: 'Decreto de la Moneda 1860' },
        { year: 2011, subject: '200 Aniv. Banco de Finlandia' },
        { year: 2012, subject: 'Helene Schjerfbeck' },
        { year: 2013, subject: 'Parlamento de 1863' },
        { year: 2013, subject: 'F. E. Sillanpää' },
        { year: 2014, subject: 'Tove Jansson' },
        { year: 2014, subject: 'Ilmari Tapiovaara' },
        { year: 2015, subject: 'Jean Sibelius' },
        { year: 2015, subject: 'Akseli Gallen-Kallela' },
        { year: 2016, subject: 'Eino Leino' },
        { year: 2016, subject: 'Georg Henrik von Wright' },
        { year: 2017, subject: '100 Aniv. Independencia' },
        { year: 2017, subject: 'Naturaleza Finlandesa' },
        { year: 2018, subject: 'Parque Nacional Koli' },
        { year: 2018, subject: 'Cultura de la Sauna' },
        { year: 2019, subject: 'Ley de Gobierno 1919' },
        { year: 2020, subject: 'Universidad de Turku' },
        { year: 2020, subject: 'Väinö Linna' },
        { year: 2021, subject: 'Periodismo Democrático' },
        { year: 2021, subject: 'Islas Åland' },
        { year: 2022, subject: 'Ballet Nacional' },
        { year: 2022, subject: 'Investigación Climática' },
        { year: 2023, subject: 'Ley de Conservación Natural' },
        { year: 2023, subject: 'Servicios Sociales y de Salud' },
        { year: 2024, subject: 'Elecciones y Democracia' },
        { year: 2024, subject: 'Arquitectura (Gesellius, Lindgren, Saarinen)' },
        { year: 2025, subject: '500 Aniv. Traducción Nuevo Testamento' },
        { year: 2025, subject: '2ª Emisión 2025' },
        { year: 2026, subject: '150 Aniv. Correo Finlandés' },
        { year: 2026, subject: '2ª Emisión 2026' },
    ],
    'Francia': [
        {
            year: 2008,
            subject: 'Presidencia UE',
            image: '/img/coins/2008/france.jpg',
            date: '01-07-2008',
            mintage: 20000000,
            description: 'La moneda conmemora la Presidencia francesa del Consejo de la Unión Europea. Muestra la inscripción "2008 PRÉSIDENCE FRANÇAISE UNION EUROPÉENNE RF".',
            designer: 'Philippe Starck',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '3.00€ - 4.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 20000000 },
                { type: 'BU', title: 'Set Anual', quantity: 40000 },
                { type: 'PROOF', title: 'Caja Proof', quantity: 10000 }
            ]
        },
        { year: 2010, subject: 'Llamamiento 1940 (De Gaulle)' },
        { year: 2011, subject: 'Fiesta de la Música' },
        { year: 2012, subject: 'Abbé Pierre' },
        { year: 2013, subject: 'Tratado del Elíseo' },
        { year: 2013, subject: 'Pierre de Coubertin' },
        { year: 2014, subject: 'Día Mundial SIDA' },
        { year: 2014, subject: 'Desembarco de Normandía' },
        { year: 2015, subject: 'Paz en Europa 1945-2015' },
        { year: 2015, subject: 'Federación Festival' },
        { year: 2016, subject: 'Copa Euro UEFA 2016' },
        { year: 2016, subject: 'François Mitterrand' },
        { year: 2017, subject: 'Lucha contra Cáncer Mama' },
        { year: 2017, subject: 'Rodin' },
        { year: 2018, subject: 'Aciano de Francia' },
        { year: 2018, subject: 'Simone Veil' },
        { year: 2019, subject: '60 Aniv. Astérix' },
        { year: 2019, subject: '30 Aniv. Muro Berlín' },
        { year: 2020, subject: 'De Gaulle (Llamamiento)' },
        { year: 2020, subject: 'Investigación Médica' },
        { year: 2021, subject: 'UNICEF 75 Años' },
        { year: 2021, subject: 'Juegos Olímpicos París 2024 (1/4)' },
        { year: 2022, subject: '90 Aniv. Jacques Chirac' },
        { year: 2022, subject: 'Juegos Olímpicos París 2024 (2/4)' },
        { year: 2023, subject: 'Juegos Olímpicos París 2024 (3/4)' },
        { year: 2023, subject: 'Copa Mundial Rugby' },
        { year: 2024, subject: 'Hércules (JJOO)' },
        { year: 2024, subject: 'Antorcha Olímpica (JJOO)' },
        { year: 2025, subject: 'Louvre' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
    ],
    'Grecia': [
        { year: 2004, subject: 'Juegos Olímpicos Atenas', image: '/img/coins/2004/greece.jpg' },
        { year: 2010, subject: 'Batalla de Maratón' },
        { year: 2011, subject: 'Juegos Olímpicos Especiales' },
        { year: 2013, subject: 'Unión de Creta con Grecia' },
        { year: 2013, subject: 'Academia Platónica' },
        { year: 2014, subject: '400 Aniv. El Greco' },
        { year: 2014, subject: '150 Aniv. Unión Islas Jónicas' },
        { year: 2015, subject: '75 Aniv. Muerte Spyros Louis' },
        { year: 2016, subject: '120 Aniv. Dimitri Mitropoulos' },
        { year: 2016, subject: 'Holocausto Arkadi' },
        { year: 2017, subject: 'Nikos Kazantzakis' },
        { year: 2017, subject: 'Sitio Arqueológico de Filipos' },
        { year: 2018, subject: 'Kostis Palamas' },
        { year: 2018, subject: 'Dodecaneso' },
        { year: 2019, subject: 'Manolis Andronicos' },
        { year: 2019, subject: 'Andreas Kalvos' },
        { year: 2020, subject: 'Batalla de las Termópilas' },
        { year: 2020, subject: 'Unión de Tracia' },
        { year: 2021, subject: 'Revolución Griega' },
        { year: 2022, subject: 'Constitución Griega' },
        { year: 2023, subject: 'Maria Callas' },
        { year: 2023, subject: 'Constantin Carathéodory' },
        { year: 2024, subject: '150 Aniv. Penélope Delta' },
        { year: 2024, subject: '50 Aniv. Restauración Democracia' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
    ],
    'Irlanda': [
        { year: 2016, subject: 'Levantamiento de Pascua' },
        { year: 2019, subject: 'Dáil Éireann (100 Aniv)' },
        { year: 2023, subject: '50 Aniv. Unión Europea' },
        { year: 2026, subject: 'Emisión 2026' },
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
            description: 'La moneda conmemora el 1er aniversario de la firma de la Constitución Europea. El diseño central representa a Europa y el toro, con Europa sosteniendo una pluma y el texto de la Constitución. La inscripción "COSTITUZIONE EUROPEA" rodea la parte inferior.',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
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
            description: 'La moneda conmemora los XX Juegos Olímpicos de Invierno de Turín 2006. El diseño muestra a un esquiador en acción y la Mole Antonelliana (edificio símbolo de Turín).',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '3.00€ - 4.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 40000000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: null, // Image download failed
            date: '10-12-2008',
            mintage: 5000000,
            description: 'La moneda muestra a un hombre y una mujer con una rama de olivo, una espiga de maíz, una rueda dentada y alambre de púas, símbolos del derecho a la paz, la alimentación, el trabajo y la libertad. El monograma "RI" y el año "2008" están entre las figuras. Abajo, "DIRITTI UMANI" y el número "60" formado por eslabones de cadena.',
            designer: 'Maria Carmela Colaneri (MCC)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '3.50€ - 5.00€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 5000000 }
            ]
        },
        { year: 2009, subject: 'Louis Braille' },
        { year: 2010, subject: 'Cavour' },
        { year: 2011, subject: '150 Aniv. Unificación Italia' },
        { year: 2012, subject: 'Giovanni Pascoli' },
        { year: 2013, subject: 'Giuseppe Verdi' },
        { year: 2013, subject: 'Giovanni Boccaccio' },
        { year: 2014, subject: 'Carabinieri' },
        { year: 2014, subject: 'Galileo Galilei' },
        { year: 2015, subject: 'Dante Alighieri' },
        { year: 2015, subject: 'EXPO Milan' },
        { year: 2016, subject: 'Donatello' },
        { year: 2016, subject: 'Plauto' },
        { year: 2017, subject: 'San Marcos Venecia' },
        { year: 2017, subject: 'Tito Livio' },
        { year: 2018, subject: 'Ministerio Sanidad' },
        { year: 2018, subject: 'Constitución Italiana' },
        { year: 2019, subject: 'Leonardo da Vinci' },
        { year: 2020, subject: 'Vigili del Fuoco' },
        { year: 2020, subject: 'Maria Montessori' },
        { year: 2021, subject: 'Roma Capital' },
        { year: 2021, subject: 'Profesiones Sanitarias' },
        { year: 2022, subject: 'Policía Nacional' },
        { year: 2022, subject: 'Jueces Falcone y Borsellino' },
        { year: 2023, subject: 'Fuerza Aérea' },
        { year: 2023, subject: 'Alessandro Manzoni' },
        { year: 2024, subject: 'Guardia di Finanza' }, // Keeping this one, assuming user meant the other potential dup or just wanted cleanup.
        { year: 2024, subject: 'Rita Levi-Montalcini' },
        // { year: 2024, subject: 'Guardia di Finanza (150 Aniv)' }, // Removed duplicate as requested
        { year: 2025, subject: 'Corte Suprema de Casación' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
    ],
    'Letonia': [
        { year: 2014, subject: 'Riga Capital Cultura' },
        { year: 2015, subject: 'Presidencia UE' },
        { year: 2015, subject: 'Cigüeña Negra' },
        { year: 2016, subject: 'Agricultura Letona' },
        { year: 2016, subject: 'Región de Vidzeme' },
        { year: 2017, subject: 'Región de Kurzeme' },
        { year: 2017, subject: 'Región de Latgale' },
        { year: 2018, subject: 'Estados Bálticos (Conjunta)' },
        { year: 2018, subject: 'Región de Zemgale' },
        { year: 2019, subject: 'Sol Naciente' },
        { year: 2020, subject: 'Cerámica de Latgale' },
        { year: 2021, subject: '100 Aniv. Reconocimiento de iure' },
        { year: 2022, subject: 'Alfabetización Financiera' },
        { year: 2023, subject: 'Girasol Ucraniano' },
        { year: 2024, subject: 'Emisión 2024' },
        { year: 2025, subject: 'Patrimonio Hanseático' },
        { year: 2026, subject: 'Emisión 2026' },
    ],
    'Lituania': [
        { year: 2015, subject: 'Lengua Lituana' },
        { year: 2016, subject: 'Cultura Báltica' },
        { year: 2017, subject: 'Vilnius Capital Cultura' },
        { year: 2018, subject: 'Festival Canto y Danza' },
        { year: 2018, subject: 'Estados Bálticos (Conjunta)' },
        { year: 2019, subject: 'Sutartinės (Canciones)' },
        { year: 2019, subject: 'Samogitia' },
        { year: 2020, subject: 'Colina de las Cruces' },
        { year: 2020, subject: 'Aukštaitija' },
        { year: 2021, subject: 'Reserva Biosfera Žuvintas' },
        { year: 2021, subject: 'Dzūkija' },
        { year: 2022, subject: '100 Años Baloncesto' },
        { year: 2022, subject: 'Suvalkija' },
        { year: 2023, subject: 'Junto con Ucrania' },
        { year: 2024, subject: 'Jardines de Paja (Sodai)' },
        { year: 2025, subject: 'Pintura Simbolista (Čiurlionis)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
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
            estimatedPrice: '4.00€ - 8.00€ (UNC)',
            variantDetails: 'Existen dos variantes principales según la presentación:\n- **H a la izquierda:** Se encuentra en los rollos (calidad UNC).\n- **H a la derecha:** Se encuentra en las Coincards (calidad BU) y en los estuches Proof.',
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
            estimatedPrice: '5.00€ - 10.00€',
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
            estimatedPrice: '5.00€ - 9.00€',
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
            image: '/img/coins/2007/luxembourg.jpg?v=203',
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
            image: null, // Image download failed
            date: '01-02-2008',
            mintage: 1000000,
            description: 'La moneda muestra al Gran Duque Enrique y el "Château de Berg", su residencia oficial. El año "2008" aparece arriba y "LËTZEBUERG" abajo.',
            designer: 'Alain Hoffmann',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '4.50€ - 7.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Set / Coincard', quantity: 25000 }, // Estimated
                { type: 'PROOF', title: 'Caja Proof', quantity: 6000 } // Estimated
            ]
        },
        { year: 2009, subject: 'Gran Duquesa Carlota' },
        { year: 2010, subject: 'Escudo de Armas' },
        { year: 2011, subject: 'Juan de Luxemburgo' },
        { year: 2012, subject: 'Guillermo IV' },
        { year: 2012, subject: 'Boda Principesca' },
        { year: 2013, subject: 'Himno Nacional' },
        { year: 2014, subject: '175 Aniv. Independencia' },
        { year: 2014, subject: 'Ascensión al Trono' },
        { year: 2015, subject: '15 Aniv. Trono Henri' },
        { year: 2015, subject: '125 Aniv. Dinastía Nassau' },
        { year: 2016, subject: 'Puente Gran Duquesa Carlota' },
        { year: 2017, subject: 'Servicio Militar Voluntario' },
        { year: 2017, subject: '200 Aniv. Guillermo III' },
        { year: 2018, subject: '150 Aniv. Constitución' },
        { year: 2018, subject: 'Guillermo I' },
        { year: 2019, subject: 'Sufragio Universal' },
        { year: 2019, subject: '100 Aniv. Gran Duquesa Carlota' },
        { year: 2020, subject: 'Nacimiento Príncipe Charles' },
        { year: 2020, subject: 'Emisión 2020 (2)' },
        { year: 2021, subject: '40 Aniv. Boda Henri y Teresa' },
        { year: 2021, subject: '100 Aniv. Jean' },
        { year: 2022, subject: '10 Aniv. Boda Guillaume y Stephanie' },
        { year: 2022, subject: '50 Aniv. Bandera de Luxemburgo' },
        { year: 2023, subject: '175 Aniv. Parlamento' },
        { year: 2023, subject: '25 Aniv. Comité Olímpico' },
        { year: 2024, subject: '175 Aniv. Franco Luxemburgués' },
        { year: 2024, subject: '100 Aniv. Febe del Gran Duque Juan' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
    ],
    'Malta': [
        { year: 2011, subject: 'Primeros Representantes' },
        { year: 2012, subject: 'Mayoría Representativa' },
        { year: 2013, subject: 'Autogobierno 1921' },
        { year: 2014, subject: 'Independencia 1964' },
        { year: 2014, subject: 'Policía de Malta' },
        { year: 2015, subject: 'República 1974' },
        { year: 2015, subject: 'Primer Vuelo Malta' },
        { year: 2016, subject: 'Templos Ġgantija' },
        { year: 2016, subject: 'Solidaridad con Amor' },
        { year: 2017, subject: 'Templo Ħaġar Qim' },
        { year: 2017, subject: 'Paz' },
        { year: 2018, subject: 'Templo Mnajdra' },
        { year: 2018, subject: 'Patrimonio Cultural' },
        { year: 2019, subject: 'Templo Ta\' Ħaġrat' },
        { year: 2019, subject: 'Naturaleza y Medio Ambiente' },
        { year: 2020, subject: 'Templo Skorba' },
        { year: 2020, subject: 'Juegos' },
        { year: 2021, subject: 'Templos Tarxien' },
        { year: 2021, subject: 'Héroes Pandemia' },
        { year: 2022, subject: 'Hipogeo Hal Saflieni' },
        { year: 2022, subject: 'Resolución Paz y Seguridad' },
        { year: 2023, subject: 'Copérnico' },
        { year: 2023, subject: 'Napoleón en Malta' },
        { year: 2024, subject: 'Abeja Maltesa' },
        { year: 2024, subject: 'Ciudadela de Gozo' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
    ],
    'Mónaco': [
        {
            year: 2007,
            subject: '25 Aniv. Muerte Grace Kelly',
            image: '/img/coins/2007/monaco.jpg?v=204',
            date: '01-07-2007',
            mintage: 20001,
            description: 'La moneda conmemora el 25º aniversario de la muerte de la Princesa Grace Kelly. Muestra su efigie de perfil mirando a la izquierda. Es la moneda de 2 euros más valiosa y buscada.',
            designer: 'Roger Bernard Baron',
            edge: '2 ** 2 ** 2 ** 2 ** 2 ** 2 **',
            estimatedPrice: '3000€ - 4500€',
            formats: [
                { type: 'BU', title: 'Estuche Oficial', quantity: 20001 }
            ]
        },
        { year: 2011, subject: 'Boda Príncipe Alberto II' },
        { year: 2012, subject: '500 Aniv. Soberanía' },
        { year: 2013, subject: '20 Aniv. Ingreso ONU' },
        { year: 2015, subject: '800 Aniv. Fortaleza' },
        { year: 2016, subject: '150 Aniv. Monte Carlo' },
        { year: 2017, subject: 'Carabineros del Príncipe' },
        { year: 2018, subject: 'François Joseph Bosio' },
        { year: 2019, subject: 'Honoré V' },
        { year: 2020, subject: '300 Aniv. Honoré III' },
        { year: 2021, subject: '10 Aniv. Boda Alberto II' },
        { year: 2022, subject: '100 Aniv. Alberto I' },
        { year: 2023, subject: 'Rainiero III' },
        { year: 2024, subject: '500 Aniv. Tratado con Carlos V' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
    ],
    'Países Bajos': [
        { year: 2011, subject: 'Erasmo de Rotterdam' },
        { year: 2013, subject: 'Cambio de Trono' },
        { year: 2013, subject: '200 Años Reino' },
        { year: 2014, subject: 'Rey Willem-Alexander' }, // Double-check if this is commemorative or standard. Usually handled as standard but 2013 was special.
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
            estimatedPrice: '3.50€ - 5.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1975000 },
                { type: 'BU', title: 'Set Anual', quantity: 15000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 10000 }
            ]
        },
        {
            year: 2008,
            subject: '60 Aniv. Derechos Humanos',
            image: '/img/coins/2008/portugal.jpg',
            date: '15-09-2008',
            mintage: 1000000, // Reduced to 1M vs ECB sometimes says differs, standard resource says 1,025,000 incl sets
            description: 'La moneda muestra el escudo de Portugal arriba y un diseño geométrico abajo, con la leyenda "60 ANOS DA DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS".',
            designer: 'João Duarte',
            edge: 'Cinco escudos y siete castillos',
            estimatedPrice: '4.00€ - 6.50€',
            formats: [
                { type: 'UNC', title: 'Rollo / Bolsa', quantity: 1000000 },
                { type: 'BU', title: 'Set Anual', quantity: 15000 },
                { type: 'PROOF', title: 'Set Proof', quantity: 10000 }
            ]
        },
        { year: 2009, subject: 'Juegos de la Lusofonía' },
        { year: 2010, subject: 'República Portuguesa' },
        { year: 2011, subject: 'Fernão Mendes Pinto' },
        { year: 2012, subject: 'Guimaraes Capital Cultura' },
        { year: 2013, subject: 'Torre de los Clérigos' },
        { year: 2014, subject: '25 Abril' },
        { year: 2014, subject: 'Año Agricultura Familiar' },
        { year: 2015, subject: 'Cruz Roja Portuguesa' },
        { year: 2015, subject: 'Timor' },
        { year: 2016, subject: 'Equipo Olímpico' },
        { year: 2016, subject: 'Puente 25 Abril' },
        { year: 2017, subject: 'Policía Seguridad Pública' },
        { year: 2017, subject: 'Raúl Brandão' },
        { year: 2018, subject: 'Imprenta Nacional' },
        { year: 2018, subject: 'Jardín Botánico Ajuda' },
        { year: 2019, subject: 'Magallanes' },
        { year: 2019, subject: 'Universidad de Madeira' },
        { year: 2020, subject: 'Universidad Coimbra' },
        { year: 2020, subject: 'ONU 75 Años' },
        { year: 2021, subject: 'Presidencia UE' },
        { year: 2021, subject: 'Juegos Olímpicos Tokio' },
        { year: 2022, subject: 'Vuelo Atlántico Sur' },
        { year: 2023, subject: 'Jornada Mundial Juventud' },
        { year: 2023, subject: 'Paz' },
        { year: 2024, subject: '50 Aniv. Revolución Claveles' },
        { year: 2024, subject: 'Equipo Olímpico París 2024' },
        { year: 2025, subject: 'Turismo Sostenible' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
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
            estimatedPrice: '60€ - 85€',
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
            estimatedPrice: '110€ - 180€',
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
            estimatedPrice: '90€ - 130€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 120000 }
            ]
        },
        {
            year: 2007,
            subject: 'Giuseppe Garibaldi',
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
            image: null, // Image download failed
            date: '20-05-2008',
            mintage: 130000,
            description: 'La moneda muestra cinco siluetas humanas que simbolizan las culturas de las cinco regiones de Europa y textos sagrados. Inscripción: "ANNO EUROPEO DEL DIALOGO INTERCULTURALE".',
            designer: 'Ettore Lorenzo Frapiccini (E.L.F.)',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '45€ - 65€',
            formats: [
                { type: 'BU', title: 'Coincard / Cartera', quantity: 130000 }
            ]
        },
        { year: 2009, subject: 'Creatividad e Innovación' },
        { year: 2010, subject: 'Sandro Botticelli' },
        { year: 2011, subject: 'Giorgio Vasari' },
        { year: 2012, subject: '10 Años Euro' }, // Use Common design? yes
        { year: 2013, subject: 'Pinturicchio' },
        { year: 2014, subject: 'Donato Bramante' },
        { year: 2014, subject: 'Giacomo Puccini' },
        { year: 2015, subject: 'Dante Alighieri' },
        { year: 2015, subject: 'Unificación de Alemania' },
        { year: 2016, subject: 'Donatello' },
        { year: 2016, subject: 'Shakespeare' },
        { year: 2017, subject: 'Giotto' },
        { year: 2017, subject: 'Año Turismo Sostenible' },
        { year: 2018, subject: 'Tintoretto' },
        { year: 2018, subject: 'Bernini' },
        { year: 2019, subject: 'Leonardo da Vinci' },
        { year: 2019, subject: 'Filippo Lippi' },
        { year: 2020, subject: 'Rafael Sanzio' },
        { year: 2020, subject: 'Giambattista Tiepolo' },
        { year: 2021, subject: 'Caravaggio' },
        { year: 2021, subject: 'Albrecht Dürer' },
        { year: 2022, subject: 'Piero della Francesca' },
        { year: 2022, subject: 'Antonio Canova' },
        { year: 2023, subject: 'Perugino' },
        { year: 2023, subject: 'Luca Signorelli' },
        { year: 2024, subject: '50 Aniv. Declaración de Derechos' },
        { year: 2024, subject: '530 Aniv. Ghirlandaio' },
        { year: 2025, subject: 'Emisión 2025 (1)' },
        { year: 2025, subject: 'Emisión 2025 (2)' },
        { year: 2026, subject: 'Emisión 2026 (1)' },
        { year: 2026, subject: 'Emisión 2026 (2)' },
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
            estimatedPrice: '120€ - 160€',
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
            estimatedPrice: '220€ - 300€',
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
            estimatedPrice: '180€ - 250€',
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
            estimatedPrice: '140€ - 190€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 }
            ]
        },
        {
            year: 2008,
            subject: 'Año de San Pablo',
            image: null, // Image download failed
            date: '15-10-2008',
            mintage: 100000, // Usually 100k or close mainly sets
            description: 'La moneda conmemora el Año de San Pablo. Representa la conversión de San Pablo en el camino a Damasco, cayendo de su caballo deslumbrado por la luz.',
            designer: 'Guido Veroi / Luciana De Simoni',
            edge: '2 * 2 * 2 * 2 * 2 * 2 *',
            estimatedPrice: '130€ - 170€',
            formats: [
                { type: 'BU', title: 'Cartera Oficial', quantity: 100000 }
            ]
        },
        { year: 2009, subject: 'Año Internacional Astronomía' },
        { year: 2010, subject: 'Año Sacerdotal' },
        { year: 2011, subject: 'Jornada Mundial Juventud Madrid' },
        { year: 2012, subject: 'Encuentro Mundial Familias' },
        { year: 2013, subject: 'Sede Vacante' },
        { year: 2013, subject: 'Jornada Mundial Juventud Río' },
        { year: 2014, subject: 'Caída Muro Berlín' },
        { year: 2015, subject: 'Encuentro Mundial Familias' },
        { year: 2016, subject: 'Año Santo Misericordia' },
        { year: 2016, subject: 'Gendarmería Vaticana' },
        { year: 2017, subject: 'San Pedro y San Pablo' },
        { year: 2017, subject: 'Apariciones Fátima' },
        { year: 2018, subject: 'Año Europeo Patrimonio Cultural' },
        { year: 2018, subject: 'Padre Pío' },
        { year: 2019, subject: '90 Aniv. Estado Vaticano' },
        { year: 2019, subject: 'Capilla Sixtina' },
        { year: 2020, subject: 'Juan Pablo II' },
        { year: 2020, subject: 'Rafael Sanzio' },
        { year: 2021, subject: 'Dante Alighieri' },
        { year: 2021, subject: 'Caravaggio' },
        { year: 2022, subject: 'Pablo VI' },
        { year: 2022, subject: 'Madre Teresa' },
        { year: 2023, subject: 'Perugino' },
        { year: 2023, subject: '150 Muerte Manzoni' },
        { year: 2024, subject: '150 Aniv. Santo Tomás de Aquino' },
        { year: 2024, subject: 'Emisión 2024 (2)' }, // Added missing 2024
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
                    'Alemania': 'treaty_germany.jpg',
                    'Austria': 'treaty_austria.jpg', 'Bélgica': 'treaty_belgium.jpg',
                    'España': 'treaty_spain.jpg', 'Francia': 'treaty_france.jpg', 'Irlanda': 'treaty_ireland.jpg',
                    'Italia': 'treaty_italy.jpg', 'Países Bajos': 'treaty_netherlands.jpg'
                };
                if (map2007[countryName]) {
                    image = `/img/coins/2007/${map2007[countryName]}?v=203`;
                }
            }

            // Finland 2007 Joint Issue Variant
            let variantDetails = null;
            if (joint.year === 2007 && countryName === 'Finlandia') {
                variantDetails = 'Existen dos variantes de canto: A (Texto legible con cara arriba) y B (Texto invertido).';
            }

            return {
                ...joint,
                country: countryName,
                isJoint: true,
                image: image || joint.image,
                variantDetails: variantDetails || joint.variantDetails
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
                return { ...item, variants: [...GERMAN_MINTS, 'Error Mapa Antiguo (F)'] };
            }
            return { ...item, variants: GERMAN_MINTS };
        }

        // LUXEMBOURG: Variants (Manual Re-entry)
        // LUXEMBOURG: Variants (Manual Re-entry)
        if (countryName === 'Luxemburgo') {
            let variants = ['Normal'];

            // 1. Special Cases & Base Variants (Photo, Proof, Microlettering)
            // Joint 2009 (UEM)
            if (item.year === 2009 && item.isJoint) {
                variants.push('Variante ceca (Proof)');
            }
            // Joint 2022 (Erasmus)
            else if (item.year === 2022 && item.isJoint) {
                variants.push('Variante ceca (Proof)', 'Variante ceca (Set)');
            }
            // 2004 Monogram
            else if (item.year === 2004 && item.subject.includes('Monograma')) {
                variants.push('Variante Microlettering');
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
            // Ensure we don't duplicate logic for joint issues if they already have "Variante ceca" from above special cases?
            // User requested generic "Variante Ceca" for these years. 
            // Note: 2009/2022 Joint logic above adds specific strings like 'Variante ceca (Proof)'. 
            // The user list for "Variante Ceca" overlaps with 2022.
            // Let's assume for standard/commemorative non-joint, or additive if requested.
            // User said: "2022 (en las 2)".
            if (hasCeca1 && !is2022Erasmus) {
                variants.push('Variante ceca');
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
        // Specific checks based on user request:
        // 2008: Presidencia UE
        // 2014: SIDA
        // 2015: Federación (Festival) AND Bandera (Joint)
        // 2017: Cáncer
        // 2018: Aciano / Bleut
        // 2024: Antorcha
        if (countryName === 'Francia' && isFranceColorYear) {
            const subject = item.subject.toLowerCase();
            const isColorCandidate =
                (item.year === 2008 && subject.includes('presidencia')) ||
                (item.year === 2014 && subject.includes('sida')) ||
                (item.year === 2015 && (subject.includes('federación') || item.isJoint)) ||
                (item.year === 2017 && subject.includes('cáncer')) ||
                (item.year === 2018 && subject.includes('aciano')) ||
                (item.year === 2024 && subject.includes('antorcha'));

            if (isColorCandidate) {
                return { ...item, variants: ['Normal', 'Color'] };
            }
        }

        // BELGIUM: Remove FDC/Proof. Add Edge Variants for 2014 Red Cross (Cruz Roja)
        if (countryName === 'Bélgica') {
            if (item.year === 2014 && item.subject.includes('Cruz Roja')) {
                return { ...item, variants: ['Canto Belga', 'Canto Italia', 'Canto Países Bajos'] };
            }
            return item;
        }

        // FINLAND: Edge Variants for 2007 and 2009 (User request - Only for Joint Issues / "Comunes")
        if (countryName === 'Finlandia' && (item.year === 2007 || item.year === 2009) && item.isJoint) {
            return { ...item, variants: ['Canto Tipo A', 'Canto Tipo B'] };
        }

        // NETHERLANDS: Color Variants
        if (countryName === 'Países Bajos') {
            // 2013 "200 Años Reino": Normal + Color
            if (item.year === 2013 && item.subject.includes('200 Años')) {
                return { ...item, variants: ['Normal', 'Color'] };
            }

            // 2014 & 2015: 4 variants (Normal + 3 Colors)
            if (item.year === 2014 || item.year === 2015) {
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
        if (countryName === 'España' && item.year === 2009 && item.subject.includes('UEM')) {
            return { ...item, variants: ['Normal', 'Error Estrellas Grandes'] };
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
