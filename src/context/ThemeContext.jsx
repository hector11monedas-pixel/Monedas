import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { COUNTRY_THEMES } from '../data/ThemeData';

export const ThemeProvider = ({ children }) => {
    const [customBackground, setCustomBackground] = useState(null);

    const setCountryTheme = (countryName) => {
        if (COUNTRY_THEMES[countryName]) {
            setCustomBackground(COUNTRY_THEMES[countryName]);
        } else {
            setCustomBackground(null); // Revert to default
        }
    };

    const resetTheme = () => {
        setCustomBackground(null);
    };

    // Apply to body or root
    useEffect(() => {
        const root = document.documentElement;
        if (customBackground) {
            root.style.setProperty('--app-background', customBackground);
        } else {
            root.style.setProperty('--app-background', COUNTRY_THEMES.default);
        }
    }, [customBackground]);

    return (
        <ThemeContext.Provider value={{ setCountryTheme, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
