import { generateFiles } from 'fumadocs-openapi';
import { writeFileSync } from 'node:fs';
import { openapi } from '../lib/openapi';

async function main() {
  await generateFiles({
    input: openapi,
    output: './content/api-reference',
    per: 'operation',
    groupBy: 'tag',
    meta: false,
    includeDescription: true,
  });

  writeFileSync(
    './content/api-reference/index.mdx',
    `---
title: API Reference
description: Dokaai API endpoints
---

Explore the Dokaai API by resource. Select an endpoint from the left navigation to view request details, schemas, examples, and responses.
`,
  );
}

void main();
