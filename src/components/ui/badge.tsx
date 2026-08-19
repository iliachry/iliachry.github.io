interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "emerald";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default:
      "bg-zinc-900/90 text-zinc-400 border border-zinc-800",
    accent:
      "bg-zinc-900 text-zinc-200 border border-zinc-700",
    emerald:
      "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono tracking-tight ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
