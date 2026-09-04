import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-xl bg-[#141417] shadow-[0_6px_20px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/10", className)}>
      <svg viewBox="0 0 64 64" className="h-[58%] w-[58%]" aria-hidden="true">
        <path d="M20 44 L32 18 L32 33 L27.5 44 Z" fill="#fb923c" />
        <path d="M32 18 L44 44 L36.5 44 L32 33 Z" fill="#ea580c" />
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
