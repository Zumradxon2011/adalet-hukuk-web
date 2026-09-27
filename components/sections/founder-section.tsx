import { Cta } from "@/components/ui/cta";
import { founderLawyer } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";

export function FounderSection() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-sm bg-card p-8 md:p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-navy via-[#1c2a3a] to-burgundy-dark" />

            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-navy" aria-hidden="true" />
                <p className="eyebrow">Kurucu Avukat Portresi</p>
              </div>

              <h2 className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl">
                Avukat {founderLawyer.name}
              </h2>
              <p className="mt-1 font-heading text-lg text-label">{founderLawyer.role}</p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {founderLawyer.bio?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-sm bg-ivory px-4 py-2.5 text-xs font-semibold text-ink">
                  Kuruluş: {siteConfig.foundedYear}
                </span>
                <span className="rounded-sm bg-ivory px-4 py-2.5 text-xs font-semibold text-ink">
                  Merkez: Çağlayan / Kağıthane
                </span>
                <span className="rounded-sm bg-ivory px-4 py-2.5 text-xs font-semibold text-ink">
                  Ekip: {siteConfig.team.total} Kişi
                </span>
              </div>

              <div className="mt-8">
                <Cta href={`/avukatlar/${founderLawyer.slug}`} variant="soft">
                  Mirahmet Kaya Profilini İnceleyin →
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
