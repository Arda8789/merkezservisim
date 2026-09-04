import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FaqAccordion({ items }: { items: { soru: string; cevap: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <Reveal key={item.soru} delay={index * 40}>
          <details className="group glass-card rounded-2xl px-5 py-1 open:pb-3 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-foreground sm:text-base">
              {item.soru}
              <Icon name="ChevronDown" className="h-4 w-4 shrink-0 text-accent-light transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="pb-2 text-sm leading-relaxed text-muted">{item.cevap}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
