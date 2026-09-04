import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { hizmetler } from "@/lib/data/hizmetler";
import { iller, buyukSehirSlugs } from "@/lib/data/iller";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/Logo";

const popularIller = buyukSehirSlugs
  .map((slug) => iller.find((i) => i.slug === slug))
  .filter((i): i is NonNullable<typeof i> => Boolean(i));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-alt">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{SITE_CONFIG.description}</p>
          <a
            href={SITE_CONFIG.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white"
          >
            <Icon name="PhoneCall" className="h-4 w-4" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <div className="mt-5 flex items-center gap-2 text-xs text-muted-2">
            <Icon name="Clock" className="h-3.5 w-3.5 text-accent-light" />
            {SITE_CONFIG.workingHours}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Hizmetlerimiz</h3>
          <ul className="mt-4 space-y-2.5">
            {hizmetler.map((h) => (
              <li key={h.slug}>
                <Link href={`/hizmetler/${h.slug}`} className="text-sm text-muted hover:text-primary-light">
                  {h.ad}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/hizmetler" className="text-sm font-medium text-accent-light hover:text-accent">
                Tüm Hizmetler →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Popüler Şehirler</h3>
          <ul className="mt-4 space-y-2.5">
            {popularIller.slice(0, 8).map((il) => (
              <li key={il.slug}>
                <Link href={`/${il.slug}`} className="text-sm text-muted hover:text-primary-light">
                  {il.ad} Teknik Servis
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sehirler" className="text-sm font-medium text-accent-light hover:text-accent">
                Tüm İller (81) →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Kurumsal</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/hakkimizda" className="text-sm text-muted hover:text-primary-light">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/sehirler" className="text-sm text-muted hover:text-primary-light">Hizmet Bölgelerimiz</Link>
            </li>
            <li>
              <Link href="/sss" className="text-sm text-muted hover:text-primary-light">Sıkça Sorulan Sorular</Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-sm text-muted hover:text-primary-light">İletişim</Link>
            </li>
            <li>
              <Link href="/gizlilik-politikasi" className="text-sm text-muted hover:text-primary-light">Gizlilik Politikası</Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-subtle">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_CONFIG.name}. Tüm hakları saklıdır.</p>
          <p>{SITE_CONFIG.areaServed} · Bağımsız Özel Teknik Servis Hattı</p>
        </Container>
      </div>
    </footer>
  );
}
