import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Exact filenames map with Source
const COINS = [
    { local: "finland.png", wiki: "Moeda_comemorativa_2_euros_2004,_Finlândia.png", source: "commons" },
    { local: "greece.jpg", wiki: "Moeda_Comemorativa_2_euros_2004,_Grécia.jpg", source: "commons" },
    { local: "san_marino.png", wiki: "Moeda_comemorativa_2_euros_2004,_San_Marino.png", source: "commons" },
    { local: "vatican.png", wiki: "Moeda_comemorativa_2_euros_2004,_Vaticano.png", source: "commons" },
    { local: "luxembourg.png", wiki: "2_€_commemorativo_Lussemburgo_2004.png", source: "it" },
    { local: "italy.png", wiki: "2_€_commemorativo_Italia_2004.png", source: "it" }
];

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

function getPublicUrl(filename, source) {
    const safeName = filename.replace(/ /g, "_");
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;
    const domain = source === 'it' ? 'wikipedia/it' : 'wikipedia/commons';
    // Remove https protocol for wsrv.nl usage (it often prefers the naked domain or url param without protocol if passed in query string? 
    // Actually wsrv.nl docs say `?url=https://...` is fine.
    // However, wsrv.nl strips protocols sometimes. Best to use just the domain part: `upload.wikimedia.org/...`
    return `ssl:upload.wikimedia.org/${domain}/${pathPart}/${encodeURIComponent(safeName)}`;
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
    console.log("Optimizing images via weserv.nl proxy...");

    for (const coin of COINS) {
        const dest = path.join(BASE_DIR, coin.local);
        const sourceUrl = getPublicUrl(coin.wiki, coin.source);

        // Use wsrv.nl to resize to w=320, output=png (for consistency) or webp? Let's stick to png/jpg as per filename.
        // Actually, if we save as .png but content is .webp, browsers are fine. Let's force output=png/jpg matching filename.
        // But simply w=320 is enough.
        // Note: wsrv.nl syntax: https://wsrv.nl/?url=...&w=320

        const proxyUrl = `https://wsrv.nl/?url=${sourceUrl}&w=320`;

        console.log(`Downloading optimized ${coin.local}...`);
        const success = await download(proxyUrl, dest);

        if (success) {
            console.log(`✅ Optimized: ${coin.local}`);
        } else {
            console.log(`❌ Failed to optimize: ${coin.local}`);
        }
    }
})();
