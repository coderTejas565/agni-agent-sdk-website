export function DeveloperExperience() {
  return (
    <section id="developer" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-[#FF7A00]">Developer Experience</p>

          <h2 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple API.
            <br />
            Powerful runtime.
          </h2>

          <p className="text-muted-foreground mt-6 text-lg leading-8">
            Define your agent, connect tools, choose your provider, and let Agni handle
            execution.
          </p>
        </div>

        {/* Editor */}

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-[0_30px_100px_-40px_rgba(255,122,0,0.2)]">
            {/* Editor Header */}

            <div className="border-border bg-muted/30 flex items-center justify-between border-b px-5 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="text-muted-foreground font-mono text-xs">app.ts</span>

              <span className="border-border text-muted-foreground rounded-full border px-3 py-1 font-mono text-[11px]">
                TypeScript
              </span>
            </div>

            {/* Code Area */}

            <div className="flex font-mono text-sm leading-7">
              {/* Numbers */}

              <div className="border-border text-muted-foreground/50 border-r px-4 py-6 text-right select-none">
                {Array.from({
                  length: 18,
                }).map((_, i) => (
                  <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                ))}
              </div>

              <pre className="text-foreground overflow-x-auto p-6 text-left">
                <code>
                  <span className="text-muted-foreground">import</span> {'{'}
                  {'\n  '}
                  <span className="text-[#FF7A00]">Agent</span>
                  {','}
                  {'\n  '}
                  <span className="text-[#FF7A00]">Runner</span>
                  {','}
                  {'\n  '}
                  <span className="text-[#FF7A00]">GeminiProvider</span>
                  {'\n'}
                  {'}'}
                  {'\n\n'}
                  <span className="text-muted-foreground">from</span>{' '}
                  <span className="text-emerald-500">&quot;agni-sdk&quot;</span>
                  {';'}
                  {'\n\n\n'}
                  <span className="text-muted-foreground">const</span> agent
                  {' = '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">Agent</span>
                  {'({'}
                  {'\n  '}
                  <span className="text-muted-foreground">name:</span>{' '}
                  <span className="text-emerald-500">&quot;research-agent&quot;</span>
                  {','}
                  {'\n\n  '}
                  <span className="text-muted-foreground">provider:</span>
                  {'\n    '}
                  <span className="text-muted-foreground">new</span>{' '}
                  <span className="text-[#FF7A00]">GeminiProvider</span>
                  {'()'}
                  {'\n\n'}
                  {'});'}
                  {'\n\n\n'}
                  <span className="text-muted-foreground">const</span> result
                  {' = '}
                  <span className="text-muted-foreground">await</span>{' '}
                  <span className="text-[#FF7A00]">Runner</span>
                  {'.run('}
                  {'\n  '}
                  agent
                  {','}
                  {'\n  '}
                  <span className="text-emerald-500">
                    &quot;Find latest AI trends&quot;
                  </span>
                  {'\n'}
                  {');'}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Info Cards */}

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
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

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-border bg-card rounded-xl border p-6 transition-all hover:border-[#FF7A00]/40">
      <h3 className="text-foreground font-medium">{title}</h3>

      <p className="text-muted-foreground mt-3 text-sm leading-6">{description}</p>
    </div>
  );
}
