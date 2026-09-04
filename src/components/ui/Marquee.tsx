import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  fast = false,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-4",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
