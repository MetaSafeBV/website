<script setup lang="ts">
import { inBrowser, useData, useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchEffect, onMounted } from 'vue';

const { lang } = useData();
const router = useRouter();

watchEffect(() => {
	if (inBrowser) {
		document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2035 00:00:00 UTC; path=/`;
	}
});

onMounted(() => {
	// Redirect from root to /en/
	if (inBrowser && window.location.pathname === '/') {
		router.go('/en/');
	}
});
</script>

<template>
	<DefaultTheme.Layout />
</template>