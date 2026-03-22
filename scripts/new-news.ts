import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_DIR = path.resolve(__dirname, '../src/en/news');

const title = process.argv[2];

if (!title) {
	console.error('Usage: pnpm news:new "Your Article Title"');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-|-$/g, '');

const filePath = path.join(NEWS_DIR, `${slug}.md`);

if (fs.existsSync(filePath)) {
	console.error(`File already exists: src/en/news/${slug}.md`);
	process.exit(1);
}

const today = new Date().toISOString().split('T')[0];

const content = `---
layout: doc
title: ${title}
created_at: ${today}
description:
imgPath:
---

# ${title}

Write your article here.
`;

fs.writeFileSync(filePath, content);
console.log(`Created src/en/news/${slug}.md`);