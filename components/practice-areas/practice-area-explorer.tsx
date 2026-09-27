"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PracticeArea } from "@/lib/content/practice-areas";
import { practiceAreaGroups } from "@/lib/content/practice-area-groups";
import { cn } from "@/lib/utils";

export function PracticeAreaExplorer({ areas }: { areas: PracticeArea[] }) {
  const [activeGroup, setActiveGroup] = useState<string>("Tümü");

  const visibleAreas = useMemo(() => {
    if (activeGroup === "Tümü") return areas;
    const group = practiceAreaGroups.find((g) => g.label === activeGroup);
    if (!group) return areas;
    return areas.filter((area) => group.slugs.includes(area.slug));
  }, [activeGroup, areas]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Hukuk alanı grupları">
        <button
          type="button"
          role="tab"
          aria-selected={activeGroup === "Tümü"}
          onClick={() => setActiveGroup("Tümü")}
          className={cn(
            "rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] transition-colors",
            activeGroup === "Tümü" ? "bg-navy text-ivory" : "bg-card text-ink-soft hover:bg-stone",
          )}
        >
          Tümü ({areas.length})
        </button>
        {practiceAreaGroups.map((group) => (
          <button
            key={group.label}
            type="button"
            role="tab"
            aria-selected={activeGroup === group.label}
            onClick={() => setActiveGroup(group.label)}
            className={cn(
              "rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] transition-colors",
              activeGroup === group.label ? "bg-navy text-ivory" : "bg-card text-ink-soft hover:bg-stone",
            )}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/hukuk-alanlari/${area.slug}`}
            className="group flex flex-col justify-between rounded-sm bg-card p-7"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-label">
                {area.categoryNumber} / {area.categoryLabel}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.focusTags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-ivory px-2.5 py-1 text-[11px] font-medium text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-ink">
              Detaylı Hizmet Kapsamı İçin İnceleyin
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
