import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { DashboardMockup } from "@/components/ui/DashboardMockup";

export function CoreBanking() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="watermark-n7 opacity-30">N7</span>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              A complete cloud-based core banking.
            </h2>
            <p className="mb-8 max-w-md text-base text-text-muted md:text-lg">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary">REQUEST DEMO</Button>
              <LinkArrow>LEARN MORE</LinkArrow>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <DashboardMockup variant="aml" />
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
