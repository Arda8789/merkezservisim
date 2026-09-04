import { SITE_CONFIG } from "@/lib/site-config";
import { Icon } from "@/components/ui/Icon";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-background/95 p-3 backdrop-blur-lg sm:hidden">
      <a
        href={SITE_CONFIG.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(249,115,22,0.6)]"
      >
        <Icon name="PhoneCall" className="h-4 w-4" />
        Hemen Ara · {SITE_CONFIG.phoneDisplay}
      </a>
    </div>
  );
}
