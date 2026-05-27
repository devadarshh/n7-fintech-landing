import { links } from "@/data/links";
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
      <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-dark-elevated sm:flex-row">
        <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-[220px]">
          <PatternTile className="h-full w-full" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#00d1ff]">
              {insight.tag}
            </p>
            <h3 className="mb-3 text-lg font-semibold leading-snug text-white md:text-xl">
              {insight.title}
            </h3>
            <p className="text-sm text-text-muted">
              {insight.author} {insight.date}
            </p>
          </div>
          <Button variant="ghost" href={links.insight(insight.id)} className="mt-6 w-full sm:w-fit">
            READ MORE
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-bg-dark-elevated p-6">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#00d1ff]">
        {insight.tag}
      </p>
      <h3 className="mb-3 flex-1 text-base font-semibold leading-snug text-white">{insight.title}</h3>
      <p className="mb-4 text-sm text-text-muted">
        {insight.author} {insight.date}
      </p>
      <Button variant="ghost" href={links.insight(insight.id)} className="w-fit">
        READ MORE
      </Button>
    </article>
  );
}
