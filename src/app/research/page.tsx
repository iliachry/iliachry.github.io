import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import { phd, researchThemes, collaborations } from "@/data/research";
import { getPublicationsByYear } from "@/data/publications";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Academic research in hydroinformatics, spatial computing, AI/ML systems, digital twins, and wireless communications by Ilias Chrysovergis.",
};

export default function ResearchPage() {
  const publications = getPublicationsByYear();

  const typeLabels: Record<string, string> = {
    journal: "Journal",
    conference: "Conference",
    patent: "Patent",
    preprint: "Preprint",
    article: "Article",
    software: "Software",
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            label="Academic Research"
            title="Scientific inquiry grounded in systems execution"
            description="Academic research that produces working systems, not just theoretical papers. Investigating how spatial compute, digital twins, and reinforcement learning connect simulation with real-world decision-making."
          />
        </div>
      </section>

      {/* PhD Card */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <AnimateIn>
            <div className="mono-card rounded-lg p-6 md:p-10 border border-zinc-800">
              <div className="text-[11px] uppercase font-mono tracking-widest text-emerald-400 mb-2">
                PhD Dissertation Research
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white mb-2">
                {phd.title}
              </h2>
              <p className="text-xs font-mono text-zinc-400 mb-4">
                {phd.institution} · {phd.status}
              </p>
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
                {phd.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {phd.areas.map((area) => (
                  <Badge key={area} variant="emerald">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <SectionHeading
            label="Domains of Focus"
            title="Five converging research pillars"
          />
          <div className="space-y-0 border-t border-zinc-800">
            {researchThemes.map((theme, i) => (
              <AnimateIn key={theme.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 border-b border-zinc-900">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-zinc-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-base font-medium text-white">
                      {theme.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-1">
                      {theme.topics.map((topic) => (
                        <li key={topic} className="text-xs font-mono text-zinc-500">
                          › {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 md:py-28 border-t border-zinc-900">
        <div className="container-wide">
          <SectionHeading
            label="Bibliography"
            title="Papers, patents & published contributions"
            description="Peer-reviewed publications across IEEE, ACM SIGGRAPH, Springer, Elsevier, and USPTO."
          />
          <AnimateIn className="flex flex-wrap gap-2.5 mb-10 -mt-4 font-mono">
            {siteConfig.social.scholar && (
              <Button href={siteConfig.social.scholar} variant="secondary" external>
                Google Scholar ↗
              </Button>
            )}
            {siteConfig.social.researchgate && (
              <Button href={siteConfig.social.researchgate} variant="secondary" external>
                ResearchGate ↗
              </Button>
            )}
            {siteConfig.social.dblp && (
              <Button href={siteConfig.social.dblp} variant="secondary" external>
                DBLP ↗
              </Button>
            )}
            {siteConfig.social.orcid && (
              <Button href={siteConfig.social.orcid} variant="secondary" external>
                ORCID ↗
              </Button>
            )}
          </AnimateIn>

          <div className="space-y-0 border-t border-zinc-800">
            {publications.map((pub, i) => (
              <AnimateIn key={`${pub.title}-${pub.year}`} delay={i * 0.03}>
                <div className="py-4 border-b border-zinc-900 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <div className="flex items-baseline gap-3 md:w-32 shrink-0">
                    <span className="text-xs font-mono text-zinc-600">
                      {pub.year}
                    </span>
                    <Badge variant={pub.type === "patent" ? "emerald" : "default"}>
                      {typeLabels[pub.type]}
                    </Badge>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white leading-snug">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{pub.title}</span>
                          <span className="text-zinc-500">↗</span>
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1">
                      {pub.authors}
                    </p>
                    <p className="text-xs font-mono text-zinc-500 mt-0.5">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <SectionHeading
            label="Institutional Network"
            title="Academic & research collaborations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {collaborations.map((collab, i) => (
              <AnimateIn key={collab.institution} delay={i * 0.06}>
                <div className="mono-card rounded-lg p-6">
                  <h3 className="text-base font-medium text-white mb-1">
                    {collab.institution}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mb-3">
                    {collab.role}
                  </p>
                  <ul className="space-y-1 font-mono text-xs text-zinc-400">
                    {collab.focus.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="text-zinc-600">›</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
