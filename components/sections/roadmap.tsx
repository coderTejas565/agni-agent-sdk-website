'use client';

import Link from 'next/link';
import { ArrowRight, Check, Clock3 } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion';

const completed = ['Agent Runtime', 'Provider System', 'Tool Execution'];

const upcoming = [
  'Streaming Responses',
  'Memory System',
  'Tracing & Observability',
  'Guardrails',
  'Multi-agent Workflows',
];

const fadeUp = {
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

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Roadmap */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
          >
            <p className="mb-4 font-mono text-xs tracking-widest text-[#FF7A00]">
              ROADMAP
            </p>

            <h2 className="text-foreground text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Building the future
              <br />
              of AI agents.
            </h2>

            <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
              Agni is evolving from a runtime foundation into a complete toolkit for
              production-grade agent systems.
            </p>

            <div className="mt-10 space-y-10">
              <RoadmapGroup title="Shipped" items={completed} completed />

              <RoadmapGroup title="In Progress" items={upcoming} />
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}

            className="border-border bg-card relative overflow-hidden rounded-2xl border p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-[#FF7A00]/10 blur-3xl" />

            <div className="relative">
              <div className="border-border bg-background flex h-12 w-12 items-center justify-center rounded-xl border text-[#FF7A00]">
                <FaGithub size={24} />
              </div>

              <h3 className="text-foreground mt-8 text-2xl font-semibold tracking-tight">
                Open source.
                <br />
                Built with developers.
              </h3>

              <p className="text-muted-foreground mt-4 leading-7">
                Explore the architecture, contribute improvements, and build reliable AI
                agents with Agni SDK.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://github.com/coderTejas565/agni-agent-sdk"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#FF7A00] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#FF8C1A]"
                >
                  View GitHub
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/docs"
                  className="border-border text-foreground hover:bg-accent rounded-lg border px-5 py-3 text-center text-sm font-medium transition"
                >
                  Read Docs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoadmapGroup({
  title,
  items,
  completed = false,
}: {
  title: string;
  items: string[];
  completed?: boolean;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="text-muted-foreground font-mono text-xs tracking-widest">
          {title.toUpperCase()}
        </span>

        {completed ? (
          <Check size={14} className="text-[#FF7A00]" />
        ) : (
          <Clock3 size={14} className="text-muted-foreground" />
        )}
      </div>

      <div className="border-border relative ml-2 space-y-4 border-l pl-6">
        {items.map((item) => (
          <RoadmapItem key={item} text={item} completed={completed} />
        ))}
      </div>
    </div>
  );
}

function RoadmapItem({ text, completed }: { text: string; completed: boolean }) {
  return (
    <div className="text-muted-foreground relative flex items-center gap-3 text-sm">
      <span
        className={`absolute -left-[31px] h-2 w-2 rounded-full ${
          completed ? 'bg-[#FF7A00]' : 'bg-border'
        } `}
      />

      <span className="text-foreground/80 font-medium">{text}</span>
    </div>
  );
}
