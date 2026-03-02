import fs from 'fs';

const updatedAndorra = `
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
    ],`;

let content = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');
const startIdx = content.indexOf("'Andorra': [");
const endIdx = content.indexOf("    'Austria': [");

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + updatedAndorra + '\n' + content.substring(endIdx);
    fs.writeFileSync('src/data/CommemorativeCatalog.js', newContent);
    console.log('Andorra data substituted.');
}
