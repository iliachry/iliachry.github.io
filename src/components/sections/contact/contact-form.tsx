"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (Formspree, Netlify Forms, or custom API)
    // Example with Formspree:
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-surface-elevated border border-border rounded-lg text-center">
        <div className="text-accent text-2xl mb-3">✓</div>
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Message sent
        </h3>
        <p className="text-sm text-text-secondary">
          Thank you for reaching out. I&apos;ll respond within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Your name"
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
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="you@example.com"
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
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none"
        >
          <option value="">Select a category</option>
          <option value="research">Research Collaboration</option>
          <option value="startup">Startup / Investment</option>
          <option value="consulting">Technical Consulting</option>
          <option value="speaking">Speaking / Media</option>
          <option value="other">Other</option>
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
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-surface-elevated border border-border rounded-md text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
          placeholder="Tell me about your project, research interest, or idea..."
        />
      </div>

      <Button variant="primary">
        Send message
      </Button>
    </form>
  );
}
