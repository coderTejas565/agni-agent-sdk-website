'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { ThemeToggle } from '@/components/theme-toggle';

export function DocsNavbar() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center px-8 xl:px-12">
        {/* ---------------------------------------------------------------- */}
        {/* Logo */}
        {/* ---------------------------------------------------------------- */}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white">
            A
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Agni SDK</p>

            <p className="text-muted text-xs">Documentation</p>
          </div>
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* Search */}
        {/* ---------------------------------------------------------------- */}

        <div className="hidden flex-1 lg:flex">
          <button className="border-border bg-surface text-muted hover:bg-surface-muted mr-24 ml-16 flex h-11 max-w-2xl flex-1 items-center justify-between rounded-xl border px-4 text-sm transition-colors">
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search documentation...
            </span>

            <kbd className="border-border bg-background rounded-md border px-2 py-1 text-[11px]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Actions */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex shrink-0 items-center gap-3">
          <span className="border-border text-muted hidden rounded-lg border px-3 py-1 text-xs font-medium xl:block">
            v1.0.0
          </span>

          <Link
            href="https://github.com/your-org/agni-sdk"
            target="_blank"
            className="border-border hover:bg-surface-muted flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
          >
            <FaGithub className="h-4 w-4" />
          </Link>

          <ThemeToggle />
        </div>
      </div>

      <div className="border-border border-b" />
    </header>
  );
}
