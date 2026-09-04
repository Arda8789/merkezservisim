import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { hizmetler } from "@/lib/data/hizmetler";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Tüm Hizmetlerimiz: Beyaz Eşya, Kombi ve Klima Tamiri ve Bakımı",
  description:
    "Klima, kombi, çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın-ocak ve kurutma makinesi tamiri ile bakım hizmetlerimizin tamamını inceleyin. Türkiye genelinde garantili özel teknik servis.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Anasayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }])} />
      <section className="relative py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ name: "Anasayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }]} />
          <SectionHeading
            className="mt-6"
            align="left"
            as="h1"
            eyebrow="Hizmetlerimiz"
            title="Beyaz Eşya, Kombi ve Klima İçin Tamir ve Bakım Hizmetleri"
            subtitle="Aşağıdaki kategorilerin tamamında yerinde arıza tespiti, şeffaf fiyat teklifi ve 1 yıl garantili onarım hizmeti sunuyoruz. Detayları görmek istediğiniz hizmete tıklayın."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hizmetler.map((hizmet, index) => (
              <Reveal key={hizmet.slug} delay={index * 60}>
                <Link
                  href={`/hizmetler/${hizmet.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent-light transition-colors group-hover:text-primary-light">
                    <Icon name={hizmet.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-base font-semibold text-foreground">{hizmet.ad}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{hizmet.kisaAciklama}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light">
                    Detayları İncele
                    <Icon name="ArrowUpRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
