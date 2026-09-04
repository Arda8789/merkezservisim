import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]" />
      <Container className="relative max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
          <Icon name="MapPin" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">Sayfa Bulunamadı</h1>
        <p className="mt-4 text-muted">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Bulunduğunuz il için servis sayfamıza ulaşmak ya da
          arızanızı doğrudan bildirmek isterseniz aşağıdaki seçenekleri kullanabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CallButton size="lg" />
          <Link
            href="/sehirler"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/5"
          >
            Hizmet Bölgelerimiz
          </Link>
        </div>
      </Container>
    </section>
  );
}
