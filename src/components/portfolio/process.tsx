"use client";

import { process } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

export function Process() {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-white/5 bg-white/[0.015] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="How It Works"
          title="From Idea to Launch in"
          highlight="4 Steps"
          description="A simple, transparent process designed so you always know what happens next."
        />

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.1}>
              <li className="panel relative flex h-full flex-col p-6">
                <span className="font-mono text-4xl font-bold text-[#00ff88]/25">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                {i < process.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#00ff88]/50 to-transparent lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
