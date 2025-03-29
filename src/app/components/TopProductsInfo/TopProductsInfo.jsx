"use client";
import products from "../../data/products";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";

export default function TopProductsInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("home", "top_products");
  const router = useRouter();
  const searchParams = useSearchParams();
  const descriptionRef = useRef(null);

  const topProducts = products.filter((product) => product.isTop === true);

  const selectedProductId = searchParams.get("product");
  const initialProduct = selectedProductId
    ? topProducts.find((p) => p.id === Number(selectedProductId))
    : topProducts[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  useEffect(() => {
    if (selectedProductId) {
      const foundProduct = topProducts.find((p) => p.id === Number(selectedProductId));
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        setTimeout(() => {
          descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [selectedProductId]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`?product=${product.id}`, undefined, { shallow: true });
    scrollToDescription();
  };

  const onContactClick = (selectedColor, selectedSize, quantity, currentLanguage) => {
    handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, currentLanguage);
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 text-black dark:text-white min-h-screen px-4 py-8">
  <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{menuItems[0]}</h1>
      </div>

      <section aria-labelledby="top-products">
        <h2 id="top-products" className="sr-only">Top Products</h2>
        <div className="bg-gray-100 dark:bg-gray-800 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {topProducts.map((product) => {
              const translatedName = product.translations?.[language]?.name || product.title;

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
               onClick={() => handleProductClick(product)}
                >
                  <div className="w-full h-[200px] sm:h-[350px] overflow-hidden rounded-t">
                    <Image
                      src={product.image}
                      alt={`Preview of ${translatedName}`}
                      width={300}
                       height={350}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-2 sm:p-4 dark:bg-gray-200">
      
                    <h3 className="font-semibold text-sm sm:text-lg">{translatedName}</h3>
                    <p className="text-black dark:text-gray-600 text-xs sm:text-base">{product.price} UAH</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <article
        aria-live="polite"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8"
        ref={descriptionRef}
      >
        <div className="flex flex-col items-center">
          <Image
            src={selectedProduct.image}
            alt={`Full image of ${selectedProduct.title}`}
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md object-cover rounded-lg shadow-lg aspect-[3/4]"
            priority
          />
          <div className="flex mt-4 sm:mt-8 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setSelectedProduct({ ...selectedProduct, image })}
              visibleThumbnails={5}
            />
          </div>
        </div>

        <InfoForm
          product={selectedProduct}
          colors={selectedProduct.colors}
          sizes={selectedProduct.sizes}
          descriptionRef={descriptionRef}
          onContactClick={onContactClick}
        />
      </article>
    </div>
  );
}

{/*"use client";
import products from "../../data/products";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products"; // Імпорт функції
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";

export default function TopProductsInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("home", "about");
  const router = useRouter();
  const descriptionRef = useRef(null);
  const topProducts = products.filter((product) => product.isTop === true);

  const [selectedProduct, setSelectedProduct] = useState(topProducts[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    scrollToDescription();
  };

  const onContactClick = (selectedColor, selectedSize, quantity, currentLanguage) => {
    handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, currentLanguage);
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 text-black dark:text-white min-h-screen px-4 py-8">
      <div className="text-center">
        {/* <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore the Collection</h1>
        <p className="dark:text-gray-400 text:bg-black text-sm md:text-base mb-8">
        I`m a paragraph. Click here to add your own text and edit me. Let your
        users get to know you.
        </p> /}
      </div>

      <section aria-labelledby="top-products">
        <h2 id="top-products" className="sr-only">Top Products</h2>
        <div className="bg-gray-100 dark:bg-gray-800 ml-0 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {topProducts.map((product) => {
              const translatedName = product.translations?.[language]?.name || product.title;

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  
                  <div className="w-full h-[200px] sm:h-[350px] overflow-hidden rounded-t">
                    <Image
                      src={product.image}
                      alt={`Preview of ${translatedName}`}
                      width={300}
                      height={350}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-2 sm:p-4 dark:bg-gray-200">
                    <h3 className="font-semibold text-sm sm:text-lg">{translatedName}</h3>
                    <p className="text-black dark:text-gray-600 text-xs sm:text-base">{product.price} UAH</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <article
        aria-live="polite"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8"
        ref={descriptionRef}
      >
        <div className="flex flex-col items-center">
          <Image
            src={selectedProduct.image}
            alt={`Full image of ${selectedProduct.title}`}
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md object-cover rounded-lg shadow-lg"
            priority
          />
          <div className="flex mt-4 sm:mt-8 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setSelectedProduct({ ...selectedProduct, image })}
              visibleThumbnails={5}
            />
          </div>
        </div>

        <InfoForm
          product={selectedProduct}
          colors={selectedProduct.colors}
          sizes={selectedProduct.sizes}
          descriptionRef={descriptionRef}
          onContactClick={onContactClick}
        />
      </article>
    </div>
  );
}
*/}