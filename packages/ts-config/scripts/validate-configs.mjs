import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const file of ['base.json', 'config-package.json']) {
  JSON.parse(readFileSync(path.join(packageRoot, file), 'utf8'));
}
