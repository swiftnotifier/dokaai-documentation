import { generateFiles } from 'fumadocs-openapi';
import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { openapi } from '../lib/openapi';

const OUTPUT_DIR = './content/api-reference';
const PRESERVED_FILES = new Set(['meta.json', 'index.mdx', 'authentication.mdx']);

function cleanGeneratedApiReferenceContent() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const entry of readdirSync(OUTPUT_DIR)) {
    if (PRESERVED_FILES.has(entry)) continue;

    const fullPath = join(OUTPUT_DIR, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      rmSync(fullPath, { recursive: true, force: true });
      continue;
    }

    rmSync(fullPath, { force: true });
  }
}

async function main() {
  cleanGeneratedApiReferenceContent();

  await generateFiles({
    input: openapi,
    output: OUTPUT_DIR,
    per: 'operation',
    groupBy: 'tag',
    meta: false,
    includeDescription: true,
  });

  writeFileSync(
    `${OUTPUT_DIR}/index.mdx`,
    `---
title: API Reference
description: Dokaai API endpoints
---

Explore the Dokaai API by resource. Select an endpoint from the left navigation to view request details, schemas, examples, and responses.
`,
  );
}

void main();
