export const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Latore Atelier",
    url: "https://shoopingsite-my9e.vercel.app",
    description:
        "Latore Atelier пропонує стильний та ексклюзивний жіночий одяг для кожного сезону.",
    image: "https://shoopingsite-my9e.vercel.app/logo-social.jpg",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://shoopingsite-my9e.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Latore Atelier",
    url: "https://www.latore.shop/",
    logo: "https://www.latore.shop/favicon.ico?v1",
    sameAs: [
        "https://www.facebook.com/share/18h6VtZV6k/?mibextid=wwXIfr",
        "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj",
        
    ],
};
