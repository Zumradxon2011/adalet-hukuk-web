import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { PracticeAreaExplorer } from "@/components/practice-areas/practice-area-explorer";
import { practiceAreas } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hukuk Alanlarımız",
  description:
    "Adalet Hukuk bünyesindeki 12 hukuk alanında İstanbul'da danışmanlık ve dava takibi hizmetlerimizi inceleyin.",
  path: "/hukuk-alanlari",
});

export default function PracticeAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hukuk Alanlarımız", path: "/hukuk-alanlari" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <p className="eyebrow">Kurumsal &amp; Bireysel Hukuki Hizmetler</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-ink md:text-5xl">
            Hukuk Alanlarımız ve Uzmanlık Departmanlarımız
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Adalet Hukuk bünyesindeki {siteConfig.team.total} kişilik ekibimiz, ihtisaslaştığı
            alanlarda müvekkillerimize analitik ve sonuç odaklı çözümler üretir. Aşağıda 12 hukuk
            alanındaki hizmet kapsamımızı inceleyebilirsiniz.
          </p>

          <div className="mt-12 overflow-hidden rounded-sm bg-navy p-10 text-ivory md:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-tint">
              Kurumsal İlkelerimiz
            </p>
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold md:text-3xl">
              Teknik Derinlik ve Yüksek Mahkeme Tecrübesi
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-navy-tint md:text-base">
              Çağlayan Adliyesi&apos;ne yakın merkezimizde, karmaşık uyuşmazlıklar ilgili hukuk
              alanlarındaki ekip üyelerimizin ortak değerlendirmesiyle ele alınır.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="container-page">
          <PracticeAreaExplorer areas={practiceAreas} />
        </div>
      </section>

      <section className="bg-navy py-14 text-ivory md:py-16">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-tint">
              Ön Değerlendirme &amp; Yönlendirme
            </p>
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold md:text-3xl">
              Dosyanızın hangi hukuk alanına girdiğinden emin değil misiniz?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-navy-tint">
              Ekibimizle ilk değerlendirme görüşmesini planlayın; dosyanız incelenerek ilgili
              departmana doğrudan yönlendirilir.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="inverted">
              Hukuki Değerlendirme Talep Et
            </Cta>
            <Cta href={siteConfig.contact.phoneHref} variant="outline-light">
              {siteConfig.contact.phone}
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
