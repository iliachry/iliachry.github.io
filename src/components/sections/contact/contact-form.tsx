"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Use native FormData from the form element — includes name attributes
      const formDataObj = new FormData(e.currentTarget);

      const response = await fetch(
        "https://formspree.io/f/mojzvwoq",
        {
          method: "POST",
          body: formDataObj,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", type: "", message: "" });
      } else {
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            "Something went wrong. Please try again or email me directly at iliachry@iliachry.gr."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Could not send your message. Please check your connection or email me directly at iliachry@iliachry.gr."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 bg-surface-elevated border border-border rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#54C258]/10 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#54C258"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Message sent
        </h3>
        <p className="text-sm text-text-secondary mb-6">
          Thank you for reaching out. I&apos;ll respond within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-accent hover:text-accent-hover transition-colors link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Banner */}
      {status === "error" && (
        <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-md text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      {/* Hidden fields for Formspree */}
      <input type="hidden" name="_subject" value={`[iliachry.gr] ${formData.type || "Contact"} from ${formData.name}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Your name"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="you@example.com"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-type"
          className="block text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2"
        >
          Inquiry Type
        </label>
        <select
          id="contact-type"
          name="inquiry_type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none"
          disabled={status === "submitting"}
        >
          <option value="">Select a category</option>
          <option value="Research Collaboration">Research Collaboration</option>
          <option value="Startup / Investment">Startup / Investment</option>
          <option value="Technical Consulting">Technical Consulting</option>
          <option value="Speaking / Media">Speaking / Media</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
          placeholder="Tell me about your project, research interest, or idea..."
          disabled={status === "submitting"}
        />
      </div>

      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} />

      <Button variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending…
          </span>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
