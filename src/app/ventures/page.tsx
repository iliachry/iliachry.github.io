import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures & Portfolio",
  description:
    "Startup ventures, sovereign infrastructure, and deep-tech products by Ilias Chrysovergis.",
};

export default function VenturesPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            label="Portfolio & Ventures"
            title="Sovereign infrastructure & deep technology platforms"
            description="Building companies at the intersection of sovereign hardware, AI models, and real-world physical systems. Translating research into platforms that operate reliably at production scale."
          />
        </div>
      </section>

      {/* Ventures List */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide space-y-12 md:space-y-16">
          {ventures.map((venture, i) => (
            <AnimateIn key={venture.slug} delay={i * 0.08}>
              <article className="border-t border-zinc-800 pt-10 md:pt-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left column */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                        {venture.name}
                      </h2>
                      <Badge
                        variant={
                          venture.status === "active" ? "emerald" : "default"
                        }
                      >
                        {venture.status}
                      </Badge>
                    </div>
                    <p className="text-xs font-mono text-zinc-400 mb-2">
                      {venture.tagline}
                    </p>
                    <p className="text-xs font-mono text-zinc-500 mb-5">
                      Role: {venture.role}
                    </p>
                    {venture.url && (
                      <Button href={venture.url} variant="secondary" external>
                        Visit Platform ↗
                      </Button>
                    )}
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                      {venture.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2.5">
                          Technical Domains
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {venture.domains.map((domain) => (
                            <Badge key={domain}>{domain}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2.5">
                          Key Milestones
                        </div>
                        <ul className="space-y-1.5 font-mono text-xs">
                          {venture.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-zinc-400 flex items-start gap-2"
                            >
                              <span className="text-emerald-400 shrink-0">›</span>
                              <span>{highlight}</span>
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
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <AnimateIn>
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                Co-Founding & Roadmap
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Always building sovereign platforms
              </h2>
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-6">
                Constantly prototyping new intersections between compute autonomy, hardware, and spatial software. If you&apos;re building an ambitious sovereign system — let&apos;s talk.
              </p>
              <Button href="/contact" variant="primary">
                Discuss a Venture →
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
