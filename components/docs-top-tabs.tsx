'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Code, Plug } from 'lucide-react';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

const tabs = [
  {
    title: 'Documentation',
    href: '/docs/documentation',
    icon: BookOpen,
  },
  {
    title: 'Integration',
    href: '/docs/integration',
    icon: Plug,
  },
  {
    title: 'API Reference',
    href: '/docs/api-reference',
    icon: Code,
  },
];

export function DocsTopTabs({ className, ...props }: ComponentProps<'header'>) {
  const pathname = usePathname();

  return (
    <header
      {...props}
      className={cn(
        '[grid-area:header] sticky top-0 z-30 border-b bg-fd-background',
        className,
      )}
    >
      <div className="relative flex h-14 items-center gap-6 overflow-x-auto px-4 md:px-8 md:pr-72">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = pathname === tab.href || pathname.startsWith(`${tab.href}/`);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                'flex h-full items-center gap-2 border-b-2 border-transparent text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground',
                active && 'border-fd-primary text-fd-primary',
              )}
            >
              <Icon className="size-4" />
              {tab.title}
            </Link>
          );
        })}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center rounded-md border border-[#0f172a] bg-white px-3 text-xs font-semibold text-[#0f172a] transition-colors hover:bg-slate-50"
          >
            Request a Demo
          </button>
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[#0f172a] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#1e293b]"
          >
            Try for Free
          </button>
        </div>
      </div>
    </header>
  );
}
