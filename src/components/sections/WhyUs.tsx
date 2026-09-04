import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const REASONS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "BadgeCheck",
    title: "Şeffaf, Sürprizsiz Fiyat Politikası",
    desc: "Arıza yerinde tespit edilir, onarıma yalnızca siz net fiyatı onayladıktan sonra başlanır.",
  },
  {
    icon: "Wrench",
    title: "Uzman ve Deneyimli Teknik Kadro",
    desc: "Beyaz eşya, kombi ve klima sistemlerinde uzmanlaşmış teknisyenler arızanızı doğru teşhis eder.",
  },
  {
    icon: "ShieldCheck",
    title: "1 Yıl İşçilik ve Parça Garantisi",
    desc: "Yapılan her onarım, işçilik ve kullanılan parça bazında garanti belgesiyle güvence altına alınır.",
  },
  {
    icon: "Timer",
    title: "Aynı Gün Yerinde Müdahale",
    desc: "Çoğu çağrıda, talebinizi ilettiğiniz gün içinde bölgenize en yakın ekip adresinize yönlendirilir.",
  },
  {
    icon: "MapPin",
    title: "Türkiye Genelinde Geniş Hizmet Ağı",
    desc: "81 ilde ve 973 ilçede adrese giderek hizmet veren teknik servis ağımızla her yerdeyiz.",
  },
  {
    icon: "Sparkles",
    title: "Periyodik Bakım ile Arıza Önleme",
    desc: "Düzenli bakım hizmetiyle beklenmedik arızaların önüne geçer, cihazlarınızın ömrünü uzatırız.",
  },
];

export function WhyUs() {
  return (
    <section id="neden-biz" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Neden Merkez Servisim"
          title="Şablon Değil, Standart Onarım Süreci"
          subtitle="Her çağrıda aynı disiplinli süreç, aynı şeffaf iletişim ve aynı garanti güvencesiyle yanınızdayız."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 60}>
              <div className="flex h-full gap-4 rounded-2xl border border-border-subtle bg-surface p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{reason.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
