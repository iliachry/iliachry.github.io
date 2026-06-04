import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium text-sm transition-all duration-200 rounded-md px-5 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover active:scale-[0.98]",
    secondary:
      "border border-border text-text-primary hover:border-accent hover:text-accent active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-surface active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
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
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
