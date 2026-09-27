import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { MethodologySection } from "@/components/practice-areas/methodology-section";
import { PracticeAreaFaq } from "@/components/practice-areas/practice-area-faq";
import { ArticleGrid } from "@/components/articles/article-grid";
import { getArticlesByPracticeArea } from "@/lib/content/articles";
import { getPracticeAreaBySlug, practiceAreas } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

type PageParams = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/hukuk-alanlari/${area.slug}`,
  });
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const relatedArticles = getArticlesByPracticeArea(area.slug);
  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hukuk Alanlarımız", path: "/hukuk-alanlari" },
    { name: area.title, path: `/hukuk-alanlari/${area.slug}` },
  ];

  const faqSchema = faqJsonLd(area.faq);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="eyebrow">
              {area.title} Departmanı · {area.categoryLabel}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {area.title} Danışmanlığı ve Hukuki Temsil
            </h1>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              {area.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="/iletisim" variant="primary">
                Dosya Ön İnceleme Talebi
              </Cta>
              <Cta href="/hukuk-alanlari" variant="soft">
                Diğer Hukuk Alanları
              </Cta>
            </div>
          </div>

          <div className="rounded-sm bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-label">
              Bu Alanda Bize Ulaşın
            </p>
            <p className="mt-3 font-heading text-lg font-semibold text-ink">Adalet Hukuk</p>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 block text-sm font-semibold text-burgundy hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="mt-1 block text-sm text-ink-soft hover:text-ink"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-label">
              İlgili mevzuat:{" "}
              {area.relatedLegislation.map((law, index) => (
                <span key={law.number}>
                  {index > 0 && ", "}
                  {law.name} ({law.number})
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-20">
        <div className="container-page">
          <p className="eyebrow">Bu Alanda Hangi Konularda Hizmet Veriyoruz?</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.subServices.map((service) => (
              <div key={service.title} className="rounded-sm bg-surface-alt p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodologySection />

      <PracticeAreaFaq title={area.title} items={area.faq} />

      {relatedArticles.length > 0 && (
        <section className="bg-surface-alt py-16 md:py-20">
          <div className="container-page">
            <p className="eyebrow">Akademik &amp; Uygulamalı Bölüm</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
              {area.title} Makalelerimiz
            </h2>
            <div className="mt-8">
              <ArticleGrid articles={relatedArticles} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy py-14 text-ivory md:py-16">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-tint">
              Hukuki Değerlendirme &amp; Randevu
            </p>
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold md:text-3xl">
              {area.title} dosyanız için gizlilik esasıyla danışmanlık talep edin.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="inverted">
              Danışmanlık Talep Et
            </Cta>
            <Cta href={siteConfig.contact.phoneHref} variant="outline-light">
              {siteConfig.contact.phone}
            </Cta>
          </div>
        </div>
      </section>

      {faqSchema && (
        <Script
          id={`faq-jsonld-area-${area.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
