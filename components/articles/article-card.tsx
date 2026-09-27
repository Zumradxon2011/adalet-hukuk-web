import Link from "next/link";
import type { Article } from "@/lib/content/articles";
import { getPracticeAreaBySlug } from "@/lib/content/practice-areas";
import { estimateReadingMinutes, formatDateTr } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  const area = getPracticeAreaBySlug(article.practiceAreaSlug);
  const minutes = estimateReadingMinutes(article.sections.flatMap((s) => s.paragraphs));

  return (
    <Link
      href={`/makaleler/${article.slug}`}
      className="group flex flex-col justify-between rounded-sm bg-card p-7"
    >
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          {area && <span>{area.shortTitle}</span>}
          <span aria-hidden="true">·</span>
          <span>{minutes} Dk Okuma</span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-semibold text-ink group-hover:text-burgundy">
          {article.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{article.dek}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs text-label">
        <span>{formatDateTr(article.publishedAt)}</span>
        <span className="font-semibold uppercase tracking-[0.06em] text-ink">Devamını Oku →</span>
      </div>
    </Link>
  );
}
