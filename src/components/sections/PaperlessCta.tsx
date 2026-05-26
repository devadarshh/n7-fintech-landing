import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function PaperlessCta() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-dark-elevated p-8 md:p-12 lg:p-16">
            <span className="watermark-n7 absolute -right-8 top-1/2 -translate-y-1/2 opacity-20">
              N7
            </span>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                  Take the full advantage of going paper-less now.
                </h2>
                <p className="text-sm leading-relaxed text-text-muted md:text-base">
                  CB7 helps your financial institution improve the client experience, automate and
                  optimize procedures, simplify banking operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Button variant="ghost">CONTACT US</Button>
                <Button variant="primary">REQUEST DEMO</Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
