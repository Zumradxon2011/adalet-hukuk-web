import { practiceAreas } from "@/lib/content/practice-areas";

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hukuk Alanları", href: "/hukuk-alanlari" },
  { label: "Avukatlar", href: "/avukatlar" },
  { label: "Makaleler", href: "/makaleler" },
  { label: "İletişim", href: "/iletisim" },
];

export const practiceAreaNav: NavItem[] = practiceAreas.map((area) => ({
  label: area.shortTitle,
  href: `/hukuk-alanlari/${area.slug}`,
}));

export const footerLegalNav: NavItem[] = [
  { label: "KVKK", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
];
