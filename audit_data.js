import fs from 'fs';

// Check Commemoratives
const cat = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');
const commBlockRegex = /\{\s*year:\s*\d+,[^}]*subject:([^}]*)\}/gs;
let commMatches = cat.match(commBlockRegex);
if (commMatches) {
    let missingCommPrice = 0;
    let missingCommImage = 0;
    commMatches.forEach((m) => {
        if (!m.includes('estimatedPrice:')) missingCommPrice++;
        if (!m.includes('imageUrl:')) missingCommImage++;
    });
    console.log(`Commemorative catalog has ${commMatches.length} items. Missing values: ${missingCommPrice}, Missing images: ${missingCommImage}`);
}

// Check RegularPriceCatalog
const reg = fs.readFileSync('src/data/RegularPriceCatalog.js', 'utf8');
// Look for price values like 'price: 1.5' or '"2e": 2.5'
const priceLines = (reg.match(/price:\s*[\d.]+/g) || []).length;
console.log(`Regular price catalog contains ${priceLines} dedicated price strings, plus dynamic values`);

// Check EuroPricing
const euro = fs.readFileSync('src/data/EuroPricing.js', 'utf8');
const euroPrices = (euro.match(/price:\s*[\d.]+/g) || []).length;
console.log(`EuroPricing contains ${euroPrices} specific price listings`);
