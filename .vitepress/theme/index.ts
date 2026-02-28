// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import Layout from './Layout.vue';
import { onMounted, watch } from 'vue';

import './css/style.css';
import './css/colors.css';

export enum SupportedLocales {
	EN = 'en',
}

export default {
	extends: DefaultTheme,
	Layout,

	enhanceApp({ app }) {
		if (typeof window !== 'undefined') {
			app.mixin({
				setup() {
					const { isDark } = useData();

					function updateTheme(): void {
						const html = document.documentElement;
						if (isDark.value) {
							html.classList.add('dark');
							html.setAttribute('data-theme', 'dark');
						} else {
							html.classList.remove('dark');
							html.setAttribute('data-theme', 'light');
						}
					}

					onMounted(() => {
						if (!localStorage.getItem('vitepress-theme-appearance')) {
							const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
							isDark.value = prefersDark;
						}

						updateTheme();

						watch(isDark, updateTheme);
					});
				},
			});
		}
	},
} satisfies Theme;