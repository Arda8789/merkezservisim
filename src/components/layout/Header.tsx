"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/site-config";
import { hizmetler } from "@/lib/data/hizmetler";
import { Icon } from "@/components/ui/Icon";
import { CallButton } from "@/components/PhoneCTA";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/85 backdrop-blur-lg">
      <div className="hidden border-b border-border-subtle/60 bg-background-alt/60 sm:block">
        <Container className="flex h-9 items-center justify-between text-xs text-muted-2">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Clock" className="h-3.5 w-3.5 text-accent-light" />
            {SITE_CONFIG.workingHours} · {SITE_CONFIG.areaServed}
          </span>
          <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-1.5 font-medium text-foreground/80 hover:text-primary-light">
            <Icon name="PhoneCall" className="h-3.5 w-3.5" />
            {SITE_CONFIG.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark shadow-[0_6px_20px_-6px_rgba(59,130,246,0.7)]">
            <Icon name="Wrench" className="h-[18px] w-[18px] text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Merkez<span className="text-gradient">Servisim</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              href="/hizmetler"
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Hizmetler
              <Icon name="ChevronDown" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-20 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="glass-card grid grid-cols-1 gap-1 rounded-2xl p-2 shadow-2xl shadow-black/40">
                {hizmetler.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/hizmetler/${h.slug}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                      <Icon name={h.icon} className="h-4 w-4" />
                    </span>
                    {h.ad}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.filter((l) => l.href !== "/hizmetler").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CallButton size="md" />
          </div>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground lg:hidden"
          >
            <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <div className={cn("overflow-hidden border-t border-border-subtle bg-background transition-[max-height] duration-300 lg:hidden", open ? "max-h-[32rem]" : "max-h-0 border-t-0")}>
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <a href={SITE_CONFIG.phoneHref} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white sm:hidden">
            <Icon name="PhoneCall" className="h-4 w-4" />
            Hemen Ara · {SITE_CONFIG.phoneDisplay}
          </a>
        </Container>
      </div>
    </header>
  );
}
