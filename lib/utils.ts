export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  I: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

export function estimateReadingMinutes(paragraphs: string[]): number {
  const wordsPerMinute = 200;
  const wordCount = paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}

export function formatDateTr(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function slugify(input: string): string {
  const transliterated = input
    .split("")
    .map((char) => TURKISH_CHAR_MAP[char] ?? char)
    .join("");

  return transliterated
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
