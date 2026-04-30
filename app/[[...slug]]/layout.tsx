import { source } from '@/lib/source';
import { DocsFooter } from '@/components/docs-footer';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { docsTabs } from '@/lib/docs-tabs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { nav, ...base } = baseOptions();

  return (
    <>
      <DocsLayout
        {...base}
        tree={source.getPageTree()}
        tabs={docsTabs}
        tabMode="navbar"
        nav={{ ...nav, mode: 'top' }}
      >
        {children}
      </DocsLayout>
      <div className="border-t bg-[#fafafa] px-8 pb-8 pt-10 md:px-10 xl:px-12">
        <DocsFooter />
      </div>
    </>
  );
}
