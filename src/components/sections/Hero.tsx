import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const TRUST_ITEMS: { icon: IconName; label: string }[] = [
  { icon: "ShieldCheck", label: "1 Yıl İşçilik ve Parça Garantisi" },
  { icon: "Clock", label: "7/24 Servis Hattı" },
  { icon: "MapPin", label: "Türkiye Geneli 81 İl" },
  { icon: "BadgeCheck", label: "Şeffaf, Sürprizsiz Fiyat" },
];

const CATEGORY_CARDS: { slug: string; label: string; image: string; tint: string }[] = [
  { slug: "klima-servisi", label: "Klima", image: "/images/klima-unit.png", tint: "from-sky-500/15 via-sky-400/5 to-transparent" },
  { slug: "kombi-servisi", label: "Kombi", image: "/images/kombi.png", tint: "from-primary/15 via-primary/5 to-transparent" },
  { slug: "camasir-makinesi-tamiri", label: "Çamaşır Makinesi", image: "/images/camasir-makinesi.png", tint: "from-blue-500/15 via-blue-400/5 to-transparent" },
  { slug: "bulasik-makinesi-tamiri", label: "Bulaşık Makinesi", image: "/images/bulasik-makinesi.png", tint: "from-cyan-500/15 via-cyan-400/5 to-transparent" },
  { slug: "buzdolabi-tamiri", label: "Buzdolabı", image: "/images/buzdolabi.png", tint: "from-indigo-500/15 via-indigo-400/5 to-transparent" },
  { slug: "firin-ocak-tamiri", label: "Fırın & Ocak", image: "/images/firin.png", tint: "from-amber-500/15 via-amber-400/5 to-transparent" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Garantili Özel Teknik Servis · Türkiye Geneli
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Beyaz Eşya, Kombi ve Klimanız İçin{" "}
            <span className="text-gradient">Aynı Gün Yerinde Çözüm</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Çamaşır makinesinden bulaşık makinesine, buzdolabından kombiye ve klimaya kadar; Türkiye genelindeki 81 ilde
            şeffaf fiyatlı, 1 yıl garantili özel teknik servis hattımızla tanışın. Arızanızı anlatın, size en yakın uzman
            ekip yönlendirilsin.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CallButton size="lg" />
            <Button href="/hizmetler" variant="ghost" size="lg">
              Hizmetleri İncele
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2.5 rounded-2xl border border-border-subtle bg-surface p-4 transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold leading-snug text-foreground/90 sm:text-[13px]">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/10 via-transparent to-primary/10 blur-2xl" />

          <div className="flex items-center justify-between px-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">Popüler Hizmetler</p>
            <Link href="/hizmetler" className="flex items-center gap-1 text-xs font-semibold text-accent-light transition-colors hover:text-accent">
              Tümü
              <Icon name="ArrowRight" className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:gap-4">
            {CATEGORY_CARDS.map((card, index) => (
              <Reveal key={card.slug} delay={200 + index * 60}>
                <Link
                  href={`/hizmetler/${card.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className={`relative flex h-24 items-center justify-center bg-gradient-to-br sm:h-28 lg:h-36 ${card.tint}`}>
                    <Image
                      src={card.image}
                      alt={card.label}
                      width={112}
                      height={112}
                      className="h-20 w-20 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                    />
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <Icon name="ArrowUpRight" className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-2 py-2.5 lg:py-3.5">
                    <span className="text-center text-xs font-semibold leading-tight text-foreground lg:text-sm">{card.label}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-3.5 flex items-center gap-2.5 rounded-2xl border border-border-subtle bg-surface px-4 py-3">
            <span className="h-1.5 w-1.5 shrink-0 animate-blink rounded-full bg-emerald-400" />
            <p className="text-xs font-medium text-muted">
              <span className="font-bold text-foreground">Hat şu an aktif</span> · Türkiye genelinde 81 ilde hizmet veriyoruz
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
