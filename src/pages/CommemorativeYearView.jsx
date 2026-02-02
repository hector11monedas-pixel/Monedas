import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Plus, Info } from 'lucide-react';
import { useCoin } from '../context/CoinContext';
import { COMMEMORATIVE_CATALOG } from '../data/CommemorativeCatalog';
import CoinImage from '../components/common/CoinImage';
import Modal from '../components/common/Modal';
import CoinDetailModal from '../components/common/CoinDetailModal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './CommemorativeMenu.css';

const CommemorativeYearView = () => {
    const { year } = useParams();
    const navigate = useNavigate();
    const { items } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCatalogItem, setSelectedCatalogItem] = useState(null);
    const [selectedDetailCoin, setSelectedDetailCoin] = useState(null);

    const yearInt = parseInt(year);

    // 1. Get Catalog Items for this Year across ALL countries
    const catalogList = useMemo(() => {
        return COMMEMORATIVE_CATALOG.filter(item => item.year === yearInt)
            // Sort by Country Name
            .sort((a, b) => a.country.localeCompare(b.country));
    }, [yearInt]);

    // 2. Get User's Items for this Year
    const userItems = useMemo(() => {
        return (items || []).filter(i =>
            i.category === 'euro' &&
            i.year === yearInt &&
            (i.isCommemorative === true || !!i.subject)
        );
    }, [items, yearInt]);

    // 3. Merge Lists
    const finalList = useMemo(() => {
        return catalogList.map(catItem => {
            // Find matches by Country AND Subject
            const matches = userItems.filter(userItem =>
                userItem.country === catItem.country &&
                (userItem.subject === catItem.subject || userItem.subject?.includes(catItem.subject.substring(0, 10)))
            );

            const ownedMints = matches.map(m => m.mint).filter(Boolean);

            return {
                ...catItem,
                isOwned: matches.length > 0,
                userItem: matches[0],
                userItems: matches,
                ownedMints
            };
        });
    }, [catalogList, userItems]);

    const handleCardClick = (item, isOwned, specificMint = null) => {
        let targetItem = item.userItem;
        if (specificMint && item.userItems) {
            targetItem = item.userItems.find(i => i.mint === specificMint);
        }

        if (targetItem && (isOwned || (specificMint && targetItem))) {
            // EDIT
            setSelectedCatalogItem({
                ...targetItem,
                isOwned: true,
                sectionCountry: item.country
            });
        } else {
            // ADD
            setSelectedCatalogItem({
                ...item,
                mint: specificMint || '',
                sectionCountry: item.country
            });
        }
        setIsModalOpen(true);
    };

    // Helper to get flag
    const getCountryCode = (name) => {
        const countryCodes = {
            'Alemania': 'de', 'Andorra': 'ad', 'Austria': 'at', 'Bélgica': 'be',
            'Chipre': 'cy', 'Eslovaquia': 'sk', 'Eslovenia': 'si', 'España': 'es',
            'Estonia': 'ee', 'Finlandia': 'fi', 'Francia': 'fr', 'Grecia': 'gr',
            'Irlanda': 'ie', 'Italia': 'it', 'Letonia': 'lv', 'Lituania': 'lt',
            'Luxemburgo': 'lu', 'Malta': 'mt', 'Mónaco': 'mc', 'Países Bajos': 'nl',
            'Portugal': 'pt', 'San Marino': 'sm', 'Vaticano': 'va', 'Croacia': 'hr',
            'Bulgaria': 'bg'
        };
        return countryCodes[name] || 'eu';
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
                        <h2 style={{ margin: 0 }}>Año {year}</h2>
                        <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                            {finalList.length} Emisiones Totales
                        </span>
                    </div>
                </div>
            </div>

            <div className="commemorative-grid">
                {finalList.map((item, index) => {
                    const hasVariants = item.variants && item.variants.length > 0;
                    const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;
                    const data = item.userItem || item;

                    return (
                        <div
                            key={`${item.country}-${index}`}
                            className={`commemorative-card glass-panel ${!isOwned ? 'missing-item' : ''}`}
                            style={{ position: 'relative', cursor: hasVariants ? 'default' : 'pointer' }}
                            onClick={hasVariants ? undefined : () => handleCardClick(item, isOwned)}
                        >
                            {/* Info Button - Top Left */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedDetailCoin(item);
                                }}
                                className="info-btn-overlay"
                                style={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '8px',
                                    background: 'rgba(0,0,0,0.6)',
                                    color: '#ffd700',
                                    border: '1px solid rgba(255,215,0,0.3)',
                                    borderRadius: '50%',
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 100
                                }}
                                title="Ver Detalles"
                            >
                                <Info size={16} />
                            </button>
                            {/* Country Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                background: 'rgba(0,0,0,0.6)',
                                padding: '2px 6px',
                                borderRadius: '8px',
                                zIndex: 2
                            }}>
                                <img
                                    src={`https://flagcdn.com/w20/${getCountryCode(item.country)}.png`}
                                    alt={item.country}
                                    style={{ width: '16px', height: '12px', objectFit: 'cover' }}
                                />
                                <span style={{ fontSize: '0.7rem', color: '#fff' }}>{item.country.substring(0, 3).toUpperCase()}</span>
                            </div>

                            {/* Coin Image with Fallback */}
                            <CoinImage
                                src={item.image}
                                alt={data.subject}
                                isOwned={isOwned}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    margin: '0 auto 10px'
                                }}
                                fallback={
                                    <div className={`css-coin ${!isOwned ? 'missing' : 'owned'}`}>
                                        <div className="css-coin-content">
                                            <span className="coin-text-year">{data.year}</span>
                                            <span className="coin-text-country">{item.country.substring(0, 3)}</span>
                                        </div>
                                    </div>
                                }
                            />

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

                            {/* Missing Badge Removed */}
                        </div>
                    );
                })}
            </div>

            {/* Detail Modal */}
            <CoinDetailModal
                isOpen={!!selectedDetailCoin}
                onClose={() => setSelectedDetailCoin(null)}
                coin={selectedDetailCoin}
                country={selectedDetailCoin?.country}
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
                    initialCountry={selectedCatalogItem?.sectionCountry || ''}
                    initialYear={selectedCatalogItem?.year || year}
                    initialSubject={selectedCatalogItem?.subject || ''}
                    editId={selectedCatalogItem?.id || null}
                    initialCondition={selectedCatalogItem?.condition || 'UNC'}
                    initialQuantity={selectedCatalogItem?.quantity || 1}
                    initialDescription={selectedCatalogItem?.description || ''}
                    initialMint={selectedCatalogItem?.mint || ''}
                    compactMode={!!selectedCatalogItem}
                />
            </Modal>
        </div>
    );
};

export default CommemorativeYearView;
