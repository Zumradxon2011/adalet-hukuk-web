import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/content/site-config";
import { organizationJsonLd, allFaqJsonLd } from "@/lib/seo";

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

 keywords: [
    // 1-50: İstanbul va Asosiy Huquqiy Kalit So'zlar
    "Adalet Hukuk", "Mirahmet Kaya", "İstanbul avukat", "İstanbul hukuk bürosu", "İstanbul avukatlık bürosu",
    "Çağlayan avukat", "Kağıthane avukat", "Çağlayan adliyesi avukatı", "İstanbul hukuk danışmanlığı", "En iyi İstanbul avukatı",
    "Güvenilir avukat İstanbul", "İstanbul avukat arıyorum", "Uzman avukat İstanbul", "İstanbul dava avukatı", "Hukuki danışmanlık bürosu",
    "İstanbul barosu avukatı", "Deneyimli hukuk bürosu", "İstanbul avukatlık hizmetleri", "Profesyonel hukuk bürosu", "İstanbul avukat ücretleri",
    "Boşanma avukatı İstanbul", "Ceza avukatı İstanbul", "İş hukuku avukatı İstanbul", "Gayrimenkul avukatı İstanbul", "Ticaret hukuku avukatı İstanbul",
    "Miras avukatı İstanbul", "İcra avukatı İstanbul", "Şirketler hukuku avukatı İstanbul", "Bilişim suçları avukatı İstanbul", "Yabancılar hukuku avukatı İstanbul",
    "İdare hukuku avukatı İstanbul", "Vergi hukuku avukatı İstanbul", "Sağlık hukuku avukatı İstanbul", "Tüketici hukuku avukatı İstanbul", "Sigorta hukuku avukatı İstanbul",
    "Gayrimenkul ve tapu avukatı", "Kira uyuşmazlıkları avukatı", "İşçi alacağı avukatı", "Kıdem tazminatı avukatı", "İşe iade avukatı",
    "Anlaşmalı boşanma avukatı", "Çekişmeli boşanma avukatı", "Nafaka ve velayet avukatı", "Ağır ceza avukatı İstanbul", "Tutuklama avukatı İstanbul",
    "Ağır ceza mahkemesi avukatı", "Asliye ceza avukatı", "Ağır ceza savunması", "Ceza davası avukatı", "Tutuklu avukatı",

    // 51-100: Çağlayan, Kağıthane va Mahalliy (GEO) So'zlar
    "Çağlayan adliyesi", "Kağıthane adliyesi yakın avukat", "Şişli avukat", "Mecidiyeköy avukat", "Beşiktaş avukat",
    "Sarıyer avukat", "Eyüpsultan avukat", "Levent avukat", "Maslak avukat", "Nurtepe avukat",
    "Gültepe avukat", "Telsizler avukat", "Yahya Kemal avukat", "Hamidiye avukat", "Merkez mahalle avukatı",
    "Çağlayan hukuk bürosu", "Kağıthane hukuk bürosu", "Şişli hukuk bürosu", "Mecidiyeköy hukuk bürosu", "Levent hukuk bürosu",
    "Avukatlık ofisi İstanbul", "Hukuk bürosu iletişim", "İstanbul avukat telefonları", "Ücretsiz danışmanlık avukat", "Online hukuki danışmanlık",
    "7/24 avukat hizmeti", "Nöbetçi avukat İstanbul", "Acil ceza avukatı", "Acil boşanma avukatı", "Hızlı dava açma avukatı",
    "İstanbul adliyeleri avukatları", "İstanbul avukatlık tarifesi", "Avukat vekalet ücreti", "Dava masrafları ne kadar", "En iyi ceza avukatı",
    "En iyi boşanma avukatı", "En iyi iş avukatı", "Ünlü hukuk büroları", "Kurumsal hukuk danışmanlığı", "Şirket avukatı İstanbul",
    "Marka patent avukatı İstanbul", "Fikri mülkiyet avukatı", "Sözleşme hazırlama avukatı", "Şirket birleşme avukatı", "İcra takibi avukatı",
    "Borç tahsilat avukatı", "Karşılıksız çek avukatı", "İcra iflas hukuku avukatı", "Konkordato avukatı İstanbul", "İflas erteleme avukatı",

    // 101-150: Turkiyadagi Fuqarolik, Oilaviy va Mulkiy Masalalar
    "Anlaşmalı boşanma protokolü", "Çekişmeli boşanma sebepleri", "Zina davası avukatı", "Şiddetli geçimsizlik avukatı", "Velayet davası ne sürer",
    "Ortak velayet avukatı", "Nafaka artırım davası", "Nafaka indirimi davası", "İştirak nafakası avukatı", "Yoksulluk nafakası",
    "Maddi manevi tazminat davası", "Mal rejimi tasfiyesi", "Edinilmiş mallara katılma", "Nişan bozulması hediyeleri", "Evlilik akdi sözleşmesi",
    "Babalık davası avukatı", "Soybağının reddi davası", "Evlat edinme avukatı", "Vasi tayini davası", "Kısıtlama davası",
    "Miras taksim sözleşmesi", "Vasiyetname hazırlama avukatı", "Mirasın reddi davası", "Tenkis davası avukatı", "Muvazaa tapu iptal davası",
    "Ölünceye kadar bakım sözleşmesi", "Mirastan mal kaçırma davası", "Ortaklığın giderilmesi davası", "İzale-i şüyu davası", "Ecrimisil davası avukatı",
    "Kira tespiti davası", "Kira uyarlama davası", "Tahliye taahhütnamesi avukatı", "İşyeri tahliye davası", "Konut tahliyesi avukatı",
    "Kat mülkiyeti uyuşmazlıkları", "Yapı müteahhidi sözleşmeleri", "Arsa payı karşılığı inşaat", "Gayrimenkul satış vaadi", "Tapu iptal ve tescil",
    "Kamulaştırma bedel artırımı", "İmar uyuşmazlıkları avukatı", "Kentsel dönüşüm hukuku", "Ruhsat ve imar davaları", "Sit alanı hukuku",
    "Çevre hukuku avukatı", "Enerji hukuku avukatı", "Maden hukuku avukatı", "Özelleştirme hukuku", "Kamu ihale hukuku avukatı",

    // 151-200: Jinoyat, Mehnat, Savdo va Boshqa Keng qamrovli So'zlar
    "Uyuşturucu suçu avukatı", "Hırsızlık suçu avukatı", "Dolandırıcılık avukatı", "Şantaj ve tehdit suçu", "Hakaret ve sövme davası",
    "Bilişim yoluyla dolandırıcılık", "Yasadışı bahis avukatı", "Kaçakçılık suçları avukatı", "Rüşvet ve zimmet avukatı", "Görevi kötüye kullanma",
    "Taksirle yaralama davası", "Taksirle öldürme avukatı", "Kasten öldürme avukatı", "Silahlı saldırı davası", "Yaralama suçu avukatı",
    "İş kazası tazminat avukatı", "Ölümcül iş kazası davası", "Meslek hastalığı davası", "Mobbing tazminat davası", "Fazla mesai alacağı davası",
    "Hafta tatili ücreti davası", "Yıllık izin alacağı davası", "İhbar ve kıdem tazminatı", "Haksız fesih davası", "İşyeri devri hukuku",
    "Sendika hakları avukatı", "Yabancı çalışma izni avukatı", "Türkiye ikamet izni", "Türk vatandaşlığı başvuru avukatı", "Yabancı şirket kuruluş",
    "Uluslararası ticaret avukatı", "Gümrük uyuşmazlıkları avukatı", "Deniz ticaret hukuku", "Havacılık hukuku avukatı", "Sigorta tahkim komisyonu",
    "Trafik kazası tazminat", "Ölümlü trafik kazası dava", "Değer kaybı tazminatı", "Hasar onarım davası", "Kasko sigorta uyuşmazlığı",
    "Sağlık turizmi hukuku", "Doktor hatası malpraktis", "Tıbbi hata tazminat davası", "Estetik ameliyat hataları", "Hastaneye dava açma",
    "Tüketici hakem heyeti", "Ayıplı mal davası avukatı", "Mesafeli satış sözleşmesi", "İnternet dolandırıcılığı", "E-ticaret hukuku avukatı"
  ],
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
        url: `${siteConfig.url}/og-image.jpg`,
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
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const faqSchema = allFaqJsonLd();

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
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        {faqSchema && (
          <Script
            id="faq-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </body>
    </html>
  );
}