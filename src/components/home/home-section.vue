<template>
	<div class="home-section">
		<div class="home-section-header">
			<h2 class="home-section-title">{{ title }}</h2>
			<p class="home-section-subtitle">{{ subtitle }}</p>
		</div>
		<div class="home-section-content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	subtitle: string;
}>();
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
	color: var(--text-secondary);
}

.home-section-content {
	width: 100%;
	max-width: 1200px;
}
</style>