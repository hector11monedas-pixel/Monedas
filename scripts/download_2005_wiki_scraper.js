
import https from 'https';
import fs from 'fs';
import path from 'path';

const targets = [
    { country: 'finland', page: 'https://commons.wikimedia.org/wiki/File:%E2%82%AC2_commemorative_coin_Finland_2005.jpg' },
    { country: 'luxembourg', page: 'https://commons.wikimedia.org/wiki/File:2_%E2%82%AC_commemorativo_Lussemburgo_2005.png' },
    { country: 'san_marino', page: 'https://commons.wikimedia.org/wiki/File:%E2%82%AC2_commemorative_coin_San_Marino_2005.jpg' },
    { country: 'spain', page: 'https://commons.wikimedia.org/wiki/File:2_%E2%82%AC_commemorativo_Spagna_2005.png' },
    { country: 'vatican', page: 'https://commons.wikimedia.org/wiki/File:%E2%82%AC2_commemorative_coin_Vatican_City_2005.png' }
];

const downloadFile = (url, filepath) => {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200) {
                res.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded ${filepath}`);
                        resolve(true);
                    });
                });
            } else {
                file.close();
                fs.unlink(filepath, () => { });
                resolve(false);
            }
        });
    });
};

const processTarget = (target, dir) => {
    return new Promise((resolve) => {
        https.get(target.page, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', async () => {
                // Look for: <a href="https://upload.wikimedia.org/wikipedia/commons/..." class="internal"
                const match = data.match(/<a href="(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+)"/);
                if (match) {
                    console.log(`Found URL for ${target.country}: ${match[1]}`);
                    await downloadFile(match[1], path.join(dir, `${target.country}.jpg`)); // Save all as jpg for consistency/simplicity if possible, or rename later
                    resolve();
                } else {
                    console.log(`No image URL found on page for ${target.country}`);
                    resolve();
                }
            });
        }).on('error', () => {
            console.log(`Error fetching page for ${target.country}`);
            resolve();
        });
    });
};

const run = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    for (const target of targets) {
        await processTarget(target, dir);
    }
};

run();
