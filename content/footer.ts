export type FooterLinkGroup = {
  heading: string;
  links: readonly string[];
};

export const footerLinkGroups: readonly FooterLinkGroup[] = [
  {
    heading: "Browse",
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    heading: "",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    heading: "Platform",
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export type LegalLink = {
  label: string;
  href: string;
};

export const legalLinks: readonly LegalLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookies Settings", href: "#cookies" },
];
