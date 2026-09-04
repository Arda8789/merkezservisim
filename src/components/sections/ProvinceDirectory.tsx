import Link from "next/link";
import { bolgeler, getIllerByBolge } from "@/lib/data/iller";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const VISIBLE_LIMIT = 8;

export function ProvinceDirectory() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
      {bolgeler.map((bolge, index) => {
        const bolgeIlleri = getIllerByBolge(bolge);
        const isLast = index === bolgeler.length - 1;
        const gorunenIller = bolgeIlleri.slice(0, VISIBLE_LIMIT);
        const kalanIller = bolgeIlleri.slice(VISIBLE_LIMIT);

        return (
          <Reveal key={bolge} delay={index * 60} className={cn(isLast && "md:col-span-2")}>
            <div className="glass-card h-full rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent-light">
                  <Icon name="MapPin" className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{bolge} Bölgesi</h3>
                <span className="ml-auto shrink-0 rounded-full border border-border-subtle bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-muted-2">
                  {bolgeIlleri.length} İL
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {gorunenIller.map((il) => (
                  <Link
                    key={il.slug}
                    href={`/${il.slug}`}
                    className="rounded-full border border-border-subtle bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light"
                  >
                    {il.ad}
                  </Link>
                ))}

                {kalanIller.length > 0 ? (
                  <details className="group/more mb-2 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="inline-block cursor-pointer list-none rounded-full border border-dashed border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-light transition-colors hover:bg-accent/20">
                      <span className="group-open/more:hidden">+{kalanIller.length} il daha</span>
                      <span className="hidden group-open/more:inline">Daralt</span>
                    </summary>
                    {kalanIller.map((il) => (
                      <Link
                        key={il.slug}
                        href={`/${il.slug}`}
                        className="mb-2 mr-2 inline-block rounded-full border border-border-subtle bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light"
                      >
                        {il.ad}
                      </Link>
                    ))}
                  </details>
                ) : null}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
