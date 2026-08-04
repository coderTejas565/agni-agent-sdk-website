"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { ThemeToggle } from "@/components/theme-toggle";

export function DocsNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center px-8 xl:px-12">
        {/* ---------------------------------------------------------------- */}
        {/* Logo */}
        {/* ---------------------------------------------------------------- */}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
            A
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">
              Agni SDK
            </p>

            <p className="text-xs text-muted">
              Documentation
            </p>
          </div>
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* Search */}
        {/* ---------------------------------------------------------------- */}

        <div className="hidden flex-1 lg:flex">
          <button
            className="
              ml-16
              mr-24
              flex
              h-11
              max-w-2xl
              flex-1
              items-center
              justify-between
              rounded-xl
              border
              border-border
              bg-surface
              px-4
              text-sm
              text-muted
              transition-colors
              hover:bg-surface-muted
            "
          >
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search documentation...
            </span>

            <kbd className="rounded-md border border-border bg-background px-2 py-1 text-[11px]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Actions */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-lg border border-border px-3 py-1 text-xs font-medium text-muted xl:block">
            v1.0.0
          </span>

          <Link
            href="https://github.com/your-org/agni-sdk"
            target="_blank"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-border
              transition-colors
              hover:bg-surface-muted
            "
          >
            <FaGithub className="h-4 w-4" />
          </Link>

          <ThemeToggle />
        </div>
      </div>

      <div className="border-b border-border" />
    </header>
  );
}