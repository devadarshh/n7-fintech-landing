import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { links } from "@/data/links";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="relative bg-bg-dark py-20 md:py-28 lg:py-32">
      <div className="solutions-glow pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(280px,400px)_1fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="mb-14 lg:sticky lg:top-28 lg:mb-0 lg:max-w-[400px] lg:self-start">
            <SectionReveal>
              <h2 className="mb-10 max-w-[20rem] text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-white md:max-w-md md:text-[2.5rem] lg:mb-12 lg:text-[3rem] lg:leading-[1.1]">
                All of our solutions are tailor-made to your needs
              </h2>
              <Button variant="ghost" href={links.requestDemo} className="px-8 py-3.5">
                REQUEST DEMO
              </Button>
            </SectionReveal>
          </div>
          <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-[4.5rem]">
            {solutions.map((solution, i) => (
              <SectionReveal key={solution.id} delay={i * 0.04}>
                <SolutionCard solution={solution} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
