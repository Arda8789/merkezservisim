import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { iller, getIlBySlug } from "@/lib/data/iller";
import { hizmetler, getHizmetBySlug } from "@/lib/data/hizmetler";
import { getComboAcilisParagrafi, getComboKapanisParagrafi, getComboSss } from "@/lib/content/combo-content";
import { getIlceOrnekleri } from "@/lib/content/il-content";
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
import { buyukSehirSlugs } from "@/lib/data/iller";

type Props = { params: Promise<{ il: string; hizmet: string }> };

export function generateStaticParams() {
  return iller.flatMap((il) => hizmetler.map((h) => ({ il: il.slug, hizmet: h.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { il: ilSlug, hizmet: hizmetSlug } = await params;
  const il = getIlBySlug(ilSlug);
  const hizmet = getHizmetBySlug(hizmetSlug);
  if (!il || !hizmet) return {};
  return buildMetadata({
    title: `${il.ad} ${hizmet.ad} | Aynı Gün Garantili Onarım`,
    description: `${il.ad} genelinde ${hizmet.ad.toLocaleLowerCase("tr-TR")}: yerinde arıza tespiti, şeffaf fiyat ve 1 yıl garanti. ${il.ad}'ın ${il.ilceler.length} ilçesine hizmet veriyoruz. Hemen arayın: 0535 553 40 92`,
    path: `/${il.slug}/${hizmet.slug}`,
    keywords: [`${il.ad} ${hizmet.ad.toLocaleLowerCase("tr-TR")}`, ...hizmet.anahtarKelimeler.map((k) => `${il.ad} ${k}`)],
  });
}

export default async function IlHizmetPage({ params }: Props) {
  const { il: ilSlug, hizmet: hizmetSlug } = await params;
  const il = getIlBySlug(ilSlug);
  const hizmet = getHizmetBySlug(hizmetSlug);
  if (!il || !hizmet) notFound();

  const digerHizmetler = hizmetler.filter((h) => h.slug !== hizmet.slug);
  const digerSehirler = buyukSehirSlugs
    .filter((s) => s !== il.slug)
    .slice(0, 8)
    .map((s) => iller.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const breadcrumbItems = [
    { name: "Anasayfa", path: "/" },
    { name: il.ad, path: `/${il.slug}` },
    { name: hizmet.ad, path: `/${il.slug}/${hizmet.slug}` },
  ];
  const comboSss = getComboSss(il, hizmet);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={serviceJsonLd({ name: `${il.ad} ${hizmet.ad}`, description: hizmet.kisaAciklama, path: `/${il.slug}/${hizmet.slug}`, areaServed: il.ad })} />
      <JsonLd data={faqJsonLd(comboSss)} />

      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} />

          <Reveal className="mt-6 max-w-3xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-primary-light">
              <Icon name={hizmet.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {il.ad} {hizmet.ad}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{getComboAcilisParagrafi(il, hizmet)}</p>
            <div className="mt-7">
              <CallButton size="lg" />
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-2 text-xs text-muted-2">
            <Icon name="MapPin" className="h-3.5 w-3.5 text-accent-light" />
            Örnek hizmet noktalarımız: {getIlceOrnekleri(il, 6).join(", ")} ve {il.ad} geneli
          </Reveal>
        </Container>
      </section>

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-24">
        <Container>
          <SectionHeading align="left" eyebrow="Arıza Rehberi" title="Yaygın Arıza Belirtileri" />
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
          <SectionHeading align="left" eyebrow="Periyodik Bakım" title={`${il.ad} ${hizmet.bakimBasligi}`} subtitle={hizmet.bakimGirisi} />
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

      <section className="relative border-t border-border-subtle bg-background-alt py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow={il.ad} title={`${il.ad}'da Diğer Hizmetlerimiz`} />
            <div className="mt-6 flex flex-wrap gap-2">
              {digerHizmetler.map((h) => (
                <Link
                  key={h.slug}
                  href={`/${il.slug}/${h.slug}`}
                  className="rounded-full border border-border-subtle bg-surface px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light"
                >
                  {il.ad} {h.ad}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow={hizmet.ad} title={`Diğer Şehirlerde ${hizmet.ad}`} />
            <div className="mt-6 flex flex-wrap gap-2">
              {digerSehirler.map((digerIl) => (
                <Link
                  key={digerIl.slug}
                  href={`/${digerIl.slug}/${hizmet.slug}`}
                  className="rounded-full border border-border-subtle bg-surface px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light"
                >
                  {digerIl.ad} {hizmet.ad}
                </Link>
              ))}
              <Link href="/sehirler" className="rounded-full bg-gradient-to-r from-accent to-accent-dark px-3.5 py-2 text-xs font-semibold text-white">
                Tüm İller →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Merak Edilenler" title={`${il.ad} ${hizmet.ad} Hakkında Sorular`} />
          <div className="mt-10">
            <FaqAccordion items={comboSss} />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted">{getComboKapanisParagrafi(il, hizmet)}</p>
        </Container>
      </section>

      <CtaBanner title={`${il.ad} ${hizmet.ad} İçin Hemen Arayın`} />
    </>
  );
}
