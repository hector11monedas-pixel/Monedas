import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { calculateTotalEuroCatalogSize } from '../data/EuroData';
import { calculateCommemorativeCatalogSize } from '../data/CommemorativeCatalog';
import { Euro, Award, ArrowLeft, Map as MapIcon } from 'lucide-react';
import './Dashboard.css'; // Shared styles

import EuroMap from './EuroMap';

const EuroMenu = () => {
    const navigate = useNavigate();
    const { items } = useCoin();

    // Calculate Global Stats
    const collectedCount = (items || []).filter(i => i.category === 'euro').length;
    const totalCatalogCount = calculateTotalEuroCatalogSize() + calculateCommemorativeCatalogSize();

    return (
        <div className="dashboard-menu">
            {/* Header: Back Button & Stats */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '0.5rem',
                padding: '0 0.5rem',
                zIndex: 10,
                position: 'relative'
            }}>
                <button
                    onClick={() => navigate('/')}
                    className="action-btn"
                    style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="total-counter-container" style={{ margin: 0, padding: '0.2rem 0.8rem' }}>
                    <span className="total-label">Euro Colección</span>
                    <span className="total-value">{collectedCount} <span className="total-divider">/</span> {totalCatalogCount}</span>
                </div>

                <div style={{ width: '40px' }}></div>
            </div>

            {/* Main Content - Flex Column */}
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                flex: 1,
                overflow: 'hidden',
                paddingBottom: '1rem'
            }}>
                {/* 1. Map Container - Takes Flexible Space */}
                <div style={{
                    width: '100%',
                    flex: 1,
                    minHeight: '200px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    zIndex: 0,
                    marginBottom: '0.5rem'
                }}>
                    <EuroMap />
                </div>

                {/* 2. Navigation Buttons - Fixed at Bottom */}
                <div className="nav-grid" style={{ width: '100%', marginBottom: '0.2rem', flexShrink: 0 }}>
                    <div
                        className="nav-card text-blue"
                        onClick={() => navigate('/euro/normal')}
                    >
                        <div className="card-bg-glow"></div>
                        <div className="icon-wrapper">
                            <Euro size={48} strokeWidth={1} />
                        </div>
                        <div className="nav-content">
                            <h3>Normales</h3>
                            <p>Por Países</p>
                        </div>
                    </div>

                    <div
                        className="nav-card text-gold"
                        onClick={() => navigate('/euro/commemorative')}
                    >
                        <div className="card-bg-glow"></div>
                        <div className="icon-wrapper">
                            <Award size={48} strokeWidth={1} />
                        </div>
                        <div className="nav-content">
                            <h3>Conmemorativas</h3>
                            <p>2 Euros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EuroMenu;
