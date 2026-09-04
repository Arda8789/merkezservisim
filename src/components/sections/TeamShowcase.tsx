import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const FOTOGRAFLAR = [
  { src: "/images/camasir-teknisyen-3.jpg", alt: "Merkez Servisim teknisyeni çamaşır makinesi tamiri yapıyor", label: "Çamaşır Makinesi" },
  { src: "/images/klima-teknisyen-2.jpg", alt: "Merkez Servisim teknisyeni klima bakımı yapıyor", label: "Klima" },
  { src: "/images/buzdolabi-teknisyen-3.jpg", alt: "Merkez Servisim teknisyeni buzdolabı tamiri yapıyor", label: "Buzdolabı" },
  { src: "/images/bulasik-teknisyen-2.jpg", alt: "Merkez Servisim teknisyeni bulaşık makinesi tamiri yapıyor", label: "Bulaşık Makinesi" },
];

export function TeamShowcase() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sahadaki Ekibimiz"
          title="Üniformalı, Donanımlı, Güvenilir Teknisyenler"
          subtitle="Türkiye'nin dört bir yanında, Merkez Servisim güvencesiyle evinize gelen ekiplerimizden kareler."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FOTOGRAFLAR.map((foto, index) => (
            <Reveal key={foto.src} delay={index * 70}>
              <div className="group relative aspect-square overflow-hidden rounded-3xl border border-border-subtle">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4">
                  <p className="text-xs font-semibold text-white">{foto.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={280} className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-2 sm:text-sm">
          <Icon name="ShieldCheck" className="h-4 w-4 text-primary-light" />
          Türkiye genelindeki tüm teknisyenlerimiz Merkez Servisim güvencesiyle, 1 yıl garantili çalışır.
        </Reveal>
      </Container>
    </section>
  );
}
