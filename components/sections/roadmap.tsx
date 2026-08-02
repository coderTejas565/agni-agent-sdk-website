import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";



const completed = [
  "Agent Runtime",
  "Provider System",
  "Tool Execution",
];


const upcoming = [
  "Streaming Responses",
  "Memory System",
  "Tracing & Observability",
  "Guardrails",
  "Multi-agent Workflows",
];


export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="
        py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* Roadmap */}

          <div>

            <p
              className="
                mb-4
                text-sm
                font-medium
                text-[#FF7A00]
              "
            >
              Roadmap
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
              Building the future
              <br />
              of AI agents.
            </h2>


            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-zinc-400
              "
            >
              Agni is evolving from a runtime
              foundation into a complete toolkit
              for production-grade AI agent systems.
            </p>


            {/* Completed */}

            <div
              className="
                mt-10
              "
            >

              <h3
                className="
                  mb-4
                  text-sm
                  font-medium
                  text-foreground
                "
              >
                Completed
              </h3>


              <div
                className="
                  space-y-3
                "
              >
                {completed.map((item) => (
                  <RoadmapItem
                    key={item}
                    completed
                    text={item}
                  />
                ))}
              </div>

            </div>



            {/* Upcoming */}

            <div
              className="
                mt-8
              "
            >

              <h3
                className="
                  mb-4
                  text-sm
                  font-medium
                  text-foreground
                "
              >
                Coming Next
              </h3>


              <div
                className="
                  space-y-3
                "
              >
                {upcoming.map((item) => (
                  <RoadmapItem
                    key={item}
                    text={item}
                  />
                ))}
              </div>

            </div>

          </div>



          {/* CTA Card */}

          <div
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-8
              sm:p-10
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#FF7A00]/10
                text-[#FF7A00]
              "
            >
              <FaGithub size={26} />
            </div>


            <h3
              className="
                mt-8
                text-2xl
                font-semibold
                text-foreground
              "
            >
              Open source.
              <br />
              Built with developers.
            </h3>


            <p
              className="
                mt-4
                leading-7
                text-zinc-400
              "
            >
              Explore the architecture,
              contribute improvements,
              and build your next AI agent
              with Agni SDK.
            </p>


            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <Link
                href="https://github.com"
                target="_blank"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#FF7A00]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#FF8C1A]
                "
              >
                View GitHub

                <ArrowRight size={16} />
              </Link>


              <Link
                href="#docs"
                className="
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-foreground
                  transition
                  hover:bg-white/5
                "
              >
                Read Docs
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}



function RoadmapItem({
  text,
  completed = false,
}: {
  text: string;
  completed?: boolean;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-sm
        text-zinc-400
      "
    >

      <span
        className={`
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full

          ${
            completed
              ? "bg-[#FF7A00]/10 text-[#FF7A00]"
              : "border border-border"
          }
        `}
      >
        {completed && (
          <Check size={12} />
        )}
      </span>


      {text}

    </div>
  );
}