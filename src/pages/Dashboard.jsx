import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { getLatestUpdate, APP_UPDATES } from '../data/AppUpdates';
import Modal from '../components/common/Modal';
import { Euro, Crown, Globe2, Banknote, Bell } from 'lucide-react';
import './Dashboard.css';

const NavCard = ({ title, description, Icon, color, path }) => {
    const navigate = useNavigate();

    return (
        <div className={`nav-card ${color}`} onClick={() => navigate(path)}>
            <div className="card-bg-glow"></div>
            <div className="icon-wrapper">
                <Icon size={48} strokeWidth={1} />
            </div>
            <div className="nav-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const navigate = useNavigate();
    const { items, catalogSize, stats } = useCoin();
    const lastItem = items.length > 0 ? items[items.length - 1] : null;
    const [isUpdatesOpen, setIsUpdatesOpen] = React.useState(false);

    return (
        <div className="dashboard-menu">
            {/* Header only for spacing/logo if needed, no Bell */}

            <div className="nav-grid">
                <NavCard
                    title="Zona Euro"
                    description="Colección Completa"
                    Icon={Euro}
                    color="text-blue"
                    path="/euro"
                />
                <NavCard
                    title="España"
                    description="Reino y República"
                    Icon={Crown}
                    color="text-red"
                    path="/spain"
                />
                <NavCard
                    title="Mundo"
                    description="Internacional"
                    Icon={Globe2}
                    color="text-green"
                    path="/world"
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
                {lastItem && (
                    <div className="last-added-section glass-panel">
                        <div className="last-added-header">
                            <span className="last-added-label">Última Adquisición</span>
                            <span className="new-badge">NEW</span>
                        </div>
                        <div className="last-added-content">
                            <span className="last-added-title">{lastItem.value} {lastItem.currency}</span>
                            <span className="last-added-details"> • {lastItem.country} ({lastItem.year})</span>
                        </div>
                    </div>
                )}

                <div
                    className="total-widget glass-panel"
                    onClick={() => navigate('/statistics')}
                    style={{ cursor: 'pointer' }}
                >
                    <span className="total-label">Total Colección</span>
                    <span className="total-count">{stats.totalItems} / {catalogSize}</span>
                </div>

                {/* Restored App Updates Widget */}
                <div
                    className="total-widget glass-panel app-updates-widget"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsUpdatesOpen(true);
                    }}
                >
                    <div className="updates-header">
                        <span className="total-label">Novedades</span>
                        <span className="total-goal update-date">{getLatestUpdate().date}</span>
                    </div>
                    <div className="updates-content">
                        <span className="update-title">
                            {getLatestUpdate().title}
                        </span>
                        <span className="update-description">
                            {getLatestUpdate().description}
                        </span>
                    </div>
                </div>
            </div>

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
        </div>
    );
};

export default Dashboard;
