import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24 text-center font-sans selection:bg-white selection:text-black">
      <div className="max-w-md w-full space-y-6">
        <div className="flex justify-center mb-2">
          <div className="w-14 h-14 rounded border border-zinc-800 flex items-center justify-center bg-zinc-950 font-mono text-emerald-400 text-sm">
            404
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
          Signal not found
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
          The requested coordinate does not exist.
        </p>

        <div className="pt-4 font-mono">
          <Link
            href="/"
            className="text-xs px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 rounded transition-all inline-block"
          >
            ← Return to index
          </Link>
        </div>
      </div>
    </div>
  );
}
