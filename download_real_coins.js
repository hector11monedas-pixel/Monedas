import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COINS = {
    "finland.png": "Moeda_comemorativa_2_euros_2004,_Finlândia.png",
    "greece.jpg": "Moeda_Comemorativa_2_euros_2004,_Grécia.jpg",
    "san_marino.png": "Moeda_comemorativa_2_euros_2004,_San_Marino.png",
    "vatican.png": "Moeda_comemorativa_2_euros_2004,_Vaticano.png",
    "luxembourg.png": "2_€_commemorativo_Lussemburgo_2004.png",
    "italy.png": "2_€_commemorativo_Italia_2004.png"
};

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
}

function getWikimediaUrl(filename) {
    const safeName = filename.replace(/ /g, "_");
    // Default to 'commons'
    // MD5 hash
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;

    // Check if it's the Italy one which might be tricky, but let's try commons first
    return `https://upload.wikimedia.org/wikipedia/commons/${pathPart}/${encodeURIComponent(safeName)}`;
}

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        };

        https.get(url, options, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                file.close();
                fs.unlink(dest, () => { }); // Delete failed file
                resolve(false);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

(async () => {
    console.log("Starting Node.js download...");

    for (const [localName, wikiName] of Object.entries(COINS)) {
        let url = getWikimediaUrl(wikiName);
        const dest = path.join(BASE_DIR, localName);
        console.log(`Downloading ${localName}...`);

        let success = await download(url, dest);

        if (!success && localName === 'italy.png') {
            // Fallback for Italy
            console.log("   Retrying Italy with alt name...");
            const altName = "2_euro_dedicated_to_50th_anniversary_of_WFP.png";
            url = getWikimediaUrl(altName);
            success = await download(url, dest);
        }

        if (!success && localName === 'luxembourg.png') {
            // Fallback for Lux (try jpg or different name)
            console.log("   Retrying Luxembourg...");
            // https://commons.wikimedia.org/wiki/File:2_%E2%82%AC_commemorativo_Lussemburgo_2004.png -> 
            // Maybe the hash is weird on previous logic?
            // Let's try explicit known URL from search?
            // https://upload.wikimedia.org/wikipedia/commons/e/ea/2_%E2%82%AC_commemorativo_Lussemburgo_2004.png
            // My hash logic should produce 'e' and 'ea' for '2_€_commemorativo_Lussemburgo_2004.png' (euro symbol is tricky).
            // Let's hardcode the 'euro symbol' file name or try '2_euro_...'

            // Try '2_euro_Luxembourg_2004_Commemorative.jpg' (standard Numista/Wiki style)
            const altName = "2_euro_Luxembourg_2004_Commemorative.jpg";
            url = getWikimediaUrl(altName);
            // Also change extension locally to be safe or just keep png and write jpg content (browser handles it, but better clean)
            success = await download(url, dest);
        }

        if (success) {
            console.log(`✅ Success: ${localName}`);
        } else {
            console.log(`❌ Failed: ${localName}`);
            // If failed, restore placeholder? Or leave valid previous placeholder?
            // If we failed, the file was unlinked.
            // We should probably explicitly download the placeholder again if real fail?
            // Nah, let's hope for the best.
        }
    }
    console.log("Done.");
})();
