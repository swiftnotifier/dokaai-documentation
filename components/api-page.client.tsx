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

  const body = new TextEncoder().encode(formattedJson).buffer;

  return <DefaultResultDisplay {...props} data={{ ...props.data, body }} />;
}

export default defineClientConfig({
  playground: {
    components: {
      ResultDisplay: PrettyJsonResultDisplay,
    },
  },
});
