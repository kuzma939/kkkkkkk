"use client";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";
import Script from "next/script";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld"; // Імпорт SEO-даних
import ErrorBoundary from "../app/components/ErrorBoundary/ErrorBoundary";
export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <head>
                <title>
                    Ексклюзивний жіночий одяг від Latore Atelier | Створено для кожного сезону
                </title>
                <meta
                    name="description"
                    content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!"
                />
                <meta
                    name="keywords"
                    content="жіночий одяг, Latore Atelier, ексклюзивний одяг, сучасна мода, стильний одяг, сезонні колекції"
                />
                <meta name="author" content="Latore Atelier" />
                <meta property="og:title" content="Ексклюзивний жіночий одяг від Latore Atelier" />
                <meta
                    property="og:description"
                    content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!"
                />
                <meta
                    property="og:image"
                    content="https://www.latore.shop/light-logo.avif?v=1"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://www.latore.shop/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                <link rel="canonical" href="https://www.latore.shop/" />
                <link rel="preload" href="/fonts/Montserrat-Thin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="/fonts/Montserrat-ThinItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <meta name="google-site-verification" content="cYBcnqSIlXlPJZSokMAgKhJCS8MM2XfwV6-nd4o-Jag" /> */}
               {/* <meta name="google-site-verification" content="Lx8iDUB67zjk42dkkJQsEpoqSlKiSlc1peMe9-jmIqY" />*/}
               <meta name="google-site-verification" content="g_0gD_liwrkkTj-WviMVpLi56EWXTq9nEfPl-uJU72s" />
       {/* Google Analytics */}
       {
  process.env.NODE_ENV === "production" && (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KGLK5J3JEE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KGLK5J3JEE');
        `}
      </Script>
    </>
  )
} 
                {/* JSON-LD через next/script */}
                <Script
                    id="organization-jsonld"
                    type="application/ld+json"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationJsonLd),
                    }}
                />
                <Script
                    id="website-jsonld"
                    type="application/ld+json"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(siteJsonLd),
                    }}
                />
            </head>
            <body className="transition-colors min-h-screen">
              <ThemeProvider>
                <ErrorBoundary>
                  {children}
                </ErrorBoundary>
              </ThemeProvider>
            </body>
        </html>
    );
}