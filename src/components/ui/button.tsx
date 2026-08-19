import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "terminal";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-all duration-150 rounded px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 select-none cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 active:scale-[0.98] font-medium shadow-sm",
    secondary:
      "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 active:scale-[0.98]",
    ghost:
      "text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900/60 active:scale-[0.98] font-mono text-xs",
    terminal:
      "font-mono text-xs px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 rounded",
  };

  const disabledStyles = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "";

  const classes = `${base} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
