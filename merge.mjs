import fs from 'fs';

// 1. First, we need to extract the new coin data from the user's file.
// We'll read the file and dynamically parse it by appending an export.
const newFileText = fs.readFileSync('temp_new.mjs', 'utf8');
const oldFileText = fs.readFileSync('temp_old.mjs', 'utf8');

fs.writeFileSync('temp_new_export.mjs', newFileText + '\nexport { COUNTRY_CATALOGS };\n');
fs.writeFileSync('temp_old_export.mjs', oldFileText + '\nexport { COUNTRY_CATALOGS };\n');

// We'll run a secondary script that imports them to get the objects.
const runnerContent = `
import fs from 'fs';
import { COUNTRY_CATALOGS as newCat } from './temp_new_export.mjs';

const oldText = fs.readFileSync('temp_old.mjs', 'utf8');
let outputLines = [];
let lines = oldText.split('\\n');

let currentCountry = null;
let currentCoinStr = '';
let inCoin = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect country keys like 'Alemania': [
    const countryMatch = line.match(/^\\s*'([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+)':\\s*\\[/);
    if (countryMatch) {
        currentCountry = countryMatch[1];
        outputLines.push(line);
        continue;
    }

    if (!currentCountry) {
        outputLines.push(line);
        continue;
    }

    // Stop at the end of COUNTRY_CATALOGS
    if (line.match(/^};/)) {
        currentCountry = null;
        outputLines.push(line);
        continue;
    }

    // Inside a country array, look for coin objects.
    // Coins can be 1-liners: { year: 2010, subject: '...' },
    // Or multi-liners: { \\n ... \\n },
    
    // Detect 1-liner
    const oneLiner = line.match(/^\\s*\\{\\s*year:\\s*(\\d+),\\s*subject:\\s*'([^']+)'\\s*(.*)\\s*\\},?/);
    if (oneLiner) {
        const year = parseInt(oneLiner[1]);
        const subject = oneLiner[2];
        const rest = oneLiner[3];
        
        // Find in newCat
        const newCoin = (newCat[currentCountry] || []).find(c => c.year === year && c.subject === subject);
        if (newCoin) {
            let outParts = [];
            outParts.push(\`year: \${year}\`);
            outParts.push(\`subject: '\${subject}'\`);
            if (newCoin.image) outParts.push(\`image: '\${newCoin.image}'\`);
            if (newCoin.date) outParts.push(\`date: '\${newCoin.date}'\`);
            if (newCoin.mintage) outParts.push(\`mintage: \${newCoin.mintage}\`);
            if (newCoin.estimatedPrice) outParts.push(\`estimatedPrice: '\${newCoin.estimatedPrice}'\`);
            
            // Keep old properties if any (highly unlikely in 1-liner to have ones that conflict negatively)
            
            let comma = line.trim().endsWith(',') ? ',' : '';
            outputLines.push(\`        { \${outParts.join(', ')} }\${comma}\`);
        } else {
            outputLines.push(line);
        }
        continue;
    }
    
    // Detect start of multi-liner
    if (line.match(/^\\s*\\{\\s*$/)) {
        inCoin = true;
        braceCount = 1;
        currentCoinStr = line + '\\n';
        continue;
    }
    
    if (inCoin) {
        currentCoinStr += line + '\\n';
        if (line.includes('{')) braceCount += (line.match(/\\{/g) || []).length;
        if (line.includes('}')) braceCount -= (line.match(/\\}/g) || []).length;
        
        if (braceCount === 0) {
            inCoin = false;
            // Parse currentCoinStr to extract year and subject using simple regex
            const yearMatch = currentCoinStr.match(/year:\\s*(\\d+)/);
            const subjectMatch = currentCoinStr.match(/subject:\\s*'([^']+)'/);
            
            if (yearMatch && subjectMatch) {
                const year = parseInt(yearMatch[1]);
                const subject = subjectMatch[2];
                const newCoin = (newCat[currentCountry] || []).find(c => c.year === year && c.subject === subject);
                
                let modifiedCoinStr = currentCoinStr;
                
                if (newCoin) {
                    // Update mintage
                    if (newCoin.mintage) {
                        if (modifiedCoinStr.match(/mintage:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/mintage:\\s*[\\d]+/, \`mintage: \${newCoin.mintage}\`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\\s*'[^']+',?)/, \`$1\\n            mintage: \${newCoin.mintage},\`);
                        }
                    }
                    
                    // Update estimatedPrice
                    if (newCoin.estimatedPrice) {
                        if (modifiedCoinStr.match(/estimatedPrice:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/estimatedPrice:\\s*'[^']*'/, \`estimatedPrice: '\${newCoin.estimatedPrice}'\`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\\s*'[^']+',?)/, \`$1\\n            estimatedPrice: '\${newCoin.estimatedPrice}',\`);
                        }
                    }

                    // Update image
                    if (newCoin.image && !newCoin.image.includes('?v=')) { // Prefer plain image
                        if (modifiedCoinStr.match(/image:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/image:\\s*['"][^'"]*['"]|image:\\s*null/, \`image: '\${newCoin.image}'\`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\\s*'[^']+',?)/, \`$1\\n            image: '\${newCoin.image}',\`);
                        }
                    }
                }
                
                // Add without a trailing newline because the split adds it back
                outputLines.push(modifiedCoinStr.replace(/\\n$/, ''));
            } else {
                outputLines.push(currentCoinStr.replace(/\\n$/, ''));
            }
            continue;
        }
        continue;
    }
    
    // Default fallback
    outputLines.push(line);
}

fs.writeFileSync('src/data/CommemorativeCatalog.js', outputLines.join('\\n'));
console.log('Merge complete!');
`;
fs.writeFileSync('run_merge.mjs', runnerContent);
