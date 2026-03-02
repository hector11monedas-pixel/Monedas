
export const CURRENCY_RATES = {
    'EUR': 1.0,
    'CZK': 0.039, // 1 CZK = ~0.039 EUR (approx 1/25.5)
    'USD': 0.92,
    'GBP': 1.17,
    'Pesetas': 0.00601, // 1 EUR = 166.386 ESP
    'AFN': 0.013      // 1 AFN = ~0.013 EUR
};

export const DEFAULT_CURRENCY = 'EUR';

/**
 * Parses a value string (e.g., "0.01", "200", "5000") and detects currency if present.
 * Returns value in EUR.
 * @param {number|string} amount - The amount to convert
 * @param {string} currencyCode - 'EUR', 'CZK', etc. Default EUR.
 */
export const convertToEuro = (amount, currencyCode = 'EUR') => {
    if (amount === null || amount === undefined) return 0;

    const validAmount = parseFloat(amount);
    if (isNaN(validAmount)) return 0;

    const rate = CURRENCY_RATES[currencyCode] || 1.0;
    return validAmount * rate;
};

/**
 * Formats a value in EUR currency.
 */
export const formatEUR = (amount) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
};
