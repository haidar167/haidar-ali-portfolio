"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Scroll-reveal wrapper used across all sections
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Consistent section header: pill label + title + optional description
export function SectionHeading({
  pill,
  title,
  highlight,
  description,
}: {
  pill: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
      <span className="section-pill">{pill}</span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}{" "}
        {highlight ? <span className="neon-text">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
