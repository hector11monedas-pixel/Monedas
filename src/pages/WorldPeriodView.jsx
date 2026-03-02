
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { ArrowLeft, LayoutGrid, Table as TableIcon } from 'lucide-react'; // Removing Plus since it was unused
import CoinGridView from '../components/common/CoinGridView';
import WorldMatrix from '../components/common/WorldMatrix';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import { calculateWorldPeriodCatalogSize, calculateWorldDenomPeriodCatalogSize } from '../utils/emissionUtils';
import './PageLayout.css';

const WorldPeriodView = () => {
    const { countryId, periodId, subPeriodId } = useParams();
    const navigate = useNavigate();
    const { items, loadedGlobalData, isDataLoading } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState(null);
    const [viewMode, setViewMode] = useState('grid');

    // Configuration
    const countryConfig = {
        'spain': {
            name: 'España',
            flag: 'es',
            periods: loadedGlobalData.spain?.SPAIN_PERIODS || []
        },
        'czechia': {
            name: 'República Checa',
            flag: 'cz',
            periods: [
                {
                    id: 'republic',
                    name: 'República (1993 - Presente)',
                    startYear: 1993,
                    endYear: 2026,
                    denominations: loadedGlobalData.czech?.CZECH_DENOMINATIONS || []
                }
            ]
        },
        'afghanistan': {
            name: 'Afganistán',
            flag: 'af',
            periods: loadedGlobalData.afghan?.AFGHANISTAN_PERIODS || []
        },
        'abkhazia': {
            name: 'Abjasia',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/320px-Flag_of_the_Republic_of_Abkhazia.svg.png',
            periods: [
                {
                    id: 'comm-series',
                    name: 'Series Conmemorativas (Metales Base)',
                    startYear: 2016,
                    endYear: 2026,
                    denominations: loadedGlobalData.abkhazia_comm?.seriesList.flatMap(s =>
                        s.coins.map(c => ({
                            id: c.id,
                            value: c.value,
                            label: c.name,
                            image: c.obverseImage,
                            seriesName: s.name,
                            yearHint: parseInt(c.year)
                        }))
                    ) || []
                },
                {
                    id: 'inv-series',
                    name: 'Series de Inversión (Plata y Oro)',
                    startYear: 2008,
                    endYear: 2026,
                    denominations: loadedGlobalData.abkhazia_inv?.seriesList.flatMap(s =>
                        s.coins.map(c => ({
                            id: c.id,
                            value: c.value,
                            label: c.name,
                            image: c.obverseImage,
                            seriesName: s.name,
                            yearHint: parseInt(c.year)
                        }))
                    ) || []
                }
            ]
        }
    };

    const config = countryConfig[countryId];
    const isReady = config && config.periods?.length > 0;

    if (!config || (!isReady && !isDataLoading)) {
        return (
            <div className="page-container">
                <div className="page-header" style={{ padding: '1rem' }}>
                    <button onClick={() => navigate(`/world/${countryId}`)} className="back-btn-simple">
                        <ArrowLeft size={24} />
                    </button>
                    <h2>Periodo no encontrado</h2>
                </div>
            </div>
        );
    }

    if (!isReady && isDataLoading) {
        return (
            <div className="page-container">
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    const parentPeriod = config.periods.find(p => p.id === periodId);

    // Determine the active period (could be the parent or a sub-period)
    const period = subPeriodId
        ? parentPeriod?.subPeriods?.find(sp => sp.id === subPeriodId)
        : parentPeriod;

    if (!period) {
        return (
            <div className="page-container">
                <div className="page-header" style={{ padding: '1rem' }}>
                    <button onClick={() => navigate(`/world/${countryId}`)} className="back-btn-simple">
                        <ArrowLeft size={24} />
                    </button>
                    <h2>Periodo no encontrado</h2>
                </div>
            </div>
        );
    }

    const countryItems = items.filter(item => {
        const isWorld = item.category === 'world';
        const isCountry = item.country === config.name;

        if (!isWorld || !isCountry) return false;

        // If it's a sub-period view, check specifically for its denominations
        if (subPeriodId || (!period.subPeriods)) {
            const startY = period.startYear || parentPeriod?.startYear;
            const endY = period.endYear || parentPeriod?.endYear;
            return period.denominations.some(d => d.id === item.denomId) &&
                item.year >= startY &&
                item.year <= endY;
        }

        // If it's a parent period view with sub-periods, check across any sub-period
        return period.subPeriods.some(subP =>
            subP.denominations.some(d => d.id === item.denomId) &&
            item.year >= (subP.startYear || period.startYear) &&
            item.year <= (subP.endYear || period.endYear)
        );
    });

    const totalSlots = calculateWorldPeriodCatalogSize(config.name, {
        ...period,
        startYear: period.startYear || parentPeriod?.startYear,
        endYear: period.endYear || parentPeriod?.endYear
    }, loadedGlobalData);

    return (
        <div className="page-container">
            <div className="page-header euro-header" style={{ padding: '1rem' }}>
                <div className="header-content">
                    <div className="title-row">
                        <button
                            onClick={() => navigate(subPeriodId ? `/world/${countryId}/${periodId}` : `/world/${countryId}`)}
                            className="back-btn-simple"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <img
                                src={config.flag.length > 2 ? (config.flag === 'ab_comm' || config.flag === 'ab_inv' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/320px-Flag_of_the_Republic_of_Abkhazia.svg.png' : config.flag) : `https://flagcdn.com/w40/${config.flag}.png`}
                                alt={config.name}
                                style={{ borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', width: '40px' }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.2rem', margin: 0 }}>{config.name}</h2>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                                    {subPeriodId ? `${parentPeriod.name} - ${period.name}` : period.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats-container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {!period.subPeriods && (
                        <div className="view-toggle glass-panel" style={{ display: 'flex', padding: '4px', borderRadius: '12px', gap: '4px', background: 'rgba(255,255,255,0.05)' }}>
                            <button
                                className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                                onClick={() => setViewMode('table')}
                                title="Modo Tabla"
                                style={{ padding: '8px', borderRadius: '8px', border: 'none', background: viewMode === 'table' ? 'var(--primary-color)' : 'transparent', color: viewMode === 'table' ? 'white' : 'var(--text-dim)', cursor: 'pointer', display: 'flex' }}
                            >
                                <TableIcon size={20} />
                            </button>
                            <button
                                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                title="Modo Monedas"
                                style={{ padding: '8px', borderRadius: '8px', border: 'none', background: viewMode === 'grid' ? 'var(--primary-color)' : 'transparent', color: viewMode === 'grid' ? 'white' : 'var(--text-dim)', cursor: 'pointer', display: 'flex' }}
                            >
                                <LayoutGrid size={20} />
                            </button>
                        </div>
                    )}
                    <div style={{ textAlign: 'right' }}>
                        <span className="coin-counter-large">{countryItems.length} / {totalSlots}</span>
                        <span className="counter-label">Monedas</span>
                    </div>
                </div>
            </div>

            {period.subPeriods ? (
                <div className="periods-grid">
                    {period.subPeriods.map(subP => (
                        <div
                            key={subP.id}
                            className="period-card glass-panel clickable"
                            onClick={() => navigate(`/world/${countryId}/${periodId}/${subP.id}`)}
                        >
                            <h3>{subP.name}</h3>
                            <div className="period-stats">
                                <span className="coin-counter-large">
                                    {items.filter(it =>
                                        it.country === config.name &&
                                        subP.denominations.some(d => d.id === it.denomId) &&
                                        it.year >= (subP.startYear || period.startYear) &&
                                        it.year <= (subP.endYear || period.endYear)
                                    ).length} / {calculateWorldPeriodCatalogSize(config.name, { ...subP, startYear: subP.startYear || period.startYear, endYear: subP.endYear || period.endYear }, loadedGlobalData)}
                                </span>
                                <span className="counter-label">Monedas</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                viewMode === 'table' ? (
                    <WorldMatrix
                        items={items}
                        country={config.name}
                        period={{ ...period, startYear: period.startYear || parentPeriod.startYear, endYear: period.endYear || parentPeriod.endYear }}
                        onCellClick={(year, value, item, denomId, variantId) => {
                            setSelectedCell({ year, value, item, denomId, variantId });
                            setIsModalOpen(true);
                        }}
                    />
                ) : (
                    <CoinGridView
                        items={countryItems}
                        denominations={period.denominations}
                        totalYears={((period.endYear || parentPeriod.endYear) - (period.startYear || parentPeriod.startYear)) + 1}
                        getDenomTotal={(val) => calculateWorldDenomPeriodCatalogSize(config.name, val, (period.startYear || parentPeriod.startYear), (period.endYear || parentPeriod.endYear), loadedGlobalData)}
                        countryName={config.name}
                        currencySymbol={countryId === 'spain' ? (period.id.startsWith('cw_') ? 'Pta' : 'Ptas') : (countryId === 'abkhazia' ? 'AP' : (countryId === 'czechia' ? 'Kč' : 'Af'))}
                        onDenomClick={(denom) => {
                            setSelectedCell({ value: denom.value, denomId: denom.id });
                            setIsModalOpen(true);
                        }}
                    />
                )
            )}

            <style>{`
                .periods-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                    gap: 1.2rem;
                    padding: 1rem 1.5rem;
                }
                .period-card {
                    aspect-ratio: 1/1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 1.2rem;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    min-height: 140px;
                    box-sizing: border-box;
                }
                .period-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.15);
                    border-color: var(--gold-500, #f4b400);
                }
                .period-card h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.95rem;
                    font-weight: 600;
                    line-height: 1.2;
                }
                .period-stats {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2px;
                }
                .period-card .coin-counter-large {
                    font-size: 1.2rem !important;
                    font-weight: 800;
                    color: var(--primary-color, #f4b400);
                }
                .period-card .counter-label {
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.7;
                }
                @media (max-width: 480px) {
                    .periods-grid {
                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                        gap: 0.8rem;
                        padding: 1rem;
                    }
                    .period-card {
                        min-height: 110px;
                        padding: 0.8rem 0.5rem;
                    }
                    .period-card h3 {
                        font-size: 0.8rem;
                    }
                    .period-card .coin-counter-large {
                        font-size: 1rem !important;
                    }
                }
            `}</style>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedCell ? null : `Añadir Moneda (${selectedCell?.year})`}
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="world"
                    initialCountry={config.name}
                    initialYear={selectedCell?.year}
                    initialValue={selectedCell?.value}
                    initialDenomId={selectedCell?.denomId}
                    minYear={period.startYear || parentPeriod.startYear}
                    maxYear={period.endYear || parentPeriod.endYear}
                    editId={selectedCell?.item?.id || selectedCell?.id}
                    initialEstimatedValue={selectedCell?.item?.estimatedValue || selectedCell?.estimatedValue || ''}
                    initialVariantId={selectedCell?.item?.variantId || selectedCell?.variantId || ''}
                    compactMode={true}
                />
            </Modal>
        </div>
    );
};

export default WorldPeriodView;
