import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Maritime Services Across All Sri Lankan Ports ",
    template: "%s  | Greek Lanka",
  },
  description:
    "Trusted port agency and maritime service provider in Sri Lanka. 24/7 expert support across Colombo, Galle, Hambantota, Trincomalee & Puttalam.",
  keywords: [
    "maritime services Sri Lanka",
    "ship agency Sri Lanka",
    "port agency Colombo",
    "crew change Sri Lanka",
    "Sri Lanka ship chandling",
    "bunker vessel port agency",
    "trusted maritime service provider in Sri Lanka",
    "24/7 port agency services Sri Lanka",
    "ship spares logistics Sri Lanka",
    "yacht and cruise agency Sri Lanka",
    "emergency maritime services Sri Lanka",
    "port agency for naval ships Sri Lanka",
    "maritime security and offshore support Sri Lanka",
    "dry dock repairs agency Sri Lanka",
    "multilingual ship crew change support Sri Lanka",
    "Colombo port agency services",
    "Galle maritime logistics company",
    "Hambantota ship management support",
    "Trincomalee vessel operations agent",
    "Puttalam ship husbandry services",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Greek Lanka Maritime Services",
              description:
                "24/7 maritime service provider offering port agency, crew change, chandling, logistics, and offshore support across all major Sri Lankan ports.",
              url: "https://www.greeklanka.com",
              logo: "https://www.greeklanka.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Level 5D, 46/7, Valiant Towers,Nawam Mawatha",
                addressLocality: "Colombo 02",
                addressRegion: "Western Province",
                postalCode: "00200",
                addressCountry: "LK",
              },
              areaServed: [
                { "@type": "Place", name: "Colombo" },
                { "@type": "Place", name: "Galle" },
                { "@type": "Place", name: "Hambantota" },
                { "@type": "Place", name: "Trincomalee" },
                { "@type": "Place", name: "Puttalam" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94-777-232271",
                contactType: "Customer Service",
                availableLanguage: ["English", "Sinhala", "Tamil"],
              },
              sameAs: [
                "https://www.linkedin.com/company/greek-lanka-maritime-services-pvt-ltd",
                "https://www.greeklanka.com",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
