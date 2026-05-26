import { PatternTile } from "./icons";
import { Button } from "./Button";
import type { Insight } from "@/data/insights";

export function InsightCard({
  insight,
  variant = "compact",
}: {
  insight: Insight;
  variant?: "featured" | "compact";
}) {
  if (variant === "featured") {
    return (
      <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-dark-elevated md:flex-row">
        <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-[200px]">
          <PatternTile className="h-full w-full" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
              {insight.tag}
            </p>
            <h3 className="mb-3 text-lg font-semibold leading-snug text-white md:text-xl">
              {insight.title}
            </h3>
            <p className="text-sm text-text-muted">
              {insight.author} {insight.date}
            </p>
          </div>
          <Button variant="ghost" className="mt-6 w-fit">
            READ MORE
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-bg-dark-elevated p-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
        {insight.tag}
      </p>
      <h3 className="mb-3 flex-1 text-base font-semibold leading-snug text-white">{insight.title}</h3>
      <p className="mb-4 text-sm text-text-muted">
        {insight.author} {insight.date}
      </p>
      <Button variant="ghost" className="w-fit">
        READ MORE
      </Button>
    </article>
  );
}
