import React from 'react';
import { X, Calendar, Layers, Info } from 'lucide-react';
import CoinImage from './CoinImage';

const CoinDetailModal = ({ isOpen, onClose, coin, country }) => {
    if (!isOpen || !coin) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content" style={{ maxWidth: '800px', width: '90%' }}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <h2 className="modal-title" style={{ paddingRight: '40px' }}>
                    {coin.subject}
                </h2>
                <div className="modal-subtitle" style={{ color: '#aaa', marginBottom: '1.5rem' }}>
                    {country} • {coin.year}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
                    {/* Image Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', maxWidth: '300px', width: '100%' }}>
                        <div style={{ width: '200px', height: '200px', marginBottom: '1rem' }}>
                            <CoinImage
                                src={coin.image}
                                alt={coin.subject}
                                isOwned={true} // Always show full color in detail view
                                fallback={
                                    <div className="css-coin owned" style={{ width: '100%', height: '100%' }}>
                                        <div className="css-coin-content">
                                            <span>{coin.year}</span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        {/* Quick Stats */}
                        <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
                            {coin.date && (
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <Calendar size={16} style={{ marginRight: '8px', color: '#ffd700' }} />
                                    <span>{coin.date}</span>
                                </div>
                            )}
                            {coin.mintage && (
                                <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                                    <Layers size={16} style={{ marginRight: '8px', color: '#ffd700' }} />
                                    <span>{coin.mintage.toLocaleString()} uds.</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div>
                        {coin.description && (
                            <div style={{ marginBottom: '2rem', lineHeight: '1.6', color: '#e0e0e0' }}>
                                {coin.description}
                            </div>
                        )}

                        {/* Variant Section */}
                        {coin.variantDetails && (
                            <div>
                                <h3 style={{ fontSize: '1.1rem', color: '#ffd700', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    Variantes
                                </h3>
                                <div style={{ marginBottom: '2rem', lineHeight: '1.6', color: '#e0e0e0', whiteSpace: 'pre-line' }}>
                                    {coin.variantDetails}
                                </div>
                            </div>
                        )}

                        {coin.formats && coin.formats.length > 0 && (
                            <div>
                                <h3 style={{ fontSize: '1.1rem', color: '#ffd700', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    Emisiones y Formatos
                                </h3>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                    <thead>
                                        <tr style={{ color: '#888', textAlign: 'left' }}>
                                            <th style={{ padding: '8px 0', fontWeight: 'normal' }}>Formato</th>
                                            <th style={{ padding: '8px 0', fontWeight: 'normal' }}>Detalle</th>
                                            <th style={{ padding: '8px 0', fontWeight: 'normal', textAlign: 'right' }}>Tirada</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {coin.formats.map((fmt, idx) => (
                                            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                                <td style={{ padding: '10px 0' }}>
                                                    <span style={{
                                                        background: fmt.type === 'PROOF' ? 'rgba(156, 39, 176, 0.2)' : fmt.type === 'BU' ? 'rgba(33, 150, 243, 0.2)' : 'rgba(255,255,255,0.1)',
                                                        color: fmt.type === 'PROOF' ? '#ce93d8' : fmt.type === 'BU' ? '#90caf9' : '#fff',
                                                        padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold'
                                                    }}>
                                                        {fmt.type}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '10px 0', color: '#fff' }}>{fmt.title}</td>
                                                <td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'monospace', color: '#aaa' }}>
                                                    {fmt.quantity ? fmt.quantity.toLocaleString() : '-'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetailModal;
