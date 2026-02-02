
import https from 'https';
import fs from 'fs';
import path from 'path';

const sources = [
    // Fleur-de-coin patterns
    { country: 'finland', url: 'https://www.fleur-de-coin.com/images/coins/2euro/2005_finland.jpg' },
    { country: 'luxembourg', url: 'https://www.fleur-de-coin.com/images/coins/2euro/2005_luxembourg.jpg' },
    { country: 'san_marino', url: 'https://www.fleur-de-coin.com/images/coins/2euro/2005_sanmarino.jpg' },
    { country: 'spain', url: 'https://www.fleur-de-coin.com/images/coins/2euro/2005_spain.jpg' },
    { country: 'vatican', url: 'https://www.fleur-de-coin.com/images/coins/2euro/2005_vatican.jpg' },
    // Euro-coins.tv patterns (hypothetical)
    { country: 'finland', url: 'https://www.euro-coins.tv/images/product_images/original_images/2005_finland_2_euro.jpg' },
];

const checkAndDownload = (country, url, dir) => {
    return new Promise((resolve) => {
        const filepath = path.join(dir, `${country}.jpg`);
        const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200) {
                console.log(`FOUND: ${url} for ${country}`);
                https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
                    if (response.statusCode === 200) {
                        const file = fs.createWriteStream(filepath);
                        response.pipe(file);
                        file.on('finish', () => {
                            file.close(() => {
                                console.log(`Downloaded ${filepath}`);
                                resolve(true);
                            });
                        });
                    } else {
                        resolve(false);
                    }
                });
            } else {
                console.log(`Failed: ${url} (${res.statusCode})`);
                resolve(false);
            }
        });
        req.on('error', () => resolve(false));
        req.end();
    });
};

const run = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    for (const item of sources) {
        await checkAndDownload(item.country, item.url, dir);
    }
};

run();
