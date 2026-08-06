'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Zap, Shield, GitBranch, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
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

export function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:pt-29 lg:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-5 xl:gap-20"
        >
          {/* ─── LEFT — Content ─── */}
          <div className="space-y-8 lg:col-span-3">
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-foreground text-5xl leading-[1.05] font-bold tracking-[-0.04em] sm:text-6xl lg:text-[82px]">
                <div>Build reliable</div>
                <div className="relative mt-1 inline-block text-[#FF7A00]">
                  AI agents
                  <span className="absolute -bottom-3 left-0 h-[4px] w-full rounded-full bg-[#FF7A00]/40" />
                </div>
                <div className="text-foreground/90 mt-4">with TypeScript.</div>
              </h1>
            </motion.div>

            <motion.div
              variants={item}
              className="h-0.5 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/0"
            />

            <motion.p
              variants={item}
              className="text-muted-foreground max-w-xl text-lg leading-relaxed tracking-wide"
            >
              A TypeScript-first runtime that gives you complete control over agent
              execution. Every tool call, memory lookup, and validation is visible,
              auditable, and predictable — no black boxes.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: Zap, label: '0.8ms overhead' },
                { icon: Shield, label: 'Type-safe tools' },
                { icon: GitBranch, label: 'Deterministic execution' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border-border bg-surface/50 text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-200 hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/5"
                >
                  <Icon size={14} className="text-[#FF7A00]" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/docs/getting-started/quickstart"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-10 py-4 text-base font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#FF8C1A] hover:shadow-2xl hover:shadow-[#FF7A00]/30 active:scale-[0.97]"
              >
                <Sparkles size={18} />
                Start building
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#architecture"
                className="border-border text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-2 rounded-xl border px-10 py-4 text-base font-medium transition-all duration-200 hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/5"
              >
                <Code2 size={18} />
                View architecture
              </Link>
            </motion.div>
          </div>

          {/* ─── RIGHT — Forge Chamber Visual ─── */}
          <motion.div variants={item} className="space-y-4 lg:col-span-2">
            <div className="border-border bg-surface/30 relative rounded-xl border p-4 backdrop-blur-sm transition-all hover:border-[#FF7A00]/20">
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#FF7A00]/5 to-transparent" />
              <ForgeChamber />
            </div>

            {/* ── Compact execution log ── */}
            <CompactLog />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FORGE CHAMBER SVG ───
function ForgeChamber() {
  const controls = useAnimation();

  const [phase, setPhase] = useState<
    | 'idle'
    | 'input'
    | 'processing'
    | 'tools'
    | 'memory'
    | 'guardrails'
    | 'output'
    | 'rest'
  >('idle');

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        // Input draws in
        setPhase('input');
        await controls.start({ opacity: 1, strokeDashoffset: 0 }, { duration: 0.4 });
        await new Promise((r) => setTimeout(r, 100));

        // Processing beat
        setPhase('processing');
        await controls.start({ opacity: 0.6, scale: 1.02 }, { duration: 0.25 });
        await controls.start({ opacity: 0.3, scale: 1 }, { duration: 0.25 });
        await new Promise((r) => setTimeout(r, 150));

        // Tools activates
        setPhase('tools');
        await controls.start('toolsActive', { duration: 0.3 });
        await new Promise((r) => setTimeout(r, 150));

        // Memory activates
        setPhase('memory');
        await controls.start('memoryActive', { duration: 0.3 });
        await new Promise((r) => setTimeout(r, 150));

        // Guardrails activates
        setPhase('guardrails');
        await controls.start('guardrailsActive', { duration: 0.3 });
        await new Promise((r) => setTimeout(r, 150));

        // Output activates
        setPhase('output');
        await controls.start('outputActive', { duration: 0.3 });
        await new Promise((r) => setTimeout(r, 100));

        // Rest state
        setPhase('rest');
        await new Promise((r) => setTimeout(r, 2000));

        // Reset
        await controls.start({ opacity: 0, strokeDashoffset: 0 }, { duration: 0.3 });
        setPhase('idle');
        await new Promise((r) => setTimeout(r, 300));
      }
    };

    runSequence();
  }, [controls]);

  return (
    <svg
      viewBox="0 0 500 280"
      className="h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Agni forge chamber — controlled thermal process"
    >
      <defs>
        <filter id="chamberGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Input Beam ── */}
      <motion.path
        d="M 20 140 L 125 140"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="80 200"
        strokeDashoffset={-200}
        className="text-foreground/30"
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* ── Forge Chamber (Hexagonal Faceted Block) ── */}
      <motion.polygon
        points="145,85 235,85 255,140 235,195 145,195 125,140"
        fill="var(--background)"
        fillOpacity="0.5"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground/20"
        filter="url(#chamberGlow)"
        animate={controls}
        initial={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {/* Chamber inner glow */}
      <motion.polygon
        points="150,92 230,92 248,140 230,188 150,188 132,140"
        fill="#FF7A00"
        fillOpacity="0.04"
        animate={{
          fillOpacity: phase === 'processing' || phase === 'rest' ? 0.12 : 0.04,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* ── Internal Facet Lines ── */}
      {/* Vertical facet lines */}
      <motion.line
        x1="165"
        y1="95"
        x2="165"
        y2="185"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/15"
        animate={controls}
        initial={{ opacity: 0.15 }}
      />
      <motion.line
        x1="205"
        y1="90"
        x2="205"
        y2="190"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/12"
        animate={controls}
        initial={{ opacity: 0.12 }}
      />
      <motion.line
        x1="235"
        y1="92"
        x2="235"
        y2="188"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/10"
        animate={controls}
        initial={{ opacity: 0.1 }}
      />

      {/* Horizontal facet line */}
      <motion.line
        x1="140"
        y1="140"
        x2="245"
        y2="140"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/15"
        animate={controls}
        initial={{ opacity: 0.15 }}
      />

      {/* Diagonal facet lines */}
      <motion.line
        x1="155"
        y1="115"
        x2="235"
        y2="115"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-foreground/8"
        animate={controls}
        initial={{ opacity: 0.08 }}
      />
      <motion.line
        x1="155"
        y1="165"
        x2="235"
        y2="165"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-foreground/8"
        animate={controls}
        initial={{ opacity: 0.08 }}
      />

      {/* ── Chamber Label ── */}
      <text
        x="188"
        y="127"
        fill="currentColor"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="600"
        letterSpacing="0.2em"
        className="text-foreground/40"
        textAnchor="middle"
      >
        AGNI
      </text>
      <text
        x="188"
        y="144"
        fill="currentColor"
        fontSize="8"
        fontFamily="monospace"
        className="text-foreground/20"
        textAnchor="middle"
      >
        RUNTIME
      </text>

      {/* ── Output Paths ── */}

      {/* Path 1: Tools — thickest, solid */}
      <motion.path
        d="M 255 105 C 310 90, 350 80, 430 72"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 0"
        className="text-foreground/25"
        filter="url(#pathGlow)"
        animate={controls}
        variants={{
          idle: { opacity: 0.25, strokeDashoffset: 0 },
          toolsActive: { opacity: 1, strokeDashoffset: 0, stroke: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0.25 }}
      />
      <motion.circle
        cx="430"
        cy="72"
        r="6"
        fill="currentColor"
        fillOpacity="0.15"
        className="text-foreground/25"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, fill: 'currentColor' },
          toolsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="430"
        cy="72"
        r="2.5"
        fill="currentColor"
        className="text-foreground/25"
        animate={controls}
        variants={{
          idle: { opacity: 0.25, fill: 'currentColor' },
          toolsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.text
        x="438"
        y="76"
        fill="currentColor"
        fontSize="10"
        fontFamily="monospace"
        className="text-foreground/50"
        animate={controls}
        variants={{
          idle: { opacity: 0.5 },
          toolsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      >
        tools
      </motion.text>

      {/* Path 2: Memory — medium, dashed */}
      <motion.path
        d="M 255 140 C 310 138, 350 135, 430 132"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        className="text-foreground/20"
        filter="url(#pathGlow)"
        animate={controls}
        variants={{
          idle: { opacity: 0.2, strokeDashoffset: 0 },
          memoryActive: { opacity: 1, strokeDashoffset: 0, stroke: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0.2 }}
      />
      <motion.circle
        cx="430"
        cy="132"
        r="6"
        fill="currentColor"
        fillOpacity="0.15"
        className="text-foreground/20"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, fill: 'currentColor' },
          memoryActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="430"
        cy="132"
        r="2.5"
        fill="currentColor"
        className="text-foreground/20"
        animate={controls}
        variants={{
          idle: { opacity: 0.2, fill: 'currentColor' },
          memoryActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.text
        x="438"
        y="136"
        fill="currentColor"
        fontSize="10"
        fontFamily="monospace"
        className="text-foreground/50"
        animate={controls}
        variants={{
          idle: { opacity: 0.5 },
          memoryActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      >
        memory
      </motion.text>

      {/* Path 3: Guardrails — medium-thin, dotted */}
      <motion.path
        d="M 255 175 C 310 185, 350 192, 430 195"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="3 8"
        className="text-foreground/18"
        filter="url(#pathGlow)"
        animate={controls}
        variants={{
          idle: { opacity: 0.18, strokeDashoffset: 0 },
          guardrailsActive: { opacity: 1, strokeDashoffset: 0, stroke: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0.18 }}
      />
      <motion.circle
        cx="430"
        cy="195"
        r="6"
        fill="currentColor"
        fillOpacity="0.15"
        className="text-foreground/18"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, fill: 'currentColor' },
          guardrailsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="430"
        cy="195"
        r="2.5"
        fill="currentColor"
        className="text-foreground/18"
        animate={controls}
        variants={{
          idle: { opacity: 0.18, fill: 'currentColor' },
          guardrailsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.text
        x="438"
        y="199"
        fill="currentColor"
        fontSize="10"
        fontFamily="monospace"
        className="text-foreground/50"
        animate={controls}
        variants={{
          idle: { opacity: 0.5 },
          guardrailsActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      >
        guardrails
      </motion.text>

      {/* Path 4: Output — thinnest, solid */}
      <motion.path
        d="M 255 210 C 310 230, 350 245, 430 258"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 0"
        className="text-foreground/15"
        filter="url(#pathGlow)"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, strokeDashoffset: 0 },
          outputActive: { opacity: 1, strokeDashoffset: 0, stroke: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0.15 }}
      />
      <motion.circle
        cx="430"
        cy="258"
        r="6"
        fill="currentColor"
        fillOpacity="0.15"
        className="text-foreground/15"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, fill: 'currentColor' },
          outputActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="430"
        cy="258"
        r="2.5"
        fill="currentColor"
        className="text-foreground/15"
        animate={controls}
        variants={{
          idle: { opacity: 0.15, fill: 'currentColor' },
          outputActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.text
        x="438"
        y="262"
        fill="currentColor"
        fontSize="10"
        fontFamily="monospace"
        className="text-foreground/50"
        animate={controls}
        variants={{
          idle: { opacity: 0.5 },
          outputActive: { opacity: 1, fill: '#FF7A00' },
        }}
        transition={{ duration: 0.3 }}
      >
        output
      </motion.text>

      {/* ── Split particles ── */}
      {[
        { cx: 257, cy: 100, dx: 8, dy: -4 },
        { cx: 259, cy: 140, dx: 10, dy: 0 },
        { cx: 257, cy: 178, dx: 8, dy: 4 },
        { cx: 258, cy: 212, dx: 6, dy: 8 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="1.5"
          fill="#FF7A00"
          fillOpacity="0.6"
          animate={controls}
          variants={{
            idle: { opacity: 0, scale: 0, x: 0, y: 0 },
            toolsActive: { opacity: [0, 0.8, 0], scale: [0, 2.5, 0], x: p.dx, y: p.dy },
            memoryActive: { opacity: [0, 0.8, 0], scale: [0, 2.5, 0], x: p.dx, y: p.dy },
            guardrailsActive: {
              opacity: [0, 0.8, 0],
              scale: [0, 2.5, 0],
              x: p.dx,
              y: p.dy,
            },
            outputActive: { opacity: [0, 0.8, 0], scale: [0, 2.5, 0], x: p.dx, y: p.dy },
          }}
          transition={{ duration: 0.4 }}
        />
      ))}

      {/* ── Ambient glow behind chamber ── */}
      <motion.circle
        cx="190"
        cy="140"
        r="80"
        fill="#FF7A00"
        fillOpacity="0.04"
        animate={{
          r: phase === 'processing' ? 90 : 80,
          opacity: phase === 'processing' ? 0.08 : 0.04,
        }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  );
}

// ─── COMPACT EXECUTION LOG ───
function CompactLog() {
  const [visible, setVisible] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const logItems = [
    { label: 'tools', value: 'searchTool → 6 sources', icon: '⚡' },
    { label: 'memory', value: 'cached context', icon: '≡' },
    { label: 'guardrails', value: '3 checks passed', icon: '🛡' },
    { label: 'output', value: 'completed in 842ms', icon: '◆' },
  ];

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (visible >= logItems.length) {
      timeoutRef.current = setTimeout(() => {
        setVisible(0);
      }, 3000);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    const delays = [400, 550, 700, 850];
    timeoutRef.current = setTimeout(() => {
      setVisible((prev) => prev + 1);
    }, delays[visible] || 450);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [visible]);

  return (
    <div className="border-border bg-surface/30 rounded-lg border px-4 py-2.5 font-mono text-xs backdrop-blur-sm transition-all">
      <div className="flex flex-wrap items-center gap-3">
        {logItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: i < visible ? 1 : 0.15, x: i < visible ? 0 : -6 }}
            transition={{ duration: 0.25 }}
            className={`flex items-center gap-1.5 ${
              i < visible ? 'text-foreground/80' : 'text-muted-foreground/30'
            }`}
          >
            <span className="text-muted-foreground/50">{item.icon}</span>
            <span className="text-[#FF7A00]">{item.label}</span>
            <span className="text-muted-foreground/60">{item.value}</span>
            {i < logItems.length - 1 && (
              <span className="text-muted-foreground/30 mx-0.5">·</span>
            )}
          </motion.div>
        ))}
        {visible >= logItems.length && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-medium text-[#FF7A00]"
          >
            ✓ done
          </motion.span>
        )}
        {visible < logItems.length && visible > 0 && (
          <span className="ml-1 h-2.5 w-[2px] animate-pulse bg-[#FF7A00]" />
        )}
      </div>
    </div>
  );
}
