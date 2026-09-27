import Link from "next/link";
import type { PracticeArea } from "@/lib/content/practice-areas";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/hukuk-alanlari/${area.slug}`}
      className="group flex flex-col justify-between rounded-sm bg-card p-8 transition-colors hover:bg-stone/60"
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-label">
          {area.categoryNumber} / {area.categoryLabel}
        </p>
        <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{area.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.shortDescription}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-ink">
        İncele
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
