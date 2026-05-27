import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "@/components/ui/icons";
import {
  addresses,
  bankingLinks,
  type FooterLink,
  socialLinks,
  solutionLinks,
} from "@/data/footer";

function FooterLinkColumn({
  title,
  links: columnLinks,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-base font-semibold text-white">{title}</h4>
      <ul className="space-y-3.5">
        {columnLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 text-sm text-text-muted transition hover:text-white"
            >
              <span>{link.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-accent-cyan" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMark() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white"
      aria-hidden
    >
      N
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg-dark py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(180px,1.1fr)_repeat(3,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-20 xl:gap-x-14">
          <div className="flex items-center lg:row-span-2 lg:items-start lg:pt-2">
            <span className="footer-logo text-[clamp(5.5rem,14vw,10.5rem)] font-extrabold leading-none tracking-tighter">
              N7
            </span>
          </div>

          {addresses.map((addr) => (
            <div key={addr.city}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                {addr.city}
              </h4>
              <p className="max-w-xs text-sm leading-relaxed text-text-muted">{addr.text}</p>
            </div>
          ))}

          <FooterLinkColumn title="Solutions" links={solutionLinks} />
          <FooterLinkColumn title="N7 Banking" links={bankingLinks} />
          <FooterLinkColumn title="Our Socials" links={socialLinks} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:mt-16 md:flex-row md:items-center md:gap-5 lg:mt-20">
          <FooterMark />
          <p className="text-xs leading-relaxed text-text-muted">
            Copyright © 2023 by Linkla Infosystems Limited — (CB7 and N7 as Commercial Brand) —
            Registered under the Companies Act 2006 in England and Wales | Number of incorporation:
            12500992
          </p>
        </div>
      </Container>
    </footer>
  );
}
