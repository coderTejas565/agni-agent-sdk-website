import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted';

type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;
}

const variants: Record<BadgeVariant, string> = {
  default: `
    border-border

    bg-surface-muted

    text-secondary
  `,

  primary: `
    border-primary/30

    bg-primary/10

    text-primary
  `,

  success: `
    border-emerald-500/20

    bg-emerald-500/5

    text-emerald-500
  `,

  warning: `
    border-primary/30

    bg-primary/5

    text-primary
  `,

  danger: `
    border-red-500/20

    bg-red-500/5

    text-red-500
  `,

  muted: `
    border-border

    bg-transparent

    text-muted
  `,
};

const sizes: Record<BadgeSize, string> = {
  sm: `
    px-2

    py-0.5

    text-[10px]
  `,

  md: `
    px-2.5

    py-1

    text-[11px]
  `,
};

export function Badge({
  children,

  variant = 'default',

  size = 'md',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono text-[10px] font-medium tracking-widest whitespace-nowrap uppercase transition-colors ${sizes[size]} ${variants[variant]} `}
    >
      {children}
    </span>
  );
}

interface StatusBadgeProps {
  status: 'stable' | 'beta' | 'experimental' | 'deprecated';
}

const statusConfig = {
  stable: {
    label: 'Stable',

    variant: 'success' as BadgeVariant,
  },

  beta: {
    label: 'Beta',

    variant: 'warning' as BadgeVariant,
  },

  experimental: {
    label: 'Experimental',

    variant: 'primary' as BadgeVariant,
  },

  deprecated: {
    label: 'Deprecated',

    variant: 'danger' as BadgeVariant,
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}

      size="sm"
    >
      {config.label}
    </Badge>
  );
}
