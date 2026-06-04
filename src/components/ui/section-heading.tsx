import { AnimateIn } from "./animate-in";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimateIn className={`mb-12 md:mb-16 ${className}`}>
      {label && (
        <span className="section-label mb-3 block">{label}</span>
      )}
      <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-text-primary text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </AnimateIn>
  );
}
