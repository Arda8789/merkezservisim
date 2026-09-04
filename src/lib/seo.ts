import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, keywords, noIndex }: BuildMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "tr_TR",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_CONFIG.url}/#organizasyon`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneE164,
    priceRange: "₺₺",
    areaServed: { "@type": "Country", name: "Türkiye" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(items: { soru: string; cevap: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: { "@type": "Answer", text: item.cevap },
    })),
  };
}

export function serviceJsonLd(options: { name: string; description: string; path: string; areaServed?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: options.name,
    name: options.name,
    description: options.description,
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE_CONFIG.name, telephone: SITE_CONFIG.phoneE164 },
    areaServed: { "@type": options.areaServed ? "AdministrativeArea" : "Country", name: options.areaServed ?? "Türkiye" },
    url: `${SITE_CONFIG.url}${options.path}`,
  };
}

export function localBusinessJsonLd(options: { ilAdi: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE_CONFIG.name} ${options.ilAdi}`,
    description: `${options.ilAdi} genelinde beyaz eşya, kombi ve klima tamiri, bakımı için garantili özel teknik servis hattı.`,
    telephone: SITE_CONFIG.phoneE164,
    priceRange: "₺₺",
    url: `${SITE_CONFIG.url}${options.path}`,
    areaServed: { "@type": "AdministrativeArea", name: options.ilAdi },
  };
}
