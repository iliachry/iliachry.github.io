"use client";

import { useState, useEffect } from "react";

export function DisclaimerPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the disclaimer
    const hasAcknowledged = localStorage.getItem("ai-disclaimer-acknowledged");
    if (!hasAcknowledged) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("ai-disclaimer-acknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)] bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl shadow-2xl rounded-lg p-4 flex flex-col gap-3 font-sans text-xs animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex gap-3 items-start">
        <div className="text-emerald-400 shrink-0 mt-0.5 font-mono text-sm">
          [!]
        </div>
        <p className="text-zinc-400 leading-relaxed">
          This website was built with AI assistance and reflects ongoing research and engineering projects.
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={handleAcknowledge}
          className="text-[11px] font-mono px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-white hover:border-emerald-500/50 hover:text-emerald-400 rounded transition-all cursor-pointer"
        >
          [Acknowledge]
        </button>
      </div>
    </div>
  );
}
