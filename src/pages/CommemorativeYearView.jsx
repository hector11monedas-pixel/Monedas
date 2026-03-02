import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Plus, Info, LayoutGrid, Table as TableIcon } from 'lucide-react';
import { useCoin } from '../hooks/useCoin';
import { getCommemorativesByYear } from '../data/CommemorativeCatalog';
import { stripPriceHint } from '../utils/priceUtils';
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
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

    const yearInt = parseInt(year);

    // 1. Get Catalog Items for this Year across ALL countries
    const catalogList = useMemo(() => {
        return getCommemorativesByYear(yearInt)
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

        let finalEstimatedValue = '';
        if (item.estimatedPrice) {
            const cleanStr = item.estimatedPrice.toString().replace(/[€$£]/g, '').trim();
            if (cleanStr.includes('-')) {
                const parts = cleanStr.split('-').map(p => parseFloat(p.replace(',', '.')));
                if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                    finalEstimatedValue = ((parts[0] + parts[1]) / 2).toString();
                }
            } else {
                const num = parseFloat(cleanStr.replace(',', '.'));
                if (!isNaN(num)) finalEstimatedValue = num.toString();
            }
        }

        if (specificMint && specificMint.includes('(') && specificMint.includes('€')) {
            const hintMatch = specificMint.match(/\((\d+([.,]\d+)?)\s*€\)/);
            if (hintMatch && hintMatch[1]) {
                finalEstimatedValue = parseFloat(hintMatch[1].replace(',', '.')).toString();
            }
        }

        if (targetItem && (isOwned || (specificMint && targetItem))) {
            // EDIT
            setSelectedCatalogItem({
                ...targetItem,
                isOwned: true,
                sectionCountry: item.country,
                userItemId: targetItem.id, // Explicitly store Firestore ID
                initialEstimatedValue: finalEstimatedValue
            });
        } else {
            // ADD
            setSelectedCatalogItem({
                ...item,
                mint: specificMint || '',
                sectionCountry: item.country,
                userItemId: null, // Ensure it is null for new items
                initialEstimatedValue: finalEstimatedValue
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
                        onClick={() => navigate('/euro/commemorative?tab=year')}
                        className="back-btn-simple"
                        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h2 style={{ margin: 0 }}>Año {year} <span style={{ fontSize: '0.6em', opacity: 0.5 }}>(v2.1)</span></h2>
                        <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                            {finalList.length} Emisiones Totales
                        </span>
                    </div>
                </div>

                <div className="view-toggle glass-panel" style={{ display: 'flex', padding: '4px', borderRadius: '12px', gap: '4px', background: 'rgba(255,255,255,0.05)' }}>
                    <button
                        className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                        onClick={() => setViewMode('table')}
                        title="Modo Tabla"
                        style={{ padding: '8px', borderRadius: '8px', border: 'none', background: viewMode === 'table' ? 'var(--primary-color)' : 'transparent', color: viewMode === 'table' ? 'white' : 'var(--text-dim)', cursor: 'pointer', display: 'flex' }}
                    >
                        <TableIcon size={20} />
                    </button>
                    <button
                        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                        title="Modo Monedas"
                        style={{ padding: '8px', borderRadius: '8px', border: 'none', background: viewMode === 'grid' ? 'var(--primary-color)' : 'transparent', color: viewMode === 'grid' ? 'white' : 'var(--text-dim)', cursor: 'pointer', display: 'flex' }}
                    >
                        <LayoutGrid size={20} />
                    </button>
                </div>
            </div>

            {viewMode === 'grid' ? (
                <div style={{ padding: '0 1rem', paddingBottom: '2rem' }}>
                    {Object.entries(
                        finalList.reduce((acc, item) => {
                            let groupKey = 'Emisiones Nacionales'; // Default bucket

                            // 2007 Separation
                            if (item.year === 2007) {
                                if (item.isJoint) groupKey = 'Tratado de Roma (Emisión Conjunta)';
                                else groupKey = 'Emisiones Nacionales'; // Grace Kelly, Germany Schwerin, etc.
                            }
                            // 2009 Separation
                            else if (item.year === 2009 && item.isJoint) groupKey = 'UEM (Emisión Conjunta)';
                            // 2012 Separation
                            else if (item.year === 2012 && item.isJoint) groupKey = '10 Años Euro (Emisión Conjunta)';
                            // 2015 Separation
                            else if (item.year === 2015 && item.isJoint) groupKey = 'Bandera Europea (Emisión Conjunta)';
                            // 2022 Separation
                            else if (item.year === 2022 && item.isJoint) groupKey = 'Erasmus (Emisión Conjunta)';

                            if (!acc[groupKey]) acc[groupKey] = [];
                            acc[groupKey].push(item);
                            return acc;
                        }, {})
                    ).sort((a, b) => {
                        if (a[0] === 'Emisiones Nacionales') return -1;
                        if (b[0] === 'Emisiones Nacionales') return 1;
                        return a[0].localeCompare(b[0]);
                    }).map(([groupTitle, items]) => (
                        <div key={groupTitle} style={{ marginBottom: '2rem' }}>
                            <h3 className="text-secondary" style={{
                                fontSize: '1.1rem',
                                marginBottom: '1rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '0.5rem'
                            }}>
                                {groupTitle}
                            </h3>

                            <div className="commemorative-grid">
                                {items.map((item, index) => {
                                    const hasVariants = item.variants && item.variants.length > 0;
                                    const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;
                                    const data = item.userItem || item;

                                    return (
                                        <div
                                            key={`${item.country}-${item.subject}-${index}`}
                                            className={`commemorative-card glass-panel ${!isOwned ? 'missing-item' : ''}`}
                                            style={{ position: 'relative', cursor: hasVariants ? 'default' : 'pointer' }}
                                            onClick={hasVariants ? undefined : () => handleCardClick(item, isOwned)}
                                        >
                                            {/* Info Button */}
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

                                            {/* Coin Image */}
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
                                                                    title={`Variante ${stripPriceHint(variant)}`}
                                                                >
                                                                    {stripPriceHint(variant)}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <div className="coin-meta">
                                                        {isOwned ? (
                                                            <span className={`coin-grade grade-${data.condition}`}>{data.condition}</span>
                                                        ) : (
                                                            <div className="add-badge" style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px',
                                                                color: 'var(--primary-color)',
                                                                fontSize: '0.8rem',
                                                                fontWeight: 'bold',
                                                                background: 'rgba(255, 215, 0, 0.1)',
                                                                padding: '2px 8px',
                                                                borderRadius: '12px',
                                                                border: '1px solid rgba(255, 215, 0, 0.3)'
                                                            }}>
                                                                <Plus size={14} /> Añadir
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="commemorative-table-container glass-panel" style={{ margin: '1rem', padding: '1rem', overflowX: 'auto' }}>
                    <table className="euro-matrix" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>País</th>
                                <th style={{ textAlign: 'left', padding: '1rem' }}>Motivo / Descripción</th>
                                <th style={{ width: '120px' }}>Estado</th>
                                <th style={{ width: '80px' }}>Cant.</th>
                                <th style={{ width: '100px' }}>Valor est.</th>
                                <th style={{ width: '60px' }}>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {finalList.map((item, index) => {
                                const hasVariants = item.variants && item.variants.length > 0;
                                const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;

                                if (hasVariants) {
                                    return item.variants.map(variant => {
                                        const userItem = item.userItems?.find(i => i.mint === variant);
                                        const isVariantOwned = !!userItem;

                                        return (
                                            <tr key={`${index}-${variant}`} className={isVariantOwned ? 'collected' : ''}>
                                                <td style={{ textAlign: 'center' }}>
                                                    <img
                                                        src={`https://flagcdn.com/w20/${getCountryCode(item.country)}.png`}
                                                        alt={item.country}
                                                        title={item.country}
                                                        style={{ width: '20px', borderRadius: '2px' }}
                                                    />
                                                </td>
                                                <td style={{ textAlign: 'left', padding: '1rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{stripPriceHint(variant)}</span>
                                                        <span>{item.subject}</span>
                                                    </div>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    {isVariantOwned ? (
                                                        <span className={`coin-grade grade-${userItem.condition}`}>{userItem.condition}</span>
                                                    ) : '-'}
                                                </td>
                                                <td style={{ textAlign: 'center' }}>{isVariantOwned ? (userItem.quantity || 1) : 0}</td>
                                                <td style={{ textAlign: 'center', color: '#4ade80', fontWeight: 'bold' }}>
                                                    {isVariantOwned && userItem.estimatedValue ? `${userItem.estimatedValue}€` : '-'}
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <button
                                                        onClick={() => handleCardClick(item, isVariantOwned, variant)}
                                                        className="add-indicator"
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    });
                                }

                                return (
                                    <tr key={index} className={isOwned ? 'collected' : ''}>
                                        <td style={{ textAlign: 'center' }}>
                                            <img
                                                src={`https://flagcdn.com/w20/${getCountryCode(item.country)}.png`}
                                                alt={item.country}
                                                title={item.country}
                                                style={{ width: '20px', borderRadius: '2px' }}
                                            />
                                        </td>
                                        <td style={{ textAlign: 'left', padding: '1rem' }}>{item.subject}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {isOwned ? (
                                                <span className={`coin-grade grade-${item.userItem?.condition}`}>{item.userItem?.condition}</span>
                                            ) : '-'}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>{isOwned ? (item.userItem?.quantity || 1) : 0}</td>
                                        <td style={{ textAlign: 'center', color: '#4ade80', fontWeight: 'bold' }}>
                                            {isOwned && item.userItem?.estimatedValue ? `${item.userItem.estimatedValue}€` : '-'}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button
                                                onClick={() => handleCardClick(item, isOwned)}
                                                className="add-indicator"
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

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
                    key={`${selectedCatalogItem?.id || 'new-item'}-${selectedCatalogItem?.mint || 'base'}-${selectedCatalogItem?.year || 'year'}`}
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialIsCommemorative={true}
                    initialValue="2.00"
                    initialCountry={selectedCatalogItem?.sectionCountry || ''}
                    initialYear={selectedCatalogItem?.year || year}
                    initialSubject={selectedCatalogItem?.subject || ''}
                    initialVariants={selectedCatalogItem?.variants || []}
                    editId={selectedCatalogItem?.userItemId || null}
                    initialCondition={selectedCatalogItem?.condition || 'UNC'}
                    initialQuantity={selectedCatalogItem?.quantity || 1}
                    initialDescription={selectedCatalogItem?.description || ''}
                    initialMint={selectedCatalogItem?.mint || ''}
                    initialEstimatedValue={selectedCatalogItem?.initialEstimatedValue || ''}
                    compactMode={!!selectedCatalogItem}
                />
            </Modal>
        </div>
    );
};

export default CommemorativeYearView;
