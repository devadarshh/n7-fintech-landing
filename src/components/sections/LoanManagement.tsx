import { Container } from "@/components/layout/Container";
import { LinkArrow } from "@/components/ui/Button";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SolutionIconGraphic } from "@/components/ui/SolutionIcons";
import { links } from "@/data/links";
import { n7Assets } from "@/data/n7Assets";

export function LoanManagement() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-16 md:py-24 lg:py-28">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <SectionReveal>
            <div className="relative max-w-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="text-white">
                  <SolutionIconGraphic type="grid" />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
                  NBFC
                </span>
              </div>
              <h2 className="mb-4 text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white md:text-[2rem] lg:text-[2.25rem]">
                Loan Management System
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed text-text-body md:text-base md:leading-7">
                N7 brings full capabilities across strategy, human-centred design, operations,
                engineering and data science to create and deliver disruptive innovation. Our
                approach to building digital banks is specifically designed to help clients
              </p>
              <LinkArrow href={links.solution("loan-management")}>LEARN MORE</LinkArrow>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[632px]">
              <div
                className="pointer-events-none absolute -inset-6 rounded-2xl bg-[#0066ff]/20 blur-3xl"
                aria-hidden
              />
              <FigmaAsset
                src={n7Assets.dashboard.aml}
                width={n7Assets.dashboard.amlWidth}
                height={n7Assets.dashboard.amlHeight}
                alt="AML Dashboard"
                className="relative rounded-xl shadow-[0_0_60px_rgba(0,102,255,0.35)]"
              />
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
