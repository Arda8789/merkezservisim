import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { iller, getIlBySlug, getKomsuIller } from "@/lib/data/iller";
import { hizmetler } from "@/lib/data/hizmetler";
import { getIlGirisParagrafi, getIlKapanisParagrafi, getIlSss } from "@/lib/content/il-content";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CallButton } from "@/components/PhoneCTA";
import { CtaBanner } from "@/components/sections/CtaBanner";

type Props = { params: Promise<{ il: string }> };

export function generateStaticParams() {
  return iller.map((i) => ({ il: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { il: slug } = await params;
  const il = getIlBySlug(slug);
  if (!il) return {};
  return buildMetadata({
    title: `${il.ad} Beyaz Eşya, Kombi ve Klima Servisi`,
    description: `${il.ad} genelinde beyaz eşya, kombi ve klima tamiri, bakımı için garantili özel teknik servis. ${il.ad} ve ${il.ilceler.length} ilçesinde aynı gün yerinde müdahale. Hemen arayın: 0535 553 40 92`,
    path: `/${il.slug}`,
    keywords: [
      `${il.ad} teknik servis`,
      `${il.ad} beyaz eşya tamiri`,
      `${il.ad} kombi servisi`,
      `${il.ad} klima servisi`,
      `${il.ad} beyaz eşya servisi`,
    ],
  });
}

export default async function IlPage({ params }: Props) {
  const { il: slug } = await params;
  const il = getIlBySlug(slug);
  if (!il) notFound();

  const komsuIller = getKomsuIller(il);
  const ilSss = getIlSss(il);
  const breadcrumbItems = [{ name: "Anasayfa", path: "/" }, { name: `${il.ad}`, path: `/${il.slug}` }];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={localBusinessJsonLd({ ilAdi: il.ad, path: `/${il.slug}` })} />
      <JsonLd data={faqJsonLd(ilSss)} />

      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} />

          <Reveal className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-light">
              <Icon name="MapPin" className="h-3.5 w-3.5" />
              {il.bolge} Bölgesi
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {il.ad} Beyaz Eşya, Kombi ve Klima Servisi
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{getIlGirisParagrafi(il)}</p>
            <div className="mt-7">
              <CallButton size="lg" />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "MapPin" as const, label: "Bölge", value: il.bolge },
              { icon: "Navigation" as const, label: "İlçe Sayısı", value: String(il.ilceler.length) },
              { icon: "Users" as const, label: "Nüfus", value: il.nufus.toLocaleString("tr-TR") },
              { icon: "ShieldCheck" as const, label: "Garanti", value: "1 Yıl" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                <Icon name={stat.icon} className="mx-auto h-4 w-4 text-accent-light" />
                <div className="mt-2 text-sm font-bold text-foreground sm:text-base">{stat.value}</div>
                <div className="text-xs text-muted-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow={`${il.ad} Hizmetlerimiz`}
            title={`${il.ad}'da Verdiğimiz Hizmetler`}
            subtitle="Aşağıdaki her kategori için ayrı bir sayfa hazırladık; detaylı arıza belirtileri ve bakım bilgisine ulaşmak için tıklayabilirsiniz."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hizmetler.map((hizmet, index) => (
              <Reveal key={hizmet.slug} delay={index * 50}>
                <Link
                  href={`/${il.slug}/${hizmet.slug}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border-subtle bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                    <Icon name={hizmet.icon as never} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {il.ad} {hizmet.ad}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-light">
                      İncele <Icon name="ArrowRight" className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Kapsam Alanı"
            title={`${il.ad} Genelinde Hizmet Verdiğimiz İlçeler`}
            subtitle={`${il.ad} sınırları içindeki ${il.ilceler.length} ilçenin tamamında adrese giden teknik servis hizmeti sunuyoruz.`}
          />
          <Reveal className="mt-8 flex flex-wrap gap-2">
            {il.ilceler.map((ilce) => (
              <span key={ilce} className="rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
                {ilce}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {komsuIller.length > 0 ? (
        <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-20">
          <Container>
            <SectionHeading
              align="left"
              eyebrow={`${il.bolge} Bölgesi`}
              title="Çevredeki Diğer Hizmet Bölgelerimiz"
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {komsuIller.map((komsu) => (
                <Link
                  key={komsu.slug}
                  href={`/${komsu.slug}`}
                  className="rounded-full border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light"
                >
                  {komsu.ad}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="relative py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Merak Edilenler" title={`${il.ad} İçin Sıkça Sorulan Sorular`} />
          <div className="mt-10">
            <FaqAccordion items={ilSss} />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted">{getIlKapanisParagrafi(il)}</p>
        </Container>
      </section>

      <CtaBanner title={`${il.ad}'da Servis Talebinizi Hemen Oluşturun`} />
    </>
  );
}
