import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "soft" | "inverted" | "outline-light";
  className?: string;
};

const variantClasses: Record<NonNullable<CtaProps["variant"]>, string> = {
  primary: "bg-navy text-ivory hover:bg-ink",
  soft: "bg-surface-alt text-ink hover:bg-stone",
  inverted: "bg-ivory text-ink hover:bg-stone",
  "outline-light": "border border-ivory/30 text-ivory hover:bg-ivory hover:text-ink",
};

export function Cta({ href, children, variant = "primary", className }: CtaProps) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  const classes = cn(
    "btn-label inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 transition-colors",
    variantClasses[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
