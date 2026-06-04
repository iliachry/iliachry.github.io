/* ============================================
   CONTENT DATA — Research
   ============================================
   EDIT: Update research themes, PhD details, collaborations.
*/

export interface ResearchTheme {
  title: string;
  description: string;
  topics: string[];
}

export interface Collaboration {
  institution: string;
  role: string;
  focus: string[];
}

export const phd = {
  title: "A Metaverse Architecture for Wireless Communications Systems",
  institution: "University of Thessaly",
  status: "PhD Candidate",
  description:
    "Investigating how metaverse technologies — digital twins, XR, and AI — can be integrated into wireless communication systems to enable real-time monitoring, simulation, and optimization of network infrastructure.",
  areas: [
    "Extended Reality",
    "Digital Twins",
    "Intelligent Reflecting Surfaces",
    "Spiking Neural Networks",
    "Geometric Algebra",
    "Wireless Communications",
  ],
};

export const researchThemes: ResearchTheme[] = [
  {
    title: "Hydroinformatics & Flood Simulation",
    description:
      "Building digital twin systems for urban water infrastructure. Combining real-time sensor data, hydrological models, and geospatial visualization to create decision-support tools for flood risk management.",
    topics: [
      "Real-time hydrological modeling",
      "Geospatial data visualization",
      "Sensor-to-simulation pipelines",
      "Urban water digital twins",
    ],
  },
  {
    title: "Spatial Computing & Extended Reality",
    description:
      "Designing immersive interfaces for complex systems. Research spans VR/AR/MR interaction design, networked spatial computing, and the application of geometric algebra to efficient VR transformation handling.",
    topics: [
      "VR/AR interaction design",
      "Networked multi-user XR",
      "Geometric algebra for 3D",
      "Spatial computing architectures",
    ],
  },
  {
    title: "AI & Machine Learning Systems",
    description:
      "From reinforcement learning policy optimization to CNN-based surgical assessment, building ML systems that move beyond notebooks into production-grade deployment across diverse domains.",
    topics: [
      "Reinforcement learning",
      "Computer vision",
      "Spiking neural networks",
      "ML for wireless systems",
      "Production ML architecture",
    ],
  },
  {
    title: "Digital Twins & IoT",
    description:
      "Creating accurate virtual representations of physical systems for monitoring, prediction, and optimization. Integrating IoT sensor networks with simulation engines and intelligent visualization layers.",
    topics: [
      "Digital twin architecture",
      "IoT sensor integration",
      "Predictive modeling",
      "Edge computing",
    ],
  },
  {
    title: "Wireless Communications",
    description:
      "Research on intelligent reflecting surfaces, low-complexity signal processing schemes, and the application of digital twins and AI to next-generation wireless network optimization.",
    topics: [
      "Intelligent Reflecting Surfaces",
      "5G/6G optimization",
      "Signal processing",
      "Network digital twins",
    ],
  },
];

export const collaborations: Collaboration[] = [
  {
    institution: "National Technical University of Athens (NTUA)",
    role: "Full-Stack Developer",
    focus: [
      "Digital twin development for water systems",
      "Hydroinformatics visualization",
      "Flood simulation platforms",
    ],
  },
  {
    institution: "Centre for Research and Technology Hellas (CERTH/ITI)",
    role: "Lead ML & XR Engineer",
    focus: [
      "ExpertAssist AR toolkit for construction industry",
      "OCR for Greek documents",
      "EU-funded research project deliverables",
      "Technical Lead of VARLAB XR team",
    ],
  },
  {
    institution: "University of Athens (UoA)",
    role: "Unity Developer",
    focus: [
      "Multiplayer VR via WebRTC",
      "Virtual museum applications",
      "Cultural heritage digitization",
    ],
  },
  {
    institution: "Aristotle University of Thessaloniki (AUTH)",
    role: "Software Engineer",
    focus: [
      "Signal processing for health monitoring",
      "VR for systems thinking education",
      "Biometric sensing in Unity",
    ],
  },
  {
    institution: "University of Cyprus (UCY)",
    role: "Research Scientist",
    focus: [
      "ML for communication systems",
      "IEEE conference publications",
      "International research exchange",
    ],
  },
  {
    institution: "Democritus University of Thrace (DUTH)",
    role: "Research Scientist",
    focus: [
      "AI and XR for systems thinking education",
      "Interdisciplinary research",
    ],
  },
];

export const teaching = {
  institution: "Mediterranean College · University of Derby",
  role: "Accredited Lecturer",
  period: "Oct 2024 – Present",
  program: "BSc Computer Games Programming",
  courses: [
    "Computer Graphics",
    "Virtual Environment Development",
    "Game Behavior",
    "Game Development",
  ],
  supervision: [
    "Game development final year projects",
    "Unity ML Agents research projects",
    "Blockchain in gaming",
  ],
};
