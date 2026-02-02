
import https from 'https';
import fs from 'fs';
import path from 'path';

// URLs suggested:
const images = [
    { name: 'austria.jpg', url: 'https://en.numista.com/catalogue/photos/autriche/2147-original.jpg' },
    { name: 'belgium.jpg', url: 'https://en.numista.com/catalogue/photos/belgique/2151-original.jpg' },
    { name: 'finland.jpg', url: 'https://en.numista.com/catalogue/photos/finlande/2154-original.jpg' },
    { name: 'italy.jpg', url: 'https://en.numista.com/catalogue/photos/italie/2149-original.jpg' },
    { name: 'luxembourg.jpg', url: 'https://en.numista.com/catalogue/photos/luxembourg/2153-original.jpg' },
    { name: 'san_marino.jpg', url: 'https://en.numista.com/catalogue/photos/saint-marin/3516-original.jpg' },
    { name: 'spain.jpg', url: 'https://en.numista.com/catalogue/photos/espagne/2152-original.jpg' },
    { name: 'vatican.jpg', url: 'https://en.numista.com/catalogue/photos/vatican/4513-original.jpg' }
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
                        resolve(true);
                    });
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
            } else {
                file.close();
                fs.unlink(filepath, () => { });
                console.log(`Failed ${url}: ${response.statusCode}`);
                resolve(false);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            resolve(false);
        });
    });
};

const downloadAll = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Delete existing PNGs to avoid confusion? No, keep them as backup for now.
    // We are downloading .jpgs

    for (const image of images) {
        await downloadImage(image.url, path.join(dir, image.name));
    }
};

downloadAll();
