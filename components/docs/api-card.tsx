import type { ReactNode } from 'react';

interface ApiCardProps {
  name: string;

  type?: string;

  description?: string;

  children?: ReactNode;
}

interface ApiSectionProps {
  title: string;

  children: ReactNode;
}

interface ApiParamProps {
  name: string;

  type: string;

  required?: boolean;

  description?: string;
}

export function ApiCard({
  name,

  type,

  description,

  children,
}: ApiCardProps) {
  return (
    <div className="border-border bg-surface hover:border-primary/20 my-10 overflow-hidden rounded-xl border transition">
      {/* Header */}

      <div className="border-border border-b px-5 py-5">
        <div className="flex flex-wrap items-center gap-3">
          <code className="text-foreground font-mono text-sm font-semibold tracking-tight">
            {name}
          </code>

          {type && (
            <span className="border-border bg-surface-muted text-muted rounded-md border px-2 py-1 font-mono text-[11px]">
              {type}
            </span>
          )}
        </div>

        {description && (
          <p className="text-secondary mt-3 max-w-3xl text-sm leading-7">{description}</p>
        )}
      </div>

      {children && <div className="divide-border divide-y">{children}</div>}
    </div>
  );
}

export function ApiSection({
  title,

  children,
}: ApiSectionProps) {
  return (
    <section className="px-5 py-6">
      <h4 className="text-muted mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
        <span className="bg-border h-px w-4" />

        {title}
      </h4>

      {children}
    </section>
  );
}

export function ApiParam({
  name,

  type,

  required = false,

  description,
}: ApiParamProps) {
  return (
    <div className="group space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <code className="text-foreground font-mono text-sm font-medium">{name}</code>

        <span className="bg-surface-muted text-primary rounded-md px-2 py-0.5 font-mono text-xs">
          {type}
        </span>

        {required && (
          <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
            required
          </span>
        )}
      </div>

      {description && <p className="text-secondary text-sm leading-7">{description}</p>}
    </div>
  );
}
