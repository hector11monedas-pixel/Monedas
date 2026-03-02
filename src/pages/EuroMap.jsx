import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { EURO_DATA } from '../data/EuroData';
// import { calculateCountryCatalogSize } from '../utils/emissionUtils';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
// import euroTopo from '../data/europe.topo.json';
import './PageLayout.css';
import './EuroMap.css';

// Map ISO-A2 (from TopoJSON) to our Internal Spanish Names
const COUNTRY_MAPPING = {
    'ES': 'España', 'DE': 'Alemania', 'FR': 'Francia', 'IT': 'Italia',
    'PT': 'Portugal', 'BE': 'Bélgica', 'NL': 'Países Bajos', 'AT': 'Austria',
    'FI': 'Finlandia', 'IE': 'Irlanda', 'GR': 'Grecia', 'LU': 'Luxemburgo',
    'SK': 'Eslovaquia', 'SI': 'Eslovenia', 'EE': 'Estonia', 'LV': 'Letonia',
    'LT': 'Lituania', 'CY': 'Chipre', 'MT': 'Malta', 'MC': 'Mónaco',
    'AD': 'Andorra', 'SM': 'San Marino', 'VA': 'Vaticano', 'HR': 'Croacia', 'BG': 'Bulgaria'
};

// Microstates need markers because they are too small to click easily
// Malta is also smallish but visible, but let's add a marker to be safe or just rely on zoom
const MICROSTATES = ['Andorra', 'Mónaco', 'San Marino', 'Vaticano', 'Malta'];
const MICROSTATE_COORDS = {
    'Andorra': [1.52, 42.50],
    'Mónaco': [7.42, 43.73],
    'San Marino': [12.45, 43.94],
    'Vaticano': [12.45, 41.90],
    'Malta': [14.45, 35.93]
};

const EuroMap = ({ isWidget = false, filterType = 'all' }) => {
    const navigate = useNavigate();
    const { items, loadedGlobalData, germanMintsEnabled, greeceMintsEnabled } = useCoin();
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [topoData, setTopoData] = useState(null);

    // Interactive State (Only used if !isWidget)
    const [zoom, setZoom] = useState(1);
    const [yearFilter, setYearFilter] = useState('all');
    const [valueFilter, setValueFilter] = useState('all');

    React.useEffect(() => {
        import('../data/europe.topo.json').then(data => {
            setTopoData(data.default);
        });
    }, []);

    // Helper: Parse value filter
    const normalizeValue = (valStr) => {
        if (valStr === '2e_comm') return { val: 2, isComm: true };
        if (valStr === '2e_std') return { val: 2, isComm: false };
        if (valStr === 'others') return { val: 'others', isComm: false };
        // simple values: 1e, 50c, etc
        return { val: valStr, isComm: false };
    };

    // Calculate stats for coloring with filters
    const getCompletionStats = (countryName) => {
        if (!countryName) return { level: 0, percent: 0, collected: 0, total: 0 };

        const commData = loadedGlobalData.commemorative;
        const options = { germanMints: germanMintsEnabled, greeceMints: greeceMintsEnabled };
        const countryData = EURO_DATA[countryName];

        // DETERMINE FILTERS
        // If Widget, use filterType prop. Else use local state.
        const useYear = isWidget ? 'all' : yearFilter;

        let targetType = 'all'; // all, normal, commemorative
        let targetValue = 'all'; // all, 2e_comm, 2e_std...

        if (isWidget) {
            targetType = filterType; // 'all', 'normal', 'commemorative'
        } else {
            // Map local valueFilter to types if needed, or just use standard logic
            targetValue = valueFilter;
        }

        // 1. Calculate Total Catalog (Filtered)
        let totalCatalog = 0;

        // A. Standard Catalog Calculation
        if ((targetType === 'all' || targetType === 'normal')) {
            if (countryData && countryData.periods) {
                countryData.periods.forEach(period => {
                    const start = period.start;
                    const end = period.end || new Date().getFullYear();
                    const periodYears = [];
                    for (let y = start; y <= end; y++) periodYears.push(y);

                    periodYears.forEach(year => {
                        // Filter: Year
                        if (useYear !== 'all' && parseInt(useYear) !== year) return;

                        period.denominations.forEach(denom => {
                            // Filter: Value (Local state only)
                            if (!isWidget && targetValue !== 'all') {
                                const vObj = normalizeValue(targetValue);
                                if (vObj.val === '2e_comm') return;
                                if (vObj.val === '2e_std') { if (denom.value !== 2) return; }
                                else {
                                    const mapVal = { '1e': 1, '50c': 0.5, '20c': 0.2, '10c': 0.1, '5c': 0.05, '2c': 0.02, '1c': 0.01 };
                                    if (denom.value !== mapVal[targetValue]) return;
                                }
                            }

                            // Mints Logic
                            if (countryName === 'Alemania' && options.germanMints) {
                                totalCatalog += 5;
                            } else if (countryName === 'Grecia' && options.greeceMints && year === 2002 && (denom.value === 2 || denom.value === 1 || denom.value === 0.5 || denom.value === 0.2 || denom.value === 0.1 || denom.value === 0.05 || denom.value === 0.02 || denom.value === 0.01)) {
                                totalCatalog += 1;
                                if (year === 2002 && denom.value !== 2 && denom.value !== 0.02 && denom.value !== 0.01) totalCatalog += 1;
                            } else {
                                totalCatalog += 1;
                            }
                        });
                    });
                });
            }
        }

        // B. Commemorative Catalog Calculation
        if (targetType === 'all' || targetType === 'commemorative') {
            // If local filter is set to standard-only values, skip comms
            let skipComms = false;
            if (!isWidget && targetValue !== 'all') {
                const vObj = normalizeValue(targetValue);
                if (vObj.val !== '2e_comm' && targetValue !== 'all') skipComms = true;
            }

            if (!skipComms) {
                const commCatalog = commData ? commData.getCatalogForCountry(countryName) : [];
                let filteredComm = commCatalog;

                if (useYear !== 'all') {
                    filteredComm = filteredComm.filter(c => c.year === parseInt(useYear));
                }

                totalCatalog += filteredComm.length;
            }
        }

        if (totalCatalog === 0) return { percent: 0, level: 0, collected: 0, total: 0 };


        // 2. Calculate Collected (Filtered)
        const countryItems = (items || []).filter(i => i.country === countryName && i.category === 'euro');
        let collectedCount = 0;
        const uniqueSlots = new Set();

        countryItems.forEach(i => {
            // Filter Year
            if (useYear !== 'all' && parseInt(i.year) !== parseInt(useYear)) return;

            // Filter Type (Widget Mode)
            if (isWidget) {
                if (targetType === 'normal' && i.isCommemorative) return;
                if (targetType === 'commemorative' && !i.isCommemorative) return;
            }

            // Filter Value (Local Mode)
            if (!isWidget && targetValue !== 'all') {
                const vObj = normalizeValue(targetValue);
                if (vObj.val === '2e_comm') {
                    if (!i.isCommemorative) return;
                } else if (vObj.val === '2e_std') {
                    if (i.isCommemorative || parseFloat(i.value) !== 2) return;
                } else {
                    const mapVal = { '1e': 1, '50c': 0.5, '20c': 0.2, '10c': 0.1, '5c': 0.05, '2c': 0.02, '1c': 0.01 };
                    if (i.isCommemorative) return;
                    if (Math.abs(parseFloat(i.value) - mapVal[targetValue]) > 0.001) return;
                }
            }

            // Counting Logic
            if (countryName === 'Alemania' && !germanMintsEnabled) {
                const key = `${i.year}-${i.value}-${i.isCommemorative ? 'c' : 's'}-${i.subject || ''}`;
                uniqueSlots.add(key);
            } else if (countryName === 'Grecia' && !greeceMintsEnabled) {
                if (i.year === 2002 && i.mint === 'VAR') return;
                collectedCount++;
            } else {
                collectedCount++;
            }
        });

        if (countryName === 'Alemania' && !germanMintsEnabled) {
            collectedCount = uniqueSlots.size;
        }

        const percent = Math.min(100, Math.round((collectedCount / totalCatalog) * 100));

        // 3. Determine Level
        let level = 0;
        if (percent > 0 && percent < 20) level = 1;
        else if (percent >= 20 && percent < 50) level = 2;
        else if (percent >= 50 && percent < 80) level = 3;
        else if (percent >= 80) level = 4;

        return { percent, level, collected: collectedCount, total: totalCatalog };
    };

    // Color Palette per Level
    const getFillColor = (level) => {
        switch (level) {
            case 4: return "#00bcd4"; // Diamond
            case 3: return "#ffd700"; // Gold
            case 2: return "#b0bec5"; // Silver
            case 1: return "#8d6e63"; // Bronze
            default: return "#37474f"; // Empty/Base (Dark Grey)
        }
    };

    const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.5, 8));
    const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.5, 1));
    const handleResetZoom = () => setZoom(1);

    // Generate Range of Years
    const years = Array.from({ length: 2026 - 1999 + 1 }, (_, i) => 2026 - i);

    return (
        <div className="euro-map-container" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: isWidget ? 'transparent' : '#121212', overflow: 'hidden' }}>

            {/* Controls Header - Hide in Widget Mode */}
            {!isWidget && (
                <div className="map-controls" style={{
                    padding: '10px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    overflowX: 'auto',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <select
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                        className="map-select"
                        style={{ background: '#222', color: '#fff', border: '1px solid #444', padding: '5px 10px', borderRadius: '6px' }}
                    >
                        <option value="all">Todos los Años</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>

                    <select
                        value={valueFilter}
                        onChange={(e) => setValueFilter(e.target.value)}
                        className="map-select"
                        style={{ background: '#222', color: '#fff', border: '1px solid #444', padding: '5px 10px', borderRadius: '6px' }}
                    >
                        <option value="all">Todos los Valores</option>
                        <option value="2e_comm">2€ Conmemorativas</option>
                        <option value="2e_std">2€ Normales</option>
                        <option value="1e">1 Euro</option>
                        <option value="50c">50 Cent</option>
                        {/* Others could be added */}
                    </select>

                    <div className="zoom-controls" style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
                        <button onClick={handleResetZoom} style={{ padding: '5px 10px', background: '#333', border: 'none', borderRadius: '4px', color: '#fff' }}>Fit</button>
                        <button onClick={handleZoomOut} style={{ padding: '5px 10px', background: '#333', border: 'none', borderRadius: '4px', color: '#fff' }}>-</button>
                        <button onClick={handleZoomIn} style={{ padding: '5px 10px', background: '#333', border: 'none', borderRadius: '4px', color: '#fff' }}>+</button>
                    </div>
                </div>
            )}

            {/* Map Container - Flex Grow */}
            <div style={{ flex: 1, position: 'relative', width: "100%", overflow: 'hidden' }}>
                <ComposableMap
                    width={800}
                    height={600}
                    preserveAspectRatio="xMidYMid meet"
                    projection="geoAzimuthalEqualArea"
                    projectionConfig={{
                        rotate: [-10.0, -52.0, 0], /* Centered on Europe (Germany/Poland) */
                        scale: isWidget ? 1200 : 1050 /* Slightly larger in widget to fill space better */
                    }}
                    style={{ width: "100%", height: "100%", background: isWidget ? "transparent" : "#1a252f" }}
                >
                    <ZoomableGroup
                        zoom={zoom}
                        onMoveEnd={({ zoom: newZoom }) => setZoom(newZoom)}
                        minZoom={1}
                        maxZoom={8}
                        disablePanning={isWidget} // Optional: Disable panning in widget
                        disableZooming={isWidget} // Maybe keep simple for widget
                    >
                        {topoData && (
                            <Geographies geography={topoData}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const iso = geo.properties["hc-a2"];
                                        const countryName = COUNTRY_MAPPING[iso];
                                        const isEurozone = !!countryName;
                                        const stats = isEurozone ? getCompletionStats(countryName) : { level: 0 };

                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    if (isEurozone) setHoveredCountry(countryName);
                                                }}
                                                onMouseLeave={() => setHoveredCountry(null)}
                                                onClick={() => {
                                                    if (isEurozone && !isWidget) navigate(`/euro/normal/${countryName}`);
                                                }}
                                                fill={isEurozone ? getFillColor(stats.level) : "#263238"}
                                                stroke="#121212"
                                                strokeWidth={0.5 / zoom}
                                                style={{
                                                    default: { outline: "none", transition: "all 0.3s ease" },
                                                    hover: {
                                                        fill: isEurozone ? getFillColor(stats.level) : "#263238",
                                                        filter: isEurozone ? "brightness(1.3)" : "none",
                                                        outline: "none",
                                                        cursor: isEurozone && !isWidget ? "pointer" : "default"
                                                    },
                                                    pressed: { outline: "none" }
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>
                        )}

                        {/* Markers for Microstates */}
                        {MICROSTATES.map(name => {
                            const stats = getCompletionStats(name);
                            const coords = MICROSTATE_COORDS[name];
                            if (!coords) return null;

                            return (
                                <Marker key={name} coordinates={coords}>
                                    <circle
                                        r={4 / zoom}
                                        fill={getFillColor(stats.level)}
                                        stroke="#fff"
                                        strokeWidth={1 / zoom}
                                        style={{ cursor: isWidget ? 'default' : 'pointer', transition: 'all 0.3s' }}
                                        onClick={() => !isWidget && navigate(`/euro/normal/${name}`)}
                                        onMouseEnter={() => setHoveredCountry(name)}
                                        onMouseLeave={() => setHoveredCountry(null)}
                                    />
                                </Marker>
                            );
                        })}
                    </ZoomableGroup>
                </ComposableMap>

                {/* Tooltip-like Label (Kept absolute over map) */}
                {hoveredCountry && (
                    <div style={{
                        position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
                        background: 'rgba(0,0,0,0.8)', padding: '0.5rem 1rem', borderRadius: '12px',
                        pointerEvents: 'none', border: '1px solid var(--primary-color)',
                        zIndex: 100, backdropFilter: 'blur(5px)'
                    }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'block', textAlign: 'center' }}>{hoveredCountry}</span>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: getFillColor(getCompletionStats(hoveredCountry).level), textAlign: 'center' }}>
                            {getCompletionStats(hoveredCountry).collected} / {getCompletionStats(hoveredCountry).total} ({getCompletionStats(hoveredCountry).percent}%)
                        </span>
                    </div>
                )}
            </div>

            {/* Legend Footer - Static Bottom Box */}
            <div className="map-legend-footer" style={{ background: isWidget ? 'transparent' : '#121212', borderTop: isWidget ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span className="legend-item"><span className="dot l0"></span> 0%</span>
                    <span className="legend-item"><span className="dot l1"></span> 1-20%</span>
                    <span className="legend-item"><span className="dot l2"></span> 20-50%</span>
                    <span className="legend-item"><span className="dot l3"></span> 50-80%</span>
                    <span className="legend-item"><span className="dot l4"></span> +80%</span>
                </div>
            </div>
        </div>
    );
};

export default EuroMap;
