import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsCoverage } from "@/components/sections/StatsCoverage";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Merkez Servisim, Türkiye genelinde beyaz eşya, kombi ve klima arızalarında şeffaf fiyatlı, garantili özel teknik servis ağıdır. Misyonumuzu ve çalışma prensiplerimizi inceleyin.",
  path: "/hakkimizda",
});

const DEGERLER: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "BadgeCheck",
    title: "Şeffaflık",
    desc: "Her onarımda net fiyat teklifini önce sunar, onayınızı almadan işleme başlamayız.",
  },
  {
    icon: "ShieldCheck",
    title: "Güvence",
    desc: "İşçilik ve kullanılan parçanın tamamını 1 yıl garanti kapsamına alırız.",
  },
  {
    icon: "Timer",
    title: "Hız",
    desc: "Talebinizi aldığımız andan itibaren bölgenize en yakın ekibi planlayarak zaman kaybını en aza indiririz.",
  },
  {
    icon: "Users",
    title: "Uzmanlık",
    desc: "Beyaz eşya, kombi ve klima sistemlerinde deneyimli teknisyenlerle çalışırız.",
  },
];

export default function HakkimizdaPage() {
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} />
          <Reveal className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-light">
              <Icon name="Building2" className="h-3.5 w-3.5" />
              Hakkımızda
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Türkiye Genelinde Şeffaf ve Garantili Teknik Servis Ağı
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Merkez Servisim, belirli bir markaya bağlı olmayan; beyaz eşya, kombi ve klima arızalarında bağımsız,
              çok markalı bir teknik servis ağıdır. Türkiye genelindeki 81 ilde adrese giden teknik ekiplerimizle,
              arızanızı yerinde tespit eder, net fiyat teklifi sunar ve onayınızın ardından garantili onarımı
              tamamlarız.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Amacımız, ev sahiplerinin cihaz arızası yaşadığında güvenle arayabileceği; şeffaf, hızlı ve garantili
              tek bir hat sunmaktır. Bu nedenle her çağrıda aynı disiplinli süreci uygular, işçilik ve parçayı 1 yıl
              garanti kapsamına alırız.
            </p>
            <div className="mt-7">
              <CallButton size="lg" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Değerlerimiz" title="Çalışma Prensiplerimiz" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DEGERLER.map((deger, index) => (
              <Reveal key={deger.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-light">
                    <Icon name={deger.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{deger.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{deger.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <StatsCoverage />
      <CtaBanner />
    </>
  );
}
