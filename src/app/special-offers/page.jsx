"use client"; // Оголошуємо файл як Client Component

import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import offersJsonLd from "../seo/offers-jsonld";
import products from "../data/products"; // Загальний масив продуктів
import seoConfig from "../../../next-seo.config";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const OffersInfo = dynamic(() => import("../components/OffersInfo/OffersInfo"), {
  ssr: false,
  loading: () => <div>Loading offers...</div>, // Резервний стан
});

export default function Offerspage() {
  const offers = products; // Використовуємо загальний масив продуктів
  const jsonLd = offersJsonLd(offers); // Генеруємо JSON-LD тільки для спеціальних пропозицій
  const seo = seoConfig.offers; // SEO-конфігурація

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
        id="offers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <OffersInfo />
      </Layout>
    </div>
  );
}
