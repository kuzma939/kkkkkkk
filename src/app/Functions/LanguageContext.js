{/*"use client"; 

import { useState, useContext, createContext, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("EN");
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        // Dynamically fetch translations.json from the public folder
        const fetchTranslations = async () => {
            try {
                const res = await fetch("/locales/translations.json");
                const data = await res.json();
                setTranslations(data);
            } catch (error) {
                console.error("Error loading translations:", error);
            }
        };
        fetchTranslations();
    }, []);

    const translate = (page, component) => {
        return translations[language]?.[page]?.[component] || "Missing translation";
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);*/}