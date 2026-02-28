<template>
	<Transition name="fade">
		<div
			v-if="isTransitioning"
			class="loading-indicator"
			role="progressbar"
			aria-label="Loading page"
		>
			<div class="loading-bar"></div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { usePageTransition } from '../composables/usePageTransition';

const { isTransitioning } = usePageTransition();
</script>

<style scoped>
.loading-indicator {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	height: 3px;
	background: transparent;
}

.loading-bar {
	height: 100%;
	background: var(--vp-c-brand-1);
	animation: loading 1.5s ease-in-out infinite;
	transform-origin: left;
}

@keyframes loading {
	0% {
		transform: scaleX(0);
	}
	50% {
		transform: scaleX(0.5);
	}
	100% {
		transform: scaleX(1);
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
	.loading-bar {
		animation: none;
		transform: scaleX(1);
	}
}
</style>