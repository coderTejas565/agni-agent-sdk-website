export function DeveloperExperience() {
  return (
    <section
      id="developer"
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

        {/* Heading */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
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
            Developer Experience
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
            Simple API.
            <br />
            Powerful runtime.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Define your agent, connect tools,
            choose your provider, and let Agni
            handle execution.
          </p>
        </div>


        {/* Code Window */}

        <div
          className="
            mx-auto
            mt-16
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

            {/* Header */}

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

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-red-400/70
                "
              />

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-yellow-400/70
                "
              />

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-green-400/70
                "
              />


              <span
                className="
                  ml-3
                  text-sm
                  text-zinc-500
                "
              >
                app.ts
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
{`import {
  Agent,
  Runner,
  GeminiProvider
} from "agni-sdk";


const agent = new Agent({
  name: "research-agent",

  instructions:
    "Help users find information",

  provider:
    new GeminiProvider(),

  tools: [
    searchTool
  ]
});


const result =
  await Runner.run(
    agent,
    "Find latest AI trends"
  );


console.log(result.output);`}
            </pre>

          </div>

        </div>


        {/* Bottom points */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-4xl
            gap-6
            sm:grid-cols-3
          "
        >

          <InfoCard
            title="TypeScript First"
            description="Strong types and predictable APIs for developers."
          />

          <InfoCard
            title="Provider Freedom"
            description="Switch models without rewriting your application."
          />

          <InfoCard
            title="Production Ready"
            description="Built around real agent execution patterns."
          />

        </div>


      </div>
    </section>
  );
}



function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h3
        className="
          font-medium
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