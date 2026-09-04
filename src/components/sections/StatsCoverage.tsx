import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const STATS: { icon: IconName; value: number; suffix: string; label: string }[] = [
  { icon: "MapPin", value: 81, suffix: "", label: "İlde Hizmet Ağı" },
  { icon: "Wrench", value: 973, suffix: "", label: "İlçeye Adrese Giden Servis" },
  { icon: "ShieldCheck", value: 1, suffix: " Yıl", label: "İşçilik ve Parça Garantisi" },
  { icon: "Clock", value: 7, suffix: "/24", label: "Kesintisiz Servis Hattı" },
];

export function StatsCoverage() {
  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-background-alt py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <Container className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary-light">
              <Icon name={stat.icon} className="h-5 w-5" />
            </div>
            <div className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
