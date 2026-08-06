'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Sparkles, Shield, Globe, Zap } from 'lucide-react';

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export function DeveloperExperience() {
  return (
    <section id="developer" className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#FF7A00]/4 blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FF7A00]/3 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-100px',
        }}
        className="mx-auto max-w-7xl px-6"
      >
        {/* ── Heading ── */}
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/5 px-4 py-1.5 text-sm font-medium text-[#FF7A00]">
            <Sparkles size={14} />
            Developer Experience
          </div>

          <h2 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Simple API.
            <br />
            <span className="text-[#FF7A00]">Powerful runtime</span>.
          </h2>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            Define your agent, connect tools, choose your provider — and let Agni handle
            execution with full type safety and visibility.
          </p>
        </motion.div>

        {/* ── Code Editor ── */}
        <motion.div variants={fadeUp} className="mx-auto mt-16 max-w-5xl">
          <div className="border-border/60 bg-background/40 overflow-hidden rounded-2xl border shadow-[0_30px_100px_-40px_rgba(255,122,0,0.15)] backdrop-blur-sm">
            {/* Editor Header */}
            <div className="border-border/50 bg-muted/20 flex items-center justify-between border-b px-5 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <span className="text-muted-foreground/50 font-mono text-xs">agent.ts</span>
              <span className="border-border/50 text-muted-foreground rounded-full border px-3 py-1 font-mono text-[10px]">
                TypeScript
              </span>
            </div>

            {/* ── Code ── */}
            <div className="flex font-mono text-[13px] leading-7">
              {/* Line numbers */}
              <div className="border-border/30 text-muted-foreground/30 border-r px-4 py-5 text-right text-xs select-none">
                {Array.from({ length: 22 }).map((_, i) => (
                  <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                ))}
              </div>

              <pre className="text-foreground overflow-x-auto p-5 text-left">
                <code>
                  <span className="text-muted-foreground">import</span> {'{ '}
                  <span className="text-[#FF7A00]">Agent</span>
                  {', '}
                  <span className="text-[#FF7A00]">Runner</span>
                  {', '}
                  <span className="text-[#FF7A00]">GeminiProvider</span>
                  {' }'}
                  {'\n'}
                  <span className="text-muted-foreground">from</span>{' '}
                  <span className="text-emerald-500">{'"agni-agent-sdk"'}</span>
                  {';'}
                  {'\n\n'}
                  <span className="text-muted-foreground">const</span>{' '}
                  <span className="text-[#FF7A00]">agent</span> ={' '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">Agent</span>({'{'}){'\n  '}
                  <span className="text-muted-foreground">name</span>:{' '}
                  <span className="text-emerald-500">{'"weather-agent"'}</span>,{'\n\n  '}
                  <span className="text-muted-foreground">instructions</span>:{' '}
                  <span className="text-emerald-500">
                    {'"Use weather tools when needed."'}
                  </span>
                  ,{'\n\n  '}
                  <span className="text-muted-foreground">provider</span>:{' '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">GeminiProvider</span>({'{'}){'\n    '}
                  <span className="text-muted-foreground">apiKey</span>:{' '}
                  <span className="text-emerald-500">process.env.GEMINI_API_KEY</span>
                  {'\n  })'}
                  {','}
                  {'\n\n  '}
                  <span className="text-muted-foreground">tools</span>:{' ['}
                  <span className="text-[#FF7A00]">weatherTool</span>
                  {']'}
                  {'\n'}
                  {'});'}
                  {'\n\n'}
                  <span className="text-muted-foreground">const</span>{' '}
                  <span className="text-[#FF7A00]">result</span> ={' '}
                  <span className="text-muted-foreground">await</span>{' '}
                  <span className="text-[#FF7A00]">new Runner()</span>
                  .run(
                  {'\n  '}
                  <span className="text-[#FF7A00]">agent</span>,{'\n  '}
                  <span className="text-emerald-500">
                    {'"What\'s the weather in Pune?"'}
                  </span>
                  {'\n)'}
                </code>
              </pre>
            </div>

            {/* ── Execution Trace ── */}
            {/* ── Execution Trace ── */}
            <div className="border-border/50 bg-muted/10 border-t px-5 py-3">
              <div className="flex items-center gap-4 font-mono text-xs">
                <span className="text-muted-foreground/40">→</span>
                <span className="text-muted-foreground">
                  <span className="text-[#FF7A00]">tool_call</span> get_weather
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-muted-foreground">
                  <span className="text-emerald-400">✓</span> 29°C, Sunny
                </span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-muted-foreground">
                  completed in <span className="text-[#FF7A00]">842</span>ms
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Feature Cards ── */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-3"
        >
          <FeatureCard
            icon={Shield}
            title="Type-Safe Tools"
            description="Full TypeScript support with Zod schemas — catch errors before runtime."
          />
          <FeatureCard
            icon={Globe}
            title="Provider Agnostic"
            description="Switch between Gemini, OpenAI, Claude without changing your code."
          />
          <FeatureCard
            icon={Zap}
            title="Production Ready"
            description="Built for reliability with execution traces, memory, and validation."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Feature Card ──
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group border-border/50 bg-background/30 relative rounded-xl border p-6 transition-all duration-300 hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/3 hover:shadow-[0_20px_60px_-20px_rgba(255,122,0,0.12)]"
    >
      <div className="mb-4 inline-flex rounded-lg bg-[#FF7A00]/10 p-2.5 text-[#FF7A00] transition-colors duration-300 group-hover:bg-[#FF7A00]/20">
        <Icon size={18} />
      </div>
      <h3 className="text-foreground text-sm font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
