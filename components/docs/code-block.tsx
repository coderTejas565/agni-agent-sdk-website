'use client';

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;

  language?: string;

  filename?: string;
}

export function CodeBlock({
  children,
  language = 'typescript',
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(children.trim());

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="group border-border bg-surface hover:border-primary/40 my-8 overflow-hidden rounded-xl border transition-all">
      {/* Header */}

      <div className="border-border bg-surface-muted/60 flex items-center justify-between border-b px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          {/* Editor dots */}

          <div className="hidden gap-1.5 sm:flex">
            <span className="bg-muted/50 h-2 w-2 rounded-full" />

            <span className="bg-muted/50 h-2 w-2 rounded-full" />

            <span className="bg-muted/50 h-2 w-2 rounded-full" />
          </div>

          {filename ? (
            <span className="text-foreground/80 font-mono text-xs">{filename}</span>
          ) : (
            <span className="text-muted font-mono text-[11px] tracking-widest uppercase">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={copyCode}

          type="button"

          aria-label="Copy code"

          className="border-border text-muted hover:bg-background hover:text-foreground flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-xs transition"
        >
          {copied ? (
            <>
              <Check size={14} className="text-primary" />
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

      {/* Code Area */}

      <pre className="scrollbar-thin overflow-x-auto bg-[#0d0d0d] p-5 text-sm leading-7 text-white/90">
        <code className="font-mono tabular-nums">{children.trim()}</code>
      </pre>
    </div>
  );
}
