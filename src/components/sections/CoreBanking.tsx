import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { LaptopMockup } from "@/components/ui/LaptopMockup";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { links } from "@/data/links";

export function CoreBanking() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
        <span className="watermark-cb7 -translate-x-[8%] translate-y-[2%] md:-translate-x-[4%]">
          CB7
        </span>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
          <SectionReveal>
            <h2 className="mb-5 max-w-xl text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem]">
              A complete cloud-based
              <br />
              core banking.
            </h2>
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-text-body md:text-base md:leading-7">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-col items-start gap-5">
              <Button variant="primary" href={links.requestDemo} className="rounded-lg px-7 py-3.5">
                REQUEST DEMO
              </Button>
              <LinkArrow
                href={links.solution("core-banking")}
                className="underline decoration-accent-cyan/80 underline-offset-[6px]"
              >
                LEARN MORE
              </LinkArrow>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12} className="w-full lg:justify-self-end lg:overflow-visible">
            <LaptopMockup className="mx-auto lg:mx-0" />
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
