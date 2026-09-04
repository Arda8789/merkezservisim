import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Icon } from "@/components/ui/Icon";

export function FaqSection({
  items,
  showMoreLink = false,
}: {
  items: { soru: string; cevap: string }[];
  showMoreLink?: boolean;
}) {
  return (
    <section id="sss" className="relative py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Merak Edilenler" title="Sıkça Sorulan Sorular" />
        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
        {showMoreLink ? (
          <div className="mt-8 text-center">
            <Link href="/sss" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:text-accent">
              Tüm Soruları Görüntüle
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
