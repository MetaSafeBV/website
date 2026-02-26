// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import Layout from "./Layout.vue";
import { onMounted, watch } from "vue";

import "./css/style.css";
import "./css/colors.css";
/**
 * Add global styles to override VitePress defaults for home page
 */
if (typeof document !== "undefined") {
	const style = document.createElement("style");
	style.textContent = `
		.vp-doc.container {
			max-width: none;
			padding: 0;
		}

		.VPContent.is-home .vp-doc {
			max-width: none;
			padding: 0;
		}

		.VPHome {
			margin-bottom: 0 !important;
		}
	`;
	document.head.appendChild(style);
}

export default {
	extends: DefaultTheme,
	Layout,

	enhanceApp({ app }) {
		if (typeof window !== "undefined") {
			app.mixin({
				setup() {
					const { isDark } = useData();

					function updateTheme(): void {
						const html = document.documentElement;
						if (isDark.value) {
							html.classList.add("dark");
							html.setAttribute("data-theme", "dark");
						} else {
							html.classList.remove("dark");
							html.setAttribute("data-theme", "light");
						}
					}

					onMounted(() => {
						updateTheme();
						watch(isDark, updateTheme);
					});
				},
			});
		}
	},
} satisfies Theme;
