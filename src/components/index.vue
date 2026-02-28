<template>
	<home-page-content :locale="navigationLocale" />
</template>

<script setup lang="ts">
import homePageContent from '~/components/home/home-page-content.vue';
import { useData } from 'vitepress';
import { getValidLocaleForNavigation } from '~/utils/locale-helper';

const { lang } = useData();

const navigationLocale = getValidLocaleForNavigation(lang.value);
</script>

<style scoped></style>