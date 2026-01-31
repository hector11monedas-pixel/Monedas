import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Hammer } from 'lucide-react';
import './PageLayout.css';

const WorldCountryView = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();

    // Map ID to Name if needed, or just capitalize
    const displayName = countryId === 'czechia' ? 'República Checa' : countryId;

    return (
        <div className="page-container">
            <div className="page-header" style={{ padding: '1rem' }}>
                <div className="header-content">
                    <div className="title-row">
                        <button onClick={() => navigate('/world')} className="back-btn-simple">
                            <ArrowLeft size={24} />
                        </button>
                        <h2>{displayName}</h2>
                    </div>
                </div>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                gap: '1rem',
                padding: '2rem'
            }}>
                <Hammer size={64} strokeWidth={1} style={{ opacity: 0.5 }} />
                <h3>En Construcción</h3>
                <p>La colección de {displayName} estará disponible pronto.</p>
            </div>
        </div>
    );
};

export default WorldCountryView;
