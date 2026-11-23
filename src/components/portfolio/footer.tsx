"use client";

import { ArrowUp } from "lucide-react";
import { profile, navLinks, services, footerTagline } from "@/lib/profile";
import { OrcidIcon } from "./orcid-icon";

function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          {/* Brand */}
          <div>
            <a href="#top" className="font-mono text-lg font-bold">
              <span className="neon-text">&lt;{profile.initials} /&gt;</span>{" "}
              <span className="text-white">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {footerTagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-[#00ff88]/40 hover:text-[#00ff88]"
              >
                <LinkedinGlyph className="h-4 w-4" />
              </a>
              <a
                href={profile.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition-opacity hover:opacity-80"
              >
                <OrcidIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Services list */}
          <nav aria-label="Services">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00ff88]">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00ff88]">
              Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top */}
          <div className="md:justify-self-end">
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-[#00ff88]/50 hover:text-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.25)]"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {year} {profile.name}. Built with AI-powered speed, delivered with
            care.
          </p>
          <p className="font-mono text-xs text-zinc-600">
            {profile.role} · Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
