import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Hardcoded paths to bypass hash/encoding issues and ensure 429 is the only matching factor
const COINS = [
    {
        local: "finland.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Moeda_comemorativa_2_euros_2004%2C_Finl%C3%A2ndia.png/320px-Moeda_comemorativa_2_euros_2004%2C_Finl%C3%A2ndia.png"
    },
    {
        local: "greece.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Moeda_Comemorativa_2_euros_2004%2C_Gr%C3%A9cia.jpg/320px-Moeda_Comemorativa_2_euros_2004%2C_Gr%C3%A9cia.jpg"
    },
    {
        local: "san_marino.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moeda_comemorativa_2_euros_2004%2C_San_Marino.png/320px-Moeda_comemorativa_2_euros_2004%2C_San_Marino.png"
    },
    {
        local: "vatican.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Moeda_comemorativa_2_euros_2004%2C_Vaticano.png/320px-Moeda_comemorativa_2_euros_2004%2C_Vaticano.png"
    },
    // For IT/Lux, the hashes observed in the 429 log were c/c2 and c/c0. Let's trust them.
    {
        local: "luxembourg.png",
        url: "https://upload.wikimedia.org/wikipedia/it/thumb/c/c2/2_%E2%82%AC_commemorativo_Lussemburgo_2004.png/320px-2_%E2%82%AC_commemorativo_Lussemburgo_2004.png"
    },
    {
        local: "italy.png",
        url: "https://upload.wikimedia.org/wikipedia/it/thumb/c/c0/2_%E2%82%AC_commemorativo_Italia_2004.png/320px-2_%E2%82%AC_commemorativo_Italia_2004.png"
    }
];

const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

async function download(url, dest) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Tool/1.0" }
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

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    console.log("Starting slow optimized download...");

    for (const coin of COINS) {
        const dest = path.join(BASE_DIR, coin.local);

        console.log(`Downloading thumbnail for ${coin.local}...`);
        const success = await download(coin.url, dest);

        if (success) {
            console.log(`✅ Success: ${coin.local} (Optimized)`);
        } else {
            console.log(`❌ Failed: ${coin.local}`);
        }

        console.log("Waiting 3s...");
        await wait(3000);
    }
})();
