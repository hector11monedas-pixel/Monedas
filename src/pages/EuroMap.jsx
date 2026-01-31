import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { getCatalogForCountry } from '../data/CommemorativeCatalog';
import { EURO_DATA } from '../data/EuroData';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import euroTopo from '../data/europe.topo.json';
import './PageLayout.css';
import './EuroMap.css';

// Map ISO-A2 (from TopoJSON) to our Internal Spanish Names
const COUNTRY_MAPPING = {
    'ES': 'España', 'DE': 'Alemania', 'FR': 'Francia', 'IT': 'Italia',
    'PT': 'Portugal', 'BE': 'Bélgica', 'NL': 'Países Bajos', 'AT': 'Austria',
    'FI': 'Finlandia', 'IE': 'Irlanda', 'GR': 'Grecia', 'LU': 'Luxemburgo',
    'SK': 'Eslovaquia', 'SI': 'Eslovenia', 'EE': 'Estonia', 'LV': 'Letonia',
    'LT': 'Lituania', 'CY': 'Chipre', 'MT': 'Malta', 'MC': 'Mónaco',
    'AD': 'Andorra', 'SM': 'San Marino', 'VA': 'Vaticano', 'HR': 'Croacia'
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

const EuroMap = () => {
    const navigate = useNavigate();
    const { items } = useCoin();
    const [hoveredCountry, setHoveredCountry] = useState(null);

    // Calculate stats for coloring
    const getCompletionStats = (countryName) => {
        if (!countryName) return { level: 0, percent: 0 };

        // 1. Calculate Total Catalog
        const commCatalog = getCatalogForCountry(countryName);
        const commTotal = commCatalog.reduce((acc, item) => acc + (item.variants ? item.variants.length : 1), 0);

        const euroStartYear = EURO_DATA[countryName]?.startYear || 2002;
        const yearsCount = (2026 - euroStartYear) + 1;
        const standardTotal = Math.max(0, yearsCount * 8);

        const totalCatalog = commTotal + standardTotal;
        if (totalCatalog === 0) return { percent: 0, level: 0 };

        // 2. Calculate Collected
        const userItems = (items || []).filter(i => i.category === 'euro' && i.country === countryName);
        const collectedCount = userItems.length;

        const percent = Math.min(100, Math.round((collectedCount / totalCatalog) * 100));

        // 3. Determine Level
        let level = 0;
        if (percent > 0 && percent < 20) level = 1; // Bronze
        else if (percent >= 20 && percent < 50) level = 2; // Silver
        else if (percent >= 50 && percent < 80) level = 3; // Gold
        else if (percent >= 80) level = 4; // Diamond

        return { percent, level };
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

    return (
        <div className="euro-map-container" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#121212', overflow: 'hidden' }}>

            {/* Map Container - Flex Grow */}
            <div style={{ flex: 1, position: 'relative', width: "100%", overflow: 'hidden' }}>
                <ComposableMap
                    width={800}
                    height={600}
                    preserveAspectRatio="xMidYMid meet"
                    projection="geoAzimuthalEqualArea"
                    projectionConfig={{
                        rotate: [-10.0, -52.0, 0], /* Centered on Europe (Germany/Poland) */
                        scale: 1050 /* Slightly reduced zoom (was 1100) */
                    }}
                    style={{ width: "100%", height: "100%", background: "#1a252f" }}
                >
                    <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
                        <Geographies geography={euroTopo}>
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
                                                if (isEurozone) navigate(`/euro/normal/${countryName}`);
                                            }}
                                            fill={isEurozone ? getFillColor(stats.level) : "#263238"}
                                            stroke="#121212"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none", transition: "all 0.3s ease" },
                                                hover: {
                                                    fill: isEurozone ? getFillColor(stats.level) : "#263238",
                                                    filter: isEurozone ? "brightness(1.3)" : "none",
                                                    outline: "none",
                                                    cursor: isEurozone ? "pointer" : "default"
                                                },
                                                pressed: { outline: "none" }
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>

                        {/* Markers for Microstates */}
                        {MICROSTATES.map(name => {
                            const stats = getCompletionStats(name);
                            const coords = MICROSTATE_COORDS[name];
                            if (!coords) return null;

                            return (
                                <Marker key={name} coordinates={coords}>
                                    <circle
                                        r={4}
                                        fill={getFillColor(stats.level)}
                                        stroke="#fff"
                                        strokeWidth={1}
                                        style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                                        onClick={() => navigate(`/euro/normal/${name}`)}
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
                            {getCompletionStats(hoveredCountry).percent}% Completado
                        </span>
                    </div>
                )}
            </div>

            {/* Legend Footer - Static Bottom Box */}
            {/* Legend Footer - Static Bottom Box (Solid Background) */}
            <div className="map-legend-footer" style={{ background: '#121212', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
