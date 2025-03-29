"use client"; // Вказуємо, що це клієнтський компонент
import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook to manage a carousel or slider for images with auto-scroll functionality.
 * @param {number} imagesLength - Total number of images in the carousel.
 * @param {number} [visibleCount=5] - Number of images to display at a time.
 * @param {number} [autoScrollDelay=3000] - Time delay (in milliseconds) for auto-scrolling to the next image.
 * @returns {Object} - Contains the current index, array of displayed image indices, and navigation handlers.
 */
export default function useImageFollow(imagesLength, visibleCount = 5, autoScrollDelay = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current image.

  /**
   * Handler to move to the next image in the carousel.
   * Cycles back to the first image after the last image.
   */
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  }, [imagesLength]); // Додаємо залежність `imagesLength`, щоб уникнути помилок ESLint.

  /**
   * Handler to move to the previous image in the carousel.
   * Cycles to the last image if the current index is the first image.
   */
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    );
  }, [imagesLength]);

  /**
   * Effect to enable auto-scrolling of the images at a specified delay interval.
   * Cleans up the interval when the component using the hook is unmounted or autoScrollDelay changes.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next image.
    }, autoScrollDelay);

    return () => clearInterval(interval); // Clear the interval on unmount or when dependencies change.
  }, [autoScrollDelay, handleNext]); // Додаємо `handleNext` до залежностей

  /**
   * Calculate an array of indices for the images to display.
   * Ensures only the specified number of images (visibleCount) is shown, starting from the current index.
   */
  const displayedImages = Array.from({ length: visibleCount }).map(
    (_, i) => (currentIndex + i) % imagesLength
  );

  /**
   * Return the current index, array of visible image indices, and navigation handlers.
   */
  return { currentIndex, displayedImages, handleNext, handlePrev };
}
