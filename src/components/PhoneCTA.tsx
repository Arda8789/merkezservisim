import { SITE_CONFIG } from "@/lib/site-config";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PhoneLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={SITE_CONFIG.phoneHref} className={cn("font-semibold", className)}>
      {children ?? SITE_CONFIG.phoneDisplay}
    </a>
  );
}

export function CallButton({
  className,
  size = "lg",
  label = "Hemen Ara",
}: {
  className?: string;
  size?: "md" | "lg";
  label?: string;
}) {
  const isLg = size === "lg";
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary-dark font-semibold text-white shadow-[0_10px_36px_-8px_rgba(249,115,22,0.65)] transition-transform duration-200 hover:brightness-110 active:scale-[0.97]",
        isLg ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        className
      )}
    >
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" />
        <Icon name="PhoneCall" className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap">
        {label} · {SITE_CONFIG.phoneDisplay}
      </span>
    </a>
  );
}
