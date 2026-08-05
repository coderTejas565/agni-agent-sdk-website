'use client';

import { useState } from 'react';

import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  children: string;

  title?: string;
}

export function Terminal({
  children,

  title = 'Terminal',
}: TerminalProps) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText(children.trim());

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const lines = children.trim().split('\n');

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] transition hover:border-white/20">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Window dots */}

          <div className="hidden gap-1.5 sm:flex">
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}

                className="h-2 w-2 rounded-full bg-white/20"
              />
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-white/60">
            <TerminalIcon
              size={14}

              className="text-primary"
            />

            {title}
          </div>
        </div>

        {/* Copy */}

        <button
          type="button"

          onClick={copyCommand}

          className="flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-xs text-white/60 transition hover:bg-white/10 hover:text-white"

          aria-label="Copy terminal command"
        >
          {copied ? (
            <>
              <Check
                size={14}

                className="text-primary"
              />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Terminal Content */}

      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
        <code>
          {lines.map((line, index) => {
            const isCommand = line.startsWith('$');

            return (
              <span
                key={index}

                className="block whitespace-pre"
              >
                {isCommand ? (
                  <>
                    <span className="text-primary">$</span>

                    <span className="ml-2 text-white/90">{line.slice(1)}</span>
                  </>
                ) : (
                  <span className="text-white/50">{line}</span>
                )}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
