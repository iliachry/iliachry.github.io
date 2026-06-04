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
                period: "2024 – Present",
                title: "Lecturer — Mediterranean College · University of Derby",
                detail:
                  "Teaching Computer Graphics, Virtual Environment Development, Game Behavior, and Game Development. Supervising final year projects in ML, blockchain, and game development.",
              },
              {
                period: "2023 – Present",
                title: "Co-Founder & CEO/CTO — Metatopia",
                detail:
                  "Building Greece's first metaverse studio. Delivering digital twins, XR training platforms, and immersive experiences across Thessaloniki and Nicosia.",
              },
              {
                period: "2022 – Present",
                title: "PhD Candidate — University of Thessaly",
                detail:
                  "Researching metaverse architectures for wireless communications systems. Investigating digital twins, intelligent reflecting surfaces, and spiking neural networks.",
              },
              {
                period: "2021 – Present",
                title: "Full-Stack Developer — NTUA",
                detail:
                  "Building digital twin systems for urban water infrastructure. Hydroinformatics visualization and flood simulation platforms.",
              },
              {
                period: "2020 – 2022",
                title: "VR & ML Software Engineer — ORamaVR",
                detail:
                  "Developed 3D session recording and ML-based user performance evaluation for the MAGES medical VR training SDK. Research on surgical assessment with CNNs and geometric algebra for networked VR.",
              },
              {
                period: "2019 – 2022",
                title: "Lead XR Software Engineer — CERTH",
                detail:
                  "Led extended reality research and development. Medical VR training (MAGES 4.0), virtual museums, and international research collaborations.",
              },
              {
                period: "2019",
                title: "Marie Skłodowska-Curie Fellow — University of Cyprus",
                detail:
                  "Research on machine learning for communication systems. Published in IEEE conference proceedings.",
              },
              {
                period: "2016 – 2018",
                title: "MSc Communications & Signal Processing — Imperial College London",
                detail:
                  "Advanced study in signal processing, machine learning, and communications. Multiple excellence awards from AUTH Rector during this period.",
              },
              {
                period: "2010 – 2016",
                title:
                  "MEng Electrical & Computer Engineering — Aristotle University of Thessaloniki",
                detail:
                  "Honours degree. Won Microsoft Imagine Cup World Championship (2016). Secured U.S. Patent for VR behavioral analysis.",
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
                by the conviction that complex real-world systems — water networks, agricultural
                fields, urban infrastructure — deserve interfaces as thoughtful as any
                consumer product.
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
