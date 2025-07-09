import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Greek Lanka Maritime Services",
    template: "%s | Greek Lanka Maritime",
  },
  description:
    "The Most Trusted Long-Term Partner Providing Services to The Global Maritime Industry. Comprehensive maritime solutions across Sri Lanka's ports.",
  keywords: [
    "maritime services",
    "ship agency",
    "Sri Lanka ports",
    "shipping logistics",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#1e3a8a",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.greeklanka.com",
    siteName: "Greek Lanka Maritime Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greek Lanka Maritime Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greek Lanka Maritime Services",
    description: "Trusted maritime partner in Sri Lanka",
    images: ["/twitter-image.jpg"],
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
