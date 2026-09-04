import Link from "next/link";
import { iller } from "@/lib/data/iller";
import { Marquee } from "@/components/ui/Marquee";
import { Icon } from "@/components/ui/Icon";

export function IlMarquee() {
  return (
    <div className="border-y border-border-subtle bg-background-alt/60 py-5">
      <Marquee>
        {iller.map((il) => (
          <Link
            key={il.slug}
            href={`/${il.slug}`}
            className="inline-flex items-center gap-1.5 px-4 text-sm font-medium text-muted-2 transition-colors hover:text-accent-light"
          >
            <Icon name="MapPin" className="h-3.5 w-3.5 opacity-60" />
            {il.ad}
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
