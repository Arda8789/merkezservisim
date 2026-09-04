import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { genelSss } from "@/lib/data/genel-sss";
import { Hero } from "@/components/sections/Hero";
import { IlMarquee } from "@/components/sections/IlMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsCoverage } from "@/components/sections/StatsCoverage";
import { WhyUs } from "@/components/sections/WhyUs";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Merkez Servisim | Türkiye Geneli Beyaz Eşya, Kombi ve Klima Servisi",
  description:
    "Türkiye genelinde 81 ilde beyaz eşya, kombi ve klima tamiri, bakımı için garantili özel teknik servis hattı. Aynı gün yerinde müdahale, şeffaf fiyat, 1 yıl garanti. Hemen arayın: 0535 553 40 92",
  path: "/",
  keywords: [
    "beyaz eşya tamiri",
    "beyaz eşya servisi",
    "kombi tamiri",
    "klima tamiri",
    "teknik servis",
    "türkiye geneli teknik servis",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(genelSss.slice(0, 6))} />
      <Hero />
      <IlMarquee />
      <ServicesGrid />
      <ProcessSteps />
      <StatsCoverage />
      <WhyUs />
      <CoverageSection />
      <FaqSection items={genelSss.slice(0, 6)} showMoreLink />
      <CtaBanner />
    </>
  );
}
