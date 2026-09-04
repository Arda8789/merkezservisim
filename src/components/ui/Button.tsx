import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "accent" | "outline";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_8px_30px_-8px_rgba(249,115,22,0.6)] hover:brightness-110 hover:shadow-[0_10px_36px_-6px_rgba(249,115,22,0.7)]",
  accent:
    "bg-gradient-to-r from-accent to-accent-dark text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.55)] hover:brightness-110",
  ghost: "bg-surface-strong text-foreground border border-border-subtle hover:bg-white/10",
  outline: "border border-border-subtle text-foreground hover:bg-white/5",
};

const SIZE_CLASSES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: BaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternalTel = href.startsWith("tel:");
  return (
    <Link
      href={href}
      className={cn(base, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)}
      {...(isExternalTel ? {} : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}
