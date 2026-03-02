/**
 * Data Service for dynamic loading of country coin data.
 * This helps reduce the initial bundle size by only loading data when needed.
 */

const dataConfig = {
    'España': () => import('../data/SpainCoinsData'),
    'Alemania': () => import('../data/GermanyEmissionData'),
    'Francia': () => import('../data/FranceEmissionData'),
    'Italia': () => import('../data/ItalyEmissionData'),
    'Bélgica': () => import('../data/BelgiumEmissionData'),
    'Austria': () => import('../data/AustriaEmissionData'),
    'Finlandia': () => import('../data/FinlandEmissionData'),
    'Grecia': () => import('../data/GreeceEmissionData'),
    'Irlanda': () => import('../data/IrelandEmissionData'),
    'Luxemburgo': () => import('../data/LuxemburgoEmissionData'),
    'Países Bajos': () => import('../data/NetherlandsEmissionData'),
    'Portugal': () => import('../data/PortugalEmissionData'),
    'Eslovaquia': () => import('../data/SlovakiaEmissionData'),
    'Eslovenia': () => import('../data/SloveniaEmissionData'),
    'Chipre': () => import('../data/CyprusEmissionData'),
    'Malta': () => import('../data/MaltaEmissionData'),
    'Estonia': () => import('../data/EstoniaEmissionData'),
    'Letonia': () => import('../data/LatviaEmissionData'),
    'Lituania': () => import('../data/LithuaniaEmissionData'),
    'Andorra': () => import('../data/AndorraEmissionData'),
    'San Marino': () => import('../data/SanMarinoEmissionData'),
    'Mónaco': () => import('../data/MonacoEmissionData'),
    'Vaticano': () => import('../data/VaticanEmissionData'),
    'Croacia': () => import('../data/CroatiaEmissionData'),
    'Bulgaria': () => import('../data/BulgariaEmissionData'),
};

const dataCache = new Map();

export const loadCountryData = async (countryName) => {
    if (dataCache.has(countryName)) {
        return dataCache.get(countryName);
    }

    const loader = dataConfig[countryName];
    if (!loader) {
        console.warn(`No dynamic loader found for country: ${countryName}`);
        return null;
    }

    try {
        const module = await loader();
        dataCache.set(countryName, module);
        return module;
    } catch (error) {
        console.error(`Error loading data for ${countryName}:`, error);
        return null;
    }
};

export const clearDataCache = () => {
    dataCache.clear();
};
