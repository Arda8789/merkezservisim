import illerData from "./iller.json";

export interface Il {
  plaka: number;
  slug: string;
  ad: string;
  bolge: string;
  nufus: number;
  yuzolcumu: number;
  ilceler: string[];
}

export const iller: Il[] = illerData as Il[];

export const bolgeler: string[] = Array.from(new Set(iller.map((i) => i.bolge)));

export function getIlBySlug(slug: string): Il | undefined {
  return iller.find((i) => i.slug === slug);
}

export function getIllerByBolge(bolge: string): Il[] {
  return iller.filter((i) => i.bolge === bolge).sort((a, b) => a.ad.localeCompare(b.ad, "tr"));
}

/** Same-region provinces, used for internal cross-linking. */
export function getKomsuIller(il: Il, count = 6): Il[] {
  return iller
    .filter((i) => i.slug !== il.slug && i.bolge === il.bolge)
    .sort((a, b) => a.ad.localeCompare(b.ad, "tr"))
    .slice(0, count);
}

export const buyukSehirSlugs = [
  "istanbul",
  "ankara",
  "izmir",
  "bursa",
  "antalya",
  "konya",
  "adana",
  "gaziantep",
  "kayseri",
  "mersin",
  "kocaeli",
  "sanliurfa",
];
