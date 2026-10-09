import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/content/site-config";
import { organizationJsonLd } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | İstanbul Hukuk ve Danışmanlık Bürosu`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "İstanbul Çağlayan ve Kağıthane bölgesinde profesyonel avukatlık, hukuki danışmanlık ve dava takibi hizmetleri. Uzman kadromuzla yanınızdayız.",

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | İstanbul Hukuk ve Danışmanlık Bürosu`,
    description: "İstanbul Çağlayan ve Kağıthane bölgesinde profesyonel avukatlık ve hukuki danışmanlık hizmetleri.",
    images: [
      {
        // Rendered by app/opengraph-image.tsx at build time (1200×630 PNG).
        // The previous static /og-image.jpg did not exist in public/.
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} İstanbul Hukuk Bürosu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | İstanbul Hukuk ve Danışmanlık`,
    description: "İstanbul merkezli uzman hukuk ve avukatlık hizmetleri.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <a
          href="#ana-icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
        >
          İçeriğe geç
        </a>
        <Navbar />
        <main id="ana-icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* JSON-LD is rendered as a plain inline script so it is present in the
            static HTML and readable by crawlers that do not execute JavaScript. */}
        <script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}