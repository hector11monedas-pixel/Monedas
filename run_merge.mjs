import fs from 'fs';

const newText = fs.readFileSync('temp_new.mjs', 'utf8');
const newLines = newText.split('\n');
const map = {};
let currentCountry = null;

for (const line of newLines) {
    const cMatch = line.match(/^\s*'([^']+)':/);
    if (cMatch) {
        currentCountry = cMatch[1];
        continue;
    }
    const coinMatch = line.match(/year:\s*(\d+),\s*subject:\s*['"]([^'"]+)['"](.*)/);
    if (coinMatch && currentCountry) {
        const year = parseInt(coinMatch[1]);
        const subject = coinMatch[2];
        const rest = coinMatch[3];

        let mintage, estimatedPrice, image;
        const mMatch = rest.match(/mintage:\s*(\d+)/);
        if (mMatch) mintage = parseInt(mMatch[1]);

        const eMatch = rest.match(/estimatedPrice:\s*['"]([^'"]+)['"]/);
        if (eMatch) estimatedPrice = eMatch[1];

        const iMatch = rest.match(/image:\s*['"]([^'"]+)['"]/);
        if (iMatch) image = iMatch[1];

        if (!map[currentCountry]) map[currentCountry] = [];
        map[currentCountry].push({ year, subject, mintage, estimatedPrice, image });
    }
}

const oldText = fs.readFileSync('temp_old.mjs', 'utf8');
let outputLines = [];
let lines = oldText.split('\n');

currentCountry = null;
let currentCoinStr = '';
let inCoin = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const countryMatch = line.match(/^\s*'([a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+)':\s*\[/);
    if (countryMatch) {
        currentCountry = countryMatch[1];
        outputLines.push(line);
        continue;
    }

    if (!currentCountry) {
        outputLines.push(line);
        continue;
    }

    if (line.match(/^};/)) {
        currentCountry = null;
        outputLines.push(line);
        continue;
    }

    const oneLiner = line.match(/^\s*\{\s*year:\s*(\d+),\s*subject:\s*'([^']+)'\s*(.*)\s*\},?/);
    if (oneLiner) {
        const year = parseInt(oneLiner[1]);
        const subject = oneLiner[2];

        const newCoin = (map[currentCountry] || []).find(c => c.year === year && c.subject === subject);
        if (newCoin) {
            let outParts = [];
            outParts.push(`year: ${year}`);
            outParts.push(`subject: '${subject}'`);
            if (newCoin.image) outParts.push(`image: '${newCoin.image}'`);
            if (newCoin.mintage) outParts.push(`mintage: ${newCoin.mintage}`);
            if (newCoin.estimatedPrice) outParts.push(`estimatedPrice: '${newCoin.estimatedPrice}'`);

            let comma = line.trim().endsWith(',') ? ',' : '';
            outputLines.push(`        { ${outParts.join(', ')} }${comma}`);
        } else {
            outputLines.push(line);
        }
        continue;
    }

    if (line.match(/^\s*\{\s*$/)) {
        inCoin = true;
        braceCount = 1;
        currentCoinStr = line + '\n';
        continue;
    }

    if (inCoin) {
        currentCoinStr += line + '\n';
        if (line.includes('{')) braceCount += (line.match(/\{/g) || []).length;
        if (line.includes('}')) braceCount -= (line.match(/\}/g) || []).length;

        if (braceCount === 0) {
            inCoin = false;
            const yearMatch = currentCoinStr.match(/year:\s*(\d+)/);
            let subjectMatch = currentCoinStr.match(/subject:\s*'([^']+)'/);
            if (!subjectMatch) subjectMatch = currentCoinStr.match(/subject:\s*"([^"]+)"/);

            if (yearMatch && subjectMatch) {
                const year = parseInt(yearMatch[1]);
                const subject = subjectMatch[1];
                const newCoin = (map[currentCountry] || []).find(c => c.year === year && c.subject === subject);

                let modifiedCoinStr = currentCoinStr;

                if (newCoin) {
                    if (newCoin.mintage) {
                        if (modifiedCoinStr.match(/mintage:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/mintage:\s*[\d]+/, `mintage: ${newCoin.mintage}`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\s*['"][^'"]+['"],?)/, `$1\n            mintage: ${newCoin.mintage},`);
                        }
                    }

                    if (newCoin.estimatedPrice) {
                        if (modifiedCoinStr.match(/estimatedPrice:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/estimatedPrice:\s*'[^']*'/, `estimatedPrice: '${newCoin.estimatedPrice}'`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\s*['"][^'"]+['"],?)/, `$1\n            estimatedPrice: '${newCoin.estimatedPrice}',`);
                        }
                    }

                    if (newCoin.image && !newCoin.image.includes('?v=')) {
                        if (modifiedCoinStr.match(/image:/)) {
                            modifiedCoinStr = modifiedCoinStr.replace(/image:\s*['"][^'"]*['"]|image:\s*null/, `image: '${newCoin.image}'`);
                        } else {
                            modifiedCoinStr = modifiedCoinStr.replace(/(subject:\s*['"][^'"]+['"],?)/, `$1\n            image: '${newCoin.image}',`);
                        }
                    }
                }

                outputLines.push(modifiedCoinStr.replace(/\n$/, ''));
            } else {
                outputLines.push(currentCoinStr.replace(/\n$/, ''));
            }
            continue;
        }
        continue;
    }

    outputLines.push(line);
}

let outStr = outputLines.join('\n');
outStr = outStr.replace(/'\/img\/coins\/2004\/sanmarino\.jpg'/, "'/img/coins/2004/san_marino.png'");
outStr = outStr.replace(/'\/img\/coins\/2004\/vatican\.jpg'/, "'/img/coins/2004/vatican.png'");

fs.writeFileSync('src/data/CommemorativeCatalog.js', outStr);
console.log('Merge complete! Found changes in ' + Object.keys(map).length + ' countries.');
