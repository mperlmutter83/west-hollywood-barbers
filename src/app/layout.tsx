import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "West Hollywood Barbers | Experts in the world of barbershops",
    template: "%s | West Hollywood Barbers",
  },
  description: "West Hollywood Barbers - where classic grooming meets modern style. Fresh since 2015. 369 N Fairfax Ave, Los Angeles, CA 90036. Call (323) 518-1007.",
  keywords: ["west hollywood barbers", "barbershop west hollywood", "haircut weho", "barber los angeles", "mens haircut west hollywood", "fade haircut", "beard trim"],
  openGraph: {
    title: "West Hollywood Barbers | Experts in the world of barbershops",
    description: "Where classic grooming meets modern style. Fresh since 2015.",
    url: "https://westhollywoodbarbers.com",
    siteName: "West Hollywood Barbers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4S8WDQQ');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              "name": "West Hollywood Barbers",
              "description": "Where classic grooming meets modern style. Fresh since 2015.",
              "telephone": "+1-323-518-1007",
              "email": "info@westhollywoodbarbers.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "369 N Fairfax Ave, Unit A",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "postalCode": "90036",
                "addressCountry": "US"
              },
              "url": "https://westhollywoodbarbers.com",
              "priceRange": "$$",
              "openingHours": "Mo-Su",
              "areaServed": ["West Hollywood", "Los Angeles", "WeHo"]
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${openSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4S8WDQQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
