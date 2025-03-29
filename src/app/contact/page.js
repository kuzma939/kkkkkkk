import { Suspense } from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import Head from "next/head";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const seo = seoConfig.contact; // Отримуємо конфігурацію для сторінки

  return (
    <div className="transition-colors">
       <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>
    
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}