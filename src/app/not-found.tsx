import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md w-full space-y-5">
        <div className="flex justify-center mb-2">
          <div className="w-14 h-14 rounded border border-zinc-800 flex items-center justify-center bg-zinc-950/80 font-mono text-emerald-400 text-xs">
            404
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
          Signal not found
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
          The requested coordinate doesn&apos;t exist or has been relocated in the network.
        </p>

        <div className="pt-3 font-mono">
          <Link href="/">
            <Button variant="primary">Return to Base Node →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
