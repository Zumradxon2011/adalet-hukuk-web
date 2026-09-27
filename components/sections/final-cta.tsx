import { Cta } from "@/components/ui/cta";
import { LeadForm } from "@/components/forms/lead-form";
import { siteConfig } from "@/lib/content/site-config";

export function FinalCta() {
  return (
    <section className="bg-navy py-16 text-ivory md:py-24">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-sm bg-surface-alt px-3 py-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy">
              Meslek Sırrı &amp; Gizlilik Taahhüdü
            </span>
          </div>

          <h2 className="mt-6 max-w-xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
            Hukuki konunuz için bizimle iletişime geçin.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-tint md:text-lg">
            Ön görüşme ve strateji değerlendirmesi için avukatlarımıza doğrudan ulaşın.
            İhtilafınız ilk andan itibaren kurumsal ciddiyetle ele alınır.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Cta href="/iletisim" variant="inverted">
              Danışmanlık Talep Et
            </Cta>
            <Cta href={siteConfig.contact.phoneHref} variant="outline-light">
              {siteConfig.contact.phone}
            </Cta>
          </div>

          <p className="mt-8 max-w-md text-[11px] leading-relaxed text-navy-muted">
            Tüm görüşmeler avukatlık meslek sırrı ve 6698 sayılı KVKK ilkeleri kapsamında
            gizlilik içinde yürütülür.
          </p>
        </div>

        <div className="rounded-sm bg-ivory p-8 text-ink md:p-10">
          <h3 className="font-heading text-xl font-semibold">Ön Bilgi Formu</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Detayları iletin, ekibimiz en kısa sürede size dönüş sağlasın.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
