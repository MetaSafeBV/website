import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { generateSidebar } from '../internal/sidebar';

function sidebar(): DefaultTheme.SidebarItem[] {
	const mainItems = generateSidebar({
		locale: 'en',
		srcDir: 'src',
		collapsed: true,
		useFrontmatterTitle: false,
		ignoreList: ['Home.vue', 'home-data.ts', 'news', 'generated'],
	});

	const newsItems = generateSidebar({
		locale: 'en',
		srcDir: 'src',
		rootPath: 'news',
		collapsed: true,
		sortOrder: 'desc',
		wrapInGroup: true,
		sortBy: 'created_at',
		useFrontmatterTitle: true,
	});

	return [...mainItems, ...newsItems];
}

export function createEnLocale(): LocaleSpecificConfig<DefaultTheme.Config> {
	return {
		title: 'VYTL Works',
		description: 'VYTL Works BV - Advanced Protection Solutions',
		themeConfig: {
			logoLink: '/en/',
			sidebar: sidebar(),
			docFooter: {
				prev: 'Previous page',
				next: 'Next page',
			},
			outline: {
				label: 'On this page',
			},
			lastUpdated: {
				text: 'Last updated',
			},
		},
	};
}