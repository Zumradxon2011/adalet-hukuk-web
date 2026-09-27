import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Ana Sayfa", path: "/" }, { name: title, path: "#" }]} />

      <section className="bg-ivory py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold text-ink md:text-4xl">{title}</h1>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.06em] text-label">
            Son güncelleme: {updatedAt}
          </p>

          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-ink-soft [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>

          <div className="mt-10 rounded-sm bg-card p-5 text-xs leading-relaxed text-label">
            Bu metin genel bir çerçeve sunmak amacıyla hazırlanmış bir taslaktır ve yayına
            alınmadan önce büromuzun hukuk danışmanı tarafından gözden geçirilip
            onaylanmalıdır.
          </div>
        </div>
      </section>
    </>
  );
}
