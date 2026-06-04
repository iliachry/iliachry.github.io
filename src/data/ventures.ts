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
      "A metaverse studio building solutions for the 3D internet. Projects included VR simulators for learning electric circuits, MR gaming with Kaizen/Betano, digital twin software for wireless communication systems, and participation in EU open call consortia.",
    role: "Founder & CEO/CTO · Nov 2022 – Sep 2025",
    status: "building",
    domains: [
      "Digital Twins",
      "XR Training",
      "Immersive Experiences",
      "Industry 4.0",
      "Cultural Heritage",
    ],
    url: "https://metatopia.gr",
    highlights: [
      "Operated across Thessaloniki and Nicosia",
      "Built VR training simulators and MR gaming platforms",
      "Delivered digital twins for wireless communication systems",
      "Participated in EU-funded research consortia",
    ],
  },
  {
    slug: "pestview",
    name: "PestView",
    tagline: "All-in-one SaaS & IoT platform for professional pest control",
    description:
      "A cloud-based pest control management platform for scheduling appointments, monitoring pest activity, and utilizing operational data. Interactive floor-plan device tracking with automated client reporting.",
    role: "Co-Founder & CTO · Dec 2024 – Present",
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
    slug: "quimaxr",
    name: "QuimaXR",
    tagline: "XR distribution platform for immersive cinema",
    description:
      "An XR application offering immersive cinema experiences that deliver novel perspectives and storytelling approaches through 360° and volumetric content distribution.",
    role: "Co-Founder & CTO · Sep 2024 – Sep 2025",
    status: "building",
    domains: ["Extended Reality", "Immersive Cinema", "Content Distribution"],
    highlights: [
      "Immersive cinema experiences with novel perspective storytelling",
      "360° and volumetric content playback pipeline",
      "XR distribution infrastructure for cultural venues",
    ],
  },
  {
    slug: "poetics",
    name: "Poetics",
    tagline: "The next generation of cinema through immersive VR curation",
    description:
      "An immersive cinema start-up and platform co-founded with Byron Chrysovergis that transforms museums, galleries, and cultural festivals into pop-up VR cinemas, bringing curated 360°, VR180°, and volumetric films to the public.",
    role: "Co-Founder & CTO",
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
