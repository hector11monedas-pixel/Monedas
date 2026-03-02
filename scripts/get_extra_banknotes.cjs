const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');

const OUTPUT_DIR = path.join(__dirname, 'src', 'assets', 'banknotes', 'cz');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const https = require('https');

// Helper to fetch JSON from API
function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Helper to get real Image URL via API
async function getWikiImageUrl(filename) {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
    console.log(`Querying API for: ${filename}`);
    try {
        const data = await fetchJson(apiUrl);
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId === '-1') {
            console.log(`Page not found for: ${filename}`);
            return null;
        }
        return pages[pageId].imageinfo[0].url;
    } catch (e) {
        console.error(`API Error for ${filename}:`, e.message);
        return null;
    }
}

// List of potential filenames to try (Priority order)
const imagesToFind = [
    // 20 CZK
    {
        id: '20_czk_obverse',
        candidates: ['20_CZK_obverse.jpg', '20_Czech_koruna_Obverse.jpg', '20_CZK_Av.jpg']
    },
    {
        id: '20_czk_reverse',
        candidates: ['20_CZK_reverse.jpg', '20_Czech_koruna_Reverse.jpg', '20_CZK_Rv.jpg']
    },
    // 50 CZK (Prioritize alternate names if primary failed)
    {
        id: '50_czk_obverse',
        candidates: ['50_Czech_koruna_Obverse.jpg', '50CZK_obverse.jpg', '50_CZK_obverse.jpg']
    },
    {
        id: '50_czk_reverse',
        candidates: ['50_Czech_koruna_Reverse.jpg', '50CZK_reverse.jpg', '50_CZK_reverse.jpg']
    },
    // 100 CZK Commemorative 2019
    {
        id: '100_czk_2019_obverse',
        candidates: ['100_CZK_obverse_(with_additional_print_2019).jpg', '100_CZK_obverse_2019.jpg']
    },
    {
        id: '100_czk_2019_reverse',
        candidates: ['100_CZK_reverse_(with_additional_print_2019).jpg', '100_CZK_reverse.jpg'] // Fallback to standard
    }
];

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const command = `powershell -Command "Invoke-WebRequest -Uri '${url}' -OutFile '${filepath}' -UserAgent 'Mozilla/5.0'"`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`Failed to download ${url}: ${error.message}`);
                resolve(false);
            } else {
                console.log(`Downloaded: ${filepath}`);
                resolve(true);
            }
        });
    });
}

async function main() {
    console.log('Starting download of extra banknotes...');

    for (const item of imagesToFind) {
        const filepath = path.join(OUTPUT_DIR, `${item.id}.jpg`);
        if (fs.existsSync(filepath)) {
            console.log(`File already exists: ${filepath}`);
            continue;
        }

        let foundUrl = null;
        for (const candidate of item.candidates) {
            foundUrl = await getWikiImageUrl(candidate);
            if (foundUrl) break;
        }

        if (foundUrl) {
            console.log(`Found URL: ${foundUrl}`);
            await downloadImage(foundUrl, filepath);
        } else {
            console.log(`Could not find image for ${item.id}`);
        }
    }
}

main();
