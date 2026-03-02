import React, { useMemo } from 'react';
import { useCoin } from '../hooks/useCoin';
import { BANKNOTE_DATA } from '../data/BanknoteData';
import { ArrowLeft, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WorldMap from '../components/common/WorldMap';
import './PageLayout.css';
import './World.css';

const BANKNOTE_COUNTRIES = [
    { name: 'Afganistán', code: 'af', path: '/banknotes/af' },
    { name: 'República Checa', code: 'cz', path: '/banknotes/cz' },
    {
        name: 'Abjasia',
        code: 'ab',
        path: '/banknotes/ab',
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/320px-Flag_of_the_Republic_of_Abkhazia.svg.png'
    }
];

const Banknotes = () => {
    const navigate = useNavigate();
    const { items } = useCoin();

    // Filter Banknotes
    const banknotes = useMemo(() => {
        return items.filter(item => item.category === 'banknote');
    }, [items]);

    // Get Unique Countries for Map
    const banknoteCountries = useMemo(() => {
        return Array.from(new Set(banknotes.map(i => i.country)));
    }, [banknotes]);

    // Calculate Total Catalog Size per Country
    const getCatalogSize = (code) => {
        const data = BANKNOTE_DATA[code];
        if (!data || !data.seriesList) return 0;
        return data.seriesList.reduce((acc, series) => acc + series.banknotes.length, 0);
    };

    // Count Collected per Country
    const getCollectedCount = (countryName) => {
        return banknotes.filter(b => b.country === countryName).length;
    };

    return (
        <div className="page-container world-page" style={{ paddingBottom: '80px' }}>
            <div className="page-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#121212' }}>
                <div className="header-content">
                    <div className="title-row">
                        <button onClick={() => navigate('/')} className="back-btn-simple">
                            <ArrowLeft size={24} />
                        </button>
                        <h2>Billetes</h2>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <WorldMap highlightedCountries={banknoteCountries} interactive={false} />
            </div>

            {/* Countries Section */}
            <div className="countries-section">
                <div className="section-title">
                    <Globe size={20} />
                    <span>Países Disponibles</span>
                </div>

                <div className="countries-grid">
                    {[...BANKNOTE_COUNTRIES].sort((a, b) => a.name.localeCompare(b.name)).map((country) => {
                        const total = getCatalogSize(country.code);
                        const collected = getCollectedCount(country.name);

                        return (
                            <div
                                key={country.code}
                                className="country-card"
                                onClick={() => country.path ? navigate(country.path) : null}
                                style={{ position: 'relative' }}
                            >
                                <div className="flag-wrapper">
                                    <img
                                        src={country.flagUrl || `https://flagcdn.com/w160/${country.code}.png`}
                                        alt={country.name}
                                        className="country-flag"
                                    />
                                </div>
                                <span className="country-name">{country.name}</span>
                                <span className="country-counter text-secondary" style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                                    {collected} / {total}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Banknotes;
