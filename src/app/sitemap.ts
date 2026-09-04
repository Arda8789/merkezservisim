import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { iller } from "@/lib/data/iller";
import { hizmetler } from "@/lib/data/hizmetler";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sehirler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hakkimizda`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const hizmetRoutes: MetadataRoute.Sitemap = hizmetler.map((h) => ({
    url: `${base}/hizmetler/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const ilRoutes: MetadataRoute.Sitemap = iller.map((il) => ({
    url: `${base}/${il.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const comboRoutes: MetadataRoute.Sitemap = iller.flatMap((il) =>
    hizmetler.map((h) => ({
      url: `${base}/${il.slug}/${h.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [...staticRoutes, ...hizmetRoutes, ...ilRoutes, ...comboRoutes];
}
