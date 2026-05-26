import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "ghost-dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110 hover:scale-[1.02]",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/5 hover:scale-[1.02]",
  "ghost-dark":
    "inline-flex items-center justify-center rounded-full border border-[#0a0a0f]/20 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a0a0f] transition hover:border-[#0a0a0f]/40 hover:scale-[1.02]",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function LinkArrow({
  href = "#",
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-cyan transition hover:gap-3",
        className,
      )}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
