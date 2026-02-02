
import https from 'https';
import fs from 'fs';
import path from 'path';

const candidates = {
    'belgium.jpg': [
        'https://en.numista.com/catalogue/photos/belgique/472.jpg', // Standard 2 euro?
        'https://en.numista.com/catalogue/photos/belgique/289.jpg', // Maybe?
        'https://upload.wikimedia.org/wikipedia/commons/2/23/2_euro_coin_Be_2005.jpg',
        'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_be.jpg',
        'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_be_lux.jpg' // Guess
    ],
    'vatican.jpg': [
        'https://en.numista.com/catalogue/photos/vatican/232.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/2_euro_coin_Va_2005.jpg',
        'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_va.jpg',
        'https://www.ecb.europa.eu/euro/coins/comm/img/comm_2005_va_wyd.jpg'
    ]
};

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
                        if (fs.statSync(filepath).size > 1000) { // Check for valid size (not empty or tiny error page)
                            console.log(`Downloaded ${filepath} from ${url} (${fs.statSync(filepath).size} bytes)`);
                            resolve(true);
                        } else {
                            fs.unlink(filepath, () => { });
                            resolve(false);
                        }
                    });
                });
            } else {
                file.close();
                fs.unlink(filepath, () => { });
                resolve(false);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            resolve(false);
        });
    });
};

const tryDownload = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const [filename, urls] of Object.entries(candidates)) {
        let success = false;
        for (const url of urls) {
            console.log(`Trying ${url} for ${filename}...`);
            success = await downloadImage(url, path.join(dir, filename));
            if (success) break;
        }
        if (!success) console.error(`Failed to download ${filename} from any source.`);
    }
};

tryDownload();
