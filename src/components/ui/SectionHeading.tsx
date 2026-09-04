import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-light uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      ) : null}
      <Tag className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">{title}</Tag>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  );
}
