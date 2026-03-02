import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { EURO_DATA } from '../data/EuroData';
import { calculateCountryCatalogSize, calculateTotalNormalEuroCatalogSize, calculateWorldCatalogSize } from '../utils/emissionUtils';
import { getItemValuation } from '../utils/priceUtils';
import { BANKNOTE_DATA } from '../data/BanknoteData';
import { ArrowLeft, TrendingUp, Award, BarChart2, Globe, Wallet, Calendar } from 'lucide-react';
import WorldMap from '../components/common/WorldMap';
import EuroMap from './EuroMap';
import './Statistics.css';

const Statistics = () => {
    const navigate = useNavigate();
    const { items, germanMintsEnabled, greeceMintsEnabled, favoriteCountry, loadedGlobalData } = useCoin();
    const [activeTab, setActiveTab] = useState('total'); // total, euro, world, favorite, banknotes
    const [euroFilter, setEuroFilter] = useState('all'); // all, normal, commemorative
    const [includeDuplicates, setIncludeDuplicates] = useState(true);

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
                // "Mundo" means everything NOT Euro and NOT Banknote
                return items.filter(i => {
                    const isEuro = i.category === 'euro' || i.category === 'commemorative';
                    const isBanknote = i.category === 'banknote';
                    return !isEuro && !isBanknote;
                });
            case 'banknotes':
                return items.filter(i => i.category === 'banknote');
            case 'total':
            default:
                return items;
        }
    }, [items, activeTab, euroFilter, favoriteCountry]);

    // --- MAP COUNTRIES ---
    const mapCountries = useMemo(() => {
        if (activeTab === 'banknotes' || activeTab === 'world') {
            return Array.from(new Set(filteredItems.map(i => i.country)));
        }
        return null;
    }, [filteredItems, activeTab]);

    // --- CATALOG SIZE CALCULATION ---
    const currentCatalogSize = useMemo(() => {
        if (activeTab === 'total') {
            const normalEuroSize = calculateTotalNormalEuroCatalogSize(calcOptions);
            const commSize = loadedGlobalData.commemorative
                ? loadedGlobalData.commemorative.calculateCommemorativeCatalogSize()
                : 0;
            const worldSize = calculateWorldCatalogSize('República Checa', loadedGlobalData) +
                calculateWorldCatalogSize('Afganistán', loadedGlobalData) +
                calculateWorldCatalogSize('España', loadedGlobalData);
            return normalEuroSize + commSize + worldSize;
        }
        if (activeTab === 'world' || activeTab === 'banknotes') return 0; // No fixed catalog for world/banknotes

        if (activeTab === 'euro') {
            const commData = loadedGlobalData.commemorative;
            if (euroFilter === 'all') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    const commLength = commData ? commData.getCatalogForCountry(country).length : 0;
                    return acc + calculateCountryCatalogSize(country, calcOptions) + commLength;
                }, 0);
            } else if (euroFilter === 'normal') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    return acc + calculateCountryCatalogSize(country, calcOptions);
                }, 0);
            } else if (euroFilter === 'commemorative') {
                return Object.keys(EURO_DATA).reduce((acc, country) => {
                    const commLength = commData ? commData.getCatalogForCountry(country).length : 0;
                    return acc + commLength;
                }, 0);
            }
        }

        if (activeTab === 'favorite') {
            const countryName = favoriteCountry.name;
            if (EURO_DATA[countryName]) {
                const commLength = loadedGlobalData.commemorative ? loadedGlobalData.commemorative.getCatalogForCountry(countryName).length : 0;
                let total = calculateCountryCatalogSize(countryName, calcOptions) + commLength;
                if (countryName === 'España' || countryName === 'República Checa' || countryName === 'Afganistán') {
                    total += calculateWorldCatalogSize(countryName, loadedGlobalData);
                }
                return total;
            }
            return 0;
        }
        return 0;
    }, [activeTab, euroFilter, calcOptions, favoriteCountry, loadedGlobalData]);

    const showBanknoteRanking = activeTab === 'banknotes';
    const showWorldRanking = activeTab === 'world';

    // --- RANKINGS ---
    const rankings = useMemo(() => {
        if (showBanknoteRanking) {
            const counts = {};
            filteredItems.forEach(i => counts[i.country] = (counts[i.country] || 0) + 1);
            return Object.entries(counts)
                .map(([name, count]) => ({ name, collected: count, total: 0, percentage: 0 }))
                .sort((a, b) => b.collected - a.collected);
        } else if (showWorldRanking) {
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
                // Total: Euro countries + any other country present
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

                // Use a Set to count unique holes for this country
                const uniqueHoles = new Set();
                countryItems.forEach(i => {
                    let dId = i.denomId;

                    // HEALING: If denomId is missing for Spain, try to resolve it
                    if (!dId && i.country === 'España' && loadedGlobalData.spain) {
                        const sData = loadedGlobalData.spain;
                        const yr = parseInt(i.year);
                        const val = parseFloat(i.value);
                        const allLists = [sData.SPAIN_JC1_DENOMINATIONS, sData.SPAIN_FRANCO_DENOMINATIONS, sData.SPAIN_REPUBLIC_DENOMINATIONS, sData.SPAIN_CW_LOCAL_DENOMINATIONS];
                        for (const list of allLists) {
                            const match = list.find(d => sData.getSpainCoinStatus(yr, val, d.id) !== 'not_issued');
                            if (match) {
                                dId = match.id;
                                break;
                            }
                        }
                    }

                    const holeKey = [
                        i.country,
                        i.year,
                        i.value,
                        i.category,
                        i.isCommemorative ? 'comm' : 'std',
                        i.variantId || 'base',
                        dId || 'base'
                    ].join('|');

                    if (i.country === 'Alemania' && !germanMintsEnabled) {
                        uniqueHoles.add(holeKey);
                    } else if (i.country === 'Grecia' && !greeceMintsEnabled) {
                        if (i.year === 2002 && i.mint === 'VAR') return;
                        uniqueHoles.add(`${holeKey}|${i.mint || 'std'}`);
                    } else {
                        uniqueHoles.add(`${holeKey}|${i.mint || 'std'}`);
                    }
                });

                collected = uniqueHoles.size;

                let total = 0;
                if (EURO_DATA[country]) {
                    const commData = loadedGlobalData.commemorative;
                    if (activeTab === 'euro' && euroFilter === 'normal') {
                        total = calculateCountryCatalogSize(country, calcOptions);
                    } else if (activeTab === 'euro' && euroFilter === 'commemorative') {
                        total = commData ? commData.getCatalogForCountry(country).length : 0;
                    } else {
                        // Default logic
                        const commLength = commData ? commData.getCatalogForCountry(country).length : 0;
                        total = calculateCountryCatalogSize(country, calcOptions) + commLength;

                        // FIX: Add World Catalog (Pesetas) for Spain if we are not in Euro-only mode
                        if ((activeTab === 'total' || activeTab === 'favorite') && country === 'España') {
                            total += calculateWorldCatalogSize('España', loadedGlobalData);
                        }
                    }
                } else if (country === 'República Checa' || country === 'Afganistán' || country === 'España') {
                    total = calculateWorldCatalogSize(country, loadedGlobalData);
                }

                const pct = total > 0 ? (collected / total) * 100 : (collected > 0 ? 100 : 0);
                return { name: country, collected, total, percentage: Math.min(pct, 100) };
            })
                .filter(c => c.collected > 0 || c.total > 0)
                .sort((a, b) => b.percentage - a.percentage || b.collected - a.collected);
        }
    }, [filteredItems, activeTab, showBanknoteRanking, showWorldRanking, euroFilter, germanMintsEnabled, greeceMintsEnabled, calcOptions, favoriteCountry, loadedGlobalData]);

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



    // --- CHART MODES ---
    const [chartMode, setChartMode] = useState('count'); // 'count' | 'value'

    // --- CHART DATA ---
    const chartData = useMemo(() => {
        // ... (existing distribution logic kept for value vs denomination, maybe just keep as count for now?)
        // Distribution by Face Value text is usually count based. Let's keep it count for now to avoid confusion.
        if (activeTab === 'banknotes') {
            const counts = {};
            filteredItems.forEach(i => {
                const v = parseValue(i.value);
                const label = v >= 1 ? `${v}€` : `${v * 100}c`;
                counts[label] = (counts[label] || 0) + 1;
            });
            return Object.entries(counts).sort((a, b) => parseFloat(a[0]) - parseFloat(b[0])).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
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
        return filteredItems.reduce((acc, item) => {
            const valuation = getItemValuation(item);
            const qty = includeDuplicates ? (parseInt(item.quantity) || 1) : 1;
            return acc + (valuation.faceValue * qty);
        }, 0);
    }, [filteredItems, includeDuplicates]);

    const totalEstimatedValue = useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            const valuation = getItemValuation(item);
            const qty = includeDuplicates ? (parseInt(item.quantity) || 1) : 1;
            return acc + (valuation.estimatedValue * qty);
        }, 0);
    }, [filteredItems, includeDuplicates]);

    const totalPieces = useMemo(() => {
        return filteredItems.reduce((acc, item) => acc + (includeDuplicates ? (parseInt(item.quantity) || 1) : 1), 0);
    }, [filteredItems, includeDuplicates]);

    const totalInvestment = useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            const purchasePrice = parseFloat(item.purchasePrice) || 0;
            if (!includeDuplicates) {
                // If we don't include duplicates, we show the proportion for one unit
                const qty = parseInt(item.quantity) || 1;
                return acc + (purchasePrice / qty);
            }
            return acc + purchasePrice;
        }, 0);
    }, [filteredItems, includeDuplicates]);

    const profit = useMemo(() => {
        return totalEstimatedValue - totalInvestment;
    }, [totalEstimatedValue, totalInvestment]);


    // --- YEARS CHART (Count AND Value) ---
    const yearsChartData = useMemo(() => {
        const data = {};
        if (filteredItems.length === 0) return {};

        const years = filteredItems.map(i => parseInt(i.year)).filter(y => !isNaN(y));
        if (years.length === 0) return {};

        const min = Math.min(1999, ...years);
        const max = Math.max(2026, ...years);

        for (let y = min; y <= max; y++) data[y] = 0;

        filteredItems.forEach(i => {
            const y = parseInt(i.year);
            if (!isNaN(y) && data[y] !== undefined) {
                if (chartMode === 'value') {
                    data[y] += getItemValuation(i).estimatedValue;
                } else {
                    data[y]++;
                }
            }
        });
        return data;
    }, [filteredItems, chartMode]);

    const maxYearVal = Math.max(...Object.values(yearsChartData), 1);

    // --- COUNTRIES CHART (Count AND Value) ---
    const countriesChartData = useMemo(() => {
        if (chartMode === 'value') {
            // Group by country and sum value
            const sums = {};
            filteredItems.forEach(i => {
                const val = getItemValuation(i).estimatedValue;
                sums[i.country] = (sums[i.country] || 0) + val;
            });
            return Object.entries(sums)
                .map(([name, val]) => ({ name, value: val }))
                .sort((a, b) => b.value - a.value)
                .slice(0, 15);
        } else {
            // Use existing ranking logic but adaptable
            return rankings.slice(0, 15).map(r => ({ name: r.name, value: r.collected }));
        }
    }, [rankings, filteredItems, chartMode]);

    const maxCountryVal = Math.max(...countriesChartData.map(c => c.value), 1);
    const maxChartVal = Math.max(...Object.values(chartData), 1);

    // --- TOP 10 ITEMS ---
    const topItems = useMemo(() => {
        return [...filteredItems]
            .map(item => ({ ...item, ...getItemValuation(item) }))
            .sort((a, b) => b.estimatedValue - a.estimatedValue)
            .slice(0, 10)
            .filter(i => i.estimatedValue > 0);
    }, [filteredItems]);

    // --- PROGRESS ---
    const showProgress = activeTab !== 'banknotes' && activeTab !== 'world';
    const progressPercentage = useMemo(() => {
        if (!currentCatalogSize || currentCatalogSize === 0) return 0;
        const totalCollected = rankings.reduce((acc, r) => acc + r.collected, 0);
        return Math.min((totalCollected / currentCatalogSize) * 100, 100);
    }, [rankings, currentCatalogSize]);

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

    // --- EVOLUTION CHART (Value Over Time) ---
    const evolutionChartData = useMemo(() => {
        // Sort items by date acquired (createdAt or id)
        const sorted = [...filteredItems].sort((a, b) => {
            const da = a.createdAt?.seconds ? new Date(a.createdAt.seconds * 1000) : (a.id ? new Date(Number(a.id)) : new Date(0));
            const db = b.createdAt?.seconds ? new Date(b.createdAt.seconds * 1000) : (b.id ? new Date(Number(b.id)) : new Date(0));
            return da - db;
        });

        let accumulatedInvestment = 0;
        let accumulatedValue = 0;
        const monthMap = new Map();

        sorted.forEach(item => {
            const date = item.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000) : (item.id ? new Date(Number(item.id)) : new Date(0));
            if (!date || isNaN(date.getTime()) || date.getFullYear() < 2020) return; // Filter erratic dates

            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            accumulatedInvestment += parseFloat(item.purchasePrice) || 0;
            accumulatedValue += getItemValuation(item).estimatedValue;

            monthMap.set(key, {
                date: key,
                investment: accumulatedInvestment,
                value: accumulatedValue
            });
        });

        // Convert map to array and fill gaps? Ideally yes, but let's keep it simple: points available.
        // Actually, accumulation should persist. If a month has no activity, it holds previous value.
        // Let's iterate months from start to end if needed, or just use data points.
        // Using data points:
        return Array.from(monthMap.values());
    }, [filteredItems]);


    // SVG Helper for Evolution Chart
    const renderEvolutionChart = () => {
        if (evolutionChartData.length < 2) return <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Datos insuficientes para la gráfica de evolución temporal.</div>;

        const width = 100; // viewBox units
        const height = 50;
        const padding = 5;

        const maxVal = Math.max(...evolutionChartData.map(d => Math.max(d.investment, d.value)), 10);

        // Polylines
        const getPoints = (key) => {
            return evolutionChartData.map((d, i) => {
                const x = padding + (i / (evolutionChartData.length - 1)) * (width - 2 * padding);
                const y = height - padding - (d[key] / maxVal) * (height - 2 * padding);
                return `${x},${y}`;
            }).join(' ');
        };

        const pointsInv = getPoints('investment');
        const pointsVal = getPoints('value');

        return (
            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Grid Lines (Horizontal) */}
                    {[0, 0.25, 0.5, 0.75, 1].map(t => (
                        <line key={t} x1={padding} y1={height - padding - t * (height - 2 * padding)} x2={width - padding} y2={height - padding - t * (height - 2 * padding)} stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" />
                    ))}

                    {/* Investment Line (Red/Orange) */}
                    <polyline points={pointsInv} fill="none" stroke="#f97316" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Value Line (Green) */}
                    <polyline points={pointsVal} fill="none" stroke="#22c55e" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Area under Value (Optional, gradient) */}
                    <defs>
                        <linearGradient id="gradVal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon points={`${padding},${height - padding} ${pointsVal} ${width - padding},${height - padding}`} fill="url(#gradVal)" />

                </svg>

                {/* Legend Overlay */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '15px', fontSize: '0.75rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '10px', height: '10px', background: '#f97316', borderRadius: '50%' }}></div> Inversión
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }}></div> Valor Est.
                    </div>
                </div>
            </div>
        );
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
                            <span className="face-value-label" style={{ fontSize: '0.8rem' }}>Valor Facial Total</span>
                            <div className="count-label" style={{ marginTop: '0.4rem', opacity: 0.8, fontSize: '0.9rem', display: 'flex', gap: '8px', color: '#38bdf8' }}>
                                <span><b>{filteredItems.length}</b> Artículos</span>
                                <span style={{ opacity: 0.5 }}>|</span>
                                <span style={{ color: '#fbbf24' }}><b>{totalPieces}</b> Piezas</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '1rem' }}>
                                <div className="stat-mini-pill" style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.6, display: 'block' }}>Inversión</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{totalInvestment.toFixed(2)} €</span>
                                </div>
                                <div className="stat-mini-pill" style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '10px', borderRadius: '12px' }}>
                                    <span style={{ fontSize: '0.7rem', color: '#4ade80', opacity: 0.8, display: 'block' }}>Valor Mercado</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#4ade80' }}>{totalEstimatedValue.toFixed(2)} €</span>
                                </div>
                            </div>

                            <div className="roi-display" style={{
                                marginTop: '10px',
                                padding: '10px',
                                borderRadius: '12px',
                                background: profit >= 0 ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid',
                                borderColor: profit >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                                textAlign: 'center'
                            }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Revalorización: </span>
                                <span style={{ fontWeight: 'bold', color: profit >= 0 ? '#4ade80' : '#ef4444' }}>
                                    {profit >= 0 ? '+' : ''}{profit.toFixed(2)} €
                                    ({totalInvestment > 0 ? ((profit / totalInvestment) * 100).toFixed(1) : '0'}%)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VISUALIZATION TOGGLE */}
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
                        <button
                            onClick={() => setChartMode('count')}
                            style={{
                                padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                                background: chartMode === 'count' ? 'var(--primary-color)' : 'transparent',
                                color: chartMode === 'count' ? 'var(--bg-primary)' : '#aaa',
                                fontWeight: 'bold', fontSize: '0.8rem'
                            }}
                        >
                            Cantidad
                        </button>
                        <button
                            onClick={() => setChartMode('value')}
                            style={{
                                padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                                background: chartMode === 'value' ? 'var(--primary-color)' : 'transparent',
                                color: chartMode === 'value' ? 'var(--bg-primary)' : '#aaa',
                                fontWeight: 'bold', fontSize: '0.8rem'
                            }}
                        >
                            Valor
                        </button>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.75rem', opacity: 0.7, marginLeft: '8px' }}>Incluir Repetidas</span>
                        <div
                            onClick={() => setIncludeDuplicates(!includeDuplicates)}
                            style={{
                                width: '36px',
                                height: '20px',
                                background: includeDuplicates ? 'var(--primary-color)' : 'rgba(255,255,255,0.2)',
                                borderRadius: '10px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '14px',
                                height: '14px',
                                background: 'white',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '3px',
                                left: includeDuplicates ? '19px' : '3px',
                                transition: 'all 0.3s ease'
                            }}></div>
                        </div>
                    </div>
                </div>

                {/* NEW: Map for Banknotes OR World */}
                {(activeTab === 'banknotes' || activeTab === 'world') && (
                    <div className="stat-card glass-panel full-width" style={{ height: '400px', padding: 0, overflow: 'hidden' }}>
                        <div className="card-title" style={{ padding: '1rem', margin: 0, background: 'rgba(0,0,0,0.2)' }}>
                            <Globe size={18} /> Mapa de {activeTab === 'banknotes' ? 'Billetes' : 'Monedas del Mundo'}
                        </div>
                        <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                            <WorldMap highlightedCountries={mapCountries} interactive={false} />
                        </div>
                    </div>
                )}

                {/* NEW: Map for Euro */}
                {activeTab === 'euro' && (
                    <div className="stat-card glass-panel full-width" style={{ height: '500px', padding: 0, overflow: 'hidden' }}>
                        <div className="card-title" style={{ padding: '1rem', margin: 0, background: 'rgba(0,0,0,0.2)' }}>
                            <Globe size={18} /> Mapa de Completitud Euro
                        </div>
                        <div style={{ flex: 1, width: '100%', position: 'relative' }}>
                            <EuroMap isWidget={true} filterType={euroFilter} />
                        </div>
                    </div>
                )}

                {/* 3. Countries Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title">
                        <Globe size={18} />
                        {chartMode === 'value' ? ' Valor por Países (Top 15)' : ' Monedas por Países (Top 15)'}
                    </div>
                    <div className="bar-chart">
                        {countriesChartData.map((c) => {
                            const heightPercent = maxCountryVal > 0 ? (c.value / maxCountryVal) * 100 : 0;
                            return (
                                <div key={c.name} className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: `${Math.max(heightPercent, 10)}%`, background: chartMode === 'value' ? '#4ade80' : '#38bdf8' }}
                                        data-count={chartMode === 'value' ? `${c.value.toFixed(0)}€` : c.value}
                                    ></div>
                                    <span className="chart-label">{c.name.substring(0, 3)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 4. Years Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title">
                        <Wallet size={18} />
                        {chartMode === 'value' ? ' Valor por Años' : ' Monedas por Años'}
                    </div>
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
                                            background: count > 0 ? (chartMode === 'value' ? '#4ade80' : '#10b981') : undefined
                                        }}
                                        data-count={chartMode === 'value' ? (count > 0 ? `${count.toFixed(0)}` : '') : count}
                                    ></div>
                                    <span className="chart-label">{year.substring(2)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* NEW: Evolution Chart */}
                {activeTab === 'total' && (
                    <div className="stat-card glass-panel full-width">
                        <div className="card-title"><Calendar size={18} /> Crecimiento de la Colección</div>
                        {renderEvolutionChart()}
                    </div>
                )}

                {/* NEW: Top 10 Valuable Items */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title" style={{ color: '#ffd700' }}><Award size={18} /> Top 10 Joyas de la Colección</div>
                    <div className="ranking-list">
                        {topItems.map((item, index) => (
                            <div key={item.id || index} className="ranking-item">
                                <span style={{ fontWeight: 'bold', color: '#ffd700', width: '20px' }}>{index + 1}.</span>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                                        {item.value} {item.unit || '€'} - {item.country} {item.year}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                        {item.subject || (item.isCommemorative ? 'Conmemorativa' : 'Serie Normal')}
                                    </span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ display: 'block', fontWeight: 'bold', color: '#4ade80', fontSize: '1.1rem' }}>
                                        {item.estimatedValue.toFixed(2)} €
                                    </span>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>Est.</span>
                                </div>
                            </div>
                        ))}
                        {topItems.length === 0 && <p style={{ padding: '1rem', opacity: 0.5, textAlign: 'center' }}>No hay datos de valor disponibles.</p>}
                    </div>
                </div>

                {/* 2. Ranking List (Standard) */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><BarChart2 size={18} /> Ranking de Completitud</div>
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

                {/* 5. Distribution by Value Chart */}
                <div className="stat-card glass-panel full-width">
                    <div className="card-title"><BarChart2 size={18} /> Distribución por Denominación</div>
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
