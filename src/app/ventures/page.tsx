import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Startup ventures and products by Ilias Chrysovergis. Building companies that commercialize advanced technology — from spatial computing to SaaS platforms.",
};

export default function VenturesPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Ventures"
            title="Research commercialized into products"
            description="Building companies at the intersection of deep technology and real-world need. Each venture translates research-grade capability into systems that work at production scale."
          />
        </div>
      </section>

      {/* Ventures List */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide space-y-16 md:space-y-24">
          {ventures.map((venture, i) => (
            <AnimateIn key={venture.slug} delay={i * 0.1}>
              <article className="border-t border-border pt-12 md:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left column */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="heading-serif text-3xl md:text-4xl text-text-primary">
                        {venture.name}
                      </h2>
                      <Badge
                        variant={
                          venture.status === "active" ? "accent" : "default"
                        }
                      >
                        {venture.status}
                      </Badge>
                    </div>
                    <p className="text-accent font-medium mb-4">
                      {venture.tagline}
                    </p>
                    <p className="text-sm text-text-tertiary mb-4">
                      {venture.role}
                    </p>
                    {venture.url && (
                      <Button href={venture.url} variant="secondary" external>
                        Visit site ↗
                      </Button>
                    )}
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-8">
                    <p className="text-text-secondary leading-relaxed mb-8">
                      {venture.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-3">
                          Domains
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {venture.domains.map((domain) => (
                            <Badge key={domain}>{domain}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-3">
                          Highlights
                        </h3>
                        <ul className="space-y-2">
                          {venture.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-sm text-text-secondary flex items-start gap-2"
                            >
                              <span className="text-accent mt-1 shrink-0">
                                ·
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Future Ventures */}
      <section className="py-24 md:py-32 bg-surface/50">
        <div className="container-wide">
          <AnimateIn>
            <div className="max-w-2xl">
              <span className="section-label mb-4 block">What&apos;s Next</span>
              <h2 className="heading-serif text-2xl md:text-3xl text-text-primary mb-4">
                Always building
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                I&apos;m constantly exploring new intersections between research and
                product. If you&apos;re working on a technically ambitious problem and
                looking for a co-founder, technical partner, or architectural lead —
                let&apos;s talk.
              </p>
              <Button href="/contact" variant="primary">
                Discuss a venture
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
