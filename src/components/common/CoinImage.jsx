import React, { useState } from 'react';

// Wrapper to handle Image fallback gracefully
const CoinImage = ({ src, alt, fallback, isOwned, className, style, children }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // If no source or error occurred, render the fallback (CSS Coin)
    if (!src || error) {
        return <>{fallback}</>;
    }

    return (
        <div className={`real-coin-wrapper ${className || ''}`} style={{
            position: 'relative',
            borderRadius: '50%',
            boxShadow: isOwned ? 'inset 0 0 20px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3)' : 'none',
            ...style
        }}>
            {/* Show skeleton/loading state while loading */}
            {!loaded && (
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }} />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onError={() => setError(true)}
                onLoad={() => setLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: isOwned ? 'none' : 'grayscale(100%) opacity(0.5)',
                    transition: 'all 0.3s ease',
                    opacity: loaded ? 1 : 0
                }}
            />

            {/* Overlay ring for realism - Only show when loaded to match image */}
            {loaded && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '50%',
                    border: '4px solid rgba(255,215,0,0.3)', // Subtle gold ring
                    pointerEvents: 'none'
                }} />
            )}

            {/* Render any children (like badges) on top */}
            {loaded && children}
        </div>
    );
};

export default CoinImage;
