import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hizmetler, getHizmetBySlug } from "@/lib/data/hizmetler";
import { buyukSehirSlugs, iller } from "@/lib/data/iller";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CallButton } from "@/components/PhoneCTA";
import { CtaBanner } from "@/components/sections/CtaBanner";

type Props = { params: Promise<{ hizmet: string }> };

export function generateStaticParams() {
  return hizmetler.map((h) => ({ hizmet: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hizmet: slug } = await params;
  const hizmet = getHizmetBySlug(slug);
  if (!hizmet) return {};
  return buildMetadata({
    title: `${hizmet.ad} | Tamir ve Bakım Hizmeti`,
    description: `${hizmet.kisaAciklama} Türkiye genelinde 81 ilde şeffaf fiyat ve 1 yıl garanti ile ${hizmet.ad.toLocaleLowerCase("tr-TR")} hizmeti.`,
    path: `/hizmetler/${hizmet.slug}`,
    keywords: hizmet.anahtarKelimeler,
  });
}

export default async function HizmetDetayPage({ params }: Props) {
  const { hizmet: slug } = await params;
  const hizmet = getHizmetBySlug(slug);
  if (!hizmet) notFound();

  const populerIller = buyukSehirSlugs
    .slice(0, 8)
    .map((s) => iller.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const breadcrumbItems = [
    { name: "Anasayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: hizmet.ad, path: `/hizmetler/${hizmet.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={serviceJsonLd({ name: hizmet.ad, description: hizmet.kisaAciklama, path: `/hizmetler/${hizmet.slug}` })} />
      <JsonLd data={faqJsonLd(hizmet.sss)} />

      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <Reveal className="max-w-2xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-primary-light">
                <Icon name={hizmet.icon as never} className="h-7 w-7" />
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{hizmet.ad}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{hizmet.kisaAciklama}</p>
              <div className="mt-7">
                <CallButton size="lg" />
              </div>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {hizmet.girisParagraflari.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Arıza Rehberi"
            title="Yaygın Arıza Belirtileri"
            subtitle="Cihazınızda aşağıdaki belirtilerden birini fark ettiyseniz, arıza ilerlemeden hattımızı aramanızı öneririz."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hizmet.arizaBelirtileri.map((belirti, index) => (
              <Reveal key={belirti.baslik} delay={index * 50}>
                <div className="flex h-full gap-3 rounded-2xl border border-border-subtle bg-surface p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
                    <Icon name="CheckCircle2" className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{belirti.baslik}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{belirti.aciklama}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24">
        <Container>
          <SectionHeading align="left" eyebrow="Periyodik Bakım" title={hizmet.bakimBasligi} subtitle={hizmet.bakimGirisi} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {hizmet.bakimMaddeleri.map((madde, index) => (
              <Reveal key={madde.baslik} delay={index * 50}>
                <div className="flex h-full gap-3 rounded-2xl border border-border-subtle bg-surface p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                    <Icon name="Sparkles" className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{madde.baslik}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{madde.aciklama}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Hizmet Bölgeleri"
            title={`${hizmet.ad} İçin Popüler Şehirler`}
            subtitle="Aşağıdaki şehirlerden birinde iseniz, o şehre özel hizmet sayfamızı inceleyebilirsiniz. Listede olmayan bir ildeyseniz de hattımızı aramanız yeterlidir."
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {populerIller.map((il) => (
              <Link
                key={il.slug}
                href={`/${il.slug}/${hizmet.slug}`}
                className="rounded-full border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light"
              >
                {il.ad} {hizmet.kisaAd} {hizmet.slug.includes("tamiri") ? "" : "Servisi"}
              </Link>
            ))}
            <Link
              href="/sehirler"
              className="rounded-full bg-gradient-to-r from-accent to-accent-dark px-4 py-2 text-sm font-semibold text-white"
            >
              Tüm İller →
            </Link>
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Merak Edilenler" title={`${hizmet.ad} Hakkında Sık Sorulan Sorular`} />
          <div className="mt-10">
            <FaqAccordion items={hizmet.sss} />
          </div>
        </Container>
      </section>

      <CtaBanner title={`${hizmet.ad} İçin Hemen Randevu Oluşturun`} />
    </>
  );
}
