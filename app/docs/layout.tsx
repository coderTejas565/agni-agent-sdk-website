import { GlassLayout } from 'fumadocs-ui/layouts/glass';

import { source } from '@/lib/source';

import { baseOptions } from '@/lib/layout.shared';

import type { ReactNode } from 'react';

export const metadata = {
  title: 'Documentation | Agni SDK',

  description: 'Build reliable AI agents with Agni SDK.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <GlassLayout
      {...baseOptions()}

      tree={source.getPageTree()}
    >
      {children}
    </GlassLayout>
  );
}
