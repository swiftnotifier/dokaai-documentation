import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { docsTabs } from '@/lib/docs-tabs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree()}
      tabs={docsTabs}
      tabMode="navbar"
      nav={{ ...nav, mode: 'top' }}
    >
      {children}
    </DocsLayout>
  );
}
