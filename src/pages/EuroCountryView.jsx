import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCoin } from '../context/CoinContext';
import { Plus, ArrowLeft, Star } from 'lucide-react';
import { getCountryStartYear } from '../data/EuroData';
import { getAustriaNotIssuedCount } from '../data/AustriaEmissionData';
import { getGermanCoinStatus } from '../data/GermanyEmissionData';

import EuroMatrix from '../components/common/EuroMatrix';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';
import './EuroCountryView.css';

const MINT_NAMES = {
    'A': 'Berlin',
    'D': 'Munich',
    'F': 'Stuttgart',
    'G': 'Karlsruhe',
    'J': 'Hamburg'
};

const EuroCountryView = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const { items, removeCoin, germanMintsEnabled, greeceMintsEnabled, favoriteCountry, setFavoriteCountry } = useCoin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState(null);
    const [selectedMint, setSelectedMint] = useState(null);

    // Initial effect to set default mint for Germany
    React.useEffect(() => {
        if (countryName === 'Alemania' && germanMintsEnabled) {
            setSelectedMint('A');
        } else {
            setSelectedMint(null);
        }
    }, [countryName, germanMintsEnabled]);

    // Filter items by category 'euro' and the specific country name
    // If we have a selectedMint, we also filter by that mint
    const countryItems = items.filter(
        item => item.category === 'euro' &&
            item.country === countryName &&
            !item.isCommemorative &&
            (!selectedMint || item.mint === selectedMint)
    );

    // Calculate Total Slots for the counter
    const currentYear = new Date().getFullYear();
    const startYear = getCountryStartYear(countryName);
    const validYears = (currentYear - startYear) + 1; // 2026 - 2002 + 1 = 25 years

    // Base total (8 coins per year)
    let totalSlots = validYears * 8;

    // Special case for Greece (Extra row for 2002)
    if (countryName === 'Grecia' && greeceMintsEnabled) {
        totalSlots += 8;
    }

    // Dynamic adjustment for Germany (Subtract Not Issued)
    if (countryName === 'Alemania') {
        const YEARS = Array.from({ length: validYears }, (_, i) => currentYear - i);
        const DENOMS = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00];

        // If Mints Enabled, we calculate specifically for the Active Mint (or A if just loaded)
        // If Mints Disabled (Generic), we usually just count 1 set per year.

        let notIssuedCount = 0;
        YEARS.forEach(year => {
            DENOMS.forEach(val => {
                const status = getGermanCoinStatus(year, selectedMint || 'A', val);
                if (status === 'not_issued') {
                    notIssuedCount++;
                }
            });
        });

        totalSlots -= notIssuedCount;
    }

    // Dynamic adjustment for Austria
    if (countryName === 'Austria') {
        totalSlots -= getAustriaNotIssuedCount();
    }
    return (
        <div className="page-container">
            <div className="page-header euro-header">
                <div className="header-content">
                    <div className="title-row">
                        <button onClick={() => navigate('/euro/normal')} className="back-btn-simple">
                            <ArrowLeft size={24} />
                        </button>
                        <h2>{countryName}</h2>
                    </div>
                    {countryName === 'Alemania' && germanMintsEnabled && (
                        <div className="mint-tabs-container">
                            <span className="mint-label">Cecas: </span>
                            <div className="mint-tabs">
                                {['A', 'D', 'F', 'G', 'J'].map(mint => (
                                    <button
                                        key={mint}
                                        className={`mint-tab ${selectedMint === mint ? 'active' : ''}`}
                                        onClick={() => setSelectedMint(mint)}
                                    >
                                        <span className="mint-letter">{mint}</span>
                                        {selectedMint === mint && (
                                            <span className="mint-city">{MINT_NAMES[mint]}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="stats-container">
                    <span className="coin-counter-large">{countryItems.length} / {totalSlots}</span>
                    <span className="counter-label">Monedas</span>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedCell ? null : `Añadir Moneda de ${countryName} ${selectedMint ? `(${selectedMint})` : ''}`}
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                    initialCountry={countryName}
                    initialYear={selectedCell?.year}
                    initialValue={selectedCell?.value}
                    initialMint={selectedCell?.mint || selectedMint || ''}
                    // EDIT PROPS
                    editId={selectedCell?.id}
                    initialCondition={selectedCell?.condition || ''}
                    initialQuantity={selectedCell?.quantity || 1}
                    initialDescription={selectedCell?.description || ''}
                    compactMode={true}
                />
            </Modal>

            <EuroMatrix
                items={countryItems}
                countryName={countryName}
                activeMint={selectedMint}
                onCellClick={(year, value, existingItem, mintVariant) => {
                    if (existingItem) {
                        // EDIT MODE
                        setSelectedCell({
                            ...existingItem, // Spread all existing props like quantity, condition, notes
                            id: existingItem.id
                        });
                        setIsModalOpen(true);
                    } else {
                        // ADD MODE
                        setSelectedCell({ year, value, mint: mintVariant });
                        setIsModalOpen(true);
                    }
                }}
            />
        </div>
    );
};

export default EuroCountryView;
