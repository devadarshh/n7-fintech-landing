import { cn } from "@/lib/utils";
import { CONTAINER_CLASS } from "@/lib/constants";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(CONTAINER_CLASS, className)}>{children}</div>;
}
