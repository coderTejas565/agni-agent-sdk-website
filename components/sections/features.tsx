'use client';

import {
  Activity,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { motion } from 'framer-motion';

const features: {
  title: string;
  description: string;
  icon: LucideIcon;
  label: string;
}[] = [
  {
    title: 'Agent Runtime',
    label: 'CORE ENGINE',
    description:
      'A controlled execution loop managing lifecycle, reasoning flow, and tool interactions.',
    icon: Cpu,
  },
  {
    title: 'Provider Layer',
    label: 'MODEL ROUTING',
    description: 'Switch between LLM providers through a unified abstraction layer.',
    icon: Layers,
  },
  {
    title: 'Tool System',
    label: 'EXTENSIONS',
    description: 'Give agents real-world capabilities with reusable composable tools.',
    icon: Wrench,
  },
  {
    title: 'Memory',
    label: 'CONTEXT',
    description: 'Maintain state, conversations, and knowledge across executions.',
    icon: Database,
  },
  {
    title: 'Guardrails',
    label: 'CONTROL',
    description: 'Define boundaries and policies for safer production workflows.',
    icon: ShieldCheck,
  },
  {
    title: 'Observability',
    label: 'TRACING',
    description: 'Inspect agent runs through events, traces, and execution data.',
    icon: Activity,
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
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

export function Features() {
  return (
    <section id="features" className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#FF7A00]">
            CAPABILITIES
          </p>

          <h2 className="text-foreground text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Everything needed to
            <br />
            build reliable agents.
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
            Agni provides the infrastructure layer between your application and autonomous
            AI systems.
          </p>
        </div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-100px',
          }}

          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  label,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <motion.div
      variants={cardAnimation}

      whileHover={{
        y: -5,
      }}

      className="group border-border bg-card relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:border-[#FF7A00]/30"
    >
      {/* subtle glow */}

      <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#FF7A00]/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="border-border bg-background flex h-10 w-10 items-center justify-center rounded-lg border text-[#FF7A00]">
            <Icon size={20} strokeWidth={1.7} />
          </div>

          <span className="text-muted-foreground font-mono text-[10px] tracking-widest">
            {label}
          </span>
        </div>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>

        <p className="text-muted-foreground mt-3 text-sm leading-6">{description}</p>

        <div className="bg-border mt-6 h-px w-full" />

        <div className="text-muted-foreground mt-4 flex items-center gap-2 font-mono text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
          active module
        </div>
      </div>
    </motion.div>
  );
}
