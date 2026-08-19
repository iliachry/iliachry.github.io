import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Monogram } from "@/components/ui/monogram";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black text-zinc-500 font-mono text-xs mt-auto">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-white group">
              <Monogram className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              <span className="font-bold tracking-tight text-sm font-sans">{siteConfig.name}</span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-xs">
              Software architect, researcher, and founder engineering sovereign spatial systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500">
              Navigation
            </div>
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
                  className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500">
              Connect & Signals
            </div>
            <div className="flex flex-col gap-1.5">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              )}
              {siteConfig.social.scholar && (
                <a
                  href={siteConfig.social.scholar}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Google Scholar ↗
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs text-zinc-300 hover:text-emerald-400 transition-colors pt-1"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <span>{siteConfig.location}</span>
            <span className="hidden sm:inline text-zinc-800">•</span>
            <a
              href="https://metatopia.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Metatopia Studio ↗
            </a>
          </div>
          <a
            href="mailto:iliachry@iliachry.gr"
            className="text-white hover:underline shrink-0"
          >
            Direct Inquiries →
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-[10px] text-zinc-600 text-center leading-relaxed">
          This website is engineered with AI assistance for data autonomy & sovereignty.
        </p>
      </div>
    </footer>
  );
}
