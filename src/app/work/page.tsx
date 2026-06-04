import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in hydroinformatics, AI systems, spatial computing, digital twins, and full-stack architecture. Selected projects by Ilias Chrysovergis.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Work"
            title="Turning complexity into clarity"
            description="Each project represents a system designed to make complex real-world phenomena understandable and actionable. Not portfolio pieces — engineering outcomes."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-wide space-y-0">
          {projects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.05}>
              <article
                id={project.slug}
                className="py-12 md:py-16 border-t border-border scroll-mt-24"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6">
                  <span className="text-xs font-mono text-text-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {project.domain}
                  </span>
                </div>

                <h2 className="heading-serif text-2xl md:text-3xl lg:text-4xl text-text-primary mb-4">
                  {project.title}
                </h2>

                <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                  {project.summary}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Problem
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Role
                    </h3>
                    <p className="text-sm text-text-primary font-medium mb-3">
                      {project.role}
                    </p>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Methods
                    </h3>
                    <ul className="space-y-1">
                      {project.methods.map((method) => (
                        <li
                          key={method}
                          className="text-sm text-text-secondary"
                        >
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Outcome
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {project.outcome}
                    </p>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Impact
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Stack & Links */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary mr-2">
                    Stack
                  </span>
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-hover transition-colors link-underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
