// test_item_form.js
const { getItemValuation } = require('./src/utils/priceUtils.js');

const tempItem = {
    type: 'coin',
    category: 'euro',
    country: 'Luxemburgo',
    year: '2016',
    value: '2 €',
    mint: 'Variante (690.00€)',
    subject: 'Puente Gran Duquesa Carlota',
    isCommemorative: true,
    condition: 'UNC'
};

const valuation = getItemValuation(tempItem);
console.log('Valuation:', valuation);
// The bug might be that estimatedValue gets returned with '€' instead of number, or perhaps overwritten.
