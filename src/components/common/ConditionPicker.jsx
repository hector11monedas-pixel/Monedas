import React from 'react';

const ConditionPicker = ({ value, onChange, compactMode }) => {
    return (
        <div className="form-group">
            <label htmlFor="condition">Estado de Conservación</label>
            <select
                name="condition"
                id="condition"
                value={value}
                onChange={onChange}
                className="glass-input"
                style={compactMode ? { height: '50px', fontSize: '1.1rem' } : {}}
            >
                <option value="">-- Estado --</option>
                <option value="UNC">UNC / SC (Sin Circular)</option>
                <option value="EBC">EBC (Excelente)</option>
                <option value="MBC">MBC (Muy Buena)</option>
                <option value="BC">BC (Buena)</option>
                <option value="RC">RC (Regular)</option>
                <option value="Proof">Proof</option>
            </select>
        </div>
    );
};

export default ConditionPicker;
