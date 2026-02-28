<template>
	<a class="news-list-item" :href="link" :aria-label="`Read article: ${title}`">
		<img :src="imageSrc" :alt="imgAlt" class="news-list-item-image" loading="lazy" />
		<div class="news-list-item-content">
			<div class="news-list-item-header">
				<h3 class="news-list-item-title">{{ title }}</h3>
				<p
					v-if="description"
					class="news-list-item-description"
					v-html="markdownToHtml(description || '')"
				></p>
			</div>
			<time class="news-list-item-created-at" :datetime="creationDate">
				{{ createdAt }}
			</time>
		</div>
	</a>
</template>

<script setup lang="ts">
import { markdownToHtml } from '~/utils/markdown-to-html';
import { type NewsItemProps } from '~/components/news/news';
import { computed } from 'vue';

const props = defineProps<NewsItemProps>();

const imgAlt = computed<string>(() => {
	return props.imgAlt || `${props.title} thumbnail`;
});
</script>

<style scoped>
.news-list-item {
	gap: 1rem;
	display: flex;
	padding: 1.5rem;
	cursor: pointer;
	align-items: center;
	text-decoration: none;
	border-radius: 0.75rem;
	justify-content: center;
	transition: all 0.3s ease;
	background: var(--bg-card);
	border: 1px solid var(--border-color);
}

.news-list-item:hover {
	transform: translateY(-4px);
	box-shadow: var(--shadow-lg);
	border-color: var(--color-primary);
}

.news-list-item:focus-visible {
	outline: 3px solid var(--color-primary);
	outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
	.news-list-item {
		transition: none;
	}

	.news-list-item:hover {
		transform: none;
	}
}

.news-list-item-image {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 3px solid var(--color-primary);
}

.news-list-item-content {
	flex: 1;
	gap: 1rem;
	display: flex;
	flex-direction: column;
}

.news-list-item-header {
	gap: 0.5rem;
	display: flex;
	flex-direction: column;
}

.news-list-item-title {
	margin: 0;
	font-weight: 600;
	font-size: 1.25rem;
	color: var(--text-primary);
}

.news-list-item-description {
	margin: 0;
	line-height: 1.6;
	font-size: 0.75rem;
	color: var(--text-secondary);
}

.news-list-item-meta {
	gap: 0.5rem;
	display: flex;
	margin-top: auto;
	align-items: center;
}

.news-list-item-created-at {
	margin: 0;
	font-weight: 600;
	font-size: 0.75rem;
	color: var(--color-primary);
}
</style>