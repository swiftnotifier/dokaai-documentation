import { createAPIPage } from 'fumadocs-openapi/ui';
import { openapi } from '@/lib/openapi';
import client from './api-page.client';

export const APIPage = createAPIPage(openapi, {
  client,
  content: {
    renderOperationLayout(slots) {
      return (
        <div className="grid gap-6 text-sm @container xl:grid-cols-[minmax(0,1.45fr)_minmax(400px,1fr)] xl:items-start">
          <div className="min-w-0">
            {slots.header}
            {slots.apiPlayground}
            {slots.description}
            {slots.authSchemes}
            {slots.parameters}
            {slots.body}
            {slots.responses}
            {slots.callbacks}
          </div>
          <div className="min-w-0 xl:sticky xl:top-[calc(var(--fd-docs-row-1,0px)+5rem)]">
            {slots.apiExample}
          </div>
        </div>
      );
    },
  },
});
