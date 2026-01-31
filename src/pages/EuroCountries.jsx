import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { calculateTotalEuroCatalogSize, calculateCountryEuroCatalogSize } from '../data/EuroData';
import { ArrowLeft, Plus, Settings, CheckSquare, Square, Star } from 'lucide-react';
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
    const { items, germanMintsEnabled, toggleGermanMints, greeceMintsEnabled, toggleGreeceMints, favoriteCountry, setFavoriteCountry } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [pendingFavorite, setPendingFavorite] = useState(null);

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

                    const isFavorite = favoriteCountry.path === `/euro/normal/${country.name}`;

                    return (
                        <div
                            key={country.code}
                            className="country-card glass-panel"
                            onClick={() => navigate(`/euro/normal/${country.name}`)}
                            style={{ position: 'relative' }}
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPendingFavorite(country.name);
                                    setIsConfirmOpen(true);
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    padding: '5px'
                                }}
                                title={isFavorite ? "País Favorito" : "Marcar como Favorito"}
                            >
                                <Star
                                    size={20}
                                    fill={isFavorite ? "#FFD700" : "rgba(0,0,0,0.2)"}
                                    stroke={isFavorite ? "#FFD700" : "rgba(255,255,255,0.5)"}
                                    strokeWidth={2}
                                />
                            </button>
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

            {/* Confirmation Modal */}
            <Modal
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                title="Confirmar Favorito"
            >
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1.5rem', color: '#d1d5db' }}>
                        ¿Quieres marcar <strong>{pendingFavorite}</strong> como tu país favorito?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => setIsConfirmOpen(false)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                cursor: 'pointer',
                                fontWeight: 500
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                setFavoriteCountry({ name: pendingFavorite, path: `/euro/normal/${pendingFavorite}` });
                                setIsConfirmOpen(false);
                            }}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                border: 'none',
                                color: 'black',
                                cursor: 'pointer',
                                fontWeight: 600,
                                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
                            }}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </Modal>

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
