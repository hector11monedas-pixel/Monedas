import React from 'react';
import { Plus } from 'lucide-react';
import { getCountryStartYear } from '../../data/EuroData';
import { getGermanCoinStatus, STATUS_NOT_ISSUED, STATUS_SET_ONLY } from '../../data/GermanyEmissionData';
import { getAndorraCoinStatus } from '../../data/AndorraEmissionData';
import { getAustriaCoinStatus } from '../../data/AustriaEmissionData';
import { getBelgiumCoinStatus } from '../../data/BelgiumEmissionData';
import { getCroatiaCoinStatus } from '../../data/CroatiaEmissionData';
import { getEstoniaCoinStatus } from '../../data/EstoniaEmissionData';
import { getFinlandCoinStatus } from '../../data/FinlandEmissionData';
import { getSlovakiaCoinStatus } from '../../data/SlovakiaEmissionData';
import { getSloveniaCoinStatus } from '../../data/SloveniaEmissionData';
import { getVaticanCoinStatus } from '../../data/VaticanEmissionData';
import { getFranceCoinStatus } from '../../data/FranceEmissionData';
import { getGreeceCoinStatus } from '../../data/GreeceEmissionData';
import { getIrelandCoinStatus } from '../../data/IrelandEmissionData';
import { getItalyCoinStatus } from '../../data/ItalyEmissionData';
import { getLatviaCoinStatus } from '../../data/LatviaEmissionData';
import { getLithuaniaCoinStatus } from '../../data/LithuaniaEmissionData';
import { getMaltaCoinStatus } from '../../data/MaltaEmissionData';
import { getMonacoCoinStatus } from '../../data/MonacoEmissionData';
import { getNetherlandsCoinStatus } from '../../data/NetherlandsEmissionData';
import { getPortugalCoinStatus } from '../../data/PortugalEmissionData';
import { getSanMarinoCoinStatus } from '../../data/SanMarinoEmissionData';
import { useCoin } from '../../context/CoinContext';

// ...

import './EuroMatrix.css';

const DENOMINATIONS = [
    { value: 0.01, label: '1 cént.', class: 'copper' },
    { value: 0.02, label: '2 cént.', class: 'copper' },
    { value: 0.05, label: '5 cént.', class: 'copper' },
    { value: 0.10, label: '10 cént.', class: 'gold' },
    { value: 0.20, label: '20 cént.', class: 'gold' },
    { value: 0.50, label: '50 cént.', class: 'gold' },
    { value: 1.00, label: '1 Euro', class: 'bimetal' },
    { value: 2.00, label: '2 Euro', class: 'bimetal' }
];

// Generate years from current (2026) down to 1999
const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1999 + 1 }, (_, i) => currentYear - i);

const EuroMatrix = ({ items, onCellClick, countryName, variant = 'sticky-mode', activeMint = null }) => {
    const { greeceMintsEnabled } = useCoin();

    // Default to 1999 if countryName is missing (should not happen in proper usage)
    const startYear = countryName ? getCountryStartYear(countryName) : 1999;

    // Helper to find item in collection
    const findItem = (year, value, requiredMint) => {
        return items.find(item => {
            const matchYearVal = item.year === year && parseFloat(item.value) === value;
            if (!matchYearVal) return false;

            // Special handling for Germany Generic Mode (No active mint selected)
            // If mints are disabled, we consider it collected if we have ANY coin for that year/value
            if (countryName === 'Alemania' && !activeMint) {
                return true;
            }

            // Special handling for Greece 2002 duplicate row
            if (countryName === 'Grecia' && year === 2002) {
                const itemMint = item.mint || '';
                const reqMint = requiredMint || '';
                return itemMint === reqMint;
            }

            // Standard Mint Check (for Germany specific mint, or normal countries)
            // If activeMint is set, we check against it (implicit via requiredMint)
            if (activeMint) {
                const itemMint = item.mint || '';
                // If row doesn't specify a variant, we look for the Active Mint
                const targetMint = requiredMint || activeMint;
                return itemMint === targetMint;
            }

            return true;
        });
    };

    return (
        <div className={`euro-matrix-container glass-panel ${variant}`}>
            <div className="table-wrapper">
                <table className="euro-matrix">
                    <thead>
                        <tr>
                            <th className="year-header">Año</th>
                            {DENOMINATIONS.map(denom => (
                                <th key={denom.value} className={`denom-header ${denom.class}`}>
                                    {denom.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {YEARS.map(year => {
                            const isYearValid = year >= startYear;
                            // Don't render anything for years before country adoption
                            if (!isYearValid) return null;

                            // Render Row Function
                            const renderRow = (rowYear, variantMint = null, displayYear = null) => (
                                <tr key={`${rowYear}-${variantMint || 'std'}`}>
                                    <td className="year-cell">{displayYear || rowYear}</td>
                                    {DENOMINATIONS.map(denom => {
                                        // Greece 2002 special logic
                                        let effectiveMint = variantMint;
                                        let displayMintStr = null;

                                        if (countryName === 'Grecia' && rowYear === 2002 && variantMint === 'VAR') {
                                            // Map denomination to specific foreign mint
                                            // F: 1, 2, 5, 10, 50 cent
                                            // E: 20 cent
                                            // S: 1, 2 Euro
                                            const val = denom.value;
                                            if (val === 0.20) effectiveMint = 'E';
                                            else if (val >= 1.00) effectiveMint = 'S';
                                            else effectiveMint = 'F';

                                            displayMintStr = effectiveMint;
                                        }

                                        const collectedItem = findItem(rowYear, denom.value, effectiveMint);

                                        // Check availability logic
                                        let cellStatus = 'circulation';
                                        if (countryName === 'Alemania') {
                                            cellStatus = getGermanCoinStatus(rowYear, activeMint || 'A', denom.value);
                                        } else if (countryName === 'Andorra') {
                                            cellStatus = getAndorraCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Austria') {
                                            cellStatus = getAustriaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Bélgica') {
                                            cellStatus = getBelgiumCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Croacia') {
                                            cellStatus = getCroatiaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Eslovaquia') {
                                            cellStatus = getSlovakiaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Eslovenia') {
                                            cellStatus = getSloveniaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Estonia') {
                                            cellStatus = getEstoniaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Finlandia') {
                                            cellStatus = getFinlandCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Francia') {
                                            cellStatus = getFranceCoinStatus(rowYear, null, denom.value);
                                        } else if (countryName === 'Grecia') {
                                            cellStatus = getGreeceCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Irlanda') {
                                            cellStatus = getIrelandCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Italia') {
                                            cellStatus = getItalyCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Letonia') {
                                            cellStatus = getLatviaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Lituania') {
                                            cellStatus = getLithuaniaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Malta') {
                                            cellStatus = getMaltaCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Mónaco') {
                                            cellStatus = getMonacoCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Países Bajos') {
                                            cellStatus = getNetherlandsCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Portugal') {
                                            cellStatus = getPortugalCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'San Marino') {
                                            cellStatus = getSanMarinoCoinStatus(rowYear, denom.value);
                                        } else if (countryName === 'Vaticano') {
                                            cellStatus = getVaticanCoinStatus(rowYear, denom.value, variantMint);
                                        }

                                        const isNotIssued = cellStatus === STATUS_NOT_ISSUED;
                                        const isSetOnly = cellStatus === STATUS_SET_ONLY;

                                        return (
                                            <td
                                                key={`${rowYear}-${denom.value}-${effectiveMint || 'std'}`}
                                                className={`matrix-cell 
                                                    ${collectedItem ? 'collected' : 'empty'} 
                                                    ${isNotIssued ? 'not-issued' : ''} 
                                                    ${isSetOnly ? 'set-only' : ''}`}
                                                onClick={() => {
                                                    if (!isNotIssued) {
                                                        onCellClick(rowYear, denom.value, collectedItem, effectiveMint);
                                                    }
                                                }}
                                            >
                                                {collectedItem ? (
                                                    <div className="check-mark">
                                                        {collectedItem.condition ? (
                                                            <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{collectedItem.condition}</span>
                                                        ) : (
                                                            '✓'
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="cell-content">
                                                        {isNotIssued ? (
                                                            <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>-</span>
                                                        ) : (
                                                            <>
                                                                {displayMintStr && (
                                                                    <span className="mint-hint">{displayMintStr}</span>
                                                                )}
                                                                {!displayMintStr && <div className="add-indicator"><Plus size={12} /></div>}
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );

                            // For Greece 2002, render two rows IF enabled
                            if (countryName === 'Grecia' && year === 2002 && greeceMintsEnabled) {
                                return (
                                    <React.Fragment key="2002-group">
                                        {renderRow(2002, null, '2002')}
                                        {renderRow(2002, 'VAR', '2002 *')}
                                    </React.Fragment>
                                );
                            }

                            // For Vatican 2005, render two rows (Standard/JP II and SV/Sede Vacante)
                            if (countryName === 'Vaticano' && year === 2005) {
                                return (
                                    <React.Fragment key="2005-group">
                                        {renderRow(2005, null, '2005')}
                                        {renderRow(2005, 'SV', '2005 SV')}
                                    </React.Fragment>
                                );
                            }

                            return renderRow(year);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EuroMatrix;
