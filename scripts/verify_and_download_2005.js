
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

// Probable IDs based on standard sequence and search
const COINS = [
    { country: 'austria', id: 2208, titleKeywords: ['Austria', 'State', 'Treaty'] }, // piece 2208
    { country: 'belgium', id: 2343, titleKeywords: ['Belgium', 'Economic'] },
    { country: 'spain', id: 2290, titleKeywords: ['Spain', 'Quixote'] },
    { country: 'finland', id: 2320, titleKeywords: ['Finland', 'UN'] },
    { country: 'italy', id: 2245, titleKeywords: ['Italy', 'Constitution'] },
    { country: 'luxembourg', id: 2492, titleKeywords: ['Luxembourg', 'Adolphe'] },
    { country: 'san_marino', id: 2665, titleKeywords: ['San Marino', 'Physics'] },
    { country: 'vatican', id: 2664, titleKeywords: ['Vatican', 'Youth'] }
];

const fetchPage = (url) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.google.com/'
            }
        };

        https.get(url, options, (res) => {
            if (res.statusCode !== 200) {
                // consume response to free memory
                res.resume();
                reject(new Error(`Failed to fetch page: ${res.statusCode}`));
                return;
            }

            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        }, (res) => {
            if (res.statusCode !== 200) {
                res.resume();
                reject(new Error(`Image download failed: ${res.statusCode}`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

const run = async () => {
    console.log('Starting 2005 Probe...');

    for (const coin of COINS) {
        const url = `https://en.numista.com/catalogue/pieces${coin.id}.html`;
        console.log(`Checking ${coin.country} (${url})...`);

        try {
            const html = await fetchPage(url);

            // 1. Verify Page Title
            const titleMatch = html.match(/<title>(.*?)<\/title>/);
            if (!titleMatch) {
                console.log(`  - Warning: No title found.`);
            } else {
                console.log(`  - Title: ${titleMatch[1]}`);
                // Basic verification
                const relevant = coin.titleKeywords.some(kw => titleMatch[1].includes(kw));
                if (!relevant) console.log(`  ! Warning: Title might not match ${coin.country}`);
            }

            // 2. Extract Image URL (og:image)
            const metaImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);

            if (metaImageMatch && metaImageMatch[1]) {
                const imageUrl = metaImageMatch[1];
                console.log(`  - Found image: ${imageUrl}`);

                // If the URL is relative or not full? Numista og:image is usually full.
                // It usually looks like https://en.numista.com/catalogue/photos/country/xxx-original.jpg

                const targetPath = path.join(DOWNLOAD_DIR, `${coin.country}.jpg`);
                await downloadImage(imageUrl, targetPath);
                console.log(`  -> Saved to ${targetPath}`);
            } else {
                console.error(`  - No image found for ${coin.country}`);
            }

        } catch (error) {
            console.error(`  - Error: ${error.message}`);
        }

        // Delay
        await new Promise(r => setTimeout(r, 2000));
    }
};

run();
