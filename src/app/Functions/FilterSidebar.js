"use client";

import React, { useState } from "react";
import { useLanguage } from "./useLanguage";
import { FiFilter } from "react-icons/fi";

export default function FilterSidebar({
  maxPrice,
  setMaxPrice,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children
}) {
  const { translateList } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const menuItems = translateList("Filtersidebar", "header") || [];
  const selectLabel = translateList("Infoform", "header")[2] || "Select";

  // Категорії
  const originalCategories = [
    "All", "Costumes", "Dresses", "Shirts", "Skirts",
    "Sweaters", "Pants", "Jackets", "Tops", "Outerwear", "Shorts"
  ];

  const translatedCategories = Array.isArray(translateList("Filtersidebar", "Categories"))
    ? translateList("Filtersidebar", "Categories")
    : originalCategories;

  const categoryMap = Object.fromEntries(
    translatedCategories.map((label, i) => [label, originalCategories[i]])
  );

  const categoryReverseMap = Object.fromEntries(
    originalCategories.map((key, index) => [key.toLowerCase(), translatedCategories[index]])
  );

  // Розміри
  const originalSizes = ["All", "S", "M", "L", "XL"];
  const translatedSizes = Array.isArray(translateList("Filtersidebar", "SizeCatalogue"))
    ? translateList("Filtersidebar", "SizeCatalogue")
    : originalSizes;

  const sizeMap = Object.fromEntries(
    translatedSizes.map((label, i) => [label, originalSizes[i]])
  );

  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  return (
    <>
      {/* Мобільна кнопка фільтра */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex flex-col items-center justify-center gap-1 z-50"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open Filters"
      >
        <FiFilter size={24} />
        <span className="text-xs font-medium">{menuItems[8]}</span>
      </button>

      {isFilterOpen && (
        <button
          className="fixed md:hidden top-1 right-1 text-black dark:text-white text-lg bg-white dark:bg-gray-900 p-2 z-[100]"
          onClick={() => setIsFilterOpen(false)}
        >
          ✖
        </button>
      )}

      <aside
        className={`w-full md:w-1/3 lg:w-1/4 bg-gray-300 p-4 sm:p-6 rounded-lg shadow-2xl dark:bg-[#0f172a] 
        md:block md:relative md:translate-x-0 overflow-y-auto 
        ${isFilterOpen ? "fixed inset-0 bg-white dark:bg-[#0f172a] z-50 translate-x-0" : "hidden"} md:translate-x-0`}
        aria-label="Filter Sidebar"
      >
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
            {menuItems[2] || "Filters"}
          </h2>

          {/* Категорії */}
          <div className="relative">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-8"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <label className="block text-sm font-medium">
                {menuItems[7] || "Category"}:{" "}
                {selectedCategory && categoryReverseMap[selectedCategory.toLowerCase()]
                  ? categoryReverseMap[selectedCategory.toLowerCase()]
                  : selectLabel}
              </label>
              <span className="text-gray-600 dark:text-gray-400 text-lg">
                {isCategoryOpen ? "−" : "+"}
              </span>
            </div>
            {isCategoryOpen && (
              <div className="mt-2 bg-gray-400 dark:bg-gray-700 rounded p-2">
                {translatedCategories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      handleCategorySelect(categoryMap[category]);
                      setIsCategoryOpen(false);
                    }}
                    className={`cursor-pointer p-2 rounded-md text-gray-900 dark:text-gray-300 
                      ${
                        selectedCategory.toLowerCase() === categoryMap[category].toLowerCase()
                          ? "bg-blue-500 text-white dark:bg-blue-400"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Розміри */}
          <div className="relative">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-800 dark:border-gray-700 pb-8"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
            >
              <label className="block text-sm font-medium">
                {menuItems[4] || "Size"}: {selectedSize || selectLabel}
              </label>
              <span className="text-gray-400 text-lg">{isSizeOpen ? "−" : "+"}</span>
            </div>
            {isSizeOpen && (
              <div className="mt-2 bg-gray-400 dark:bg-gray-700 rounded p-2">
                {translatedSizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => {
                      handleSizeSelect(sizeMap[size]);
                      setIsSizeOpen(false);
                    }}
                    className={`cursor-pointer p-2 rounded-md text-gray-900 dark:text-gray-300 
                      ${
                        selectedSize === sizeMap[size]
                          ? "bg-blue-500 text-white dark:bg-blue-400"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ціна */}
          <div>
            <label className="block text-sm font-medium mb-8">{menuItems[3] || "Price range"}</label>
            <div className="flex items-center justify-between text-sm sm:text-base mb-2">
              <span>100₴</span>
              <span>{maxPrice}₴</span>
            </div>
            <input
              type="range"
              min="100"
              max="5500"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-1 bg-gray-800 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none"
            />
          </div>

          {/* Заголовок і сортування */}
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-900 dark:border-gray-700 pb-2">
              {menuItems[0] || "Filters"}
            </h2>
            <div className="mt-4">{children}</div>
          </div>

          {/* Кнопка закриття фільтра на мобільних */}
          <div className="w-full dark:bg-gray-900 p-4 shadow-lg md:hidden">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => setIsFilterOpen(false)}
            >
              {menuItems[9]}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
