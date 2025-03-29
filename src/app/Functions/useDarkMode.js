import { useState, useEffect, useCallback } from "react";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Загружаем состояние темы при первом рендере
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode");

            if (savedMode !== null) {
                // Если в localStorage есть сохраненное значение, используем его
                setIsDarkMode(savedMode === "true");
            } else {
                // Если в localStorage нет значения, проверяем предпочтения пользователя
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setIsDarkMode(prefersDark);
            }
        }
    }, []);

    // Сохраняем состояние в localStorage и обновляем класс на html
    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = document.documentElement;
            root.className = isDarkMode ? "dark" : "light"; // Меняем класс на html
            localStorage.setItem("darkMode", isDarkMode); // Сохраняем состояние в localStorage
        }
    }, [isDarkMode]);

    // Функция для переключения темы
    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);

    return [isDarkMode, toggleDarkMode]; // Возвращаем текущую тему и функцию для переключения
}