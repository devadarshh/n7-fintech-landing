import { fakeLink, links } from "./links";

export const addresses = [
  {
    city: "London",
    text: "Linkla Infosystems Ltd – CB7, 28 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    text: "Linkla Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
  },
  {
    city: "Pune",
    text: "Linkla Infosystems Ltd – CB7, 14th Floor, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
  },
];

export type FooterLink = { label: string; href: string };

export const solutionLinks: FooterLink[] = [
  { label: "Core Banking CB7", href: fakeLink("solutions/core-banking-cb7") },
  { label: "Digital Banking N7", href: fakeLink("solutions/digital-banking-n7") },
  { label: "Open Banking", href: fakeLink("solutions/open-banking") },
  { label: "Loan Origination System", href: fakeLink("solutions/loan-origination") },
  { label: "Loan Management System", href: fakeLink("solutions/loan-management") },
  { label: "Digital Transformation", href: fakeLink("solutions/digital-transformation") },
];

export const bankingLinks: FooterLink[] = [
  { label: "About Us", href: links.about },
  { label: "Solutions", href: links.solutions },
  { label: "Contact", href: links.contact },
  { label: "Company", href: fakeLink("company") },
  { label: "Careers", href: fakeLink("careers") },
  { label: "Insights", href: links.insights },
  { label: "Core Team", href: fakeLink("core-team") },
  { label: "Brand Center", href: fakeLink("brand-center") },
];

export const socialLinks: FooterLink[] = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "X", href: links.twitter },
];
