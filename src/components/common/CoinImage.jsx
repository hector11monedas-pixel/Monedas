import React, { useState } from 'react';

// Wrapper to handle Image fallback gracefully
const CoinImage = ({ src, alt, fallback, isOwned, className, style, children }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Apply proxy to external URLs for better compatibility and hotlink bypass
    const getProxiedSrc = (url) => {
        if (!url) return null;
        if (typeof url === 'string' && url.startsWith('http') && !url.includes('weserv.nl')) {
            // BYPASS PROXY for stable sources
            if (url.includes('ecb.europa.eu') ||
                url.includes('numista.com') ||
                url.includes('nb-ra.org')) return url;

            return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
        }
        return url;
    };

    const proxiedSrc = getProxiedSrc(src);

    // If no source or error occurred, render the fallback (CSS Coin)
    if (!proxiedSrc || error) {
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
                src={proxiedSrc}
                alt={alt}
                loading="lazy"
                referrerPolicy="no-referrer"
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
