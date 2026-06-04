/* ============================================
   CONTENT DATA — Publications
   ============================================
   EDIT: Add DOIs, URLs, and new publications.
*/

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "patent" | "preprint" | "article" | "software";
  doi?: string;
  url?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    title:
      "ExpertAssist: An “On-the-Job” augmented reality toolkit for assistance in the construction industry",
    authors:
      "I. Chrysovergis, E. E. Lithoxoidou, D. Pallantzas, A. Tsakiris, D. Ioannidis, D. Tzovaras",
    venue: "Computers & Education: X Reality",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.cexr.2026.100155",
    url: "https://doi.org/10.1016/j.cexr.2026.100155",
    tags: ["Augmented Reality", "Construction Industry", "Human-Computer Interaction", "AR Toolkit"],
  },
  {
    title: "Metaverse Framework for Wireless Systems Management",
    authors: "I. Chrysovergis, A.-A. A. Boulogeorgos, T. A. Tsiftsis, D. Niyato",
    venue: "IEEE Internet of Things Magazine",
    year: 2026,
    type: "journal",
    doi: "10.1109/MIOT.2026.3680843",
    url: "https://doi.org/10.1109/MIOT.2026.3680843",
    tags: ["Metaverse", "Wireless Systems", "Framework"],
  },
  {
    title:
      "A Digital Twin Based Reconfigurable Intelligent Surface Phase Adaptation Using Spiking Reinforcement Learning Policy Optimization",
    authors:
      "I. Chrysovergis, S. E. Trevlakis, D. Kleitsas, A.-A. A. Boulogeorgos, T. A. Tsiftsis, D. Niyato",
    venue: "IEEE International Conference on Machine Learning for Communication and Networking (ICMLCN)",
    year: 2025,
    type: "conference",
    doi: "10.1109/ICMLCN64995.2025.11140517",
    url: "https://doi.org/10.1109/ICMLCN64995.2025.11140517",
    tags: ["Digital Twins", "Reinforcement Learning", "Wireless Communications"],
  },
  {
    title:
      "Less Is More: Efficient Networked VR Transformation Handling Using Geometric Algebra",
    authors:
      "M. Kamarianakis, I. Chrysovergis, N. Lydatakis, M. Kentros, G. Papagiannakis",
    venue: "Advances in Applied Clifford Algebras",
    year: 2022,
    type: "journal",
    doi: "10.1007/s00006-022-01253-9",
    url: "https://doi.org/10.1007/s00006-022-01253-9",
    tags: ["Geometric Algebra", "VR Networking", "Optimization"],
  },
  {
    title:
      "Virtual Reality Medical Training for COVID-19 Swab Testing and Proper Handling of Personal Protective Equipment: Development and Usability",
    authors:
      "P. Zikas, M. Kamarianakis, N. Lydatakis, M. Kentros, I. Chrysovergis, G. Papagiannakis, et al.",
    venue: "Frontiers in Virtual Reality",
    year: 2022,
    type: "journal",
    doi: "10.3389/frvir.2021.740197",
    url: "https://doi.org/10.3389/frvir.2021.740197",
    tags: ["Medical VR", "COVID-19", "PPE Training", "Usability Evaluation"],
  },
  {
    title:
      "MAGES 4.0: Accelerating the world's transition to medical VR training",
    authors: "P. Zikas, N. Lydatakis, I. Chrysovergis, M. Kamarianakis, M. Kentros, G. Papagiannakis, et al.",
    venue: "IEEE Computer Graphics and Applications",
    year: 2022,
    type: "journal",
    tags: ["Medical VR", "Training Systems", "Healthcare"],
  },
  {
    title: "Assessing unconstrained surgical cuttings in VR using CNNs",
    authors: "I. Chrysovergis, G. Papagiannakis, et al.",
    venue: "arXiv preprint",
    year: 2022,
    type: "preprint",
    tags: ["CNN", "Surgical Training", "VR Assessment"],
  },
  {
    title: "Recording and replaying psychomotor user actions in VR",
    authors: "I. Chrysovergis, M. Kamarianakis, G. Papagiannakis",
    venue: "ACM SIGGRAPH 2022 Posters",
    year: 2022,
    type: "conference",
    tags: ["VR", "Psychomotor", "User Interaction"],
  },
  {
    title:
      "Low-complexity random rotation-based schemes for intelligent reflecting surfaces",
    authors: "I. Chrysovergis, A.-A. A. Boulogeorgos, T. A. Tsiftsis",
    venue: "IEEE Transactions on Wireless Communications",
    year: 2020,
    type: "journal",
    doi: "10.1109/TWC.2020.3035888",
    url: "https://doi.org/10.1109/TWC.2020.3035888",
    tags: ["IRS", "Signal Processing", "Wireless"],
  },
  {
    title:
      "Random rotation-based low-complexity schemes for intelligent reflecting surfaces",
    authors: "I. Chrysovergis, A.-A. A. Boulogeorgos, T. A. Tsiftsis",
    venue: "IEEE Personal, Indoor, and Mobile Radio Communications (PIMRC)",
    year: 2020,
    type: "conference",
    tags: ["IRS", "Signal Processing", "Wireless"],
  },
  {
    title:
      "User-perceived reusability estimation based on analysis of software repositories",
    authors: "I. Chrysovergis, A. Ampatzoglou, A. Chatzigeorgiou, P. Avgeriou",
    venue: "IEEE Workshop on Machine Learning Techniques for Software Quality Evaluation (MaLTeSQuE)",
    year: 2018,
    type: "conference",
    tags: ["Software Engineering", "Code Reusability", "ML"],
  },
  {
    title:
      "Smartphone-based Biofeedback Games for Shielding of Immune System against COVID-19",
    authors: "A. Bamparopoulos, I. Chrysovergis, et al.",
    venue: "ACM International Conference on Software Development and Technologies for Enhancing Accessibility and Fighting Info-exclusion",
    year: 2020,
    type: "conference",
    tags: ["Mobile Health", "COVID-19", "Gamification"],
  },
  {
    title: "Using virtual reality for behavioral analysis",
    authors: "I. Chrysovergis et al.",
    venue: "U.S. Patent Office",
    year: 2018,
    type: "patent",
    tags: ["VR", "Behavioral Analysis", "Patent"],
  },
  {
    title:
      "Implementation of a Proximal Policy Optimization agent for CartPole",
    authors: "I. Chrysovergis",
    venue: "Keras Official Documentation",
    year: 2021,
    type: "software",
    url: "https://keras.io/examples/rl/ppo_cartpole/",
    tags: ["Reinforcement Learning", "PPO", "Keras", "Open Source"],
  },
];

export const getPublicationsByType = (type: Publication["type"]) =>
  publications.filter((p) => p.type === type);

export const getPublicationsByYear = () =>
  [...publications].sort((a, b) => b.year - a.year);
