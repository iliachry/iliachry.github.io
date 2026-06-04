/* ============================================
   CONTENT DATA — Projects / Case Studies
   ============================================
   EDIT: Update project details, add new projects, or reorder.
   Set `featured: true` to show on the homepage.
*/

export interface Project {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  methods: string[];
  outcome: string;
  impact: string;
  links: { label: string; url: string }[];
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: "flood-simulation-hydroinformatics",
    title: "Flood Simulation & Hydroinformatics Visualization",
    domain: "Hydroinformatics · Geospatial · Digital Twins",
    summary:
      "Building real-time flood simulation and visualization systems that transform complex hydrological data into actionable decision-support tools for urban water management, as part of the EU Horizon 2020 IMPETUS project.",
    problem:
      "Urban water systems are complex and opaque. Flood risk assessment requires integrating massive sensor networks, hydrological models, and geospatial data into interfaces that non-specialists can act on — in real time.",
    role: "Full-Stack Developer & Systems Architect at NTUA",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "WebGL",
      "Mapbox",
    ],
    methods: [
      "Hydrological modeling",
      "Real-time sensor integration",
      "Geospatial data processing",
      "Digital twin architecture",
      "Decision-support system design",
    ],
    outcome:
      "Developed a Regional Digital Twin for the Attica region, providing a comprehensive platform for urban water infrastructure enabling proactive maintenance and real-time flood risk assessment.",
    impact:
      "Deployed as part of the EU Horizon 2020 IMPETUS project across urban water networks, enabling municipalities to shift from reactive to predictive infrastructure management.",
    links: [
      { label: "UWMH Group (NTUA)", url: "https://uwmh.eu/" },
      { label: "IMPETUS Project", url: "https://impetus-project.eu/" },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "pestview",
    title: "PestView",
    domain: "SaaS · IoT · Operations Management",
    summary:
      "A comprehensive SaaS platform and IoT-integrated operational system designed for the pest control industry, automating scheduling and device tracking.",
    problem:
      "Pest control companies operate via fragmented legacy desktop systems or paper forms, creating massive administrative overhead and offering zero transparency or real-time status reporting to clients.",
    role: "Co-Founder & Chief Architect (via Metatopia)",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    methods: [
      "SaaS Architecture",
      "IoT Device Integration",
      "Interactive Floor-Plan Mapping",
      "Multi-tenant Database Design",
    ],
    outcome:
      "Designed and delivered the complete PestView cloud infrastructure, including custom multi-view calendar systems and client transparency portals.",
    impact:
      "Successfully launched in production, helping pest control operators transition to fully digitized, proactive, and IoT-driven management.",
    links: [{ label: "PestView.io", url: "https://pestview.io" }],
    featured: true,
    order: 2,
  },
  {
    slug: "poetics",
    title: "Poetics",
    domain: "Virtual Reality · Immersive Cinema · ArtTech",
    summary:
      "An immersive cinema platform and startup co-founded with Byron Chrysovergis that transforms galleries, museums, and festivals into pop-up VR cinemas.",
    problem:
      "High-quality immersive films and virtual reality art suffer from a massive distribution problem, rarely reaching audiences outside of major international film festival circuits.",
    role: "Co-founder & CTO",
    stack: ["Unity", "C#", "SteamVR", "Oculus SDK", "Volumetric Video"],
    methods: [
      "Immersive VR Curation",
      "Volumetric & 360° Playback Pipelines",
      "Pop-Up VR Cinema Engineering",
      "Multi-headset Synchronized Playback",
    ],
    outcome:
      "Built custom synchronized VR video playback software and portable screening setups, transforming cultural spaces into VR theaters.",
    impact:
      "Selected as the first Greek startup in the Cannes Immersive Market Curators Network (May 2026), showcasing international immersive works to general public audiences.",
    links: [{ label: "PoeticsVR", url: "https://poeticsvr.com" }],
    featured: true,
    order: 3,
  },
  {
    slug: "xr-digital-twin-systems",
    title: "XR & Digital Twin Systems",
    domain: "Extended Reality · Digital Twins · Industry 4.0",
    summary:
      "Designing and building immersive digital twin and XR training platforms that bridge virtual and physical environments for industry, defense, and healthcare.",
    problem:
      "Complex physical systems — from factory floors to surgical theaters — need spatial interfaces that allow operators to understand, train, and make decisions in context. Traditional 2D dashboards are insufficient.",
    role: "Co-Founder & CTO at Metatopia / Lead XR Engineer at CERTH",
    stack: [
      "Unity",
      "C#",
      "WebXR",
      "Meta SDK",
      "Photon Networking",
      "Azure",
      "Blender",
    ],
    methods: [
      "Spatial computing",
      "Real-time 3D rendering",
      "Multi-user networking",
      "Sensor-to-twin data pipelines",
      "VR/AR interaction design",
    ],
    outcome:
      "Built multiple production XR systems: military VR training (commended by Chief of General Staff), medical VR training (MAGES 4.0), virtual museums, and industrial digital twins.",
    impact:
      "Systems deployed in defense, healthcare, cultural heritage, and industrial training contexts across Greece and Cyprus.",
    links: [
      {
        label: "Metatopia",
        url: "https://metatopia.gr",
      },
    ],
    featured: true,
    order: 4,
  },
  {
    slug: "ai-ml-systems-architecture",
    title: "AI/ML Systems & Software Architecture",
    domain: "AI/ML · Software Engineering · Open Source",
    summary:
      "Architecting production AI/ML systems and contributing foundational implementations to the global ML community, including the official Keras PPO implementation.",
    problem:
      "Bridging the gap between research ML models and production-grade systems requires deep understanding of both algorithmic foundations and systems engineering. Most AI work stays in notebooks.",
    role: "Software Architect & ML Engineer",
    stack: [
      "Python",
      "TensorFlow/Keras",
      "PyTorch",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "REST/GraphQL",
    ],
    methods: [
      "Reinforcement learning",
      "Deep learning",
      "MLOps",
      "API design",
      "Systems architecture",
      "Software reusability analysis",
    ],
    outcome:
      "Authored the official Keras PPO implementation (code-reviewed by François Chollet), published on Hugging Face. Research on software reusability, CNN-based surgical assessment, and ML-optimized wireless communications.",
    impact:
      "Keras PPO example used globally as a reference implementation. Research contributions across IEEE and ACM venues.",
    links: [
      {
        label: "Keras PPO Implementation",
        url: "https://keras.io/examples/rl/ppo_cartpole/",
      },
      {
        label: "Hugging Face Model",
        url: "https://huggingface.co/keras-io/ppo-cartpole",
      },
    ],
    featured: true,
    order: 5,
  },
  {
    slug: "amanda-vr-empathy",
    title: "AMANDA — VR/AR Empathy Platform",
    domain: "Social Impact · VR/AR · Behavioral Science",
    summary:
      "Microsoft Imagine Cup World Champion (2016). A VR/AR platform that combats school bullying by immersing users in multiple perspectives and measuring empathy in real time.",
    problem:
      "Traditional anti-bullying programs lack emotional depth. Building genuine empathy requires experiencing situations from perspectives other than your own — something words alone cannot achieve.",
    role: "Co-Founder & Lead Developer, Team AMANDA",
    stack: ["Unity", "C#", "Oculus SDK", "Kinect SDK", "Signal Processing"],
    methods: [
      "VR immersion design",
      "Empathy measurement algorithms",
      "Biometric signal processing",
      "Multi-perspective narrative design",
    ],
    outcome:
      "Won 1st Place at Microsoft Imagine Cup World Championship in Seattle ($50,000). Secured a U.S. Patent for the VR behavioral analysis approach. Presented at Microsoft Ignite Conference.",
    impact:
      "Pioneered a new category of social-impact VR applications. Demonstrated that immersive technology can measurably shift empathic response.",
    links: [
      { label: "GitHub", url: "https://github.com/iliachry/AMANDA" },
    ],
    featured: false,
    order: 6,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getAllProjects = () =>
  projects.sort((a, b) => a.order - b.order);
