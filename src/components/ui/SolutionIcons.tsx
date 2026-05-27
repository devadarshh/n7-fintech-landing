import Image from "next/image";
import type { SolutionIconType } from "@/data/solutions";
import { solutionIconAssets } from "@/data/n7Assets";

const ICON_SIZE = 40;

export function SolutionIconGraphic({ type }: { type: SolutionIconType }) {
  const asset = solutionIconAssets[type];

  if (asset) {
    return (
      <Image
        src={asset}
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="h-10 w-10 object-contain"
        aria-hidden
      />
    );
  }

  const stroke = "currentColor";
  const props = { stroke, strokeWidth: 1.5, fill: "none" };

  switch (type) {
    case "star":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" {...props} />
        </svg>
      );
    case "grid":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <rect x="8" y="8" width="10" height="10" {...props} />
          <rect x="22" y="8" width="10" height="10" {...props} />
          <rect x="8" y="22" width="10" height="10" {...props} />
          <rect x="22" y="22" width="10" height="10" {...props} />
        </svg>
      );
    case "layers":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <path d="M6 14 L20 6 L34 14 L20 22 Z" {...props} />
          <path d="M6 22 L20 30 L34 22" {...props} />
        </svg>
      );
    default:
      return null;
  }
}
