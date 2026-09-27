import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Cta } from "@/components/ui/cta";
import { ContactForm } from "@/components/forms/contact-form";
import { founderLawyer } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Adalet Hukuk ile İstanbul Kağıthane'deki ofisimizden veya telefon/e-posta yoluyla iletişime geçin, danışmanlık randevusu talep edin.",
  path: "/iletisim",
});

const processSteps = [
  {
    number: "01",
    title: "Ön Dosya İncelemesi",
    description: "Gelen form ve bilgiler gizlilik esasıyla taranır.",
  },
  {
    number: "02",
    title: "Zaman ve Usul Planı",
    description: "Görüşme takvimi ve dava süreç planı oluşturulur.",
  },
  {
    number: "03",
    title: "Danışmanlık Görüşmesi",
    description: "Tercih ettiğiniz yöntemle stratejik değerlendirme yapılır.",
  },
];

export default function ContactPage() {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.full,
  )}&output=embed`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">Resmi Başvuru ve Görüşme Protokolü</p>
              <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold text-ink md:text-5xl">
                İletişim ve Danışmanlık Randevusu
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Hukuki süreçleriniz için Çağlayan ofisimizde yüz yüze veya çevrim içi
                danışmanlık planlayabilirsiniz.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-sm bg-card p-5">
              <span className="mt-0.5 text-navy" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                  Gizlilik &amp; Sır Saklama
                </p>
                <p className="mt-1 text-xs text-label">Avukatlık Kanunu Madde 36 Güvencesi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[400px_1fr]">
          <div className="space-y-6">
            <div className="rounded-sm bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-label">
                Kurumsal Kimlik
              </p>
              <p className="mt-1 font-heading text-xl font-semibold text-ink">{siteConfig.name}</p>
              <p className="mt-1 text-xs text-label">Kurucu Avukat {founderLawyer.name}</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-sm bg-ivory p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    Doğrudan İletişim Hattı
                  </p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-1 block font-heading text-lg font-semibold text-ink hover:text-burgundy"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="rounded-sm bg-ivory p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    E-posta Yazışma
                  </p>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="mt-1 block text-sm font-medium text-ink hover:text-burgundy"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div className="rounded-sm bg-ivory p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    Fiziki Ofis Adresi
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{siteConfig.address.full}</p>
                </div>

                <div className="rounded-sm bg-ivory p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    Çalışma Saatleri
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Hafta içi: {siteConfig.hours.display}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Cta href={directionsHref} variant="soft">
                  Yol Tarifi Al
                </Cta>
                <Cta href={siteConfig.contact.phoneHref} variant="primary">
                  Bizi Hemen Arayın
                </Cta>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm">
              <div className="relative min-h-[220px]">
                <iframe
                  title={`${siteConfig.name} konum haritası`}
                  src={mapEmbedSrc}
                  className="h-full min-h-[220px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-card p-4">
                <p className="text-xs leading-relaxed text-ink-soft">
                  İstanbul Adalet Sarayı&apos;na (Çağlayan) yakın konumumuzla toplu taşıma ve
                  özel araçla kolay erişim imkanı sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-sm bg-card p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-label">
              Resmi Başvuru Paneli
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-ink md:text-3xl">
              Danışmanlık Talep Formu
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-stone pt-8 sm:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.number}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
                    Aşama {step.number}
                  </p>
                  <p className="mt-2 font-heading text-base font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
