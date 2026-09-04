import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const STEPS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "PhoneCall",
    title: "Hattı Arayın, Arızayı Tarif Edin",
    desc: "7/24 açık destek hattımızdan cihazınızın marka bağımsız arızasını teknik ekibimize iletin.",
  },
  {
    icon: "Navigation",
    title: "En Yakın Uzman Ekip Yönlendirilir",
    desc: "Türkiye genelindeki teknik servis ağımızdan bölgenize en yakın ekip adresinize planlanır.",
  },
  {
    icon: "Gauge",
    title: "Yerinde Tespit ve Şeffaf Fiyat",
    desc: "Arıza adresinizde tespit edilir, net fiyat teklifi onayınız alınmadan hiçbir işleme başlanmaz.",
  },
  {
    icon: "ShieldCheck",
    title: "Garantili Onarım Tamamlanır",
    desc: "Onarım orijinal uyumlu parça ile tamamlanır, işçilik ve parça 1 yıl garanti kapsamına alınır.",
  },
];

export function ProcessSteps() {
  return (
    <section id="surec" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Süreç"
          title="Aramadan Onarıma 4 Adım"
          subtitle="Şeffaf ve öngörülebilir bir süreçle, arızanızı bildirdiğiniz andan onarımın tamamlanmasına kadar yanınızdayız."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent lg:block" />
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90} className="relative">
              <div className="glass-card relative flex h-full flex-col rounded-3xl p-6 pt-8">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-xs font-bold text-white shadow-lg shadow-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
