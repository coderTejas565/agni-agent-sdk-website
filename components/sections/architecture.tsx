export function Architecture() {
  return (
    <section
      id="architecture"
      className="
        relative
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
            Architecture
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
            Built like a real
            <br />
            software system.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Agni SDK separates agent execution,
            providers, tools, and memory into
            modular layers designed for
            reliable AI systems.
          </p>
        </div>


        {/* Architecture Diagram */}

        <div
          className="
            mx-auto
            mt-20
            max-w-5xl
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-surface
              p-8
              shadow-2xl
              sm:p-12
            "
          >

            {/* Application */}

            <ArchitectureNode>
              Application
            </ArchitectureNode>


            <Connector />


            {/* Agent API */}

            <ArchitectureNode highlight>
              Agent API
            </ArchitectureNode>


            <Connector />


            {/* Runtime */}

            <ArchitectureNode
              highlight
              large
            >
              Agni Runtime
            </ArchitectureNode>


            <Connector />


            {/* Modules */}

            <div
              className="
                grid
                gap-4
                sm:grid-cols-3
              "
            >

              <ArchitectureCard
                title="Providers"
                items={[
                  "Gemini",
                  "OpenAI",
                  "Claude",
                ]}
              />

              <ArchitectureCard
                title="Tools"
                items={[
                  "Search",
                  "APIs",
                  "Functions",
                ]}
              />

              <ArchitectureCard
                title="Memory"
                items={[
                  "Sessions",
                  "Context",
                  "Storage",
                ]}
              />

            </div>


            <Connector />


            {/* Model APIs */}

            <ArchitectureNode>
              Model APIs
            </ArchitectureNode>

          </div>

        </div>


      </div>
    </section>
  );
}



/* =========================
   Components
========================= */


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
    <div
      className={`
        mx-auto
        flex
        w-fit
        items-center
        justify-center
        rounded-xl
        border
        px-8
        py-4
        text-center
        font-medium
        transition

        ${
          highlight
            ? `
              border-[#FF7A00]/40
              bg-[#FF7A00]/10
              text-[#FF7A00]
            `
            : `
              border-border
              bg-background
              text-foreground
            `
        }

        ${
          large
            ? "px-12 py-5 text-lg"
            : ""
        }
      `}
    >
      {children}
    </div>
  );
}



function ArchitectureCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-background
        p-5
      "
    >

      <h3
        className="
          mb-4
          text-sm
          font-semibold
          text-[#FF7A00]
        "
      >
        {title}
      </h3>


      <div
        className="
          space-y-2
          text-sm
          text-zinc-400
        "
      >
        {items.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#FF7A00]
              "
            />

            {item}
          </div>
        ))}
      </div>

    </div>
  );
}



function Connector() {
  return (
    <div
      className="
        mx-auto
        h-10
        w-px
        bg-border
      "
    />
  );
}