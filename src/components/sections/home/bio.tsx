import { AnimateIn } from "@/components/ui/animate-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BioSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Photo */}
          <AnimateIn className="md:col-span-4 lg:col-span-3">
            <div className="relative aspect-[4/5] max-w-xs rounded-lg overflow-hidden bg-surface border border-border">
              <Image
                src="/images/profile.jpeg"
                alt="Ilias Chrysovergis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </AnimateIn>

          {/* Bio Text */}
          <AnimateIn className="md:col-span-8 lg:col-span-9" delay={0.15}>
            <span className="section-label mb-4 block">About</span>
            <h2 className="heading-serif text-3xl md:text-4xl text-text-primary mb-6">
              Engineer. Researcher. Founder.
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed max-w-2xl">
              <p>
                I&apos;m a software architect, researcher, and founder based in Greece, working
                at the intersection of hydroinformatics, AI, spatial computing, and systems
                engineering. My work bridges academic research and real product execution — turning
                complex physical phenomena into tools that people can actually use.
              </p>
              <p>
                My path has taken me through Imperial College London, the National Technical
                University of Athens, and research labs across Europe, while simultaneously
                co-founding Metatopia — Greece&apos;s first metaverse studio — and building
                products across agriculture, creative tech, and decision-support systems.
              </p>
              <p>
                I&apos;m currently a PhD candidate at the University of Thessaly, investigating
                metaverse architectures for wireless communications, and a lecturer at
                Mediterranean College (University of Derby). I believe the most impactful
                technology is built by people who understand both the science and the systems
                engineering required to ship it.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Full story
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
