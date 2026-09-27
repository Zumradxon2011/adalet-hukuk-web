import { Cta } from "@/components/ui/cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/content/site-config";

type LocationSectionProps = {
  compact?: boolean;
};

export function LocationSection({ compact = false }: LocationSectionProps) {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.full,
  )}&output=embed`;

  return (
    <section className={compact ? "bg-muted py-16 md:py-24" : "py-4"}>
      <div className="container-page">
        {compact && (
          <SectionHeading
            eyebrow="Fiziki Varlık & Ulaşılabilirlik"
            title="İstanbul'da. Türkiye genelinde."
            description="İstanbul Adalet Sarayı'na (Çağlayan) yakın konumumuzla adli süreçlere ve duruşmalara fiziki erişim sağlıyoruz."
          />
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-between gap-6 lg:order-1">
            <div className="space-y-4">
              <div className="flex gap-4 rounded-sm bg-ivory p-5">
                <span className="mt-0.5 text-label" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    Ofis Adresi
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{siteConfig.address.full}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
                    Çağlayan Adliyesi Yakını
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-sm bg-ivory p-5">
                <span className="mt-0.5 text-label" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                    Çalışma Saatleri
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Hafta içi: {siteConfig.hours.display}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Cta href={directionsHref} variant="primary">
                Yol Tarifi Al
              </Cta>
              <Cta href={siteConfig.contact.phoneHref} variant="soft">
                Bizi Arayın
              </Cta>
            </div>
          </div>

          <div className="relative order-1 min-h-[320px] overflow-hidden rounded-sm bg-ivory lg:order-2">
            <iframe
              title={`${siteConfig.name} konum haritası`}
              src={mapEmbedSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 rounded-sm bg-ivory px-4 py-2.5 shadow-md">
              <p className="font-heading text-sm text-ink">Adalet Hukuk Genel Merkezi</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
                Kağıthane / Çağlayan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
