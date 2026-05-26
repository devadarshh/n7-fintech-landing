export interface Solution {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

export const solutions: Solution[] = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    description:
      "A complete cloud-based core banking system designed for modern financial institutions seeking agility and scale.",
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    description:
      "Digital banking out-of-the-box with seamless customer experience and operational excellence.",
  },
  {
    id: "open-banking",
    title: "Open Banking",
    description:
      "Connect with third-party providers through secure APIs and open banking standards.",
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    description:
      "Streamline loan applications from origination to approval with intelligent workflows.",
    tag: "NBFC",
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "End-to-end loan lifecycle management including disbursal, servicing, and collections.",
    tag: "NBFC",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Transform legacy operations into cloud-native, branchless, and paperless banking.",
  },
];
