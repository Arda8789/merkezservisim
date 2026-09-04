import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Merkez Servisim'e ulaşın: 0535 553 40 92. Türkiye genelinde 7/24 açık teknik servis hattımızdan beyaz eşya, kombi ve klima arızanız için hemen randevu oluşturun.",
  path: "/iletisim",
});

const BILGI_KARTLARI: { icon: IconName; title: string; desc: string }[] = [
  { icon: "PhoneCall", title: "Telefon Hattı", desc: SITE_CONFIG.phoneDisplay },
  { icon: "Clock", title: "Çalışma Saatleri", desc: SITE_CONFIG.workingHours },
  { icon: "MapPin", title: "Hizmet Alanı", desc: SITE_CONFIG.areaServed },
];

export default function IletisimPage() {
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} />
          <SectionHeading
            className="mt-6"
            align="left"
            as="h1"
            eyebrow="İletişim"
            title="Arızanız İçin Bize Ulaşın"
            subtitle="Türkiye genelinde 7/24 açık olan teknik servis hattımızdan cihazınızın arızasını iletin, bölgenize en yakın ekip yönlendirilsin. En hızlı sonuç için telefonla aramanızı öneririz."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {BILGI_KARTLARI.map((kart, index) => (
              <Reveal key={kart.title} delay={index * 70}>
                <div className="glass-card h-full rounded-3xl p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
                    <Icon name={kart.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{kart.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{kart.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="glass-card relative mt-10 overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <h2 className="relative text-2xl font-bold text-foreground sm:text-3xl">Hemen Arayın, Aynı Gün Çözüm Alın</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-muted">
              Cihazınızın markasını ve arızasını hattımıza iletmeniz yeterli; size en yakın uzman ekip yönlendirilsin.
            </p>
            <div className="relative mt-8 flex justify-center">
              <CallButton size="lg" />
            </div>
          </Reveal>

          <div className="mt-10 text-center text-sm text-muted-2">
            Bulunduğunuz il için özel bilgi almak isterseniz{" "}
            <Link href="/sehirler" className="font-semibold text-accent-light hover:text-accent">
              hizmet bölgelerimiz sayfasını
            </Link>{" "}
            inceleyebilirsiniz.
          </div>
        </Container>
      </section>
    </>
  );
}
