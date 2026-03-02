import React from 'react';

const LoadingFallback = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Takes full height of container
        width: '100%',
        background: 'var(--bg-primary, #0a0a0a)',
        color: '#3b82f6'
    }}>
        <div className="animate-pulse" style={{ fontSize: '1.2rem', fontWeight: '500' }}>Cargando...</div>
    </div>
);

export default LoadingFallback;
