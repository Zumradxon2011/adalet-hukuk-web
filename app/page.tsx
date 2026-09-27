import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/ui/stats";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { FounderSection } from "@/components/sections/founder-section";
import { LocationSection } from "@/components/sections/location-section";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { PracticeAreaGrid } from "@/components/practice-areas/practice-area-grid";
import { Cta } from "@/components/ui/cta";
import { practiceAreas } from "@/lib/content/practice-areas";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Adalet Hukuk | İstanbul Hukuk Bürosu",
  description:
    "Adalet Hukuk, 2017'den bu yana İstanbul Kağıthane'de ceza, iş, ticaret, icra-iflas ve aile hukuku alanlarında hukuki danışmanlık ve dava takibi hizmeti sunar.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Departmanlarımız"
              title="Hukuk Alanlarımız"
              className="md:max-w-md"
            />
            <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Disiplinlerarası uzmanlıkla organize edilmiş, her dosyanın kendine has
              dinamiğine özel departman yapısı.
            </p>
          </div>
          <div className="mt-10">
            <PracticeAreaGrid areas={practiceAreas} />
          </div>
          <div className="mt-10 flex justify-center">
            <Cta href="/hukuk-alanlari" variant="soft">
              Tüm Hukuk Alanlarını ve Süreçleri İnceleyin →
            </Cta>
          </div>
        </div>
      </section>

      <PrinciplesSection />
      <FounderSection />
      <LocationSection compact />
      <FinalCta />
    </>
  );
}
