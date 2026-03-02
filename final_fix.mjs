import fs from 'fs';

const current = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');
const oldF = fs.readFileSync('temp_old.mjs', 'utf8');
const newF = fs.readFileSync('temp_new.mjs', 'utf8');

// 1. the point to truncate current CommemorativeCatalog (right after getCatalogForCountry finishes)
const currentCut = current.indexOf('// Export raw catalog for reference if needed');
let cleaned = current;
if (currentCut !== -1) {
    cleaned = current.substring(0, currentCut).trimEnd() + '\n\n';
} else {
    // try to find where getCatalogForCountry is declared multiple times
    // just a brute force find for the end of the good getCatalogForCountry
}

// 2. get the good COMMEMORATIVE_CATALOG and calculateCommemorativeCatalogSize from temp_old.mjs
const oldCutStart = oldF.indexOf('// Export raw catalog for reference if needed');
const oldCutEnd = oldF.length; // to the end!
const oldGoodEnd = oldF.substring(oldCutStart, oldCutEnd).trimEnd() + '\n\n';

// 3. get getCommemorativesByYear and export {} from temp_new.mjs
const newCutStart = newF.indexOf('export const getCommemorativesByYear');
const newGoodEnd = newF.substring(newCutStart).trimEnd() + '\n';

fs.writeFileSync('src/data/CommemorativeCatalog.js', cleaned + oldGoodEnd + newGoodEnd);
console.log('Fixed final exports!');
