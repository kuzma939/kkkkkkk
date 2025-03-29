// Hook for managing the state of the header
// This hook combines logic for handling application language, menu state, and menu items.
import { useState } from "react";
import { useLanguage } from "../Functions/useLanguage";

export function useHeaderState() {
  // Integrate the custom hook for managing the application language
  const { language, setLanguage, translateList } = useLanguage();

  // State for managing the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Translate menu items based on the current language
  const menuItems = translateList("home", "header") || [];

  /**
   * Toggle the application language.
   * Switches between "EN" and "FR" and updates the language in local storage.
   */
  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "FR" : "EN"; // Switch language to the opposite
    setLanguage(newLanguage); // Set the new language
    localStorage.setItem("appLanguage", newLanguage); // Save the selected language in local storage
  };

  /**
   * Toggle the menu state (open/close).
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  /**
   * Close the menu by setting its state to `false`.
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Return all states and functions for managing the header.
   */
  return {
    language, // Current language
    menuItems, // Translated menu items
    isMenuOpen, // Menu state
    toggleLanguage, // Function to toggle the language
    toggleMenu, // Function to toggle the menu state
    closeMenu, // Function to close the menu
  };
}
