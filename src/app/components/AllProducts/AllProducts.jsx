"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSidebar from "../../Functions/FilterSidebar";
import SortMenu from "../../Functions/SortMenu";
import ProductBanner from "../../components/products/ProductBanner";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts"; 
import {
  handleSizeSelect,
  filterAndSortProducts,
  handleContactButtonClick
} from "../../utils/products";
import products from "../../data/products";
import { useLanguage } from "../../Functions/useLanguage";
import { translateCategory } from "../../utils/categoryTranslation";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const categoryFromURL = searchParams.get("category") || "";

  const [maxPrice, setMaxPrice] = useState(5500);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (productId) {
      const matchedProduct = products.find((p) => String(p.id) === productId);
      if (matchedProduct && matchedProduct.id !== selectedProduct?.id) {
        setSelectedProduct(matchedProduct);
      }
      if (!matchedProduct && selectedProduct) {
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [productId]);

  const filteredProducts = filterAndSortProducts(
    products.filter(
      (product) =>
        !categoryFromURL ||
        categoryFromURL.toLowerCase() === "all" ||
        product.category.toLowerCase() === categoryFromURL.toLowerCase()
    ),
    { maxPrice, selectedSize, selectedColor },
    sortOrder
  );

  const onProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`/All-products?category=${categoryFromURL}&product=${product.id}`, { scroll: false });
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    handleContactButtonClick(
      router,
      selectedProduct,
      selectedColor,
      selectedSize,
      quantity,
      language
    );
  };

  const handleCloseBanner = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("product");
    router.push(`/All-products?${newParams.toString()}`, { scroll: false });
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-100 text-black dark:text-white min-h-screen dark:bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSize={selectedSize}
            handleSizeSelect={(size) => handleSizeSelect(size, setSelectedSize)}
            selectedCategory={categoryFromURL} // ✅
            handleCategorySelect={(category) => {
              router.push(`/All-products?category=${category.toLowerCase()}`);
            }}
          >
            <SortMenu
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              isSortMenuOpen={isSortMenuOpen}
              toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
            />
          </FilterSidebar>

          <main className="w-full md:w-3/4 flex flex-col">
            {selectedProduct && (
              <ProductBanner
                selectedProduct={selectedProduct}
                descriptionRef={descriptionRef}
                handleContactButtonClick={onContactClick}
                onClose={handleCloseBanner}
              />
            )}

            <section aria-labelledby="product-header" className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
              <h1 id="product-header" className="text-3xl sm:text-4xl font-bold mb-2">
                {menuItems[0]}
              </h1>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{menuItems[1]}</p>

              {categoryFromURL && categoryFromURL.toLowerCase() !== "all" && (
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {translateCategory(categoryFromURL, translateList)}
                </h2>
              )}

              <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
                {filteredProducts.length} {menuItems[2]}
              </p>
            </section>

            <section aria-labelledby="product-list" aria-live="polite" className="w-full">
              <h2 id="product-list" className="sr-only">{menuItems[3]}</h2>
              <PaginatedProducts
                products={filteredProducts}
                productsPerPage={12}
                onProductClick={onProductClick}
              />
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}










































{/*"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSidebar from "../../Functions/FilterSidebar";
import SortMenu from "../../Functions/SortMenu";
import ProductBanner from "../../components/products/ProductBanner";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts"; 
import {
  handleSizeSelect,
  handleCategorySelect,
  filterAndSortProducts,
  handleContactButtonClick,
  handleProductClick,
} from "../../utils/products";
import products from "../../data/products";
import { useLanguage } from "../../Functions/useLanguage";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category") || ""; // Отримуємо категорію з URL

  const [maxPrice, setMaxPrice] = useState(5500);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const descriptionRef = useRef(null);

  // Оновлюємо категорію, якщо змінюється URL
  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  // Фільтруємо продукти за категорією
  const filteredProducts = filterAndSortProducts(
    products.filter(
      (product) =>
        !selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase()
    ),
    { maxPrice, selectedSize, selectedColor },
    sortOrder
  );

  const onProductClick = (product) => {
    console.log("Clicked Product:", product);
    handleProductClick(product, setSelectedProduct, descriptionRef);
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    handleContactButtonClick(
      router,
      selectedProduct,
      selectedColor,
      selectedSize,
      quantity,
      language
    );
  };

  const handleCloseBanner = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-100 text-black dark:text-white min-h-screen dark:bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSize={selectedSize}
            handleSizeSelect={(size) => handleSizeSelect(size, setSelectedSize)}
            selectedCategory={selectedCategory}
            handleCategorySelect={(category) => {
              handleCategorySelect(category, setSelectedCategory);
              router.push(`/All-products?category=${category.toLowerCase()}`);
            }}
          >
            <SortMenu
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              isSortMenuOpen={isSortMenuOpen}
              toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
            />
          </FilterSidebar>

          <main className="w-full md:w-3/4 flex flex-col">
            {selectedProduct && (
              <ProductBanner
                selectedProduct={selectedProduct}
                descriptionRef={descriptionRef}
                handleContactButtonClick={onContactClick}
                onClose={handleCloseBanner}
              />
            )}

            <section aria-labelledby="product-header" className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
              <h1 id="product-header" className="text-3xl sm:text-4xl font-bold mb-6">
                {menuItems[0]}
              </h1>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{menuItems[1]}</p>
              <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
                {filteredProducts.length} {menuItems[2]}
              </p>
            </section>

            <section aria-labelledby="product-list" aria-live="polite" className="w-full">
              <h2 id="product-list" className="sr-only">{menuItems[3]}</h2>
              <PaginatedProducts
                products={filteredProducts}
                productsPerPage={12}
                onProductClick={onProductClick}
              />
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
*/}