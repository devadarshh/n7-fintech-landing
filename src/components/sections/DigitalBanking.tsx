import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { complianceFeatures, digitalFeatures } from "@/data/features";

export function DigitalBanking() {
  return (
    <section className="relative overflow-hidden bg-bg-light py-16 text-[#0a0a0f] md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="watermark-n7 text-[#0a0a0f]/[0.03]">N7</span>
      </div>

      <Container className="relative">
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-3 lg:gap-8">
          <SectionReveal>
            <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              Digital banking out-of-the-box
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
              N7 helps your financial institution improve the client experience, automate and
              optimize procedures, simplify banking operations.
            </p>
            <Button variant="primary" className="mb-4">
              REQUEST DEMO
            </Button>
            <LinkArrow className="text-blue-600">LEARN MORE</LinkArrow>
          </SectionReveal>

          <SectionReveal delay={0.1} className="flex justify-center">
            <PhoneMockup variant="dashboard" />
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <h3 className="mb-4 text-xl font-bold md:text-2xl">
              Fully compliant with regulatory requirement
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              Our governance and risk management frameworks ensure your institution meets global
              regulatory standards.
            </p>
            <ul className="space-y-4">
              {complianceFeatures.map((item) => (
                <CheckListItem key={item} className="[&_span:last-child]:text-slate-600">
                  {item}
                </CheckListItem>
              ))}
            </ul>
          </SectionReveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-3 lg:gap-8">
          <SectionReveal className="flex justify-center lg:justify-start">
            <PhoneMockup variant="chart" />
          </SectionReveal>

          {[digitalFeatures.legacy, digitalFeatures.branches].map((block, i) => (
            <SectionReveal key={block.title} delay={0.1 * (i + 1)}>
              <h3 className="mb-4 text-xl font-bold">{block.title}</h3>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <CheckListItem key={item} className="[&_span:last-child]:text-slate-600">
                    {item}
                  </CheckListItem>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
