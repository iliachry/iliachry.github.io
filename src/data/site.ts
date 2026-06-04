/* ============================================
   CONTENT DATA — Site Configuration
   ============================================
   EDIT: Update these values to customize your site.
   All site-wide metadata, social links, and contact info.
*/

export const siteConfig = {
  name: "Ilias Chrysovergis",
  shortName: "IC",
  title: "Ilias Chrysovergis — Researcher, Architect, Founder",
  description:
    "Software architect, researcher, and founder building intelligent spatial systems for the physical world. Working across hydroinformatics, AI, spatial computing, XR, digital twins, and full-stack systems.",
  url: "https://iliachry.gr",
  email: "iliachry@iliachry.gr",
  phone: "+30 698 629 30 42",
  location: "Thessaloniki, Greece",
  tagline:
    "Researcher, software architect, and founder building intelligent spatial systems for the physical world.",
  heroDescription:
    "I work at the intersection of hydroinformatics, AI, spatial computing, and systems architecture — bridging academic research and real product execution to turn complex real-world phenomena into understandable, actionable tools.",

  social: {
    github: "https://github.com/iliachry",
    linkedin: "https://linkedin.com/in/ilias-chrysovergis",
    twitter: "https://x.com/iliachry",
    scholar: "https://scholar.google.com/citations?user=x5Zq1-QAAAAJ",
  },

  // SEO & Social Preview
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Ilias Chrysovergis",
    image: "/images/og-image.png",
  },

  twitter: {
    handle: "@iliachry",
    cardType: "summary_large_image" as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
