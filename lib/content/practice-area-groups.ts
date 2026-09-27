export type PracticeAreaGroup = {
  label: string;
  slugs: string[];
};

export const practiceAreaGroups: PracticeAreaGroup[] = [
  { label: "Ceza & İnfaz", slugs: ["ceza-hukuku", "ceza-muhakemesi-hukuku", "infaz-hukuku"] },
  { label: "Ticaret & Borçlar", slugs: ["ticaret-hukuku", "borclar-hukuku"] },
  { label: "Medeni & Aile", slugs: ["medeni-hukuk"] },
  { label: "Kamu Hukuku", slugs: ["idare-hukuku", "vergi-hukuku", "gumruk-hukuku"] },
  { label: "İcra & Usul", slugs: ["icra-iflas-hukuku", "hukuk-muhakemeleri"] },
  { label: "İş Hukuku", slugs: ["is-hukuku"] },
];
