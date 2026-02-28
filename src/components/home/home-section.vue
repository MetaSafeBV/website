<template>
	<section class="home-section" :aria-labelledby="sectionId">
		<header class="home-section-header">
			<h2 class="home-section-title" :id="sectionId">{{ title }}</h2>
			<p class="home-section-subtitle">{{ subtitle }}</p>
		</header>
		<div class="home-section-content">
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	title: string;
	subtitle: string;
}>();

const sectionId = computed<string>(() => props.title.toLowerCase().replace(/\s+/g, '-'));
</script>

<style scoped>
.home-section {
	gap: 2.5rem;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 3rem 2rem;
	flex-direction: column;
}

.home-section-header {
	gap: 1rem;
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.home-section-title {
	margin: 0;
	font-size: 2.5rem;
	font-weight: 700;
	color: var(--text-primary);
}

.home-section-subtitle {
	margin: 0;
	font-size: 1rem;
	line-height: 1.6;
	max-width: 65ch;
	color: var(--text-secondary);
}

.home-section-content {
	width: 100%;
	max-width: 1200px;
}

@media (max-width: 768px) {
	.home-section {
		padding: 2rem 1rem;
	}

	.home-section-title {
		font-size: 2rem;
	}

	.home-section-subtitle {
		font-size: 0.9rem;
	}
}
</style>