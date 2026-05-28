"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { TrustedBrandIcon } from "@/components/ui/TrustedBrandIcon";
import { links } from "@/data/links";
import { n7Assets } from "@/data/n7Assets";
import { trustedBrands } from "@/data/trustedBy";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark pt-[88px] pb-12 md:pt-[96px] md:pb-16 lg:flex lg:min-h-screen lg:flex-col lg:pt-[104px] lg:pb-20">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative lg:flex lg:flex-1 lg:flex-col">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center lg:max-w-[540px] lg:py-8">
            <h1 className="mb-5 text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[4rem] lg:leading-[1.05] xl:text-[4.5rem]">
              <span className="block sm:whitespace-nowrap">The new foundation</span>
              <span className="block sm:whitespace-nowrap">of modern banking</span>
            </h1>
            <p className="mb-8 max-w-[520px] text-[15px] leading-[1.65] text-text-body md:text-base md:leading-7">
              We drive innovation and growth, provide seamless
              <br />
              customer experience and operational excellence
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button variant="primary" href={links.requestDemo} className="rounded-lg px-7 py-3.5">
                REQUEST DEMO
              </Button>
              <Button variant="ghost" href={links.contact} className="rounded-lg px-7 py-3.5">
                CONTACT US
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[610px] lg:max-w-none lg:justify-self-end">
            <div
              className="pointer-events-none absolute -right-4 top-1/2 z-0 h-[85%] w-[90%] -translate-y-1/2 rounded-full bg-[#0066ff]/25 blur-[72px]"
              aria-hidden
            />
            <div className="relative z-[1] overflow-hidden rounded-[32px]">
              <FigmaAsset
                src={n7Assets.hero.visual}
                width={n7Assets.hero.visualWidth}
                height={n7Assets.hero.visualHeight}
                alt="Digital banking experience with balance and activity cards"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.08] pt-10 lg:mt-auto lg:pt-12">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
            Trusted by
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-10 md:gap-x-12">
            {trustedBrands.map((brand) => (
              <li
                key={brand.id}
                className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-text-muted"
              >
                <TrustedBrandIcon brand={brand.id} />
                <span>{brand.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
