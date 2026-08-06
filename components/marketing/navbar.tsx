'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ThemeToggle } from '../theme-toggle';

const LINKS = [
  ['Architecture', '/docs/architecture'],
  ['Features', '#features'],
  ['Docs', '/docs'],
  ['GitHub', 'https://github.com/coderTejas565/agni-agent-sdk'],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
      <motion.nav
        animate={{
          marginTop: scrolled ? 12 : 20,
          paddingInline: scrolled ? 20 : 24,
          paddingBlock: scrolled ? 8 : 10,
          borderRadius: scrolled ? 16 : 20,
          maxWidth: scrolled ? 1120 : 1280,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-background/70 supports-[backdrop-filter]:bg-background/65 flex w-full items-center justify-between border border-white/8 backdrop-blur-2xl"
        style={{
          boxShadow: scrolled
            ? '0 0 0 1px rgba(255,255,255,.03), 0 10px 40px rgba(0,0,0,.25)'
            : '0 0 0 1px rgba(255,255,255,.02)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Agni SDK — home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-[#FF7A00]/5">
            <svg
              width="22"
              height="22"
              viewBox="0 0 100 100"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M38 25 L20 50 L38 75"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              />
              <path
                d="M62 25 L80 50 L62 75"
                fill="none"
                stroke="currentColor"
                strokeWidth="7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              />
              <circle
                cx="50"
                cy="50"
                r="9"
                fill="#FF7A00"
                className="origin-center transition-transform duration-200 ease-out group-hover:scale-110"
              />
            </svg>
          </div>

          <div className="leading-tight">
            <div className="text-foreground text-[15px] font-semibold tracking-tight">
              Agni SDK
            </div>
            <div className="text-muted/70 font-mono text-[9px] tracking-[0.2em] uppercase">
              TypeScript Runtime
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-9 text-sm md:flex">
          {LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-muted hover:text-foreground relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#FF7A00] after:transition-all after:duration-200 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/docs/getting-started/quickstart"
            className="rounded-lg bg-[#FF7A00] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#FF8C1A]"
          >
            Get Started
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
