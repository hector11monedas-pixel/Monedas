export const APP_UPDATES = [
    {
        id: -15,
        date: '29/01/2026',
        title: 'Mapa Euro Ajustado 🌍',
        description: 'Hemos calibrado la proyección del mapa para que se visualice más arriba y perfectamente integrado con los iconos.'
    },
    {
        id: -14,
        date: '29/01/2026',
        title: 'Mapa de Calor (Vectorial) 🔥',
        description: 'Nuevo mapa interactivo: ahora los países se colorean completamente según tu progeso. ¡Haz clic para explorar!'
    },
    {
        id: -13,
        date: '29/01/2026',
        title: 'Mejora Visual Conmemorativas 🎨',
        description: 'Nuevas monedas realistas (bimetálicas) generadas por CSS con indicador de Año y País.'
    },
    {
        id: -12,
        date: '29/01/2026',
        title: 'Filtro por Años 📅',
        description: 'Nueva vista para consultar y añadir Commemorativas organizadas por Año (2004-2026).'
    },
    {
        id: -11,
        date: '29/01/2026',
        title: 'Actualización San Marino 🇸🇲',
        description: 'Definición de monedas en Circulación (Verde) y Sets (Amarillo).'
    },
    {
        id: -10,
        date: '29/01/2026',
        title: 'Actualización Portugal 🇵🇹',
        description: 'Lógica de emisión: Sets (Amarillo) y Circulación (Verde) actualizada.'
    },
    {
        id: -9,
        date: '29/01/2026',
        title: 'Estadísticas Corregidas 🛠️',
        description: 'Solucionado error en gráficos y carga de datos.'
    },
    {
        id: -90,
        date: '28/01/2026',
        title: 'Estadísticas Completas 📊',
        description: 'Gráficas de Países, Años y Ranking detallado con Top 3 destacado.'
    },
    {
        id: -8,
        date: '28/01/2026',
        title: 'Actualización Finlandia 🇫🇮',
        description: 'Lógica 2019-2024: Sets recientes (Amarillo) y No Emitidas (Rojo) en 2019.'
    },
    {
        id: -7,
        date: '28/01/2026',
        title: 'Actualización Estonia 🇪🇪',
        description: 'Datos de emisión: Circulación (Verde), Sets (Amarillo) y No Emitidas (Rojo).'
    },
    {
        id: -6,
        date: '28/01/2026',
        title: 'Mejoras en Estadísticas y Datos 📈',
        description: 'Filtros por pestañas (Euro, España...), corrección de gráficos y datos de emisión para Eslovaquia y Eslovenia.'
    },
    {
        id: -5,
        date: '28/01/2026',
        title: 'Nuevas Estadísticas 📊',
        description: 'Página de análisis con Valor Facial, Ránking por Países y Gráficos.'
    },
    {
        id: -4,
        date: '28/01/2026',
        title: 'Actualización Croacia 🇭🇷',
        description: 'Sets 2025 para 50c, 1€ y 2€ (Amarillo).'
    },
    {
        id: -3,
        date: '28/01/2026',
        title: 'Actualización Vaticano 🇻🇦',
        description: 'Lógica Sets (Amarillo) y adición de Variante 2005 Sede Vacante (SV).'
    },
    {
        id: -2,
        date: '28/01/2026',
        title: 'Corrección Bélgica 🇧🇪',
        description: 'Ajuste en años 2000/2001 para 1c y 10c (Circulación vs Sets).'
    },
    {
        id: -1,
        date: '28/01/2026',
        title: 'Actualización Bélgica 🇧🇪',
        description: 'Definición de moneda circulante (Verde) vs Sets (Amarillo) según listas confirmadas.'
    },
    {
        id: 0,
        date: '28/01/2026',
        title: 'Actualización Austria 🇦🇹',
        description: 'Lógica de emisión ajustada: Sets (Amarillos) y No Emitidas (Rojas) según normativa oficial.'
    },
    {
        id: 1,
        date: '28/01/2026',
        title: 'Actualización Andorra 🇦🇩',
        description: 'Añadida lógica de emisión y sets (Amarillo) para Andorra (2014-2025).'
    },
    {
        id: 2,
        date: '27/01/2026',
        title: 'Mejoras de Tabla 📊',
        description: 'Cabecera fija (Sticky) y corrección de contadores para Alemania.'
    },
    {
        id: 3,
        date: '26/01/2026',
        title: 'Nuevos Países 🇪🇺',
        description: 'Ampliación de catálogo para Francia, Malta y Luxemburgo.'
    }
];

export const getLatestUpdate = () => {
    return APP_UPDATES[0]; // Assuming top is newest
};
