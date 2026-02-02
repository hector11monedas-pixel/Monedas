
import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
    { name: 'austria.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_at.jpg' },
    { name: 'belgium.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_be.jpg' },
    { name: 'finland.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_fi.jpg' },
    { name: 'italy.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_it.jpg' },
    { name: 'luxembourg.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_lu.jpg' },
    { name: 'san_marino.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_sm.jpg' },
    { name: 'spain.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_es.jpg' },
    { name: 'vatican.jpg', url: 'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_va.jpg' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded ${filepath}`);
                        resolve();
                    });
                });
            } else {
                file.close();
                fs.unlink(filepath, () => { }); // Delete partial file
                reject(`Failed to download ${url}: Status Code ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete partial file
            reject(err.message);
        });
    });
};

const downloadAll = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
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
