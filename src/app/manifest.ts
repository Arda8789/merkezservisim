import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} | Türkiye Geneli Teknik Servis`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
