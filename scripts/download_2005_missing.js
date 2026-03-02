
import https from 'https';
import fs from 'fs';
import path from 'path';

// Retry missing images with different URL patterns (standard size instead of original)
const images = [
    { name: 'belgium.jpg', url: 'https://en.numista.com/catalogue/photos/belgique/472.jpg' },
    { name: 'vatican.jpg', url: 'https://en.numista.com/catalogue/photos/vatican/232.jpg' }
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

    for (const image of images) {
        try {
            await downloadImage(image.url, path.join(dir, image.name));
        } catch (error) {
            console.error(error);
        }
    }
};

downloadAll();
