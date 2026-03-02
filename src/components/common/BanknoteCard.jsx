import React, { useState } from 'react';
import { RotateCw, Check, Plus } from 'lucide-react';
import './BanknoteCard.css';

const BanknoteCard = ({ banknote, isCollected, onToggleCollection, collectedItems = [] }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`banknote-card-container ${isCollected ? 'collected' : ''}`}>
            <div className={`banknote-card-inner ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                {/* Obverse (Front) */}
                <div className="banknote-card-front">
                    <div className="collection-status-badge" onClick={(e) => {
                        e.stopPropagation();
                        onToggleCollection();
                    }}>
                        {isCollected ? (
                            <div className="status-icon collected"><Check size={16} /></div>
                        ) : (
                            <div className="status-icon uncollected"><Plus size={16} /></div>
                        )}
                    </div>
                    {banknote.status && (
                        <div className={`banknote-status-badge ${banknote.status.toLowerCase()}`}>
                            {banknote.status}
                        </div>
                    )}
                    <div className="banknote-image-wrapper">
                        {banknote.obverseImage ? (
                            <img
                                src={banknote.obverseImage}
                                alt={`${banknote.name} Anverso`}
                                className="banknote-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x300/${banknote.mainColor.replace('#', '')}/FFFFFF?text=${banknote.value}+${banknote.unit}`;
                                }}
                            />
                        ) : (
                            <div className="no-image-placeholder-card">
                                <span>Anverso no disponible</span>
                            </div>
                        )}
                    </div>
                    <div className="banknote-info">
                        <div className="banknote-header">
                            <span className="banknote-value">{banknote.value} {banknote.unit}</span>
                            <span className="banknote-dims">{banknote.dimensions}</span>
                        </div>
                        <p className="banknote-desc">{banknote.obverseDescription}</p>

                        {(banknote.emissionYears || banknote.estimatedValue) && (
                            <div className="banknote-extra-details">
                                {banknote.emissionYears && (
                                    <div className="extra-item">
                                        <span className="label">Años de Emisión:</span>
                                        <span className="value">
                                            {Array.isArray(banknote.emissionYears)
                                                ? banknote.emissionYears.join(', ')
                                                : banknote.emissionYears}
                                        </span>
                                    </div>
                                )}
                                {banknote.governor && (
                                    <div className="extra-item">
                                        <span className="label">Gobernador:</span>
                                        <span className="value">{banknote.governor}</span>
                                    </div>
                                )}
                                {banknote.estimatedValue && (
                                    <div className="extra-item" style={{ marginTop: '0.4rem', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '0.4rem' }}>
                                        <span className="label" style={{ color: '#4ade80' }}>Precio Est. (UNC):</span>
                                        <span className="value" style={{ color: '#4ade80', fontWeight: 'bold' }}>{banknote.estimatedValue}</span>
                                    </div>
                                )}
                            </div>
                        )}
                        {isCollected && collectedItems?.length > 0 && (
                            <div className="user-collection-details" style={{
                                marginTop: '1rem',
                                padding: '0.8rem',
                                background: 'rgba(76, 175, 80, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(76, 175, 80, 0.2)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 'bold' }}>En mi colección:</span>
                                </div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.4rem' }}>
                                    {collectedItems.length} {collectedItems.length === 1 ? 'pieza' : 'piezas'} · {collectedItems.map(i => i.condition).filter(c => c).join(', ') || 'Sin estado'}
                                </div>
                            </div>
                        )}
                        {banknote.notes && (
                            <div className="banknote-notes" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
                                * {banknote.notes}
                            </div>
                        )}
                    </div>
                    <div className="flip-hint">
                        <RotateCw size={14} /> <span>Girar</span>
                    </div>
                </div>

                {/* Reverse (Back) */}
                <div className="banknote-card-back">
                    <div className="banknote-image-wrapper">
                        {banknote.reverseImage ? (
                            <img
                                src={banknote.reverseImage}
                                alt={`${banknote.name} Reverso`}
                                className="banknote-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x300/${banknote.mainColor.replace('#', '')}/FFFFFF?text=Reverso`;
                                }}
                            />
                        ) : (
                            <div className="no-image-placeholder-card">
                                <span>Reverso no disponible</span>
                            </div>
                        )}
                    </div>
                    <div className="banknote-info">
                        <div className="banknote-header">
                            <span className="banknote-name">{banknote.name}</span>
                        </div>
                        <p className="banknote-desc">{banknote.reverseDescription}</p>
                    </div>
                    <div className="flip-hint">
                        <RotateCw size={14} /> <span>Volver</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BanknoteCard;
