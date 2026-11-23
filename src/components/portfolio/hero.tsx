"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { profile } from "@/lib/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* background grid + glows */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,136,0.55), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 top-64 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
              <span className="pulse-dot" />
              Available for new projects
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 sm:inline-flex">
              <Cpu className="h-3.5 w-3.5 text-[#a855f7]" />
              AI-Powered Dev Workflow
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            {profile.role}
            <span className="neon-text block">Who Ships Fast.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-sm text-[#00ff88] sm:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="btn-neon inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold sm:text-base"
            >
              See What I Build
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-neon inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold sm:text-base"
            >
              <Sparkles className="h-4 w-4" />
              Hire Me on Upwork
            </a>
          </motion.div>

          {/* stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] py-5"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="px-4 text-center sm:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 sm:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right: terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="panel overflow-hidden">
            {/* window bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                developer.js
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7">
              <code>
                <span className="text-[#a855f7]">const</span>{" "}
                <span className="text-white">developer</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-[#a855f7]">{"{"}</span>
                {"\n  "}
                <span className="text-zinc-300">name</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-[#00ff88]">&quot;{profile.name}&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n  "}
                <span className="text-zinc-300">role</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-[#00ff88]">&quot;Web Developer&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n  "}
                <span className="text-zinc-300">stack</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-zinc-500">[</span>
                <span className="text-[#00ff88]">&quot;Next.js&quot;</span>
                <span className="text-zinc-500">,</span>{" "}
                <span className="text-[#00ff88]">&quot;React&quot;</span>
                <span className="text-zinc-500">,</span>{" "}
                <span className="text-[#00ff88]">&quot;Node.js&quot;</span>
                <span className="text-zinc-500">],</span>
                {"\n  "}
                <span className="text-zinc-300">delivery</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-[#00ff88]">&quot;fast&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n  "}
                <span className="text-zinc-300">available</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-[#a855f7]">true</span>
                {"\n"}
                <span className="text-[#a855f7]">{"}"}</span>
                <span className="text-zinc-500">;</span>
                {"\n\n"}
                <span className="text-zinc-400">{"// while (you.sleep()) {"}</span>
                {"\n"}
                <span className="text-zinc-400">{"//   business.grows();"}</span>
                {"\n"}
                <span className="text-zinc-400">{"// }"}</span>
              </code>
            </pre>
          </div>

          {/* floating chips */}
          <div className="panel absolute -left-8 -bottom-6 flex items-center gap-2.5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
            <span className="text-xs font-medium text-zinc-300">
              Deployed to production
            </span>
          </div>
          <div className="panel panel-violet absolute -right-4 -top-5 px-4 py-2.5">
            <span className="font-mono text-xs text-[#a855f7]">
              90+ Lighthouse
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
