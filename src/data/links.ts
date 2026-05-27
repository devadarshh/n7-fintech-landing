/** Placeholder URLs for demo / assignment — not real destinations. */
export function fakeLink(path: string): string {
  const slug = path.replace(/^\//, "").replace(/\s+/g, "-").toLowerCase();
  return `https://example.com/${slug}`;
}

export const links = {
  home: "/",
  requestDemo: fakeLink("request-demo"),
  contact: fakeLink("contact"),
  solutions: fakeLink("solutions"),
  resources: fakeLink("resources"),
  about: fakeLink("about"),
  insights: fakeLink("insights"),
  caseStudies: fakeLink("case-studies"),
  learnMore: fakeLink("learn-more"),
  linkedin: fakeLink("social/linkedin"),
  twitter: fakeLink("social/x"),
  solution: (id: string) => fakeLink(`solutions/${id}`),
  insight: (id: string) => fakeLink(`insights/${id}`),
  caseStudy: (id: string) => fakeLink(`case-studies/${id}`),
} as const;
