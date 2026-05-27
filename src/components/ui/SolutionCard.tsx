import { links } from "@/data/links";
import { SolutionIconGraphic } from "./SolutionIcons";
import { LinkArrow } from "./Button";
import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="flex min-h-full flex-col">
      <div className="mb-6 flex h-10 shrink-0 items-center text-white">
        <SolutionIconGraphic type={solution.icon} />
      </div>
      {solution.tag ? (
        <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
          {solution.tag}
        </span>
      ) : null}
      <h3 className="mb-4 text-xl font-semibold leading-[1.25] text-white md:text-[1.375rem]">
        {solution.title}
      </h3>
      <p className="mb-6 flex-1 text-[15px] leading-[1.65] text-text-body">{solution.description}</p>
      <LinkArrow href={links.solution(solution.id)} className="mt-auto self-start">
        LEARN MORE
      </LinkArrow>
    </article>
  );
}
