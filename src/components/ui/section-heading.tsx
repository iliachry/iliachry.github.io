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
    <AnimateIn className={`mb-10 md:mb-14 ${className}`}>
      {label && (
        <div className="text-[11px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
          {label}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </AnimateIn>
  );
}
