import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { genelSss } from "@/lib/data/genel-sss";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Sıkça Sorulan Sorular",
  description:
    "Hizmet bölgeleri, fiyatlandırma, garanti süresi, aynı gün servis ve ödeme seçenekleri hakkında en çok merak edilen soruların yanıtlarını bulun.",
  path: "/sss",
});

export default function SssPage() {
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: "Sıkça Sorulan Sorular", path: "/sss" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={faqJsonLd(genelSss)} />
      <section className="relative py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbItems} />
          <SectionHeading
            className="mt-6"
            align="left"
            as="h1"
            eyebrow="Merak Edilenler"
            title="Sıkça Sorulan Sorular"
            subtitle="Hizmetlerimiz hakkında en çok gelen soruları ve yanıtlarını aşağıda bulabilirsiniz. Aradığınız cevabı bulamazsanız hattımızı aramanız yeterli."
          />
          <div className="mt-12">
            <FaqAccordion items={genelSss} />
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
