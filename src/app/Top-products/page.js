"use client"; // Оголошуємо файл як клієнтський компонент

import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import topProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products";
import seoConfig from "../../../next-seo.config";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const TopProductsInfo = dynamic(() => import("../components/TopProductsInfo/TopProductsInfo"), {
  ssr: false,
  loading: () => <div>Loading top products...</div>,
});

export default function TopProductspage() {
  const topProducts = products.filter((product) => product.isTop);

  const jsonLd = topProductsJsonLd(topProducts);
  const seo = seoConfig.topProducts;

  return (
    <div className="transition-colors">
      {/* SEO-метатеги */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>

      {/* JSON-LD для SEO */}
      <Script
        id="top-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <TopProductsInfo />
      </Layout>
    </div>
  );
}

{/*"use client"; // Оголошуємо файл як Client Component

import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import topProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products"; // Загальний масив продуктів
import seoConfig from "../../../next-seo.config";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const TopProductsInfo = dynamic(
  () => import("../components/TopProductsInfo/TopProductsInfo"),
  {
    ssr: false,
    loading: () => <div>Loading top products...</div>, // Резервний стан
  }
);

export default function TopProductspage() {
  // Фільтруємо продукти, позначені як `isTop`
  const topProducts = products.filter((product) => product.isTop);

  const jsonLd = topProductsJsonLd(topProducts); // Генеруємо JSON-LD для топ продуктів
  const seo = seoConfig.topProducts; // SEO-конфігурація

  return (
    <div className="transition-colors">
      {/* SEO-метатеги 
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>

      {/* JSON-LD для SEO 
      <Script
        id="top-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів 
      <Layout>
        <TopProductsInfo />
      </Layout>
    </div>
  );
}
*/}