import Link from "next/link";
import { LogoMark } from "@/components/ui/logo-mark";
import { practiceAreaNav, footerLegalNav } from "@/lib/content/navigation";
import { founderLawyer } from "@/lib/content/lawyers";
import { siteConfig } from "@/lib/content/site-config";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-card">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <LogoMark className="h-8 w-8 shrink-0" />
              <span className="font-heading text-lg font-semibold tracking-[-0.02em] text-ink">
                ADALET HUKUK
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              İstanbul Çağlayan merkezli ofisimizde, hukuki ihtilafların çözümünde stratejik ve
              üst düzey avukatlık hizmeti sunmaktayız.
            </p>
            <div className="mt-6">
              <p className="eyebrow">Kurucu Ortak</p>
              <p className="mt-1 font-heading text-base text-ink">Avukat {founderLawyer.name}</p>
            </div>
          </div>

          <nav aria-label="Hukuk alanları">
            <p className="eyebrow">Hukuk Alanlarımız</p>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              {practiceAreaNav.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">İletişim &amp; Ofis</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-ink-soft">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.contact.phoneHref} className="hover:text-ink">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a href={siteConfig.contact.emailHref} className="hover:text-ink">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>Çalışma Saatleri: Hafta içi {siteConfig.hours.display}</p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-stone">
        <div className="container-page flex flex-col gap-4 py-6 text-xs leading-relaxed text-label md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">
            Bu sitede yer alan bilgiler Türkiye Barolar Birliği meslek kuralları ve Avukatlık
            Kanunu&apos;na uygun olarak hazırlanmış olup reklam veya danışmanlık mahiyeti taşımaz.
          </p>
          <nav aria-label="Yasal bağlantılar">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLegalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-stone">
        <div className="container-page py-5 text-xs text-label">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
