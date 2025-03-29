{/*"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

export default function OurProducts() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "Our_Products");

  const images = [
    { src: "/8.avif", link: "/All-products" },
    { src: "/9.avif", link: "/All-products" },
    { src: "/10.avif", link: "/All-products" },
    { src: "/11.avif", link: "/All-products" },
    { src: "/12.avif", link: "/All-products" },
    { src: "/13.avif", link: "/All-products" },
    { src: "/14.avif", link: "/All-products" },
  ];

  // Контролюємо кількість відображуваних зображень
  const [visibleImagesCount, setVisibleImagesCount] = useState(7);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 460) {
        setVisibleImagesCount(1); // Мобільний → 1 зображення
      } else {
        setVisibleImagesCount(7); // Планшет/десктоп → як було
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    visibleImagesCount
  );

  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <section
      id="our-products"
      className="bg-[#fcf8f3] dark:bg-gray-800 text-black dark:text-gray-100 section-container py-8"
    >
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {menuItems[0]}
        </h2>
        <div className="border-t border-gray-300 dark:border-gray-700"></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">
    
        <div
          onClick={handlePrev}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>

  
        <div
          className="flex overflow-x-auto w-full px-4 sm:gap-6 md:gap-8"
          style={{
            height: "300px",
            maxWidth: "100%",
            display: "flex",
            justifyContent: visibleImagesCount === 1 ? "center" : "flex-start", // Центруємо тільки на мобільних
            alignItems: "center",
          }}
        >
          {displayedImages.map((imageIndex) => (
            <Link
              key={imageIndex}
              href={images[imageIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <Image
                src={images[imageIndex].src}
                alt={`Топ продукт ${imageIndex + 1}`}
                width={200} // Фіксований розмір для мобільних
                height={300}
                priority={imageIndex === 0}
                style={{
                  objectFit: "cover",
                  display: "block",
                  margin: visibleImagesCount === 1 ? "0 auto" : "0", // Центруємо тільки на мобільних
                }}
                sizes="(max-width: 425px) 200px, (max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
                quality={85}
                className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
              />
            </Link>
          ))}
        </div>

    
        <div
          onClick={handleNext}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}*/}
