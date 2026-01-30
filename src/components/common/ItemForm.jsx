import React, { useState } from 'react';
import { useCoin } from '../../context/CoinContext';
import { PlusCircle, Trash2, Save } from 'lucide-react';
import './ItemForm.css';

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
    compactMode = false, // New prop to hide core fields
    editId = null // If provided, we are in EDIT mode
}) => {
    const { addCoin, updateCoin, removeCoin } = useCoin();
    const [formData, setFormData] = useState({
        type: initialType,
        category: initialCategory,
        country: initialCountry,
        year: initialYear,
        value: initialValue,
        mint: initialMint,
        subject: initialSubject,
        isCommemorative: initialIsCommemorative,
        quantity: initialQuantity,
        currency: 'Euro',
        condition: initialCondition,
        description: initialDescription
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Auto-set country if category is 'spain'
        if (name === 'category' && value === 'spain') {
            setFormData(prev => ({ ...prev, [name]: value, country: 'España' }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let processedValue = formData.value;
        // Only parse float if it's NOT one of our special Euro strings and is meant to be numeric (like old behavior)
        // Actually, for consistency, let's keep 'value' as is if it's a string, or parse if it's a number-string.
        // But the previous logic forced parseFloat.
        if (formData.category !== 'euro' || !isNaN(parseFloat(formData.value))) {
            const v = parseFloat(formData.value);
            if (!isNaN(v)) processedValue = v;
        }

        const finalData = {
            ...formData,
            year: parseInt(formData.year) || new Date().getFullYear(),
            value: processedValue,
            quantity: parseInt(formData.quantity) || 1
        };

        if (editId) {
            updateCoin(editId, finalData);
        } else {
            addCoin(finalData);
        }
        onClose();
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
                <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h3 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1.4rem' }}>
                        {formData.subject ? formData.subject : `${formData.value} ${formData.currency}`}
                    </h3>
                    <p style={{ margin: '0.4rem 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
                        {formData.country} · {formData.year}
                    </p>
                </div>
            )}
            {/* END: COMPACT MODE HEADER */}

            {/* START: FULL MODE FIELDS (Hidden in Compact Mode) */}
            {!compactMode && (
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
                                onClick={() => setFormData({ ...formData, type: 'note', category: 'banknotes' })}
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
                                    <option value="banknotes">Billetes</option>
                                )}
                            </select>
                        </div>

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
                                    >
                                        <option value="">Seleccionar País...</option>
                                        {EURO_COUNTRIES.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>

                                    {/* Commemorative Toggle */}
                                    <label className="checkbox-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.isCommemorative || false}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                isCommemorative: e.target.checked,
                                                value: e.target.checked ? '2.00' : prev.value // Auto set 2€
                                            }))}
                                        />
                                        Es Moneda Conmemorativa (2€)
                                    </label>
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
                                />
                            )}
                        </div>

                        {/* Subject Field for Commemoratives */}
                        {formData.category === 'euro' && formData.isCommemorative && (
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
                                />
                            </div>
                        )}

                        {/* Germany Mint Mark */}
                        {formData.country === 'Alemania' && (
                            <div className="form-group">
                                <label htmlFor="mint">Ceca (Letra)</label>
                                <select
                                    name="mint"
                                    id="mint"
                                    value={formData.mint}
                                    onChange={handleChange}
                                    className="glass-input"
                                >
                                    <option value="">Cualquiera</option>
                                    <option value="A">A - Berlin</option>
                                    <option value="D">D - Munich</option>
                                    <option value="F">F - Stuttgart</option>
                                    <option value="G">G - Karlsruhe</option>
                                    <option value="J">J - Hamburg</option>
                                </select>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="year">Año</label>
                            <input
                                type="number"
                                name="year"
                                id="year"
                                value={formData.year}
                                onChange={handleChange}
                                placeholder="Ej: 2024"
                                className="glass-input"
                                required
                            />
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
                                    <option value="30 €">30 €</option>
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
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {/* END: FULL MODE FIELDS */}

            {/* START: SHARED FIELDS (Visible in BOTH modes) */}
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="condition">Conservación</label>
                    <select
                        name="condition"
                        id="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        className="glass-input"
                        style={compactMode ? { height: '50px', fontSize: '1.1rem' } : {}}
                    >
                        <option value="">-- Estado --</option>
                        {/* Common Coin Grades */}
                        <option value="UNC">UNC / SC (Sin Circular)</option>
                        <option value="EBC">EBC (Excelente)</option>
                        <option value="MBC">MBC (Muy Buena)</option>
                        <option value="BC">BC (Buena)</option>
                        <option value="RC">RC (Regular)</option>
                        <option value="Proof">Proof</option>
                    </select>
                </div>

                {/* NEW QUANTITY FIELD */}
                <div className="form-group">
                    <label htmlFor="quantity">Cantidad</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            type="button"
                            className="glass-input"
                            style={{ width: '50px', height: '50px', textAlign: 'center', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1' }}
                            onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                        >-</button>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="glass-input"
                            style={{ textAlign: 'center', height: '50px', fontSize: '1.2rem' }}
                            min="1"
                        />
                        <button
                            type="button"
                            className="glass-input"
                            style={{ width: '50px', height: '50px', textAlign: 'center', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1' }}
                            onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                        >+</button>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción / Notas</label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={compactMode ? "2" : "3"}
                    className="glass-input"
                    placeholder="Detalles adicionales..."
                ></textarea>
            </div>
            {/* END: SHARED FIELDS */}

            {editId ? (
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="button" className="delete-button" onClick={handleDelete} style={{ flex: 1, background: 'rgba(255, 0, 0, 0.2)', color: '#ff6b6b', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                        <Trash2 size={20} />
                        Eliminar
                    </button>
                    <button type="submit" className="submit-button" style={{ flex: 2, margin: 0 }}>
                        <Save size={20} />
                        Guardar
                    </button>
                </div>
            ) : (
                <button type="submit" className="submit-button">
                    <PlusCircle size={20} />
                    {compactMode ? 'Añadir Rápido' : 'Añadir a la Colección'}
                </button>
            )}
        </form >
    );
};

export default ItemForm;
