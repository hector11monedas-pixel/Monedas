import React from 'react';
import { Hammer } from 'lucide-react';
import './PageLayout.css';

const World = () => {
    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
            <Hammer size={64} color="var(--gold-400)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                En Construcción
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '400px' }}>
                Pronto podrás gestionar tu colección de monedas del Mundo aquí.
            </p>
        </div>
    );
};

export default World;
