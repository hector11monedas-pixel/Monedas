import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { List } from 'react-window';
import { Plus } from 'lucide-react';
import CoinImage from './CoinImage';
import './CoinGridView.css';

// Wrapper for images - REMOVED redundant proxying, handled by CoinImage
const wrapWithProxy = (url) => url;

const CoinGroupRow = memo(({ index, style, ...props }) => {
    // In react-window v2, rowProps are spread directly
    const { groups, items, onDenomClick, getDenomTotal, totalYears, selectedYears, currencySymbol, isMobile } = props;
    const group = groups[index];
    // ... rest same ...

    // ... (logic from previous step)

    if (!group) return null;

    let headerValue, headerCurrency;

    if (group.isPeso) {
        const labelParts = group.denoms[0].label.split(' ');
        headerValue = labelParts[0];
        headerCurrency = labelParts.slice(1).join(' ');
    }

    // Apply specific padding for alignment since react-window removes container padding
    const rowStyle = {
        ...style,
        paddingLeft: isMobile ? '0.5rem' : '1rem',
        paddingRight: isMobile ? '0.5rem' : '1rem',
        boxSizing: 'border-box'
    };

    return (
        <div style={rowStyle}>
            {/* Same content as before */}
            <div className="denom-group-section">
                <div className="group-header">
                    {group.isPeso ? (
                        <>
                            <span className="group-value">{headerValue}</span>
                            <span className="group-currency">{headerCurrency}</span>
                        </>
                    ) : group.value === 0.0625 ? (
                        <>
                            <span className="group-value">25</span>
                            <span className="group-currency">Mil. Escudo</span>
                        </>
                    ) : group.value < 1 && (currencySymbol === 'Ptas' || currencySymbol === 'Pta') ? (
                        <>
                            <span className="group-value">{Math.round(group.value * 100)}</span>
                            <span className="group-currency">céntimos</span>
                        </>
                    ) : (
                        <>
                            <span className="group-value">{group.value}</span>
                            <span className="group-currency">{currencySymbol}</span>
                        </>
                    )}
                    <div className="group-line"></div>
                </div>
                <div className="coin-grid-container">
                    {group.denoms.map(denom => {
                        const imageSrc = wrapWithProxy(denom.image);
                        const denomItems = items.filter(item => {
                            if (item.denomId && denom.id) return item.denomId === denom.id;
                            const matchValue = parseFloat(item.value) === denom.value;
                            if (!matchValue) return false;
                            if (denom.years) {
                                const y = parseInt(item.year);
                                return y >= denom.years[0] && y <= denom.years[1];
                            }
                            if (!item.denomId && denom.yearHint) return parseInt(item.year) === denom.yearHint;
                            return true;
                        });

                        const collectedYearsCount = denomItems.length;
                        const hasCollectedVariants = denomItems.some(item => !!item.variantId);
                        let denominator = getDenomTotal ? getDenomTotal(denom) : totalYears;
                        if (selectedYears) denominator = selectedYears[1] - selectedYears[0] + 1;
                        const percentage = Math.min(100, Math.round((collectedYearsCount / denominator) * 100));

                        return (
                            <div
                                key={denom.id}
                                className="coin-grid-card glass-panel"
                                onClick={() => onDenomClick(denom)}
                            >
                                <div className="coin-card-image">
                                    <CoinImage
                                        src={imageSrc}
                                        alt={denom.label}
                                        className="coin-image-wrapper"
                                        style={{ width: '100%', height: '100%' }}
                                        fallback={
                                            <div className="coin-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                                <span>{denom.label}</span>
                                                {hasCollectedVariants && (
                                                    <div className="variant-badge-grid" style={{ position: 'absolute', top: '5px', right: '5px' }}>VAR</div>
                                                )}
                                            </div>
                                        }
                                    >
                                        {hasCollectedVariants && (
                                            <div className="variant-badge-grid">VAR</div>
                                        )}
                                    </CoinImage>
                                </div>
                                <div className="coin-card-info">
                                    <h3>{denom.label.split('(')[0].trim()}</h3>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 600, color: 'var(--primary-color)' }}>
                                        {denom.yearHint || denom.years?.[0] || ''}
                                    </div>
                                    <div className="progress-row">
                                        <div className="progress-bar-container">
                                            <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                        <span className="progress-text">
                                            {collectedYearsCount}/{denominator}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="add-coin-btn-grid"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDenomClick(denom);
                                    }}
                                >
                                    <Plus size={16} />
                                    <span>Añadir</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

// ... CoinGridView params ... 
// Inside return ...

/*
            {size.width > 0 && (
                <List
                    height={size.height}
                    itemCount={groupedDenoms.length}
                    rowHeight={getRowHeight}
                    width={size.width}
                    rowComponent={CoinGroupRow}
                    rowProps={itemData}
                />
            )}
*/

const CoinGridView = ({ items, denominations, totalYears, onDenomClick, getDenomTotal, selectedYears = null, currencySymbol }) => {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    // Group denominations by value and currency type
    const groupedDenoms = React.useMemo(() => {
        const groups = denominations.reduce((acc, denom) => {
            const isPeso = denom.label.includes('Peso') && !denom.label.includes('Peseta');
            const key = `${denom.value}-${isPeso ? 'peso' : 'std'}`;

            if (!acc[key]) acc[key] = { value: denom.value, isPeso, denoms: [] };
            acc[key].denoms.push(denom);
            return acc;
        }, {});

        return Object.values(groups)
            .sort((a, b) => {
                if (a.isPeso !== b.isPeso) return a.isPeso ? 1 : -1;
                return a.value - b.value;
            })
            .map(group => ({
                ...group,
                denoms: group.denoms.sort((a, b) => (a.yearHint || 0) - (b.yearHint || 0))
            }));
    }, [denominations]);

    const isMobile = size.width <= 480;

    const getRowHeight = useCallback((index) => {
        const group = groupedDenoms[index];
        const numItems = group.denoms.length;

        // CSS Constants (Must match CoinGridView.css)
        const cardHeight = isMobile ? 185 : 210;
        const cardMinWidth = 160;
        const gap = isMobile ? 8 : 16;
        const padding = isMobile ? 8 : 16;

        // Header height (1.8rem text ~29px + padding)
        const headerHeight = 32;

        // Internal gap between header and grid (1.2rem = ~19.2px)
        const headerGap = 20;

        // Container gap (between groups)
        const groupGap = 12;

        // Columns calculation
        let cols;
        if (isMobile) {
            cols = 2; // Hardcoded in CSS
        } else {
            const effectiveWidth = size.width - (padding * 2);
            cols = Math.floor((effectiveWidth + gap) / (cardMinWidth + gap));
            cols = Math.max(1, cols);
        }

        const rows = Math.ceil(numItems / cols);
        const gridHeight = (rows * cardHeight) + (Math.max(0, rows - 1) * gap);

        return headerHeight + headerGap + gridHeight + groupGap;
    }, [groupedDenoms, size.width, isMobile]);

    const itemData = React.useMemo(() => ({
        groups: groupedDenoms,
        items,
        onDenomClick,
        getDenomTotal,
        totalYears,
        selectedYears,
        currencySymbol,
        isMobile
    }), [groupedDenoms, items, onDenomClick, getDenomTotal, totalYears, selectedYears, currencySymbol, isMobile]);

    return (
        <div ref={containerRef} className="coin-groups-container" style={{ height: 'calc(100vh - 200px)', minHeight: '400px', overflow: 'hidden', padding: 0 }}>
            {size.width > 0 && (
                <List
                    height={size.height}
                    rowCount={groupedDenoms.length}
                    rowHeight={getRowHeight}
                    width={size.width}
                    rowComponent={CoinGroupRow}
                    rowProps={itemData}
                />
            )}
        </div>
    );
};

export default CoinGridView;
