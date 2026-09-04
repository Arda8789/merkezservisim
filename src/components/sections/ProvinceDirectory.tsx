import Link from "next/link";
import { bolgeler, getIllerByBolge } from "@/lib/data/iller";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function ProvinceDirectory() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
      {bolgeler.map((bolge, index) => {
        const bolgeIlleri = getIllerByBolge(bolge);
        return (
          <Reveal key={bolge} delay={index * 60}>
            <div className="glass-card h-full rounded-3xl p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-light">
                <Icon name="MapPin" className="h-4 w-4" />
                {bolge} Bölgesi
                <span className="ml-auto text-xs font-normal normal-case text-muted-2">{bolgeIlleri.length} il</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {bolgeIlleri.map((il) => (
                  <Link
                    key={il.slug}
                    href={`/${il.slug}`}
                    className="rounded-full border border-border-subtle bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light"
                  >
                    {il.ad}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
