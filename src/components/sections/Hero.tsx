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

const FLOATING_BADGES: { icon: IconName; label: string; className: string; animate: string }[] = [
  { icon: "Fan", label: "Klima", className: "left-0 top-2 sm:top-4", animate: "animate-float" },
  { icon: "Flame", label: "Kombi", className: "right-0 top-10 sm:top-14", animate: "animate-float-slow" },
  { icon: "WashingMachine", label: "Çamaşır Makinesi", className: "left-2 bottom-16 sm:bottom-20", animate: "animate-float-slow" },
  { icon: "Refrigerator", label: "Buzdolabı", className: "right-4 bottom-0", animate: "animate-float" },
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

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-light">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px]">
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-accent/25 to-primary/25 blur-3xl" />
          <div className="absolute inset-14 rounded-full border border-border-subtle bg-surface backdrop-blur-sm sm:inset-16" />
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/25" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-accent to-accent-dark shadow-2xl shadow-accent/40 sm:h-24 sm:w-24">
              <Icon name="Wrench" className="h-9 w-9 text-white sm:h-10 sm:w-10" />
            </div>
          </div>

          {FLOATING_BADGES.map((badge) => (
            <div key={badge.label} className={cn("glass-card absolute flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-xl shadow-black/30", badge.className, badge.animate)}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary-light">
                <Icon name={badge.icon} className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
