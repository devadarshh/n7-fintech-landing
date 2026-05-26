import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import {
  addresses,
  bankingLinks,
  socialLinks,
  solutionLinks,
} from "@/data/footer";

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="group flex items-center justify-between text-sm text-text-muted transition hover:text-white"
            >
              {link}
              <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-dark pt-16 pb-8">
      <Container>
        <div className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-sm text-text-muted md:text-base">
              CB7 helps your financial institution improve the client experience, automate and
              optimize procedures, simplify banking operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost">CONTACT US</Button>
            <Button variant="primary">REQUEST DEMO</Button>
          </div>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="gradient-text text-7xl font-extrabold tracking-tighter md:text-8xl lg:text-9xl">
              N7
            </span>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {addresses.map((addr) => (
              <div key={addr.city}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {addr.city}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">{addr.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          <FooterLinkColumn title="Solutions" links={solutionLinks} />
          <FooterLinkColumn title="N7 Banking" links={bankingLinks} />
          <FooterLinkColumn title="Our Socials" links={socialLinks} />
        </div>

        <p className="text-center text-xs leading-relaxed text-text-muted md:text-left">
          Copyright © 2023 by Linkla Infosystems Limited — (CB7 and N7 as Commercial Brand) —
          Registered under the Companies Act 2006 in England and Wales | Number of incorporation:
          12500992
        </p>
      </Container>
    </footer>
  );
}
