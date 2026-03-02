import { getItemValuation } from './src/utils/priceUtils.js';

console.log('Testing Abkhazia logic');

try {
    const item1 = {
        country: 'Abjasia',
        id: 'ab-1ap-dranda',
        year: 2016,
        value: 1,
        name: '1 Apsar - Catedral de Dranda',
        subject: '1 Apsar - Catedral de Dranda',
    };

    const item2 = {
        country: 'Abjasia',
        id: 'ab-3ap-alioramus',
        year: 2021,
        value: 3,
        name: '3 Apsars - Alioramus Remotus',
    };

    const val1 = getItemValuation(item1);
    console.log('item1:', val1);
    if (val1.estimatedValue !== 4.5) {
        console.error('Error: val1 expected 4.5, got', val1.estimatedValue);
    }

    const val2 = getItemValuation(item2);
    console.log('item2:', val2);
    if (val2.estimatedValue !== 18.5) {
        console.error('Error: val2 expected 18.5, got', val2.estimatedValue);
    }

} catch (e) {
    console.error(e);
}
