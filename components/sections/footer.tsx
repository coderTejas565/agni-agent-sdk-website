'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-border/50 border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-foreground text-sm font-semibold tracking-tight"
            >
              Agni SDK
            </Link>
            <p className="text-muted-foreground mt-1 text-sm">
              TypeScript runtime for reliable AI agents.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="#architecture"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/coderTejas565/agni-agent-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaGithub size={14} />
              GitHub
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-muted-foreground/60 mt-8 flex flex-col gap-2 border-t border-border/30 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Agni SDK.</span>
          <span>Open source — MIT</span>
        </div>
      </div>
    </footer>
  );
}