"use client";

import { Zap, Layers, MessageCircle, TrendingUp } from "lucide-react";
import { whyMe } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

const iconMap = { Zap, Layers, MessageCircle, TrendingUp } as const;

export function WhyMe() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.015] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="Why Me"
          title="Why Work"
          highlight="With Me"
          description="Hiring a developer should feel safe. Here is exactly what you can count on."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyMe.map((w, i) => {
            const Icon = iconMap[w.icon as keyof typeof iconMap];
            const violet = i % 2 === 1;
            return (
              <FadeIn key={w.title} delay={i * 0.08}>
                <div
                  className={`panel flex h-full flex-col p-6 ${
                    violet ? "panel-violet" : ""
                  }`}
                >
                  <span
                    className={`icon-chip ${violet ? "icon-chip-violet" : ""}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {w.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
