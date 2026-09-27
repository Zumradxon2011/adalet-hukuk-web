"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/ui/logo-mark";
import { mainNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/content/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-ivory">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold tracking-[-0.02em] text-ink md:text-xl">
              ADALET HUKUK
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-label">
              Avukatlık &amp; Danışmanlık
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {mainNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.08em] transition-colors hover:text-ink",
                  isActive ? "text-ink" : "text-ink-soft",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            {siteConfig.contact.phone}
          </a>
          <a
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-sm bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-ink"
          >
            Danışmanlık Talep Et
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobil-menu"
        className={cn(
          "overflow-hidden border-t border-stone bg-ivory transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobil menü">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-ink-soft hover:bg-stone hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.contact.phoneHref}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ivory"
          >
            {siteConfig.contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
