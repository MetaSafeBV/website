<template>
	<div class="leadership-card">
		<img :src="imageSrc" :alt="imageAlt" class="leadership-photo" />
		<div class="leadership-card-content">
			<div class="leadership-header">
				<h3>{{ name }}</h3>
				<p class="leadership-role">{{ role }}</p>
			</div>
			<p class="leadership-expertise">
				{{ expertise }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LeadershipCardProps } from './leadership-card';

defineProps<LeadershipCardProps>();
</script>

<style scoped>
.leadership-card {
	gap: 2rem;
	display: flex;
	padding: 3rem 0.5rem;
	max-width: 300px;
	text-align: center;
	align-items: center;
	flex-direction: column;
	border-radius: 0.5rem;
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-divider);
}

.leadership-card:hover {
	transform: translateY(-4px);
	box-shadow: var(--shadow-lg);
	border-color: var(--color-primary);
}

.leadership-photo {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid var(--color-primary);
}

.leadership-card-content {
	gap: 1rem;
	display: flex;
	align-items: center;
	flex-direction: column;
}

.leadership-header {
	display: flex;
	flex-direction: column;
}

.leadership-header p {
	margin: 0;
}

.leadership-card h3 {
	margin: 0;
	font-weight: 600;
	font-size: 1.25rem;
	color: var(--text-primary);
}

.leadership-role {
	font-weight: 500;
	margin: 0.5rem 0;
	font-size: 0.9rem;
	color: var(--color-primary);
}

.leadership-expertise {
	margin: 0;
	line-height: 1.5;
	user-select: none;
	font-size: 0.85rem;
	color: var(--text-secondary);
}
</style>