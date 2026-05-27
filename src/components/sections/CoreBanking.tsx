import { Container } from "@/components/layout/Container";
import { LinkArrow } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { links } from "@/data/links";

export function CoreBanking() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-0 md:pr-8">
        <span className="watermark-n7 translate-x-[15%]">N7</span>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00d1ff]">
              Core platform
            </p>
            <h2 className="mb-4 max-w-lg text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white md:text-4xl">
              Run a more efficient, flexible, and digitally connected core banking system
            </h2>
            <p className="mb-8 max-w-md text-base text-text-muted">
              Deploy modular services, automate operations, and scale without legacy
              infrastructure holding you back.
            </p>
            <LinkArrow href={links.solution("core-banking")}>LEARN MORE</LinkArrow>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <DashboardMockup variant="kyc" />
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
