import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Exact filenames map. I need the original Wiki filename to construct the thumb URL.
const COINS = [
    { local: "finland.png", wiki: "Moeda_comemorativa_2_euros_2004,_Finlândia.png", source: "commons" },
    { local: "greece.jpg", wiki: "Moeda_Comemorativa_2_euros_2004,_Grécia.jpg", source: "commons" },
    { local: "san_marino.png", wiki: "Moeda_comemorativa_2_euros_2004,_San_Marino.png", source: "commons" },
    { local: "vatican.png", wiki: "Moeda_comemorativa_2_euros_2004,_Vaticano.png", source: "commons" },
    { local: "luxembourg.png", wiki: "2_€_commemorativo_Lussemburgo_2004.png", source: "it" }, // Was found on IT wiki
    { local: "italy.png", wiki: "2_€_commemorativo_Italia_2004.png", source: "it" }        // Was found on IT wiki
];

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

function getThumbUrl(filename, source, width = 320) {
    const safeName = filename.replace(/ /g, "_");
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;

    // The thumbnail filename usually appends the width, sometimes preserving extension, sometimes converting to png.
    // Standard pattern: /thumb/A/AB/Name.ext/WIDTHpx-Name.ext
    // Sometimes .svg renders to .png, but here we have png/jpg.

    // Valid encoded name for the path
    const encodedName = encodeURIComponent(safeName);

    // For the thumbnail suffix, it is usually NOT fully encoded? Or is it? 
    // Wikimedia is tricky. Usually "320px-Name.ext".
    // Let's try raw safeName for the suffix part first.

    const domain = source === 'it' ? 'wikipedia/it' : 'wikipedia/commons';

    return `https://upload.wikimedia.org/${domain}/thumb/${pathPart}/${encodedName}/${width}px-${encodedName}`;
}

async function download(url, dest) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        };
        https.get(url, options, (res) => {
            if (res.statusCode === 200) {
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(true); });
            } else {
                file.close();
                fs.unlink(dest, () => { });
                console.log(`HTTP ${res.statusCode} for ${url}`);
                resolve(false);
            }
        }).on('error', () => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

(async () => {
    console.log("Optimizing images (Downloading 320px thumbnails)...");

    for (const coin of COINS) {
        const dest = path.join(BASE_DIR, coin.local);
        const url = getThumbUrl(coin.wiki, coin.source, 320);

        console.log(`Downloading optimized ${coin.local}...`);
        const success = await download(url, dest);

        if (success) {
            console.log(`✅ Optimized: ${coin.local}`);
        } else {
            console.log(`❌ Failed to optimize: ${coin.local}`);
            // Retry with slightly different suffix logic if needed?
            // Some files might be jpg/png.
        }
    }
})();
