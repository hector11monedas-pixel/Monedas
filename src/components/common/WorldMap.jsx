import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import worldTopo from '../../data/world.topo.json';

// Translation map for common countries to Spanish
const COUNTRY_TRANSLATIONS = {
    // Top Destinations
    "Spain": "España",
    "United States of America": "Estados Unidos",
    "United Kingdom": "Reino Unido",
    "Japan": "Japón",
    "Mexico": "México",
    "Czechia": "República Checa",

    // Alphabetical List
    "Afghanistan": "Afganistán",
    "Albania": "Albania",
    "Algeria": "Argelia",
    "Angola": "Angola",
    "Antarctica": "Antártida",
    "Argentina": "Argentina",
    "Armenia": "Armenia",
    "Australia": "Australia",
    "Austria": "Austria",
    "Azerbaijan": "Azerbaiyán",
    "Bahamas": "Bahamas",
    "Bangladesh": "Bangladés",
    "Belarus": "Bielorrusia",
    "Belgium": "Bélgica",
    "Belize": "Belice",
    "Benin": "Benín",
    "Bhutan": "Bután",
    "Bolivia": "Bolivia",
    "Bosnia and Herz.": "Bosnia y Herzegovina",
    "Botswana": "Botsuana",
    "Brazil": "Brasil",
    "Brunei": "Brunéi",
    "Bulgaria": "Bulgaria",
    "Burkina Faso": "Burkina Faso",
    "Burundi": "Burundi",
    "Cambodia": "Camboya",
    "Cameroon": "Camerún",
    "Canada": "Canadá",
    "Central African Rep.": "Rep. Centroafricana",
    "Chad": "Chad",
    "Chile": "Chile",
    "China": "China",
    "Colombia": "Colombia",
    "Congo": "Congo",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croacia",
    "Cuba": "Cuba",
    "Cyprus": "Chipre",
    // Czechia already defined above
    "Dem. Rep. Congo": "R.D. Congo",
    "Denmark": "Dinamarca",
    "Djibouti": "Yibuti",
    "Dominican Rep.": "Rep. Dominicana",
    "Ecuador": "Ecuador",
    "Egypt": "Egipto",
    "El Salvador": "El Salvador",
    "Eq. Guinea": "Guinea Ecuatorial",
    "Eritrea": "Eritrea",
    "Estonia": "Estonia",
    "Ethiopia": "Etiopía",
    "Falkland Is.": "Islas Malvinas",
    "Fiji": "Fiyi",
    "Finland": "Finlandia",
    "France": "Francia",
    "Gabon": "Gabón",
    "Gambia": "Gambia",
    "Georgia": "Georgia",
    "Germany": "Alemania",
    "Ghana": "Ghana",
    "Greece": "Grecia",
    "Greenland": "Groenlandia",
    "Guatemala": "Guatemala",
    "Guinea": "Guinea",
    "Guinea-Bissau": "Guinea-Bisáu",
    "Guyana": "Guyana",
    "Haiti": "Haití",
    "Honduras": "Honduras",
    "Hungary": "Hungría",
    "Iceland": "Islandia",
    "India": "India",
    "Indonesia": "Indonesia",
    "Iran": "Irán",
    "Iraq": "Irak",
    "Ireland": "Irlanda",
    "Israel": "Israel",
    "Italy": "Italia",
    "Jamaica": "Jamaica",
    // Japan already defined
    "Jordan": "Jordania",
    "Kazakhstan": "Kazajistán",
    "Kenya": "Kenia",
    "Kosovo": "Kosovo",
    "Kuwait": "Kuwait",
    "Kyrgyzstan": "Kirguistán",
    "Laos": "Laos",
    "Latvia": "Letonia",
    "Lebanon": "Líbano",
    "Lesotho": "Lesoto",
    "Liberia": "Liberia",
    "Libya": "Libia",
    "Lithuania": "Lituania",
    "Luxembourg": "Luxemburgo",
    "Macedonia": "Macedonia del Norte",
    "Madagascar": "Madagascar",
    "Malawi": "Malaui",
    "Malaysia": "Malasia",
    "Mali": "Malí",
    "Mauritania": "Mauritania",
    // Mexico already defined
    "Moldova": "Moldavia",
    "Mongolia": "Mongolia",
    "Montenegro": "Montenegro",
    "Morocco": "Marruecos",
    "Mozambique": "Mozambique",
    "Myanmar": "Myanmar",
    "Namibia": "Namibia",
    "Nepal": "Nepal",
    "Netherlands": "Países Bajos",
    "New Caledonia": "Nueva Caledonia",
    "New Zealand": "Nueva Zelanda",
    "Nicaragua": "Nicaragua",
    "Niger": "Níger",
    "Nigeria": "Nigeria",
    "North Korea": "Corea del Norte",
    "Norway": "Noruega",
    "Oman": "Omán",
    "Pakistan": "Pakistán",
    "Palestine": "Palestina",
    "Panama": "Panamá",
    "Papua New Guinea": "Papúa Nueva Guinea",
    "Paraguay": "Paraguay",
    "Peru": "Perú",
    "Philippines": "Filipinas",
    "Poland": "Polonia",
    "Portugal": "Portugal",
    "Puerto Rico": "Puerto Rico",
    "Qatar": "Catar",
    "Romania": "Rumania",
    "Russia": "Rusia",
    "Rwanda": "Ruanda",
    "S. Sudan": "Sudán del Sur",
    "Saudi Arabia": "Arabia Saudita",
    "Senegal": "Senegal",
    "Serbia": "Serbia",
    "Sierra Leone": "Sierra Leona",
    "Slovakia": "Eslovaquia",
    "Slovenia": "Eslovenia",
    "Solomon Is.": "Islas Salomón",
    "Somalia": "Somalia",
    "South Africa": "Sudáfrica",
    "South Korea": "Corea del Sur",
    // Spain already defined
    "Sri Lanka": "Sri Lanka",
    "Sudan": "Sudán",
    "Suriname": "Surinam",
    "Sweden": "Suecia",
    "Switzerland": "Suiza",
    "Syria": "Siria",
    "Taiwan": "Taiwán",
    "Tajikistan": "Tayikistán",
    "Tanzania": "Tanzania",
    "Thailand": "Tailandia",
    "Timor-Leste": "Timor Oriental",
    "Togo": "Togo",
    "Trinidad and Tobago": "Trinidad y Tobago",
    "Tunisia": "Túnez",
    "Turkey": "Turquía",
    "Turkmenistan": "Turkmenistán",
    "Uganda": "Uganda",
    "Ukraine": "Ucrania",
    "United Arab Emirates": "Emiratos Árabes",
    // UK, USA already defined
    "Uruguay": "Uruguay",
    "Uzbekistan": "Uzbekistán",
    "Vanuatu": "Vanuatu",
    "Venezuela": "Venezuela",
    "Vietnam": "Vietnam",
    "W. Sahara": "Sáhara Occidental",
    "Yemen": "Yemen",
    "Zambia": "Zambia",
    "Zimbabwe": "Zimbabue"
};

const COUNTRY_PATHS = {
    "Spain": "/spain",
    "United States of America": "/world/usa",
    "United Kingdom": "/world/uk",
    "Japan": "/world/japan",
    "Mexico": "/world/mexico",
    "Czechia": "/world/czechia"
};

const WorldMap = () => {
    const navigate = useNavigate();
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (geo, evt) => {
        const countryName = geo.properties.name;
        // Translate or use original if no translation found
        const displayName = COUNTRY_TRANSLATIONS[countryName] || countryName;

        setTooltipContent(displayName);
        setTooltipPos({ x: evt.clientX, y: evt.clientY });
    };

    const handleMouseMove = (evt) => {
        setTooltipPos({ x: evt.clientX, y: evt.clientY });
    };

    const handleMouseLeave = () => {
        setTooltipContent('');
    };

    return (
        <div className="world-map-wrapper">
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{
                    scale: 180, // Optimized scale for full world view
                }}
                style={{ width: "100%", height: "100%", background: "#1a252f" }}
            >
                <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
                    <Geographies geography={worldTopo}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                // Default styling
                                const countryName = geo.properties.name;
                                const path = COUNTRY_PATHS[countryName];
                                const isInteractive = !!path;

                                const fillColor = isInteractive ? "#455a64" : "#37474f";

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => {
                                            if (isInteractive) navigate(path);
                                        }}
                                        fill={fillColor}
                                        stroke="#121212"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none", transition: "all 0.3s ease" },
                                            hover: {
                                                fill: isInteractive ? "#9c27b0" : "#00bcd4", // Purple for interactive, Blue for others
                                                filter: "brightness(1.2)",
                                                outline: "none",
                                                cursor: isInteractive ? "pointer" : "default"
                                            },
                                            pressed: { outline: "none" }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            {/* Custom Tooltip */}
            {tooltipContent && (
                <div
                    className="map-tooltip"
                    style={{
                        position: 'fixed',
                        top: tooltipPos.y - 40,
                        left: tooltipPos.x,
                        transform: 'translateX(-50%)',
                        background: 'rgba(0,0,0,0.85)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        whiteSpace: 'nowrap',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                    }}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
};

export default WorldMap;
