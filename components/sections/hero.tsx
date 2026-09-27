import { Cta } from "@/components/ui/cta";
import { founderLawyer } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";

export function Hero() {
  return (
    <section className="bg-ivory">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 rounded-sm bg-stone px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-burgundy" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">
              İstanbul · Çağlayan Adliyesi Bölgesi
            </span>
          </div>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.15] text-ink md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            Hukukta tecrübe.
            <br />
            Stratejide güven.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Adalet Hukuk, İstanbul merkezli olarak bireysel ve kurumsal müvekkillere Türkiye
            genelinde hukuki danışmanlık ve avukatlık hizmetleri sunar.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="primary">
              Danışmanlık Talep Et
            </Cta>
            <Cta href="/hukuk-alanlari" variant="soft">
              Hukuk Alanlarımız
            </Cta>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2Z"
                  fill="#1c1c18"
                />
              </svg>
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
                Doğrudan İrtibat Hattı
              </p>
              <a
                href={siteConfig.contact.phoneHref}
                className="font-heading text-base font-semibold text-ink hover:text-burgundy"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy p-3 shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-br from-navy via-[#1c2a3a] to-burgundy-dark">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 400 500"
                preserveAspectRatio="xMidYMax slice"
              >
                <g stroke="#fcf9f3" strokeWidth="1" fill="none">
                  <path d="M0 420 L60 360 L100 400 L150 320 L200 380 L260 300 L320 370 L400 320" />
                  <path d="M0 470 L80 430 L140 460 L210 410 L280 460 L360 420 L400 450" opacity="0.6" />
                </g>
              </svg>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-tint">
                  Kurucu Liderlik
                </p>
                <p className="mt-1 font-heading text-xl font-semibold text-ivory">
                  Avukat {founderLawyer.name}
                </p>
                <p className="mt-1 text-sm text-stone">{founderLawyer.role}</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 right-4 rounded-sm bg-navy px-5 py-3 shadow-lg md:right-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-navy-tint">
              Genel Merkez
            </p>
            <p className="font-heading text-sm text-ivory">İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
}
