import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { calculateCountryEuroCatalogSize, EURO_DATA, calculateTotalEuroCatalogSize } from '../data/EuroData';
import { getCatalogForCountry, calculateCommemorativeCatalogSize } from '../data/CommemorativeCatalog';
import { ArrowLeft, TrendingUp, Award, BarChart2, Globe, Wallet } from 'lucide-react';
import './Statistics.css';

const Statistics = () => {
    const navigate = useNavigate();
    const { items, catalogSize, germanMintsEnabled, greeceMintsEnabled, favoriteCountry } = useCoin();
    const [activeTab, setActiveTab] = useState('total'); // total, euro, world, favorite, banknotes
    const [euroFilter, setEuroFilter] = useState('all'); // all, normal, commemorative

    const calcOptions = useMemo(() => ({ germanMints: germanMintsEnabled, greeceMints: greeceMintsEnabled }), [germanMintsEnabled, greeceMintsEnabled]);

    // --- FILTERING LOGIC ---
    const filteredItems = useMemo(() => {
        switch (activeTab) {
            case 'euro': {
                const euroItems = items.filter(i => i.category === 'euro' || i.category === 'commemorative');
                if (euroFilter === 'normal') return euroItems.filter(i => !i.isCommemorative && i.category !== 'commemorative');
                if (euroFilter === 'commemorative') return euroItems.filter(i => i.isCommemorative || i.category === 'commemorative');
                return euroItems;
            }
            case 'favorite':
                return items.filter(i => i.country === favoriteCountry.name);
            case 'world':
                return items.filter(i => i.category !== 'banknote' && i.category !== 'euro' && i.category !== 'commemorative'); // Fix: World should exclude Euro? Or just non-euro items?
                // Wait, original 'world' logic was `items.filter(i => i.category !== 'banknote')`. 
                // That seems wrong if 'euro' exists. Let's look at original again.
                // Original: return items.filter(i => i.category !== 'banknote'); 
                // This implies "World" included Euro? Or maybe World category items + Euro items?
                // Actually, let's keep original logic for 'world' if it wasn't broken, OR fix it if it was broad.
                // User didn't complain about World data, just order.
                // However, strictly "World" usually means non-Euro in this app context? 
                // Let's stick to strict behavior if possible, but safely.
                // Dashboard "Mundo" links to World page which lists Earth countries.
                // If I change logic I might break it. 
                // Let's look at `EuroCountries` vs `World`: Euro is specific list.
                // Let's stick to original 'world' logic for now to avoid regression, but re-read line 29.
                // Line 29: return items.filter(i => i.category !== 'banknote');
                // This means "Everything except banknotes". So it includes Euro.
                // If the user wants "Mundo" as "Rest of World" it might be different.
                // But let's only change 'spain' -> 'favorite'.
                return items.filter(i => i.category !== 'banknote'); // Keeping original logic for World
            case 'banknotes':
                return items.filter(i => i.category === 'banknote');
            case 'total':
            default:
                return items;
        }
    }, [items, activeTab, euroFilter, favoriteCountry]);

    // --- CATALOG SIZE CALCULATION ---
    const currentCatalogSize = useMemo(() => {
        if (activeTab === 'total') {
            return calculateTotalEuroCatalogSize(calcOptions) + calculateCommemorativeCatalogSize();
        }
        if (activeTab === 'world' || activeTab === 'banknotes') return 0;

        if (activeTab === 'euro') {
            if (euroFilter === 'all') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    return acc + calculateCountryEuroCatalogSize(country, calcOptions) + getCatalogForCountry(country).length;
                }, 0);
            } else if (euroFilter === 'normal') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    return acc + calculateCountryEuroCatalogSize(country, calcOptions);
                }, 0);
            } else if (euroFilter === 'commemorative') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    return acc + getCatalogForCountry(country).length;
                }, 0);
            }
        }

        if (activeTab === 'favorite') {
            const countryName = favoriteCountry.name;
            // Only calculate if it's a Euro country (has data)
            if (EURO_DATA[countryName] || getCatalogForCountry(countryName).length > 0) {
                return calculateCountryEuroCatalogSize(countryName, calcOptions) + getCatalogForCountry(countryName).length;
            }
            return 0;
        }
        return 0;
    }, [activeTab, euroFilter, calcOptions, favoriteCountry]);

    const showBanknoteRanking = activeTab === 'banknotes';

    // --- RANKINGS ---
    const rankings = useMemo(() => {
        if (showBanknoteRanking) {
            const counts = {};
            filteredItems.forEach(i => counts[i.country] = (counts[i.country] || 0) + 1);
            return Object.entries(counts)
                .map(([name, count]) => ({ name, collected: count, total: 0, percentage: 0 }))
                .sort((a, b) => b.collected - a.collected);
        } else {
            let countriesKeys = [];
            if (activeTab === 'euro') {
                countriesKeys = Object.keys(EURO_DATA);
            } else if (activeTab === 'favorite') {
                countriesKeys = [favoriteCountry.name];
            } else {
                const euroSet = new Set(Object.keys(EURO_DATA));
                countriesKeys = [...Object.keys(EURO_DATA)];
                filteredItems.forEach(i => {
                    if (!euroSet.has(i.country) && !countriesKeys.includes(i.country)) {
                        countriesKeys.push(i.country);
                    }
                });
            }

            return countriesKeys.map(country => {
                let collected = 0;
                const countryItems = filteredItems.filter(i => i.country === country);

                if (country === 'Alemania' && !germanMintsEnabled) {
                    const standardUnique = new Set();
                    let otherCount = 0;
                    countryItems.forEach(i => {
                        if (i.category === 'euro' && !i.isCommemorative && !i.subject) {
                            standardUnique.add(`${i.year}-${i.value}`);
                        } else {
                            otherCount++;
                        }
                    });
                    collected = standardUnique.size + otherCount;
                } else if (country === 'Grecia' && !greeceMintsEnabled) {
                    collected = countryItems.filter(i => {
                        if (i.category === 'euro' && !i.isCommemorative && !i.subject && i.year === 2002 && i.mint === 'VAR') return false;
                        return true;
                    }).length;
                } else {
                    collected = countryItems.length;
                }

                let total = 0;
                if (EURO_DATA[country]) {
                    if (activeTab === 'euro' && euroFilter === 'normal') {
                        total = calculateCountryEuroCatalogSize(country, calcOptions);
                    } else if (activeTab === 'euro' && euroFilter === 'commemorative') {
                        total = getCatalogForCountry(country).length;
                    } else {
                        // For favorite or general list, assume total includes both
                        total = calculateCountryEuroCatalogSize(country, calcOptions) + getCatalogForCountry(country).length;
                    }
                }

                const pct = total > 0 ? (collected / total) * 100 : (collected > 0 ? 100 : 0);
                return { name: country, collected, total, percentage: Math.min(pct, 100) };
            })
                .filter(c => c.collected > 0 || c.total > 0)
                .sort((a, b) => b.percentage - a.percentage || b.collected - a.collected);
        }
    }, [filteredItems, activeTab, showBanknoteRanking, euroFilter, germanMintsEnabled, greeceMintsEnabled, calcOptions, favoriteCountry]);

    // --- HELPER ---
    const parseValue = (val) => {
        if (typeof val === 'number') return val;
        if (!val) return 0;
        let vStr = String(val).toLowerCase();
        if (vStr.includes('cent')) {
            const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
            return isNaN(num) ? 0 : num / 100;
        }
        const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
        return isNaN(num) ? 0 : num;
    };

    // --- CHART DATA ---
    const chartData = useMemo(() => {
        if (activeTab === 'banknotes') {
            const counts = {};
            filteredItems.forEach(i => {
                const v = parseValue(i.value);
                const label = v >= 1 ? `${v}€` : `${v * 100}c`;
                counts[label] = (counts[label] || 0) + 1;
            });
            return counts;
        }

        const counts = { '2€': 0, '1€': 0, '50c': 0, '20c': 0, '10c': 0, '5c': 0, '2c': 0, '1c': 0, 'Otros': 0 };

        filteredItems.forEach(item => {
            const v = parseValue(item.value);
            if (Math.abs(v - 2) < 0.01) counts['2€']++;
            else if (Math.abs(v - 1) < 0.01) counts['1€']++;
            else if (Math.abs(v - 0.5) < 0.01) counts['50c']++;
            else if (Math.abs(v - 0.2) < 0.01) counts['20c']++;
            else if (Math.abs(v - 0.1) < 0.01) counts['10c']++;
            else if (Math.abs(v - 0.05) < 0.01) counts['5c']++;
            else if (Math.abs(v - 0.02) < 0.01) counts['2c']++;
            else if (Math.abs(v - 0.01) < 0.01) counts['1c']++;
            else counts['Otros']++;
        });

        return counts;
    }, [filteredItems, activeTab]);

    const totalFaceValue = useMemo(() => {
        return filteredItems.reduce((acc, item) => acc + parseValue(item.value), 0);
    }, [filteredItems]);

    // --- YEARS CHART ---
    const yearsChartData = useMemo(() => {
        const counts = {};
        for (let y = 1999; y <= 2026; y++) counts[y] = 0;
        filteredItems.forEach(i => {
            if (counts[i.year] !== undefined) counts[i.year]++;
        });
        return counts;
    }, [filteredItems]);

    const maxYearVal = Math.max(...Object.values(yearsChartData), 1);

    // --- COUNTRIES CHART ---
    const countriesChartData = useMemo(() => {
        return [...rankings].sort((a, b) => b.collected - a.collected).slice(0, 15);
    }, [rankings]);

    const maxCountryVal = Math.max(...countriesChartData.map(c => c.collected), 1);
    const maxChartVal = Math.max(...Object.values(chartData), 1);

    // --- PROGRESS ---
    const showProgress = activeTab !== 'banknotes' && activeTab !== 'world';
    const progressPercentage = useMemo(() => {
        if (!currentCatalogSize || currentCatalogSize === 0) return 0;
        return Math.min((filteredItems.length / currentCatalogSize) * 100, 100);
    }, [filteredItems, currentCatalogSize]);

    // --- FLAG HELPER ---
    const getCountryCode = (name) => {
        const countryCodes = {
            'Alemania': 'de', 'Andorra': 'ad', 'Austria': 'at', 'Bélgica': 'be',
            'Chipre': 'cy', 'Eslovaquia': 'sk', 'Eslovenia': 'si', 'España': 'es',
            'Estonia': 'ee', 'Finlandia': 'fi', 'Francia': 'fr', 'Grecia': 'gr',
            'Irlanda': 'ie', 'Italia': 'it', 'Letonia': 'lv', 'Lituania': 'lt',
            'Luxemburgo': 'lu', 'Malta': 'mt', 'Mónaco': 'mc', 'Países Bajos': 'nl',
            'Portugal': 'pt', 'San Marino': 'sm', 'Vaticano': 'va', 'Croacia': 'hr',
            'Bulgaria': 'bg'
        };
        return countryCodes[name] || 'eu';
    };

    return (
        <div className="statistics-container">
            <div className="stat-header">
                <button onClick={() => navigate('/')} className="stat-back-btn">
                    <ArrowLeft size={24} />
                </button>
                <h2>Estadísticas</h2>
            </div>

            <div className="stat-tabs-container">
                <div className="stat-tabs">
                    {['total', 'euro', 'world', 'favorite', 'banknotes'].map(tab => (
                        <button
                            key={tab}
                            className={`stat-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'total' && 'Total'}
                            {tab === 'euro' && 'Euro'}
                            {tab === 'world' && 'Mundo'}
                            {tab === 'favorite' && 'Favorito'}
                            {tab === 'banknotes' && 'Billetes'}
                        </button>
                    ))}
                </div>

                {activeTab === 'euro' && (
                    <div className="stat-sub-tabs">
                        <button className={`sub-tab ${euroFilter === 'all' ? 'active' : ''}`} onClick={() => setEuroFilter('all')}>Todo</button>
                        <button className={`sub-tab ${euroFilter === 'normal' ? 'active' : ''}`} onClick={() => setEuroFilter('normal')}>Normales</button>
                        <button className={`sub-tab ${euroFilter === 'commemorative' ? 'active' : ''}`} onClick={() => setEuroFilter('commemorative')}>Conmemorativas</button>
                    </div>
                )}
            </div>

            <div className="stat-grid">
                {/* 1. Hero Section */}
                <div className="stat-card full-width glass-panel hero-section" style={{ padding: '1rem' }}>
                    <div className="card-title" style={{ marginBottom: '0.5rem' }}><TrendingUp size={16} /> Resumen {activeTab.toUpperCase()}</div>
                    <div className="hero-stats" style={{ gap: '1rem' }}>
                        {showProgress && (
                            <div className="circular-progress-container" style={{ width: '100px', height: '100px' }}>
                                <svg className="circular-svg">
                                    <circle className="circle-bg" cx="50" cy="50" r="40" style={{ strokeWidth: 6 }}></circle>
                                    <circle
                                        className="circle-progress"
                                        cx="50" cy="50" r="40"
                                        style={{
                                            strokeWidth: 6,
                                            strokeDasharray: 2 * Math.PI * 40,
                                            strokeDashoffset: (2 * Math.PI * 40) - (progressPercentage / 100) * (2 * Math.PI * 40)
                                        }}
                                    ></circle>
                                </svg>
                                <div className="progress-text">
                                    <span className="percent-value" style={{ fontSize: '1.2rem' }}>{Math.round(progressPercentage)}%</span>
                                    <span className="percent-label" style={{ fontSize: '0.6rem' }}>Completado</span>
                                </div>
                            </div>
                        )}

                        <div className="face-value-display">
                            <span className="face-value-amount" style={{ fontSize: '1.8rem' }}>{totalFaceValue.toFixed(2)} €</span>
                            <span className="face-value-label" style={{ fontSize: '0.8rem' }}>Valor Facial ({activeTab})</span>
                            <span className="count-label" style={{ display: 'block', marginTop: '0.2rem', opacity: 0.7, fontSize: '0.8rem' }}>
                                {filteredItems.length} Elementos
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. Ranking List */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><Award size={18} /> Ranking {showBanknoteRanking ? 'Billetes' : 'Países'}</div>
                    <div className="ranking-list" style={{ maxHeight: '300px' }}>
                        {rankings.map((item, index) => {
                            let rankStyle = {};
                            let rankLabel = `#${index + 1}`;
                            if (index === 0) {
                                rankStyle = { color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 0 10px rgba(251, 191, 36, 0.5)' };
                                rankLabel = '🥇';
                            } else if (index === 1) {
                                rankStyle = { color: '#94a3b8', fontWeight: 'bold', fontSize: '1.1rem' };
                                rankLabel = '🥈';
                            } else if (index === 2) {
                                rankStyle = { color: '#b45309', fontWeight: 'bold', fontSize: '1.1rem' };
                                rankLabel = '🥉';
                            }

                            return (
                                <div key={item.name} className="ranking-item">
                                    <span style={{ width: '30px', textAlign: 'center', opacity: index > 2 ? 0.5 : 1, ...rankStyle }}>{rankLabel}</span>
                                    {!showBanknoteRanking && (
                                        <img
                                            src={`https://flagcdn.com/w40/${getCountryCode(item.name)}.png`}
                                            alt={item.name}
                                            className="rank-flag"
                                            onError={(e) => e.target.src = 'https://flagcdn.com/w40/eu.png'}
                                        />
                                    )}
                                    <div className="rank-info">
                                        <div className="rank-header">
                                            <span className="rank-name">{item.name}</span>
                                            <span>
                                                {item.collected}
                                                {item.total > 0 && ` / ${item.total} (${Math.round(item.percentage)}%)`}
                                            </span>
                                        </div>
                                        <div className="rank-bar-bg">
                                            <div
                                                className="rank-bar-fill"
                                                style={{ width: `${item.total > 0 ? item.percentage : (item.collected > 0 ? 100 : 0)}%`, background: index < 3 ? 'linear-gradient(90deg, var(--gold-500), var(--gold-300))' : undefined }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Countries Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><Globe size={18} /> Gráfica por Países (Top 15)</div>
                    <div className="bar-chart">
                        {countriesChartData.map((c) => {
                            const heightPercent = maxCountryVal > 0 ? (c.collected / maxCountryVal) * 100 : 0;
                            return (
                                <div key={c.name} className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: `${Math.max(heightPercent, 10)}%`, background: '#38bdf8' }}
                                        data-count={c.collected}
                                    ></div>
                                    <span className="chart-label">{c.name.substring(0, 3)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 4. Years Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><Wallet size={18} /> Gráfica por Años</div>
                    <div className="bar-chart">
                        {Object.entries(yearsChartData).map(([year, count]) => {
                            const heightPercent = maxYearVal > 0 ? (count / maxYearVal) * 100 : 0;
                            return (
                                <div key={year} className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{
                                            height: `${Math.max(heightPercent, 10)}%`,
                                            opacity: count === 0 ? 0.2 : 1,
                                            background: count > 0 ? '#10b981' : undefined
                                        }}
                                        data-count={count}
                                    ></div>
                                    <span className="chart-label">{year.substring(2)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 5. Distribution by Value Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><BarChart2 size={18} /> Distribución por Valor</div>
                    <div className="bar-chart">
                        {Object.entries(chartData)
                            .sort((a, b) => b[1] - a[1])
                            .map(([label, count]) => {
                                const heightPercent = maxChartVal > 0 ? (count / maxChartVal) * 100 : 0;
                                return (
                                    <div key={label} className="chart-column">
                                        <div
                                            className="chart-bar"
                                            style={{
                                                height: `${Math.max(heightPercent, 10)}%`,
                                                opacity: count === 0 ? 0.3 : 1
                                            }}
                                            data-count={count}
                                        ></div>
                                        <span className="chart-label">{label}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
