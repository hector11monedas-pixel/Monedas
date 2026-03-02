import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCoin } from '../hooks/useCoin';
import { ArrowLeft, Banknote } from 'lucide-react';
import { BANKNOTE_DATA } from '../data/BanknoteData';
import BanknoteCard from '../components/common/BanknoteCard';
import VirtualGrid from '../components/common/VirtualGrid';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './EuroCountryView.css'; // Reusing established styles
import './CommemorativeMenu.css'; // Reusing for grid layout

const BanknoteCountryView = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();
    const { items } = useCoin();

    const countryData = useMemo(() => {
        return BANKNOTE_DATA[countryId] || null;
    }, [countryId]);

    const [selectedSeriesId, setSelectedSeriesId] = useState(null);
    const [selectedBanknote, setSelectedBanknote] = useState(null);
    const [isFormMode, setIsFormMode] = useState(false);

    // Filters for thumbnails view
    const [filterValue, setFilterValue] = useState('all');

    // Filter collection items for this country's banknotes
    const collectedBanknoteIds = useMemo(() => {
        if (!countryData) return new Set();
        const collectedIds = new Set();
        items.forEach(item => {
            if (item.category === 'banknote' && item.country === countryData.country) {
                // Check by ID if available (new way) or value (legacy/fallback)
                if (item.banknoteId) {
                    collectedIds.add(item.banknoteId);
                } else if (item.value) {
                    // For legacy items without banknoteId, we might match by value
                    // But strictly speaking, we prefer ID.
                    // Let's assume generic match for now if ID is missing.
                    // But to be precise for new feature, we primarily rely on ID.
                    // If we want to support legacy "value-only" collections, 
                    // we would need to know which ID that value corresponds to.
                    // For now, let's just track IDs.
                }
            }
        });
        return collectedIds;
    }, [items, countryData]);

    // Check if a specific banknote is collected (by ID)
    const isBanknoteCollected = (banknote) => {
        return collectedBanknoteIds.has(banknote.id) ||
            // Fallback: check if we have any item with this value AND no banknoteId (legacy)
            items.some(i => i.category === 'banknote' && i.country === countryData.country && i.value === banknote.value && !i.banknoteId);
    };

    // Find ALL collected items for a specific banknote
    const getCollectedItems = (banknote) => {
        return items.filter(i =>
            i.category === 'banknote' &&
            i.country === countryData.country &&
            i.banknoteId === banknote.id
        );
    };

    // Find the actual item object from the collection primarily for editing (legacy or first one)
    const getCollectedItem = (banknote) => {
        return items.find(i =>
            i.category === 'banknote' &&
            i.country === countryData.country &&
            (i.banknoteId === banknote.id || (!i.banknoteId && i.value === banknote.value))
        );
    };



    // Determine current view content
    const activeSeries = selectedSeriesId
        ? countryData?.seriesList?.find(s => s.id === selectedSeriesId)
        : null;

    // Filtered banknotes if a series is selected
    const filteredBanknotes = useMemo(() => {
        if (!activeSeries) return [];
        let list = activeSeries.banknotes;

        if (filterValue !== 'all') {
            list = list.filter(b => b.value.toString() === filterValue);
        }

        return list;
    }, [activeSeries, filterValue]);

    // Unique values for the value filter
    const availableValues = useMemo(() => {
        if (!activeSeries) return [];
        const values = new Set();
        activeSeries.banknotes.forEach(b => values.add(b.value.toString()));
        return Array.from(values).sort((a, b) => parseFloat(a) - parseFloat(b));
    }, [activeSeries]);

    if (!countryData) {
        return (
            <div className="page-container">
                <div className="page-header" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>País no encontrado</h2>
                    <button onClick={() => navigate('/banknotes')} className="back-btn-simple">
                        Volver
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container country-view-page">

            {/* Header */}
            <div className="page-header sticky-header">
                <div className="header-content">
                    <div className="title-row">
                        <button
                            onClick={() => {
                                if (selectedSeriesId) {
                                    setSelectedSeriesId(null);
                                } else {
                                    navigate('/banknotes');
                                }
                            }}
                            className="back-btn-simple"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div className="header-title-stack">
                            <h1>{countryData.country}</h1>
                            <span className="subtitle">{activeSeries ? activeSeries.name : countryData.currency}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-scrollable">

                {!activeSeries ? (
                    /* SERIES LIST VIEW */
                    <div className="grid-container" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem',
                        padding: '1rem'
                    }}>
                        {countryData.seriesList?.map(series => (
                            <div
                                key={series.id}
                                onClick={() => setSelectedSeriesId(series.id)}
                                style={{
                                    background: 'linear-gradient(135deg, #2c2c2c 0%, #1e1e1e 100%)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '120px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.5)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                            >
                                <div>
                                    <h3 style={{
                                        margin: '0 0 0.5rem 0',
                                        color: '#fff',
                                        fontSize: '1.1rem',
                                        fontWeight: '600'
                                    }}>
                                        {series.name}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        color: '#aaa',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.4'
                                    }}>
                                        {series.description}
                                    </p>
                                </div>
                                <div style={{
                                    marginTop: '1rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    paddingTop: '0.75rem'
                                }}>
                                    <span style={{
                                        color: '#FFD700',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {series.banknotes.length} Billetes
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* BANKNOTE LIST VIEW (THUMBNAILS) */
                    <div className="series-section" style={{ padding: '0 1rem 2rem' }}>
                        <div className="series-header" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '0.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Banknote color="#FFD700" size={24} />
                                <h2 style={{
                                    margin: 0,
                                    fontSize: '1.5rem',
                                    color: '#fff',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}>{activeSeries.name}</h2>
                            </div>

                            <div className="filters-row" style={{ display: 'flex', gap: '10px' }}>
                                <select
                                    className="glass-input"
                                    style={{ height: '35px', padding: '0 10px', fontSize: '0.85rem', width: 'auto' }}
                                    value={filterValue}
                                    onChange={(e) => setFilterValue(e.target.value)}
                                >
                                    <option value="all">Todos los valores</option>
                                    {availableValues.map(val => (
                                        <option key={val} value={val}>{val} {activeSeries.banknotes[0]?.unit}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {activeSeries.description && filterValue === 'all' && (
                            <p style={{ color: '#aaa', marginBottom: '1.5rem', marginTop: '-0.5rem' }}>
                                {activeSeries.description}
                            </p>
                        )}

                        <div style={{ height: 'calc(100vh - 250px)', minHeight: '500px' }}>
                            <VirtualGrid
                                items={filteredBanknotes}
                                minItemWidth={140}
                                itemHeight={160}
                                gap={16}
                                renderItem={(banknote) => {
                                    const isCollected = isBanknoteCollected(banknote);
                                    const collectedItems = getCollectedItems(banknote);
                                    return (
                                        <div
                                            className={`banknote-thumbnail ${isCollected ? 'collected' : ''}`}
                                            onClick={() => setSelectedBanknote(banknote)}
                                            style={{
                                                cursor: 'pointer',
                                                background: '#1e1e1e',
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                border: isCollected ? '1px solid #4CAF50' : '1px solid rgba(255,255,255,0.1)',
                                                boxShadow: isCollected ? '0 0 10px rgba(76, 175, 80, 0.2)' : 'none',
                                                transition: 'transform 0.2s',
                                                position: 'relative',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            <div style={{ padding: '0.4rem', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
                                                <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.8rem' }}>{banknote.value} {banknote.unit}</span>
                                            </div>
                                            <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
                                                {banknote.obverseImage ? (
                                                    <img
                                                        src={banknote.obverseImage}
                                                        alt={banknote.name}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: '#222',
                                                        color: '#555',
                                                        fontSize: '10px',
                                                        textAlign: 'center',
                                                        padding: '0 5px'
                                                    }}>
                                                        Sin imagen
                                                    </div>
                                                )}
                                            </div>

                                            {isCollected && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '4px',
                                                    right: '4px',
                                                    background: '#4CAF50',
                                                    borderRadius: '50%',
                                                    width: '18px',
                                                    height: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '10px',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                                    zIndex: 2
                                                }}>
                                                    {collectedItems.length > 1 ? collectedItems.length : '✓'}
                                                </div>
                                            )}
                                            {isCollected && collectedItems.length > 0 && (
                                                <div style={{
                                                    background: 'rgba(76, 175, 80, 0.9)',
                                                    color: 'white',
                                                    fontSize: '9px',
                                                    textAlign: 'center',
                                                    padding: '2px 0',
                                                    fontWeight: 'bold'
                                                }}>
                                                    {collectedItems.map(i => i.year).filter(y => y).slice(0, 3).join(', ')}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* DETAIL MODAL */}
            {selectedBanknote && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.85)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    backdropFilter: 'blur(5px)'
                }}
                    onClick={() => {
                        setSelectedBanknote(null);
                        setIsFormMode(false);
                    }}
                >
                    <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '600px' }}>
                        {!isFormMode ? (
                            <>
                                <BanknoteCard
                                    banknote={selectedBanknote}
                                    isCollected={isBanknoteCollected(selectedBanknote)}
                                    collectedItems={getCollectedItems(selectedBanknote)}
                                    // Prevent automatic toggle, we want to open form now
                                    onToggleCollection={() => setIsFormMode(true)}
                                />
                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    justifyContent: 'center',
                                    marginTop: '1.5rem'
                                }}>
                                    <button
                                        onClick={() => setSelectedBanknote(null)}
                                        style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            padding: '0.6rem 1.5rem',
                                            borderRadius: '20px',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Cerrar
                                    </button>
                                    <button
                                        onClick={() => setIsFormMode(true)}
                                        style={{
                                            background: isBanknoteCollected(selectedBanknote) ? 'rgba(76, 175, 80, 0.2)' : 'var(--primary-color)',
                                            border: isBanknoteCollected(selectedBanknote) ? '1px solid #4CAF50' : 'none',
                                            padding: '0.6rem 2rem',
                                            borderRadius: '20px',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {isBanknoteCollected(selectedBanknote) ? 'Editar Colección' : 'Añadir a la Colección'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h2 style={{ margin: 0, fontSize: '1.2rem' }}>
                                        {isBanknoteCollected(selectedBanknote) ? 'Editar Detalles' : 'Nuevo Ingreso'}
                                    </h2>
                                    <button
                                        onClick={() => setIsFormMode(false)}
                                        className="back-btn-simple"
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        <ArrowLeft size={16} /> Volver
                                    </button>
                                </div>

                                <ItemForm
                                    compactMode={true}
                                    initialType="note"
                                    initialCategory="banknote"
                                    initialCountry={countryData.country}
                                    initialValue={selectedBanknote.value}
                                    initialBanknoteId={selectedBanknote.id}
                                    emissionYears={selectedBanknote.emissionYears}
                                    initialSubject={selectedBanknote.name}
                                    editId={getCollectedItem(selectedBanknote)?.id}
                                    initialYear={getCollectedItem(selectedBanknote)?.year || ''}
                                    initialQuantity={getCollectedItem(selectedBanknote)?.quantity || 1}
                                    initialCondition={getCollectedItem(selectedBanknote)?.condition || ''}
                                    initialDescription={getCollectedItem(selectedBanknote)?.description || ''}
                                    initialEstimatedValue={getCollectedItem(selectedBanknote)?.estimatedValue || ''}
                                    onClose={() => {
                                        setIsFormMode(false);
                                        // Optional: Keep modal open to show updated card, or close all?
                                        // User usually expects to see the result.
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BanknoteCountryView;
