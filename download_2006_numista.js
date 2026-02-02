
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COINS = [
    { country: 'germany', id: 2667, name: 'Schleswig-Holstein' },
    { country: 'belgium', id: 2346, name: 'Atomium' },
    { country: 'finland', id: 2322, name: 'Suffrage' },
    { country: 'italy', id: 2257, name: 'Turin' },
    { country: 'luxembourg', id: 2494, name: 'Guillaume' },
    { country: 'san_marino', id: 2670, name: 'Columbus' },
    { country: 'vatican', id: 2668, name: 'Swiss Guard' }
];

const DOWNLOAD_DIR = path.join(__dirname, 'public', 'img', 'coins', '2006');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

const fetchPage = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, (res) => {
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
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, (res) => {
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

const probeAndDownload = async () => {
    console.log('Starting Numista probe for 2006 coins...');

    for (const coin of COINS) {
        const url = `https://en.numista.com/catalogue/pieces${coin.id}.html`;
        console.log(`Checking ${coin.country} (${url})...`);

        try {
            const html = await fetchPage(url);

            // Extract Image URL
            // Look for <meta property="og:image" content="...">
            const metaImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);

            if (metaImageMatch && metaImageMatch[1]) {
                const imageUrl = metaImageMatch[1];
                console.log(`Found image for ${coin.country}: ${imageUrl}`);

                const targetPath = path.join(DOWNLOAD_DIR, `${coin.country}.jpg`);
                await downloadImage(imageUrl, targetPath);
                console.log(`Saved to ${targetPath}`);
            } else {
                console.error(`Could not find image for ${coin.country}`);
            }

        } catch (error) {
            console.error(`Error processing ${coin.country}:`, error.message);
        }

        // Random delay to be polite
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
    }
};

probeAndDownload();
