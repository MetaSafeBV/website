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
		title: 'MetaSafe',
		description: 'MetaSafe - Advanced Protection Solutions',
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
			langMenuLabel: 'Change language',
			returnToTopLabel: 'Return to top',
			sidebarMenuLabel: 'Menu',
			darkModeSwitchLabel: 'Appearance',
			lightModeSwitchTitle: 'Switch to light theme',
			darkModeSwitchTitle: 'Switch to dark theme',
		},
	};
}