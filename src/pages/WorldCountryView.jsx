import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCoin } from '../hooks/useCoin';
import { calculateWorldPeriodCatalogSize } from '../utils/emissionUtils';

import './PageLayout.css';
import './World.css';

const WorldCountryView = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();
    const { items, loadedGlobalData, isDataLoading } = useCoin();
    const [activeTab, setActiveTab] = React.useState('comm');
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
            isTabbed: true,
            tabs: [
                {
                    id: 'comm',
                    name: 'Conmemorativas',
                    periods: [
                        {
                            id: 'comm-series',
                            name: 'Series Conmemorativas (Metales Base)',
                            startYear: 2016,
                            endYear: 2026,
                            denominations: loadedGlobalData.abkhazia_comm?.seriesList.flatMap(s => s.coins.map(c => ({ id: c.id }))) || []
                        }
                    ]
                },
                {
                    id: 'inv',
                    name: 'Inversión',
                    periods: [
                        {
                            id: 'inv-series',
                            name: 'Series de Inversión (Plata y Oro)',
                            startYear: 2008,
                            endYear: 2026,
                            denominations: loadedGlobalData.abkhazia_inv?.seriesList.flatMap(s => s.coins.map(c => ({ id: c.id }))) || []
                        }
                    ]
                }
            ]
        }
    };

    const config = countryConfig[countryId];
    const isReady = config && (config.isTabbed ? config.tabs?.length > 0 : config.periods?.length > 0);
    const displayName = config ? config.name : countryId;

    // Count collected items for a period
    const countCollected = (countryName, period) => {
        const start = period.startYear;
        const end = period.endYear;

        // Handle sub-periods if any (recursive sum not needed if we just check range, 
        // but periods might be disjoint or specific. 
        // For now, World periods are mostly sequential year ranges).
        return items.filter(i =>
            i.country === countryName &&
            (i.category === 'world' || i.category === 'europe') && // Ensure correct category
            i.category !== 'banknote' &&
            parseInt(i.year) >= start &&
            parseInt(i.year) <= end
        ).length;
    };

    if (!config || (!isReady && !isDataLoading)) {
        return (
            <div className="page-container">
                <div className="page-header" style={{ padding: '1rem' }}>
                    <div className="header-content">
                        <div className="title-row">
                            <button onClick={() => navigate('/world')} className="back-btn-simple">
                                <ArrowLeft size={24} />
                            </button>
                            <h2>{displayName}</h2>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                    <h3>País no encontrado</h3>
                    <p>La configuración para {displayName} no está disponible.</p>
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

    return (
        <div className="page-container">
            <div className="page-header euro-header" style={{ padding: '1rem' }}>
                <div className="header-content">
                    <div className="title-row">
                        <button onClick={() => navigate('/world')} className="back-btn-simple">
                            <ArrowLeft size={24} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <img
                                src={config.flag.length > 2 ? config.flag : `https://flagcdn.com/w40/${config.flag}.png`}
                                alt={displayName}
                                style={{ borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', width: '40px' }}
                            />
                            <h2>{displayName}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {config.isTabbed && (
                <div className="tabs-container">
                    {config.tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            )}

            <div className="countries-grid">
                {(config.isTabbed ? config.tabs.find(t => t.id === activeTab).periods : config.periods).map((period) => {
                    const total = calculateWorldPeriodCatalogSize(displayName, period, loadedGlobalData);
                    const collected = countCollected(displayName, period);

                    return (
                        <div
                            key={period.id}
                            className="country-card period-card"
                            onClick={() => navigate(`/world/${countryId}/${period.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="year-display">
                                {period.startYear}
                            </div>
                            <div className="country-info">
                                <span className="country-name">
                                    {period.name}
                                </span>
                            </div>
                            <span className="country-counter text-secondary" style={{ fontSize: '0.8rem', marginTop: '6px' }}>
                                {collected} / {total}
                            </span>
                        </div>
                    );
                })}
            </div>

            <style>{`
                .tabs-container {
                    display: flex;
                    gap: 1rem;
                    padding: 0 1rem 1rem 1rem;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    margin-bottom: 1rem;
                }
                .tab-btn {
                    padding: 0.6rem 1.2rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.03);
                    color: rgba(255,255,255,0.6);
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.2s ease;
                }
                .tab-btn.active {
                    background: var(--primary-color, #f4b400);
                    color: black;
                    border-color: var(--primary-color, #f4b400);
                    font-weight: 600;
                    box-shadow: 0 4px 12px rgba(244, 180, 0, 0.2);
                }
                .period-card {
                    aspect-ratio: 1/1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    width: 100%;
                    box-sizing: border-box;
                    min-height: 140px;
                }
                .year-display {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--primary-color, #f4b400);
                    margin-bottom: 0.2rem;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    line-height: 1;
                }
                .period-card .country-info {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }
                .period-card .country-name {
                    font-size: 0.9rem;
                    line-height: 1.2;
                    display: block;
                }
                @media (max-width: 480px) {
                    .tabs-container {
                        gap: 0.5rem;
                    }
                    .tab-btn {
                        padding: 0.5rem 0.8rem;
                        font-size: 0.8rem;
                        flex: 1;
                    }
                    .year-display {
                        font-size: 1.8rem;
                    }
                    .period-card {
                        min-height: 110px;
                        padding: 0.8rem 0.4rem;
                    }
                    .period-card .country-name {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default WorldCountryView;



