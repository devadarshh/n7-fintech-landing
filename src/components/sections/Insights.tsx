import { Container } from "@/components/layout/Container";
import { Button, LinkArrow } from "@/components/ui/Button";
import { InsightCard } from "@/components/ui/InsightCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { insights } from "@/data/insights";
import { links } from "@/data/links";

export function Insights() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const compact = insights.filter((i) => !i.featured);

  return (
    <section className="relative overflow-hidden bg-bg-dark py-20 md:py-28">
      <div className="solutions-glow pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-16 xl:gap-24">
          <SectionReveal className="mb-12 lg:mb-0">
            <h2 className="mb-10 max-w-md text-[2rem] font-bold leading-[1.15] text-white md:text-4xl lg:text-5xl">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Button variant="ghost" href={links.insights} className="px-8">
              INSIGHTS
            </Button>
          </SectionReveal>

          <div className="space-y-5">
            <SectionReveal delay={0.08}>
              <InsightCard insight={featured} variant="featured" />
            </SectionReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {compact.map((insight, i) => (
                <SectionReveal key={insight.id} delay={0.12 + i * 0.04}>
                  <InsightCard insight={insight} />
                </SectionReveal>
              ))}
            </div>
            <SectionReveal delay={0.2}>
              <LinkArrow href={links.insights} className="mt-2">
                READ ALL INSIGHTS
              </LinkArrow>
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
