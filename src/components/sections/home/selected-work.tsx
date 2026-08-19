import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";

export function SelectedWorkSection() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-20 md:py-28 border-t border-zinc-900">
      <div className="container-wide">
        <SectionHeading
          label="Selected Systems"
          title="Engineered for the physical world"
          description="Case studies across hydroinformatics digital twins, AI frameworks, spatial computing, and full-stack systems."
        />

        <div className="space-y-0 border-t border-zinc-800">
          {projects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work#${project.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 py-5 border-b border-zinc-900 hover:bg-zinc-950/60 transition-colors -mx-3 px-3 rounded"
              >
                {/* Left: Number + Title + Summary */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-zinc-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">↗</span>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {project.summary}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Right: Domain tag */}
                <div className="text-[11px] font-mono text-zinc-500 shrink-0 self-start sm:self-baseline">
                  {project.domain.split("·")[0].trim()}
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Explore all systems & engineering →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
