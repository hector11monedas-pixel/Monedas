
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.ecb.europa.eu/euro/coins/comm/images/';
const DOWNLOAD_DIR = path.join(__dirname, 'public', 'img', 'coins', '2006');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

const COINS = [
    { code: 'de', name: 'germany' },
    { code: 'be', name: 'belgium' },
    { code: 'fi', name: 'finland' },
    { code: 'it', name: 'italy' },
    { code: 'lu', name: 'luxembourg' },
    { code: 'sm', name: 'san_marino' },
    { code: 'va', name: 'vatican' }
];

const downloadImage = (code, filename) => {
    const url = `${BASE_URL}comm_2006_${code}.jpg`;
    const finalPath = path.join(DOWNLOAD_DIR, `${filename}.jpg`);

    console.log(`Downloading ${url} -> ${filename}.jpg`);

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(finalPath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Success: ${filename}`);
                    resolve(true);
                });
            } else {
                console.error(`Failed: ${url} (Status: ${res.statusCode})`);
                // Try .gif ?
                const urlGif = `${BASE_URL}comm_2006_${code}.gif`;
                console.log(`Trying GIF: ${urlGif}`);
                https.get(urlGif, (resGif) => {
                    if (resGif.statusCode === 200) {
                        const fileGif = fs.createWriteStream(finalPath); // Save as .jpg extension even if gif for simplicity? No, confusing.
                        const finalPathGif = path.join(DOWNLOAD_DIR, `${filename}.gif`);
                        resGif.pipe(fileGif);
                        fileGif.on('finish', () => {
                            fileGif.close();
                            console.log(`Success (GIF): ${filename}`);
                            resolve(true);
                        });
                    } else {
                        console.error(`Failed GIF: ${urlGif}`);
                        resolve(false);
                    }
                }).on('error', resolve);
            }
        }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            resolve(false);
        });
    });
};

const run = async () => {
    for (const coin of COINS) {
        await downloadImage(coin.code, coin.name);
    }
};

run();
