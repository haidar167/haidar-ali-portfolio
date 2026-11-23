"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

export function Projects() {
  return (
    <section
      id="work"
      className="relative border-y border-white/5 bg-white/[0.015] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="Portfolio"
          title="Live Products"
          highlight="I've Shipped"
          description="Not mockups — real products running in production, used by real customers every day."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isViolet = project.accent === "purple";
            return (
              <FadeIn key={project.name} delay={i * 0.1}>
                <article className="panel flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <p
                        className={`mt-1 text-sm font-medium ${
                          isViolet ? "violet-text" : "neon-text"
                        }`}
                      >
                        {project.tagline}
                      </p>
                    </div>
                    <span
                      className={`icon-chip shrink-0 ${
                        isViolet ? "icon-chip-violet" : ""
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isViolet
                        ? "text-[#a855f7] hover:text-[#c084fc]"
                        : "text-[#00ff88] hover:text-[#5cffad]"
                    }`}
                  >
                    Visit Live Site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
