import {
  Activity,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";


const features: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Agent Runtime",
    description:
      "A controlled execution loop that manages agent lifecycle, reasoning flow, and tool interactions.",
    icon: Cpu,
  },
  {
    title: "Provider Layer",
    description:
      "Use different LLM providers through a unified interface without changing your application logic.",
    icon: Layers,
  },
  {
    title: "Tool System",
    description:
      "Extend agents with real-world capabilities through reusable and composable tools.",
    icon: Wrench,
  },
  {
    title: "Memory",
    description:
      "Build agents that maintain context and remember information across interactions.",
    icon: Database,
  },
  {
    title: "Guardrails",
    description:
      "Control agent behavior with boundaries designed for safer production workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Observability",
    description:
      "Understand agent execution through events, traces, and runtime visibility.",
    icon: Activity,
  },
];


export function Features() {
  return (
    <section
      id="features"
      className="py-32"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        {/* Heading */}

        <div
          className="
            max-w-3xl
          "
        >
          <p
            className="
              mb-4
              text-sm
              font-medium
              text-[#FF7A00]
            "
          >
            Capabilities
          </p>


          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-foreground
              sm:text-5xl
            "
          >
            Everything needed to
            <br />
            build reliable agents.
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Agni provides the core infrastructure
            required to move from simple prompts
            to production-grade AI systems.
          </p>
        </div>



        {/* Feature Grid */}

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}



function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
        transition
        duration-300
        hover:border-[#FF7A00]/40
      "
    >

      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-lg
          bg-[#FF7A00]/10
          text-[#FF7A00]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.8}
        />
      </div>



      <h3
        className="
          text-lg
          font-semibold
          text-foreground
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-3
          text-sm
          leading-6
          text-zinc-400
        "
      >
        {description}
      </p>

    </div>
  );
}