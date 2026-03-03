import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { useTheme } from '../hooks/useTheme';
import { ArrowLeft, Table as TableIcon, LayoutGrid } from 'lucide-react';
import { calculateCountryCatalogSize, getCountryYearsRange, calculateDenomCatalogSize } from '../utils/emissionUtils';
import { EURO_DENOMINATIONS } from '../data/EuroDenominations';
import { EURO_SERIES } from '../data/EuroSeriesData';
import { NATIONAL_IMAGES } from '../data/NationalEuroImages';
import { loadCountryData } from '../utils/dataService';

import EuroMatrix from '../components/common/EuroMatrix';
import CoinGridView from '../components/common/CoinGridView';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './EuroCountryView.css';

const EuroCountryView = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const { items, germanMintsEnabled, greeceMintsEnabled } = useCoin();
    const { setCountryTheme, resetTheme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dynamic Data Loading
    const [countryData, setCountryData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        let isMounted = true;
        // Skip setting true if already loading to avoid cascading renders
        if (!isLoadingData) setIsLoadingData(true);
        loadCountryData(countryName).then(data => {
            if (isMounted) {
                setCountryData(data);
                setIsLoadingData(false);
            }
        });
        return () => { isMounted = false; };
    }, [countryName]);

    // Derived status function from loaded data
    const statusFn = useMemo(() => {
        if (!countryData) return null;
        // Find the function that contains 'Status' and is actually a function
        // (to avoid selecting string constants like STATUS_CIRCULATION)
        const statusFunctionKey = Object.keys(countryData).find(key =>
            key.toLowerCase().includes('status') && typeof countryData[key] === 'function'
        );
        return countryData[statusFunctionKey];
    }, [countryData]);

    useEffect(() => {
        setCountryTheme(countryName);
        return () => resetTheme();
    }, [countryName, setCountryTheme, resetTheme]);

    const [selectedCell, setSelectedCell] = useState(null);
    const [selectedMint, setSelectedMint] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

    // Initial effect to set default mint for Germany
    useEffect(() => {
        if (countryName === 'Alemania' && germanMintsEnabled) {
            if (selectedMint !== 'A') setSelectedMint('A');
        } else {
            if (selectedMint !== null) setSelectedMint(null);
        }
    }, [countryName, germanMintsEnabled]);

    // Expanded denominations logic
    const expandedDenominations = useMemo(() => {
        const seriesData = EURO_SERIES[countryName];
        if (seriesData) {
            return seriesData.flatMap((series, idx) => {
                return EURO_DENOMINATIONS.map(denom => {
                    const valueStr = denom.value.toFixed(2);
                    let imgSrc = denom.image;

                    // CHECK EXCLUSIONS
                    if (series.excludedDenominations?.includes(valueStr)) return null;

                    // Series years logic
                    let seriesYears = series.denominationYears?.[valueStr] || series.years;

                    if (NATIONAL_IMAGES[countryName]?.[idx]?.[valueStr]) {
                        imgSrc = NATIONAL_IMAGES[countryName][idx][valueStr];
                    }

                    return {
                        ...denom,
                        id: `${denom.id}_s${idx}`,
                        label: denom.label,
                        seriesName: series.name.split(' (')[0],
                        years: seriesYears,
                        image: imgSrc,
                        seriesIdx: idx
                    };
                }).filter(Boolean);
            });
        }
        return EURO_DENOMINATIONS;
    }, [countryName]);

    // Filter items by category 'euro' and the specific country name
    const countryItems = items.filter(
        item => item.category === 'euro' &&
            item.country === countryName &&
            !item.isCommemorative &&
            (!selectedMint || item.mint === selectedMint)
    );

    // Calculate progress stats
    const progress = useMemo(() => {
        const slots = calculateCountryCatalogSize(countryName, {
            germanMints: germanMintsEnabled,
            greeceMintsEnabled: greeceMintsEnabled,
            mint: selectedMint
        }, statusFn);

        const totalValue = countryItems.reduce((acc, item) => acc + (parseFloat(item.estimatedValue) || 0), 0);

        return {
            collected: countryItems.length,
            total: slots,
            estimatedValue: totalValue
        };
    }, [countryName, countryItems, germanMintsEnabled, greeceMintsEnabled, selectedMint, statusFn]);

    const { validYears } = useMemo(() => {
        const yearsRange = getCountryYearsRange(countryName);
        return { validYears: yearsRange };
    }, [countryName]);

    return (
        <div className="page-container">
            {/* Header Section */}
            <div className="euro-header glass-panel" style={{
                margin: '0 1rem 1rem',
                padding: '0.8rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                    <button className="back-btn" onClick={() => navigate('/euro/normal')} style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <ArrowLeft size={18} />
                    </button>
                    <div className="country-info" style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '1.2rem', margin: 0 }}>{countryName}</h1>
                    </div>
                    <div className="view-toggle glass-panel" style={{ display: 'flex', padding: '3px', borderRadius: '10px', gap: '2px', background: 'rgba(255,255,255,0.05)' }}>
                        <button
                            className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                            onClick={() => setViewMode('table')}
                            style={{
                                padding: '6px',
                                borderRadius: '8px',
                                border: 'none',
                                background: viewMode === 'table' ? 'var(--primary-color)' : 'transparent',
                                color: viewMode === 'table' ? 'white' : 'var(--text-dim)',
                                cursor: 'pointer'
                            }}
                        >
                            <TableIcon size={16} />
                        </button>
                        <button
                            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            style={{
                                padding: '6px',
                                borderRadius: '8px',
                                border: 'none',
                                background: viewMode === 'grid' ? 'var(--primary-color)' : 'transparent',
                                color: viewMode === 'grid' ? 'white' : 'var(--text-dim)',
                                cursor: 'pointer'
                            }}
                        >
                            <LayoutGrid size={16} />
                        </button>
                    </div>
                </div>

                <div className="country-stats" style={{ display: 'flex', gap: '8px' }}>
                    <div className="stat-pill glass-panel" style={{ padding: '4px 8px', fontSize: '0.75rem', flex: 1 }}>
                        <span style={{ opacity: 0.6, fontSize: '0.65rem' }}>Colección</span>
                        <div style={{ fontWeight: 'bold' }}>{progress.collected} / {progress.total}</div>
                    </div>
                    <div className="stat-pill glass-panel" style={{ padding: '4px 8px', fontSize: '0.75rem', flex: 1 }}>
                        <span style={{ opacity: 0.6, fontSize: '0.65rem' }}>Valor</span>
                        <div style={{ fontWeight: 'bold', color: '#4ade80' }}>{progress.estimatedValue.toFixed(2)}€</div>
                    </div>
                </div>
            </div>

            {/* Germany Mints */}
            {countryName === 'Alemania' && germanMintsEnabled && (
                <div className="mint-tabs-container" style={{ margin: '0 1rem 1rem' }}>
                    <div className="mint-tabs" style={{ display: 'flex', gap: '6px' }}>
                        {['A', 'D', 'F', 'G', 'J'].map(mint => (
                            <button
                                key={mint}
                                className={`mint-tab ${selectedMint === mint ? 'active' : ''}`}
                                onClick={() => setSelectedMint(mint)}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: selectedMint === mint ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '0.8rem'
                                }}
                            >
                                {mint}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* View Section */}
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {viewMode === 'table' ? (
                    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {isLoadingData && (
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, borderRadius: '15px' }}>
                                <div className="loading-spinner-small"></div>
                            </div>
                        )}
                        <EuroMatrix
                            items={countryItems}
                            countryName={countryName}
                            activeMint={selectedMint}
                            statusFn={statusFn}
                            onCellClick={(year, value, existingItem, mintVariant) => {
                                if (existingItem) {
                                    setSelectedCell({ ...existingItem, id: existingItem.id });
                                    setIsModalOpen(true);
                                } else {
                                    setSelectedCell({ year, value, mint: mintVariant });
                                    setIsModalOpen(true);
                                }
                            }}
                        />
                    </div>
                ) : (
                    <CoinGridView
                        items={countryItems}
                        denominations={expandedDenominations}
                        totalYears={validYears}
                        countryName={countryName}
                        currencySymbol="€"
                        getDenomTotal={(denom) => calculateDenomCatalogSize('euro', countryName, denom.value, {
                            germanMints: germanMintsEnabled,
                            greeceMintsEnabled: greeceMintsEnabled,
                            mint: selectedMint,
                            minYear: denom.years?.[0],
                            maxYear: denom.years?.[1]
                        }, null, statusFn)}
                        onDenomClick={(denom) => {
                            const defaultYear = denom.years ? denom.years[0] : undefined;
                            setSelectedCell({
                                value: denom.value,
                                year: defaultYear
                            });
                            setIsModalOpen(true);
                        }}
                    />
                )}
            </div>

            {/* Modal & Form */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedCell?.id ? 'Editar Moneda' : `Añadir ${countryName}`}
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialCountry={countryName}
                    initialYear={selectedCell?.year}
                    initialValue={selectedCell?.value}
                    initialMint={selectedCell?.mint || selectedMint || ''}
                    editId={selectedCell?.id}
                    initialCondition={selectedCell?.condition || ''}
                    initialQuantity={selectedCell?.quantity || 1}
                    initialDescription={selectedCell?.description || ''}
                    initialEstimatedValue={selectedCell?.estimatedValue || ''}
                    initialIsCommemorative={selectedCell?.isCommemorative || false} // Pass this prop!
                    compactMode={true}
                />
            </Modal>
        </div >
    );
};

export default EuroCountryView;
