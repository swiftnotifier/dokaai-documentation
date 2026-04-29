import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsTopTabs } from '@/components/docs-top-tabs';
import type { CSSProperties, ReactNode } from 'react';

const docsLayoutStyle = {
  '--fd-header-height': '3.5rem',
  '--fd-sidebar-width': '18vw',
  '--fd-toc-width': '15vw',
  gridTemplate: `"sidebar sidebar header header header"
"sidebar sidebar toc-popover toc toc"
"sidebar sidebar main toc toc" 1fr / 0 var(--fd-sidebar-col) minmax(0, 77vw) var(--fd-toc-width) 0`,
} as CSSProperties;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      tabs={false}
      slots={{ header: DocsTopTabs }}
      containerProps={{ style: docsLayoutStyle }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
