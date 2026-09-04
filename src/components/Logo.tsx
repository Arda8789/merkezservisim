import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("shrink-0", className)} aria-hidden="true">
      <defs>
        <clipPath id="logo-m-left">
          <rect x="-30" y="-30" width="80" height="160" />
        </clipPath>
        <clipPath id="logo-m-right">
          <rect x="50" y="-30" width="80" height="160" />
        </clipPath>
      </defs>
      <g fill="none" strokeWidth="13" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="1.75">
        <path d="M20 75 V28 L50 55 L80 28 V75" stroke="#FFFFFF" clipPath="url(#logo-m-left)" />
        <path d="M20 75 V28 L50 55 L80 28 V75" stroke="#F97316" clipPath="url(#logo-m-right)" />
      </g>
    </svg>
  );
}

export function Logo({ className, markClassName, textClassName }: { className?: string; markClassName?: string; textClassName?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <LogoMark className={markClassName ?? "h-8 w-8"} />
      <span className={cn(jakarta.className, "text-lg font-extrabold tracking-tight text-white", textClassName)}>
        MerkezServisim
      </span>
    </Link>
  );
}

export { LogoMark };
