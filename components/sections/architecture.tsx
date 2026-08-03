'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
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

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function Architecture() {
  return (
    <section id="architecture" className="relative py-14">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        className="mx-auto max-w-7xl px-6"
      >
        {/* Heading */}

        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-[#FF7A00]">Architecture</p>

          <h2 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Built like a real
            <br />
            software system.
          </h2>

          <p className="text-muted-foreground mt-6 text-lg leading-8">
            Agni SDK separates agent execution, providers, tools, and memory into modular
            layers designed for reliable AI systems.
          </p>
        </motion.div>

        {/* Diagram */}

        <motion.div variants={fadeUp} className="mx-auto mt-20 max-w-5xl">
          <div className="border-border bg-card overflow-hidden rounded-2xl border p-8 shadow-[0_30px_100px_-40px_rgba(255,122,0,0.25)] sm:p-12">
            <ArchitectureNode>Application</ArchitectureNode>

            <Connector />

            <ArchitectureNode highlight>Agent API</ArchitectureNode>

            <Connector />

            <ArchitectureNode highlight large>
              Agni Runtime
            </ArchitectureNode>

            <Connector />

            <div className="grid gap-4 sm:grid-cols-3">
              <ArchitectureCard
                title="Providers"
                items={['Gemini', 'OpenAI', 'Claude']}
              />

              <ArchitectureCard title="Tools" items={['Search', 'APIs', 'Functions']} />

              <ArchitectureCard
                title="Memory"
                items={['Sessions', 'Context', 'Storage']}
              />
            </div>

            <Connector />

            <ArchitectureNode>Model APIs</ArchitectureNode>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

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

      whileHover={{
        y: -3,
      }}

      className={`relative mx-auto flex w-fit items-center justify-center rounded-xl border px-10 py-4 font-mono text-sm transition-all ${
        highlight
          ? `border-[#FF7A00]/40 bg-[#FF7A00]/10 text-[#FF7A00] shadow-[0_0_40px_-20px_#FF7A00]`
          : `border-border bg-background text-foreground`
      } ${large ? 'px-14 py-5 text-base' : ''} `}
    >
      {highlight && (
        <span className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-[#FF7A00]" />
      )}

      {children}
    </motion.div>
  );
}

function ArchitectureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      variants={fadeUp}

      whileHover={{
        y: -5,
      }}

      className="group border-border bg-background rounded-xl border p-6 transition-all hover:border-[#FF7A00]/40"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-foreground font-mono text-sm font-medium">{title}</h3>

        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] opacity-80" />
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="text-muted-foreground flex items-center gap-3 font-mono text-xs"
          >
            <span className="bg-border h-px w-3" />

            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="bg-border relative mx-auto h-12 w-px overflow-hidden">
      <motion.span
        animate={{
          y: [-20, 60],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}

        className="absolute left-0 h-5 w-full bg-[#FF7A00]"
      />
    </div>
  );
}
