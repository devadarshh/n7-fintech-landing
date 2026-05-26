import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { InsightCard } from "@/components/ui/InsightCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { insights } from "@/data/insights";

export function Insights() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const compact = insights.filter((i) => !i.featured);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionReveal className="mb-12 lg:mb-0">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Button variant="ghost">INSIGHTS</Button>
          </SectionReveal>

          <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <InsightCard insight={featured} variant="featured" />
            </SectionReveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {compact.map((insight, i) => (
                <SectionReveal key={insight.id} delay={0.15 + i * 0.05}>
                  <InsightCard insight={insight} />
                </SectionReveal>
              ))}
            </div>
            <SectionReveal delay={0.25}>
              <LinkArrow className="mt-4">READ ALL INSIGHTS</LinkArrow>
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
