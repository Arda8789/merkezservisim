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
          title="Her Ev Cihazına Uzman Dokunuşu"
          subtitle="Hangi cihazınız arıza verirse versin; aynı teknik servis ağı, aynı şeffaf fiyat politikası ve aynı garanti standardıyla hizmet alırsınız."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {hizmetler.map((hizmet, index) => (
            <Reveal key={hizmet.slug} delay={index * 60}>
              <Link
                href={`/hizmetler/${hizmet.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-border-subtle bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06] sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent-light transition-colors group-hover:text-primary-light sm:h-12 sm:w-12">
                  <Icon name={hizmet.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground sm:mt-5 sm:text-base">{hizmet.ad}</h3>
                <p className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">{hizmet.kisaAciklama}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light sm:mt-5 sm:text-sm">
                  Detayları İncele
                  <Icon name="ArrowUpRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
