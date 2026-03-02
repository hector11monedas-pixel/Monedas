import React from 'react';
import { Plus } from 'lucide-react';
import { CZECH_DENOMINATIONS, getCzechCoinStatus, STATUS_NOT_ISSUED, STATUS_SET_ONLY } from '../../data/CzechCoinsData';
import '../common/EuroMatrix.css'; // Reusing styles

const YEARS = Array.from({ length: new Date().getFullYear() - 1993 + 1 }, (_, i) => new Date().getFullYear() - i);

const CzechMatrix = ({ items, onCellClick }) => {
    // Helper to find items in collection
    const findItems = (year, value, denomId = null) => {
        return items.filter(item => {
            const matchYearVal = item.year === year && parseFloat(item.value) === value;
            if (!matchYearVal) return false;

            // If we have a denomId to match against, use it to distinguish designs
            if (denomId && item.denomId) {
                return item.denomId === denomId;
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
                            {CZECH_DENOMINATIONS.map(denom => (
                                <th key={denom.id} className="denom-header" style={{ minWidth: '85px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                                        {denom.image && (
                                            <div style={{ position: 'relative', width: '45px', height: '45px' }}>
                                                <img
                                                    src={denom.image}
                                                    alt={denom.label}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                                                />
                                            </div>
                                        )}
                                        <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{denom.label}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {YEARS.map(year => (
                            <tr key={year}>
                                <td className="year-cell">{year}</td>
                                {CZECH_DENOMINATIONS.map(denom => {
                                    const matchingItems = findItems(year, denom.value, denom.id);
                                    const collectedItem = matchingItems.length > 0 ? matchingItems[0] : null;
                                    const totalQuantity = matchingItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);

                                    const cellStatus = getCzechCoinStatus(year, denom.value);
                                    const isNotIssued = cellStatus === STATUS_NOT_ISSUED;
                                    const isSetOnly = cellStatus === STATUS_SET_ONLY;

                                    return (
                                        <td
                                            key={`${year}-${denom.id}`}
                                            className={`matrix-cell 
                                                ${collectedItem ? 'collected' : 'empty'} 
                                                ${isNotIssued ? 'not-issued' : ''} 
                                                ${isSetOnly ? 'set-only' : ''}`}
                                            onClick={() => {
                                                if (!isNotIssued) {
                                                    onCellClick(year, denom.value, collectedItem);
                                                }
                                            }}
                                        >
                                            {collectedItem ? (
                                                <div className="check-mark">
                                                    {collectedItem.condition ? (
                                                        <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{collectedItem.condition}</span>
                                                    ) : (
                                                        '✓'
                                                    )}
                                                    {totalQuantity > 1 && (
                                                        <div className="quantity-badge">{totalQuantity}</div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="cell-content">
                                                    {isNotIssued ? (
                                                        <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>-</span>
                                                    ) : (
                                                        <div className="add-indicator"><Plus size={12} /></div>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CzechMatrix;
