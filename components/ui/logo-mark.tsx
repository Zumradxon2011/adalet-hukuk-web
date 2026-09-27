type LogoMarkProps = {
  className?: string;
  variant?: "default" | "light";
};

/**
 * Vector mark extracted from the approved brand design (Figma file
 * CMK4O4CWV8QX048Ww97HSp) — a monogram "A" in a bordered square with a
 * restrained gold accent, deliberately avoiding gavel/scale clichés.
 */
export function LogoMark({ className, variant = "default" }: LogoMarkProps) {
  const strokeColor = variant === "light" ? "#fcf9f3" : "#101923";

  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path
        opacity="0.2"
        d="M12 10H48C49.1038 10 50 10.8962 50 12V48C50 49.1038 49.1038 50 48 50H12C10.8962 50 10 49.1038 10 48V12C10 10.8962 10.8962 10 12 10V10"
        stroke={strokeColor}
        strokeWidth="1.5"
      />
      <path
        d="M22 42L30 18L38 42"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25 34H35" stroke="#641F2A" strokeWidth="1.8" />
      <circle cx="30" cy="26" r="1.5" fill="#B39A67" />
    </svg>
  );
}
