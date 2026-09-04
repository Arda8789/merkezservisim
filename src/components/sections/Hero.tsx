import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const TRUST_ITEMS: { icon: IconName; label: string }[] = [
  { icon: "ShieldCheck", label: "1 Yıl İşçilik ve Parça Garantisi" },
  { icon: "Clock", label: "7/24 Servis Hattı" },
  { icon: "MapPin", label: "Türkiye Geneli 81 İl" },
  { icon: "BadgeCheck", label: "Şeffaf, Sürprizsiz Fiyat" },
];

const ORBIT_BADGES: {
  key: string;
  label: string;
  className: string;
  animate: string;
  tint: string;
  glow: string;
  content: React.ReactNode;
}[] = [
  {
    key: "klima",
    label: "Klima",
    className: "left-0 top-4 sm:top-6",
    animate: "animate-float",
    tint: "from-sky-400/25 to-accent/15",
    glow: "shadow-sky-500/20",
    content: (
      <Image src="/images/klima-unit.png" alt="Klima" width={40} height={40} className="h-8 w-8 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:h-9 sm:w-9" />
    ),
  },
  {
    key: "kombi",
    label: "Kombi",
    className: "right-0 top-16 sm:top-20",
    animate: "animate-float-slow",
    tint: "from-primary/25 to-primary-dark/15",
    glow: "shadow-primary/25",
    content: <Icon name="Flame" className="h-5 w-5 text-primary-light" />,
  },
  {
    key: "camasir",
    label: "Çamaşır Makinesi",
    className: "left-2 bottom-20 sm:bottom-24",
    animate: "animate-float-slow",
    tint: "from-blue-400/25 to-accent/15",
    glow: "shadow-blue-500/20",
    content: <Icon name="WashingMachine" className="h-5 w-5 text-accent-light" />,
  },
  {
    key: "buzdolabi",
    label: "Buzdolabı",
    className: "right-6 bottom-2",
    animate: "animate-float",
    tint: "from-indigo-400/25 to-accent/15",
    glow: "shadow-indigo-500/20",
    content: <Icon name="Refrigerator" className="h-5 w-5 text-accent-light" />,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-10">
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

        <Reveal delay={150} className="relative mx-auto hidden lg:block lg:h-[460px] lg:w-[460px]">
          <div className="bg-noise absolute inset-0 rounded-full opacity-[0.05] mix-blend-overlay" />
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-accent/25 to-primary/25 blur-3xl" />
          <div className="absolute inset-16 rounded-full border border-border-subtle bg-surface backdrop-blur-sm" />
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/25" />
          <div className="absolute inset-8 animate-spin-slower rounded-full border border-dotted border-primary/20" />

          <div className="glass-card absolute left-1/2 top-2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-lg shadow-black/30">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" />
            Hat Şu An Aktif
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-24 w-24 animate-radar rounded-full bg-primary/40 sm:h-28 sm:w-28" />
            <span className="absolute h-24 w-24 animate-radar rounded-full bg-primary/40 [animation-delay:1.4s] sm:h-28 sm:w-28" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-primary to-primary-dark shadow-2xl shadow-primary/40 sm:h-24 sm:w-24">
              <Icon name="PhoneCall" className="h-9 w-9 text-white sm:h-10 sm:w-10" />
            </div>
          </div>

          {ORBIT_BADGES.map((badge) => (
            <div
              key={badge.key}
              className={cn(
                "glass-card absolute flex items-center gap-2 rounded-2xl py-2 pl-2 pr-3.5 shadow-xl",
                badge.className,
                badge.animate,
                badge.glow
              )}
            >
              <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br", badge.tint)}>
                {badge.content}
              </span>
              <span className="text-xs font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
