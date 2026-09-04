import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProvinceDirectory } from "@/components/sections/ProvinceDirectory";

export function CoverageSection() {
  return (
    <section id="sehirler" className="relative border-t border-border-subtle bg-background-alt py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hizmet Bölgelerimiz"
          title="Türkiye'nin 81 İlinde Yerinde Teknik Servis"
          subtitle="Bulunduğunuz ili seçin, o il için hazırladığımız kapsam ve iletişim bilgilerini görün. Listede yer almayan bir ilçeniz olduğunu düşünüyorsanız da hattımızı aramanız yeterli."
        />
        <ProvinceDirectory />
      </Container>
    </section>
  );
}
