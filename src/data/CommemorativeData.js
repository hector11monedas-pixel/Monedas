// Basic filter data for Commemorative coins
export const COMMEMORATIVE_YEARS = Array.from({ length: 2026 - 2004 + 1 }, (_, i) => 2004 + i); // 2004 starts

// We can reuse the main country list, but maybe export it here too if needed
export const COMMEMORATIVE_COUNTRIES = [
    "Alemania", "Andorra", "Austria", "Bélgica", "Bulgaria", "Chipre", "Croacia",
    "Eslovaquia", "Eslovenia", "España", "Estonia", "Finlandia", "Francia",
    "Grecia", "Irlanda", "Italia", "Letonia", "Lituania", "Luxemburgo",
    "Malta", "Mónaco", "Países Bajos", "Portugal", "San Marino", "Vaticano"
];
