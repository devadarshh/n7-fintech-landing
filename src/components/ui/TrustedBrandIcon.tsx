export type TrustedBrandId =
  | "shells"
  | "smartfinder"
  | "zoomerr"
  | "artvenue"
  | "kontrastr"
  | "wavesmarathon";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "currentColor",
  "aria-hidden": true as const,
};

export function TrustedBrandIcon({ brand }: { brand: TrustedBrandId }) {
  switch (brand) {
    case "shells":
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="9" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M5 4.5 L7.5 7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case "smartfinder":
      return (
        <svg {...iconProps}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2 L15 5.5 V11.5 L9 16 L3 11.5 V5.5 Z M9 6.25 L11.75 8.75 L9 12.75 L6.25 8.75 Z"
          />
        </svg>
      );
    case "zoomerr":
      return (
        <svg {...iconProps}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 9 A7 7 0 1 1 2 9 A7 7 0 1 1 16 9 Z M10.75 4.75 L7.25 9 H9.75 L7.75 13.25 L11.25 9 H8.75 Z"
          />
        </svg>
      );
    case "artvenue":
      return (
        <svg {...iconProps}>
          <rect x="3" y="2" width="2.5" height="14" rx="0.5" transform="rotate(-28 4.25 9)" />
          <rect x="7.75" y="2" width="2.5" height="14" rx="0.5" transform="rotate(-28 9 9)" />
          <rect x="12.5" y="2" width="2.5" height="14" rx="0.5" transform="rotate(-28 13.75 9)" />
        </svg>
      );
    case "kontrastr":
      return (
        <svg {...iconProps}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 3 H14 V15 H4 V3 Z M4 3 A6 6 0 0 0 4 15 Z"
          />
        </svg>
      );
    case "wavesmarathon":
      return (
        <svg {...iconProps}>
          <rect x="2" y="8" width="2" height="7" rx="0.5" />
          <rect x="5.5" y="5" width="2" height="10" rx="0.5" />
          <rect x="9" y="3" width="2" height="12" rx="0.5" />
          <rect x="12.5" y="6" width="2" height="9" rx="0.5" />
          <rect x="16" y="9" width="2" height="6" rx="0.5" />
        </svg>
      );
    default:
      return null;
  }
}
