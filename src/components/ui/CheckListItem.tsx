import { CheckIcon } from "./icons";
import { cn } from "@/lib/utils";

export function CheckListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066ff]">
        <CheckIcon />
      </span>
      <span className="text-sm leading-relaxed text-text-muted md:text-[15px]">{children}</span>
    </li>
  );
}
