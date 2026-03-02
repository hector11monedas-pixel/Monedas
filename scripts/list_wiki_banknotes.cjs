const https = require('https');

async function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'BanknoteCollectorApp/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

const categories = [
    '100_Czech_koruna_banknotes',
    '1000_Czech_koruna_banknotes',
    '20_Czech_koruna_banknotes',
    '200_Czech_koruna_banknotes',
    '2000_Czech_koruna_banknotes',
    '50_Czech_koruna_banknotes',
    '500_Czech_koruna_banknotes',
    '5000_Czech_koruna_banknotes',
    'Commemorative_banknotes_of_the_Czech_Republic'
];

async function main() {
    for (const cat of categories) {
        console.log(`\n--- Files in Category:${cat} ---`);
        const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${cat}&cmtype=file&cmlimit=50&format=json`;
        const data = await fetchJson(url);
        if (data.query && data.query.categorymembers) {
            data.query.categorymembers.forEach(m => console.log(m.title));
        } else {
            console.log("No files found or error.");
        }
    }
}

main();
