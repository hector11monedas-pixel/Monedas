
import https from 'https';
import fs from 'fs';
import path from 'path';

// Wikimedia Commons URLs (Stable, high-res, public domain/CC)
const images = [
    { name: 'austria.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/2_euro_coin_Au_2005_State_Treaty.jpg' },
    { name: 'belgium.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/2_euro_coin_Be_2005.jpg' },
    { name: 'finland.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/2_euro_coin_Fi_2005.jpg' },
    { name: 'italy.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/2_euro_coin_It_2005_Constitution.jpg' },
    { name: 'luxembourg.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/2_euro_coin_Lu_2005_Henri_Adolphe.jpg' },
    { name: 'san_marino.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2_euro_coin_Sm_2005_Physics.jpg' },
    { name: 'spain.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/2_euro_coin_Es_2005.jpg' },
    { name: 'vatican.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/2_euro_coin_Va_2005.jpg' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded ${filepath}`);
                        resolve();
                    });
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
            } else {
                file.close();
                fs.unlink(filepath, () => { });
                reject(`Failed to download ${url}: Status Code ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err.message);
        });
    });
};

const downloadAll = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Clean existing 0 byte files first
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (fs.statSync(path.join(dir, file)).size === 0) {
            fs.unlinkSync(path.join(dir, file));
        }
    }

    for (const image of images) {
        try {
            await downloadImage(image.url, path.join(dir, image.name));
        } catch (error) {
            console.error(error);
        }
    }
};

downloadAll();
