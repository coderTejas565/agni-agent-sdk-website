'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          paddingTop: scrolled ? 12 : 24,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
        className="mx-auto max-w-7xl px-6"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? '1100px' : '1280px',
            paddingTop: scrolled ? 12 : 16,
            paddingBottom: scrolled ? 12 : 16,
            borderRadius: scrolled ? 18 : 24,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
          className="bg-background/70 supports-[backdrop-filter]:bg-background/65 mx-auto flex items-center justify-between border border-white/8 px-6 backdrop-blur-2xl"
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
            className="group flex items-center gap-2"
          >
            {/* Brand mark */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-[#FF7A00]/5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 100 100"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M38 25 L20 50 L38 75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                />
                <path
                  d="M62 25 L80 50 L62 75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="#FF7A00"
                  className="origin-center transition-transform duration-200 ease-out group-hover:scale-110"
                />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="leading-none">
              <div className="text-foreground text-[17px] font-semibold tracking-tight">
                Agni SDK
              </div>
              <div className="text-muted/70 mt-1 font-mono text-[10px] tracking-[0.22em] uppercase">
                TypeScript Runtime
              </div>
            </div>
          </Link>

          {/* Navigation */}

          <div className="hidden items-center gap-8 text-sm md:flex">
            {[
              ['Architecture', '#architecture'],
              ['Features', '#features'],
              ['Docs', '#docs'],
              ['GitHub', 'https://github.com'],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-muted hover:text-foreground relative transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#FF7A00] after:transition-all after:duration-200 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Actions */}

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="#get-started"
              className="rounded-xl bg-[#FF7A00] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#FF8C1A]"
            >
              Get Started
            </Link>
          </div>
        </motion.nav>
      </motion.div>
    </header>
  );
}
