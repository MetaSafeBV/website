<template>
	<button
		class="theme-toggle"
		@click="onThemeToggle"
		:aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
	>
		<svg
			v-if="isDark"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
		<svg
			v-else
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	</button>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { isDark } = useData();

function onThemeToggle() {
	isDark.value = !isDark.value;
}
</script>

<style scoped>
.theme-toggle {
	top: 1.5rem;
	right: 1.5rem;
	z-index: 1000;
	width: 2.5rem;
	display: flex;
	height: 2.5rem;
	position: fixed;
	cursor: pointer;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	background: var(--bg-card);
	color: var(--text-primary);
	box-shadow: var(--shadow-md);
	border: 1px solid var(--border-color);
}

.theme-toggle:hover {
	transform: scale(1.1);
	color: var(--color-primary);
	box-shadow: var(--shadow-lg);
	border-color: var(--color-primary);
}

.theme-toggle:active {
	transform: scale(0.95);
}

.theme-toggle svg {
	transition: transform 0.3s ease;
}

.theme-toggle:hover svg {
	transform: rotate(20deg);
}

.theme-toggle:focus-visible {
	outline-offset: 2px;
	outline: 3px solid var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
	.theme-toggle,
	.theme-toggle svg {
		transition: none;
	}

	.theme-toggle:hover {
		transform: none;
	}

	.theme-toggle:hover svg {
		transform: none;
	}
}

@media (max-width: 768px) {
	.theme-toggle {
		top: 1rem;
		right: 1rem;
	}
}
</style>