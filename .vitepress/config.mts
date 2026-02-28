import { defineConfig } from 'vitepress';
import { en } from './locales/en';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: './src',
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: false,
	outDir: '.vitepress/dist',
	base: process.env['VP_BASE'] || '/',
	head: [
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				href: '/assets/branding/MetaSafe_logo_3.2.png',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
			},
		],
	],
	themeConfig: {
		logo: '/assets/branding/MetaSafe_logo_3.2.png',
		search: {
			provider: 'local',
		},
	},
	locales: {
		root: {
			label: 'English',
			lang: 'en-US',
			...en,
		},
	},
});