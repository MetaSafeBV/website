<template>
	<section class="news-section">
		<div class="news-list-container">
			<div v-for="news in sortedNewsItems" :key="news.title" class="news-card">
				<news-list-item v-bind="news" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NewsItemProps, NewsPageProps } from './news';
import NewsListItem from './news-list-item.vue';

const props = defineProps<NewsPageProps>();

const sortedNewsItems = computed<NewsItemProps[]>(() => {
	return Array.from(props.items).sort((a, b) => {
		return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
	});
});
</script>

<style scoped>
.news-section {
	width: 100%;
	padding: 1.5rem 0;
}

.news-list-container {
	width: 100%;
	gap: 0.75rem;
	display: flex;
	flex-direction: column;
}
</style>