"use client";
import dynamic from "next/dynamic"; // Для динамічного імпорту
import Script from "next/script";
import Head from "next/head";
import generateProductsJsonLd from "../seo/all-products-jsonld";
import seoConfig from "../../../next-seo.config";
import products from "../data/products";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false }); // Динамічний імпорт Layout
const AllProducts = dynamic(() => import("../components/AllProducts/AllProducts"), { ssr: false }); // Динамічний імпорт AllProducts

export default function Products() {
    const jsonLd = generateProductsJsonLd(products); // Передаємо масив продуктів
    const seo = seoConfig.allProducts; // SEO-конфігурація для сторінки

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
                id="all-products-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Динамічний рендеринг компонентів */}
            <Layout>
                <AllProducts />
            </Layout>
        </div>
    );
}
