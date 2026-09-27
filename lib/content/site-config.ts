/**
 * Single source of truth for firm identity, contact details, and NAP
 * (Name / Address / Phone) consistency across the site and structured data.
 * Update values here — do not hardcode contact info in components/pages.
 */

export const siteConfig = {
  name: "Adalet Hukuk",
  legalName: "Adalet Hukuk Bürosu",
  tagline: "İstanbul'da güvenilir hukuki temsil",
  foundedYear: 2017,
  experienceYears: "15+",
  description:
    "Adalet Hukuk, 2017'den bu yana İstanbul'da bireylere, ailelere ve şirketlere ceza, iş, ticaret, icra-iflas, idare, vergi ve aile hukuku alanlarında hukuki danışmanlık ve temsil hizmeti veren bir hukuk bürosudur.",

  // Canonical production URL. Update via NEXT_PUBLIC_SITE_URL env var at deploy time.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.adalethukuk.com",

  contact: {
    phone: "+90 532 342 55 93",
    phoneHref: "tel:+905323425593",
    email: "mirahmetkaya727@gmail.com",
    emailHref: "mailto:mirahmetkaya727@gmail.com",
  },

  address: {
    streetAddress: "Şan Sk. 18A",
    postalCode: "34403",
    addressLocality: "Kağıthane",
    addressRegion: "İstanbul",
    addressCountry: "TR",
    full: "Şan Sk. 18A, 34403 Kağıthane/İstanbul, Türkiye",
  },

  geo: {
    latitude: 41.07734,
    longitude: 28.9814,
  },

  hours: {
    opens: "08:30",
    closes: "18:00",
    display: "08:30 – 18:00",
    days: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"],
  },

  serviceArea: "Türkiye geneli",

  locationTerms: ["İstanbul", "Çağlayan", "Şişli", "Kağıthane"],

  team: {
    total: 33,
    founderCount: 1,
    memberCount: 32,
  },

  /**
   * Firm-supplied headline metrics. Labels below reflect the meaning
   * confirmed via the approved design brief (Figma file
   * CMK4O4CWV8QX048Ww97HSp) — flagged to the client for sign-off since
   * the original written brief left their meaning unconfirmed.
   */
  metrics: {
    filesAndClients: "865+",
    corporateProcesses: "76+",
  },

  social: {
    // Populate when official profiles exist. Left empty deliberately —
    // do not fabricate social presence.
  },
} as const;

export type SiteConfig = typeof siteConfig;
