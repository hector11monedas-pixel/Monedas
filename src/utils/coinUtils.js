// Helper to parse face value robustly (Shared logic)
export const parseFaceValue = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;

    // Check strict number string first to avoid partial matches
    if (!isNaN(parseFloat(val)) && isFinite(val) && !val.includes('ent') && !val.includes('€')) {
        return parseFloat(val);
    }

    let vStr = String(val).toLowerCase();

    // Handle "1 cent. €" -> 0.01
    if (vStr.includes('cent')) {
        const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
        return isNaN(num) ? 0 : num / 100;
    }

    // Standard parse for "2 €", "12 €"
    const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
};
