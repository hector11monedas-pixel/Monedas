import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Check } from 'lucide-react';
import { useCoin } from '../context/CoinContext';
import { getCatalogForCountry } from '../data/CommemorativeCatalog';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './CommemorativeMenu.css';

import './CommemorativeMenu.css';

const CommemorativeCountryView = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const { items } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCatalogItem, setSelectedCatalogItem] = useState(null);

    // 1. Get Catalog for this country
    const catalogList = getCatalogForCountry(countryName);

    // 2. Get User's Items for this country
    const userItems = (items || []).filter(i =>
        i.category === 'euro' &&
        i.country === countryName &&
        (i.isCommemorative === true || !!i.subject)
    );

    // 3. Merge Lists
    const mergedList = catalogList.map(catItem => {
        // Find ALL matches by Year AND Subject
        const matches = userItems.filter(userItem =>
            userItem.year === catItem.year &&
            (userItem.subject === catItem.subject || userItem.subject?.includes(catItem.subject.substring(0, 10)))
        );

        // For Germany, we care about mints
        const ownedMints = matches.map(m => m.mint).filter(Boolean);

        return {
            ...catItem,
            isOwned: matches.length > 0,
            userItem: matches[0], // Keep for backward compat / single items
            userItems: matches,   // All matches (for Germany)
            ownedMints            // Array of owned mints
        };
    });

    // Find "Extra" items
    const extraItems = userItems.filter(userItem =>
        !catalogList.some(catItem =>
            catItem.year === userItem.year &&
            (userItem.subject === catItem.subject || userItem.subject?.includes(catItem.subject.substring(0, 10)))
        )
    );

    const finalDisplayList = [...mergedList, ...extraItems.map(i => ({ ...i, isOwned: true, userItem: i, isExtra: true }))]
        .sort((a, b) => b.year - a.year);

    const handleCardClick = (item, isOwned, specificMint = null) => {
        // If specificMint is provided (Germany), we look for THAT specific item
        let targetItem = item.userItem;

        if (specificMint && item.userItems) {
            targetItem = item.userItems.find(i => i.mint === specificMint);
        }

        if (targetItem && (isOwned || (specificMint && targetItem))) {
            // EDIT MODE
            setSelectedCatalogItem({
                ...targetItem,
                isOwned: true
            });
        } else {
            // ADD MODE
            setSelectedCatalogItem({
                ...item,
                mint: specificMint || ''
            });
        }
        setIsModalOpen(true);
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => navigate('/euro/commemorative')}
                        className="back-btn-simple"
                        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h2 style={{ margin: 0 }}>{countryName}</h2>
                        <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                            {(() => {
                                let collected = 0;
                                let total = 0;

                                mergedList.forEach(item => {
                                    // Count Total Slots
                                    if (item.variants && item.variants.length > 0) {
                                        total += item.variants.length;
                                        // Count Collected Variants
                                        collected += (item.userItems?.length || 0);
                                    } else {
                                        total += 1;
                                        if (item.isOwned) collected += 1;
                                    }
                                });

                                // Add extra items to collected count
                                collected += extraItems.length;

                                return `${collected} / ${total}`;
                            })()}
                            {' Coleccionadas'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="commemorative-grid">
                {finalDisplayList.map((item, index) => {
                    const hasVariants = item.variants && item.variants.length > 0;
                    const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;
                    const data = item.userItem || item;

                    return (
                        <div
                            key={index}
                            className={`commemorative-card glass-panel ${!isOwned ? 'missing-item' : ''}`}
                            style={{ position: 'relative', cursor: hasVariants ? 'default' : 'pointer' }}
                            onClick={hasVariants ? undefined : () => handleCardClick(item, isOwned)}
                        >
                            {/* CSS Realistic Coin */}
                            {/* IMAGE or CSS COIN */}
                            {item.image ? (
                                <div className="real-coin-wrapper" style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '0 auto 1rem',
                                    position: 'relative',
                                    borderRadius: '50%',
                                    boxShadow: isOwned ? 'inset 0 0 20px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3)' : 'none'
                                }}>
                                    <img
                                        src={item.image}
                                        alt={data.subject}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '50%',
                                            filter: isOwned ? 'none' : 'grayscale(100%) opacity(0.5)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                    {/* Overlay ring for realism */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        borderRadius: '50%',
                                        border: '4px solid rgba(255,215,0,0.3)', // Subtle gold ring
                                        pointerEvents: 'none'
                                    }} />
                                    {/* Quantity Badge on Real Image */}
                                    {isOwned && (
                                        (() => {
                                            const totalQuantity = (item.userItems || (item.userItem ? [item.userItem] : [])).reduce((acc, i) => acc + (parseInt(i.quantity) || 1), 0);
                                            return totalQuantity > 1 ? <div className="quantity-badge" style={{ zIndex: 10 }}>{totalQuantity}</div> : null;
                                        })()
                                    )}
                                </div>
                            ) : (
                                <div className={`css-coin ${!isOwned ? 'missing' : 'owned'}`}>
                                    <div className="css-coin-content">
                                        <span className="coin-text-year">{data.year}</span>
                                        <span className="coin-text-country">2 EURO</span>
                                    </div>
                                    {/* Quantity Badge on CSS Coin */}
                                    {isOwned && (
                                        (() => {
                                            const totalQuantity = (item.userItems || (item.userItem ? [item.userItem] : [])).reduce((acc, i) => acc + (parseInt(i.quantity) || 1), 0);
                                            return totalQuantity > 1 ? <div className="quantity-badge">{totalQuantity}</div> : null;
                                        })()
                                    )}
                                </div>
                            )}

                            <div className="coin-info">
                                <div className="coin-header-row">
                                    <span className="coin-year">{data.year}</span>
                                    {isOwned && !hasVariants && <span className="coin-value">{data.value}€</span>}
                                </div>

                                <h4 className="coin-subject" style={{ opacity: isOwned ? 1 : 0.7 }}>
                                    {data.subject || item.subject}
                                </h4>

                                {item.variants && item.variants.length > 0 ? (
                                    <div className="german-mint-bar" style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                        {item.variants.map(variant => {
                                            const hasVariant = item.ownedMints?.includes(variant);
                                            return (
                                                <button
                                                    key={variant}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleCardClick(item, hasVariant, variant);
                                                    }}
                                                    className={`mint-badge ${hasVariant ? 'owned' : 'missing'}`}
                                                    style={{
                                                        minWidth: '24px',
                                                        height: '24px',
                                                        padding: '0 4px',
                                                        borderRadius: '12px',
                                                        border: hasVariant ? '1px solid #ffd700' : '1px solid rgba(255,255,255,0.2)',
                                                        background: hasVariant ? 'rgba(255, 215, 0, 0.2)' : 'transparent',
                                                        color: hasVariant ? '#ffd700' : 'rgba(255,255,255,0.4)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '0.7rem',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    title={`Variante ${variant}`}
                                                >
                                                    {variant}
                                                </button>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="coin-meta">
                                        {isOwned ? (
                                            <span className={`coin-grade grade-${data.condition}`}>{data.condition}</span>
                                        ) : null}
                                    </div>
                                )}
                            </div>

                            {/* Missing Badge (Only if NO mints owned) */}
                            {!isOwned && (
                                <div className="missing-badge">Falta</div>
                            )}
                        </div>
                    );
                })}

                {finalDisplayList.length === 0 && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', opacity: 0.6, padding: '2rem' }}>
                        No hay datos de catálogo para este país aún, pero puedes añadir monedas manualmente.
                        <br /><br />
                        <button className="add-section-btn" onClick={() => handleCardClick({}, false)}>
                            <Plus size={18} /> Añadir Manualmente
                        </button>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            <CoinDetailModal
                isOpen={!!selectedDetailCoin}
                onClose={() => setSelectedDetailCoin(null)}
                coin={selectedDetailCoin}
                country={countryName}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedCatalogItem ? null : "Añadir Conmemorativa"}
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialIsCommemorative={true}
                    initialValue="2.00"
                    initialCountry={countryName}
                    initialYear={selectedCatalogItem?.year || ''}
                    initialSubject={selectedCatalogItem?.subject || ''}
                    // EDIT PROPS
                    editId={selectedCatalogItem?.id || null} // Use ID if present (edit mode)
                    initialCondition={selectedCatalogItem?.condition || 'UNC'}
                    initialQuantity={selectedCatalogItem?.quantity || 1}
                    initialDescription={selectedCatalogItem?.description || ''}
                    initialMint={selectedCatalogItem?.mint || ''} // NEW: Pass mint
                    compactMode={!!selectedCatalogItem}
                />
            </Modal>
        </div>
    );
};

export default CommemorativeCountryView;
