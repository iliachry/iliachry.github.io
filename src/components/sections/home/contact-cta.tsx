import { AnimateIn } from "@/components/ui/animate-in";
import { Button } from "@/components/ui/button";

export function ContactCTASection() {
  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="container-wide">
        <AnimateIn className="max-w-2xl">
          <span className="section-label mb-4 block">Get in Touch</span>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 text-balance">
            Building something that matters?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Whether you&apos;re exploring a research collaboration, evaluating a technical
            partnership, or need architectural leadership for a complex system —
            I&apos;d like to hear about it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <Button
              href="mailto:iliachry@iliachry.com"
              variant="ghost"
              external
            >
              iliachry@iliachry.com
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
