import type { SolutionIconType } from "@/data/solutions";

/** Figma N7 export paths (served from /public) */
export const n7Assets = {
  hero: {
    /** Figma composite: photo + glass cards (Rectangle export) */
    visual: "/images/hero-visual.png",
    visualWidth: 610,
    visualHeight: 380,
  },
  dashboard: {
    /** AML Dashboard (Mask group export) */
    aml: "/images/aml-dashboard.png",
    amlWidth: 632,
    amlHeight: 409,
  },
  phone: {
    home: "/n7/Home-4.png",
    transactions: "/n7/Transaction.png",
    profile: "/n7/Profile.png",
  },
  logo: "/n7/Vector-9.png",
  decorative: {
    corners: "/n7/Group.png",
    curves: "/n7/Vector-4.png",
  },
} as const;

/** White line-art icons exported from Figma */
export const solutionIconAssets: Partial<Record<SolutionIconType, string>> = {
  swirl: "/n7/Vector.png",
  clover: "/n7/Vector-1.png",
  infinity: "/n7/Vector-2.png",
};
