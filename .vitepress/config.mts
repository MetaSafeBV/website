import { defineConfig } from 'vitepress';
import { en } from './locales/en';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const VP_BASE = process.env['VP_BASE'] || '/website/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: './src',
	publicDir: '../public',
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: false,
	outDir: 'dist',
	base: VP_BASE,
	sitemap: {
		hostname: 'https://metasafebv.github.io/website/',
	},
	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../src'),
				'~vitepress': path.resolve(__dirname, '../.vitepress'),
			},
		},
	},
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
			},
		],
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
		['meta', { name: 'theme-color', content: '#5b21b6' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'manifest', href: `${VP_BASE}manifest.json` }],
	],
	themeConfig: {
		logo: '/assets/logo.png',
		search: {
			provider: 'local',
		},
		socialLinks: [
			// TODO(Bence): Add social links here
		],
	},
	locales: {
		root: {
			label: 'English',
			lang: 'en-US',
			...en,
		},
	},
});