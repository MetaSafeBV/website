import { defineConfig } from "vitepress";
import { en } from "./locales/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "./src",
	cleanUrls: true,
	metaChunk: true,
	lastUpdated: true,
	outDir: ".vitepress/dist",
	base: process.env["VP_BASE"] || "/",
	head: [
		["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
		// Note: remove font-awesome if not used in the project to reduce bundle size
		// question to Bernard
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
			},
		],
	],
	themeConfig: {
		logo: "/assets/svg/logo.svg",
		search: {
			provider: "local",
		},
	},
	locales: {
		root: {
			label: "English",
			lang: "en-US",
			...en,
		},
	},
});
