'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Zap, Database, Wrench, Layers, Sparkles } from 'lucide-react';

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

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Premium ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7A00]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF7A00]/3 rounded-full blur-[120px]" />
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
            Architecture
          </div>

          <h2 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Built like a real
            <br />
            <span className="text-[#FF7A00]">software system</span>.
          </h2>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            Agni SDK separates agent execution, providers, tools, and memory into
            modular layers — designed for reliability, observability, and control.
          </p>
        </motion.div>

        {/* ── Architecture Diagram ── */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 lg:mt-20 max-w-5xl"
        >
          <div className="relative border-border/60 bg-background/40 overflow-hidden rounded-2xl border p-8 backdrop-blur-sm shadow-[0_30px_100px_-40px_rgba(255,122,0,0.15)] sm:p-12 lg:p-14">
            {/* Top layer: Application */}
            <ArchitectureNode>Application</ArchitectureNode>

            <Connector />

            {/* Agent API */}
            <ArchitectureNode highlight>Agent API</ArchitectureNode>

            <Connector />

            {/* Runtime — large, prominent */}
            <ArchitectureNode highlight large>
              <span className="flex items-center gap-3">
                <Zap size={20} className="text-[#FF7A00]" />
                Agni Runtime
              </span>
            </ArchitectureNode>

            <Connector />

            {/* Three columns: Providers, Tools, Memory */}
            <div className="grid gap-5 sm:grid-cols-3">
              <ArchitectureCard
                icon={Layers}
                title="Providers"
                items={['Gemini', 'OpenAI', 'Claude']}
              />
              <ArchitectureCard
                icon={Wrench}
                title="Tools"
                items={['Search', 'APIs', 'Functions']}
              />
              <ArchitectureCard
                icon={Database}
                title="Memory"
                items={['Sessions', 'Context', 'Storage']}
              />
            </div>

            <Connector />

            {/* Bottom layer: Model APIs */}
            <ArchitectureNode>Model APIs</ArchitectureNode>

            {/* Subtle vertical gradient line on the left side */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#FF7A00]/20 to-transparent opacity-30" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#FF7A00]/20 to-transparent opacity-30" />
          </div>
        </motion.div>

        {/* ── Bottom Stats / Trust signals ── */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 text-center sm:grid-cols-3"
        >
          {[
            { label: 'Modular layers', value: '4' },
            { label: 'Provider support', value: '6+' },
            { label: 'Avg. overhead', value: '0.8ms' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-border/50 bg-background/30 rounded-xl border p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-semibold text-[#FF7A00]">{stat.value}</div>
              <div className="text-muted-foreground mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Components ──

function ArchitectureNode({
  children,
  highlight = false,
  large = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  large?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative mx-auto flex w-fit items-center justify-center rounded-xl border px-8 py-3.5 font-mono text-sm transition-all duration-300 ${
        highlight
          ? 'border-[#FF7A00]/30 bg-[#FF7A00]/8 text-[#FF7A00] shadow-[0_0_60px_-20px_rgba(255,122,0,0.3)] hover:border-[#FF7A00]/50 hover:shadow-[0_0_80px_-20px_rgba(255,122,0,0.4)]'
          : 'border-border/60 bg-background/50 text-foreground hover:border-white/10'
      } ${large ? 'px-10 py-5 text-base' : ''} `}
    >
      {highlight && (
        <span className="absolute top-1/2 -left-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#FF7A00] shadow-[0_0_20px_#FF7A00]" />
      )}
      {children}
    </motion.div>
  );
}

function ArchitectureCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="group border-border/50 bg-background/30 relative rounded-xl border p-6 transition-all duration-300 hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/3 hover:shadow-[0_20px_60px_-20px_rgba(255,122,0,0.15)]"
    >
      {/* Top row: Icon + Title */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-[#FF7A00]/10 p-2 text-[#FF7A00] transition-colors duration-300 group-hover:bg-[#FF7A00]/20">
            <Icon size={16} />
          </div>
          <h3 className="text-foreground font-mono text-sm font-medium">{title}</h3>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Items list */}
      <div className="space-y-2.5">
        {items.map((item) => (
          <div
            key={item}
            className="text-muted-foreground flex items-center gap-3 font-mono text-xs transition-colors duration-200 group-hover:text-foreground/80"
          >
            <span className="h-px w-4 bg-border/60 group-hover:bg-[#FF7A00]/30" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="relative mx-auto h-12 w-px overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-border/60 via-[#FF7A00]/20 to-border/60" />
      {/* Animated pulse */}
      <motion.span
        animate={{
          y: [-24, 40],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-[#FF7A00] shadow-[0_0_20px_#FF7A00]"
      />
    </div>
  );
}