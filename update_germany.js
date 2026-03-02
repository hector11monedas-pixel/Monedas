import fs from 'fs';

const updatedGermany = `
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
    ],`;

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');
const startIdx = content.indexOf("'Alemania': [");
const endIdx = content.indexOf("    'Andorra': [");

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + updatedGermany + '\n' + content.substring(endIdx);
    fs.writeFileSync('src/data/CommemorativeCatalog.js', newContent);
    console.log('Alemania data substituted.');
}
