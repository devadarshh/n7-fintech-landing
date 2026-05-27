export type SolutionIconType = "swirl" | "clover" | "infinity" | "star" | "grid" | "layers";

export interface Solution {
  id: string;
  title: string;
  description: string;
  tag?: string;
  icon: SolutionIconType;
}

export const solutions: Solution[] = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    icon: "swirl",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    icon: "clover",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    id: "open-banking",
    title: "Open Banking",
    icon: "infinity",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    icon: "star",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    icon: "grid",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: "layers",
    description:
      "Transform legacy operations into cloud-native, branchless, and paperless banking with scalable digital transformation",
  },
];
