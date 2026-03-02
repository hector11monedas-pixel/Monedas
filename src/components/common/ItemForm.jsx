import React, { useState, useMemo } from 'react';
import { useCoin } from '../../hooks/useCoin';
import { Trash2, Save, ExternalLink, PlusCircle } from 'lucide-react';
import { getItemValuation, stripPriceHint } from '../../utils/priceUtils';
import { getValidEmissionYears } from '../../utils/emissionUtils';
import { uploadCoinImage } from '../../utils/storageUtils';
import { useAuth } from '../../hooks/useAuth';
import './ItemForm.css';

import ImagePreview from './ImagePreview';
import ConditionPicker from './ConditionPicker';
import QuantitySelector from './QuantitySelector';
import ValuationDisplay from './ValuationDisplay';

let SPAIN_COLLECTOR_COINS_CACHE = null;
let EURO_PRICING_CACHE = null;

const EURO_COUNTRIES = [
    "Alemania", "Andorra", "Austria", "Bélgica", "Bulgaria", "Chipre", "Croacia",
    "Eslovaquia", "Eslovenia", "España", "Estonia", "Finlandia", "Francia",
    "Grecia", "Irlanda", "Italia", "Letonia", "Lituania", "Luxemburgo",
    "Malta", "Mónaco", "Países Bajos", "Portugal", "San Marino", "Vaticano"
];

const ItemForm = ({
    onClose,
    initialType = 'coin',
    initialCategory = 'euro',
    initialCountry = '',
    initialYear = '',
    initialValue = '',
    initialMint = '',
    initialSubject = '',
    initialIsCommemorative = false,
    initialQuantity = 1,
    initialCondition = '',
    initialDescription = '',
    initialEstimatedValue = '',
    initialPurchasePrice = '',
    initialStatus = 'collection',
    compactMode = false,
    editId = null,
    initialBanknoteId = null,
    emissionYears = [],
    minYear = null,
    maxYear = null,
    initialDenomId = '',
    initialVariantId = '',
    initialVariants = []
}) => {
    const { addCoin, updateCoin, removeCoin, loadedGlobalData } = useCoin();
    const { currentUser } = useAuth();

    // Image upload state
    const [imageFile, setImageFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const [formData, setFormData] = useState({
        type: initialType,
        category: initialCategory,
        country: initialCountry,
        year: initialYear,
        value: (initialCountry === 'España' && ['12', '20', '30', '40'].includes(String(initialValue))) ? `${initialValue} €` : initialValue,
        mint: initialMint,
        subject: initialSubject,
        isCommemorative: initialIsCommemorative,
        quantity: initialQuantity,
        currency: initialCountry === 'Abjasia' ? 'Apsar' :
            (initialCountry === 'República Checa' ? 'CZK' :
                (initialCountry === 'Afganistán' ? 'Afgani' :
                    (initialCountry === 'España' && (initialCategory === 'world' || initialCategory === 'spain' || (parseInt(initialYear) < 2002 && initialCategory !== 'euro')) ? 'Pesetas' : 'Euro'))),
        condition: initialCondition || 'UNC',
        description: initialDescription,
        estimatedValue: initialEstimatedValue,
        purchasePrice: initialPurchasePrice,
        status: initialStatus,
        banknoteId: initialBanknoteId,
        denomId: initialDenomId,
        variantId: initialVariantId || ''
    });

    const [availableYears, setAvailableYears] = useState([]);
    const [, setExtraDataLoaded] = useState(false); // Used to force re-render when dynamic data loads

    // --- EFFECT: Dynamic Data Loading ---
    React.useEffect(() => {
        const loadExtraData = async () => {
            let updated = false;

            // Load Spain Collector Coins if needed
            if (formData.country === 'España' && ['12 €', '20 €', '30 €', '40 €'].includes(formData.value) && !SPAIN_COLLECTOR_COINS_CACHE) {
                try {
                    const module = await import('../../data/SpainCollectorCoins');
                    SPAIN_COLLECTOR_COINS_CACHE = module.SPAIN_COLLECTOR_COINS;
                    updated = true;
                } catch (e) { console.error("Failed to load SpainCollectorCoins", e); }
            }

            // Load Euro Pricing if likely needed (Euro category)
            if (formData.category === 'euro' && !EURO_PRICING_CACHE) {
                try {
                    const module = await import('../../data/EuroPricing');
                    EURO_PRICING_CACHE = module.EURO_PRICING;
                    updated = true;
                } catch (e) { console.error("Failed to load EuroPricing", e); }
            }

            if (updated) setExtraDataLoaded(prev => !prev);
        };

        // Debounce slightly to avoid rapid imports on typing
        const timer = setTimeout(loadExtraData, 300);
        return () => clearTimeout(timer);
    }, [formData.country, formData.category, formData.value]);

    // --- EFFECT: Auto-update currency for non-Euro countries (Moved to handleChange for performance) ---

    // --- DERIVED: Variants ---
    const currentVariants = useMemo(() => {
        if (!loadedGlobalData.spain) return [];
        const denomTypeId = formData.denomId || initialDenomId;
        if (formData.country === 'España' && formData.category === 'world' && denomTypeId) {
            const variantEntry = loadedGlobalData.spain.SPAIN_VARIANTS[denomTypeId];
            return variantEntry?.[parseInt(formData.year)] || [];
        }
        return [];
    }, [formData.country, formData.year, formData.category, formData.denomId, initialDenomId, loadedGlobalData.spain]);

    const validatedVariantId = useMemo(() => {
        if (!formData.variantId) return '';
        if (currentVariants.length > 0 && currentVariants.some(v => v.id === formData.variantId)) {
            return formData.variantId;
        }
        return '';
    }, [currentVariants, formData.variantId]);

    // Update available years when relevant fields change
    React.useEffect(() => {
        if (formData.type === 'coin') {
            const years = getValidEmissionYears(
                formData.category,
                formData.country,
                formData.value,
                formData.isCommemorative,
                formData.mint,
                minYear,
                maxYear,
                initialDenomId,
                loadedGlobalData
            );
            setAvailableYears(years);

        } else {
            setAvailableYears(emissionYears);
        }
    }, [formData.category, formData.country, formData.value, formData.isCommemorative, formData.type, formData.mint, emissionYears, minYear, maxYear, initialDenomId, loadedGlobalData]);

    // --- EFFECT: Auto-Calculate Estimated Value on Mount/Update ---
    // This ensures that if the form opens with pre-filled data (e.g. from context) or defaults,
    // the estimated value is populated immediately without waiting for a user interaction.
    React.useEffect(() => {
        // Only run if estimated value is empty (don't overwrite user manual entry or existing value)
        if (!formData.estimatedValue && formData.country && formData.year && formData.value) {

            // Create a temporary item object for valuation
            // We pass the current condition (even if empty)
            const tempItem = {
                ...formData,
                estimatedValue: '',
                purchasePrice: formData.purchasePrice
            };

            const valuation = getItemValuation(tempItem);

            // If we found a valid valuation greater than face value (or if face value is 0/unknown but we have a price)
            // We set it. Note: getItemValuation returns { faceValue, estimatedValue, currency }
            // We check only if estimatedValue > 0.

            if (valuation.estimatedValue > 0) {
                // Avoid infinite loops by only updating if the value is different (though !formData.estimatedValue check handles mostly)
                setFormData(prev => ({
                    ...prev,
                    estimatedValue: valuation.estimatedValue.toString()
                }));
            }
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            let next = { ...prev, [name]: value };

            // 1. Currency Defaults
            if (name === 'country' || name === 'category' || name === 'year') {
                // FORCE TITLE CASE FOR COUNTRY
                if (name === 'country') {
                    // Capitalize first letter, lowercase rest
                    next.country = next.country.charAt(0).toUpperCase() + next.country.slice(1).toLowerCase();
                }

                const yr = parseInt(next.year);
                if (next.country === 'Abjasia') {
                    next.currency = 'Apsar';
                } else if (next.country === 'República Checa') {
                    next.currency = 'CZK';
                } else if (next.country === 'España') {
                    if (next.category === 'euro') {
                        next.currency = 'Euro';
                    } else if (yr < 2002 || next.category === 'world' || next.category === 'spain') {
                        next.currency = 'Pesetas';
                    } else {
                        next.currency = 'Euro';
                    }
                } else if (next.country === 'Afganistán') {
                    next.currency = 'Afgani';
                } else if (next.category === 'euro') {
                    next.currency = 'Euro';
                }

                if (next.category === 'spain') {
                    next.country = 'España';
                    next.currency = 'Pesetas';
                }
            }

            // 2. Suggested Prices & Automatic Labels
            if (['value', 'year', 'condition', 'variantId', 'country', 'isCommemorative', 'mint', 'subject'].includes(name)) {
                // Use the global valuation utility for suggestions
                const tempItem = {
                    ...next,
                    estimatedValue: '', // Clear override to get catalog price
                    purchasePrice: next.purchasePrice // Pass as is
                };
                const valuation = getItemValuation(tempItem);

                if (valuation.estimatedValue > 0) {
                    next.estimatedValue = valuation.estimatedValue.toString();
                }
            }

            // 3. Auto-Year
            if (!next.year && (name === 'country' || name === 'category' || name === 'value')) {
                const years = getValidEmissionYears(
                    next.category,
                    next.country,
                    next.value,
                    next.isCommemorative,
                    next.mint,
                    minYear,
                    maxYear,
                    initialDenomId,
                    loadedGlobalData
                );
                if (years.length > 0) next.year = years[0].toString();
            }

            return next;
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            let processedValue = formData.value;

            // Logic to determine format for saving (Number vs String)
            // Standard behavior: preserve string if possible to match dropdowns (e.g. "2 €")
            // Spanish Silver Coins: Save as NUMBER (e.g. 20) to strict-match catalog data.

            const isSpainSilver = formData.country === 'España' && ['12', '20', '30', '40'].includes(parseFloat(formData.value).toString());

            if (isSpainSilver) {
                // Force save as number (20)
                processedValue = parseFloat(formData.value);
            } else if (formData.category !== 'euro' || !isNaN(parseFloat(formData.value))) {
                // Default legacy logic for other coins
                const v = parseFloat(formData.value);
                if (!isNaN(v)) {
                    processedValue = v;
                }
            }
            // If it falls through, processedValue remains formData.value (string)

            const finalData = {
                ...formData,
                year: parseInt(formData.year) || new Date().getFullYear(),
                value: processedValue,
                quantity: parseInt(formData.quantity) || 1
            };

            // Handle image upload if a new file is selected
            if (imageFile && currentUser) {
                setIsUploading(true);
                try {
                    const uploadedUrl = await uploadCoinImage(imageFile, currentUser.uid);
                    finalData.imageUrl = uploadedUrl;
                    finalData.imageStatus = 'pending'; // Require admin approval
                } catch (uploadError) {
                    console.error("Error uploading image:", uploadError);
                    alert("No se pudo subir la imagen. Guardando sin foto.");
                } finally {
                    setIsUploading(false);
                }
            }

            // Create save promise but don't await immediately
            const savePromise = editId ? updateCoin(editId, finalData) : addCoin(finalData);

            // Race against a 1.5-second timeout to prevent endless hanging
            // If save hangs (but DB write worked), this ensures UI recovers.
            await Promise.race([
                savePromise,
                new Promise(resolve => setTimeout(resolve, 1500))
            ]);

            // Close modal normally (no reload needed if we break the hang)
            onClose();

        } catch (error) {
            console.error("Error saving coin:", error);
            alert("Error al guardar: " + error.message);
        }
    };



    const handleDelete = () => {
        if (window.confirm('¿Seguro que quieres borrar esta moneda?')) {
            removeCoin(editId);
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`item-form ${compactMode ? 'compact' : ''}`}>

            {/* START: COMPACT MODE HEADER */}
            {compactMode && (
                <div style={{ textAlign: 'center', marginBottom: '0.8rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h3 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                        {formData.subject ? formData.subject :
                            (formData.type === 'note' ? `${formData.value} Coronas` :
                                (formData.country === 'España' && formData.currency === 'Pesetas' && parseFloat(formData.value) < 1) ?
                                    `${Math.round(parseFloat(formData.value) * 100)} céntimos` :
                                    `${formData.value} ${formData.currency}`)}
                    </h3>
                    <p style={{ margin: '0.4rem 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
                        {formData.country} {formData.year ? `· ${formData.year}` : ''}
                    </p>

                    <ImagePreview
                        formData={formData}
                        loadedGlobalData={loadedGlobalData}
                        currentVariants={currentVariants}
                        initialDenomId={initialDenomId}
                        spainCollectorCoinsCache={SPAIN_COLLECTOR_COINS_CACHE}
                    />
                </div>
            )}
            {/* END: COMPACT MODE HEADER */}

            {/* START: FULL MODE FIELDS (Hidden in Compact Mode) */}
            {!compactMode ? (
                <>
                    <div className="form-group">
                        <label>Tipo de Colección</label>
                        <div className="type-selector">
                            <button
                                type="button"
                                className={formData.type === 'coin' ? 'active' : ''}
                                onClick={() => setFormData({ ...formData, type: 'coin', category: 'euro' })}
                            >
                                Moneda
                            </button>
                            <button
                                type="button"
                                className={formData.type === 'note' ? 'active' : ''}
                                onClick={() => setFormData({ ...formData, type: 'note', category: 'banknote' })}
                            >
                                Billete
                            </button>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="category">Categoría</label>
                            <select
                                name="category"
                                id="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="glass-input"
                            >
                                {formData.type === 'coin' ? (
                                    <>
                                        <option value="euro">Euro</option>
                                        <option value="spain">España</option>
                                        <option value="world">Mundo</option>
                                    </>
                                ) : (
                                    <option value="banknote">Billetes</option>
                                )}
                            </select>
                        </div>
                    </div>
                </>
            ) : null}

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="country">País</label>
                    {formData.category === 'euro' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <select
                                name="country"
                                id="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="glass-input"
                                required
                                disabled={!!initialCountry || (compactMode && formData.country !== '')}
                            >
                                <option value="">Seleccionar País...</option>
                                {EURO_COUNTRIES.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>

                            {/* Commemorative Toggle - Only in full mode or if already commemorative */}
                            {(!compactMode || formData.isCommemorative) && (
                                <label className="checkbox-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.isCommemorative || false}
                                        onChange={(e) => {
                                            const checked = e.target.checked;
                                            setFormData(prev => {
                                                const next = {
                                                    ...prev,
                                                    isCommemorative: checked,
                                                    value: checked ? '2 €' : prev.value
                                                };

                                                // Re-calculate valuation when toggling commemorative
                                                const valuation = getItemValuation({
                                                    ...next,
                                                    estimatedValue: '' // Reset to force recalc
                                                });

                                                if (valuation.estimatedValue > 0) {
                                                    next.estimatedValue = valuation.estimatedValue.toString();
                                                }

                                                return next;
                                            });
                                        }}
                                        disabled={compactMode || !!initialValue}
                                    />
                                    Es Moneda Conmemorativa (2€)
                                </label>
                            )}
                        </div>
                    ) : (
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Ej: España"
                            className="glass-input"
                            required
                            disabled={!!initialCountry || (compactMode && formData.country !== '')}
                        />
                    )}
                </div>

                {/* Subject Field for Commemoratives */}
                {formData.isCommemorative && (
                    <div className="form-group">
                        <label htmlFor="subject">Motivo / Tema</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject || ''}
                            onChange={handleChange}
                            placeholder="Ej: Juegos Olímpicos, Tratado de Roma..."
                            className="glass-input"
                            required
                            disabled={compactMode && formData.subject !== ''}
                        />
                    </div>
                )}

                {/* Variants / Mint Marks selection (Automated from catalog) */}
                {initialVariants && initialVariants.length > 0 && (
                    <div className="form-group">
                        <label htmlFor="mint">Variante / Marca de Ceca</label>
                        <select
                            name="mint"
                            id="mint"
                            value={formData.mint}
                            onChange={handleChange}
                            className="glass-input"
                            style={compactMode ? { border: '1px solid var(--primary-color)' } : {}}
                            disabled={!!initialMint && initialMint !== ''}
                        >
                            <option value="">Seleccionar Variante...</option>
                            {initialVariants.map(variant => (
                                <option key={variant} value={variant}>
                                    {stripPriceHint(variant)}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="year">Año de Emisión</label>
                    {availableYears && availableYears.length > 0 ? (
                        <select
                            name="year"
                            id="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="glass-input"
                            required
                            style={compactMode ? { border: '1px solid var(--primary-color)' } : {}}
                            disabled={!!initialYear}
                        >
                            <option value="">Seleccionar Año...</option>
                            {availableYears.map(yr => (
                                <option key={yr} value={yr}>{yr}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type="number"
                            name="year"
                            id="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="Ej: 2024"
                            className="glass-input"
                            required
                            style={compactMode ? { border: '1px solid var(--primary-color)' } : {}}
                            disabled={!!initialYear}
                        />
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="value">Valor Facial</label>
                    {formData.type === 'coin' && formData.category === 'euro' ? (
                        <select
                            name="value"
                            id="value"
                            value={formData.value}
                            onChange={handleChange}
                            className="glass-input"
                            required
                            disabled={!!initialValue}
                        >
                            <option value="">Seleccionar Valor...</option>
                            <option value="1 cent. €">1 cent. €</option>
                            <option value="2 cents €">2 cents €</option>
                            <option value="5 cents €">5 cents €</option>
                            <option value="10 cents €">10 cents €</option>
                            <option value="20 cents €">20 cents €</option>
                            <option value="50 cents €">50 cents €</option>
                            <option value="1 €">1 €</option>
                            <option value="2 €">2 €</option>
                            <option value="12 €">12 €</option>
                            <option value="20 €">20 €</option>
                            <option value="30 €">30 €</option>
                            <option value="40 €">40 €</option>
                            <option value="Custom">Otro...</option>
                        </select>
                    ) : (
                        <div className="input-with-suffix">
                            <input
                                type="number"
                                name="value"
                                id="value"
                                value={formData.value}
                                onChange={handleChange}
                                placeholder="Ej: 2"
                                step="0.01"
                                className="glass-input"
                                required
                            />
                            <input
                                type="text"
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                className="currency-input glass-input"
                                placeholder="Divisa"
                                disabled={compactMode}
                            />
                        </div>
                    )}
                </div>

                {/* Variants Selection */}
                {currentVariants.length > 0 && (
                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label htmlFor="variantId" style={{ color: '#4ade80', fontWeight: 'bold' }}>Variante Específica</label>
                        <select
                            name="variantId"
                            id="variantId"
                            value={validatedVariantId}
                            onChange={handleChange}
                            className="glass-input"
                            style={{ border: '1px solid #4ade80', background: 'rgba(74, 222, 128, 0.05)' }}
                        >
                            <option value="">Seleccionar Variante...</option>
                            {currentVariants.map(v => (
                                <option key={v.id} value={v.id}>{v.label}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {/* END: DYNAMIC SHARED FIELDS */}

            {/* START: SHARED FIELDS (Visible in BOTH modes) */}
            <div className="form-grid">
                <ConditionPicker
                    value={formData.condition}
                    onChange={handleChange}
                    compactMode={compactMode}
                />
                <QuantitySelector
                    value={formData.quantity}
                    onChange={handleChange}
                />
            </div>

            {/* START: IMAGE UPLOAD (Visible in BOTH modes) */}
            <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Foto de la Moneda {formData.imageUrl ? '(Ya tiene foto)' : ''}</label>

                {/* Existing Image from edit mode */}
                {formData.imageUrl && !imagePreviewUrl && (
                    <div style={{ marginBottom: '8px', position: 'relative', display: 'inline-block' }}>
                        <img src={formData.imageUrl} alt="Coin" style={{ maxWidth: '100px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} />
                        {formData.imageStatus === 'pending' && (
                            <span style={{ position: 'absolute', top: 0, right: 0, background: '#fbbf24', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                                Pendiente
                            </span>
                        )}
                    </div>
                )}

                {/* New Image Preview */}
                {imagePreviewUrl && (
                    <div style={{ marginBottom: '8px', position: 'relative', display: 'inline-block' }}>
                        <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100px', borderRadius: '8px', border: '2px dashed #4ade80' }} />
                        <span style={{ position: 'absolute', top: -5, right: -5, background: '#ef4444', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px' }}
                            onClick={() => { setImageFile(null); setImagePreviewUrl(''); }}>
                            ✕
                        </span>
                    </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                setImageFile(file);
                                setImagePreviewUrl(URL.createObjectURL(file));
                            }
                        }}
                        id="imageUpload"
                        style={{ display: 'none' }}
                        disabled={!currentUser}
                    />
                    <label htmlFor="imageUpload" className="glass-input" style={{ cursor: currentUser ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px', opacity: currentUser ? 1 : 0.5 }}>
                        📷 {imageFile ? 'Cambiar Foto...' : (formData.imageUrl ? 'Reemplazar Foto...' : 'Añadir Foto...')}
                    </label>
                    {!currentUser && (
                        <span style={{ fontSize: '0.8rem', color: '#fbbf24' }}>Inicia sesión para subir fotos</span>
                    )}
                </div>
            </div>
            {/* END: IMAGE UPLOAD */}

            <div className="form-group">
                <label htmlFor="description">Descripción / Notas</label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={compactMode ? "1" : "3"}
                    className="glass-input"
                    placeholder="Detalles adicionales..."
                ></textarea>
            </div>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="purchasePrice">Precio Compra (€)</label>
                    <input
                        type="number"
                        name="purchasePrice"
                        id="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                        placeholder="Ej: 5.00"
                        step="0.01"
                        className="glass-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estimatedValue">Valor Estimado (€)</label>
                    <input
                        type="number"
                        name="estimatedValue"
                        id="estimatedValue"
                        value={formData.estimatedValue}
                        onChange={handleChange}
                        placeholder="Ej: 15.00"
                        step="0.01"
                        className="glass-input"
                        style={{ fontWeight: 'bold', color: '#4ade80' }}
                    />
                    <ValuationDisplay
                        formData={formData}
                        spainCollectorCoinsCache={SPAIN_COLLECTOR_COINS_CACHE}
                        euroPricingCache={EURO_PRICING_CACHE}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Estado en la Colección</label>
                <div className="status-selector" style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    {[
                        { id: 'collection', label: 'En Colección', color: 'var(--primary-color)' },
                        { id: 'duplicate', label: 'Repetida', color: '#fbbf24' },
                        { id: 'wishlist', label: 'Deseada', color: '#f472b6' }
                    ].map(st => (
                        <button
                            key={st.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, status: st.id }))}
                            style={{
                                flex: 1,
                                padding: '8px',
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: formData.status === st.id ? st.color : 'rgba(255,255,255,0.1)',
                                background: formData.status === st.id ? `${st.color}22` : 'transparent',
                                color: formData.status === st.id ? st.color : 'white',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {st.label}
                        </button>
                    ))}
                </div>
            </div>
            {/* END: SHARED FIELDS */}

            {editId ? (
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="button" className="delete-button" onClick={handleDelete} style={{ flex: 1, background: 'rgba(255, 0, 0, 0.2)', color: '#ff6b6b', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }} disabled={isUploading}>
                        <Trash2 size={20} />
                        Eliminar
                    </button>
                    <button type="submit" className="submit-button" style={{ flex: 2, margin: 0 }} disabled={isUploading}>
                        <Save size={20} />
                        {isUploading ? 'Subiendo...' : 'Guardar'}
                    </button>
                </div>
            ) : (
                <button type="submit" className="submit-button" disabled={isUploading}>
                    <PlusCircle size={20} />
                    {isUploading ? 'Subiendo foto y guardando...' : (compactMode ? 'Añadir Rápido' : 'Añadir a la Colección')}
                </button>
            )}
        </form >
    );
};

export default ItemForm;
