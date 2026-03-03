const itemLux = { year: 2016, subject: 'Puente Gran Duquesa Carlota', mintage: 500000, estimatedPrice: '6.00€', variants: ['Normal (6.00€)', 'Variante (690.00€)'] };
const itemMalta = { year: 2016, subject: 'Templos Ġgantija', mintage: 350000, estimatedPrice: '4.90€', variants: ['Normal (4.90€)', 'Variante F (27.00€)', 'Variante Coincard (15.50€)'] };

function simHandleCardClick(item, specificMint) {
    let initialEstimatedValue = '';
    if (item.estimatedPrice) {
        const cleanStr = item.estimatedPrice.toString().replace(/[€$£]/g, '').trim();
        if (cleanStr.includes('-')) {
            const parts = cleanStr.split('-').map(p => parseFloat(p.replace(',', '.')));
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                initialEstimatedValue = ((parts[0] + parts[1]) / 2).toString();
            }
        } else {
            const num = parseFloat(cleanStr.replace(',', '.'));
            if (!isNaN(num)) initialEstimatedValue = num.toString();
        }
    }

    if (specificMint && specificMint.includes('(') && specificMint.includes('€')) {
        const hintMatch = specificMint.match(/\((\d+([.,]\d+)?)\s*€\)/);
        if (hintMatch && hintMatch[1]) {
            initialEstimatedValue = parseFloat(hintMatch[1].replace(',', '.')).toString();
        }
    }

    return initialEstimatedValue;
}

console.log("Lux Normal (6.00€):", simHandleCardClick(itemLux, "Normal (6.00€)"));
console.log("Lux Variante (690.00€):", simHandleCardClick(itemLux, "Variante (690.00€)"));
console.log("Lux BASE:", simHandleCardClick(itemLux, null));

console.log("Malta Normal (4.90€):", simHandleCardClick(itemMalta, "Normal (4.90€)"));
console.log("Malta Variante F (27.00€):", simHandleCardClick(itemMalta, "Variante F (27.00€)"));
