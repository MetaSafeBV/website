<template>
	<div class="feature-card">
		<div class="feature-header">
			<div class="feature-icon" :style="{ backgroundColor: iconColor }">
				<i :class="icon"></i>
			</div>
			<h3 class="feature-title">{{ title }}</h3>
		</div>
		<p class="feature-description">{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
import { FeatureCardProps } from './types';

defineProps<FeatureCardProps>();
</script>

<style scoped>
.feature-card {
	height: 100%;
	padding: 1.5rem;
	border-radius: 0.75rem;
	transition: all 0.3s ease;
	background: var(--bg-card);
	border: 1px solid var(--border-color);
}

.feature-card:hover {
	transform: translateY(-4px);
	box-shadow: var(--shadow-lg);
	border-color: var(--color-secondary);
}

.feature-header {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
}

.feature-icon {
	width: 40px;
	height: 40px;
	min-width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: white;
	font-size: 1rem;
}

.feature-icon i {
	display: flex;
	align-items: center;
	justify-content: center;
}

.feature-title {
	margin: 0;
	font-weight: 600;
	font-size: 1.25rem;
	color: var(--text-primary);
}

.feature-description {
	margin: 0;
	font-size: 1rem;
	line-height: 1.5;
	color: var(--text-secondary);
}
</style>