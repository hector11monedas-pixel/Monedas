import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { calculateTotalEuroCatalogSize } from '../data/EuroData';
import { calculateCommemorativeCatalogSize } from '../data/CommemorativeCatalog';
import { Euro, Award, ArrowLeft } from 'lucide-react';
import './Dashboard.css'; // Shared styles
import EuroMap from './EuroMap';

const EuroMenu = () => {
    const navigate = useNavigate();
    const { items } = useCoin();

    // Calculate Global Stats
    const collectedCount = (items || []).filter(i => i.category === 'euro').length;
    const totalCatalogCount = calculateTotalEuroCatalogSize() + calculateCommemorativeCatalogSize();

    return (
        <div className="dashboard-menu" style={{ justifyContent: 'flex-start', paddingTop: '0.2rem', gap: '0' }}>
            {/* Header: Back Button & Stats */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '0.2rem',
                padding: '0 0.5rem',
                zIndex: 10,
                position: 'relative'
            }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="total-counter-container" style={{ margin: 0, padding: '0.2rem 0.8rem' }}>
                    <span className="total-label">Euro Colección</span>
                    <span className="total-value">{collectedCount} <span className="total-divider">/</span> {totalCatalogCount}</span>
                </div>

                <div style={{ width: '32px' }}></div>
            </div>

            {/* Navigation Grid - Compact */}
            <div className="nav-grid" style={{ marginBottom: '0', gap: '0.5rem', zIndex: 10, position: 'relative' }}>
                <div
                    className="nav-card text-blue"
                    onClick={() => navigate('/euro/normal')}
                    style={{ padding: '0.8rem' }}
                >
                    <div className="card-bg-glow"></div>
                    <div className="icon-wrapper" style={{ marginBottom: '0.4rem' }}>
                        <Euro size={36} strokeWidth={1} />
                    </div>
                    <div className="nav-content">
                        <h3 style={{ fontSize: '1rem' }}>Normales</h3>
                        <p style={{ fontSize: '0.7rem' }}>Por Países</p>
                    </div>
                </div>

                <div
                    className="nav-card text-gold"
                    onClick={() => navigate('/euro/commemorative')}
                    style={{ padding: '0.8rem' }}
                >
                    <div className="card-bg-glow"></div>
                    <div className="icon-wrapper" style={{ marginBottom: '0.4rem' }}>
                        <Award size={36} strokeWidth={1} />
                    </div>
                    <div className="nav-content">
                        <h3 style={{ fontSize: '1rem' }}>Conmemorativas</h3>
                        <p style={{ fontSize: '0.7rem' }}>2 Euros</p>
                    </div>
                </div>
            </div>

            {/* Embedded Map Section - Flex Grow to fill space */}
            <div style={{
                width: '100%',
                flex: 1,
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                minHeight: '0', /* Crucial for flex box to not overflow */
                zIndex: 0
            }}>
                <EuroMap />
            </div>
        </div>
    );
};

export default EuroMenu;
