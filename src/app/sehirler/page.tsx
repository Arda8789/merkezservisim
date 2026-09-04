import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProvinceDirectory } from "@/components/sections/ProvinceDirectory";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Hizmet Verdiğimiz Tüm İller | Türkiye Geneli 81 İl",
  description:
    "Türkiye'nin 81 ilinde beyaz eşya, kombi ve klima tamiri ile bakım hizmeti veriyoruz. Bölgenize ait ili seçerek o il için hazırladığımız servis sayfasına ulaşabilirsiniz.",
  path: "/sehirler",
});

export default function SehirlerPage() {
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: "Hizmet Bölgelerimiz", path: "/sehirler" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <section className="relative py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <SectionHeading
            className="mt-6"
            align="left"
            as="h1"
            eyebrow="Hizmet Bölgelerimiz"
            title="Türkiye'nin 81 İlinde Yerinde Teknik Servis"
            subtitle="Aşağıda bölgelere göre gruplandırılmış tüm illerimizi bulabilirsiniz. Bulunduğunuz ile tıklayarak o il için hazırladığımız kapsam, ilçe listesi ve iletişim bilgilerine ulaşabilirsiniz."
          />
          <ProvinceDirectory />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
