
import https from 'https';
import fs from 'fs';
import path from 'path';

const countries = [
    { name: 'finland', slug: 'finlande' },
    { name: 'luxembourg', slug: 'luxembourg' },
    { name: 'san_marino', slug: 'saint-marin' },
    { name: 'spain', slug: 'espagne' },
    { name: 'vatican', slug: 'vatican' }
];

const startId = 2140;
const endId = 2170;

const checkAndDownload = (countryName, countrySlug, id, dir) => {
    return new Promise((resolve) => {
        const url = `https://en.numista.com/catalogue/photos/${countrySlug}/${id}-original.jpg`;
        const filepath = path.join(dir, `${countryName}.jpg`);

        const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200) {
                console.log(`FOUND: ${url} for ${countryName}`);
                // Download it!
                const file = fs.createWriteStream(filepath);
                https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close(() => {
                            console.log(`Downloaded ${filepath}`);
                            resolve(true); // Found and downloaded
                        });
                    });
                });
            } else {
                resolve(false);
            }
        });
        req.on('error', () => resolve(false));
        req.end();
    });
};

const scan = async () => {
    const dir = 'c:\\APP- antigravity\\Monedas\\public\\img\\coins\\2005';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const country of countries) {
        let found = false;
        // Search range
        for (let id = startId; id <= endId; id++) {
            found = await checkAndDownload(country.name, country.slug, id, dir);
            if (found) break; // Stop after finding one
        }
        if (!found) {
            console.log(`Could not find real photo for ${country.name} in range ${startId}-${endId}`);
        }
    }
};

scan();
