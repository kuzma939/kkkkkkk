"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const refs = useRef([]);

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(prevIndex);
    onImageSelect(images[prevIndex]);
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    setThumbnailIndex(nextIndex);
    onImageSelect(images[nextIndex]);
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  const isVideo = (item) => typeof item === "object" && item.type === "video";
  const getSrc = (item) => (typeof item === "string" ? item : item.src);
  const getPoster = (item) =>
    typeof item === "object" && item.poster ? item.poster : "/default-poster.jpg";

  useEffect(() => {
    if (refs.current[thumbnailIndex]) {
      refs.current[thumbnailIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [thumbnailIndex]);

  return (
    <div className="relative flex justify-center items-center mt-2">
      {/* Ліва стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        &lsaquo;
      </button>

      {/* Мініатюри */}
      <div className="flex overflow-hidden px-4 gap-4 sm:gap-2 scroll-smooth">
        {images.map((item, index) => {
          const src = getSrc(item);
          const poster = getPoster(item);

          return (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="w-24 sm:w-32 h-36 sm:h-48 shrink-0 relative"
            >
              {isVideo(item) ? (
                <video
                  width={96}
                  height={96}
                  muted
                  playsInline
                  preload="metadata"
                  poster={poster}
                  className={`border rounded cursor-pointer object-cover h-full w-full hover:brightness-150 hover:scale-105 transition-transform duration-300 ${
                    index === thumbnailIndex
                      ? "border-black dark:border-white"
                      : "border-gray-500"
                  }`}
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  onClick={() => {
                    setThumbnailIndex(index);
                    onImageSelect(item);
                  }}
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={96}
                  height={96}
                  style={{ objectFit: "cover" }}
                  className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 transition-transform duration-300 h-full w-full ${
                    index === thumbnailIndex
                      ? "border-black dark:border-white"
                      : "border-gray-500"
                  }`}
                  onClick={() => {
                    setThumbnailIndex(index);
                    onImageSelect(item);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Права стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
{/*"use client";
import React, { useState } from "react";
import Image from "next/image";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(prevIndex);
    onImageSelect(images[prevIndex]);
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    setThumbnailIndex(nextIndex);
    onImageSelect(images[nextIndex]);
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  const isVideo = (item) => typeof item === "object" && item.type === "video";
  const getSrc = (item) => (typeof item === "string" ? item : item.src);
  const getPoster = (item) =>
    typeof item === "object" && item.poster ? item.poster : "/default-poster.jpg";

  return (
    <div className="relative max-w-lg flex justify-center items-center mt-2 overflow-visible">
     
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        &lsaquo;
      </button>

  
      <div className="flex overflow-hidden px-4">
        <div
          className="flex gap-4 sm:gap-0 transition-transform duration-300"
          style={{
            transform: `translateX(-${thumbnailIndex * 60}px)`,
          }}
        >
          {images.map((item, index) => {
            const src = getSrc(item);
            const poster = getPoster(item);

            return (
              <div key={index} className="w-24 sm:w-32 sm:h-32 relative">
                {isVideo(item) ? (
                  <video
                    width={96}
                    height={96}
                    muted
                    playsInline
                    preload="metadata"
                    poster={poster}
                    className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                      index === thumbnailIndex
                        ? "border-black dark:border-white"
                        : "border-gray-500"
                    }`}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    onClick={() => {
                      setThumbnailIndex(index);
                      onImageSelect(item);
                    }}
                  >
                    <source src={src} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    style={{ objectFit: "cover" }}
                    className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                      index === thumbnailIndex
                        ? "border-black dark:border-white"
                        : "border-gray-500"
                    }`}
                    onClick={() => {
                      setThumbnailIndex(index);
                      onImageSelect(item);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

  
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
*/}