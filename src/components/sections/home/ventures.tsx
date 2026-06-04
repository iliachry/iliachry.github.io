import { ventures } from "@/data/ventures";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function VenturesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <SectionHeading
          label="Ventures"
          title="From research to product"
          description="Building companies that commercialize advanced technology for real-world impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, i) => (
            <AnimateIn key={venture.slug} delay={i * 0.1}>
              <div className="group p-6 md:p-8 bg-surface-elevated border border-border rounded-lg card-hover h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-text-primary">
                    {venture.name}
                  </h3>
                  <Badge variant={venture.status === "active" ? "accent" : "default"}>
                    {venture.status}
                  </Badge>
                </div>
                <p className="text-sm text-accent font-medium mb-3">
                  {venture.tagline}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {venture.description.slice(0, 160)}...
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {venture.domains.slice(0, 3).map((domain) => (
                    <Badge key={domain}>{domain}</Badge>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4} className="mt-10">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            All ventures & products
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
