import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { calculateTotalEuroCatalogSize, calculateCountryEuroCatalogSize } from '../data/EuroData';
import { ArrowLeft, Plus, Settings, CheckSquare, Square } from 'lucide-react';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './EuroCountries.css';

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

const EuroCountries = () => {
    const navigate = useNavigate();
    const { items, germanMintsEnabled, toggleGermanMints, greeceMintsEnabled, toggleGreeceMints } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Calculate Global Stats
    const safeItems = Array.isArray(items) ? items : [];

    const calcOptions = {
        germanMints: germanMintsEnabled,
        greeceMints: greeceMintsEnabled
    };

    // Helper to count collected items based on settings
    const countCollected = (itemList, country) => {
        if (country === 'Alemania' && !germanMintsEnabled) {
            // Generic Mode: Count unique Year-Value pairs
            const uniqueSlots = new Set();
            itemList.forEach(i => {
                if (i.country === 'Alemania' && i.category === 'euro' && !i.isCommemorative && !i.subject) {
                    uniqueSlots.add(`${i.year}-${i.value}`);
                }
            });
            return uniqueSlots.size;
        }

        if (country === 'Alemania') {
            // Normal Mode (Mints Enabled): Just count items
            return itemList.filter(i => i.country === 'Alemania' && i.category === 'euro' && !i.isCommemorative && !i.subject).length;
        }

        if (country === 'Grecia') {
            return itemList.filter(i => {
                if (i.country !== 'Grecia' || i.category !== 'euro' || i.isCommemorative || i.subject) return false;
                // If Greece Mints Disabled, exclude 2002 VAR items
                if (!greeceMintsEnabled && i.year === 2002 && i.mint === 'VAR') return false;
                return true;
            }).length;
        }

        // Standard for others
        return itemList.filter(i => i.country === country && i.category === 'euro' && !i.isCommemorative && !i.subject).length;
    };

    // Calculate Global Collected
    const totalCollectedCount = EURO_COUNTRIES.reduce((acc, country) => {
        return acc + countCollected(safeItems, country.name);
    }, 0);

    const totalCatalogCount = calculateTotalEuroCatalogSize(calcOptions);

    return (
        <div className="page-container">
            <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => navigate('/euro')}
                        className="back-btn-simple"
                        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h2 style={{ margin: 0 }}>Monedas Normales</h2>
                </div>

                <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="icon-btn-ghost"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '0.6rem',
                        borderRadius: '50%',
                        color: 'white'
                    }}
                >
                    <Settings size={22} />
                </button>
            </div>

            {/* SETTINGS MODAL */}
            <Modal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                title="Configuración de Vista"
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
                    <div
                        onClick={toggleGermanMints}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', cursor: 'pointer' }}
                    >
                        <span style={{ fontWeight: 500 }}>Cecas Alemania</span>
                        {germanMintsEnabled ? <CheckSquare size={24} color="#4ade80" /> : <Square size={24} color="var(--text-secondary)" />}
                    </div>

                    <div
                        onClick={toggleGreeceMints}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', cursor: 'pointer' }}
                    >
                        <span style={{ fontWeight: 500 }}>Cecas Grecia (2002)</span>
                        {greeceMintsEnabled ? <CheckSquare size={24} color="#4ade80" /> : <Square size={24} color="var(--text-secondary)" />}
                    </div>
                </div>
            </Modal>

            <div className="euro-stats-header">
                <div className="total-counter-container">
                    <span className="total-label">Total Colección Euro</span>
                    <span className="total-value">{totalCollectedCount} <span className="total-divider">/</span> {totalCatalogCount}</span>
                </div>
            </div>
            <div className="countries-grid">
                {EURO_COUNTRIES.map((country) => {
                    const countryCollected = countCollected(safeItems, country.name);
                    const countryTotal = calculateCountryEuroCatalogSize(country.name, calcOptions);

                    return (
                        <div
                            key={country.code}
                            className="country-card glass-panel"
                            onClick={() => navigate(`/euro/normal/${country.name}`)}
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

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Añadir Moneda Euro"
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                />
            </Modal>
        </div>
    );
};

export default EuroCountries;
