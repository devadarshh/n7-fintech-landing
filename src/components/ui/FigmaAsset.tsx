import Image from "next/image";
import { cn } from "@/lib/utils";

type FigmaAssetProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Renders a Figma export at its native aspect ratio, scaled via CSS width */
export function FigmaAsset({
  src,
  width,
  height,
  alt,
  className,
  priority = false,
}: FigmaAssetProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-full", className)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
