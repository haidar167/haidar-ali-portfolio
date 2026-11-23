"use client";

import {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Plug,
  Rocket,
  Wrench,
  Megaphone,
  Clapperboard,
} from "lucide-react";
import { services } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

const iconMap = {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Plug,
  Rocket,
  Wrench,
  Megaphone,
  Clapperboard,
} as const;

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="Services"
          title="What I"
          highlight="Build"
          description="Everything you need to launch, run and grow your business online — designed, built and deployed by one person."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.title} delay={i * 0.07}>
                <article className="panel flex h-full flex-col p-6">
                  <span className="icon-chip">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Philosophy strip — like Noor's "chatbots vs agentic AI" */}
        <FadeIn delay={0.1} className="mt-14">
          <div className="panel panel-violet relative overflow-hidden p-8 sm:p-10">
            <div
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(168,85,247,0.7), transparent)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Most developers give you
                </p>
                <p className="mt-3 text-lg leading-relaxed text-zinc-400 line-through decoration-zinc-600">
                  A generic template, a slow site, and silence after the invoice is paid.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#a855f7]">
                  What you get here
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white">
                  A custom-built product measured against your business goals —
                  fast, maintainable, and delivered with{" "}
                  <span className="neon-text font-semibold">
                    daily updates and post-launch support
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
