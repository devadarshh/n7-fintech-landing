import Image from "next/image";
import { cn } from "@/lib/utils";
import { n7Assets } from "@/data/n7Assets";

const phoneScreens = {
  dashboard: { src: n7Assets.phone.home, w: 1132, h: 2109 },
  chart: { src: n7Assets.phone.transactions, w: 788, h: 1704 },
  profile: { src: n7Assets.phone.profile, w: 788, h: 1704 },
} as const;

export function PhoneMockup({
  variant = "dashboard",
  className,
}: {
  variant?: keyof typeof phoneScreens;
  className?: string;
}) {
  const screen = phoneScreens[variant];

  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] shrink-0 rounded-[2.5rem] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] p-2 shadow-[0_32px_64px_rgba(0,0,0,0.35)] md:w-[280px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[2rem] bg-[#e8e8e8]">
        <Image
          src={screen.src}
          alt={
            variant === "profile"
              ? "Mobile banking profile screen"
              : variant === "chart"
                ? "Mobile banking transactions screen"
                : "Mobile banking home screen"
          }
          width={screen.w}
          height={screen.h}
          className="h-auto w-full"
          sizes="(max-width: 768px) 260px, 280px"
        />
      </div>
    </div>
  );
}
