import { Container } from "@/components/ui/Container";
import { CallButton } from "@/components/PhoneCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function CtaBanner({
  title = "Arıza Kaydınızı Şimdi Oluşturalım",
  subtitle = "Hattımız açık, Türkiye genelindeki teknik servis ağımız yola çıkmaya hazır.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-[110px]" />
      <Container>
        <Reveal className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-light">
            <Icon name="ShieldCheck" className="h-3.5 w-3.5" />
            Garantili Özel Teknik Servis
          </div>
          <h2 className="relative mt-5 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-base text-muted">{subtitle}</p>
          <div className="relative mt-8 flex justify-center">
            <CallButton size="lg" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
