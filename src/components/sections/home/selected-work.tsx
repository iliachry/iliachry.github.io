import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";

export function SelectedWorkSection() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <SectionHeading
          label="Selected Work"
          title="Systems that connect research to reality"
          description="Case studies in hydroinformatics, AI, spatial computing, and full-stack systems architecture."
        />

        <div className="space-y-0">
          {projects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/work#${project.slug}`}
                className="group block py-8 md:py-10 border-t border-border last:border-b hover:bg-surface/50 transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-md"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Left: number + domain */}
                  <div className="flex items-baseline gap-4 md:w-48 shrink-0">
                    <span className="text-xs font-mono text-text-tertiary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-text-tertiary">
                      {project.domain.split("·")[0].trim()}
                    </span>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-text-secondary text-sm md:text-base leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center text-text-tertiary group-hover:text-accent transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4} className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
