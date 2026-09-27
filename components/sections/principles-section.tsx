import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/content/site-config";

const principles = [
  {
    title: "Tecrübe",
    description: `${siteConfig.experienceYears} yılı aşkın dava ve danışmanlık pratiği ile geniş bir dosya yelpazesinde yargı süreçlerine hakimiyet.`,
    caption: "Köklü Birikim",
    icon: (
      <path d="M4 12l16-6v12L4 18V12Z" stroke="#131c26" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Uzmanlaşma",
    description: `${siteConfig.team.total} kişilik organize hukukçu kadrosu, her alanın kendi dinamiğine göre yapılandığı bir çalışma modeli.`,
    caption: "Departman Yapısı",
    icon: (
      <g stroke="#131c26" strokeWidth="1.6">
        <rect x="4" y="4" width="7" height="7" rx="1" fill="none" />
        <rect x="13" y="4" width="7" height="7" rx="1" fill="none" />
        <rect x="4" y="13" width="7" height="7" rx="1" fill="none" />
        <rect x="13" y="13" width="7" height="7" rx="1" fill="none" />
      </g>
    ),
  },
  {
    title: "Stratejik Yaklaşım",
    description:
      "Her uyuşmazlığın hukuki, mali ve pratik boyutlarını birlikte değerlendiren, riskleri öngören bir çalışma disiplini.",
    caption: "Çok Boyutlu Analiz",
    icon: (
      <g stroke="#131c26" strokeWidth="1.6" fill="none">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </g>
    ),
  },
  {
    title: "Türkiye Genelinde",
    description:
      "İstanbul Çağlayan merkezli ofisimizden, gerektiğinde Türkiye genelindeki adliyelerde dosya takibi yapabiliyoruz.",
    caption: "Ulusal Kapsam",
    icon: (
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
        stroke="#131c26"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="İlkelerimiz & Disiplin"
          title="Hukuki sorunlara yalnızca cevap değil, strateji sunuyoruz."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-sm bg-ivory p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-muted">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  {principle.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{principle.description}</p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-label">
                {principle.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
