import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Türkiye Geneli Beyaz Eşya, Kombi ve Klima Servisi`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "beyaz eşya tamiri",
    "beyaz eşya servisi",
    "beyaz eşya bakımı",
    "kombi tamiri",
    "kombi bakımı",
    "kombi servisi",
    "klima tamiri",
    "klima bakımı",
    "klima servisi",
    "buzdolabı tamiri",
    "çamaşır makinesi tamiri",
    "bulaşık makinesi tamiri",
    "teknik servis",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  formatDetection: { telephone: true, email: false, address: false },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Türkiye Geneli Beyaz Eşya, Kombi ve Klima Servisi`,
    description: SITE_CONFIG.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Türkiye Geneli Teknik Servis`,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-20 sm:pb-0">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        <FloatingCallButton />
      </body>
    </html>
  );
}
