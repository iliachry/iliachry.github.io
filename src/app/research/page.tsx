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
  title: "Research",
  description:
    "Academic research in hydroinformatics, spatial computing, AI/ML systems, digital twins, and wireless communications. Publications, PhD work, and collaborations by Ilias Chrysovergis.",
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
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Research"
            title="Inquiry grounded in engineering"
            description="Academic research that produces working systems, not just papers. Investigating how intelligent spatial systems can bridge simulation, visualization, and real-world decision-making."
          />
        </div>
      </section>

      {/* PhD */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <AnimateIn>
            <div className="p-8 md:p-12 bg-surface-elevated border border-border rounded-lg">
              <span className="section-label mb-3 block">PhD Research</span>
              <h2 className="heading-serif text-2xl md:text-3xl text-text-primary mb-2">
                {phd.title}
              </h2>
              <p className="text-sm text-accent font-medium mb-4">
                {phd.institution} · {phd.status}
              </p>
              <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
                {phd.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {phd.areas.map((area) => (
                  <Badge key={area} variant="accent">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Research Themes */}
      <section className="pb-24 md:pb-32 bg-surface/50">
        <div className="container-wide py-24 md:py-32">
          <SectionHeading
            label="Research Themes"
            title="Five converging domains"
          />
          <div className="space-y-8">
            {researchThemes.map((theme, i) => (
              <AnimateIn key={theme.title} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-border last:border-b-0">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-text-tertiary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-base font-medium text-text-primary">
                      {theme.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-1">
                      {theme.topics.map((topic) => (
                        <li key={topic} className="text-xs text-text-tertiary">
                          {topic}
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
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Publications"
            title="Papers, patents & contributions"
            description="Selected publications across IEEE, ACM, and other venues."
          />
          <AnimateIn className="flex flex-wrap gap-3 mb-10 -mt-2">
            {siteConfig.social.scholar && (
              <Button href={siteConfig.social.scholar} variant="secondary" external>
                Google Scholar
              </Button>
            )}
            {siteConfig.social.researchgate && (
              <Button href={siteConfig.social.researchgate} variant="secondary" external>
                ResearchGate
              </Button>
            )}
            {siteConfig.social.dblp && (
              <Button href={siteConfig.social.dblp} variant="secondary" external>
                DBLP Profile
              </Button>
            )}
          </AnimateIn>
          <div className="space-y-0">
            {publications.map((pub, i) => (
              <AnimateIn key={`${pub.title}-${pub.year}`} delay={i * 0.03}>
                <div className="py-5 border-b border-border flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <div className="flex items-baseline gap-3 md:w-32 shrink-0">
                    <span className="text-xs font-mono text-text-tertiary">
                      {pub.year}
                    </span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-surface text-text-tertiary border border-border">
                      {typeLabels[pub.type]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-text-primary leading-snug">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <p className="text-xs text-text-tertiary mt-1">
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
      <section className="py-24 md:py-32 bg-surface/50">
        <div className="container-wide">
          <SectionHeading
            label="Collaborations"
            title="Academic partnerships"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map((collab, i) => (
              <AnimateIn key={collab.institution} delay={i * 0.08}>
                <div className="p-6 bg-surface-elevated border border-border rounded-lg">
                  <h3 className="text-base font-medium text-text-primary mb-1">
                    {collab.institution}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {collab.role}
                  </p>
                  <ul className="space-y-1">
                    {collab.focus.map((f) => (
                      <li key={f} className="text-sm text-text-secondary">
                        {f}
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
