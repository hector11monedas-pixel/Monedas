import React from 'react';
import { getNationalSideImage } from '../../data/NationalEuroImages';
import { Plus } from 'lucide-react';
import { EURO_SERIES } from '../../data/EuroSeriesData';
import { getCountryStartYear } from '../../data/EuroData';
const STATUS_NOT_ISSUED = 'not_issued';
const STATUS_SET_ONLY = 'set_only';
import { useCoin } from '../../hooks/useCoin';

import './EuroMatrix.css';

const DENOMINATIONS = [
    { value: 0.01, label: '1 cént.', class: 'copper', image: 'https://upload.wikimedia.org/wikipedia/en/2/26/1_cent_Euro_coin_common_face.png' },
    { value: 0.02, label: '2 cént.', class: 'copper', image: 'https://upload.wikimedia.org/wikipedia/en/b/b5/2_cent_Euro_coin_common_face.png' },
    { value: 0.05, label: '5 cént.', class: 'copper', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/5_cent_Euro_coin_common_face.png' },
    { value: 0.10, label: '10 cént.', class: 'gold', image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/10_cent_Euro_coin_common_face.png' },
    { value: 0.20, label: '20 cént.', class: 'gold', image: 'https://upload.wikimedia.org/wikipedia/en/e/e5/20_cent_Euro_coin_common_face.png' },
    { value: 0.50, label: '50 cént.', class: 'gold', image: 'https://upload.wikimedia.org/wikipedia/en/d/d4/50_cent_Euro_coin_common_face.png' },
    { value: 1.00, label: '1 Euro', class: 'bimetal', image: 'https://upload.wikimedia.org/wikipedia/en/2/23/1_euro_coin_common_face.png' },
    { value: 2.00, label: '2 Euro', class: 'bimetal', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/2_euro_coin_common_face.png' }
];

// Generate years from current (2026) down to 1999
const currentYear = 2026;
const YEARS = Array.from({ length: currentYear - 1999 + 1 }, (_, i) => currentYear - i);

const EuroMatrix = ({ items, onCellClick, countryName, variant = 'sticky-mode', activeMint = null, selectedYears = null, statusFn = null }) => {
    const { greeceMintsEnabled } = useCoin();

    // Default to 1999 if countryName is missing (should not happen in proper usage)
    const startYear = countryName ? getCountryStartYear(countryName) : 1999;

    // Helper to find items in collection
    const findItems = (year, value, requiredMint) => {
        return items.filter(item => {
            const matchYearVal = item.year === year && parseFloat(item.value) === value;
            if (!matchYearVal) return false;

            const itemMint = item.mint || '';
            const targetMint = requiredMint || '';

            // 1. Special case: Germany Generic Mode (No active mint selected)
            if (countryName === 'Alemania' && !activeMint && !requiredMint) {
                return true;
            }

            // 2. If a specific mint/variant is required for this cell, it MUST match
            if (targetMint) {
                return itemMint === targetMint;
            }

            // 3. If no specific mint is required for this cell:
            if (activeMint) {
                // If we are in a country with an active mint (Germany specific), match against it
                return itemMint === activeMint;
            }

            // For other countries (or Vatican Row 1), if no requiredMint, match only if item has no special mint
            // This prevents a 'SV' coin from showing in the standard row.
            return itemMint === '';
        });
    };

    return (
        <div className={`euro-matrix-container glass-panel ${variant}`}>
            <div className="table-wrapper">
                <table className="euro-matrix">
                    <thead>
                        <tr>
                            <th className="year-header">Año</th>
                            {DENOMINATIONS.map(denom => {
                                // Resolve national side image
                                const nationalImage = getNationalSideImage(countryName, denom.value, currentYear);
                                const imageSrc = nationalImage || denom.image;

                                return (
                                    <th key={denom.value} className={`denom-header ${denom.class}`} style={{ minWidth: '85px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                                            <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                                                <img
                                                    src={imageSrc}
                                                    alt={denom.label}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                                                />
                                            </div>
                                            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{denom.label}</span>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {YEARS.map(year => {
                            const isYearValid = year >= startYear;
                            // Don't render anything for years before country adoption
                            if (!isYearValid) return null;

                            // Render Row Function
                            const renderRow = (rowYear, variantMint = null, displayYear = null) => {
                                const isSelected = selectedYears ? (rowYear >= selectedYears[0] && rowYear <= selectedYears[1]) : true;

                                return (
                                    <tr key={`${rowYear}-${variantMint || 'std'}`} style={{
                                        opacity: isSelected ? 1 : 0.3,
                                        transition: 'opacity 0.3s ease'
                                    }}>
                                        <td className="year-cell">
                                            <div className="year-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <span>{displayYear || rowYear}</span>
                                                {EURO_SERIES[countryName]?.map((series, idx) => {
                                                    if (series.years[0] === rowYear && !variantMint) {
                                                        return (
                                                            <span key={idx} style={{
                                                                fontSize: '0.6rem',
                                                                background: 'rgba(255,215,0,0.15)',
                                                                color: '#ffd700',
                                                                padding: '1px 4px',
                                                                borderRadius: '4px',
                                                                marginTop: '2px',
                                                                whiteSpace: 'nowrap',
                                                                border: '1px solid rgba(255,215,0,0.3)'
                                                            }}>
                                                                {series.name.split(' (')[0]}
                                                            </span>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        </td>
                                        {DENOMINATIONS.map(denom => {
                                            // Variant Detection Logic
                                            const variantsToRender = [];
                                            if (countryName === 'Grecia' && rowYear === 2002 && greeceMintsEnabled) {
                                                const val = denom.value;
                                                let foreignMint = null;
                                                if (val === 0.20) foreignMint = 'E';
                                                else if (val >= 1.00) foreignMint = 'S';
                                                else foreignMint = 'F';

                                                variantsToRender.push({ mint: null, label: 'Atenas' });
                                                variantsToRender.push({ mint: foreignMint, label: `Ceca ${foreignMint}` });
                                            } else {
                                                variantsToRender.push({ mint: variantMint, label: null });
                                            }

                                            if (variantsToRender.length > 1) {
                                                return (
                                                    <td key={`${rowYear}-${denom.value}`} className="matrix-cell variant-list-cell" style={{ padding: '4px' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                            {variantsToRender.map(v => {
                                                                const mItems = findItems(rowYear, denom.value, v.mint);
                                                                const dItem = mItems.find(i => i.status === 'duplicate') || mItems.find(i => i.status === 'collection') || mItems[0];
                                                                const tQty = mItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);

                                                                return (
                                                                    <div
                                                                        key={v.mint || 'std'}
                                                                        className={`variant-sub-cell ${dItem ? 'collected' : 'empty'}`}
                                                                        onClick={() => onCellClick(rowYear, denom.value, dItem, v.mint)}
                                                                        style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '6px',
                                                                            padding: '4px 8px',
                                                                            borderRadius: '6px',
                                                                            fontSize: '0.65rem',
                                                                            cursor: 'pointer',
                                                                            background: dItem ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255,255,255,0.05)',
                                                                            border: '1px solid',
                                                                            borderColor: dItem ? '#4ade80' : 'rgba(255,255,255,0.1)',
                                                                            color: dItem ? '#4ade80' : 'var(--text-dim)',
                                                                            minWidth: '100px'
                                                                        }}
                                                                    >
                                                                        <div style={{ minWidth: '14px', textAlign: 'center' }}>
                                                                            {dItem ? <span style={{ fontWeight: 'bold' }}>{dItem.condition || '✓'}</span> : <Plus size={10} />}
                                                                        </div>
                                                                        <span style={{ flex: 1, textAlign: 'left' }}>{v.label}</span>
                                                                        {tQty > 1 && <span style={{ opacity: 0.7 }}>x{tQty}</span>}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            // Standard Row logic
                                            const effectiveMint = variantsToRender[0].mint;
                                            let displayMintStr = null;

                                            if (countryName === 'Vaticano' && rowYear === 2005 && variantMint === 'SV') {
                                                displayMintStr = 'SV';
                                            }

                                            const matchingItems = findItems(rowYear, denom.value, effectiveMint);
                                            // Calculate total quantity (sum of all matching items' quantities)
                                            const totalQuantity = matchingItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);

                                            // Check availability logic using passed statusFn
                                            let cellStatus = 'circulation';
                                            if (statusFn) {
                                                if (countryName === 'Alemania') {
                                                    cellStatus = statusFn(rowYear, activeMint || 'A', denom.value);
                                                } else if (countryName === 'Francia' || countryName === 'Vaticano') {
                                                    cellStatus = statusFn(rowYear, variantMint || null, denom.value);
                                                } else {
                                                    cellStatus = statusFn(rowYear, denom.value);
                                                }
                                            }

                                            const isNotIssued = cellStatus === STATUS_NOT_ISSUED;
                                            const isSetOnly = cellStatus === STATUS_SET_ONLY;

                                            // Determine best item to show in cell (Priority: Duplicate > Collection > Wishlist)
                                            const displayItem = matchingItems.find(i => i.status === 'duplicate') ||
                                                matchingItems.find(i => i.status === 'collection') ||
                                                matchingItems[0];

                                            const cellClasses = `matrix-cell 
                                                ${displayItem ? 'collected' : 'empty'} 
                                                ${displayItem?.status === 'duplicate' ? 'status-duplicate' : ''}
                                                ${displayItem?.status === 'wishlist' ? 'status-wishlist' : ''}
                                                ${isNotIssued ? 'not-issued' : ''} 
                                                ${isSetOnly ? 'set-only' : ''}`;

                                            return (
                                                <td
                                                    key={`${rowYear}-${denom.value}-${effectiveMint || 'std'}`}
                                                    className={cellClasses}
                                                    onClick={() => {
                                                        if (!isNotIssued) {
                                                            onCellClick(rowYear, denom.value, displayItem, effectiveMint);
                                                        }
                                                    }}
                                                >
                                                    {displayItem ? (
                                                        <div className="check-mark">
                                                            {displayItem.condition ? (
                                                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{displayItem.condition}</span>
                                                            ) : (
                                                                displayItem.status === 'wishlist' ? '?' : '✓'
                                                            )}
                                                            {totalQuantity > 1 && (
                                                                <div className="quantity-badge">{totalQuantity}</div>
                                                            )}
                                                            {displayItem.status === 'duplicate' && (
                                                                <div className="duplicate-tag">R</div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="cell-content">
                                                            {isNotIssued ? (
                                                                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>-</span>
                                                            ) : (
                                                                <>
                                                                    {displayMintStr && (
                                                                        <span className="mint-hint">{displayMintStr}</span>
                                                                    )}
                                                                    {!displayMintStr && <div className="add-indicator"><Plus size={12} /></div>}
                                                                </>
                                                            )}
                                                        </div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            };

                            // For Greece 2002, render only one row (variants are now sub-cells)
                            if (countryName === 'Grecia' && year === 2002 && greeceMintsEnabled) {
                                return renderRow(2002);
                            }

                            // For Vatican 2005, render two rows (Standard/JP II and SV/Sede Vacante)
                            if (countryName === 'Vaticano' && year === 2005) {
                                return (
                                    <React.Fragment key="2005-group">
                                        {renderRow(2005, null, '2005')}
                                        {renderRow(2005, 'SV', '2005 SV')}
                                    </React.Fragment>
                                );
                            }

                            return renderRow(year);
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default EuroMatrix;
