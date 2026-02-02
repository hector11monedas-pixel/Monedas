import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { COMMEMORATIVE_YEARS, COMMEMORATIVE_COUNTRIES } from '../data/CommemorativeData';
import { COMMEMORATIVE_CATALOG, calculateCommemorativeCatalogSize, getCatalogForCountry } from '../data/CommemorativeCatalog';
import { ArrowLeft } from 'lucide-react';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './EuroCountries.css'; // Reusing the same grid styles!

// Same list as EuroCountries to ensure consistency
const EURO_COUNTRIES = [
    { name: 'Alemania', code: 'de' },
    { name: 'Andorra', code: 'ad' },
    { name: 'Austria', code: 'at' },
    { name: 'Bélgica', code: 'be' },
    { name: 'Bulgaria', code: 'bg' },
    { name: 'Chipre', code: 'cy' },
    { name: 'Croacia', code: 'hr' },
    { name: 'Eslovaquia', code: 'sk' },
    { name: 'Eslovenia', code: 'si' },
    { name: 'España', code: 'es' },
    { name: 'Estonia', code: 'ee' },
    { name: 'Finlandia', code: 'fi' },
    { name: 'Francia', code: 'fr' },
    { name: 'Grecia', code: 'gr' },
    { name: 'Irlanda', code: 'ie' },
    { name: 'Italia', code: 'it' },
    { name: 'Letonia', code: 'lv' },
    { name: 'Lituania', code: 'lt' },
    { name: 'Luxemburgo', code: 'lu' },
    { name: 'Malta', code: 'mt' },
    { name: 'Mónaco', code: 'mc' },
    { name: 'Países Bajos', code: 'nl' },
    { name: 'Portugal', code: 'pt' },
    { name: 'San Marino', code: 'sm' },
    { name: 'Vaticano', code: 'va' },
];

const CommemorativeMenu = () => {
    const navigate = useNavigate();
    const { items } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate Global Stats for Commemoratives
    const safeItems = Array.isArray(items) ? items : [];
    // Count ONLY items that are Euro AND marked as Commemorative (or have subject)
    const collectedCount = safeItems.filter(i =>
        i.category === 'euro' && (i.isCommemorative === true || !!i.subject)
    ).length;

    // Calculate Total Catalog Size
    const totalCatalogCount = calculateCommemorativeCatalogSize();

    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = searchParams.get('tab') || 'country';
    const [viewMode, setViewMode] = useState(initialTab);

    // Update URL when tab changes
    const handleTabChange = (mode) => {
        setViewMode(mode);
        setSearchParams({ tab: mode });
    };

    // Generate years list 2026 -> 2004
    const yearsList = [];
    for (let y = 2026; y >= 2004; y--) yearsList.push(y);

    return (
        <div className="page-container">
            <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => navigate('/euro')}
                    className="back-btn-simple"
                    style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                    <ArrowLeft size={24} />
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{ margin: 0 }}>2€ Conmemorativos</h2>
                    <span className="text-secondary" style={{ fontSize: '0.8rem' }}>
                        {viewMode === 'country' ? 'Selecciona un país' : 'Selecciona un año'}
                    </span>
                </div>

                {/* VIEW TABS */}
                <div className="stat-tabs" style={{ marginBottom: 0 }}>
                    <button
                        className={`stat-tab ${viewMode === 'country' ? 'active' : ''}`}
                        onClick={() => handleTabChange('country')}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    >
                        Por País
                    </button>
                    <button
                        className={`stat-tab ${viewMode === 'year' ? 'active' : ''}`}
                        onClick={() => handleTabChange('year')}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    >
                        Por Año
                    </button>
                </div>
            </div>

            <div className="euro-stats-header">
                <div className="total-counter-container">
                    <span className="total-label">Total Colección</span>
                    <span className="total-value">{collectedCount} <span className="total-divider">/</span> {totalCatalogCount}</span>
                </div>
            </div>

            {viewMode === 'country' ? (
                <div className="countries-grid">
                    {EURO_COUNTRIES.map((country) => {
                        const countryCollected = safeItems.filter(i =>
                            i.category === 'euro' &&
                            i.country === country.name &&
                            (i.isCommemorative === true || !!i.subject)
                        ).length;

                        const catalogList = getCatalogForCountry(country.name);
                        const countryTotal = catalogList.reduce((acc, item) => {
                            return acc + (item.variants ? item.variants.length : 1);
                        }, 0);

                        return (
                            <div
                                key={country.code}
                                className="country-card glass-panel"
                                onClick={() => navigate(`/euro/commemorative/${country.name}`)}
                            >
                                <div className="flag-wrapper">
                                    <img
                                        src={`https://flagcdn.com/w160/${country.code}.png`}
                                        alt={country.name}
                                        className="country-flag"
                                    />
                                </div>
                                <span className="country-name">{country.name}</span>
                                <span className="country-counter text-secondary" style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                                    {countryCollected} / {countryTotal}
                                </span>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="countries-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                    {yearsList.map((year) => {
                        // Count collected for this year
                        const yearCollected = safeItems.filter(i =>
                            i.category === 'euro' &&
                            i.year === year &&
                            (i.isCommemorative === true || !!i.subject)
                        ).length;

                        // Calculate total catalog for this year
                        // This is expensive, better to memoize if slow, but for 20 items it's fine
                        const yearTotal = COMMEMORATIVE_CATALOG.filter(i => i.year === year).reduce((acc, item) => {
                            return acc + (item.variants ? item.variants.length : 1);
                        }, 0);

                        return (
                            <div
                                key={year}
                                className="country-card glass-panel"
                                onClick={() => navigate(`/euro/commemorative/year/${year}`)}
                                style={{ justifyContent: 'center', minHeight: '100px' }}
                            >
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--gold-400)' }}>{year}</span>
                                <span className="country-counter text-secondary" style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                                    {yearCollected} / {yearTotal}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Añadir Conmemorativa"
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialIsCommemorative={true}
                    initialValue="2.00"
                />
            </Modal>
        </div>
    );
};

export default CommemorativeMenu;
