import { AnimateIn } from "@/components/ui/animate-in";
import { Button } from "@/components/ui/button";

export function ContactCTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-900 bg-zinc-950/60">
      <div className="container-wide">
        <AnimateIn className="max-w-2xl">
          <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
            Initiate Contact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-4 text-balance">
            Building something that matters?
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-8">
            Whether you&apos;re exploring research collaboration, evaluating technical
            architecture, or looking for deep-tech partnership — let&apos;s connect.
          </p>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <Button href="/contact" variant="primary">
              Start a Conversation →
            </Button>
            <a
              href="mailto:iliachry@iliachry.gr"
              className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              iliachry@iliachry.gr ↗
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
