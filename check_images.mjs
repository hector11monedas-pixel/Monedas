import fs from 'fs';
import path from 'path';

// Read the catalog file
const catalogPath = path.join(process.cwd(), 'src', 'data', 'CommemorativeCatalog.js');
let code = fs.readFileSync(catalogPath, 'utf8');

// Strip exports so we can evaluate it
code = code.replace(/export const/g, 'const');
code = code.replace(/export default/g, '// export default');
code = code.replace(/export \{/g, '// export {');

// Append evaluation logic
code += `
const missing = [];
const publicDir = path.join(process.cwd(), 'public');

Object.keys(COUNTRY_CATALOGS).forEach(country => {
    const coins = COUNTRY_CATALOGS[country];
    coins.forEach(coin => {
        if (coin.year >= 2016) {
            if (!coin.image) {
                missing.push(\`\${country} \${coin.year}: \${coin.subject} (No image property)\`);
            } else {
                // Check if file exists
                const imagePath = path.join(publicDir, coin.image.split('?')[0]);
                if (!fs.existsSync(imagePath)) {
                    missing.push(\`\${country} \${coin.year}: \${coin.subject} (File not found: \${coin.image})\`);
                }
            }
        }
    });
});

console.log(missing.join('\\n'));
`;

try {
    eval(code);
} catch (e) {
    console.error(e);
}
