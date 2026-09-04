import { SITE_CONFIG } from "@/lib/site-config";
import { Icon } from "@/components/ui/Icon";

export function FloatingCallButton() {
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      aria-label={`Hemen Ara: ${SITE_CONFIG.phoneDisplay}`}
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_10px_30px_-6px_rgba(249,115,22,0.7)] transition-transform hover:scale-105 sm:flex"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" />
      <Icon name="PhoneCall" className="h-5 w-5" />
    </a>
  );
}
