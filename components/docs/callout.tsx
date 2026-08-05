import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'tip';

interface CalloutProps {
  type?: CalloutType;

  title?: string;

  children: React.ReactNode;
}

const config = {
  info: {
    icon: Info,

    label: 'Info',

    iconClass: 'text-primary',

    borderClass: 'border-l-primary',
  },

  warning: {
    icon: AlertTriangle,

    label: 'Warning',

    iconClass: 'text-amber-500',

    borderClass: 'border-l-amber-500',
  },

  tip: {
    icon: Lightbulb,

    label: 'Tip',

    iconClass: 'text-primary',

    borderClass: 'border-l-primary',
  },
} satisfies Record<
  CalloutType,
  {
    icon: typeof Info;
    label: string;
    iconClass: string;
    borderClass: string;
  }
>;

export function Callout({
  type = 'info',

  title,

  children,
}: CalloutProps) {
  const { icon: Icon, label, iconClass, borderClass } = config[type];

  return (
    <div
      className={`border-border my-8 flex gap-4 rounded-xl border border-l-4 ${borderClass} bg-surface hover:border-primary/40 p-5 transition-colors`}
    >
      {/* Icon */}

      <div className={`mt-0.5 shrink-0 ${iconClass} `}>
        <Icon size={18} strokeWidth={2} />
      </div>

      {/* Content */}

      <div className="flex-1 space-y-2">
        <div className="text-foreground/80 font-mono text-[11px] tracking-widest uppercase">
          {title ?? label}
        </div>

        <div className="text-secondary text-sm leading-7">{children}</div>
      </div>
    </div>
  );
}
