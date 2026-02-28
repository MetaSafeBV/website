<template>
	<article class="feature-card" role="listitem">
		<div class="feature-header">
			<div class="feature-icon" :style="{ backgroundColor: iconColor }" aria-hidden="true">
				<i :class="icon"></i>
			</div>
			<h3 class="feature-title">{{ title }}</h3>
		</div>
		<p class="feature-description">{{ description }}</p>
	</article>
</template>

<script setup lang="ts">
import { type FeatureCardProps } from '~/components/home/types';

defineProps<FeatureCardProps>();
</script>

<style scoped>
.feature-card {
	height: 100%;
	padding: 1.5rem;
	border-radius: 1rem;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-divider);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
	transform: translateY(-2px) scale(1.01);
	box-shadow: 0 8px 30px var(--vp-shadow-2);
	border-color: var(--vp-c-brand-1);
}

@media (prefers-reduced-motion: reduce) {
	.feature-card,
	.feature-icon {
		transition: none;
	}

	.feature-card:hover {
		transform: none;
	}

	.feature-card:hover .feature-icon {
		transform: none;
	}
}

.feature-header {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
}

.feature-icon {
	width: 48px;
	height: 48px;
	min-width: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.875rem;
	color: white;
	font-size: 1.25rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-icon {
	transform: scale(1.05);
}

.feature-icon i {
	display: flex;
	align-items: center;
	justify-content: center;
}

.feature-title {
	margin: 0;
	font-weight: 600;
	font-size: 1.125rem;
	color: var(--vp-c-text-1);
	letter-spacing: -0.01em;
}

.feature-description {
	margin: 0;
	font-size: 0.9375rem;
	line-height: 1.6;
	color: var(--vp-c-text-2);
	font-weight: 400;
}

@media (max-width: 768px) {
	.feature-card {
		padding: 1.25rem;
	}

	.feature-icon {
		width: 40px;
		height: 40px;
		min-width: 40px;
		font-size: 1.125rem;
	}

	.feature-title {
		font-size: 1rem;
	}

	.feature-description {
		font-size: 0.875rem;
	}
}
</style>