import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '../..');
const publicDir = join(__dirname, '../public');

const dirs = ['reports', 'mcp', 'samples'];
const files = ['manifest.json'];

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

for (const d of dirs) {
  const src = join(root, d);
  const dest = join(publicDir, d);
  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true });
    console.log('Copied', d);
  }
}
for (const f of files) {
  const src = join(root, f);
  const dest = join(publicDir, f);
  if (existsSync(src)) {
    cpSync(src, dest);
    console.log('Copied', f);
  }
}
