'use client';

import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import {} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// The actual runtime lifecycle this SDK produces — not decoration.
const trace = [
  { type: 'call', text: 'runner.run(agent, "Find latest AI news")' },
  { type: 'tool', text: 'tool_call  → searchTool' },
  { type: 'tool', text: 'tool_result ← 6 sources found' },
  { type: 'done', text: 'run_completed  in 842ms' },
];

function TracePlayback() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= trace.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="border-border space-y-2 border-t px-6 py-5 font-mono text-[13px]">
      {trace.slice(0, visible).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span
            className={
              line.type === 'done'
                ? 'text-[#FF7A00]'
                : line.type === 'tool'
                  ? 'text-zinc-500'
                  : 'text-zinc-400'
            }
          >
            {line.text}
          </span>
          {i === visible - 1 && visible < trace.length && (
            <span className="h-3.5 w-[6px] animate-pulse bg-[#FF7A00]/70" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-24">
      <div className="agni-glow pointer-events-none absolute top-0 left-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={item}
            className="text-foreground bg-muted/30 border-border mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7A00]/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
            </span>
            Production runtime for AI agents
          </motion.div>

          <motion.h1
            variants={item}
            className="text-foreground text-5xl leading-[0.95] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[88px]"
          >
            Build reliable
            <br />
            <span className="text-[#FF7A00]">AI agents</span> with TypeScript.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg leading-8"
          >
            A TypeScript-first runtime for building AI agents with tools, providers,
            memory, and complete execution control.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#get-started"
              className="focus-visible:ring-offset-background flex items-center justify-center gap-2 rounded-lg bg-[#FF7A00] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#FF8C1A] focus-visible:ring-2 focus-visible:ring-[#FF7A00]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Start building
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#architecture"
              className="border-border text-foreground focus-visible:ring-offset-background flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors duration-200 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Code2 size={18} />
              Architecture
            </Link>
          </motion.div>
        </div>

        {/* Runtime preview — a real trace, not just a code snippet */}
        <motion.div variants={item} className="relative mx-auto mt-20 max-w-4xl">
          <div className="agni-glow pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[300px] -translate-y-1/2 rounded-full opacity-30 blur-3xl" />

          <div className="border-border bg-card overflow-hidden rounded-xl border shadow-[0_30px_100px_-40px_rgba(255,122,0,0.25)]">
            {/* Editor Header */}

            <div className="border-border bg-muted/30 relative flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 font-mono text-xs">
                <span className="text-foreground border-b border-[#FF7A00] pb-3">
                  agent.ts
                </span>

                <span className="text-muted-foreground">runtime.trace</span>
              </div>

              <div className="border-border bg-background/50 text-muted-foreground flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                running
              </div>
            </div>

            {/* Code Area */}

            <div className="flex font-mono text-[13px] leading-7">
              <div className="border-border text-muted-foreground/50 border-r px-4 py-6 text-right select-none">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                ))}
              </div>

              <pre className="text-foreground overflow-x-auto p-6 text-left">
                <code>
                  <span className="text-muted-foreground">const</span>{' '}
                  <span className="text-foreground">agent</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">Agent</span>
                  <span>{'({'}</span>
                  {'\n  '}
                  <span className="text-muted-foreground">name:</span>{' '}
                  <span className="text-emerald-500">&quot;assistant&quot;</span>
                  {'\n\n  '}
                  <span className="text-muted-foreground">provider:</span>{' '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">GeminiProvider</span>
                  <span>()</span>
                  {'\n\n  '}
                  <span className="text-muted-foreground">tools:</span>{' '}
                  <span>[ searchTool ]</span>
                  {'\n'}
                  <span>{'});'}</span>
                  {'\n\n'}
                  <span className="text-muted-foreground">const</span> <span>result</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-muted-foreground">await</span>{' '}
                  <span className="text-[#FF7A00]">runner</span>
                  <span>.run(</span>
                  {'\n  '}
                  <span>agent</span>
                  {'\n'}
                  <span>);</span>
                </code>
              </pre>
            </div>

            {/* Runtime Trace */}

            <div className="border-border bg-muted/20 border-t px-6 py-4 font-mono text-xs">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-[#FF7A00]">→</span> agent initialized
                </p>

                <p className="text-muted-foreground">
                  <span className="text-[#FF7A00]">→</span> tool_call: searchTool
                </p>

                <p className="text-muted-foreground">
                  <span className="text-[#FF7A00]">→</span> tool_result: 6 sources found
                </p>

                <p className="text-foreground">
                  <span className="text-[#FF7A00]">✓</span> completed in 842ms
                </p>
              </div>
            </div>

            <TracePlayback />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
