"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

export default function FollowUs() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "follow_us");
  const Insta = "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj";

  const images = [
    { src: "/16.avif", link: Insta },
    // { src: "/17.avif", link: Insta },
    // { src: "/18.avif", link: Insta },
    { src: "/19.avif", link: Insta },
    // { src: "/20.avif", link: Insta },
    // { src: "/21.avif", link: Insta },
    { src: "/22.avif", link: Insta },
    // { src: "/23.avif", link: Insta },
    // { src: "/24.avif", link: Insta },
    { src: "/25.avif", link: Insta },
    // { src: "/26.avif", link: Insta },
    // { src: "/27.avif", link: Insta },
    { src: "/28.avif", link: Insta },
    // { src: "/29.avif", link: Insta },
    // { src: "/30.avif", link: Insta },
    { src: "/31.avif", link: Insta },
    // { src: "/32.avif", link: Insta },
    // { src: "/33.avif", link: Insta },
    { src: "/34.avif", link: Insta },
    // { src: "/35.avif", link: Insta },
    // { src: "/36.avif", link: Insta },
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
    <section id="follow-us" className="bg-black text-white section-container py-12">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {menuItems[0]}
        </h2>
        <div className="border-t border-gray-700"></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">
        {/* Ліва кнопка */}
        <div
          onClick={handlePrev}
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>

        {/* Карусель */}
        <div
        className="flex overflow-hidden w-full px-4 sm:gap-6 md:gap-8"
        
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
                alt={`Зображення ${imageIndex + 1}`}
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

        {/* Права кнопка */}
        <div
          onClick={handleNext}
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
