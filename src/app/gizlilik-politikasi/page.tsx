import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: "Merkez Servisim gizlilik politikası: web sitemizi ziyaret ettiğinizde ve telefon hattımızı aradığınızda bilgilerinizin nasıl işlendiğini öğrenin.",
  path: "/gizlilik-politikasi",
  noIndex: true,
});

export default function GizlilikPage() {
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbItems} />
          <SectionHeading className="mt-6" align="left" as="h1" eyebrow="Yasal" title="Gizlilik Politikası" />
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Bu web sitesi üzerinden kullanıcılardan form aracılığıyla kişisel veri toplanmamaktadır. Bizimle
              iletişime geçmek isteyen ziyaretçiler {SITE_CONFIG.phoneDisplay} numaralı telefon hattımızı
              kullanmaktadır.
            </p>
            <p>
              Telefon görüşmesi sırasında bizimle paylaştığınız ad, adres ve iletişim bilgileri yalnızca servis
              talebinizin karşılanması amacıyla teknik ekiplerimizle paylaşılır; pazarlama amacıyla üçüncü taraflara
              satılmaz veya kiralanmaz.
            </p>
            <p>
              Web sitesi, sayfaların düzgün çalışması için gerekli olan temel teknik verilerin ötesinde herhangi bir
              reklam veya izleme (tracking) çerezi kullanmamaktadır.
            </p>
            <p>
              Bu politika hakkında sorularınız için {SITE_CONFIG.phoneDisplay} numaralı hattımızdan bize
              ulaşabilirsiniz.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
