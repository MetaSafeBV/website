import { defineConfig } from 'vitepress';
import { en } from './locales/en';
import path from 'node:path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: './src',
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: false,
	outDir: '.vitepress/dist',
	base: process.env['VP_BASE'] || '/',
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
				type: 'image/svg+xml',
				href: '/logo.svg',
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
		['link', { rel: 'manifest', href: '/manifest.json' }],
	],
	themeConfig: {
		logo: '/logo.svg',
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