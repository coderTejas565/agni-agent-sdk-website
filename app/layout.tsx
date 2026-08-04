import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Agni SDK — Build Production-Ready AI Agents',
    template: '%s | Agni SDK',
  },
  description:
    'A TypeScript-first runtime for building reliable AI agents with tools, providers, memory, and observability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode ;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
  <ThemeProvider>
    <RootProvider>{children}</RootProvider>
  </ThemeProvider>
</body>
    </html>
  );
}
