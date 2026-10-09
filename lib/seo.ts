import type { Metadata } from "next";
import { siteConfig } from "@/lib/content/site-config";
import { practiceAreas } from "@/lib/content/practice-areas";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/**
 * Shared social preview image. `app/opengraph-image.tsx` renders this route
 * at build time (1200×630 PNG), so every page gets a valid absolute URL.
 */
const ogImageUrl = `${siteConfig.url}/opengraph-image`;
const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  type: "image/png",
};

/**
 * Builds unique, canonical-aware metadata for a page. Always pass a
 * page-specific title/description — never reuse across routes.
 */
export function buildMetadata({ title, description, path, noIndex }: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
      images: [{ ...ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

/**
 * Returns a full structured data array for the firm, including
 * LegalService, Attorney (founder), and LocalBusiness schemas.
 * All geocoordinates, hours, languages, address, and contact details
 * are included for maximum GEO/AIO coverage.
 */
export function organizationJsonLd() {
  // sameAs is only emitted when official profiles exist — siteConfig.social is
  // deliberately empty (no fabricated social presence).
  const sameAs = Object.values(siteConfig.social);

  const legalService = {
    "@type": "LegalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon.svg`,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    areaServed: siteConfig.serviceArea,
    founder: {
      "@type": "Person",
      name: "Mirahmet Kaya",
      url: `${siteConfig.url}/avukatlar/mirahmet-kaya`,
    },
  };

  const attorney = {
    "@type": "Attorney",
    "@id": `${siteConfig.url}/avukatlar/mirahmet-kaya`,
    name: "Mirahmet Kaya",
    jobTitle: "Kurucu Avukat",
    url: `${siteConfig.url}/avukatlar/mirahmet-kaya`,
    worksFor: {
      "@type": "LegalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    areaServed: siteConfig.serviceArea,
    priceRange: "$$",
    knowsLanguage: ["tr"],
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Bank Transfer",
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "tr",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [legalService, attorney, localBusiness, website],
  };
}

export function personJsonLd(input: {
  name: string;
  slug: string;
  jobTitle: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url: `${siteConfig.url}/avukatlar/${input.slug}`,
    jobTitle: input.jobTitle,
    description: input.description,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    // No separate edit history exists for articles, so the publish date doubles
    // as dateModified until an explicit updatedAt field is added to content.
    dateModified: input.datePublished,
    image: [`${siteConfig.url}/opengraph-image`],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/makaleler/${input.slug}`,
    url: `${siteConfig.url}/makaleler/${input.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Aggregates all FAQ items from every practice area into a single
 * FAQPage schema for the homepage.
 */
export function allFaqJsonLd() {
  const allFaqs = practiceAreas.flatMap((area) => area.faq);
  return faqJsonLd(allFaqs);
}
