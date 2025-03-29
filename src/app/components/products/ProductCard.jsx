import React from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

const ProductCard = ({ product, onClick }) => {
  const { language, translateList } = useLanguage();
  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedCategory = product.translations?.[language]?.category || product.category;

  const infoLabels = translateList("Infoform", "header"); // очікуємо: ["Category", "Color", "Select", "Size", "Quantity", ...]
  const categoryLabel = infoLabels[0] || "Category";
  const sizeLabel = infoLabels[3] || "Size";
  const priceLabel = infoLabels[8] || "Price";
  return (
    <article
      className="bg-gray-100 dark:bg-[#0f172a] p-3 sm:p-4 rounded-lg group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${translatedName}`}
    >
      {/* Зображення продукту */}
      <figure className="w-full overflow-hidden rounded relative aspect-[3/4]">
        <Image
          src={product.image || `https://via.placeholder.com/300x220?text=${translatedName}`}
          alt={translatedName || "Product Image"}
          width={300}
          height={400}
          className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <figcaption
          className="absolute inset-0 bg-black dark:bg-[#0f172a] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"
          aria-hidden="true"
        ></figcaption>
      </figure>

      {/* Інформація про продукт */}
      <section className="mt-2 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-semibold text-center sm:text-left">
          {translatedName || "Unnamed Product"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-2 text-center sm:text-left">
          <span className="font-semibold">{priceLabel}:</span> {product.price ? `${product.price}₴` : "N/A"}
        </p>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 text-center sm:text-left">
          <span className="font-semibold">{sizeLabel}:</span> {product.size || "Unknown"}
        </p>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 text-center sm:text-left">
  <span className="font-semibold">{categoryLabel}:</span> {translatedCategory || "Uncategorized"}
</p>


      </section>
    </article>
  );
};

export default ProductCard;
