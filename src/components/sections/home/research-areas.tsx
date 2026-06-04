import { researchThemes } from "@/data/research";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import Link from "next/link";

export function ResearchAreasSection() {
  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="container-wide">
        <SectionHeading
          label="Research"
          title="Where inquiry meets engineering"
          description="Five intersecting domains, unified by the challenge of making complex physical systems understandable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.slice(0, 5).map((theme, i) => (
            <AnimateIn key={theme.title} delay={i * 0.08}>
              <div className="p-6 md:p-8 bg-surface-elevated border border-border rounded-lg card-hover h-full">
                <span className="text-xs font-mono text-accent mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {theme.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {theme.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs text-text-tertiary"
                    >
                      {topic}
                      {theme.topics.indexOf(topic) < Math.min(theme.topics.length, 3) - 1 && (
                        <span className="mx-1.5 text-border">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Link card */}
          <AnimateIn delay={0.5}>
            <Link
              href="/research"
              className="p-6 md:p-8 border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center h-full hover:border-accent hover:bg-accent-subtle/50 transition-all group min-h-[200px]"
            >
              <span className="text-accent text-sm font-medium group-hover:underline">
                Explore research →
              </span>
              <span className="text-xs text-text-tertiary mt-2">
                PhD, publications & collaborations
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
