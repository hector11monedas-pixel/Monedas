import React, { useState, useMemo } from 'react';
import { useCoin } from '../hooks/useCoin';
import { Search, Filter, Trophy, Star, ArrowRight, ArrowLeft, X, Scale, Ruler } from 'lucide-react';
import { getNationalSideImage } from '../data/NationalEuroImages';
import { getItemValuation } from '../utils/priceUtils';
import { getCoinSpecs } from '../data/CoinSpecs';
import './Gallery.css';

const Gallery = () => {
    const { items, favoriteCountry } = useCoin();
    const [filter, setFilter] = useState('all'); // all, favorites, high-value, recent
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCoin, setSelectedCoin] = useState(null);

    // Filter items based on selection
    const filteredItems = useMemo(() => {
        let result = items.map(item => ({
            ...item,
            ...getItemValuation(item) // Enrich with calculated faceValue and estimatedValue
        }));

        switch (filter) {
            case 'favorites':
                // Assuming we might have a 'test' favorite logic or just use favorite country
                if (favoriteCountry?.name) {
                    result = result.filter(item => item.country === favoriteCountry.name);
                }
                break;
            case 'high-value':
                result = result.filter(item => item.estimatedValue > 5).sort((a, b) => b.estimatedValue - a.estimatedValue);
                break;
            case 'recent':
                // Assuming items are added in order, reverse them
                result = [...result].reverse().slice(0, 20);
                break;
            default: // all
                // Show standard coins first or just random? Let's sort by date added (reverse)
                result = [...result].reverse();
                break;
        }
        return result;
    }, [items, filter, favoriteCountry]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    // Get image for item
    const getItemImage = (item) => {
        // reuse logic from ItemForm/CoinGridView
        if (item.category === 'euro') {
            return getNationalSideImage(item.country, item.value, item.year) || '/img/euro_default.png';
        }
        return '/img/world_default.png'; // Fallback
    };

    if (filteredItems.length === 0) {
        return (
            <div className="gallery-empty-state">
                <Trophy size={64} style={{ opacity: 0.2 }} />
                <h3>Tu galería está vacía</h3>
                <p>Añade monedas a tu colección para verlas aquí.</p>
            </div>
        );
    }

    const currentItem = filteredItems[activeIndex];
    const currentSpecs = getCoinSpecs(selectedCoin?.value);

    return (
        <div className="gallery-container">
            {/* Header / Filter Bar */}
            <div className="gallery-header glass-panel">
                <div className="gallery-title">
                    <Trophy className="text-gold" />
                    <h2>Galería</h2>
                </div>
                <div className="gallery-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => { setFilter('all'); setActiveIndex(0); }}
                    >Todo</button>
                    <button
                        className={`filter-btn ${filter === 'high-value' ? 'active' : ''}`}
                        onClick={() => { setFilter('high-value'); setActiveIndex(0); }}
                    >Valiosas 💎</button>
                    <button
                        className={`filter-btn ${filter === 'recent' ? 'active' : ''}`}
                        onClick={() => { setFilter('recent'); setActiveIndex(0); }}
                    >Recientes 🕒</button>
                </div>
            </div>

            {/* Main Carousel Area */}
            <div className="gallery-stage">
                <button className="nav-btn prev" onClick={handlePrev}><ArrowLeft /></button>

                <div className="coin-spotlight" onClick={() => setSelectedCoin(currentItem)}>
                    <div className="spotlight-glow"></div>
                    <img
                        src={getItemImage(currentItem)}
                        alt={`${currentItem.value} ${currentItem.country}`}
                        className="spotlight-image"
                    />
                    <div className="spotlight-info glass-panel">
                        <h2>{currentItem.value} {currentItem.currency || '€'}</h2>
                        <p>{currentItem.country} · {currentItem.year}</p>
                        {currentItem.estimatedValue > 0 && (
                            <div className="value-tag">
                                {currentItem.estimatedValue.toFixed(2)} €
                            </div>
                        )}
                    </div>
                </div>

                <button className="nav-btn next" onClick={handleNext}><ArrowRight /></button>
            </div>

            {/* Thumbnails Strip */}
            <div className="gallery-thumbnails">
                {filteredItems.slice(Math.max(0, activeIndex - 3), Math.min(filteredItems.length, activeIndex + 4)).map((item, idx) => {
                    const realIndex = filteredItems.indexOf(item); // Simple lookup
                    return (
                        <div
                            key={item.id || idx}
                            className={`thumbnail-card ${realIndex === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(realIndex)}
                        >
                            <img src={getItemImage(item)} alt="" />
                        </div>
                    );
                })}
            </div>

            {/* Detail Modal */}
            {selectedCoin && (
                <div className="gallery-modal-overlay" onClick={() => setSelectedCoin(null)}>
                    <div className="gallery-modal glass-panel" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedCoin(null)}><X /></button>
                        <div className="modal-content">
                            <div className="modal-image-col">
                                <img src={getItemImage(selectedCoin)} alt="Detalle" />
                            </div>
                            <div className="modal-info-col">
                                <h3>{selectedCoin.country}</h3>
                                <h1>{selectedCoin.value} {selectedCoin.currency || '€'}</h1>
                                <div className="detail-grid">
                                    <div className="detail-item">
                                        <span>Año</span>
                                        <strong>{selectedCoin.year}</strong>
                                    </div>
                                    <div className="detail-item">
                                        <span>Valoración</span>
                                        <strong className="text-green">
                                            {selectedCoin.estimatedValue ? `${selectedCoin.estimatedValue.toFixed(2)} €` : 'N/A'}
                                        </strong>
                                    </div>
                                    <div className="detail-item">
                                        <span>Estado</span>
                                        <strong style={{ color: 'var(--primary-color)' }}>{selectedCoin.condition || 'Circulada'}</strong>
                                    </div>
                                </div>

                                {/* Technical Specs Section */}
                                {currentSpecs && (
                                    <div className="specs-section">
                                        <h4>Ficha Técnica</h4>
                                        <div className="specs-grid">
                                            <div className="spec-item">
                                                <Scale size={16} /> <span>{currentSpecs.weight}</span>
                                            </div>
                                            <div className="spec-item">
                                                <Ruler size={16} /> <span>{currentSpecs.diameter}</span>
                                            </div>
                                            <div className="spec-item full">
                                                <span>{currentSpecs.composition}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedCoin.commemorative && (
                                    <div className="detail-item full-width" style={{ marginTop: '1rem' }}>
                                        <span>Conmemorativa</span>
                                        <p>{selectedCoin.subject || 'Sin descripción'}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
