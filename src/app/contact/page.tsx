import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ilias Chrysovergis for research collaboration, startup partnerships, technical consulting, or speaking engagements.",
};

const pathways = [
  {
    title: "Research Collaboration",
    description:
      "Joint research projects, academic partnerships, co-authored publications, or PhD-adjacent collaborations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Startup & Investment",
    description:
      "Venture partnership, investment discussions, technical co-founding opportunities, or strategic technology guidance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, systems design, AI/ML strategy, spatial computing guidance, or technical due diligence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Speaking & Media",
    description:
      "Conference talks, panel discussions, podcast appearances, or press inquiries about deep-tech and spatial systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            label="Contact"
            title="Let's talk about what you're building"
            description="I'm available for research collaboration, startup partnership, technical consulting, and speaking engagements. Choose the path that fits your needs."
          />
        </div>
      </section>

      {/* Pathways */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((pathway, i) => (
              <AnimateIn key={pathway.title} delay={i * 0.1}>
                <div className="p-6 md:p-8 bg-surface-elevated border border-border rounded-lg card-hover h-full">
                  <div className="text-accent mb-4">{pathway.icon}</div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pathway.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Direct Contact */}
      <section className="py-24 md:py-32 bg-surface/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimateIn>
                <h2 className="heading-serif text-2xl md:text-3xl text-text-primary mb-6">
                  Send a message
                </h2>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-5">
              <AnimateIn delay={0.15}>
                <h2 className="heading-serif text-2xl md:text-3xl text-text-primary mb-6">
                  Direct contact
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-accent hover:text-accent-hover transition-colors link-underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Location
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {siteConfig.location}
                    </p>
                    <p className="text-text-tertiary text-xs mt-1">
                      Available internationally for significant projects
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Social
                    </h3>
                    <div className="flex flex-col gap-2">
                      {Object.entries(siteConfig.social)
                        .filter(([, url]) => url)
                        .map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text-secondary hover:text-accent transition-colors capitalize"
                          >
                            {platform === "twitter" ? "X / Twitter" : platform}
                          </a>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Response Time
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Typically within 24–48 hours. For urgent matters,
                      please note &ldquo;Urgent&rdquo; in your subject line.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
