'use client';

import {
  DefaultResultDisplay,
  type ResultDisplayProps,
} from 'fumadocs-openapi/playground/client';
import { defineClientConfig } from 'fumadocs-openapi/ui/client';

function getContentType(headers: Headers) {
  return headers.get('content-type')?.split(';')[0]?.trim().toLowerCase();
}

function formatJsonResponse(data: ResultDisplayProps['data']) {
  if (data.type !== 'response' || data.body.byteLength === 0) return;

  const contentType = getContentType(data.headers);
  if (contentType !== 'application/json' && !contentType?.endsWith('+json')) return;

  try {
    const text = new TextDecoder('utf-8').decode(data.body);
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return;
  }
}

function PrettyJsonResultDisplay(props: ResultDisplayProps) {
  const formattedJson = formatJsonResponse(props.data);

  if (!formattedJson || props.data.type !== 'response') {
    return <DefaultResultDisplay {...props} />;
  }

  return (
    <div {...props} className="mt-2 flex flex-col gap-2 border-y bg-fd-secondary px-3 py-2 text-fd-secondary-foreground">
      <div className="flex items-center gap-1.5">
        <p className="me-auto text-sm font-medium">{props.data.status}</p>
        <code className="text-xs text-fd-muted-foreground">
          {getContentType(props.data.headers) ?? 'application/json'}
        </code>
        <button
          type="button"
          className="rounded-md border bg-fd-background px-2 py-1 text-xs font-medium"
          onClick={props.reset}
        >
          Close
        </button>
      </div>
      <pre className="rounded-lg border bg-fd-card p-3 text-[0.8125rem] leading-6 text-fd-card-foreground whitespace-pre-wrap break-words">
        <code>{formattedJson}</code>
      </pre>
    </div>
  );
}

export default defineClientConfig({
  playground: {
    components: {
      ResultDisplay: PrettyJsonResultDisplay,
    },
  },
});
