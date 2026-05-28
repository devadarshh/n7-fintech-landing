import { CheckIcon } from "./icons";
import { cn } from "@/lib/utils";

export function CheckListItem({
  children,
  className,
  bright = false,
}: {
  children: React.ReactNode;
  className?: string;
  bright?: boolean;
}) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066ff]">
        <CheckIcon />
      </span>
      <span
        className={cn(
          "text-sm leading-relaxed md:text-[15px]",
          bright ? "text-white/95" : "text-text-muted",
        )}
      >
        {children}
      </span>
    </li>
  );
}
