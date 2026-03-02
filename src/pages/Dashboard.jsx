import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { getLatestUpdate, APP_UPDATES } from '../data/AppUpdates';
import { Euro, Globe2, Banknote, Star, BarChart3, Share2, Heart } from 'lucide-react';
import NavCard from '../components/dashboard/NavCard';
import Modal from '../components/common/Modal';
import './Dashboard.css';



import { getCoinImage } from '../utils/imageUtils';

const Dashboard = () => {
    const navigate = useNavigate();
    const { items, catalogSize, stats } = useCoin();
    const lastItem = items.length > 0 ? items[items.length - 1] : null;
    const [isUpdatesOpen, setIsUpdatesOpen] = React.useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = React.useState(false);

    // Get last 5 items reversed
    const recentItems = [...items].reverse().slice(0, 5);

    // Logic for v2.4.1 (Premium Light Mode)
    const v241 = {
        id: -80,
        date: '10/02/2026',
        title: 'Versión 2.4.1 - Modo Claro Premium 🎨',
        description: 'Refinamiento total del Modo Claro con estética premium, contrastas optimizados y sistema dinámico de variables CSS en toda la app.'
    };

    const exists = APP_UPDATES.find(u => u.title.includes('2.4.1'));
    if (!exists) {
        APP_UPDATES.unshift(v241);
    }

    // Resolve image for last item
    const lastItemImage = getCoinImage(lastItem);

    // Calculate progress
    const progress = catalogSize > 0 ? (stats.uniqueCount / catalogSize) * 100 : 0;

    return (
        <div className="dashboard-wrapper">
            {/* Background Blobs for Depth */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            <div className="dashboard-menu">
                <div className="nav-grid">
                    <NavCard
                        title="Zona Euro"
                        description="Colección Completa"
                        Icon={Euro}
                        color="text-blue"
                        path="/euro"
                    />
                    <NavCard
                        title="Mundo"
                        description="Internacional"
                        Icon={Globe2}
                        color="text-green"
                        path="/world"
                    />
                    <NavCard
                        title="Favoritos"
                        description="Colección"
                        Icon={Star}
                        color="text-red"
                        path="/wishlist"
                    />
                    <NavCard
                        title="Billetes"
                        description="Notafilia"
                        Icon={Banknote}
                        color="text-gold"
                        path="/banknotes"
                    />
                </div>

                <div className="widgets-container">
                    <div className="widgets-row">
                        <div
                            className="stat-widget glass-panel"
                            onClick={() => navigate('/statistics')}
                        >
                            <div className="stat-icon-wrapper blue">
                                <svg viewBox="0 0 36 36" className="circular-chart gold mini">
                                    <path className="circle-bg"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        strokeDasharray={`${progress}, 100`}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">{Math.round(progress)}%</text>
                                </svg>
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Colección</span>
                                <span className="stat-value">{stats.uniqueCount} / {catalogSize}</span>
                            </div>
                        </div>

                        <div
                            className="stat-widget glass-panel"
                            onClick={() => navigate('/wishlist')}
                        >
                            <div className="stat-icon-wrapper red">
                                <Heart size={20} fill="currentColor" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Deseos</span>
                                <span className="stat-value">{stats.wishlistCount}</span>
                            </div>
                        </div>
                    </div>

                    <div className="widgets-row">
                        <div
                            className="stat-widget glass-panel"
                            onClick={() => navigate('/trade')}
                        >
                            <div className="stat-icon-wrapper gold">
                                <Share2 size={20} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Repetidas</span>
                                <span className="stat-value">{items.filter(i => i.status === 'trade').length || 0}</span>
                            </div>
                        </div>

                        {/* App Updates Widget */}
                        <div
                            className="stat-widget glass-panel"
                            onClick={() => setIsUpdatesOpen(true)}
                        >
                            <div className="stat-icon-wrapper green">
                                <Star size={20} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Novedad</span>
                                <span className="stat-value" style={{ fontSize: '0.7rem' }}>{getLatestUpdate().date}</span>
                            </div>
                        </div>
                    </div>

                    {lastItem && (
                        <div
                            className="last-added-section glass-panel"
                            onClick={() => setIsHistoryOpen(true)}
                        >
                            <div className="last-added-header">
                                <span className="last-added-label">Última Adquisición</span>
                                <span className="new-badge">NEW</span>
                            </div>
                            <div className="last-added-content-wrapper">
                                {lastItemImage ? (
                                    <img
                                        src={lastItemImage}
                                        alt="Moneda"
                                        className="coin-preview-mini"
                                        referrerPolicy="no-referrer"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="coin-preview-placeholder">
                                        <span>🪙</span>
                                    </div>
                                )}
                                <div className="last-added-content">
                                    <span className="last-added-title">{lastItem.value} {lastItem.currency}</span>
                                    <span className="last-added-details"> • {lastItem.country} ({lastItem.year})</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Updates Modal */}
            <Modal
                isOpen={isUpdatesOpen}
                onClose={() => setIsUpdatesOpen(false)}
                title="Historial de Novedades"
            >
                <div className="updates-list">
                    {APP_UPDATES.map(update => (
                        <div key={update.id} className="update-item">
                            <div className="update-item-header">
                                <span className="update-item-title">{update.title}</span>
                                <span className="update-item-date">{update.date}</span>
                            </div>
                            <p className="update-item-desc">{update.description}</p>
                        </div>
                    ))}
                </div>
            </Modal>

            {/* Last 5 Items Modal */}
            <Modal
                isOpen={isHistoryOpen}
                onClose={() => setIsHistoryOpen(false)}
                title="Últimas 5 Adquisiciones"
            >
                <div className="updates-list">
                    {recentItems.map((item, index) => {
                        const img = getCoinImage(item);
                        return (
                            <div key={index} className="update-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                                    {img ? (
                                        <img
                                            src={img}
                                            alt={item.value}
                                            className="coin-list-image"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="coin-list-placeholder">🪙</div>
                                    )}
                                    <div>
                                        <div className="update-item-title">{item.value} {item.currency}</div>
                                        <div className="update-item-desc">{item.country} ({item.year})</div>
                                    </div>
                                </div>
                                <div className="update-item-date">
                                    {item.dateAdded ? new Date(item.dateAdded).toLocaleDateString() : 'N/A'}
                                </div>
                            </div>
                        );
                    })}
                    {recentItems.length === 0 && <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>No hay monedas recientes.</p>}
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
