import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArticleGrid } from "@/components/articles/article-grid";
import { articles } from "@/lib/content/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Makaleler",
  description:
    "Adalet Hukuk ekibinden ceza, iş, ticaret, icra-iflas ve aile hukuku alanlarında bilgilendirici makaleler.",
  path: "/makaleler",
});

export default function ArticlesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: "Makaleler", path: "/makaleler" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <p className="eyebrow">Bilgi Merkezi</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-ink md:text-5xl">
            Makaleler
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Hukuk alanlarımıza dair güncel ve bilgilendirici içerikler. Aşağıdaki makaleler genel
            bilgilendirme amaçlıdır; somut hukuki durumunuz için doğrudan bizimle iletişime
            geçmenizi öneririz.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="container-page">
          <ArticleGrid articles={articles} />
        </div>
      </section>
    </>
  );
}
