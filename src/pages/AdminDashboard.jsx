import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, where, getDocs, updateDoc, collectionGroup } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import { Check, X, ShieldAlert } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { currentUser, isAdmin } = useAuth();
    const [pendingCoins, setPendingCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAdmin) {
            setLoading(false);
            return;
        }

        const fetchPendingImages = async () => {
            try {
                const q = query(
                    collectionGroup(db, 'coins'),
                    where('imageStatus', '==', 'pending')
                );

                console.log("Fetching pending coins from server...");
                const snapshot = await getDocs(q);
                console.log("Found pending coins:", snapshot.docs.length);

                const itemsWithUser = snapshot.docs.map(docSnap => {
                    const data = docSnap.data();
                    return {
                        id: docSnap.id,
                        ref: docSnap.ref,
                        ownerId: docSnap.ref.parent?.parent?.id,
                        ...data
                    };
                });

                setPendingCoins(itemsWithUser);
            } catch (err) {
                console.error("Error fetching pending images directly, attempting fallback...", err);

                // If it's a missing index error, Firebase includes a direct link to create it.
                if (err.message && err.message.includes('index')) {
                    const urlMatch = err.message.match(/https:\/\/console\.firebase\.google\.com[^\s]*/);
                    const url = urlMatch ? urlMatch[0] : null;
                    if (url) {
                        setError(<span>
                            Casi listo. Para que la carga sea instantánea, Firebase requiere que hagas un clic más para crear su índice de búsqueda.<br /><br />
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.1rem', display: 'block', padding: '10px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '8px' }}>👉 Haz clic aquí para crear el índice en Firebase automáticamente</a>
                            <br /><br /><small>(Tardará unos minutos. Cuando en Firebase ponga 'Completado', recarga esta página.)</small>
                        </span>);
                        return;
                    }
                }

                // Fallback while index is building or if it fails silently
                try {
                    const fallbackQ = query(collectionGroup(db, 'coins'));
                    const fallbackSnapshot = await getDocs(fallbackQ);

                    const pendingItems = fallbackSnapshot.docs
                        .map(docSnap => ({ id: docSnap.id, ref: docSnap.ref, ownerId: docSnap.ref.parent?.parent?.id, ...docSnap.data() }))
                        .filter(i => i.imageStatus === 'pending');

                    setPendingCoins(pendingItems);

                    if (pendingItems.length > 0) {
                        setError("Aviso: Las fotos se están cargando en modo de compatibilidad. Falta crear el Índice en Firebase para optimizar el rendimiento.");
                    }
                } catch {
                    setError("Error al buscar imágenes. Asegúrate de que las reglas de Firebase estén publicadas.");
                }

            } finally {
                setLoading(false);
            }
        };

        fetchPendingImages();
    }, [isAdmin, currentUser]);

    const handleApprove = async (coin) => {
        try {
            await updateDoc(coin.ref, {
                imageStatus: 'approved',
                updatedAt: new Date()
            });
            setPendingCoins(prev => prev.filter(c => c.id !== coin.id));
        } catch (err) {
            console.error("Error approving image:", err);
            alert("Error al aprobar la imagen.");
        }
    };

    const handleReject = async (coin) => {
        try {
            await updateDoc(coin.ref, {
                imageUrl: '', // Remove the URL or set status to rejected
                imageStatus: 'rejected',
                updatedAt: new Date()
            });
            setPendingCoins(prev => prev.filter(c => c.id !== coin.id));
        } catch (err) {
            console.error("Error rejecting image:", err);
            alert("Error al rechazar la imagen.");
        }
    };

    if (loading) return <div className="page-container" style={{ padding: '80px 20px', color: 'white', textAlign: 'center' }}>Cargando Panel de Administración...</div>;

    if (!isAdmin) {
        return (
            <div className="page-container" style={{ padding: '80px 20px', color: 'white', textAlign: 'center' }}>
                <ShieldAlert size={48} style={{ color: '#ef4444', marginBottom: '1rem' }} />
                <h2>Acceso Denegado</h2>
                <p>No tienes permisos de administrador para ver esta página.</p>
            </div>
        );
    }

    return (
        <div className="page-container admin-dashboard">
            <header className="page-header" style={{ marginBottom: '2rem' }}>
                <h1>Panel de Administración</h1>
                <p>Moderar Fotos Pendientes</p>
            </header>

            {error && <div className="error-message" style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '8px', color: '#ff6b6b', marginBottom: '1rem' }}>{error}</div>}

            {pendingCoins.length === 0 ? (
                <div className="empty-state" style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h3>No hay fotos pendientes de revisión</h3>
                    <p style={{ opacity: 0.7 }}>Todas las imágenes han sido moderadas.</p>
                </div>
            ) : (
                <div className="pending-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {pendingCoins.map(coin => (
                        <div key={coin.id} className="pending-card glass-panel" style={{ padding: '1rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="image-container" style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={coin.imageUrl} alt="Pending Coin" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="coin-details">
                                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>{coin.country} - {coin.year}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.5rem' }}>
                                    <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>{coin.value} {coin.currency}</span>
                                    {coin.category && <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', textTransform: 'capitalize' }}>{coin.category}</span>}
                                    {coin.type && <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', textTransform: 'capitalize' }}>{coin.type === 'coin' ? 'Moneda' : (coin.type === 'note' ? 'Billete' : coin.type)}</span>}
                                    {coin.condition && <span style={{ background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>{coin.condition}</span>}
                                    {coin.quantity > 1 && <span style={{ background: 'rgba(244, 114, 182, 0.2)', color: '#f472b6', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>x{coin.quantity}</span>}
                                </div>
                                {coin.subject && <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', fontWeight: 'bold' }}>{coin.subject}</p>}
                                {coin.mint && <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', opacity: 0.9 }}>📍 Variante/Ceca: {coin.mint}</p>}
                                {coin.status && <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', opacity: 0.9 }}>Colección: <span style={{ textTransform: 'capitalize' }}>{coin.status === 'collection' ? 'En Colección' : (coin.status === 'duplicate' ? 'Repetida' : (coin.status === 'wishlist' ? 'Deseada' : coin.status))}</span></p>}
                                {coin.description && <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.7 }}>"{coin.description}"</p>}
                            </div>
                            <div className="action-buttons" style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                                <button
                                    onClick={() => handleApprove(coin)}
                                    style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', border: '1px solid #4ade80', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    <Check size={18} /> Aprobar
                                </button>
                                <button
                                    onClick={() => handleReject(coin)}
                                    style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    <X size={18} /> Rechazar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
