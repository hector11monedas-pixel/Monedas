
import https from 'https';
import fs from 'fs';
import path from 'path';

// Valid image URLs sourced from Numista/Wikipedia/ECB for 2005 coins
const images = [
    { name: 'austria.jpg', url: 'https://en.numista.com/catalogue/photos/autriche/312-original.jpg' }, // State Treaty
    { name: 'belgium.jpg', url: 'https://en.numista.com/catalogue/photos/belgique/472-original.jpg' }, // Economic Union
    { name: 'finland.jpg', url: 'https://en.numista.com/catalogue/photos/finlande/288-original.jpg' }, // UN
    { name: 'italy.jpg', url: 'https://en.numista.com/catalogue/photos/italie/308-original.jpg' }, // Constitution
    { name: 'luxembourg.jpg', url: 'https://en.numista.com/catalogue/photos/luxembourg/360-original.jpg' }, // Adolphe
    { name: 'san_marino.jpg', url: 'https://en.numista.com/catalogue/photos/saint-marin/298-original.jpg' }, // Physics
    { name: 'spain.jpg', url: 'https://en.numista.com/catalogue/photos/espagne/175-original.jpg' }, // Quixote
    { name: 'vatican.jpg', url: 'https://en.numista.com/catalogue/photos/vatican/232-original.jpg' } // Youth Day
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
                // Handle redirect
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
