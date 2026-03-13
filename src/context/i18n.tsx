import React, { createContext, useContext, type ReactNode } from 'react';
import hu from '../locales/hu.json';

// Simple Context-based i18n implementation to easily fetch nested JSON keys
type I18nContextType = {
    t: (key: string) => any;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = hu;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Missing translation key: ${key}`);
                return key; // Fallback
            }
        }

        return value;
    };

    return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useTranslation must be used within an I18nProvider');
    }
    return context;
};
