import React, { useMemo } from 'react';
import { getNationalSideImage } from '../../data/NationalEuroImages';
import { getCatalogForCountry } from '../../data/CommemorativeCatalog';
import { wrapWithProxy } from '../../utils/imageUtils';

const ImagePreview = ({
    formData,
    loadedGlobalData,
    currentVariants,
    initialDenomId,
    spainCollectorCoinsCache
}) => {
    const previewImage = useMemo(() => {
        if (formData.type !== 'coin') return null;

        let img = null;

        // 1. Czech Republic
        if (formData.country === 'República Checa' && loadedGlobalData.czech) {
            const denom = loadedGlobalData.czech.CZECH_DENOMINATIONS.find(d => d.value === parseFloat(formData.value));
            if (denom) img = denom.image;
        }
        // 2. Afghanistan
        else if (formData.country === 'Afganistán' && loadedGlobalData.afghan) {
            const denom = loadedGlobalData.afghan.AFGHANISTAN_DENOMINATIONS.find(d => d.value === parseFloat(formData.value));
            if (denom) img = denom.image;
        }
        // 3. Spain (World)
        else if (formData.country === 'España' && formData.category === 'world' && loadedGlobalData.spain) {
            if (formData.variantId && currentVariants.length > 0) {
                const variant = currentVariants.find(v => v.id === formData.variantId);
                if (variant && variant.image) img = variant.image;
            }

            if (!img) {
                const yr = parseInt(formData.year);
                const denomTypeId = formData.denomId || initialDenomId;

                let denom = null;
                if (denomTypeId) {
                    denom = loadedGlobalData.spain.SPAIN_CW_LOCAL_DENOMINATIONS.find(d => d.id === denomTypeId) ||
                        loadedGlobalData.spain.SPAIN_REPUBLIC_DENOMINATIONS.find(d => d.id === denomTypeId) ||
                        loadedGlobalData.spain.SPAIN_PESETA_DENOMINATIONS.find(d => d.id === denomTypeId) ||
                        loadedGlobalData.spain.SPAIN_JC1_DENOMINATIONS.find(d => d.id === denomTypeId);
                }

                if (!denom && yr >= 1975 && yr <= 2001) {
                    denom = loadedGlobalData.spain.SPAIN_JC1_DENOMINATIONS.find(d => {
                        if (d.value !== parseFloat(formData.value)) return false;
                        if (yr <= 1980) return d.id.endsWith('_jc1');
                        if (yr <= 1982) return d.id.endsWith('_jc1_s2');
                        if (yr <= 1989) return d.id.endsWith('_jc1_s3');
                        return d.id.endsWith('_jc1_s4');
                    });
                }

                if (denom) {
                    img = denom.images?.[yr] || denom.image;
                }
            }
        }
        // 4. Euro
        else if (formData.category === 'euro' && formData.country) {
            const numValue = parseFloat(formData.value);
            // Check for Commemoratives
            if (formData.isCommemorative && numValue === 2) {
                const catalog = getCatalogForCountry(formData.country);
                const match = catalog.find(c =>
                    c.year === parseInt(formData.year) &&
                    (c.subject === formData.subject || (formData.subject && c.subject.includes(formData.subject)))
                );
                if (match && match.image) img = match.image;
            }

            // Check for Spanish Collector Coins
            if (!img && formData.country === 'España' && [12, 20, 30, 40].includes(numValue) && spainCollectorCoinsCache) {
                const silverMatch = spainCollectorCoinsCache.find(c =>
                    c.year === parseInt(formData.year) &&
                    c.value === numValue
                );
                if (silverMatch && silverMatch.image) img = silverMatch.image;
            }

            // Fallback to National Side
            if (!img) {
                img = getNationalSideImage(formData.country, formData.value, parseInt(formData.year));
            }
        }

        return img ? wrapWithProxy(img) : null;
    }, [formData, loadedGlobalData, currentVariants, initialDenomId, spainCollectorCoinsCache]);

    if (!previewImage) return null;

    return (
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={previewImage}
                    alt="Coin Preview"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '4px solid rgba(255,215,0,0.2)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                        objectFit: 'cover'
                    }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        </div>
    );
};

export default ImagePreview;
