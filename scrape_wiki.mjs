import fs from 'fs';
import * as cheerio from 'cheerio';

async function run() {
    try {
        const year = 2016;
        const res = await fetch(`https://en.wikipedia.org/wiki/2_euro_commemorative_coins_${year}`);
        const text = await res.text();
        const $ = cheerio.load(text);

        console.log($('table.wikitable').length + ' tables found');
        const firstTable = $('table.wikitable').first();
        const headers = firstTable.find('th').map((i, el) => $(el).text().trim()).get();
        console.log('Headers:', headers);

        const firstRow = firstTable.find('tr').eq(1); // skip header
        console.log('First row columns count:', firstRow.find('td').length);
        console.log('First row text:', firstRow.text().trim());
        const imgSrc = firstRow.find('img').attr('src');
        console.log('Image SRC:', imgSrc);

    } catch (e) {
        console.error(e);
    }
}
run();
