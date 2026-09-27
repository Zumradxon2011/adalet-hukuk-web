import { Cta } from "@/components/ui/cta";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
        Aradığınız sayfa bulunamadı.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        Bu sayfa taşınmış veya kaldırılmış olabilir. Aradığınız hukuki bilgiye aşağıdaki
        bağlantılardan ulaşabilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Cta href="/" variant="primary">
          Ana Sayfaya Dön
        </Cta>
        <Cta href="/hukuk-alanlari" variant="soft">
          Hukuk Alanlarımız
        </Cta>
      </div>
    </section>
  );
}
