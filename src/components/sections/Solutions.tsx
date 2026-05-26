import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="mb-12 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
            <SectionReveal>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                All of our solutions are tailor-made to your needs
              </h2>
              <Button variant="ghost">REQUEST DEMO</Button>
            </SectionReveal>
          </div>
          <div>
            {solutions.map((solution, i) => (
              <SectionReveal key={solution.id} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
