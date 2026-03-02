import fs from 'fs';

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

const updatedAustria = `    'Austria': [
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
    ],`;

const startAt = content.indexOf("'Austria': [");
const endAt = content.indexOf("    'Bélgica': [");
content = content.substring(0, startAt) + updatedAustria + '\n' + content.substring(endAt);

const updatedBelgium = `    'Bélgica': [
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
    ],`;

const startBel = content.indexOf("'Bélgica': [");
const endBel = content.indexOf("    'Chipre': [");
content = content.substring(0, startBel) + updatedBelgium + '\n' + content.substring(endBel);

fs.writeFileSync('src/data/CommemorativeCatalog.js', content);
console.log('Filled Austria and Belgium.');
