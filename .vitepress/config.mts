import { defineConfig } from 'vitepress';
import { en } from './locales/en';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const VP_BASE = process.env['VP_BASE'] || '/website/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: './src',
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: false,
	outDir: 'dist',
	base: VP_BASE,
	sitemap: {
		// TODO(Bence): Add real hostname here
		hostname: '',
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
				rel: 'icon',
				type: 'image/png',
				href: `/assets/branding/MetaSafe_logo_3.2.png`,
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
			},
		],
		['meta', { name: 'theme-color', content: '#5b21b6' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'manifest', href: `${VP_BASE}manifest.json` }],
	],
	themeConfig: {
		logo: '/assets/branding/MetaSafe_logo_3.2.png',
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