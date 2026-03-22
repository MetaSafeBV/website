import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_DIR = path.resolve(__dirname, '../src/en/news');
const OUTPUT_FILE = path.resolve(__dirname, '../src/en/generated/news.json');

interface NewsFrontmatter {
	title: string;
	created_at: string;
	description?: string;
	imgPath?: string;
}

interface NewsItem {
	title: string;
	description: string;
	createdAt: string;
	imgPath: string;
	link: string;
	creationDate: string;
}

function parseFrontmatter(content: string): NewsFrontmatter {
	const match = content.match(/^---\n([\s\S]*?)\n---/);

	if (!match) {
		throw new Error('No frontmatter found');
	}

	const data: Record<string, string> = {};
	const lines: string[] = match?.[1]?.split('\n') || [];

	if (!lines || lines.length === 0) {
		throw new Error('Cannot access match data or split text into lines');
	}

	for (const line of lines) {
		const colonIndex = line.indexOf(':');

		if (colonIndex > 0) {
			data[line.slice(0, colonIndex).trim()] = line.slice(colonIndex + 1).trim();
		}
	}

	return data as unknown as NewsFrontmatter;
}

function formatDisplayDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
	});
}

function extractDescription(content: string): string {
	const body = content.replace(/^---[\s\S]*?---/, '');
	const paragraphs = body
		.split('\n')
		.filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('<') && !l.startsWith('!'))
		.map((l) => l.trim());

	return paragraphs[0] || '';
}

const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md') && f !== 'index.md');

const news: NewsItem[] = files
	.map((file) => {
		const content = fs.readFileSync(path.join(NEWS_DIR, file), 'utf-8');
		const fm = parseFrontmatter(content);
		const slug = file.replace('.md', '');

		return {
			title: fm.title,
			description: fm.description || extractDescription(content),
			createdAt: formatDisplayDate(fm.created_at),
			imgPath: fm.imgPath || `/assets/news/${slug}.png`,
			link: `/en/news/${slug}`,
			creationDate: fm.created_at,
		};
	})
	.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());

// Ensure output directory exists
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ news }, null, '\t'));

console.log(`Generated ${news.length} news items → src/en/generated/news.json`);