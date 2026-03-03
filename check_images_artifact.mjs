import fs from 'fs';
import path from 'path';

// Read the catalog file
const catalogPath = path.join(process.cwd(), 'src', 'data', 'CommemorativeCatalog.js');
let code = fs.readFileSync(catalogPath, 'utf8');

// Strip exports so we can evaluate it
code = code.replace(/export const/g, 'const');
code = code.replace(/export default/g, '// export default');
code = code.replace(/export \{/g, '// export {');

code += `
const missing = [];
const publicDir = path.join(process.cwd(), 'public');

Object.keys(COUNTRY_CATALOGS).forEach(country => {
    let countryMissing = [];
    const coins = COUNTRY_CATALOGS[country];
    coins.forEach(coin => {
        if (coin.year >= 2016) {
            if (!coin.image) {
                countryMissing.push(\`- \${coin.year}: \${coin.subject}\`);
            } else {
                const imagePath = path.join(publicDir, coin.image.split('?')[0]);
                if (!fs.existsSync(imagePath)) {
                    countryMissing.push(\`- \${coin.year}: \${coin.subject} (File missing: \${coin.image})\`);
                }
            }
        }
    });
    if (countryMissing.length > 0) {
        missing.push(\`### \${country}\\n\` + countryMissing.join('\\n'));
    }
});

const artifactPath = 'C:\\\\Users\\\\hecto\\\\.gemini\\\\antigravity\\\\brain\\\\4c3b4f53-54cc-4208-8c28-150e6c6e95e1\\\\missing_images_2016_plus.md';
const content = '# Monedas Conmemorativas sin Foto (2016+)\\n\\n' + missing.join('\\n\\n');

fs.writeFileSync(artifactPath, content, 'utf8');
console.log('Artifact saved.');
`;

try {
    eval(code);
} catch (e) {
    console.error(e);
}
