
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOWNLOAD_DIR = path.join(__dirname, 'public', 'img', 'coins', '2006');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

// URLs selected from search results (Numista and other high ranking reliable appearing sources)
const COIN_URLS = [
    { name: 'germany', url: 'https://en.numista.com/catalogue/photos/allemagne/528-original.jpg' },
    { name: 'belgium', url: 'https://en.numista.com/catalogue/photos/belgique/704-original.jpg' },
    { name: 'finland', url: 'https://en.numista.com/catalogue/photos/finlande/384-original.jpg' },
    { name: 'italy', url: 'https://en.numista.com/catalogue/photos/italie/994-original.jpg' },
    { name: 'luxembourg', url: 'https://en.numista.com/catalogue/photos/luxembourg/456-original.jpg' },
    { name: 'san_marino', url: 'https://en.numista.com/catalogue/photos/saint-marin/579-original.jpg' },
    { name: 'vatican', url: 'https://en.numista.com/catalogue/photos/vatican/463-original.jpg' }
];

// Fallback URLs (eBay/etc) if Numista blocks "original.jpg" direct access often works better than HTML scraping
// But if they fail, we might need a browser agent. Let's try direct first.

const downloadImage = (name, url) => {
    const finalPath = path.join(DOWNLOAD_DIR, `${name}.jpg`);
    console.log(`Downloading ${name} from ${url}...`);

    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://en.numista.com/'
            }
        }, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(finalPath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Success: ${name}`);
                    resolve(true);
                });
            } else {
                console.error(`Failed: ${url} (Status: ${res.statusCode})`);
                resolve(false);
            }
        }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            resolve(false);
        });
    });
};

const run = async () => {
    for (const coin of COIN_URLS) {
        await downloadImage(coin.name, coin.url);
        // Polite delay
        await new Promise(r => setTimeout(r, 1500));
    }
};

run();
