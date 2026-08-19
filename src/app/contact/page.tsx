import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Ilias Chrysovergis for research collaboration, sovereign systems architecture, startup partnerships, or speaking.",
};

const pathways = [
  {
    title: "Research Collaboration",
    description:
      "Joint research proposals, academic publications, digital twin architecture, or PhD-adjacent collaborations.",
    code: "[RESEARCH_01]",
  },
  {
    title: "Venture & Investment",
    description:
      "Metatopia studio initiatives, technical co-founding, sovereign compute hardware, or deep-tech investment discussions.",
    code: "[VENTURE_02]",
  },
  {
    title: "Systems Consulting",
    description:
      "Full-stack architecture reviews, spatial compute pipeline design, AI/ML strategy, or technical leadership.",
    code: "[SYSTEMS_03]",
  },
  {
    title: "Keynotes & Teaching",
    description:
      "Technical conference talks, guest lectures, panel discussions, or workshops on spatial systems and sovereign infrastructure.",
    code: "[KEYNOTE_04]",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            label="Direct Uplink"
            title="Let's build high-integrity systems together"
            description="Available for research partnerships, technical co-founding, architectural leadership, and keynotes. Connect directly through the encrypted form or direct channels."
          />
        </div>
      </section>

      {/* Pathways */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pathways.map((pathway, i) => (
              <AnimateIn key={pathway.title} delay={i * 0.06}>
                <div className="mono-card rounded-lg p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 mb-2">
                      {pathway.code}
                    </div>
                    <h3 className="text-base font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {pathway.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Direct Contact */}
      <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimateIn>
                <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                  Encrypted Message Dispatch
                </div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6">
                  Send a message
                </h2>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-5">
              <AnimateIn delay={0.1}>
                <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
                  Direct Channels
                </div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6">
                  Telemetry & Contacts
                </h2>

                <div className="space-y-5 font-mono text-xs">
                  <div className="mono-card rounded p-4">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                      Primary Inquiries
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-emerald-400 hover:underline text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="mono-card rounded p-4">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                      Metatopia Studio
                    </div>
                    <a
                      href="mailto:sales@metatopia.gr"
                      className="text-white hover:underline text-sm"
                    >
                      sales@metatopia.gr
                    </a>
                  </div>

                  <div className="mono-card rounded p-4">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                      Base Location
                    </div>
                    <p className="text-zinc-300">
                      {siteConfig.location} (GR)
                    </p>
                    <p className="text-zinc-500 text-[11px] mt-1">
                      On-site availability: London, Berlin, Athens, Thessaloniki
                    </p>
                  </div>

                  <div className="mono-card rounded p-4">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                      Public Feeds
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {Object.entries(siteConfig.social)
                        .filter(([, url]) => url)
                        .map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-emerald-400 transition-colors"
                          >
                            [{platform.toUpperCase()}]
                          </a>
                        ))}
                    </div>
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
