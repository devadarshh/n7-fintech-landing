"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/Button";
import { PatternTile } from "@/components/ui/icons";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { caseStudies } from "@/data/caseStudies";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Our Case Studies
          </h2>
        </SectionReveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map((study) => (
              <div key={study.id} className="min-w-0 flex-[0_0_100%] px-2">
                <article className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-dark-elevated md:flex-row">
                  <div className="h-48 w-full shrink-0 md:h-auto md:w-[280px]">
                    <PatternTile className="h-full w-full" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                        {study.tag}
                      </p>
                      <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                        {study.title}
                      </h3>
                      <p className="flex items-center gap-2 text-lg font-bold text-white">
                        <span className="text-2xl" aria-hidden>
                          ⚡
                        </span>
                        {study.brand}
                      </p>
                    </div>
                    <Button variant="ghost" href={links.caseStudy(study.id)} className="mt-6 w-full md:w-auto">
                      READ MORE
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
              aria-label="Previous case study"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/30",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
              aria-label="Next case study"
            >
              →
            </button>
          </div>
          <LinkArrow href={links.caseStudies} className="hidden sm:inline-flex">
            VIEW ALL
          </LinkArrow>
        </div>
      </Container>
    </section>
  );
}
