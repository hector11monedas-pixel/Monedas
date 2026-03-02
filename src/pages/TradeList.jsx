import React, { useMemo } from 'react';
import { useCoin } from '../hooks/useCoin';
import { Copy, Share2, ArrowRight, MinusCircle } from 'lucide-react';
import './TradeList.css';

const TradeList = () => {
    const { items, removeCoin } = useCoin();

    // Filter items with status 'duplicate'
    const duplicateItems = useMemo(() => {
        return items.filter(item => item.status === 'duplicate');
    }, [items]);

    // Group items for display
    const groupedItems = useMemo(() => {
        const groups = {};
        duplicateItems.forEach(item => {
            const key = `${item.country}-${item.category}`;
            if (!groups[key]) groups[key] = {
                country: item.country,
                category: item.category,
                items: []
            };
            groups[key].items.push(item);
        });
        return Object.values(groups).sort((a, b) => a.country.localeCompare(b.country));
    }, [duplicateItems]);

    const copyToClipboard = () => {
        if (duplicateItems.length === 0) return;

        let text = "📋 MI LISTA DE REPETIDAS (Numismática v2.3)\n\n";

        groupedItems.forEach(group => {
            text += `📍 ${group.country.toUpperCase()}\n`;
            group.items.forEach(item => {
                const year = item.year;
                const value = item.value;
                const subject = item.subject ? ` (${item.subject})` : '';
                const mint = item.mint ? ` [${item.mint}]` : '';
                const qty = item.quantity > 1 ? ` x${item.quantity}` : '';
                const cond = item.condition ? ` [${item.condition}]` : '';
                text += `  - ${value} € ${year}${subject}${mint}${qty}${cond}\n`;
            });
            text += "\n";
        });

        text += "Generado con Numismática App";

        navigator.clipboard.writeText(text).then(() => {
            alert("¡Lista copiada al portapapeles!");
        });
    };

    return (
        <div className="trade-list-container animate-fade-in">
            <header className="page-header">
                <div>
                    <h1>Gestión de Intercambios</h1>
                    <p className="subtitle">Administra tus monedas repetidas y compártelas</p>
                </div>
                <button
                    className="glass-button primary copy-btn"
                    onClick={copyToClipboard}
                    disabled={duplicateItems.length === 0}
                >
                    <Copy size={18} />
                    <span>Copiar Lista</span>
                </button>
            </header>

            <div className="stats-row">
                <div className="stat-card glass-panel">
                    <span className="stat-label">Total Repetidas</span>
                    <span className="stat-value">{duplicateItems.length}</span>
                </div>
                <div className="stat-card glass-panel">
                    <span className="stat-label">Países</span>
                    <span className="stat-value">{groupedItems.length}</span>
                </div>
            </div>

            {duplicateItems.length === 0 ? (
                <div className="empty-state glass-panel">
                    <div className="empty-icon">📂</div>
                    <h3>No tienes repetidas</h3>
                    <p>Marca monedas como "Repetida" en el formulario para que aparezcan aquí.</p>
                </div>
            ) : (
                <div className="trade-groups">
                    {groupedItems.map((group, idx) => (
                        <div key={idx} className="trade-group glass-panel">
                            <h2 className="group-title">{group.country}</h2>
                            <div className="trade-items-list">
                                {group.items.map(item => (
                                    <div key={item.id} className="trade-item-row">
                                        <div className="item-info">
                                            <span className="item-value-year">{item.value}€ - {item.year}</span>
                                            {item.subject && <span className="item-subject">{item.subject}</span>}
                                            {item.mint && <span className="item-mint">Ceca: {item.mint}</span>}
                                        </div>
                                        <div className="item-actions">
                                            {item.quantity > 1 && <span className="item-qty">x{item.quantity}</span>}
                                            <span className="item-condition-badge">{item.condition || 'S.C'}</span>
                                            <button
                                                className="remove-btn"
                                                onClick={() => {
                                                    if (window.confirm('¿Eliminar de repetidas?')) {
                                                        removeCoin(item.id);
                                                    }
                                                }}
                                                title="Eliminar"
                                            >
                                                <MinusCircle size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TradeList;
