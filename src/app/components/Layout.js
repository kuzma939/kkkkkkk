"use client";

import { LanguageProvider } from "../Functions/useLanguage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useTheme } from "../contexts/ThemeContext";
export default function Layout({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <LanguageProvider>
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
   
  );
}
 