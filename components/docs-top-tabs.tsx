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
      <div className="flex h-14 items-center gap-6 overflow-x-auto px-4 md:px-8">
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
      </div>
    </header>
  );
}
