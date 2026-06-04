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
  title: "About",
  description:
    "Ilias Chrysovergis — software architect, researcher, and founder. Greek engineer working across hydroinformatics, AI, spatial computing, and startup product development.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <AnimateIn className="md:col-span-4 lg:col-span-4">
              <div className="relative aspect-[4/5] max-w-sm rounded-lg overflow-hidden bg-surface border border-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Ilias Chrysovergis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </AnimateIn>

            <AnimateIn className="md:col-span-8 lg:col-span-8" delay={0.15}>
              <span className="section-label mb-4 block">About</span>
              <h1 className="heading-serif text-4xl md:text-5xl text-text-primary mb-8 text-balance">
                Engineer, researcher, builder, founder.
              </h1>
              <div className="space-y-5 text-text-secondary leading-relaxed max-w-2xl">
                <p>
                  I build systems that make complex physical phenomena understandable
                  and actionable. My work sits at the intersection of academic
                  research and real product execution — I care equally about the
                  science and the shipping.
                </p>
                <p>
                  Based in Greece, I work across hydroinformatics, AI, spatial
                  computing, extended reality, digital twins, and full-stack systems
                  architecture. I&apos;m not a specialist in one narrow domain;
                  I&apos;m a systems thinker who connects disciplines to solve
                  problems that no single field can address alone.
                </p>
                <p>
                  I co-founded Metatopia — Greece&apos;s first metaverse studio — and
                  I&apos;m building products across XR, creative tech, and
                  decision-support systems. I&apos;m simultaneously a PhD candidate,
                  a university lecturer, and an engineer who has shipped production
                  code for defense, healthcare, water management, and open-source
                  ML frameworks used globally.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Education & Journey */}
      <section className="py-24 md:py-32 bg-surface/50">
        <div className="container-wide">
          <SectionHeading label="Journey" title="The path so far" />

          <div className="max-w-3xl space-y-0">
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
                  "Built Greece's first metaverse studio. Delivered VR training simulators, MR gaming, digital twins for wireless systems, and EU open call consortia across Thessaloniki and Nicosia.",
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
                  "Signal Processing, Machine Intelligence, Computer Vision, Big Data, Pattern Recognition, Distributed Networks. Grade: 71.8%.",
              },
              {
                period: "Oct 2012 – Jul 2017",
                title:
                  "MEng Electrical & Computer Engineering — Aristotle University of Thessaloniki",
                detail:
                  "Grade: 9.1/10 (Top 1%). Won Microsoft Imagine Cup World Championship (2016). Secured U.S. Patent for VR behavioral analysis.",
              },
            ].map((entry, i) => (
              <AnimateIn key={entry.period} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 border-b border-border">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-text-tertiary">
                      {entry.period}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-sm font-medium text-text-primary">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Recognition"
            title="Awards, fellowships & milestones"
          />

          <div className="max-w-4xl">
            <div className="grid grid-cols-1 gap-0">
              {achievements.map((achievement, i) => (
                <AnimateIn
                  key={`${achievement.title}-${achievement.year}`}
                  delay={i * 0.03}
                >
                  <div className="grid grid-cols-12 gap-4 py-4 border-b border-border items-baseline">
                    <span className="col-span-2 md:col-span-1 text-xs font-mono text-text-tertiary">
                      {achievement.year}
                    </span>
                    <div className="col-span-7 md:col-span-8">
                      <h3 className="text-sm font-medium text-text-primary">
                        {achievement.title}
                      </h3>
                      <p className="text-xs text-text-tertiary mt-0.5">
                        {achievement.detail}
                      </p>
                    </div>
                    <span className="col-span-3 text-xs text-text-tertiary text-right">
                      {achievement.location}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="py-24 md:py-32 bg-surface/50">
        <div className="container-wide">
          <SectionHeading label="Teaching" title="Academic instruction" />
          <AnimateIn>
            <div className="max-w-3xl">
              <div className="p-8 bg-surface-elevated border border-border rounded-lg">
                <h3 className="text-lg font-medium text-text-primary mb-1">
                  {teaching.institution}
                </h3>
                <p className="text-sm text-accent font-medium mb-1">
                  {teaching.role} · {teaching.program}
                </p>
                <p className="text-xs text-text-tertiary mb-6">{teaching.period}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-3">
                      Courses
                    </h4>
                    <ul className="space-y-1.5">
                      {teaching.courses.map((course) => (
                        <li key={course} className="text-sm text-text-secondary">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-3">
                      Supervision Areas
                    </h4>
                    <ul className="space-y-1.5">
                      {teaching.supervision.map((area) => (
                        <li key={area} className="text-sm text-text-secondary">
                          {area}
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

      {/* Personal */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <AnimateIn className="max-w-2xl">
            <span className="section-label mb-4 block">Personal</span>
            <h2 className="heading-serif text-2xl md:text-3xl text-text-primary mb-6">
              Beyond the systems
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m based in Thessaloniki, Greece — a city where you can debug code
                with a view of the Thermaikos Gulf. My perspective is shaped by working
                across Greek and international contexts, from London to Nicosia to Seattle.
              </p>
              <p>
                I believe the most impactful technology is built by people who understand
                both the science and the engineering required to ship it. My work is driven
                by the conviction that complex real-world systems — water networks,
                communication infrastructure, urban environments — deserve interfaces
                as thoughtful as any consumer product.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Thessaloniki",
                "Greece",
                "Interdisciplinary",
                "Systems Thinking",
                "Research → Product",
              ].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
