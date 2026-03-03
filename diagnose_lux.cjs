
const { getItemValuation } = require('./src/utils/priceUtils.js');
const { COUNTRY_CATALOGS } = require('./src/data/CommemorativeCatalog.js');

// Simulate the item object passed by ItemForm
const item = {
    category: 'euro',
    type: 'coin',
    country: 'Luxemburgo',
    year: '2016',
    value: '2.00',
    isCommemorative: true,
    mint: 'Variante (690.00€)',
    subject: 'Puente Gran Duquesa Carlota'
};

const valuation = getItemValuation(item);
console.log('Valuation Result:', JSON.stringify(valuation, null, 2));
