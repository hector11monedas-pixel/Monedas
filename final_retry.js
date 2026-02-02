import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGETS = [
    {
        file: "luxembourg.png",
        candidates: [
            "2_€_commemorativo_Lussemburgo_2004.png", // The exact one found in search
            "€2_commemorative_coin_Luxembourg_2004.jpg",
            "2_euros_Luxembourg_2004.png"
        ]
    },
    {
        file: "italy.png",
        candidates: [
            "2_€_commemorativo_Italia_2004.png", // Matching the Lux pattern
            "2_euro_Italy_2004_World_Food_Programme.jpg",
            "2_euro_dedicated_to_50th_anniversary_of_WFP.png"
        ]
    }
];

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

function getWikimediaUrl(filename) {
    // 1. Replace spaces with underscores
    const safeName = filename.replace(/ /g, "_");

    // 2. MD5 of the UTF-8 bytes of safeName
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;

    // 3. Construct URL. IMPORTANT: encodeURIComponent acts on the filename for the URL part.
    // The hash is based on the *decoded* (but underscore-replaced) name.
    return `https://upload.wikimedia.org/wikipedia/commons/${pathPart}/${encodeURIComponent(safeName)}`;
}

// Special function for Italian Wikipedia (sometimes files are local there)
function getItWikiUrl(filename) {
    const safeName = filename.replace(/ /g, "_");
    const hash = crypto.createHash('md5').update(safeName).digest('hex');
    const pathPart = `${hash.substring(0, 1)}/${hash.substring(0, 2)}`;
    return `https://upload.wikimedia.org/wikipedia/it/${pathPart}/${encodeURIComponent(safeName)}`;
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
    console.log("Final attempt for missing coins...");
    for (const target of TARGETS) {
        const dest = path.join(BASE_DIR, target.file);
        let success = false;

        // Try Commons
        for (const candidate of target.candidates) {
            const url = getWikimediaUrl(candidate);
            console.log(`Trying Commons: ${candidate}...`);
            success = await download(url, dest);
            if (success) {
                console.log(`✅ GOT IT: ${target.file}`);
                break;
            }
        }

        // Try Italian Wiki (specifically for Italy/Lux pattern)
        if (!success) {
            for (const candidate of target.candidates) {
                const url = getItWikiUrl(candidate);
                console.log(`Trying IT Wiki: ${candidate}...`);
                success = await download(url, dest);
                if (success) {
                    console.log(`✅ GOT IT (IT Wiki): ${target.file}`);
                    break;
                }
            }
        }

        if (!success) console.log(`❌ STILL FAILED: ${target.file}`);
    }
})();
