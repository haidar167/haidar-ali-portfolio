"use client";

import { useState } from "react";
import { Loader2, Mail, Send, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";
import { WhatsAppIcon, whatsappLink, whatsappGreeting } from "./whatsapp-button";
import { OrcidIcon } from "./orcid-icon";
import { toast } from "@/hooks/use-toast";

type Status = "idle" | "loading" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email and project details are required.",
        variant: "destructive",
      });
      return;
    }
    setStatus("loading");

    // Primary delivery: FormSubmit (works on static hosts like GitHub Pages
    // and forwards the message straight to the owner's Gmail inbox).
    // Fallback: the /api/contact database route (used on full servers,
    // e.g. local development or a Node host).
    const formsubmit = fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `New inquiry from ${form.name}`,
        email: form.email,
        message: form.message,
        _subject: `New portfolio inquiry from ${form.name}`,
        _template: "table",
      }),
    });

    const api = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    let emailSent = false;
    let stored = false;
    try {
      emailSent = (await formsubmit).ok;
    } catch {
      emailSent = false;
    }
    try {
      stored = (await api).ok;
    } catch {
      stored = false;
    }

    if (emailSent || stored) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll reply within 24 hours.",
      });
    } else {
      setStatus("idle");
      toast({
        title: "Something went wrong",
        description: `Please try again, or email me directly at ${profile.email}`,
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,136,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          pill="Contact"
          title="Let's Build"
          highlight="Your Project"
          description="Tell me what you need — I usually reply within 24 hours."
        />

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="panel space-y-5 p-6 sm:p-8"
              noValidate={false}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="field-dark w-full rounded-xl px-4 py-3 text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="field-dark w-full rounded-xl px-4 py-3 text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="What do you want to build? Timeline, budget, any links — the more detail, the better."
                  rows={5}
                  className="field-dark w-full resize-none rounded-xl px-4 py-3 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-neon inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Side info */}
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${profile.email}`}
                className="panel group flex items-center gap-4 p-5"
              >
                <span className="icon-chip shrink-0">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Email me directly
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white group-hover:text-[#00ff88]">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={profile.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-violet group flex items-center gap-4 p-5"
              >
                <span className="icon-chip icon-chip-violet shrink-0">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Prefer a platform?
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white group-hover:text-[#a855f7]">
                    Hire me on Upwork
                  </p>
                </div>
              </a>

              <a
                href={whatsappLink(profile.whatsappNumber, whatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex items-center gap-4 p-5"
              >
                <span className="icon-chip icon-chip-whatsapp shrink-0">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Fastest reply
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white group-hover:text-[#25D366]">
                    Chat on WhatsApp
                  </p>
                </div>
              </a>

              <div className="panel flex items-center justify-between p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Socials
                </p>
                <div className="flex gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-[#00ff88]/40 hover:text-[#00ff88]"
                  >
                    <Github className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-[#00ff88]/40 hover:text-[#00ff88]"
                  >
                    <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ORCID profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-opacity hover:opacity-80"
                  >
                    <OrcidIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="panel flex items-center gap-3 p-5">
                <span className="pulse-dot shrink-0" />
                <p className="text-sm text-zinc-400">
                  Currently{" "}
                  <span className="font-semibold text-[#00ff88]">
                    accepting new projects
                  </span>{" "}
                  for this quarter.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
