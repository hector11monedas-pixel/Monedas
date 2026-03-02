import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc,
    getDocs,
    writeBatch
} from 'firebase/firestore';
// Commemorative catalog and large datasets will be loaded dynamically
let COMMEMORATIVE_DATA_CACHE = null;
let SPAIN_DATA_CACHE = null;
let CZECH_DATA_CACHE = null;
let AFGHAN_DATA_CACHE = null;
let ABKHAZIA_COMM_CACHE = null;
let ABKHAZIA_INV_CACHE = null;

import { calculateTotalNormalEuroCatalogSize, calculateWorldCatalogSize } from '../utils/emissionUtils';
// import { BANKNOTE_DATA } from '../data/BanknoteData';
// import { CZECH_DENOMINATIONS } from '../data/CzechCoinsData';
import { TRANSLATIONS } from '../data/translations';

let BANKNOTE_DATA_CACHE = null;
let CZECH_DENOMINATIONS_CACHE = null;

import { parseFaceValue } from '../utils/coinUtils';


import { CoinContext } from './Contexts';

export const CoinProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isSaving, setIsSaving] = useState(false); // Cloud status
    const { currentUser } = useAuth();

    // Dynamically loaded catalog data
    const [loadedGlobalData, setLoadedGlobalData] = useState({
        spain: null,
        czech: null,
        afghan: null,
        abkhazia_comm: null,
        abkhazia_inv: null,
        commemorative: null
    });
    const [isDataLoading, setIsDataLoading] = useState(false);

    // Settings (Must be defined before catalogSize logic)
    const [germanMintsEnabled, setGermanMintsEnabled] = useState(() => {
        try {
            const saved = localStorage.getItem('germanMintsEnabled');
            return saved !== null ? JSON.parse(saved) : true;
        } catch { return true; }
    });

    const [greeceMintsEnabled, setGreeceMintsEnabled] = useState(() => {
        try {
            const saved = localStorage.getItem('greeceMintsEnabled');
            return saved !== null ? JSON.parse(saved) : true;
        } catch { return true; }
    });

    const [commemorativeVariantsEnabled, setCommemorativeVariantsEnabled] = useState(() => {
        try {
            const saved = localStorage.getItem('commemorativeVariantsEnabled');
            return saved !== null ? JSON.parse(saved) : true;
        } catch { return true; }
    });

    // Total Catalog = Normal Euros + Commemorative Catalog (with Mint logic) + World Countries
    const catalogSize = React.useMemo(() => {
        const options = { germanMints: germanMintsEnabled, greeceMints: greeceMintsEnabled };

        // Euro Normal
        const euroNormalSize = calculateTotalNormalEuroCatalogSize(options);

        // Commemorative
        const commSize = loadedGlobalData.commemorative
            ? loadedGlobalData.commemorative.calculateCommemorativeCatalogSize({ includeVariants: commemorativeVariantsEnabled })
            : 0;

        // World Countries (Using loaded data)
        const czechSize = calculateWorldCatalogSize('República Checa', loadedGlobalData);
        const afghanSize = calculateWorldCatalogSize('Afganistán', loadedGlobalData);
        const spainSize = calculateWorldCatalogSize('España', loadedGlobalData);
        const abSize = calculateWorldCatalogSize('Abjasia', loadedGlobalData);

        // Banknotes: Sum all banknotes in all series
        let banknoteSize = 0;
        if (BANKNOTE_DATA_CACHE) {
            Object.values(BANKNOTE_DATA_CACHE).forEach(country => {
                country.seriesList.forEach(series => {
                    banknoteSize += series.banknotes.length;
                });
            });
        }

        return euroNormalSize + commSize + czechSize + afghanSize + spainSize + abSize + banknoteSize;
    }, [germanMintsEnabled, greeceMintsEnabled, commemorativeVariantsEnabled, loadedGlobalData]);

    // Data Loading Effect
    useEffect(() => {
        const loadCatalogs = async () => {
            setIsDataLoading(true);
            try {
                const results = await Promise.all([
                    !COMMEMORATIVE_DATA_CACHE ? import('../data/CommemorativeCatalog') : Promise.resolve(COMMEMORATIVE_DATA_CACHE),
                    !CZECH_DATA_CACHE ? import('../data/CzechCoinsData') : Promise.resolve(CZECH_DATA_CACHE),
                    !AFGHAN_DATA_CACHE ? import('../data/AfghanistanCoinsData') : Promise.resolve(AFGHAN_DATA_CACHE),
                    !SPAIN_DATA_CACHE ? import('../data/SpainCoinsData') : Promise.resolve(SPAIN_DATA_CACHE),
                    !ABKHAZIA_COMM_CACHE ? import('../data/AbkhaziaCommemorativeData') : Promise.resolve({ ABKHAZIA_COMM_DATA: ABKHAZIA_COMM_CACHE }),
                    !ABKHAZIA_INV_CACHE ? import('../data/AbkhaziaInvestmentData') : Promise.resolve({ ABKHAZIA_INV_DATA: ABKHAZIA_INV_CACHE }),
                    !BANKNOTE_DATA_CACHE ? import('../data/BanknoteData') : Promise.resolve({ BANKNOTE_DATA: BANKNOTE_DATA_CACHE })
                ]);

                COMMEMORATIVE_DATA_CACHE = results[0];
                CZECH_DATA_CACHE = results[1];
                // CZECH_DENOMINATIONS is inside CZECH_DATA_CACHE
                CZECH_DENOMINATIONS_CACHE = results[1].CZECH_DENOMINATIONS;

                AFGHAN_DATA_CACHE = results[2];
                SPAIN_DATA_CACHE = results[3];
                ABKHAZIA_COMM_CACHE = results[4].ABKHAZIA_COMM_DATA;
                ABKHAZIA_INV_CACHE = results[5].ABKHAZIA_INV_DATA;
                BANKNOTE_DATA_CACHE = results[6].BANKNOTE_DATA;

                setLoadedGlobalData({
                    commemorative: results[0],
                    czech: results[1],
                    afghan: results[2],
                    spain: results[3],
                    abkhazia_comm: results[4].ABKHAZIA_COMM_DATA,
                    abkhazia_inv: results[5].ABKHAZIA_INV_DATA
                });
            } catch (error) {
                console.error("Error loading catalogs:", error);
            } finally {
                setIsDataLoading(false);
            }
        };

        loadCatalogs();
    }, []);

    useEffect(() => {
        localStorage.setItem('germanMintsEnabled', JSON.stringify(germanMintsEnabled));
    }, [germanMintsEnabled]);

    useEffect(() => {
        localStorage.setItem('greeceMintsEnabled', JSON.stringify(greeceMintsEnabled));
    }, [greeceMintsEnabled]);

    useEffect(() => {
        localStorage.setItem('commemorativeVariantsEnabled', JSON.stringify(commemorativeVariantsEnabled));
    }, [commemorativeVariantsEnabled]);

    const toggleGermanMints = () => setGermanMintsEnabled(prev => !prev);
    const toggleGreeceMints = () => setGreeceMintsEnabled(prev => !prev);
    const toggleCommemorativeVariants = () => setCommemorativeVariantsEnabled(prev => !prev);

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
        } catch {
            return { name: 'España', path: '/euro/normal/España' };
        }
    });

    useEffect(() => {
        localStorage.setItem('favoriteCountry', JSON.stringify(favoriteCountry));
    }, [favoriteCountry]);

    // Language State
    const [language, setLanguage] = useState(() => {
        try {
            const saved = localStorage.getItem('appLanguage');
            return saved ? JSON.parse(saved) : 'es';
        } catch { return 'es'; }
    });

    useEffect(() => {
        localStorage.setItem('appLanguage', JSON.stringify(language));
    }, [language]);

    // Dark Mode State
    const [darkMode, setDarkMode] = useState(() => {
        try {
            const saved = localStorage.getItem('darkMode');
            return saved !== null ? JSON.parse(saved) : true;
        } catch { return true; }
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [darkMode]);

    // Translation Helper
    const t = (key) => {
        return TRANSLATIONS[language][key] || key;
    };

    // Sync with Firestore or Local State
    useEffect(() => {
        if (!currentUser) {
            // Load from localStorage for guest persistence
            const localItems = JSON.parse(localStorage.getItem('local_coins'));
            if (localItems && Array.isArray(localItems)) {
                setItems(localItems);
            } else {
                setItems([]);
            }
            return;
        }

        // Check for local items to sync upon login
        const localItems = JSON.parse(localStorage.getItem('local_coins'));
        if (localItems && Array.isArray(localItems) && localItems.length > 0) {
            // Sync local items to Firestore
            localItems.forEach(async (item) => {
                try {
                    // Remove local ID, let Firestore generate one
                    const { id: _id, ...itemData } = item;
                    await addDoc(collection(db, "users", currentUser.uid, "coins"), {
                        ...itemData,
                        createdAt: new Date(), // Reset creation time to now or keep original if valid
                        updatedAt: new Date()
                    });
                } catch {
                    console.error("Error syncing local coin");
                }
            });
            // Clear local storage after syncing
            localStorage.removeItem('local_coins');
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
        setIsSaving(true);
        if (currentUser) {
            try {
                const docData = {
                    ...newItem,
                    purchasePrice: parseFloat(newItem.purchasePrice) || 0,
                    estimatedValue: newItem.estimatedValue || 0,
                    condition: newItem.condition || '',
                    description: newItem.description || '',
                    imageUrl: newItem.imageUrl || '',
                    status: newItem.status || 'collection', // collection, duplicate, wishlist
                    createdAt: new Date(),
                    updatedAt: new Date()
                };

                if (newItem.imageStatus) {
                    docData.imageStatus = newItem.imageStatus;
                }

                await addDoc(collection(db, "users", currentUser.uid, "coins"), docData);
            } catch (error) {
                console.error("Error adding coin:", error);
                throw error; // Re-throw for UI handling
            } finally {
                setIsSaving(false);
            }
        } else {
            // Local fallback
            setItems(prev => {
                const processedItem = {
                    ...newItem,
                    id: Date.now(),
                    purchasePrice: parseFloat(newItem.purchasePrice) || 0,
                    status: newItem.status || 'collection'
                };
                const updated = [...prev, processedItem];
                localStorage.setItem('local_coins', JSON.stringify(updated));
                return updated;
            });
            setIsSaving(false);
        }
    };

    const removeCoin = async (id) => {
        setIsSaving(true);
        if (currentUser) {
            try {
                await deleteDoc(doc(db, "users", currentUser.uid, "coins", id));
            } catch (error) {
                console.error("Error deleting coin:", error);
                throw error;
            } finally {
                setIsSaving(false);
            }
        } else {
            setItems(prev => {
                const updated = prev.filter(item => item.id !== id);
                localStorage.setItem('local_coins', JSON.stringify(updated));
                return updated;
            });
            setIsSaving(false);
        }
    };

    const updateCoin = async (id, updatedFields) => {
        setIsSaving(true);
        if (currentUser) {
            try {
                // Ensure imageStatus isn't accidentally removed if it's explicitly passed
                const docData = {
                    ...updatedFields,
                    updatedAt: new Date()
                };

                await updateDoc(doc(db, "users", currentUser.uid, "coins", id), docData);
            } catch (error) {
                console.error("Error updating coin:", error);
                throw error;
            } finally {
                setIsSaving(false);
            }
        } else {
            setItems(prev => {
                const updated = prev.map(item => item.id === id ? { ...item, ...updatedFields } : item);
                localStorage.setItem('local_coins', JSON.stringify(updated));
                return updated;
            });
            setIsSaving(false);
        }
    };

    const getItemsByCategory = (category) => {
        return items.filter(item => item.category === category);
    };

    const resetCollection = async () => {
        if (currentUser) {
            try {
                const q = query(collection(db, "users", currentUser.uid, "coins"));
                const querySnapshot = await getDocs(q);

                // Batch deletes (limit 500 per batch)
                const chunks = [];
                const docs = querySnapshot.docs;
                const CHUNK_SIZE = 450; // Safety margin

                for (let i = 0; i < docs.length; i += CHUNK_SIZE) {
                    chunks.push(docs.slice(i, i + CHUNK_SIZE));
                }

                for (const chunk of chunks) {
                    const batch = writeBatch(db);
                    chunk.forEach(docSnap => {
                        batch.delete(docSnap.ref);
                    });
                    await batch.commit();
                }
            } catch (e) {
                console.error("Error resetting collection:", e);
                alert("Error al borrar: " + e.message);
            }
        } else {
            setItems([]);
            localStorage.removeItem('local_coins');
        }
    };

    const importData = async (data) => {
        let newItems = [];

        // 1. Determine format (Array vs Backup Object)
        if (Array.isArray(data)) {
            newItems = data;
        } else if (data && typeof data === 'object' && Array.isArray(data.items)) {
            newItems = data.items;

            // 2. Restore Settings if available
            if (data.settings) {
                if (data.settings.germanMintsEnabled !== undefined) setGermanMintsEnabled(data.settings.germanMintsEnabled);
                if (data.settings.greeceMintsEnabled !== undefined) setGreeceMintsEnabled(data.settings.greeceMintsEnabled);
                if (data.settings.commemorativeVariantsEnabled !== undefined) setCommemorativeVariantsEnabled(data.settings.commemorativeVariantsEnabled);
                if (data.settings.favoriteCountry) setFavoriteCountry(data.settings.favoriteCountry);
                if (data.settings.language) setLanguage(data.settings.language);
                if (data.settings.darkMode !== undefined) setDarkMode(data.settings.darkMode);
            }
        }

        // 3. Process Items
        if (currentUser && Array.isArray(newItems)) {
            setIsSaving(true);
            try {
                // Batch writes (limit 500 per batch)
                const chunks = [];
                const CHUNK_SIZE = 450;

                for (let i = 0; i < newItems.length; i += CHUNK_SIZE) {
                    chunks.push(newItems.slice(i, i + CHUNK_SIZE));
                }

                for (const chunk of chunks) {
                    const batch = writeBatch(db);
                    const colRef = collection(db, "users", currentUser.uid, "coins");

                    chunk.forEach(item => {
                        // Create a new doc reference for each item
                        const docRef = doc(colRef);
                        const { id: _id, ...itemData } = item; // Remove existing ID

                        batch.set(docRef, {
                            ...itemData,
                            purchasePrice: parseFloat(item.purchasePrice) || 0,
                            estimatedValue: item.estimatedValue || 0,
                            condition: item.condition || '',
                            description: item.description || '',
                            imageUrl: item.imageUrl || '',
                            status: item.status || 'collection',
                            createdAt: new Date(),
                            updatedAt: new Date()
                        });
                    });

                    await batch.commit();
                }
            } catch (e) {
                console.error("Import error:", e);
                alert("Error importando datos: " + e.message);
            } finally {
                setIsSaving(false);
            }
        } else if (Array.isArray(newItems)) {
            // Local Replace
            setItems(newItems);
            localStorage.setItem('local_coins', JSON.stringify(newItems));
        }
    };

    const stats = React.useMemo(() => {
        let value = 0;
        let pieces = 0;

        // Sets for unique tracking
        const uniqueSlots = new Set();

        items.forEach(item => {
            // Only count items in collection/duplicate for the main total (exclude wishlist)
            if (item.status === 'wishlist') return;

            const qty = parseInt(item.quantity) || 1;
            value += (parseFaceValue(item.value) * qty);
            pieces += qty;

            // SLOTTING LOGIC (Determines if it fills a new hole in the catalog)
            let dId = item.denomId;

            // HEALING: If denomId is missing for Spain, try to resolve it to match catalog slots
            if (!dId && item.country === 'España' && loadedGlobalData.spain) {
                const sData = loadedGlobalData.spain;
                const yr = parseInt(item.year);
                const val = parseFaceValue(item.value);
                const allLists = [sData.SPAIN_JC1_DENOMINATIONS, sData.SPAIN_FRANCO_DENOMINATIONS, sData.SPAIN_REPUBLIC_DENOMINATIONS, sData.SPAIN_CW_LOCAL_DENOMINATIONS];

                for (const list of allLists) {
                    const match = list.find(d => sData.getSpainCoinStatus(yr, val, d.id) !== 'not_issued');
                    if (match) {
                        dId = match.id;
                        break;
                    }
                }
            }

            const slotKey = [
                item.country,
                item.year,
                item.value,
                item.category,
                item.isCommemorative ? 'comm' : 'std',
                item.variantId || 'base',
                dId || 'base'
            ].join('|');

            if (item.country === 'Alemania' && !germanMintsEnabled) {
                // If mints disabled, we ignore mint in the key
                uniqueSlots.add(slotKey);
            } else if (item.country === 'Grecia' && !greeceMintsEnabled) {
                // If Greece mints disabled, ignore VAR 2002
                if (item.year === 2002 && item.mint === 'VAR') return;
                uniqueSlots.add(`${slotKey}|${item.mint || 'std'}`);
            } else {
                uniqueSlots.add(`${slotKey}|${item.mint || 'std'}`);
            }
        });

        return {
            totalItems: pieces, // Total physical pieces
            uniqueCount: uniqueSlots.size, // Unique holes filled
            totalValue: value,
            wishlistCount: items.filter(i => i.status === 'wishlist').length
        };
    }, [items, germanMintsEnabled, greeceMintsEnabled, loadedGlobalData.spain]);

    const contextValue = React.useMemo(() => ({
        items, addCoin, updateCoin,
        removeCoin,
        catalogSize,
        stats,
        importData,
        getItemsByCategory,
        germanMintsEnabled,
        toggleGermanMints,
        greeceMintsEnabled,
        toggleGreeceMints,
        commemorativeVariantsEnabled,
        toggleCommemorativeVariants,
        favoriteCountry,
        setFavoriteCountry,
        language,
        setLanguage,
        darkMode,
        setDarkMode,
        t,
        resetCollection,
        isSaving,
        loadedGlobalData,
        isDataLoading
    }), [
        items,
        catalogSize,
        stats,
        germanMintsEnabled,
        greeceMintsEnabled,
        commemorativeVariantsEnabled,
        favoriteCountry,
        language,
        darkMode,
        isSaving,
        loadedGlobalData,
        isDataLoading,
        currentUser // Implicit dependency via internal functions but good to note
    ]);

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    );
};
