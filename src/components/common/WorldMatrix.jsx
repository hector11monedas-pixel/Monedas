
import React from 'react';
import { getAfghanistanCoinStatus, STATUS_NOT_ISSUED } from '../../data/AfghanistanCoinsData';
import { getCzechCoinStatus } from '../../data/CzechCoinsData';
import { getSpainCoinStatus, SPAIN_VARIANTS, STATUS_SET_ONLY } from '../../data/SpainCoinsData';
import { Plus } from 'lucide-react';
import './EuroMatrix.css'; // Reusing styles

const WorldMatrix = ({ items, country, period, onCellClick }) => {
    const { startYear, endYear, denominations } = period;

    const getStatus = (countryName, year, value, id = '', variantId = '') => {
        if (countryName === 'Afganistán') {
            return getAfghanistanCoinStatus(year, value);
        }
        if (countryName === 'República Checa') {
            return getCzechCoinStatus(year, value);
        }
        if (countryName === 'España') {
            return getSpainCoinStatus(year, value, id, variantId);
        }
        return 'STATUS_CIRCULATION'; // Default
    };

    // Consolidate denominations by face value and currency type
    const columns = React.useMemo(() => {
        const groups = [];
        denominations.forEach(d => {
            // Check if it's a "Peso" currency (Filipinas/etc) vs standard
            const isPeso = d.label.includes('Peso');

            // Find existing group matching both value and currency type
            const existing = groups.find(g => {
                const groupIsPeso = g.label.includes('Peso');
                return g.value === d.value && groupIsPeso === isPeso;
            });

            if (existing) {
                if (!existing.ids.includes(d.id)) existing.ids.push(d.id);
            } else {
                const cleanLabel = d.label.split('(')[0].trim();
                groups.push({ ...d, label: cleanLabel, ids: [d.id] });
            }
        });

        // Sort groups by value, then standard coins before Peso variants
        return groups.sort((a, b) => {
            if (a.value !== b.value) return a.value - b.value;
            const aIsPeso = a.label.includes('Peso');
            const bIsPeso = b.label.includes('Peso');
            return (aIsPeso ? 1 : 0) - (bIsPeso ? 1 : 0);
        });
    }, [denominations]);

    // Generate years array in descending order, filtering out years with no coins
    const years = React.useMemo(() => {
        const fullRange = Array.from(
            { length: endYear - startYear + 1 },
            (_, i) => endYear - i
        );

        return fullRange.filter(year => {
            return columns.some(col => {
                return col.ids.some(id => getStatus(country, year, col.value, id) !== STATUS_NOT_ISSUED);
            });
        });
    }, [startYear, endYear, columns, country]);

    // Helper to find items in collection
    const findItems = (year, value, denomId = null, variantId = null) => {
        return items.filter(item => {
            const itemYear = parseInt(item.year);
            const targetYear = parseInt(year);
            const itemValue = parseFloat(item.value);
            const targetValue = parseFloat(value);

            const matchBase = item.country === country &&
                item.category === 'world' &&
                itemYear === targetYear &&
                itemValue === targetValue;

            if (!matchBase) return false;

            if (denomId && item.denomId && item.denomId !== denomId) {
                return false;
            }

            if (variantId || item.variantId) {
                return item.variantId === variantId;
            }

            return true;
        });
    };

    return (
        <div className="euro-matrix-container glass-panel sticky-mode">
            <div className="table-wrapper">
                <table className="euro-matrix">
                    <thead>
                        <tr>
                            <th className="year-header">Año</th>
                            {columns.map(col => (
                                <th key={`${col.value}-col`} className="denom-header" style={{ minWidth: '85px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                                        {col.image && (
                                            <div style={{ position: 'relative', width: '45px', height: '45px' }}>
                                                <img
                                                    src={col.image}
                                                    alt={col.label}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                                                />
                                            </div>
                                        )}
                                        <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{col.label}</span>
                                    </div>
                                </th>
                            ))}
                            <th className="year-header">Año</th>
                        </tr>
                    </thead>
                    <tbody>
                        {years.map(year => (
                            <tr key={year}>
                                <td className="year-cell">{year}</td>
                                {columns.map(col => {
                                    // Find all active models for this year and value
                                    const activeModels = col.ids.filter(id => getStatus(country, year, col.value, id) !== STATUS_NOT_ISSUED);

                                    if (activeModels.length === 0) {
                                        return <td key={`${year}-${col.value}`} className="matrix-cell not-issued">-</td>;
                                    }

                                    // Build a flat list of sub-items to decide on label visibility
                                    const allSubItems = activeModels.flatMap(activeId => {
                                        const variants = SPAIN_VARIANTS[activeId]?.[year];
                                        if (variants) {
                                            return variants.map(v => ({ ...v, activeId, type: 'variant' }));
                                        }
                                        const denom = denominations.find(d => d.id === activeId);
                                        return [{
                                            activeId,
                                            type: 'base',
                                            label: denom ? (denom.label.includes('(') ? denom.label.split('(')[1]?.replace(')', '') : denom.label) : ''
                                        }];
                                    });

                                    // Rule: Show labels if there's more than one sub-item (variants/multiple models)
                                    // or if the single item is a variant.
                                    const hideLabels = allSubItems.length === 1 && allSubItems[0].type === 'base';

                                    return (
                                        <td key={`${year}-${col.value}`} className="matrix-cell" style={{ padding: '4px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                {allSubItems.map((subItem, idx) => {
                                                    const { activeId, type, label, id: variantId } = subItem;
                                                    const matchingItems = findItems(year, col.value, activeId, variantId);
                                                    const collectedItem = matchingItems.length > 0 ? matchingItems[0] : null;
                                                    const totalQuantity = matchingItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);

                                                    if (type === 'variant') {
                                                        const isSetVariant = subItem.status === STATUS_SET_ONLY;
                                                        return (
                                                            <div
                                                                key={`${activeId}-${variantId}-${idx}`}
                                                                className={`variant-sub-cell ${collectedItem ? 'collected' : 'empty'} ${isSetVariant ? 'set-only' : ''}`}
                                                                onClick={() => onCellClick(year, col.value, collectedItem, activeId, variantId)}
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '6px',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '0.65rem',
                                                                    cursor: 'pointer',
                                                                    background: collectedItem
                                                                        ? (isSetVariant ? 'rgba(251, 191, 36, 0.3)' : 'rgba(74, 222, 128, 0.2)')
                                                                        : (isSetVariant ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)'),
                                                                    border: '1px solid',
                                                                    borderColor: collectedItem
                                                                        ? (isSetVariant ? '#fbbf24' : '#4ade80')
                                                                        : (isSetVariant ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255,255,255,0.1)'),
                                                                    color: collectedItem
                                                                        ? (isSetVariant ? '#fbbf24' : '#4ade80')
                                                                        : (isSetVariant ? '#fbbf24' : 'var(--text-dim)'),
                                                                    minWidth: hideLabels ? '40px' : '100px',
                                                                    justifyContent: hideLabels ? 'center' : 'flex-start'
                                                                }}
                                                            >
                                                                <div style={{ minWidth: hideLabels ? 'auto' : '14px', textAlign: 'center' }}>
                                                                    {collectedItem ? (
                                                                        <span style={{ fontWeight: 'bold' }}>{collectedItem.condition || '✓'}</span>
                                                                    ) : (
                                                                        <Plus size={10} />
                                                                    )}
                                                                </div>
                                                                {!hideLabels && (
                                                                    <span style={{ flex: 1, textAlign: 'left' }}>
                                                                        {label}
                                                                    </span>
                                                                )}
                                                                {totalQuantity > 1 && <span className="qty-tiny" style={{ opacity: 0.7 }}>x{totalQuantity}</span>}
                                                            </div>
                                                        );
                                                    }

                                                    // Base case
                                                    return (
                                                        <div
                                                            key={`${activeId}-${idx}`}
                                                            className={`variant-sub-cell ${collectedItem ? 'collected' : 'empty'}`}
                                                            onClick={() => onCellClick(year, col.value, collectedItem, activeId)}
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px',
                                                                padding: '6px 10px',
                                                                borderRadius: '6px',
                                                                fontSize: '0.75rem',
                                                                cursor: 'pointer',
                                                                background: collectedItem ? 'rgba(74, 222, 128, 0.15)' : 'rgba(255,255,255,0.03)',
                                                                border: '1px solid',
                                                                borderColor: collectedItem ? '#4ade80' : 'rgba(255,255,255,0.08)',
                                                                color: collectedItem ? '#4ade80' : 'var(--text-dim)',
                                                                minWidth: '60px',
                                                                justifyContent: 'center'
                                                            }}
                                                        >
                                                            {collectedItem ? (
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                                    <span style={{ fontWeight: 'bold' }}>{collectedItem.condition || '✓'}</span>
                                                                    {totalQuantity > 1 && <span style={{ opacity: 0.7, fontSize: '0.65rem' }}>x{totalQuantity}</span>}
                                                                </div>
                                                            ) : (
                                                                <Plus size={12} />
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </td>
                                    );
                                })}
                                <td className="year-cell">{year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WorldMatrix;
