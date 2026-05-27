import { links } from "./links";

export const navLinks = [
  { label: "SOLUTIONS", hasDropdown: true, href: links.solutions },
  { label: "RESOURCES", hasDropdown: true, href: links.resources },
  { label: "ABOUT US", hasDropdown: false, href: links.about },
] as const;
