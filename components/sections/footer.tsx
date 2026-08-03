'use client';

import Link from 'next/link';
import { Flame, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-border relative overflow-hidden border-t py-16">
      <div className="pointer-events-none absolute top-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-[#FF7A00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}

          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-foreground flex items-center gap-2 font-semibold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00]">
                <Flame size={18} />
              </div>
              Agni SDK
            </Link>

            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-6">
              A TypeScript-first runtime for building, debugging, and scaling reliable AI
              agents.
            </p>

            <div className="text-muted-foreground mt-5 font-mono text-xs">
              npm install agni-sdk
            </div>
          </div>

          {/* Navigation */}

          <div>
            <p className="text-muted-foreground mb-5 font-mono text-xs tracking-widest">
              PROJECT
            </p>

            <div className="space-y-3 text-sm">
              <FooterLink href="#architecture">Architecture</FooterLink>

              <FooterLink href="#features">Features</FooterLink>

              <FooterLink href="#roadmap">Roadmap</FooterLink>

              <FooterLink href="#docs">Documentation</FooterLink>
            </div>
          </div>

          {/* Community */}

          <div>
            <p className="text-muted-foreground mb-5 font-mono text-xs tracking-widest">
              COMMUNITY
            </p>

            <div className="space-y-3 text-sm">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition"
              >
                <FaGithub size={16} />
                GitHub
                <ExternalLink size={12} />
              </Link>

              <Link
                href="#docs"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-border mt-14 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Agni SDK.
          </p>

          <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
            open source
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground transition duration-200"
    >
      {children}
    </Link>
  );
}
