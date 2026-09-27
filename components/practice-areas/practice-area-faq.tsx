import type { FaqItem } from "@/lib/content/practice-areas";

export function PracticeAreaFaq({ title, items }: { title: string; items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-ivory py-16 md:py-20">
      <div className="container-page">
        <p className="eyebrow">Bilgilendirme</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
          {title} Sık Sorulan Sorular
        </h2>
        <div className="mt-8 divide-y divide-stone rounded-sm border border-stone">
          {items.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink marker:content-none">
                {item.question}
                <span className="shrink-0 text-label transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
