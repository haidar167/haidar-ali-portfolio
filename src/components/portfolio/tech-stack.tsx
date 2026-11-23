"use client";

import { techStack } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="Tech Stack"
          title="Tools I"
          highlight="Master"
          description="Battle-tested technologies for every layer of your product — from pixel to production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <div className="panel h-full p-6">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00ff88]">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:border-[#00ff88]/40 hover:text-[#00ff88]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
