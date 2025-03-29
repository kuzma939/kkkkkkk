import { useEffect } from "react";
/**
 * Custom hook for keyboard navigation.
 * @param {Function} onLeft - Function to call when the left arrow is pressed.
 * @param {Function} onRight - Function to call when the right arrow is pressed.
 */
const useKeyboardNavigation = (onLeft, onRight) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && onLeft) {
        onLeft();
      }
      if (event.key === "ArrowRight" && onRight) {
        onRight(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown); 
    return () => {
      window.removeEventListener("keydown", handleKeyDown); 
    };
  }, [onLeft, onRight]); 
};

export default useKeyboardNavigation;
