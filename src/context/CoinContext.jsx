import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc
} from 'firebase/firestore';
import { COMMEMORATIVE_CATALOG, calculateCommemorativeCatalogSize } from '../data/CommemorativeCatalog';
import { calculateTotalEuroCatalogSize } from '../data/EuroData';
import { TRANSLATIONS } from '../data/translations';

// Helper to parse face value robustly (Shared logic)
export const parseFaceValue = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;

    // Check strict number string first to avoid partial matches
    if (!isNaN(parseFloat(val)) && isFinite(val) && !val.includes('ent') && !val.includes('€')) {
        return parseFloat(val);
    }

    let vStr = String(val).toLowerCase();

    // Handle "1 cent. €" -> 0.01
    if (vStr.includes('cent')) {
        const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
        return isNaN(num) ? 0 : num / 100;
    }

    // Standard parse for "2 €", "12 €"
    const num = parseFloat(vStr.replace(/[^\d.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
};

const CoinContext = createContext();

export const useCoin = () => useContext(CoinContext);

export const CoinProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const { currentUser } = useAuth();

    // Settings (Must be defined before catalogSize logic)
    const [germanMintsEnabled, setGermanMintsEnabled] = useState(() => {
        const saved = localStorage.getItem('germanMintsEnabled');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const [greeceMintsEnabled, setGreeceMintsEnabled] = useState(() => {
        const saved = localStorage.getItem('greeceMintsEnabled');
        return saved !== null ? JSON.parse(saved) : true;
    });

    // Total Catalog = Normal Euros + Commemorative Catalog (with Mint logic)
    const catalogSize = React.useMemo(() => {
        const options = { germanMints: germanMintsEnabled, greeceMints: greeceMintsEnabled };
        return calculateTotalEuroCatalogSize(options) + calculateCommemorativeCatalogSize();
    }, [germanMintsEnabled, greeceMintsEnabled]);

    useEffect(() => {
        localStorage.setItem('germanMintsEnabled', JSON.stringify(germanMintsEnabled));
    }, [germanMintsEnabled]);

    useEffect(() => {
        localStorage.setItem('greeceMintsEnabled', JSON.stringify(greeceMintsEnabled));
    }, [greeceMintsEnabled]);

    const toggleGermanMints = () => setGermanMintsEnabled(prev => !prev);
    const toggleGreeceMints = () => setGreeceMintsEnabled(prev => !prev);

    // Favorite Country State (Object: { name, path, section })
    const [favoriteCountry, setFavoriteCountry] = useState(() => {
        const saved = localStorage.getItem('favoriteCountry');
        if (!saved) return { name: 'España', path: '/euro/normal/España' };

        try {
            const parsed = JSON.parse(saved);
            // If it's a string (legacy), convert to object
            if (typeof parsed === 'string') {
                return { name: parsed, path: `/euro/normal/${parsed}` };
            }
            return parsed;
        } catch (e) {
            // If parsing fails (plain string in storage), treat as legacy string
            return { name: saved, path: `/euro/normal/${saved}` };
        }
    });

    useEffect(() => {
        localStorage.setItem('favoriteCountry', JSON.stringify(favoriteCountry));
    }, [favoriteCountry]);

    // Language State
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('appLanguage');
        return saved ? JSON.parse(saved) : 'es';
    });

    useEffect(() => {
        localStorage.setItem('appLanguage', JSON.stringify(language));
    }, [language]);

    // Translation Helper
    const t = (key) => {
        return TRANSLATIONS[language][key] || key;
    };

    // Sync with Firestore or Local State
    useEffect(() => {
        if (!currentUser) {
            // Optional: Load from localStorage if we wanted guest persistence
            // setItems(JSON.parse(localStorage.getItem('local_coins')) || []);

            // Only clear items if they are not already empty to avoid infinite loops/linter warnings
            if (items.length > 0) {
                setItems([]);
            }
            // Let's keep array empty effectively resetting on logout or allowing local in future.
            return;
        }

        // Firestore Subscription
        const q = query(collection(db, "users", currentUser.uid, "coins"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cloudItems = snapshot.docs.map(doc => ({
                id: doc.id, // Firestore ID
                ...doc.data()
            }));

            // Sort by createdAt (Oldest to Newest) so .push works and last item is newest
            cloudItems.sort((a, b) => {
                const getTime = (dateObj) => {
                    if (!dateObj) return 0;
                    if (dateObj.toMillis) return dateObj.toMillis(); // Firestore Timestamp
                    if (dateObj.seconds) return dateObj.seconds * 1000; // Raw object
                    if (dateObj instanceof Date) return dateObj.getTime();
                    return Number(dateObj);
                };
                return getTime(a.createdAt) - getTime(b.createdAt);
            });

            setItems(cloudItems);
        });

        return () => unsubscribe();
    }, [currentUser]);

    const addCoin = async (newItem) => {
        if (currentUser) {
            try {
                await addDoc(collection(db, "users", currentUser.uid, "coins"), {
                    ...newItem,
                    purchasePrice: newItem.purchasePrice || 0,
                    estimatedValue: newItem.estimatedValue || 0,
                    condition: newItem.condition || '',
                    description: newItem.description || '',
                    imageUrl: newItem.imageUrl || '',
                    status: newItem.status || 'collection', // collection, duplicate, wishlist
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            } catch (e) {
                console.error("Error adding coin: ", e);
            }
        } else {
            // Local fallback (Memory only for now)
            setItems(prev => [...prev, { ...newItem, id: Date.now() }]);
        }
    };

    const removeCoin = async (id) => {
        if (currentUser) {
            try {
                await deleteDoc(doc(db, "users", currentUser.uid, "coins", id));
            } catch (e) {
                console.error("Error deleting coin: ", e);
            }
        } else {
            setItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const updateCoin = async (id, updatedFields) => {
        if (currentUser) {
            try {
                await updateDoc(doc(db, "users", currentUser.uid, "coins", id), {
                    ...updatedFields,
                    updatedAt: new Date()
                });
            } catch (e) {
                console.error("Error updating coin: ", e);
            }
        } else {
            setItems(prev => prev.map(item => item.id === id ? { ...item, ...updatedFields } : item));
        }
    };

    const getItemsByCategory = (category) => {
        return items.filter(item => item.category === category);
    };

    const importData = (newItems) => {
        // Bulk import to Firestore? Might be too many writes at once.
        // For now, let's disable bulk import or process sequentially.
        if (currentUser && Array.isArray(newItems)) {
            newItems.forEach(item => addCoin(item));
        } else if (Array.isArray(newItems)) {
            setItems(newItems);
        }
    };

    const stats = React.useMemo(() => {
        let count = 0;
        let value = 0;

        // Sets for unique tracking
        const germanSlots = new Set();

        items.forEach(item => {
            value += parseFaceValue(item.value);

            // COUNTING LOGIC
            if (item.category === 'euro' && !item.isCommemorative && !item.subject) {
                // EURO STANDARD
                if (item.country === 'Alemania' && !germanMintsEnabled) {
                    // Generic Mode: Track unique slots
                    germanSlots.add(`${item.year}-${item.value}`);
                    // We don't increment count yet, we add at end
                    return;
                }

                if (item.country === 'Grecia' && !greeceMintsEnabled) {
                    // Ignore 2002 VAR
                    if (item.year === 2002 && item.mint === 'VAR') return;
                }
            }

            // Standard Count (if not Germany Disabled)
            count++;
        });

        // Add German Unique Count if disabled
        if (!germanMintsEnabled) {
            count += germanSlots.size;
        }

        return {
            totalItems: count,
            totalValue: value
        };
    }, [items, germanMintsEnabled, greeceMintsEnabled]);

    return (
        <CoinContext.Provider value={{
            items, addCoin, updateCoin,
            removeCoin,
            catalogSize,
            stats,
            getItemsByCategory,
            germanMintsEnabled,
            toggleGermanMints,
            greeceMintsEnabled,
            toggleGreeceMints,
            favoriteCountry,
            setFavoriteCountry,
            language,
            setLanguage,
            t
        }}>
            {children}
        </CoinContext.Provider>
    );
};
