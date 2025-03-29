"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";
import ProductBanner from "../../components/products/ProductBanner"; // Імпортуємо банер
import products from "../../data/products";

export default function OffersInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("SpecialOffers", "header");
  const router = useRouter();

  const specialOffers = products.filter((product) => product.isSpecialOffer === true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    if (selectedProduct) {
      handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, language);
    }
  };

  const handleCloseBanner = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="dark:bg-gray-800 bg-[#fcf8f3] text-black dark:text-white min-h-screen px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{menuItems[0]}</h1>
        <p className="dark:text-gray-400 text:bg-black text-sm md:text-base mb-8">
          {menuItems[1]}
        </p>
      </header>

      {/* Якщо вибрано продукт, показуємо ProductBanner */}
      {selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          handleContactButtonClick={onContactClick}
          onClose={handleCloseBanner}
        />
      )}

      <section aria-labelledby="special-offers">
        <h2 id="special-offers" className="sr-only">
          {menuItems[2]}
        </h2>
        <div
          className="bg-gray-100 dark:bg-gray-800 ml-8 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8"
          aria-label="Special offers list"
          role="list"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {specialOffers.map((product) => {
              const translatedName = product.translations?.[language]?.name || product.title;

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  aria-labelledby={`product-title-${product.id}`}
                  role="listitem"
                >
                  <div className="w-full h-[300px] sm:h-[350px] overflow-hidden rounded-t">
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
                    <h3 id={`product-title-${product.id}`} className="font-semibold text-sm sm:text-lg">
                      {translatedName}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-red-600 font-bold text-sm sm:text-base">
                        {product.discountPrice || product.price} UAH
                      </p>
                      {product.discountPrice && (
                        <div className="flex gap-2 items-center">
                          <p className="line-through text-gray-500 text-xs sm:text-sm">
                            {product.price} UAH
                          </p>
                          <p className="text-green-600 text-xs sm:text-sm">
                            -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
{/*"use client";

import products from "../../data/products";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products"; 
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";

export default function OffersInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("SpecialOffers", "header");
  const router = useRouter();
  const descriptionRef = useRef(null);

  const specialOffers = products.filter((product) => product.isSpecialOffer === true);
  const [selectedProduct, setSelectedProduct] = useState(specialOffers[0]);

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
    <main className="dark:bg-gray-800 bg-[#fcf8f3] text-black dark:text-white min-h-screen px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{menuItems[0]}</h1>
        <p className="dark:text-gray-400 text:bg-black text-sm md:text-base mb-8">
        {menuItems[1]}
        </p>
      </header>

      <section aria-labelledby="special-offers">
        <h2 id="special-offers" className="sr-only">
        {menuItems[2]}
        </h2>
        <div
          className="bg-gray-100 dark:bg-gray-800 ml-8 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8"
          aria-label="Special offers list"
          role="list"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {specialOffers.map((product) => {
              const translatedName = product.translations?.[language]?.name || product.title;

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  aria-labelledby={`product-title-${product.id}`}
                  role="listitem"
                >
                  <div className="w-full h-[300px] sm:h-[350px] overflow-hidden rounded-t">
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
                    <h3 id={`product-title-${product.id}`} className="font-semibold text-sm sm:text-lg">
                      {translatedName}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-red-600 font-bold text-sm sm:text-base">
                        {product.discountPrice || product.price} UAH
                      </p>
                      {product.discountPrice && (
                        <div className="flex gap-2 items-center">
                          <p className="line-through text-gray-500 text-xs sm:text-sm">
                            {product.price} UAH
                          </p>
                          <p className="text-green-600 text-xs sm:text-sm">
                            -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      
      <article
        aria-live="polite"
        aria-labelledby="product-details"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8"
        ref={descriptionRef}
      >
        <header className="sr-only">
          <h2 id="product-details">Selected Product Details</h2>
        </header>
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

        <div>
          <InfoForm
            product={selectedProduct}
            colors={selectedProduct.colors}
            sizes={selectedProduct.sizes}
            descriptionRef={descriptionRef}
            onContactClick={onContactClick}
            showDiscount={true}
          />
        </div>
      </article>
    </main>
  );
}
*/}