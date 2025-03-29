// Size selection
// This function updates the selected size, setting a value or clearing it if "All" is selected.

export const handleSizeSelect = (size, setSelectedSize) => {
  if (size === "All") {
    setSelectedSize(""); // Скидає фільтр розмірів
  } else {
    setSelectedSize(size); // Встановлює вибраний розмір
  }
};

// Category selection
// This function updates the selected category, setting a value or clearing it if "All" is selected.
export const handleCategorySelect = (category, setSelectedCategory) => {
  setSelectedCategory(category === "All" ? "" : category);
};

// Filtering and sorting products
// This function filters products based on the given parameters (price, size, color, category)
// and sorts them in ascending or descending order of price.
export const filterAndSortProducts = (products, filters, sortOrder) => {
  const { maxPrice, selectedSize, selectedColor, selectedCategory } = filters;

  return products
    .filter((product) => {
      const matchesPrice = product.price <= maxPrice;
      const matchesSize = !selectedSize || product.sizes.includes(selectedSize); // Масив `sizes[]`
      const matchesColor = !selectedColor || product.colors.includes(selectedColor); // Масив `colors[]`
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
       
     return matchesPrice && matchesSize && matchesColor && matchesCategory;
    
    })
    .sort((a, b) => {
      if (sortOrder === "priceAsc") return a.price - b.price;
      if (sortOrder === "priceDesc") return b.price - a.price;
      return 0;
    });
};

// Product click handler
// This function sets the selected product and scrolls the page to a specified element.
export const handleProductClick = (product, setSelectedProduct, scrollToRef) => {
  setSelectedProduct(product);
  if (scrollToRef?.current) {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

// "Contact Us" button handler
// This function redirects the user to the contact page with product details.
export const handleContactButtonClick = (
  router,
  product,
  selectedColor,
  selectedSize,
  quantity,
  language
) => {
  const translatedName =
    product.translations?.[language]?.name || product.title; // Translated name
  const translatedDescription =
    product.translations?.[language]?.description || product.description; // Translated description

  const updatedProduct = {
    ...product,
    translatedName,
    finalPrice: product.discountPrice || product.price, // Використовуємо ціну зі знижкою, якщо є
    sku: product.sku || "Unknown SKU",
    color: selectedColor || product.color, // Use the selected color or default
    size: selectedSize || product.size, // Use the selected size or default
    quantity: quantity || 1, // Use the quantity or default value
    image:
      product.image || product.img?.startsWith('/') || product.img?.startsWith('http')
        ? product.image || product.img
        : '/default-image.png', // Set a default image if the URL is invalid
    translatedDescription,
  };

  router.push(
    `/contact?productName=${encodeURIComponent(translatedName)}&productPrice=${encodeURIComponent(
      updatedProduct.finalPrice // Передаємо знижену ціну
    )}&productDescription=${encodeURIComponent(
      translatedDescription
    )}&productImage=${encodeURIComponent(
      updatedProduct.image
    )}&productColor=${encodeURIComponent(updatedProduct.color)}&productSize=${encodeURIComponent(
      updatedProduct.size
    )}&productQuantity=${encodeURIComponent(updatedProduct.quantity)}&productSKU=${encodeURIComponent(
      updatedProduct.sku
    )}`
  );
};
