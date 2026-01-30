import React from 'react';
import './CoinCard.css';

const CoinCard = ({ item }) => {
    return (
        <div className="glass-panel coin-card">
            <div className="coin-image-placeholder">
                {item.image ? (
                    <img src={item.image} alt={item.description} />
                ) : (
                    <div className="placeholder-circle">
                        <span>{item.value}</span>
                        <small>{item.currency}</small>
                    </div>
                )}
            </div>

            <div className="coin-details">
                <h4>{item.country}</h4>
                <div className="coin-meta">
                    <span className="year">{item.year}</span>
                    <span className="condition-badge">{item.condition}</span>
                </div>
                <p className="description">{item.description}</p>
            </div>
        </div>
    );
};

export default CoinCard;
