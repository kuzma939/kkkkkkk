const topProductsJsonLd = (products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "Product",
    identifier: product.id, // Унікальний ідентифікатор
    name: product.translations?.EN?.name || "Unnamed Product", // Назва продукту
    image: product.image
      ? {
          "@type": "ImageObject",
          url: `https://www.latore.shop?id=${product.image}`,
          width: 1200,
          height: 628,
          caption: product.translations?.EN?.name || "Unnamed Product",
        }
      : undefined,
    description: product.translations?.EN?.description || "No description available", // Опис продукту
    sku: product.sku || "N/A", // SKU продукту
    offers: {
      "@type": "Offer",
      price: product.discountPrice || product.price, // Ціна
      priceCurrency: "UAH",
      availability: "https://schema.org/InStock", // Доступність
    },
    category: product.category || "General", // Категорія
    color: product.colors?.join(", "), // Кольори
    size: product.sizes?.join(", "), // Розміри
    itemCondition: "https://schema.org/NewCondition", // Стан продукту
  })),
});

export default topProductsJsonLd;
