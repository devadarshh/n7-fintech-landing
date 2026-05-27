import Link from "next/link";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ButtonVariant = "primary" | "ghost" | "ghost-dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-110",
  ghost:
    "inline-flex items-center justify-center rounded-lg border border-white/35 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/60 hover:bg-white/5",
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
    const external = isExternalHref(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
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
  href = links.learnMore,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = isExternalHref(href);
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-accent-cyan transition hover:gap-3",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
