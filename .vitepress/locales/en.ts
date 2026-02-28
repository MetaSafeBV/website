import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { generateSidebar } from "../internal/sidebar";

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "About",
			link: "/en/about/",
			activeMatch: "/en/about/",
		},
		{
			text: "Product",
			link: "/en/product/",
			activeMatch: "/en/product/",
		},
		{
			text: "Team",
			link: "/en/team/",
			activeMatch: "/en/team/",
		},
		{
			text: "News",
			link: "/en/news/",
			activeMatch: "/en/news/",
		},
	];
}

function sidebar(): DefaultTheme.SidebarItem[] {
	return generateSidebar({
		locale: "en",
		srcDir: "src",
		collapsed: true,
		ignoreList: ["Home.vue", "home-data.ts"],
		useFrontmatterTitle: true,
	});
}

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: "MetaSafe",
	description: "MetaSafe - Advanced Protection Solutions",
	themeConfig: {
		logoLink: "/en/",
		nav: nav(),
		sidebar: sidebar(),
		docFooter: {
			prev: "Previous page",
			next: "Next page",
		},
		outline: {
			label: "On this page",
		},
		lastUpdated: {
			text: "Last updated",
		},
		langMenuLabel: "Change language",
		returnToTopLabel: "Return to top",
		sidebarMenuLabel: "Menu",
		darkModeSwitchLabel: "Appearance",
		lightModeSwitchTitle: "Switch to light theme",
		darkModeSwitchTitle: "Switch to dark theme",
	},
};
