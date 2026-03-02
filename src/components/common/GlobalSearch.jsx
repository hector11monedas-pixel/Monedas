import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Map as MapIcon, Database, LayoutDashboard, BarChart3, Globe, Star, X } from 'lucide-react';
import { JOINT_ISSUES, COUNTRY_CATALOGS } from '../../data/CommemorativeCatalog';
import { EURO_DATA } from '../../data/EuroData';
import './GlobalSearch.css';

const PAGES = [
    { id: 'dashboard', name: 'Panel Principal', path: '/', desc: 'Resumen de tu colección y estadísticas rápidas', icon: <LayoutDashboard size={18} /> },
    { id: 'world', name: 'Mapa Mundial', path: '/world', desc: 'Explora monedas de todo el mundo', icon: <Globe size={18} /> },
    { id: 'stats', name: 'Estadísticas', path: '/stats', desc: 'Análisis detallado de tu colección', icon: <BarChart3 size={18} /> },
    { id: 'inventory', name: 'Gestor de Inventario', path: '/inventory', desc: 'Edición rápida y masiva de monedas', icon: <Database size={18} /> },
    { id: 'comm-menu', name: 'Menú Conmemorativas', path: '/euro/commemorative/menu', desc: 'Acceso a todas las monedas de 2€ conmemorativas', icon: <Star size={18} /> }
];

const GlobalSearch = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    // Prepare search data
    const euroCountries = useMemo(() => {
        return Object.keys(EURO_DATA).map(name => ({
            id: `country-${name}`,
            name: name,
            path: `/euro/country/${name}`,
            desc: `Euro: ${EURO_DATA[name].startYear} - presente`,
            category: 'Países Euro',
            icon: <MapIcon size={18} />
        }));
    }, []);

    const commemoratives = useMemo(() => {
        const flat = [];
        const seen = new Set();

        // Add joint issues
        JOINT_ISSUES.forEach(issue => {
            if (!seen.has(issue.subject)) {
                flat.push({
                    id: `comm-joint-${issue.subject}`,
                    name: issue.subject,
                    path: `/euro/commemorative/menu`,
                    desc: `${issue.year} · Emisión Conjunta`,
                    category: 'Temáticas Conmemorativas',
                    icon: <Star size={18} />
                });
                seen.add(issue.subject);
            }
        });

        // Add country-specific items
        Object.values(COUNTRY_CATALOGS).forEach(countryCoins => {
            countryCoins.forEach(coin => {
                if (!seen.has(coin.subject)) {
                    flat.push({
                        id: `comm-${coin.subject}`,
                        name: coin.subject,
                        path: `/euro/commemorative/menu`,
                        desc: `${coin.year} · ${coin.subject}`,
                        category: 'Temáticas Conmemorativas',
                        icon: <Star size={18} />
                    });
                    seen.add(coin.subject);
                }
            });
        });

        return flat.slice(0, 100); // Limit context
    }, []);

    const banknoteCountries = useMemo(() => {
        return [
            { id: 'bn-cz', name: 'Billetes: República Checa', path: '/banknotes/cz', desc: 'Catálogo de billetes checos', category: 'Billetes', icon: <Database size={18} /> },
            { id: 'bn-af', name: 'Billetes: Afganistán', path: '/banknotes/af', desc: 'Catálogo de billetes afganos (Serie 2002)', category: 'Billetes', icon: <Database size={18} /> }
        ];
    }, []);

    const worldCountries = useMemo(() => {
        return [
            { id: 'w-es', name: 'Mundo: España', path: '/world/spain', desc: 'Monedas históricas de España', category: 'Mundo', icon: <Globe size={18} /> },
            { id: 'w-af', name: 'Mundo: Afganistán', path: '/world/afghanistan', desc: 'Monedas de Afganistán', category: 'Mundo', icon: <Globe size={18} /> },
            { id: 'w-cz', name: 'Mundo: República Checa', path: '/world/czechia', desc: 'Monedas de la Rep. Checa', category: 'Mundo', icon: <Globe size={18} /> }
        ];
    }, []);

    const allItems = useMemo(() => {
        return [
            ...PAGES.map(p => ({ ...p, category: 'Navegación' })),
            ...euroCountries,
            ...banknoteCountries,
            ...worldCountries,
            ...commemoratives
        ];
    }, [euroCountries, banknoteCountries, worldCountries, commemoratives]);

    // Filtering
    const results = useMemo(() => {
        if (!query.trim()) return allItems.filter(item => item.category === 'Navegación');

        const q = query.toLowerCase();
        return allItems.filter(item =>
            item.name.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        ).slice(0, 15);
    }, [query, allItems]);

    // Keyboard navigation
    useEffect(() => {
        if (isOpen) {
            // Use setTimeout to avoid synchronous setState in effect warning
            setTimeout(() => {
                setQuery('');
                setSelectedIndex(0);
                inputRef.current?.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
            if (results[selectedIndex]) {
                handleAction(results[selectedIndex]);
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleAction = (item) => {
        navigate(item.path);
        onClose();
    };

    if (!isOpen) return null;

    // Group results by category
    const groupedResults = results.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="global-search-overlay" onClick={onClose}>
            <div className="global-search-container" onClick={e => e.stopPropagation()}>
                <div className="global-search-header">
                    <div className="search-input-wrapper">
                        <Search size={20} className="text-dim" />
                        <input
                            ref={inputRef}
                            type="text"
                            className="global-search-input"
                            placeholder="Buscar países, conmemorativas, secciones..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <span className="esc-hint">ESC para cerrar</span>
                </div>

                <div className="global-search-results" ref={resultsRef}>
                    {results.length > 0 ? (
                        Object.keys(groupedResults).map(category => (
                            <div key={category} className="search-category">
                                <div className="category-title">{category}</div>
                                {groupedResults[category].map((item) => {
                                    // Calculate overall index for selection
                                    const overallIdx = results.indexOf(item);
                                    return (
                                        <button
                                            key={item.id}
                                            className={`search-item ${selectedIndex === overallIdx ? 'selected' : ''}`}
                                            onMouseEnter={() => setSelectedIndex(overallIdx)}
                                            onClick={() => handleAction(item)}
                                        >
                                            <div className="item-icon-wrapper">
                                                {item.icon}
                                            </div>
                                            <div className="item-details">
                                                <span className="item-name">{item.name}</span>
                                                <span className="item-desc">{item.desc}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        ))
                    ) : (
                        <div className="search-empty">
                            No se encontraron resultados para "{query}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GlobalSearch;
