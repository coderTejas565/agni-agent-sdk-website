"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-border
            bg-surface/80
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="
              flex
              items-center
              gap-2
              font-semibold
              tracking-tight
              text-foreground
            "
          >
            <Flame
              size={22}
              className="text-[#FF7A00]"
            />

            <span className="text-lg">
              Agni SDK
            </span>
          </Link>


          {/* Navigation */}

          <div
            className="
              hidden
              items-center
              gap-8
              text-sm
              text-muted
              md:flex
            "
          >
            <Link
              href="#architecture"
              className="
                transition
                hover:text-foreground
              "
            >
              Architecture
            </Link>

            <Link
              href="#features"
              className="
                transition
                hover:text-foreground
              "
            >
              Features
            </Link>

            <Link
              href="#docs"
              className="
                transition
                hover:text-foreground
              "
            >
              Docs
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="
                transition
                hover:text-foreground
              "
            >
              GitHub
            </Link>
          </div>


          {/* Actions */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <ThemeToggle />


            <Link
              href="#get-started"
              className="
                rounded-lg
                bg-[#FF7A00]
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#FF8C1A]
              "
            >
              Get Started
            </Link>

          </div>

        </nav>
      </div>
    </header>
  );
}