import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGETS = [
    {
        file: "italy.png",
        candidates: [
            "2_euro_dedicated_to_50th_anniversary_of_WFP.png",
            "2_euro_Italy_2004_WFP.jpg",
            "2_euro_Italy_2004.jpg",
            "2_euro_commemorative_Italy_2004.png",
            "Commemorative_coin_Italy_2004.jpg"
        ]
    },
    {
        file: "luxembourg.png",
        candidates: [
            "2_euros_Luxembourg_2004.png",
            "2_euro_Luxembourg_2004.jpg",
            "2004_Luxembourg_2_euro_commemorative_coin.jpg",
            "2_euro_Luxembourg_2004_Monogram.jpg"
        ]
    }
];

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

function getWikimediaUrl(filename) {
    const safeName = filename.replace(/ /g, "_");
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;
    return `https://upload.wikimedia.org/wikipedia/commons/${pathPart}/${encodeURIComponent(safeName)}`;
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
                resolve(false);
            }
        }).on('error', () => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

(async () => {
    console.log("Retrying missing coins...");
    for (const target of TARGETS) {
        const dest = path.join(BASE_DIR, target.file);
        let success = false;

        for (const candidate of target.candidates) {
            const url = getWikimediaUrl(candidate);
            console.log(`Trying ${candidate}...`);
            success = await download(url, dest);
            if (success) {
                console.log(`✅ GOT IT: ${target.file} (from ${candidate})`);
                break;
            }
        }
        if (!success) console.log(`❌ STILL FAILED: ${target.file}`);
    }
})();
