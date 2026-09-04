import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <Icon name="ArrowRight" className="h-3 w-3 opacity-50" />}
            {isLast ? (
              <span className="text-foreground/80">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-foreground">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
