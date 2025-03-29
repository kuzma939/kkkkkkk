"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useImageFollow from "../../hooks/useImageFollow";
import Head from "next/head";
import products from "../../data/products";

export default function TopProducts() {
  // Вибираємо лише топ-продукти
  const topProducts = products.filter((product) => product.isTop);

  const [visibleImagesCount, setVisibleImagesCount] = useState(10);

  useEffect(() => {
    const updateVisibleImages = () => {
      setVisibleImagesCount(window.innerWidth <= 460 ? 1 : 10);
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    topProducts.length,
    visibleImagesCount
  );

  const { translateList } = useLanguage();
  const menuItems = translateList("home", "top_products");

  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href={topProducts[0]?.image || ""}
          type="image/avif"
        />
      </Head>
      <section
        id="top-products"
        className="bg-[#fcf8f3] dark:bg-gray-800 text-black dark:text-gray-100 section-container py-12"
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
  className="flex overflow-hidden gap-4 px-4 justify-center"
  style={{ height: "300px" }}
>

            {displayedImages.map((imageIndex, idx) => {
  const product = topProducts[imageIndex];

  if (!product) return null; // Запобігаємо помилкам, якщо product відсутній

  return (
    <Link
      key={`${product.id}-${idx}`} // Використовуємо idx для уникнення дублікатів
      href={`/Top-products?product=${product.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 group"
    >
      <Image
        src={product.image}
       alt={`Топ продукт ${imageIndex + 1}`}

        width={250}
        height={300}
        priority={imageIndex === 0}
        style={{
          objectFit: "cover",
          width: "200px",
          height: "300px",
        }}
        sizes="(max-width: 425px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
        quality={85}
        className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
      />
    </Link>
  );
})}

          </div>

          <div
            onClick={handleNext}
            className="text-2xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
          >
            <FaChevronRight />
          </div>
        </div>
      </section>
    </>
  );
}
{/*
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import Head from "next/head";

export default function TopProducts() {
  const images = [
    { src: "/Costumes/Woolen suit with skirt/1.avif", link: "/Top-products" },
    { src: "/Costumes/Wool suit with trousers/8.avif", link: "/Top-products" },
    { src: "/Costumes/Wool suit with vest/1.avif", link: "/Top-products" },
    { src: "/Dress/Woolen trapeze dress/1.avif", link: "/Top-products" },
    { src: "/Dress/Wool A-line dress/2.avif", link: "/Top-products" },
    { src: "/1.avif", link: "/Top-products" },
    { src: "/2.avif", link: "/Top-products" },
    { src: "/3.avif", link: "/Top-products" },
    { src: "/4.avif", link: "/Top-products" },
    { src: "/5.avif", link: "/Top-products" },
    { src: "/6.avif", link: "/Top-products" },
    { src: "/7.avif", link: "/Top-products" },
  ];

  // Контролюємо, скільки зображень відображати
  const [visibleImagesCount, setVisibleImagesCount] = useState(10);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 460) {
        setVisibleImagesCount(1);
      } else {
        setVisibleImagesCount(10);
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
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "top_products");

  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/Costumes/Woolen suit with skirt/1.avif"
          type="image/avif"
        />
      </Head>
      <section
        id="top-products"
        className="bg-[#fcf8f3] dark:bg-gray-800 text-black dark:text-gray-100 section-container py-12"
      >
        <div className="space-y-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center flex items-center justify-center"
            style={{ minHeight: "3em", lineHeight: "1.5", margin: 0 }}
          >
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
  className="flex overflow-x-auto gap-4 w-full px-4 sm:gap-6 md:gap-8 justify-center"
  style={{
    height: "300px",
    maxWidth: "100%", 
    display: "flex",
    justifyContent: "center", // Центруємо
    alignItems: "center", // Вирівнюємо по вертикалі
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
                  width={250}
                  height={300}
                  priority={imageIndex === 0}
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "300px",
                  }}
                  sizes="(max-width: 425px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
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
    </>
  );
}
*/}