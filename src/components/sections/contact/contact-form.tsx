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
      const formDataObj = new FormData(e.currentTarget);

      const response = await fetch("https://formspree.io/f/mojzvwoq", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", type: "", message: "" });
      } else {
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            "Transmission failed. Please retry or email directly at iliachry@iliachry.gr."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network connection interrupted. Please email directly at iliachry@iliachry.gr."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mono-card p-8 md:p-10 rounded-lg text-center font-mono">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg">
            ✓
          </div>
        </div>
        <h3 className="text-base font-medium text-white mb-2">
          [MESSAGE DISPATCHED]
        </h3>
        <p className="text-xs text-zinc-400 mb-6 font-sans">
          Your transmission was encrypted and delivered. Expect a response within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs font-mono text-emerald-400 hover:underline cursor-pointer"
        >
          [Dispatch Another Message]
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
      {/* Error Banner */}
      {status === "error" && (
        <div className="p-3 bg-red-950/40 border border-red-800/40 rounded text-xs text-red-400 font-mono">
          [ERROR] {errorMessage}
        </div>
      )}

      {/* Hidden fields for Formspree */}
      <input
        type="hidden"
        name="_subject"
        value={`[iliachry.gr] ${formData.type || "Contact"} from ${formData.name}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5"
          >
            Your Name
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
            className="w-full px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 rounded text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors font-sans"
            placeholder="Ada Lovelace"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5"
          >
            Return Email
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
            className="w-full px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 rounded text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors font-sans"
            placeholder="ada@domain.com"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-type"
          className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5"
        >
          Category / Subject
        </label>
        <select
          id="contact-type"
          name="inquiry_type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 rounded text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors font-sans"
          disabled={status === "submitting"}
        >
          <option value="" className="bg-zinc-950">Select inquiry classification</option>
          <option value="Research Collaboration" className="bg-zinc-950">Research Collaboration</option>
          <option value="Startup / Investment" className="bg-zinc-950">Startup / Investment</option>
          <option value="Technical Consulting" className="bg-zinc-950">Technical Architecture</option>
          <option value="Speaking / Media" className="bg-zinc-950">Speaking & Keynotes</option>
          <option value="Other" className="bg-zinc-950">Other Inquiries</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5"
        >
          Message Body
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
          className="w-full px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 rounded text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors resize-y font-sans leading-relaxed"
          placeholder="Brief description of your project, research scope, or collaboration goal..."
          disabled={status === "submitting"}
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} />

      <div className="pt-2">
        <Button variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "[TRANSMITTING...]" : "Send Message →"}
        </Button>
      </div>
    </form>
  );
}
