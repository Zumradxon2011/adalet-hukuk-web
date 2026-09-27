import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { Stats } from "@/components/ui/stats";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { founderLawyer } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Adalet Hukuk, 2017'de İstanbul'da kurulmuş; bugün 33 kişilik ekibiyle Türkiye genelinde hukuki danışmanlık ve dava takibi hizmeti veren bir hukuk bürosudur.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <p className="eyebrow">Kurumsal Kimlik</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-ink md:text-5xl">
            Adalet Hukuk Hakkında
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Adalet Hukuk, {siteConfig.foundedYear} yılında İstanbul&apos;da Avukat{" "}
              {founderLawyer.name} tarafından kurulmuştur. Bugün {siteConfig.team.total} kişilik
              ekibimizle, İstanbul Kağıthane merkezli ofisimizden Türkiye genelinde bireylere,
              ailelere ve şirketlere hukuki danışmanlık ve dava takibi hizmeti veriyoruz.
            </p>
            <p>
              Ceza, iş, ticaret, icra-iflas, idare, vergi ve aile hukuku başta olmak üzere geniş
              bir yelpazede, her dosyanın kendine has dinamiğine uygun stratejik bir yaklaşımla
              çalışıyoruz.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="primary">
              İletişime Geç
            </Cta>
            <Cta href="/avukatlar" variant="soft">
              Ekibimizi İnceleyin
            </Cta>
          </div>
        </div>
      </section>

      <Stats />
      <PrinciplesSection />

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Çalışma Şeklimiz</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
              Şeffaflık ve stratejik yaklaşım
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Her dosyada müvekkilimizi sürecin her aşamasında bilgilendirir, atılacak adımları
              açıkça paylaşırız. Hukuki durumun doğru analizi ve zamanında atılan adımlar, süreç
              yönetiminin temelini oluşturur.
            </p>
          </div>
          <div>
            <p className="eyebrow">Konumumuz</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
              İstanbul Çağlayan, Kağıthane
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Ofisimiz, İstanbul Adalet Sarayı&apos;na yakın konumuyla adli süreçlere ve
              duruşmalara erişimi kolaylaştırır. Adres: {siteConfig.address.full}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-ivory md:py-16">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-lg font-heading text-2xl font-semibold md:text-3xl">
              Hukuki durumunuzu birlikte değerlendirelim.
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
    </>
  );
}
