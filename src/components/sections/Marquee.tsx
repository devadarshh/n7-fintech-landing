import { StarIcon } from "@/components/ui/icons";

const items = [
  { type: "brand", text: "N7" },
  { type: "star" },
  { type: "text", text: "Say" },
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
            <StarIcon key={i} className="mx-4 h-4 w-4 shrink-0 text-blue-600" />
          );
        }
        if (item.type === "brand") {
          return (
            <span key={i} className="mx-2 shrink-0 text-lg font-bold text-blue-600 md:text-xl">
              {item.text}
            </span>
          );
        }
        if (item.type === "emoji") {
          return (
            <span key={i} className="mx-1 shrink-0 text-xl">
              {item.text}
            </span>
          );
        }
        return (
          <span key={i} className="mx-2 shrink-0 text-sm font-medium text-[#0a0a0f] md:text-base">
            {item.text}
          </span>
        );
      })}
    </>
  );
}

export function Marquee() {
  return (
    <section className="overflow-hidden bg-white py-5" aria-label="Brand marquee">
      <div className="marquee-wrapper items-center whitespace-nowrap">
        <div className="flex shrink-0 items-center px-4">
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-4" aria-hidden>
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-4" aria-hidden>
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center px-4" aria-hidden>
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
