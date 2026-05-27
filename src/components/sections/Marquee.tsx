import { StarIcon } from "@/components/ui/icons";

const items = [
  { type: "text", text: "Say" },
  { type: "brand", text: "N7" },
  { type: "emoji", text: "👋" },
  { type: "text", text: "to the new way of banking" },
  { type: "star" },
  { type: "brand", text: "CB7" },
  { type: "star" },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => {
        if (item.type === "star") {
          return (
            <StarIcon
              key={i}
              className="mx-6 h-5 w-5 shrink-0 text-slate-400 md:mx-8 md:h-6 md:w-6 lg:h-7 lg:w-7"
            />
          );
        }
        if (item.type === "brand") {
          return (
            <span
              key={i}
              className="mx-3 shrink-0 text-2xl font-bold tracking-tight text-[#0066ff] md:mx-4 md:text-3xl lg:text-[2.25rem]"
            >
              {item.text}
            </span>
          );
        }
        if (item.type === "emoji") {
          return (
            <span key={i} className="mx-2 shrink-0 text-3xl leading-none md:text-4xl lg:text-[2.5rem]">
              {item.text}
            </span>
          );
        }
        return (
          <span
            key={i}
            className="mx-3 shrink-0 text-xl font-semibold tracking-tight text-slate-900 md:mx-4 md:text-2xl lg:text-[1.75rem]"
          >
            {item.text}
          </span>
        );
      })}
    </>
  );
}

export function Marquee() {
  return (
    <section
      className="overflow-hidden border-y border-slate-200/70 bg-[#f5f7fa] py-8 md:py-10 lg:min-h-[88px] lg:py-11"
      aria-label="Brand marquee"
    >
      <div className="marquee-wrapper items-center whitespace-nowrap">
        <div className="flex shrink-0 items-center px-8 md:px-12">
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-8 md:px-12" aria-hidden>
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-8 md:px-12" aria-hidden>
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-8 md:px-12" aria-hidden>
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
