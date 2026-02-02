import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_DIR = path.join(__dirname, 'public', 'img', 'coins', '2004');

const MISSING = [
    { name: "italy.png", text: "Italy+2004" },
    { name: "luxembourg.png", text: "Luxembourg+2004" }
];

MISSING.forEach(item => {
    const dest = path.join(BASE_DIR, item.name);
    // Only restore if file doesn't exist or is size 0
    let shouldDownload = true;
    try {
        const stats = fs.statSync(dest);
        if (stats.size > 1000) shouldDownload = false; // It's a real image
    } catch (e) { }

    if (shouldDownload) {
        console.log(`Restoring placeholder for ${item.name}...`);
        const file = fs.createWriteStream(dest);
        https.get(`https://placehold.co/200x200/gold/white/png?text=${item.text}`, (res) => {
            res.pipe(file);
        });
    } else {
        console.log(`${item.name} exists and seems valid.`);
    }
});
