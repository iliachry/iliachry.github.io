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
      <header className="flex items-center justify-between w-full max-w-3xl mx-auto shrink-0">
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
        </div>
      </header>

      {/* ─── MAIN MINIMAL CONTENT (FITS IN SINGLE VIEWPORT) ─── */}
      <main className="w-full max-w-3xl mx-auto my-auto py-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-snug text-white mb-6">
          Ilias Chrysovergis engineers spatial systems, digital twins & AI architectures.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
          Software Architect, Developer & Researcher bridging deep science with real-world execution. Co-founder of Metatopia, PhD candidate, and U.S. Patent holder.
        </p>
      </main>

      {/* ─── FOOTER (ALWAYS VISIBLE IN VIEWPORT) ─── */}
      <footer className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500 shrink-0 pt-4 border-t border-zinc-900">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
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
            href="https://scholar.google.com/citations?user=ionnzvMAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Scholar
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="https://www.linkedin.com/in/ilias-chrysovergis/"
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
          <span className="text-zinc-800">•</span>
          <a
            href="/Chrysovergis_Resume_Portfolio.pdf"
            download
            className="hover:text-emerald-400 transition-colors"
          >
            Resume / Portfolio (PDF)
          </a>
        </div>
        <a
          href="mailto:iliachry@gmail.com"
          className="text-white hover:underline shrink-0"
        >
          iliachry@gmail.com ↗
        </a>
      </footer>
    </div>
  );
}
