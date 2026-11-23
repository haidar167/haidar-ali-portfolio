"use client";

import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/profile";
import { FadeIn, SectionHeading } from "./shared";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          pill="Testimonials"
          title="What Clients"
          highlight="Say"
          description="Real feedback from people who trusted me with their projects."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name + i} delay={i * 0.1}>
              <figure className="panel flex h-full flex-col p-7">
                <Quote className="h-7 w-7 text-[#00ff88]/60" aria-hidden="true" />
                <div
                  className="mt-3 flex gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5 fill-[#00ff88] text-[#00ff88]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{t.role}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
