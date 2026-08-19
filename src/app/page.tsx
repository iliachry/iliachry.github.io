"use client";

import React, { useState, useEffect } from "react";
import { CyberpunkTerminal } from "@/components/ui/cyberpunk-terminal";
import { Monogram } from "@/components/ui/monogram";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [, setClickCount] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on ~ (tilde) or Ctrl+K
      if (
        e.key === "`" ||
        e.key === "~" ||
        (e.ctrlKey && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setIsTerminalOpen(true);
        return 0;
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-8 md:p-12 overflow-y-auto relative">
      {/* ─── CYBERPUNK TERMINAL EASTER EGG OVERLAY ─── */}
      <CyberpunkTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* ─── TOP HEADER / LOGO ─── */}
      <header className="flex items-center justify-between w-full max-w-4xl mx-auto shrink-0">
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer select-none group"
          title="Click 3x to open Sovereign CLI"
        >
          <Monogram className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-white">
            iliachry
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 rounded transition-all cursor-pointer"
            title="Press ~ or Ctrl+K"
          >
            [~] CLI
          </button>
          <a
            href="/Ilias_Chrysovergis_CV.pdf"
            download
            className="text-xs text-zinc-400 hover:text-white transition-colors hidden sm:inline"
          >
            CV (PDF)
          </a>
          <a
            href="mailto:iliachry@iliachry.gr"
            className="text-xs text-zinc-400 hover:text-white transition-colors"
          >
            iliachry@iliachry.gr
          </a>
        </div>
      </header>

      {/* ─── MAIN MINIMAL CONTENT (FITS IN SINGLE VIEWPORT) ─── */}
      <main className="w-full max-w-4xl mx-auto my-auto py-6">
        {/* Core Statement */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-snug text-white mb-3">
            Ilias Chrysovergis engineers spatial computing, digital twins & sovereign systems.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            Software architect, researcher, and founder bridging deep science and production software. Co-founder of Metatopia, PhD candidate, and U.S. Patent holder.
          </p>
        </div>

        {/* Minimal Ventures & Systems List */}
        <div className="space-y-3.5 sm:space-y-4 border-t border-zinc-800 pt-5 sm:pt-6">
          <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
            Selected Systems & Initiatives
          </div>

          {/* Item 1: Metatopia */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://metatopia.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                Metatopia ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
                Sovereign infrastructure studio — engineering custom silicon, micro-datacenters, and production SaaS.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              Founder & CTO
            </span>
          </div>

          {/* Item 2: Sovereign Mini Datacenter */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://iliachry.gr/sovereign-mini-datacenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                Sovereign Mini Datacenter ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
                Self-powered micro-datacenters hosting open-source enterprise cloud suites and AI models for complete data autonomy.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              Prototyping
            </span>
          </div>

          {/* Item 3: PestView */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://pestview.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                PestView ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Smart IoT hardware & SaaS platform for pest control management and operational data.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              100+ Active IoT Nodes
            </span>
          </div>

          {/* Item 4: Poetics */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://poeticsvr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                Poetics ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Pop-up immersive VR cinema experiences and spatial storytelling.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              3,500+ Screenings
            </span>
          </div>

          {/* Item 5: NTUA Hydroinformatics Digital Twin */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://uwmh.civil.ntua.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                Attica Regional Digital Twin ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Hydroinformatics visual digital twin and flood simulation platforms at NTUA / UWMH.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              NTUA / Lead Dev
            </span>
          </div>

          {/* Item 6: The Generator */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-3 border-b border-zinc-900">
            <div>
              <a
                href="https://metatopia.gr/generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:underline inline-flex items-center gap-1 mb-0.5"
              >
                The Generator ↗
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Anti-entropic parametric audio engine. Interactive Web Audio synthesizer — instruments over algorithms.
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              R&D
            </span>
          </div>
        </div>

        {/* ─── FOUNDER CREDIBILITY LINE ─── */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-zinc-900">
          <p className="text-[11px] sm:text-xs font-mono text-zinc-500">
            Ilias Chrysovergis — Founder (Metatopia) · Patent (USPTO #9965675) · Published (IEEE, ACM SIGGRAPH, Springer) · Imagine Cup World Champion
          </p>
        </div>
      </main>

      {/* ─── FOOTER (ALWAYS VISIBLE IN VIEWPORT) ─── */}
      <footer className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-500 shrink-0 pt-4 border-t border-zinc-900">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} Ilias Chrysovergis</span>
          <span className="hidden sm:inline text-zinc-800">•</span>
          <a
            href="https://github.com/iliachry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="https://scholar.google.com/citations?user=x5Zq1-QAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Scholar
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="https://linkedin.com/in/ilias-chrysovergis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="https://x.com/iliachry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            X
          </a>
        </div>
        <a
          href="mailto:iliachry@iliachry.gr"
          className="text-white hover:underline shrink-0"
        >
          Contact →
        </a>
      </footer>
    </div>
  );
}
