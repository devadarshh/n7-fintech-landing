import { SolutionIcon } from "./icons";
import { LinkArrow } from "./Button";
import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="group relative border-b border-white/10 py-10 first:pt-0 last:border-b-0">
      {solution.tag && (
        <span className="absolute right-0 top-10 rounded border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted">
          {solution.tag}
        </span>
      )}
      <div className="icon-glow mb-6 inline-flex text-accent-cyan">
        <SolutionIcon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">{solution.title}</h3>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
        {solution.description}
      </p>
      <LinkArrow>LEARN MORE</LinkArrow>
    </article>
  );
}
