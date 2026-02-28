<template>
	<div class="stat-item">
		<div class="stat-number">{{ number }}</div>
		<div class="stat-label">{{ label }}</div>
	</div>
</template>

<script setup lang="ts">
import { StatItemProps } from './types';

defineProps<StatItemProps>();
</script>

<style scoped>
.stat-item {
	padding: 2rem 1rem;
}

.stat-number {
	font-size: 2.5rem;
	font-weight: 700;
	background: linear-gradient(135deg, var(--color-primary) 40%, #fff 100%);
	display: flex;
	padding: 0.25rem 0;
	align-items: center;
	background-clip: text;
	justify-content: center;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.stat-label {
	font-size: 1rem;
	color: var(--text-secondary);
	font-weight: 500;
}
</style>