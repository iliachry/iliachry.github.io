/* ============================================
   CONTENT DATA — Ventures
   ============================================
   EDIT: Update venture details, add new ventures.
*/

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  status: "active" | "building" | "concept";
  domains: string[];
  url?: string;
  highlights: string[];
}

export const ventures: Venture[] = [
  {
    slug: "metatopia",
    name: "Metatopia",
    tagline: "Greece's first Metaverse Studio",
    description:
      "Building spatial computing infrastructure for industry, culture, and education. Metatopia designs and delivers digital twins, XR training platforms, immersive educational experiences, and virtual exhibitions — turning complex physical environments into interactive, understandable digital systems.",
    role: "Co-Founder & CEO/CTO",
    status: "active",
    domains: [
      "Digital Twins",
      "XR Training",
      "Immersive Experiences",
      "Industry 4.0",
      "Cultural Heritage",
    ],
    url: "https://metatopia.gr",
    highlights: [
      "Operating across Thessaloniki and Nicosia",
      "Built production digital twins for water infrastructure",
      "Delivered XR training systems for defense and healthcare",
      "Virtual museum and cultural heritage preservation projects",
    ],
  },
  {
    slug: "pestview",
    name: "PestView",
    tagline: "All-in-one SaaS & IoT platform for professional pest control",
    description:
      "A comprehensive SaaS platform and IoT-integrated operational system designed specifically for the pest control industry, streamlining appointment scheduling, interactive floor-plan device tracking, and automated client reporting.",
    role: "Co-Founder & CTO (via Metatopia)",
    status: "active",
    domains: ["SaaS", "IoT", "Operations Management", "PropTech"],
    url: "https://pestview.io",
    highlights: [
      "IoT-enabled bait station and trap tracking with interactive floor plans",
      "Custom multi-view scheduling calendar with role-specific views for field techs",
      "Customer transparency portals providing real-time data & reporting",
    ],
  },
  {
    slug: "poetics",
    name: "Poetics",
    tagline: "The next generation of cinema through immersive VR curation",
    description:
      "An immersive cinema start-up and platform co-founded with Byron Chrysovergis that transforms museums, galleries, and cultural festivals into pop-up VR cinemas, bringing curated 360°, VR180°, and volumetric films to the public.",
    role: "Co-founder & CTO",
    status: "active",
    domains: ["Immersive Cinema", "Virtual Reality", "ArtTech", "Culture"],
    url: "https://poeticsvr.com",
    highlights: [
      "Selected for the Cannes Immersive Market Curators Network at the 79th Cannes Film Festival (2026)",
      "Developed mobile VR cinema infrastructure for pop-up cultural exhibitions",
      "Hosts the Poetics VR Film Festival to showcase international immersive installation works",
    ],
  },
];

export const getActiveVentures = () =>
  ventures.filter((v) => v.status === "active");
export const getBuildingVentures = () =>
  ventures.filter((v) => v.status === "building");
