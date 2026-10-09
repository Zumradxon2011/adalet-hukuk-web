import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-stone bg-stone/40">
      <ol className="container-page flex flex-wrap items-center gap-2 py-3 text-sm text-ink-soft">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="font-medium text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-burgundy">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      {/* Plain inline script (not next/script) so the schema exists in the
          prerendered HTML for non-JS crawlers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }}
      />
    </nav>
  );
}
