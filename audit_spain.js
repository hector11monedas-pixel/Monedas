import fs from 'fs';
const content = fs.readFileSync('src/data/SpainCoinsData.js', 'utf8');

const itemBlockRegex = /\{[^}]*id:\s*['"][^'"]+['"][^}]*\}/gs;
let match;
let missing = [];

while ((match = itemBlockRegex.exec(content)) !== null) {
    const block = match[0];
    if (!block.includes('id:')) continue;

    // Check if it's a real coin item (has value and label)
    if (!block.includes('value:') || !block.includes('label:')) continue;

    // Check for pricing properties
    if (!block.includes('prices:') && !block.includes('estimatedValue:') && !block.includes('price:')) {
        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
        if (idMatch) missing.push(idMatch[1]);
    }
}

console.log('Spanish coins truly missing price data:', missing);
