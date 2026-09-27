import { siteConfig } from "@/lib/content/site-config";

const stats = [
  { value: String(siteConfig.foundedYear), label: "Kuruluş Yılı" },
  { value: siteConfig.experienceYears, label: "Yıl Kurucu Kıdemi" },
  { value: String(siteConfig.team.total), label: "Hukuk Profesyoneli" },
  { value: siteConfig.metrics.filesAndClients, label: "Dosya & Müvekkil" },
  { value: siteConfig.metrics.corporateProcesses, label: "Kurumsal Süreç" },
];

export function Stats() {
  return (
    <div className="bg-surface-alt py-10">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-sm bg-ivory p-5">
              <dd className="font-heading text-4xl font-semibold text-ink md:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
