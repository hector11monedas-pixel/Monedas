
import https from 'https';
import fs from 'fs';
import path from 'path';

// Numista Image URLs with correct IDs
const images = [
    { name: 'austria.jpg', url: 'https://en.numista.com/catalogue/photos/autriche/312-original.jpg' },
    { name: 'belgium.jpg', url: 'https://en.numista.com/catalogue/photos/belgique/472-original.jpg' },
    { name: 'finland.jpg', url: 'https://en.numista.com/catalogue/photos/finlande/288-original.jpg' },
    { name: 'italy.jpg', url: 'https://en.numista.com/catalogue/photos/italie/308-original.jpg' },
    { name: 'luxembourg.jpg', url: 'https://en.numista.com/catalogue/photos/luxembourg/360-original.jpg' },
    { name: 'san_marino.jpg', url: 'https://en.numista.com/catalogue/photos/saint-marin/298-original.jpg' },
    { name: 'spain.jpg', url: 'https://en.numista.com/catalogue/photos/espagne/175-original.jpg' },
    { name: 'vatican.jpg', url: 'https://en.numista.com/catalogue/photos/vatican/232-original.jpg' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://en.numista.com/'
            }
        };

        https.get(url, options, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded ${filepath} (${response.headers['content-length']} bytes)`);
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
    // Ensure dir exists
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
