import { Container } from "@/components/layout/Container";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { coreBankingFeatures } from "@/data/features";

export function CoreBankingFeatures() {
  const midpoint = Math.ceil(coreBankingFeatures.length / 2);
  const leftCol = coreBankingFeatures.slice(0, midpoint);
  const rightCol = coreBankingFeatures.slice(midpoint);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal className="order-2 lg:order-1">
            <DashboardMockup variant="kyc" />
          </SectionReveal>

          <SectionReveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="mb-3 max-w-xl text-[1.75rem] font-bold leading-[1.15] text-white md:text-4xl">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>
            <p className="mb-8 text-sm font-medium text-white md:text-base">What you will get:</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <ul className="space-y-4">
                {leftCol.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
              <ul className="space-y-4">
                {rightCol.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
