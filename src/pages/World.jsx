import React, { useState } from 'react';
import { ArrowLeft, Globe, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import WorldMap from '../components/common/WorldMap';
import Modal from '../components/common/Modal';
import './World.css';

const WORLD_COUNTRIES = [
    { name: 'España', code: 'es', path: '/spain' },
    { name: 'Estados Unidos', code: 'us', path: '/world/usa' },
    { name: 'Japón', code: 'jp', path: '/world/japan' },
    { name: 'México', code: 'mx', path: '/world/mexico' },
    { name: 'Reino Unido', code: 'gb', path: '/world/uk' },
    { name: 'República Checa', code: 'cz', path: '/world/czechia' }
];

const World = () => {
    const navigate = useNavigate();
    const { favoriteCountry, setFavoriteCountry } = useCoin();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [pendingFavorite, setPendingFavorite] = useState(null);

    return (
        <div className="page-container world-page">
            <div className="page-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#121212' }}>
                <div className="header-content">
                    <div className="title-row">
                        <button onClick={() => navigate('/')} className="back-btn-simple">
                            <ArrowLeft size={24} />
                        </button>
                        <h2>Mundo</h2>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <WorldMap />
            </div>

            <div className="countries-section">
                <div className="section-title">
                    <Globe size={20} />
                    <span>Países Disponibles</span>
                </div>

                <div className="countries-grid">
                    {WORLD_COUNTRIES.map((country) => {
                        const isFavorite = favoriteCountry.path === country.path;
                        return (
                            <div
                                key={country.code}
                                className="country-card glass-panel"
                                onClick={() => country.path ? navigate(country.path) : null}
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
                            </div>
                        );
                    })}
                </div>
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
                                const countryObj = WORLD_COUNTRIES.find(c => c.name === pendingFavorite);
                                const path = countryObj ? countryObj.path : '/world';
                                setFavoriteCountry({ name: pendingFavorite, path });
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
        </div>
    );
};

export default World;
