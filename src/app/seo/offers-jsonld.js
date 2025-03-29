const offersJsonLd = (offers) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: offers
    .filter((offer) => offer.isSpecialOffer) // Фільтруємо лише спеціальні пропозиції
    .map((offer, index) => ({
      "@type": "Product",
      identifier: offer.id, // Унікальний ідентифікатор
      name: offer.translations?.EN?.name || "Unnamed Product",
      image: offer.image
        ? {
            "@type": "ImageObject",
            url: `https://www.latore.shop?isSpecialOfferId=${offer.image}`,
            width: 1200,
            height: 628,
            caption: offer.translations?.EN?.name || "Unnamed Product",
          }
        : undefined,
      description: offer.translations?.EN?.description || "No description available",
      sku: offer.sku || "N/A",
      offers: {
        "@type": "Offer",
        price: offer.discountPrice || offer.price,
        priceCurrency: "UAH",
        availability: "https://schema.org/InStock",
      },
      category: offer.category || "General",
      color: offer.colors?.join(", "),
      size: offer.sizes?.join(", "),
      itemCondition: "https://schema.org/NewCondition", // Стан продукту
    })),
});

export default offersJsonLd;
