"use client"; // Оголошуємо Client Component

import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import generateConditionsJsonLd from "../seo/conditions-jsonld";
import seoConfig from "../../../next-seo.config";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const Conditions = dynamic(() => import("../components/Conditions/Conditions"), {
  ssr: false,
  loading: () => <div>Loading conditions...</div>,
});

export default function ConditionPage() {
  const jsonLd = generateConditionsJsonLd(); // Генерація JSON-LD
  const seo = seoConfig.conditions; // SEO-конфігурація

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
        id="condition-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
