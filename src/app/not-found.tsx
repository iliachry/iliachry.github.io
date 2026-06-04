import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-32 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* Monogram or Graphic */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-surface-elevated">
            <span className="font-mono text-sm text-text-tertiary">404</span>
          </div>
        </div>

        <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
          Page not found
        </h1>

        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Use the link below to return home.
        </p>

        <div className="pt-4">
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
