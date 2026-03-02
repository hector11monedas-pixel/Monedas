import React, { useMemo } from 'react';
import { useCoin } from '../hooks/useCoin';
import { Heart, Copy, Trash2, ArrowRight, MinusCircle, ExternalLink } from 'lucide-react';
import './Wishlist.css';

const Wishlist = () => {
    const { items, removeCoin } = useCoin();

    // Filter items with status 'wishlist'
    const wishlistItems = useMemo(() => {
        return items.filter(item => item.status === 'wishlist');
    }, [items]);

    // Group items for display
    const groupedItems = useMemo(() => {
        const groups = {};
        wishlistItems.forEach(item => {
            const key = `${item.country}-${item.category}`;
            if (!groups[key]) groups[key] = {
                country: item.country,
                category: item.category,
                items: []
            };
            groups[key].items.push(item);
        });
        return Object.values(groups).sort((a, b) => a.country.localeCompare(b.country));
    }, [wishlistItems]);

    const copyToClipboard = () => {
        if (wishlistItems.length === 0) return;

        let text = "💖 MI LISTA DE DESEOS (NumisApp v2.3)\n\n";

        groupedItems.forEach(group => {
            text += `📍 ${group.country.toUpperCase()}\n`;
            group.items.forEach(item => {
                const year = item.year || 'Año s/f';
                const value = item.value;
                const subject = item.subject ? ` (${item.subject})` : '';
                text += `  - ${value} ${year}${subject}\n`;
            });
            text += "\n";
        });

        text += "Generado con NumisApp";

        navigator.clipboard.writeText(text).then(() => {
            alert("¡Lista de deseos copiada!");
        });
    };

    return (
        <div className="wishlist-container animate-fade-in">
            <header className="page-header">
                <div>
                    <h1>Lista de Deseos</h1>
                    <p className="subtitle">Monedas que buscas para tu colección</p>
                </div>
                <button
                    className="glass-button secondary copy-btn"
                    onClick={copyToClipboard}
                    disabled={wishlistItems.length === 0}
                >
                    <Copy size={18} />
                    <span>Copiar Lista</span>
                </button>
            </header>

            <div className="stats-row">
                <div className="stat-card glass-panel wishlist-stat">
                    <span className="stat-label">Pendientes</span>
                    <span className="stat-value">{wishlistItems.length}</span>
                </div>
                <div className="stat-card glass-panel">
                    <span className="stat-label">Países</span>
                    <span className="stat-value">{groupedItems.length}</span>
                </div>
            </div>

            {wishlistItems.length === 0 ? (
                <div className="empty-state glass-panel">
                    <div className="empty-icon pink">💝</div>
                    <h3>Tu lista está vacía</h3>
                    <p>Añade monedas con el estado "Deseada" para planificar tus próximas adquisiciones.</p>
                </div>
            ) : (
                <div className="wish-groups">
                    {groupedItems.map((group, idx) => (
                        <div key={idx} className="wish-group glass-panel">
                            <h2 className="group-title">{group.country}</h2>
                            <div className="wish-items-list">
                                {group.items.map(item => (
                                    <div key={item.id} className="wish-item-row">
                                        <div className="item-info">
                                            <span className="item-value-year">{item.value}€ - {item.year}</span>
                                            {item.subject && <span className="item-subject">{item.subject}</span>}
                                        </div>
                                        <div className="item-actions">
                                            <button
                                                className="remove-btn pink"
                                                onClick={() => {
                                                    if (window.confirm('¿Eliminar de la lista de deseos?')) {
                                                        removeCoin(item.id);
                                                    }
                                                }}
                                                title="Eliminar"
                                            >
                                                <Heart size={18} fill="currentColor" />
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

export default Wishlist;
