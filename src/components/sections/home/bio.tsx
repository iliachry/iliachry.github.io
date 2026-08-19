import { AnimateIn } from "@/components/ui/animate-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BioSection() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Photo */}
          <AnimateIn className="md:col-span-4 lg:col-span-3">
            <div className="relative aspect-[4/5] max-w-xs rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src="/images/profile.jpeg"
                alt="Ilias Chrysovergis"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </AnimateIn>

          {/* Bio Text */}
          <AnimateIn className="md:col-span-8 lg:col-span-9" delay={0.1}>
            <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
              Background & Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
              Engineer. Researcher. Founder.
            </h2>
            <div className="space-y-4 text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                I&apos;m a software architect, researcher, and founder based in Greece, working
                at the intersection of hydroinformatics, AI, spatial computing, and systems
                engineering. My work bridges academic research and real product execution — turning
                complex physical phenomena into tools that people can actually use.
              </p>
              <p>
                My path spans Imperial College London, the National Technical
                University of Athens, and research labs across Europe, while simultaneously
                co-founding Metatopia — sovereign infrastructure and spatial studio — and building
                products across XR, IoT, and decision-support systems.
              </p>
              <p>
                I&apos;m currently a PhD candidate at the University of Thessaly and an engineer who believes the most impactful technology is built by people who understand both the science and the systems engineering required to ship it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 font-mono">
              <Button href="/about" variant="secondary">
                Full Background & Journey →
              </Button>
              <a
                href="/Ilias_Chrysovergis_CV.pdf"
                download
                className="text-xs font-mono px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 rounded transition-all inline-flex items-center gap-1.5"
              >
                Download CV ↗
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
