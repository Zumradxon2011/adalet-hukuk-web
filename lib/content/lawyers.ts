import { slugify } from "@/lib/utils";

/**
 * Team roster. Only verified facts are recorded here. Do NOT add
 * education, bar numbers, specialties, or achievements that were not
 * explicitly supplied — see project instructions section 2 and 3.
 */

export type Lawyer = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  isFounder: boolean;
  /** Full profile with bio copy exists only for verified, detailed records. */
  hasFullProfile: boolean;
  bio?: string[];
};

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const TEAM_MEMBER_NAMES = [
  "Ahmet Yılmaz",
  "Mehmet Demir",
  "Mustafa Kaya",
  "Ali Şahin",
  "Hüseyin Çelik",
  "Hasan Yıldız",
  "Ibrahim Yıldırım",
  "Ömer Öztürk",
  "Murat Aydın",
  "Emre Özdemir",
  "Burak Arslan",
  "Mert Doğan",
  "Can Kılıç",
  "Eren Aslan",
  "Oğuzhan Çetin",
  "Kerem Koç",
  "Fatma Şen",
  "Ayşe Kurt",
  "Emine Özkan",
  "Hatice Şimşek",
  "Zeynep Polat",
  "Elif Özcan",
  "Merve Korkmaz",
  "Büşra Çakır",
  "Gamze Erdoğan",
  "Ebru Yavuz",
  "Seda Aksoy",
  "Esra Güneş",
  "İrem Yalçın",
  "Kübra Bulut",
  "Derya Keskin",
  "Gözde Ünal",
];

const founder: Lawyer = {
  slug: "mirahmet-kaya",
  name: "Mirahmet Kaya",
  initials: "MK",
  role: "Kurucu Avukat",
  isFounder: true,
  hasFullProfile: true,
  bio: [
    "Mirahmet Kaya, 2017 yılında İstanbul'da Adalet Hukuk'u kurmuştur.",
    "15 yılı aşkın hukuki tecrübesiyle, bugün 33 kişilik ekibiyle İstanbul merkezli olarak Türkiye genelinde bireysel ve kurumsal müvekkillere ceza, ticaret, iş ve aile hukuku başta olmak üzere geniş bir yelpazede stratejik hukuki temsil sunmaktadır.",
  ],
};

const teamMembers: Lawyer[] = TEAM_MEMBER_NAMES.map((name) => ({
  slug: slugify(name),
  name,
  initials: initialsOf(name),
  role: "Adalet Hukuk Ekibi",
  isFounder: false,
  hasFullProfile: false,
}));

export const lawyers: Lawyer[] = [founder, ...teamMembers];

export function getLawyerBySlug(slug: string): Lawyer | undefined {
  return lawyers.find((lawyer) => lawyer.slug === slug);
}

export const founderLawyer = founder;
