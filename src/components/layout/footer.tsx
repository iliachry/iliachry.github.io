import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Monogram } from "@/components/ui/monogram";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-auto">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-text-primary">
              <Monogram className="w-7 h-7" />
              <span className="font-medium text-sm">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-text-tertiary max-w-xs leading-relaxed">
              Researcher, software architect, and founder building intelligent spatial systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Work", href: "/work" },
                { label: "Research", href: "/research" },
                { label: "Ventures", href: "/ventures" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.scholar && (
                <a
                  href={siteConfig.social.scholar}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Google Scholar
                </a>
              )}
              {siteConfig.social.researchgate && (
                <a
                  href={siteConfig.social.researchgate}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  ResearchGate
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  X / Twitter
                </a>
              )}
              {siteConfig.social.orcid && (
                <a
                  href={siteConfig.social.orcid}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  ORCID
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            {siteConfig.location}
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-[10px] text-text-tertiary/60 text-center italic leading-relaxed">
          This website was built with AI assistance and is not 100% human-curated.
          Some details may be inaccurate or differ slightly from reality.
        </p>
      </div>
    </footer>
  );
}
