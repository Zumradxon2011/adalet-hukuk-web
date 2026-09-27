import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { getLawyerBySlug, lawyers } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata, personJsonLd } from "@/lib/seo";

type PageParams = { slug: string };

export function generateStaticParams() {
  return lawyers.map((lawyer) => ({ slug: lawyer.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = getLawyerBySlug(slug);
  if (!lawyer) return {};

  return buildMetadata({
    title: lawyer.isFounder ? `Avukat ${lawyer.name}` : lawyer.name,
    description: lawyer.isFounder
      ? `${lawyer.name}, Adalet Hukuk'un kurucu avukatıdır. İstanbul'da ${siteConfig.experienceYears} yıllık hukuki tecrübesiyle bireysel ve kurumsal müvekkillere hizmet vermektedir.`
      : `${lawyer.name}, Adalet Hukuk ekibinin bir üyesidir.`,
    path: `/avukatlar/${lawyer.slug}`,
    noIndex: !lawyer.hasFullProfile,
  });
}

export default async function LawyerDetailPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const lawyer = getLawyerBySlug(slug);
  if (!lawyer) notFound();

  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Avukatlarımız", path: "/avukatlar" },
    { name: lawyer.name, path: `/avukatlar/${lawyer.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
            {lawyer.isFounder ? (
              <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-navy via-[#1c2a3a] to-burgundy-dark" />
            ) : (
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-navy font-heading text-2xl font-semibold text-ivory">
                {lawyer.initials}
              </span>
            )}

            <div>
              <p className="eyebrow">{lawyer.role}</p>
              <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
                {lawyer.isFounder ? `Avukat ${lawyer.name}` : lawyer.name}
              </h1>

              {lawyer.isFounder ? (
                <>
                  <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft">
                    {lawyer.bio?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="rounded-sm bg-card px-4 py-2.5 text-xs font-semibold text-ink">
                      Kuruluş: {siteConfig.foundedYear}
                    </span>
                    <span className="rounded-sm bg-card px-4 py-2.5 text-xs font-semibold text-ink">
                      Merkez: Çağlayan / Kağıthane
                    </span>
                    <span className="rounded-sm bg-card px-4 py-2.5 text-xs font-semibold text-ink">
                      Ekip: {siteConfig.team.total} Kişi
                    </span>
                  </div>
                </>
              ) : (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                  {lawyer.name}, Adalet Hukuk ekibinin bir üyesi olarak İstanbul Çağlayan
                  merkezli ofisimizde görev almaktadır. Görev alanları hakkında detaylı bilgi
                  için doğrudan büromuzla iletişime geçebilirsiniz.
                </p>
              )}

              <div className="mt-8">
                <Cta href="/iletisim" variant="primary">
                  İletişime Geç
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lawyer.isFounder && (
        <Script
          id="person-jsonld-founder"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              personJsonLd({
                name: lawyer.name,
                slug: lawyer.slug,
                jobTitle: lawyer.role,
                description: lawyer.bio?.join(" "),
              }),
            ),
          }}
        />
      )}
    </>
  );
}
