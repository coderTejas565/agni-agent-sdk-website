import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      {/* Background Glow */}

      <div
        className="
          agni-glow
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          opacity-70
          blur-3xl
        "
      />


      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          {/* Badge */}

          <div
            className="
              mx-auto
              mb-8
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/5
              px-4
              py-2
              text-sm
              text-orange-500
            "
          >
            <span>
              🔥
            </span>

            Developer-first AI Agent Runtime
          </div>


          {/* Heading */}

          <h1
            className="
              text-5xl
              font-semibold
              tracking-tight
              text-foreground
              sm:text-6xl
              lg:text-7xl
            "
          >
            Build production-ready
            <br />

            <span
              className="
                text-[#FF7A00]
              "
            >
              AI agents
            </span>

            {" "}
            with TypeScript.
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Agni SDK provides the runtime,
            tools, providers, and infrastructure
            needed to build reliable autonomous
            AI agents.
          </p>


          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >

            <Link
              href="#get-started"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#FF7A00]
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-[#FF8C1A]
              "
            >
              Get Started

              <ArrowRight size={18} />
            </Link>


            <Link
              href="#architecture"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-border
                px-6
                py-3
                font-medium
                text-foreground
                transition
                hover:bg-white/5
              "
            >
              <FaGithub  size={18} />

              View Architecture
            </Link>

          </div>

        </div>



        {/* Runtime Preview */}

        <div
          className="
            mx-auto
            mt-20
            max-w-4xl
          "
        >

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-surface
              shadow-2xl
            "
          >

            {/* Window Header */}

            <div
              className="
                flex
                items-center
                gap-2
                border-b
                border-border
                px-5
                py-4
              "
            >
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />

              <span
                className="
                  ml-3
                  text-sm
                  text-zinc-500
                "
              >
                agent.ts
              </span>

            </div>



            {/* Code */}

            <pre
              className="
                overflow-x-auto
                p-6
                text-left
                text-sm
                leading-7
                text-zinc-300
              "
            >
{`const agent = new Agent({
  name: "assistant",

  provider:
    new GeminiProvider(),

  tools: [
    searchTool
  ]
});


const result =
  await runner.run(
    agent,
    "Find latest AI news"
  );`}
            </pre>


          </div>

        </div>


      </div>

    </section>
  );
}