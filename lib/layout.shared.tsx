import { Logo } from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo></Logo>,

      transparentMode: 'top',
    },

    githubUrl: 'https://github.com/coderTejas565/agni-agent-sdk',
  };
}
