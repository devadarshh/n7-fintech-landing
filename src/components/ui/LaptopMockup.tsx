import { cn } from "@/lib/utils";
import { FigmaAsset } from "@/components/ui/FigmaAsset";
import { n7Assets } from "@/data/n7Assets";

type LaptopMockupProps = {
  className?: string;
  align?: "left" | "right";
  children?: React.ReactNode;
};

export function LaptopMockup({ className, align = "right", children }: LaptopMockupProps) {
  return (
    <div className={cn("relative w-full max-w-[900px] lg:max-w-none", className)}>
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[#0066ff]/12 blur-3xl md:-inset-10"
        aria-hidden
      />
      <div
        className={cn(
          "relative w-full",
          align === "right" && "lg:translate-x-[4%]",
          align === "left" && "lg:-translate-x-[3%]",
        )}
      >
        <div className="rounded-t-[14px] border-2 border-[#0066ff]/55 bg-transparent p-1.5 pb-0">
          <div className="overflow-hidden rounded-t-[10px] bg-[#0a1422]">
            {children ?? (
              <FigmaAsset
                src={n7Assets.dashboard.aml}
                width={n7Assets.dashboard.amlWidth}
                height={n7Assets.dashboard.amlHeight}
                alt="AML Dashboard on laptop screen"
                className="rounded-t-[8px]"
              />
            )}
          </div>
        </div>
        <div
          className="mx-auto h-3 w-[108%] rounded-b-[14px] border-2 border-t-0 border-[#0066ff]/55"
          aria-hidden
        />
        <div
          className="mx-auto mt-1.5 h-[3px] w-[38%] rounded-full bg-gradient-to-r from-transparent via-[#0066ff]/70 to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}
