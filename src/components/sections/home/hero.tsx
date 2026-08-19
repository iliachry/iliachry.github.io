"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { SystemConsole } from "@/components/ui/system-console";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Monospace Subhead / Status */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  {siteConfig.name} — Systems Architect & Founder
                </span>
              </div>

              {/* Main Sovereign Statement */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-snug text-white mb-4 text-balance">
                Engineering sovereign hardware & software — from custom spatial systems to production SaaS.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8">
                {siteConfig.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 font-mono">
                <Button href="/work" variant="primary">
                  View Systems ↗
                </Button>
                <Button href="/ventures" variant="secondary">
                  Portfolio & Ventures
                </Button>
                <a
                  href="#system-console"
                  className="text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors px-2 py-1"
                >
                  [~] Live Telemetry
                </a>
              </div>

              {/* Credibility Line */}
              <div className="mt-8 pt-4 border-t border-zinc-900">
                <p className="text-[11px] sm:text-xs font-mono text-zinc-500">
                  Founder (Metatopia) · Patent (USPTO) · Published (IEEE, ACM SIGGRAPH, Springer)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Console */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-md lg:max-w-none"
            >
              <SystemConsole />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
