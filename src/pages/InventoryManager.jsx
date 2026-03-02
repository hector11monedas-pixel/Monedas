import React, { useState, useMemo, useCallback } from 'react';
import { useCoin } from '../hooks/useCoin';
import { List } from 'react-window';
import { AutoSizer } from 'react-virtualized-auto-sizer';
import { Search, Trash2, CheckCircle2, Bookmark, RefreshCw, Filter, ArrowUpDown, Edit3, DollarSign, Wallet } from 'lucide-react';
import ItemForm from '../components/common/ItemForm';
import { getItemValuation } from '../utils/priceUtils';
import './InventoryManager.css';

// Helper for flags
const getCountryCode = (name) => {
    // ... (reuse same mapping or import util)
    const countryCodes = {
        'Alemania': 'de', 'Andorra': 'ad', 'Austria': 'at', 'Bélgica': 'be',
        'Chipre': 'cy', 'Eslovaquia': 'sk', 'Eslovenia': 'si', 'España': 'es',
        'Estonia': 'ee', 'Finlandia': 'fi', 'Francia': 'fr', 'Grecia': 'gr',
        'Irlanda': 'ie', 'Italia': 'it', 'Letonia': 'lv', 'Lituania': 'lt',
        'Luxemburgo': 'lu', 'Malta': 'mt', 'Mónaco': 'mc', 'Países Bajos': 'nl',
        'Portugal': 'pt', 'San Marino': 'sm', 'Vaticano': 'va', 'Croacia': 'hr', 'Bulgaria': 'bg'
    };
    return countryCodes[name] || 'eu';
};

// --- RENDER ROW ---
const Row = React.memo(({ index, style, items, selectedIds, toggleSelection, onEdit }) => {
    const item = items[index];
    if (!item) return null;

    const isSelected = selectedIds.has(item.id);
    const valuation = getItemValuation(item);
    const qty = parseInt(item.quantity) || 1;

    return (
        <div className={`inventory-row ${isSelected ? 'selected' : ''}`} style={style} onClick={() => toggleSelection(item.id)}>
            <div className="col-check">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(item.id)}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            <div className="col-img">
                <img src={`https://flagcdn.com/w40/${getCountryCode(item.country)}.png`} alt="" className="row-flag" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="col-data">
                <div className="row-main">
                    <span className="row-title">{item.value} {item.country} {item.year}</span>
                    <div className="row-badges">
                        {qty > 1 && <span className="qty-badge">x{qty}</span>}
                        {item.condition && <span className="condition-badge">{item.condition}</span>}
                    </div>
                </div>
                <span className="row-subtitle">{item.subject || (item.isCommemorative ? 'Conmemorativa' : 'Normal')}</span>
            </div>
            <div className="col-val">
                <span className="row-price">{(valuation.estimatedValue * qty).toFixed(2)} €</span>
                <span className="row-val-label">Valor Est.</span>
            </div>
            <div className="col-status">
                <span className={`status-badge ${item.status || 'collected'}`}>
                    {item.status === 'looking' ? 'Buscando' : (item.status === 'trade' ? 'Repetida' : 'Colección')}
                </span>
            </div>
            <div className="col-actions">
                <button
                    className="btn-row-edit"
                    onClick={(e) => { e.stopPropagation(); onEdit(item); }}
                    title="Editar"
                >
                    <Edit3 size={16} />
                </button>
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    // Custom comparison for memo because items array reference changes on filter/sort
    // We only care if THIS item changed or SELECTION changed for this item
    const prevItem = prevProps.items[prevProps.index];
    const nextItem = nextProps.items[nextProps.index];

    // If item itself changed (different object ref or id)
    if (prevItem !== nextItem) return false;
    if (!prevItem || !nextItem) return prevItem === nextItem;

    // Check selection status
    const wasSelected = prevProps.selectedIds.has(prevItem.id);
    const isSelected = nextProps.selectedIds.has(nextItem.id);

    // Check style (position)
    if (prevProps.style !== nextProps.style) return false; // Simple reference check might be enough if style objects are stable-ish

    return wasSelected === isSelected;
});


const InventoryManager = () => {
    const { items, updateCoin, removeCoin } = useCoin();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all'); // all, collected, looking, trade
    const [categoryFilter, setCategoryFilter] = useState('all'); // all, euro, banknote, world
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [sortConfig, setSortConfig] = useState({ key: 'country', direction: 'asc' });
    const [editingItem, setEditingItem] = useState(null);

    // --- FILTERING & SORTING ---
    const filteredItems = useMemo(() => {
        let result = items;

        // 1. Filter by Status
        if (statusFilter !== 'all') {
            result = result.filter(i => (i.status || 'collected') === statusFilter);
        }

        // 1.5 Filter by Category
        if (categoryFilter !== 'all') {
            result = result.filter(i => {
                if (categoryFilter === 'euro') return i.category === 'euro' || i.category === 'commemorative';
                if (categoryFilter === 'banknote') return i.category === 'banknote';
                if (categoryFilter === 'world') return i.category !== 'euro' && i.category !== 'commemorative' && i.category !== 'banknote';
                return true;
            });
        }

        // 2. Filter by Search
        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            result = result.filter(i =>
                (i.country && i.country.toLowerCase().includes(lower)) ||
                (i.year && String(i.year).includes(lower)) ||
                (i.value && i.value.toLowerCase().includes(lower)) ||
                (i.subject && i.subject.toLowerCase().includes(lower))
            );
        }

        // 3. Sort
        return [...result].sort((a, b) => {
            let valA = a[sortConfig.key];
            let valB = b[sortConfig.key];

            // Handle date specially
            if (sortConfig.key === 'createdAt') {
                valA = a.createdAt?.seconds || 0;
                valB = b.createdAt?.seconds || 0;
            }

            // Primary Comparison
            if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;

            // Secondary Sorting (if primary is equal)
            if (sortConfig.key === 'country') {
                // Country -> Year -> Value
                const yearA = parseInt(a.year) || 0;
                const yearB = parseInt(b.year) || 0;
                if (yearA !== yearB) return yearA - yearB;

                const parseV = (v) => parseFloat(String(v).replace(/[^\d.]/g, '')) || 0;
                return parseV(a.value) - parseV(b.value);
            }

            return 0;
        });
    }, [items, searchTerm, statusFilter, categoryFilter, sortConfig]);

    // --- LIVE STATS ---
    const stats = useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            const val = getItemValuation(item);
            const qty = parseInt(item.quantity) || 1;
            return {
                faceValue: acc.faceValue + (val.faceValue * qty),
                estimatedValue: acc.estimatedValue + (val.estimatedValue * qty),
                pieces: acc.pieces + qty
            };
        }, { faceValue: 0, estimatedValue: 0, pieces: 0 });
    }, [filteredItems]);

    // --- SELECTION ---
    const toggleSelection = useCallback((id) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    }, []);

    const toggleSelectAll = useCallback(() => {
        setSelectedIds(prev => {
            if (prev.size === filteredItems.length) {
                return new Set();
            } else {
                return new Set(filteredItems.map(i => i.id));
            }
        });
    }, [filteredItems]);

    // --- ACTIONS ---
    const handleBatchAction = async (action) => {
        if (selectedIds.size === 0) return;

        const count = selectedIds.size;

        if (!window.confirm(`¿Estás seguro de que deseas aplicar esta acción a ${count} elementos?`)) return;

        // Execute batch update
        const updates = Array.from(selectedIds).map(id => {
            if (action === 'delete') return removeCoin(id);
            return updateCoin(id, { status: action });
        });

        try {
            await Promise.all(updates);
            setSelectedIds(new Set()); // Clear selection
            alert(`Acción completada en ${count} elementos.`);
        } catch (error) {
            console.error(error);
            alert('Error al procesar la acción en lote.');
        }
    };

    // rowProps memoization to avoid new object reference on every render unless deps change
    const rowProps = useMemo(() => ({
        items: filteredItems,
        selectedIds,
        toggleSelection,
        onEdit: setEditingItem
    }), [filteredItems, selectedIds, toggleSelection]);

    return (
        <div className="inventory-manager-container glass-panel">
            <div className="inventory-header">
                <h2><RefreshCw size={24} /> Gestor de Inventario ({filteredItems.length})</h2>

                <div className="inventory-filters">
                    <div className="search-box">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
                        <option value="all">Todos los Estados</option>
                        <option value="collected">En Colección</option>
                        <option value="looking">Buscando</option>
                        <option value="trade">Repetidas</option>
                    </select>

                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="filter-select">
                        <option value="all">Todas las Categorías</option>
                        <option value="euro">Solo Euro</option>
                        <option value="banknote">Solo Billetes</option>
                        <option value="world">Otros (Mundo)</option>
                    </select>
                </div>
            </div>

            {/* LIVE STATS WIDGETS */}
            <div className="inventory-stats-row">
                <div className="inv-stat-card">
                    <div className="inv-stat-icon pieces"><RefreshCw size={18} /></div>
                    <div className="inv-stat-info">
                        <span className="inv-stat-label">Piezas Físicas</span>
                        <span className="inv-stat-value">{stats.pieces}</span>
                    </div>
                </div>
                <div className="inv-stat-card">
                    <div className="inv-stat-icon face"><Wallet size={18} /></div>
                    <div className="inv-stat-info">
                        <span className="inv-stat-label">Valor Facial Total</span>
                        <span className="inv-stat-value">{stats.faceValue.toFixed(2)} €</span>
                    </div>
                </div>
                <div className="inv-stat-card">
                    <div className="inv-stat-icon estimate"><DollarSign size={18} /></div>
                    <div className="inv-stat-info">
                        <span className="inv-stat-label">Valor Mercado Est.</span>
                        <span className="inv-stat-value">{stats.estimatedValue.toFixed(2)} €</span>
                    </div>
                </div>
            </div>

            {/* BATCH ACTION BAR (Floating) */}
            {selectedIds.size > 0 && (
                <div className="batch-actions-bar">
                    <span>{selectedIds.size} seleccionados</span>
                    <div className="action-buttons">
                        <button onClick={() => handleBatchAction('collected')} title="Mover a Colección"><CheckCircle2 size={18} /></button>
                        <button onClick={() => handleBatchAction('looking')} title="Mover a Buscando"><Bookmark size={18} /></button>
                        <button onClick={() => handleBatchAction('trade')} title="Mover a Repetidas"><RefreshCw size={18} /></button>
                        <div className="divider"></div>
                        <button onClick={() => handleBatchAction('delete')} className="btn-delete" title="Eliminar"><Trash2 size={18} /></button>
                    </div>
                </div>
            )}

            {/* LIST HEADER */}
            <div className="inventory-list-header">
                <div className="col-check">
                    <input type="checkbox" checked={selectedIds.size === filteredItems.length && filteredItems.length > 0} onChange={toggleSelectAll} />
                </div>
                <div className="col-img"></div>
                <div className="col-data clickable" onClick={() => setSortConfig({ key: 'country', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' })}>
                    Datos <ArrowUpDown size={12} />
                </div>
                <div className="col-val">Valor</div>
                <div className="col-status">Estado</div>
                <div className="col-actions"></div>
            </div>

            {/* VIRTUALIZED LIST */}
            <div className="inventory-list-container">
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            style={{ height, width }}
                            rowCount={filteredItems.length}
                            rowHeight={70}
                            rowComponent={Row}
                            rowProps={rowProps}
                        />
                    )}
                </AutoSizer>
            </div>

            {/* EDIT MODAL OVERLAY */}
            {editingItem && (
                <div className="inventory-edit-overlay">
                    <div className="inventory-edit-modal">
                        <ItemForm
                            onClose={() => setEditingItem(null)}
                            editId={editingItem.id}
                            initialType={editingItem.category === 'banknote' ? 'banknote' : 'coin'}
                            initialCategory={editingItem.category}
                            initialCountry={editingItem.country}
                            initialYear={editingItem.year}
                            initialValue={editingItem.value}
                            initialMint={editingItem.mint}
                            initialSubject={editingItem.subject}
                            initialIsCommemorative={editingItem.isCommemorative}
                            initialQuantity={editingItem.quantity}
                            initialCondition={editingItem.condition}
                            initialDescription={editingItem.description}
                            initialEstimatedValue={editingItem.estimatedValue}
                            initialPurchasePrice={editingItem.purchasePrice}
                            initialStatus={editingItem.status}
                            initialBanknoteId={editingItem.banknoteId}
                            initialDenomId={editingItem.denomId}
                            initialVariantId={editingItem.variantId}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default InventoryManager;
