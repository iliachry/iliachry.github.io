/* ============================================
   CONTENT DATA — Achievements
   ============================================
   EDIT: Add new achievements, update details.
*/

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  location: string;
  category: "award" | "recognition" | "fellowship" | "patent" | "milestone";
}

export const achievements: Achievement[] = [
  {
    title: "Demo at ICMLCN",
    detail: "Digital Twin & Spiking RL research presentation",
    year: "2025",
    location: "Barcelona",
    category: "recognition",
  },
  {
    title: "Talk at FOSSCOMM 2024",
    detail: "Open source technology conference presentation",
    year: "2024",
    location: "Greece",
    category: "recognition",
  },
  {
    title: "AI, Cloud & Modern Workplace Conference",
    detail: "Invited speaker on AI and spatial computing",
    year: "2024",
    location: "International",
    category: "recognition",
  },
  {
    title: "Meta Presence Platform Hackathon",
    detail: "Participant in Meta's XR hackathon",
    year: "2023",
    location: "London",
    category: "milestone",
  },
  {
    title: "Poster at ACM SIGGRAPH",
    detail: "Geometric algebra for networked VR",
    year: "2022",
    location: "Vancouver",
    category: "recognition",
  },
  {
    title: "Keras Official Implementation",
    detail: "PPO reinforcement learning example, code-reviewed by François Chollet",
    year: "2021",
    location: "Global",
    category: "milestone",
  },
  {
    title: "1st Place, Cyprus Science Communication",
    detail: "National science communication competition winner",
    year: "2019",
    location: "Cyprus",
    category: "award",
  },
  {
    title: "Marie Skłodowska-Curie Fellowship",
    detail: "Prestigious European research fellowship",
    year: "2019",
    location: "Europe",
    category: "fellowship",
  },
  {
    title: "Chief of General Staff Commendation",
    detail: "Recognition for VR training innovation during military service",
    year: "2019",
    location: "Greece",
    category: "recognition",
  },
  {
    title: "U.S. Patent Holder",
    detail: "Patent for VR-based behavioral analysis technology",
    year: "2018",
    location: "USA",
    category: "patent",
  },
  {
    title: "University of Hong Kong Global Competition — 3rd Place",
    detail: "International technology competition",
    year: "2017",
    location: "Hong Kong",
    category: "award",
  },
  {
    title: "Microsoft Imagine Cup — World Champion",
    detail: "1st Place with Team AMANDA — VR/AR anti-bullying platform ($50,000 prize)",
    year: "2016",
    location: "Seattle",
    category: "award",
  },
  {
    title: "Microsoft Ignite Conference",
    detail: "AMANDA project presentation at Microsoft's flagship conference",
    year: "2016",
    location: "Atlanta",
    category: "recognition",
  },
  {
    title: "Rector's Excellence Award — AUTH",
    detail: "Multiple excellence awards from Aristotle University of Thessaloniki",
    year: "2016–2018",
    location: "Greece",
    category: "award",
  },
];

export const getFeaturedAchievements = () =>
  achievements.filter(
    (a) =>
      a.category === "award" ||
      a.category === "fellowship" ||
      a.category === "patent"
  );
