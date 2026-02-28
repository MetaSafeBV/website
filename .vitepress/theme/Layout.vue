<template>
	<DefaultTheme.Layout />
</template>

<script setup lang="ts">
import { inBrowser, useData, useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchEffect, onMounted, ref } from 'vue';
import { getValidLocaleForNavigation } from '~/utils/locale-helper';

const router = useRouter();
const { lang } = useData();

const navigationLocale = ref<string>(getValidLocaleForNavigation(lang.value));

watchEffect(() => {
	if (inBrowser) {
		document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2035 00:00:00 UTC; path=/`;
	}
});

onMounted(() => {
	if (inBrowser && window.location.pathname === '/') {
		router.go(`/${navigationLocale.value}/`);
	}
});

defineExpose({
	navigationLocale,
});
</script>