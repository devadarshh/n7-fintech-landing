import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  complianceFeatures,
  complianceDescription,
  digitalBankingDescription,
  digitalFeatures,
} from "@/data/features";
import { links } from "@/data/links";

export function DigitalBanking() {
  return (
    <section className="relative overflow-hidden bg-bg-light py-16 text-[#0a0a0f] light-section-curves md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="watermark-n7-filled opacity-40">N7</span>
      </div>

      <Container className="relative">
        <div className="mb-24 grid items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-12">
          <SectionReveal>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              Digital banking out-of-the-box
            </h2>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base">
              {digitalBankingDescription}
            </p>
            <Button variant="primary" href={links.requestDemo} className="mb-5">
              REQUEST DEMO
            </Button>
            <LinkArrow href={links.solution("digital-banking")} className="!text-[#0066ff]">
              LEARN MORE
            </LinkArrow>
          </SectionReveal>

          <SectionReveal delay={0.08} className="flex justify-center lg:px-4">
            <PhoneMockup variant="dashboard" />
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <h3 className="mb-4 text-xl font-bold leading-snug md:text-2xl">
              Fully compliant with regulatory requirement
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">{complianceDescription}</p>
            <ul className="space-y-4">
              {complianceFeatures.map((item) => (
                <CheckListItem key={item} className="[&_span:last-child]:!text-slate-700">
                  {item}
                </CheckListItem>
              ))}
            </ul>
          </SectionReveal>
        </div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <SectionReveal>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">{digitalFeatures.legacy.title}</h3>
              <p className="mb-5 max-w-md text-sm leading-relaxed text-slate-600">
                {digitalFeatures.legacy.description}
              </p>
              <ul className="space-y-3">
                {digitalFeatures.legacy.items.map((item) => (
                  <CheckListItem key={item} className="[&_span:last-child]:!text-slate-700">
                    {item}
                  </CheckListItem>
                ))}
              </ul>
            </SectionReveal>

            <SectionReveal delay={0.08} className="flex justify-center lg:justify-end">
              <PhoneMockup variant="chart" />
            </SectionReveal>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <SectionReveal className="flex justify-center lg:justify-start">
              <PhoneMockup variant="profile" />
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">{digitalFeatures.branches.title}</h3>
              <p className="mb-5 max-w-md text-sm leading-relaxed text-slate-600">
                {digitalFeatures.branches.description}
              </p>
              <ul className="space-y-3">
                {digitalFeatures.branches.items.map((item) => (
                  <CheckListItem key={item} className="[&_span:last-child]:!text-slate-700">
                    {item}
                  </CheckListItem>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>

      </Container>
    </section>
  );
}
