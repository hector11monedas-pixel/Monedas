import React from 'react';

const QuantitySelector = ({ value, onChange }) => {
    const handleDecrement = () => onChange({ target: { name: 'quantity', value: Math.max(1, value - 1) } });
    const handleIncrement = () => onChange({ target: { name: 'quantity', value: value + 1 } });

    return (
        <div className="form-group">
            <label htmlFor="quantity">Cantidad</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                    type="button"
                    className="glass-input"
                    style={{ width: '50px', height: '50px', textAlign: 'center', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1' }}
                    onClick={handleDecrement}
                >-</button>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={value}
                    onChange={onChange}
                    className="glass-input"
                    style={{ textAlign: 'center', height: '50px', fontSize: '1.2rem' }}
                    min="1"
                />
                <button
                    type="button"
                    className="glass-input"
                    style={{ width: '50px', height: '50px', textAlign: 'center', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1' }}
                    onClick={handleIncrement}
                >+</button>
            </div>
        </div>
    );
};

export default QuantitySelector;
