import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Work & Systems",
  description:
    "Case studies in hydroinformatics, AI systems, spatial computing, digital twins, and full-stack architecture by Ilias Chrysovergis.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            label="Engineering & Systems"
            title="Turning complexity into actionable clarity"
            description="Each project represents a production system designed to make complex real-world phenomena understandable and actionable. Not portfolio pieces — engineering outcomes."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-wide space-y-0">
          {projects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.04}>
              <article
                id={project.slug}
                className="py-12 md:py-16 border-t border-zinc-800 scroll-mt-24"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                      {project.domain}
                    </span>
                  </div>
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3">
                  {project.title}
                </h2>

                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                  {project.summary}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-zinc-900">
                  <div className="mono-card rounded p-5">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                      Problem Context
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="mono-card rounded p-5">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                      Role & Methods
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium mb-2">
                      {project.role}
                    </p>
                    <ul className="space-y-1">
                      {project.methods.map((method) => (
                        <li
                          key={method}
                          className="text-xs text-zinc-400 font-light flex items-center gap-1.5"
                        >
                          <span className="text-zinc-600">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mono-card rounded p-5">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                      Outcome & Impact
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-3">
                      {project.outcome}
                    </p>
                    <div className="text-xs font-mono text-emerald-400/90 pt-2 border-t border-zinc-800/80">
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 mr-1">
                    Stack:
                  </span>
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
