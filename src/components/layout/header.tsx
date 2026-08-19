"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { Monogram } from "@/components/ui/monogram";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Quick listener to scroll to or toggle console
  const handleCliClick = () => {
    const consoleEl = document.getElementById("system-console");
    if (consoleEl) {
      consoleEl.scrollIntoView({ behavior: "smooth" });
      // Focus input if available
      const input = consoleEl.querySelector("input");
      if (input) input.focus();
    } else {
      // If on inner page, route home and jump to console
      window.location.href = "/#system-console";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~" || (e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        handleCliClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80">
      <nav
        className="container-wide flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white group"
          aria-label="Home"
        >
          <Monogram className="w-7 h-7 text-white group-hover:text-emerald-400 transition-colors" />
          <span className="text-sm font-bold tracking-tight text-white hidden sm:inline">
            iliachry
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => {
            const href = item.href as string;
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs font-mono transition-colors link-underline ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CLI Easter egg / Fast trigger */}
          <button
            onClick={handleCliClick}
            className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 rounded transition-all flex items-center gap-1"
            title="Press ~ or Ctrl+K to jump to CLI"
          >
            <span>[~]</span>
            <span>CLI</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={handleCliClick}
            className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 rounded transition-all"
          >
            [~] CLI
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navigation.map((item) => {
                const href = item.href as string;
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-mono transition-colors ${
                      isActive
                        ? "text-emerald-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
