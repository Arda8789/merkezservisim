// One-off data prep: transforms the raw il-ilce.json (province/district open data)
// into the clean dataset the app consumes from src/lib/data/iller.json.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = "C:/Users/ciftc/AppData/Local/Temp/claude/C--Users-ciftc-OneDrive-Desktop-merkezservisim/b68d900a-e588-43c4-881c-8639948180f5/scratchpad/il-ilce.json";
const OUT = path.join(__dirname, "..", "src", "lib", "data", "iller.json");

function turkishSlugify(str) {
  const map = { "ç": "c", "Ç": "c", "ğ": "g", "Ğ": "g", "ı": "i", "İ": "i", "ö": "o", "Ö": "o", "ş": "s", "Ş": "s", "ü": "u", "Ü": "u" };
  return str
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function turkishTitleCase(str) {
  return str
    .toLocaleLowerCase("tr-TR")
    .split(" ")
    .map((word) =>
      word.length === 0 ? word : word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1)
    )
    .join(" ");
}

const raw = JSON.parse(readFileSync(SRC, "utf-8")).data;

const iller = raw
  .map((il) => {
    const plaka = parseInt(il.plaka_kodu.trim(), 10);
    const ad = il.il_adi.trim();
    const bolge = il.bolge.trim();
    const nufus = parseInt(il.nufus.replace(/\./g, ""), 10) || 0;
    const yuzolcumu = parseInt(String(il.yuzolcumu).replace(/\./g, ""), 10) || 0;
    const ilceler = il.ilceler
      .map((i) => turkishTitleCase(i.ilce_adi.trim()))
      .sort((a, b) => a.localeCompare(b, "tr"));
    return {
      plaka,
      slug: turkishSlugify(ad),
      ad,
      bolge,
      nufus,
      yuzolcumu,
      ilceler,
    };
  })
  .sort((a, b) => a.plaka - b.plaka);

if (iller.length !== 81) {
  throw new Error(`Expected 81 provinces, got ${iller.length}`);
}

const slugSet = new Set(iller.map((i) => i.slug));
if (slugSet.size !== 81) {
  throw new Error("Duplicate slugs detected!");
}

writeFileSync(OUT, JSON.stringify(iller, null, 2), "utf-8");
console.log(`Wrote ${iller.length} provinces to ${OUT}`);
console.log("Sample:", JSON.stringify(iller.find((i) => i.slug === "istanbul"), null, 2).slice(0, 500));
