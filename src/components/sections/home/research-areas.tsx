import { researchThemes } from "@/data/research";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import Link from "next/link";

export function ResearchAreasSection() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
      <div className="container-wide">
        <SectionHeading
          label="Research Domains"
          title="Inquiry grounded in engineering"
          description="Five intersecting research domains unified by the challenge of making complex physical and computational phenomena understandable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchThemes.slice(0, 5).map((theme, i) => (
            <AnimateIn key={theme.title} delay={i * 0.06}>
              <div className="mono-card rounded-lg p-6 h-full flex flex-col justify-between group">
                <div>
                  <span className="text-xs font-mono text-zinc-600 mb-2 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                    {theme.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {theme.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-[11px] font-mono text-zinc-500"
                    >
                      {topic}
                      {theme.topics.indexOf(topic) < Math.min(theme.topics.length, 3) - 1 && (
                        <span className="mx-1 text-zinc-800">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Explore card */}
          <AnimateIn delay={0.35}>
            <Link
              href="/research"
              className="mono-card rounded-lg p-6 flex flex-col items-center justify-center text-center h-full group min-h-[180px] hover:border-emerald-500/40 transition-all"
            >
              <span className="text-xs font-mono text-white group-hover:text-emerald-400 transition-colors">
                Explore All Research →
              </span>
              <span className="text-[11px] font-mono text-zinc-500 mt-2">
                PhD, Publications & Patents
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
