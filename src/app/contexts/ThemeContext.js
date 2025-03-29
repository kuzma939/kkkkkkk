"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Контекст для темы
const ThemeContext = createContext();

// Провайдер контекста для темы
export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode");
            if (savedMode !== null) {
                setIsDarkMode(savedMode === "true");
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setIsDarkMode(prefersDark);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("darkMode", isDarkMode);
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Хук для использования контекста
export const useTheme = () => useContext(ThemeContext);