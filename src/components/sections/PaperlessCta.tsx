import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { links } from "@/data/links";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function PaperlessCta() {
  return (
    <section className="bg-bg-light py-12 md:py-16">
      <Container>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#0066ff]/20 bg-[#010b13] p-8 shadow-[0_0_60px_rgba(0,102,255,0.12)] md:p-12 lg:p-14">
            <span className="watermark-n7 absolute -right-4 top-1/2 -translate-y-1/2 md:right-8">
              N7
            </span>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
                  Take the full advantage of going paper-less now.
                </h2>
                <p className="text-sm leading-relaxed text-text-muted md:text-base">
                  N7 helps your financial institution improve the client experience, automate and
                  optimize procedures, simplify banking operations
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button variant="ghost" href={links.contact}>
                  CONTACT US
                </Button>
                <Button variant="primary" href={links.requestDemo}>
                  REQUEST DEMO
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
