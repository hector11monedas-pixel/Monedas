
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOWNLOAD_DIR = path.join(__dirname, 'public', 'img', 'coins', '2005');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

const ECB_BASE_URL = 'https://www.ecb.europa.eu/euro/coins/comm/html/';
const ECB_PAGE_URL = 'https://www.ecb.europa.eu/euro/coins/comm/html/comm_2005.en.html';
const IMG_BASE_URL = 'https://www.ecb.europa.eu/euro/coins/comm'; // usually relative to ../img/

// Mapping from part of filename to our standard name
const KEYWORD_MAP = {
    'austria': 'austria',
    'at': 'austria',
    'belgium': 'belgium',
    'be': 'belgium',
    'spain': 'spain',
    'es': 'spain',
    'finland': 'finland',
    'fi': 'finland',
    'italy': 'italy',
    'it': 'italy',
    'luxembourg': 'luxembourg',
    'lu': 'luxembourg',
    'san': 'san_marino',
    'sm': 'san_marino',
    'vatican': 'vatican',
    'va': 'vatican',
    'vat': 'vatican'
};

const fetchPage = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const downloadImage = (url, name) => {
    const finalPath = path.join(DOWNLOAD_DIR, `${name}.jpg`);
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(finalPath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Saved: ${name}.jpg`);
                    resolve();
                });
            } else {
                console.log(`Failed to download ${url}: ${res.statusCode}`);
                resolve();
            }
        }).on('error', reject);
    });
};

const run = async () => {
    console.log('Fetching ECB 2005 stats...');
    try {
        const html = await fetchPage(ECB_PAGE_URL);

        // Regex to find images, typically src="../img/comm_2005_xyz.jpg" or "comm_2005_xyz.gif"
        const regex = /src="([^"]*comm_2005[^"]*)"/g;
        let match;
        const found = [];

        while ((match = regex.exec(html)) !== null) {
            found.push(match[1]);
        }

        console.log(`Found ${found.length} potential images.`);

        for (const relativeSrc of found) {
            // resolve relative path. usually starts with ../img/
            // Page is at .../html/comm_2005.en.html
            // src="../img/..." means .../euro/coins/comm/img/...

            // simple hack: check if it has 'img/' and construct absolute
            let absUrl = '';
            if (relativeSrc.startsWith('../')) {
                absUrl = 'https://www.ecb.europa.eu/euro/coins/comm/' + relativeSrc.replace('../', '');
            } else {
                absUrl = new URL(relativeSrc, ECB_PAGE_URL).href;
            }

            console.log(`Processing: ${absUrl}`);

            // Determine country name from filename
            const filename = absUrl.split('/').pop().toLowerCase();
            let standardName = null;

            for (const [key, val] of Object.entries(KEYWORD_MAP)) {
                if (filename.includes(key)) {
                    standardName = val;
                    // Special case for san marino vs spain if overlapping (san vs spain - no overlap)
                    // luxembourg vs ... ok
                    break;
                }
            }

            if (standardName) {
                // Check if it's the "high res" or "big" version if duplicates exist?
                // ECB usually has just one.
                await downloadImage(absUrl, standardName);
            } else {
                console.log(`  Skipping (unknown country): ${filename}`);
            }
        }

    } catch (e) {
        console.error(e);
    }
};

run();
