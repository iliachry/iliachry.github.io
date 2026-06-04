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
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("ai-disclaimer-acknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)] bg-surface border border-border shadow-lg rounded-lg p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex gap-3 items-start">
        <div className="text-accent shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          This website was built with AI assistance and is not 100% human-curated.
          Some details may be inaccurate or differ slightly from reality.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleAcknowledge}
          className="text-xs font-medium px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          I understand
        </button>
      </div>
    </div>
  );
}
