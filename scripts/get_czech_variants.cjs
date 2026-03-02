const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(__dirname, 'src', 'assets', 'banknotes', 'cz_full');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'BanknoteCollectorApp/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

async function getWikiImageUrl(filename) {
    // Target COMMONS instead of English Wikipedia
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
    const data = await fetchJson(url);
    if (!data.query || !data.query.pages) return null;
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId === '-1') return null;
    return pages[pageId].imageinfo[0].url;
}

function downloadImage(url, dest) {
    try {
        console.log(`Downloading ${url} to ${dest}...`);
        execSync(`powershell -Command "Invoke-WebRequest -Uri '${url}' -OutFile '${dest}'"`);
        return true;
    } catch (e) {
        console.error(`Error downloading ${url}: ${e.message}`);
        return false;
    }
}

const banknoteJobs = [
    // 20 Kc (Retired)
    { id: '20_czk_1994_obv', candidates: ['20 Czech koruna Obverse.jpg', '20CZK obverse.jpg'] },
    // 50 Kc (Retired)
    { id: '50_czk_1993_obv', candidates: ['50 Czech koruna Obverse.jpg', '50CZK obverse.jpg'] },
    { id: '50_czk_1997_obv', candidates: ['50 cseh korona 1997.jpg', 'Billete de cincuenta coronas checas de 1997.jpg'] },
    // 100 Kc (Variants)
    { id: '100_czk_1993_obv', candidates: ['100 Czech koruna Obverse.jpg', '100CZK obverse.jpg'] },
    { id: '100_czk_2018_obv', candidates: ['100 Czech koruna Obverse.jpg'] }, // Usually redirect or same
    // 200 Kc
    { id: '200_czk_1993_obv', candidates: ['200 Czech koruna Obverse.jpg', '200CZK obverse.jpg'] },
    // 500 Kc
    { id: '500_czk_1993_obv', candidates: ['500 Czech koruna Obverse.jpg', '500CZK obverse.jpg'] },
    // 1000 Kc
    { id: '1000_czk_1993_obv', candidates: ['1000 Czech koruna Obverse.jpg', '1000CZK obverse.jpg'] },
    { id: '1000_czk_2023_obv', candidates: ['Bankovka 1000 Kč 2008 s přítiskem 2023, lícní strana.jpg', 'Výroční 1000Kč s Přítiskem.jpg'] },
    // 2000 Kc
    { id: '2000_czk_2007_obv', candidates: ['Bankovka 2000 Kč vzor 2007, lícní strana.jpg', '2000 Czech koruna Obverse.jpg'] },
    // 5000 Kc
    { id: '5000_czk_1999_obv', candidates: ['5 000 czk note 1999.jpg'] },
    { id: '5000_czk_2009_obv', candidates: ['5 000 czk note 2009.jpg', '5000 Czech koruna Obverse.jpg'] },
    // Commem
    { id: '100_czk_2019_obv', candidates: ['100 CZK obverse (2019).jpg', '100 CZK obverse 2019.jpg'] },
    { id: '100_czk_2019_rev', candidates: ['100 CZK reverse (2019).jpg', '100 CZK reverse 2019.jpg'] },
    { id: '100_czk_2022_obv', candidates: ['100 CZK obverse (2022).jpg'] },
    { id: '100_czk_2022_rev', candidates: ['100 CZK reverse (2022).jpg'] }
];

async function main() {
    console.log("Starting full Czech banknote acquisition...");
    for (const job of banknoteJobs) {
        let success = false;
        const dest = path.join(targetDir, `${job.id}.jpg`);
        if (fs.existsSync(dest)) {
            console.log(`Skipping already existing: ${job.id}`);
            continue;
        }
        for (const candidate of job.candidates) {
            const url = await getWikiImageUrl(candidate);
            if (url) {
                if (downloadImage(url, dest)) {
                    success = true;
                    break;
                }
            } else {
                console.log(`Candidate not found on Wiki: ${candidate}`);
            }
        }
        if (!success) {
            console.log(`Failed to acquire image for: ${job.id}`);
        }
    }
    console.log("Finished acquisition job.");
}

main();
