
import https from 'https';
import fs from 'fs';
import path from 'path';

const candidates = [
    // Finland
    { name: 'finland.jpg', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/%E2%82%AC2_commemorative_coin_Finland_2005.jpg' },
    // Luxembourg
    { name: 'luxembourg.png', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_%E2%82%AC_commemorativo_Lussemburgo_2005.png' },
    // San Marino
    { name: 'san_marino.jpg', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/%E2%82%AC2_commemorative_coin_San_Marino_2005.jpg' },
    // Spain (Italian filename from search)
    { name: 'spain.png', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_%E2%82%AC_commemorativo_Spagna_2005.png' },
    // Vatican
    { name: 'vatican.png', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2_Euro_2005,_Vatican.png' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        };

        https.get(url, options, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => {
                        console.log(`Downloaded ${filepath} (${fs.statSync(filepath).size} bytes)`);
                        resolve(true);
                    });
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                console.log(`Redirecting ${url} -> ${response.headers.location}`);
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
    // Ensure dir exists
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const image of candidates) {
        // Try to download. If filename implies png but redirected url is jpg, it will be saved as .png but content is jpg. 
        // Browsers handle this fine usually, but we should be aware.
        await downloadImage(image.url, path.join(dir, image.name));
    }
};

downloadAll();
