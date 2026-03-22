import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { generateSidebar } from '../internal/sidebar';

function sidebar(): DefaultTheme.SidebarItem[] {
	const mainItems = generateSidebar({
		locale: 'en',
		srcDir: 'src',
		collapsed: true,
		useFrontmatterTitle: true,
		ignoreList: ['Home.vue', 'home-data.ts', 'news'],
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

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
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