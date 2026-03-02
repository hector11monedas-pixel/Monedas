import React from 'react';

const ValuationDisplay = ({ formData, spainCollectorCoinsCache, euroPricingCache }) => {
    // Map verbose value to pricing key
    const valueMap = {
        '1 cent. €': '1c', '2 cents €': '2c', '5 cents €': '5c',
        '10 cents €': '10c', '20 cents €': '20c', '50 cents €': '50c',
        '1 €': '1e', '2 €': '2e',
        '12 €': '12e', '20 €': '20e', '30 €': '30e', '40 €': '40e'
    };

    let pricingKey = valueMap[formData.value];
    if (formData.isCommemorative && pricingKey === '2e') {
        pricingKey = '2e_comm';
    }

    const yearKey = parseInt(formData.year);

    // 1. Try Specific Collector Coin Data FIRST for Spain Silver
    if (formData.country === 'España' && ['12 €', '20 €', '30 €', '40 €'].includes(formData.value)) {
        const coinDef = spainCollectorCoinsCache?.find(c => c.year === yearKey && c.value === parseFloat(formData.value));

        if (coinDef && coinDef.prices && coinDef.prices[yearKey]) {
            const prices = coinDef.prices[yearKey];
            return (
                <div style={{
                    marginTop: '8px',
                    padding: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.7)'
                }}>
                    <div style={{ fontWeight: 'bold', color: '#fbbf24', marginBottom: '4px' }}>
                        {coinDef.name}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', textAlign: 'center' }}>
                        {prices.MBC && (
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>MBC</div>
                                <div style={{ color: '#4ade80' }}>{prices.MBC}€</div>
                            </div>
                        )}
                        {prices.EBC && (
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>EBC</div>
                                <div style={{ color: '#4ade80' }}>{prices.EBC}€</div>
                            </div>
                        )}
                        {prices.SC && (
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>SC</div>
                                <div style={{ color: '#4ade80' }}>{prices.SC}€</div>
                            </div>
                        )}
                    </div>
                </div>
            );
        } else if (!spainCollectorCoinsCache && formData.country === 'España' && ['12 €', '20 €', '30 €', '40 €'].includes(formData.value)) {
            return <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Cargando datos extendidos...</div>;
        }
    }

    // 2. Fallback to Generic Pricing
    const catalogEntry = euroPricingCache?.[formData.country]?.[pricingKey]?.[yearKey];

    if (catalogEntry) {
        const entries = Array.isArray(catalogEntry) ? catalogEntry : [catalogEntry];

        return (
            <div style={{
                marginTop: '8px',
                padding: '8px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.7)'
            }}>
                {entries.map((entry, idx) => (
                    <div key={idx} style={{
                        marginBottom: idx < entries.length - 1 ? '8px' : '0',
                        paddingBottom: idx < entries.length - 1 ? '8px' : '0',
                        borderBottom: idx < entries.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                    }}>
                        {entry.name && (
                            <div style={{ fontWeight: 'bold', color: '#fbbf24', marginBottom: '2px' }}>
                                {entry.name}
                            </div>
                        )}
                        {entry.mintage != null && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                                <span>Tirada:</span>
                                <span style={{ color: 'white' }}>
                                    {typeof entry.mintage === 'number'
                                        ? new Intl.NumberFormat('es-ES').format(entry.mintage)
                                        : entry.mintage}
                                </span>
                            </div>
                        )}
                        {entry.price != null && (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Valor SC (Ref):</span>
                                <div style={{ color: '#4ade80' }}>
                                    {entry.price !== '---' ? `${entry.price}€` : '-'}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    } else if (formData.category === 'euro' && !euroPricingCache) {
        return <div style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '8px' }}>Cargando catálogo...</div>;
    }

    return null;
};

export default ValuationDisplay;
