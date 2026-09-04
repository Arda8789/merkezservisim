import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-xl bg-[#141417] shadow-[0_6px_20px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/10", className)}>
      <svg viewBox="0 0 64 64" className="h-[62%] w-[62%]" aria-hidden="true">
        <defs>
          <clipPath id="logo-m-left">
            <rect x="0" y="0" width="32" height="64" />
          </clipPath>
          <clipPath id="logo-m-right">
            <rect x="32" y="0" width="32" height="64" />
          </clipPath>
        </defs>
        <text x="32" y="47" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="46" clipPath="url(#logo-m-left)" fill="#fb923c">
          M
        </text>
        <text x="32" y="47" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="46" clipPath="url(#logo-m-right)" fill="#9a3412">
          M
        </text>
      </svg>
    </span>
  );
}

export function Logo({ className, markClassName, textClassName }: { className?: string; markClassName?: string; textClassName?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName ?? "h-9 w-9"} />
      <span className={cn("text-lg font-bold tracking-tight text-foreground", textClassName)}>
        Merkez<span className="text-gradient-orange">Servisim</span>
      </span>
    </Link>
  );
}

export { LogoMark };
