import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Trophy, Coins, Map, Loader } from 'lucide-react';
import CoinGridView from '../components/common/CoinGridView';
import { EURO_DENOMINATIONS } from '../data/EuroDenominations';
import './Gallery.css'; // Reusing Gallery styles for layout

const PublicCollection = () => {
    const { userId } = useParams();
    const [publicItems, setPublicItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicCoins = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users", userId, "coins"));
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Filter only collection items (exclude wishlist/duplicates if desired, or show all?)
                // Let's show only 'collection' status for public view
                const collectionItems = items.filter(item => item.status === 'collection');
                setPublicItems(collectionItems);
            } catch (err) {
                console.error("Error fetching public collection:", err);
                setError("No se pudo cargar la colección. Verifica el enlace.");
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchPublicCoins();
        }
    }, [userId]);

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '1rem' }}>
            <Loader className="animate-spin text-gold" size={48} />
            <p>Cargando colección pública...</p>
        </div>
    );

    if (error) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>😕 Ops!</h2>
                <p>{error}</p>
            </div>
        </div>
    );

    // Calculate stats
    const totalValue = publicItems.reduce((acc, item) => acc + (parseFloat(item.estimatedValue) || 0), 0);
    const totalCoins = publicItems.length;

    return (
        <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>

            {/* Header */}
            <div className="glass-panel" style={{
                marginBottom: '2rem',
                padding: '2rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(0,0,0,0) 100%)',
                border: '1px solid rgba(255,215,0,0.2)'
            }}>
                <Trophy size={48} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h1>Colección Compartida</h1>
                <p style={{ opacity: 0.7 }}>Identificador: {userId?.slice(0, 8)}...</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
                    <div className="stat-pill">
                        <span>Monedas</span>
                        <strong>{totalCoins}</strong>
                    </div>
                    <div className="stat-pill">
                        <span>Valor Est.</span>
                        <strong className="text-green">{totalValue.toFixed(2)} €</strong>
                    </div>
                </div>
            </div>

            {/* Grid Preview (Reusing CoinGridView or simpler list) */}
            {/* Since CoinGridView is complex and tied to context sometimes, let's use a simpler Galler-like grid */}

            <h3 style={{ marginBottom: '1rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '10px' }}>
                Últimas Adquisiciones
            </h3>

            <div className="gallery-thumbnails" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                {publicItems.slice(0, 50).map((item, idx) => ( // Limit to 50 for safety
                    <div key={idx} className="thumbnail-card" style={{ width: '60px', height: '60px' }}>
                        {item.imageUrl ? (
                            <img src={item.imageUrl} alt={item.value} />
                        ) : (
                            <div className="coin-placeholder" style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>
                                {item.value}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <h3 style={{ margin: '2rem 0 1rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '10px' }}>
                Desglose por País (Euros)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                {[...new Set(publicItems.filter(i => i.category === 'euro').map(i => i.country))].map(country => {
                    const count = publicItems.filter(i => i.country === country).length;
                    return (
                        <div key={country} className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>{country}</span>
                            <span className="badge">{count}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default PublicCollection;
