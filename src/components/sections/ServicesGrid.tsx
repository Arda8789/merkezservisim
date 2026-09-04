import Link from "next/link";
import { hizmetler } from "@/lib/data/hizmetler";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function ServicesGrid() {
  return (
    <section id="hizmetler" className="relative border-t border-border-subtle bg-background-alt py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hizmet Kategorilerimiz"
          title="Tek Hat, Yedi Uzmanlık Alanı"
          subtitle="Hangi cihazınız arıza verirse versin; aynı teknik servis ağı, aynı şeffaf fiyat politikası ve aynı garanti standardıyla hizmet alırsınız."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hizmetler.map((hizmet, index) => (
            <Reveal key={hizmet.slug} delay={index * 60}>
              <Link
                href={`/hizmetler/${hizmet.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent-light transition-colors group-hover:text-primary-light">
                  <Icon name={hizmet.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{hizmet.ad}</h3>
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
  );
}
