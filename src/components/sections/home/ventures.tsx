import { ventures } from "@/data/ventures";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function VenturesSection() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-900">
      <div className="container-wide">
        <SectionHeading
          label="Portfolio & Ventures"
          title="From research to production platforms"
          description="Building technology companies and products that commercialize advanced software and hardware."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.map((venture, i) => (
            <AnimateIn key={venture.slug} delay={i * 0.08}>
              <div className="mono-card rounded-lg p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {venture.name}
                    </h3>
                    <Badge variant={venture.status === "active" ? "emerald" : "default"}>
                      {venture.status}
                    </Badge>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    {venture.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                    {venture.description.slice(0, 150)}...
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                    {venture.domains.slice(0, 3).map((domain) => (
                      <Badge key={domain}>{domain}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-8">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            All ventures & initiatives →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
