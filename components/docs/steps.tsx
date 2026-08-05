import type { ReactNode, ReactElement } from 'react';

interface StepsProps {
  children: ReactNode;
}

interface StepProps {
  title: string;

  children: ReactNode;

  number?: number;
}

export function Steps({ children }: StepsProps) {
  const steps = Array.isArray(children) ? children : [children];

  return (
    <div className="my-10 space-y-0">
      {steps.map((child, index) => {
        if (!isStep(child)) {
          return child;
        }

        return (
          <Step
            key={index}

            {...child.props}

            number={index + 1}
          />
        );
      })}
    </div>
  );
}

function isStep(child: ReactNode): child is ReactElement<StepProps> {
  return typeof child === 'object' && child !== null && 'props' in child;
}

export function Step({
  title,

  children,

  number,
}: StepProps) {
  return (
    <div className="group relative flex gap-5 pb-10 last:pb-0">
      {/* Execution Line */}

      <div className="bg-border absolute top-9 left-4 h-[calc(100%-12px)] w-px last:hidden" />

      {/* Step Node */}

      <div className="border-border bg-surface text-primary group-hover:border-primary/50 relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium transition">
        {number}
      </div>

      {/* Step Content */}

      <div className="flex-1 pt-1">
        <h3 className="text-foreground mb-2 text-base font-semibold tracking-tight">
          {title}
        </h3>

        <div className="text-secondary text-sm leading-7 [&_pre]:my-4">{children}</div>
      </div>
    </div>
  );
}
