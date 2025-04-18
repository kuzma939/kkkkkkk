'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import ThumbnailCarousel from "../../components/ThumbnailCarousel/ThumbnailCarousel";

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
  onClose,
}) => {
  const { language } = useLanguage();
  const [currentImage, setCurrentImage] = useState(selectedProduct?.image || "/4.jpg");
 const [selectedColor, setSelectedColor] = useState('');
const [selectedSize, setSelectedSize] = useState('');
 const [quantity, setQuantity] = useState(1);

  const translatedName =
    selectedProduct?.translations?.[language]?.name || selectedProduct?.name;
  const translatedDescription =
    selectedProduct?.translations?.[language]?.description || selectedProduct?.description;

  const isVideo = (media) => typeof media === "object" && media?.type === "video";
  const getSrc = (media) => (typeof media === "string" ? media : media.src);
  const getPoster = (media) =>
    typeof media === "object" && media.poster ? media.poster : "/default-poster.jpg";

  useEffect(() => {
    setCurrentImage(selectedProduct?.image || "/4.jpg");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);
  const handleAddToCart = async ({ selectedColor, selectedSize, quantity }) => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      alert("Не знайдено sessionId");
      return;
    }
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: selectedProduct.id,
          color: selectedColor,
          size: selectedSize,
          quantity,
        }),
      });
  
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("❌ Cart POST error:", err);
      alert("Помилка при додаванні в корзину");
    }
  };
  

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative w-full h-full max-w-5xl bg-gray-300 dark:bg-black rounded-lg shadow-lg overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-5xl text-black dark:text-white hover:text-red-500 transition z-[200]"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="relative flex flex-col sm:flex-row items-start overflow-y-auto p-4">
          <div className="w-full sm:w-1/2 relative">
            {isVideo(currentImage) ? (
              <video
                src={getSrc(currentImage)}
                poster={getPoster(currentImage)}
                controls
                className="rounded-lg w-full"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
            ) : (
              <Image
                src={getSrc(currentImage)}
                alt={translatedName}
                width={800}
                height={600}
                style={{ objectFit: "cover" }}
                className="rounded-lg w-full"
              />
            )}

            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setCurrentImage(image)}
              visibleThumbnails={5}
            />
          </div>

          <div className="w-full sm:w-1/2 dark:bg-black bg-opacity-75 p-6 text-black dark:text-white rounded-lg">
            <InfoForm
              product={{
                ...selectedProduct,
                name: translatedName,
                description: translatedDescription,
                image: getSrc(currentImage),
              }}
              color={
                selectedProduct.translations?.[language]?.color || selectedProduct.color
              }
              colors={
                selectedProduct.translations?.[language]?.colors || selectedProduct.colors
              }
              sizes={selectedProduct.sizes}
              descriptionRef={descriptionRef}
              onContactClick={handleContactButtonClick}
             selectedColor={selectedColor}
             setSelectedColor={setSelectedColor}
             selectedSize={selectedSize}
             setSelectedSize={setSelectedSize}
             quantity={quantity}
             setQuantity={setQuantity}
              onAddToCartClick={handleAddToCart} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
