import type { TrustedBrandId } from "@/components/ui/TrustedBrandIcon";

export type TrustedBrand = {
  id: TrustedBrandId;
  name: string;
};

export const trustedBrands: TrustedBrand[] = [
  { id: "shells", name: "SHELLS" },
  { id: "smartfinder", name: "SmartFinder" },
  { id: "zoomerr", name: "Zoomerr" },
  { id: "artvenue", name: "ArtVenue" },
  { id: "kontrastr", name: "kontent" },
  { id: "wavesmarathon", name: "WAVE MARATHON" },
];
