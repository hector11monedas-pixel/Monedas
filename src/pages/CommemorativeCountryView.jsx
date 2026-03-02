import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Check, Info, LayoutGrid, Table as TableIcon } from 'lucide-react';
import { useCoin } from '../hooks/useCoin';
import { getCatalogForCountry } from '../data/CommemorativeCatalog';
import { SPAIN_COLLECTOR_COINS } from '../data/SpainCollectorCoins';
import { stripPriceHint } from '../utils/priceUtils';
import Modal from '../components/common/Modal';
import CoinDetailModal from '../components/common/CoinDetailModal';
import ItemForm from '../components/common/ItemForm';
import CoinImage from '../components/common/CoinImage';
import './PageLayout.css';
import './CommemorativeMenu.css';

const CommemorativeCountryView = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const { items, commemorativeVariantsEnabled } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCatalogItem, setSelectedCatalogItem] = useState(null);
    const [selectedDetailCoin, setSelectedDetailCoin] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
    const [activeTab, setActiveTab] = useState('2euro'); // '2euro' or 'collector'

    // 1. Get Catalog for this country (Standard 2€)
    const catalogList = getCatalogForCountry(countryName);

    // 2. Get User's Items for this country
    const userItems = (items || []).filter(i =>
        i.category === 'euro' &&
        i.country.toLowerCase() === countryName.toLowerCase() &&
        (i.isCommemorative === true || !!i.subject)
    );

    // 3. Merge Lists (Standard 2€ Logic)
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

    // Find "Extra" items (Standard 2€ Logic)
    const silverValues = [12, 20, 30, 40];

    const extraItems = userItems.filter(userItem =>
        !silverValues.includes(parseFloat(userItem.value)) && // Exclude silver items from "Extra" list
        !catalogList.some(catItem =>
            catItem.year === userItem.year &&
            (userItem.subject === catItem.subject || userItem.subject?.includes(catItem.subject.substring(0, 10)))
        )
    );

    const fullList = [...mergedList, ...extraItems.map(i => ({ ...i, isOwned: true, userItem: i, isExtra: true }))]
        .sort((a, b) => b.year - a.year);

    // Grouping Logic (Standard 2€)
    const groupedList = fullList.reduce((acc, item) => {
        let groupKey = item.year.toString();
        // Special separation for 2007 Treaty of Rome
        if (item.year === 2007) {
            if (item.isJoint) {
                groupKey = '2007 - Tratado de Roma (Emisión Conjunta)';
            } else {
                groupKey = '2007 - Emisión Nacional';
            }
        }
        else if (item.year === 2009 && item.isJoint) groupKey = '2009 - UEM (Emisión Conjunta)';
        else if (item.year === 2012 && item.isJoint) groupKey = '2012 - 10 Años Euro (Emisión Conjunta)';
        else if (item.year === 2015 && item.isJoint) groupKey = '2015 - Bandera Europea (Emisión Conjunta)';
        else if (item.year === 2022 && item.isJoint) groupKey = '2022 - Erasmus (Emisión Conjunta)';

        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
    }, {});

    const sortedGroupKeys = Object.keys(groupedList).sort((a, b) => {
        const yearA = parseInt(a.substring(0, 4));
        const yearB = parseInt(b.substring(0, 4));
        if (yearA !== yearB) return yearB - yearA;
        return a.length - b.length;
    });

    const handleCardClick = (item, isOwned, specificMint = null) => {
        let isSilver = false;
        let userItemId = null;
        let targetItem = null;

        // Check for Collector Coins (Silver)
        if (activeTab === 'collector' && countryName.toLowerCase() === 'españa') {
            isSilver = true;
            // For collector coins, item.userItem IS the user item if it exists
            if (item.userItem) {
                userItemId = item.userItem.id;
                targetItem = item.userItem;
            }
        }
        else if (specificMint) {
            // Find EXPLICIT variant match if mint is provided
            const variantMatch = (item.userItems || []).find(i => i.mint === specificMint);
            if (variantMatch) {
                userItemId = variantMatch.id;
                targetItem = variantMatch;
            }
        }
        else if (item.userItem) {
            // If no specific mint requested, default to the first match
            userItemId = item.userItem.id;
            targetItem = item.userItem;
        }

        let initialEstimatedValue = '';
        if (item.estimatedPrice) {
            const cleanStr = item.estimatedPrice.toString().replace(/[€$£]/g, '').trim();
            if (cleanStr.includes('-')) {
                const parts = cleanStr.split('-').map(p => parseFloat(p.replace(',', '.')));
                if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                    initialEstimatedValue = ((parts[0] + parts[1]) / 2).toString();
                }
            } else {
                const num = parseFloat(cleanStr.replace(',', '.'));
                if (!isNaN(num)) initialEstimatedValue = num.toString();
            }
        }

        // If specificMint has a price hint, extract it
        if (specificMint && specificMint.includes('(') && specificMint.includes('€')) {
            const hintMatch = specificMint.match(/\((\d+([.,]\d+)?)\s*€\)/);
            if (hintMatch && hintMatch[1]) {
                initialEstimatedValue = parseFloat(hintMatch[1].replace(',', '.')).toString();
            }
        }

        setSelectedCatalogItem({
            ...item,
            mint: specificMint || '',
            faceValue: isSilver ? item.value : 2,
            isSilver: isSilver,
            userItemId: userItemId, // STORE CORRECT ID OR NULL
            initialEstimatedValue: initialEstimatedValue
        });

        if (targetItem && (isOwned || (specificMint && targetItem))) {
            // EDIT OVERRIDE
            setSelectedCatalogItem({
                ...targetItem,
                isOwned: true,
                sectionCountry: item.country,
                userItemId: targetItem.id, // Explicitly store Firestore ID
                initialEstimatedValue: initialEstimatedValue
            });
        }

        setIsModalOpen(true);
    };

    // Calculate Collection Stats
    const getStats = () => {
        if (activeTab === 'collector') {
            const total = SPAIN_COLLECTOR_COINS.length;
            const collected = SPAIN_COLLECTOR_COINS.reduce((acc, coin) => {
                const isOwned = userItems.some(i => i.year === coin.year.toString() && parseFloat(i.value) === coin.value);
                return acc + (isOwned ? 1 : 0);
            }, 0);
            return { collected, total };
        } else {
            // 2€ Stats
            let collected = 0;
            let total = 0;
            mergedList.forEach(item => {
                const hasVariants = commemorativeVariantsEnabled && item.variants && item.variants.length > 0;
                if (hasVariants) {
                    total += item.variants.length;
                    collected += (item.userItems?.length || 0);
                } else {
                    total += 1;
                    if (item.isOwned) collected += 1;
                }
            });
            collected += extraItems.length;
            return { collected, total };
        }
    };

    const stats = getStats();

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
                            {stats.collected} / {stats.total} Coleccionadas
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

            {/* Spain Tabs */}
            {countryName.toLowerCase() === 'españa' && (
                <div className="mint-tabs-container" style={{ margin: '0 1rem 1rem' }}>
                    <div className="mint-tabs" style={{ display: 'flex', gap: '6px' }}>
                        <button
                            className={`mint-tab ${activeTab === '2euro' ? 'active' : ''}`}
                            onClick={() => setActiveTab('2euro')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: activeTab === '2euro' ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                                color: 'white',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            2€ Conmemorativas
                        </button>
                        <button
                            className={`mint-tab ${activeTab === 'collector' ? 'active' : ''}`}
                            onClick={() => setActiveTab('collector')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: activeTab === 'collector' ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                                color: 'white',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            12€ - 40€ (Plata)
                        </button>
                    </div>
                </div>
            )}

            {activeTab === 'collector' && countryName.toLowerCase() === 'españa' ? (
                /* COLLECTOR COINS VIEW (12€ - 40€) */
                <div className="coin-grid-container" style={{ padding: '0 1rem', overflowY: 'auto' }}>
                    {[12, 20, 30, 40].map(denomValue => {
                        const coinsOfDenom = SPAIN_COLLECTOR_COINS.filter(c => c.value === denomValue);
                        if (coinsOfDenom.length === 0) return null;

                        return (
                            <div key={denomValue} style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    textAlign: 'left',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingBottom: '0.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--primary-color)',
                                    fontSize: '1.2rem'
                                }}>
                                    {denomValue} Euros
                                </h3>
                                <div className="commemorative-grid">
                                    {coinsOfDenom.map((coin, index) => {
                                        // RELAXED COMPARISON: Handle year as string or number
                                        const userItem = userItems.find(i => i.year.toString() === coin.year.toString() && parseFloat(i.value) === coin.value);
                                        const isOwned = !!userItem;

                                        const itemObj = {
                                            ...coin,
                                            subject: coin.name,
                                            userItem: userItem,
                                            isOwned: isOwned,
                                            value: coin.value,
                                            isSilver: true
                                        };

                                        return (
                                            <div
                                                key={index}
                                                className={`commemorative-card glass-panel ${!isOwned ? 'missing-item' : ''}`}
                                                style={{ position: 'relative', cursor: 'pointer' }}
                                                onClick={() => handleCardClick(itemObj, isOwned)}
                                            >
                                                {/* Info Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedDetailCoin(itemObj);
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
                                                        zIndex: 10
                                                    }}
                                                >
                                                    <Info size={16} />
                                                </button>

                                                {/* CoinImage handling both Image and Fallback with Badge */}
                                                <CoinImage
                                                    src={coin.image}
                                                    alt={coin.name}
                                                    isOwned={isOwned}
                                                    className="real-coin-wrapper"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        margin: '0 auto 1rem'
                                                    }}
                                                    fallback={
                                                        <div style={{
                                                            width: '100px',
                                                            height: '100px',
                                                            margin: '0 auto 1rem',
                                                            borderRadius: '50%',
                                                            background: 'linear-gradient(135deg, #e0e0e0 0%, #bdc3c7 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#333',
                                                            fontSize: '1.2rem',
                                                            fontWeight: 'bold',
                                                            border: '4px solid #95a5a6',
                                                            opacity: isOwned ? 1 : 0.5,
                                                            position: 'relative'
                                                        }}>
                                                            {coin.value}€
                                                            {isOwned && (
                                                                (() => {
                                                                    const qty = parseInt(userItem?.quantity) || 1;
                                                                    return qty > 1 ? <div className="quantity-badge" style={{ zIndex: 10 }}>{qty}</div> : null;
                                                                })()
                                                            )}
                                                        </div>
                                                    }
                                                >
                                                    {isOwned && (
                                                        (() => {
                                                            const qty = parseInt(userItem?.quantity) || 1;
                                                            return qty > 1 ? <div className="quantity-badge" style={{ zIndex: 10 }}>{qty}</div> : null;
                                                        })()
                                                    )}
                                                </CoinImage>

                                                <div className="coin-info">
                                                    <div className="coin-header-row">
                                                        <span className="coin-year">{coin.year}</span>
                                                        {isOwned && (
                                                            <span className="coin-value" style={{ marginLeft: 'auto', color: '#4ade80' }}>
                                                                {userItem.estimatedValue ? `${userItem.estimatedValue}€` : ''}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h4 className="coin-subject" style={{ opacity: isOwned ? 1 : 0.7 }}>
                                                        {coin.name}
                                                    </h4>
                                                    <div className="coin-meta">
                                                        {isOwned ? (
                                                            <span className={`coin-grade grade-${userItem.condition}`}>{userItem.condition}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                /* STANDARD 2€ VIEW */
                viewMode === 'grid' ? (
                    <div className="commemorative-grid-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
                        {sortedGroupKeys.map(groupKey => (
                            <div key={groupKey} className="year-group">
                                <h3 style={{
                                    textAlign: 'left',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingBottom: '0.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--primary-color)',
                                    fontSize: '1.2rem'
                                }}>
                                    {groupKey}
                                </h3>
                                <div className="commemorative-grid">
                                    {groupedList[groupKey].map((item, index) => {
                                        const hasVariants = commemorativeVariantsEnabled && item.variants && item.variants.length > 0;
                                        const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;
                                        const data = item.userItem || item;

                                        return (
                                            <div
                                                key={index}
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
                                                        zIndex: 10
                                                    }}
                                                    title="Ver Detalles"
                                                >
                                                    <Info size={16} />
                                                </button>

                                                {/* Start CoinImage Replacement */}
                                                <CoinImage
                                                    src={item.image}
                                                    alt={data.subject}
                                                    isOwned={isOwned}
                                                    className="real-coin-wrapper"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        margin: '0 auto 1rem'
                                                    }}
                                                    fallback={
                                                        <div className={`css-coin ${!isOwned ? 'missing' : 'owned'}`} style={item.isSilver ? {
                                                            background: 'linear-gradient(135deg, #e0e0e0 0%, #bdc3c7 100%)',
                                                            border: '4px solid #95a5a6'
                                                        } : {}}>
                                                            <div className="css-coin-content">
                                                                <span className="coin-text-year">{data.year}</span>
                                                                <span className="coin-text-country">{item.faceValue ? `${item.faceValue} EURO` : '2 EURO'}</span>
                                                            </div>
                                                            {/* Quantity Badge on CSS Coin */}
                                                            {isOwned && (
                                                                (() => {
                                                                    const totalQuantity = (item.userItems || (item.userItem ? [item.userItem] : [])).reduce((acc, i) => acc + (parseInt(i.quantity) || 1), 0);
                                                                    return totalQuantity > 1 ? <div className="quantity-badge">{totalQuantity}</div> : null;
                                                                })()
                                                            )}
                                                        </div>
                                                    }
                                                >
                                                    {/* Quantity Badge on Real Image */}
                                                    {isOwned && (
                                                        (() => {
                                                            const totalQuantity = (item.userItems || (item.userItem ? [item.userItem] : [])).reduce((acc, i) => acc + (parseInt(i.quantity) || 1), 0);
                                                            return totalQuantity > 1 ? <div className="quantity-badge" style={{ zIndex: 10 }}>{totalQuantity}</div> : null;
                                                        })()
                                                    )}
                                                </CoinImage>
                                                {/* End CoinImage Replacement */}

                                                <div className="coin-info">
                                                    <div className="coin-header-row">
                                                        <span className="coin-year">{data.year}</span>

                                                        {/* Inline Info Button */}
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedDetailCoin(item);
                                                            }}
                                                            style={{
                                                                background: 'rgba(255, 215, 0, 0.1)',
                                                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                                                color: '#ffd700',
                                                                borderRadius: '12px',
                                                                padding: '2px 8px',
                                                                fontSize: '0.7rem',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px',
                                                                marginLeft: 'auto'
                                                            }}
                                                        >
                                                            <Info size={12} /> Info
                                                        </button>

                                                        {isOwned && !hasVariants && <span className="coin-value" style={{ marginLeft: '8px' }}></span>}
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
                                                                        title={`Variante ${stripPriceHint(variant)} `}
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
                                                            ) : null}
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
                                    <th className="year-header" style={{ width: '80px' }}>Año</th>
                                    <th style={{ textAlign: 'left', padding: '1rem' }}>Motivo / Descripción</th>
                                    <th style={{ width: '120px' }}>Estado</th>
                                    <th style={{ width: '80px' }}>Cant.</th>
                                    <th style={{ width: '100px' }}>Valor est.</th>
                                    <th style={{ width: '60px' }}>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fullList.map((item, index) => {
                                    const hasVariants = commemorativeVariantsEnabled && item.variants && item.variants.length > 0;
                                    const isOwned = hasVariants ? (item.ownedMints && item.ownedMints.length > 0) : item.isOwned;

                                    if (hasVariants) {
                                        return item.variants.map(variant => {
                                            const userItem = item.userItems?.find(i => i.mint === variant);
                                            const isVariantOwned = !!userItem;

                                            return (
                                                <tr key={`${index} -${variant} `} className={isVariantOwned ? 'collected' : ''}>
                                                    <td className="year-cell">{item.year}</td>
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
                                            <td className="year-cell">{item.year}</td>
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
                )
            )}

            {sortedGroupKeys.length === 0 && activeTab === '2euro' && (
                <div style={{ textAlign: 'center', opacity: 0.6, padding: '2rem' }}>
                    No hay datos de catálogo para este país aún, pero puedes añadir monedas manualmente.
                    <br /><br />
                    <button className="add-section-btn" onClick={() => handleCardClick({}, false)}>
                        <Plus size={18} /> Añadir Manualmente
                    </button>
                </div>
            )}

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
                    key={`${selectedCatalogItem?.id || 'new'}-${selectedCatalogItem?.mint || 'base'}-${selectedCatalogItem?.year || 'year'}`}
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialIsCommemorative={true}
                    initialValue={selectedCatalogItem?.faceValue ? selectedCatalogItem.faceValue.toString() : "2.00"}
                    initialCountry={countryName}
                    initialYear={selectedCatalogItem?.year || ''}
                    initialSubject={selectedCatalogItem?.subject || ''}
                    initialVariants={selectedCatalogItem?.variants || []}
                    // EDIT PROPS
                    editId={selectedCatalogItem?.userItemId || null}
                    initialCondition={selectedCatalogItem?.condition || 'UNC'}
                    initialQuantity={selectedCatalogItem?.quantity || 1}
                    initialDescription={selectedCatalogItem?.description || ''}
                    initialMint={selectedCatalogItem?.mint || ''}
                    initialEstimatedValue={selectedCatalogItem?.initialEstimatedValue || ''}
                    compactMode={!!selectedCatalogItem}
                />
            </Modal>
        </div >
    );
};

export default CommemorativeCountryView;
