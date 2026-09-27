import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { LawyerGrid } from "@/components/lawyers/lawyer-grid";
import { founderLawyer, lawyers } from "@/lib/content/lawyers";
import { practiceAreas } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Avukatlarımız",
  description:
    "Kurucu Avukat Mirahmet Kaya liderliğinde, 33 kişilik ekibimizle Türkiye genelinde hukuki temsil sağlıyoruz.",
  path: "/avukatlar",
});

export default function LawyersPage() {
  const teamMembers = lawyers.filter((lawyer) => !lawyer.isFounder);

  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: "Avukatlarımız", path: "/avukatlar" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <p className="eyebrow">Hukuk Kadromuz</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-ink md:text-5xl">
            Avukatlarımız &amp; Hukuk Kadromuz
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Kurucu Avukat {founderLawyer.name} liderliğinde, {siteConfig.team.total} kişilik
            ekibimizle Türkiye genelinde kurumsal ve bireysel müvekkillerimize stratejik hukuki
            temsil sağlıyoruz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-sm bg-card px-4 py-2.5 text-xs font-semibold text-ink">
              {siteConfig.team.total} Kişilik Ekip
            </span>
            <span className="rounded-sm bg-card px-4 py-2.5 text-xs font-semibold text-ink">
              {practiceAreas.length} Hukuk Alanı
            </span>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-20">
        <div className="container-page">
          <div className="rounded-sm bg-card p-8 md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
              <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-navy via-[#1c2a3a] to-burgundy-dark" />
              <div>
                <p className="eyebrow">Büro Lideri · Kurucu Ortak</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
                  Avukat {founderLawyer.name}
                </h2>
                <p className="mt-1 font-heading text-base text-label">{founderLawyer.role}</p>
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {founderLawyer.bio?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <Cta href={`/avukatlar/${founderLawyer.slug}`} variant="soft">
                    Mirahmet Kaya&apos;yı Tanıyın →
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow">Dava ve Müşavirlik Kadrosu</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Büro Ekibimiz
          </h2>
          <div className="mt-8">
            <LawyerGrid lawyers={teamMembers} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-10">
        <div className="container-page">
          <p className="rounded-sm bg-card p-6 text-sm leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Mesleki İlkeler &amp; Yasal Bildirim:</span>{" "}
            Bu sayfa Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği ve meslek kurallarına
            uygun hazırlanmıştır. Ekibimizin görev alanları hakkında detaylı bilgi almak için
            doğrudan büromuzla iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="bg-navy py-14 text-ivory md:py-16">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-tint">
              Randevu &amp; Hukuki Değerlendirme
            </p>
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold md:text-3xl">
              Ekibimizle Çalışmak İçin Danışmanlık Randevusu Alın
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-navy-tint">
              Çağlayan Adliyesi karşısındaki ofisimizde veya çevrim içi toplantı ile dosyanızın
              değerlendirmesini gerçekleştirebilirsiniz.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="inverted">
              Danışmanlık Talep Formu
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
