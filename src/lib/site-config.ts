export const SITE_CONFIG = {
  name: "Merkez Servisim",
  legalName: "Merkez Servisim Teknik Servis Hattı",
  url: "https://merkezservisim.vercel.app",
  phoneDisplay: "0535 553 40 92",
  phoneHref: "tel:+905355534092",
  phoneE164: "+905355534092",
  slogan: "Garantili Özel Teknik Servis",
  description:
    "Türkiye genelinde 81 ilde beyaz eşya, kombi ve klima için garantili, şeffaf fiyatlı özel teknik servis hattı. Aynı gün yerinde müdahale, 1 yıl işçilik ve parça garantisi.",
  workingHours: "7/24 Kesintisiz Hizmet",
  areaServed: "Türkiye Geneli · 81 İl",
} as const;

export const NAV_LINKS = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/sehirler", label: "Şehirler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;
