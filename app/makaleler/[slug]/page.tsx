import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { articles, getArticleBySlug } from "@/lib/content/articles";
import { getPracticeAreaBySlug } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";
import { estimateReadingMinutes, formatDateTr } from "@/lib/utils";
import { buildMetadata, articleJsonLd } from "@/lib/seo";

type PageParams = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.dek,
    path: `/makaleler/${article.slug}`,
  });
}

export default async function ArticleDetailPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const area = getPracticeAreaBySlug(article.practiceAreaSlug);
  const minutes = estimateReadingMinutes(article.sections.flatMap((s) => s.paragraphs));

  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Makaleler", path: "/makaleler" },
    { name: article.title, path: `/makaleler/${article.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <article className="bg-ivory py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
            {area && (
              <a href={`/hukuk-alanlari/${area.slug}`} className="hover:text-ink">
                {area.shortTitle}
              </a>
            )}
            <span aria-hidden="true">·</span>
            <span>{formatDateTr(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{minutes} Dk Okuma</span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{article.dek}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.06em] text-label">
            {siteConfig.name}
          </p>

          <div className="mt-10 space-y-8">
            {article.sections.map((section) => (
              <div key={section.heading ?? section.paragraphs[0]}>
                {section.heading && (
                  <h2 className="font-heading text-xl font-semibold text-ink">{section.heading}</h2>
                )}
                <div className="mt-3 space-y-4 text-base leading-relaxed text-ink-soft">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-sm bg-card p-5 text-xs leading-relaxed text-label">
            Bu makale genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Somut
            durumunuza ilişkin değerlendirme için doğrudan iletişime geçmenizi öneririz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="primary">
              Danışmanlık Talep Et
            </Cta>
            {area && (
              <Cta href={`/hukuk-alanlari/${area.slug}`} variant="soft">
                {area.title} Sayfasına Git
              </Cta>
            )}
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.dek,
              slug: article.slug,
              datePublished: article.publishedAt,
            }),
          ),
        }}
      />
    </>
  );
}
