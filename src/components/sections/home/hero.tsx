"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm font-medium text-accent mb-4 tracking-wide uppercase"
          >
            {siteConfig.name}
          </motion.p>

          {/* Positioning Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="heading-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.08] text-balance"
          >
            Building intelligent spatial systems{" "}
            <span className="text-text-secondary">for the physical world.</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            {siteConfig.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-4"
          >
            <Button href="/work" variant="primary">
              View Work
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
            </Button>
            <Button href="/contact" variant="secondary">
              Collaborate
            </Button>
          </motion.div>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-20 h-px bg-border origin-left"
        />
      </div>
    </section>
  );
}
