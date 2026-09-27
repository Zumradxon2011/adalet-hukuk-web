import type { Lawyer } from "@/lib/content/lawyers";

export function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="flex flex-col justify-between rounded-sm bg-card p-6">
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-sm font-semibold text-ivory">
          {lawyer.initials}
        </span>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          {lawyer.role}
        </p>
        <h3 className="mt-1 font-heading text-lg font-semibold text-ink">{lawyer.name}</h3>
        <p className="mt-2 text-xs text-ink-soft">İstanbul / Çağlayan</p>
      </div>
      <a
        href="/iletisim"
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-ink hover:text-burgundy"
      >
        İletişime Geç
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
