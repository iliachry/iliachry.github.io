import type { Metadata } from "next";
import Image from "next/image";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";
import { teaching } from "@/data/research";

export const metadata: Metadata = {
  title: "About & Journey",
  description:
    "Ilias Chrysovergis — software architect, researcher, and founder working across hydroinformatics, AI, spatial computing, and startup engineering.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <AnimateIn className="md:col-span-4">
              <div className="relative aspect-[4/5] max-w-sm rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                <Image
                  src="/images/profile.jpeg"
                  alt="Ilias Chrysovergis"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </AnimateIn>

            <AnimateIn className="md:col-span-8" delay={0.1}>
              <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                Identity & Background
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6 text-balance">
                Engineer, researcher, builder, founder.
              </h1>
              <div className="space-y-4 text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>
                  I build systems that make complex physical phenomena understandable
                  and actionable. My work sits at the intersection of academic
                  research and real product execution — I care equally about the
                  science and the shipping.
                </p>
                <p>
                  Based in Greece, I work across hydroinformatics, AI, spatial
                  computing, extended reality, digital twins, and full-stack systems
                  architecture. I connect disciplines to solve
                  problems that no single field can address alone.
                </p>
                <p>
                  I co-founded Metatopia — sovereign infrastructure and spatial compute studio — and
                  I build products across XR, creative tech, and
                  decision-support systems. I&apos;m simultaneously a PhD candidate,
                  a university lecturer, and an engineer who has shipped production
                  code for defense, healthcare, water management, and open-source
                  ML frameworks used globally.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 font-mono">
                <a
                  href="/Ilias_Chrysovergis_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs sm:text-sm font-medium rounded hover:bg-zinc-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV (PDF)
                </a>
                <Button href="/contact" variant="secondary">
                  Get in touch →
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <SectionHeading label="Trajectory" title="Engineering & research journey" />

          <div className="max-w-3xl space-y-0 border-t border-zinc-800">
            {[
              {
                period: "Jun 2025 – Present",
                title: "Research Scientist — Democritus University of Thrace",
                detail:
                  "Researching how AI and XR can be leveraged for systems thinking education.",
              },
              {
                period: "Mar 2025 – Present",
                title: "Lecturer — International Hellenic University",
                detail:
                  "Teaching Augmented & Virtual Reality at the MSc in Smart Environmental Sustainability.",
              },
              {
                period: "Nov 2024 – Present",
                title: "Lead Full-Stack Developer — NTUA",
                detail:
                  "Building digital twin systems for urban water infrastructure in the UWMH unit. Hydroinformatics visualization and flood simulation platforms.",
              },
              {
                period: "Oct 2024 – Sep 2025",
                title: "Lecturer — Mediterranean College · University of Derby",
                detail:
                  "Taught Computer Graphics, Virtual Environment Development, Game Behavior, and Game Development. Supervised six final year projects in ML, blockchain, and game development.",
              },
              {
                period: "Nov 2022 – Sep 2025",
                title: "Founder & CEO/CTO — Metatopia",
                detail:
                  "Built sovereign infrastructure studio. Delivered VR training simulators, MR gaming, digital twins for wireless systems, and EU open call consortia across Thessaloniki and Nicosia.",
              },
              {
                period: "Apr 2022 – Oct 2024",
                title: "Lead ML & XR Engineer — CERTH/ITI",
                detail:
                  "Led development of ExpertAssist AR toolkit for construction. Worked on OCR for Greek documents. Wrote deliverables for Greek and EU funded projects. Technical Lead of VARLAB XR team.",
              },
              {
                period: "Sep 2020 – Sep 2022",
                title: "Software Engineer (ML & VR) — ORamaVR",
                detail:
                  "VR surgical simulation, multiplayer integration, cloud data operations, 3D session recording & replay SDK, supervised DL algorithm for surgical assessment. Co-authored four papers.",
              },
              {
                period: "Apr 2020 – Aug 2020",
                title: "Machine Learning Engineer — AUTH",
                detail:
                  "Developed DL algorithms for gyroscope/accelerometer eating behavior detection and real-time breathing rate estimation from audio signals.",
              },
              {
                period: "Sep 2019 – Mar 2020",
                title: "Research Scientist — University of Cyprus",
                detail:
                  "Marie Skłodowska-Curie Fellow. Research on fundamental limits of intelligent reflecting surfaces and ML for wireless communications.",
              },
              {
                period: "Nov 2018 – Aug 2019",
                title: "Software Engineer (VR) — Greek Army",
                detail:
                  "Designed and developed the first VR application for military infantry training. Presented to generals and the Deputy Minister of National Defense. Received 30k+ EUR funding.",
              },
              {
                period: "Oct 2017 – Sep 2018",
                title: "MSc Communications & Signal Processing — Imperial College London",
                detail:
                  "Signal Processing, Machine Intelligence, Computer Vision, Big Data, Pattern Recognition, Distributed Networks. Distinction (71.8%).",
              },
              {
                period: "Oct 2012 – Jul 2017",
                title:
                  "MEng Electrical & Computer Engineering — Aristotle University of Thessaloniki",
                detail:
                  "Grade: 9.1/10 (Top 1%). Won Microsoft Imagine Cup World Championship (2016). Secured U.S. Patent for VR behavioral analysis.",
              },
            ].map((entry, i) => (
              <AnimateIn key={entry.period} delay={i * 0.03}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 border-b border-zinc-900">
                  <div className="md:col-span-4">
                    <span className="text-xs font-mono text-zinc-500">
                      {entry.period}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-sm font-medium text-white">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Proof */}
      <section className="py-20 md:py-28 border-t border-zinc-900">
        <div className="container-wide">
          <SectionHeading
            label="Recognition"
            title="Awards, fellowships & patents"
          />

          <div className="max-w-4xl space-y-0 border-t border-zinc-800">
            {achievements.map((achievement, i) => (
              <AnimateIn
                key={`${achievement.title}-${achievement.year}`}
                delay={i * 0.02}
              >
                <div className="grid grid-cols-12 gap-3 py-3.5 border-b border-zinc-900 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-xs font-mono text-zinc-600">
                    {achievement.year}
                  </span>
                  <div className="col-span-7 md:col-span-8">
                    <h3 className="text-xs sm:text-sm font-medium text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                      {achievement.detail}
                    </p>
                  </div>
                  <span className="col-span-3 text-[11px] font-mono text-zinc-600 text-right">
                    {achievement.location}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <SectionHeading label="Instruction" title="Academic teaching & lectures" />
          <AnimateIn>
            <div className="max-w-3xl">
              <div className="mono-card rounded-lg p-6 md:p-8">
                <h3 className="text-base font-medium text-white mb-1">
                  {teaching.institution}
                </h3>
                <p className="text-xs font-mono text-emerald-400 mb-1">
                  {teaching.role} · {teaching.program}
                </p>
                <p className="text-xs font-mono text-zinc-500 mb-6">{teaching.period}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2.5">
                      Courses Delivered
                    </div>
                    <ul className="space-y-1 text-xs font-mono text-zinc-400">
                      {teaching.courses.map((course) => (
                        <li key={course} className="flex items-center gap-1.5">
                          <span className="text-zinc-600">›</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2.5">
                      Supervised Topics
                    </div>
                    <ul className="space-y-1 text-xs font-mono text-zinc-400">
                      {teaching.supervision.map((area) => (
                        <li key={area} className="flex items-center gap-1.5">
                          <span className="text-zinc-600">›</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
