<template>
	<div class="video-section">
		<div v-if="hasError" class="video-error">
			<p>Unable to load video. Please try again later.</p>
		</div>
		<div v-else class="video-container" ref="videoContainer" @click="onTogglePlayPause">
			<div v-if="isLoading" class="video-loading-overlay">
				<div class="spinner" aria-label="Loading video"></div>
			</div>
			<video
				ref="videoElement"
				:src="props.videoUrl"
				muted
				playsinline
				autoplay
				allow="
					accelerometer;
					autoplay;
					clipboard-write;
					encrypted-media;
					gyroscope;
					picture-in-picture;
				"
				class="local-video"
				aria-label="Product demonstration video"
				@loadeddata="onVideoLoaded"
				@canplay="onVideoLoaded"
				@error="onVideoError"
			>
				<track kind="captions" label="English captions" srclang="en" />
				Your browser does not support the video tag.
			</video>
			<div class="video-overlay" aria-live="polite" aria-atomic="true">
				<button
					class="play-pause-btn"
					@click.stop="onTogglePlayPause"
					:aria-label="isPlaying ? 'Pause video' : 'Play video'"
					type="button"
				>
					<svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M8 5v14l11-7z" />
					</svg>
					<svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
					</svg>
				</button>
			</div>
			<div class="video-controls">
				<button
					class="volume-btn"
					@click.stop="onToggleMute"
					:aria-label="isMuted ? 'Unmute video' : 'Mute video'"
					type="button"
				>
					<svg
						v-if="isMuted || volume === 0"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
						/>
					</svg>
					<svg v-else-if="volume < 0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M7 9v6h4l5 5V4l-5 5H7z" />
					</svg>
					<svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
						/>
					</svg>
				</button>
				<input
					type="range"
					min="0"
					max="1"
					step="0.1"
					:value="volume"
					@input="handleVolumeChange"
					@click.stop
					class="volume-slider"
					:aria-label="`Volume: ${Math.round(volume * 100)}%`"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, ref } from 'vue';
import type { VideoSectionProps } from '~/components/home/types';

const props = defineProps<VideoSectionProps>();

const videoElement = useTemplateRef('videoElement');
const videoContainer = useTemplateRef('videoContainer');

const volume = ref<number>(0.7);
const isMuted = ref<boolean>(true);
const hasError = ref<boolean>(false);
const isLoading = ref<boolean>(true);
const isPlaying = ref<boolean>(true);

let observer: IntersectionObserver | null = Object.create(null);
let loadingTimeout: ReturnType<typeof setTimeout> | null = Object.create(null);

function onVideoLoaded(): void {
	isLoading.value = false;

	if (!loadingTimeout) {
		return;
	}

	clearTimeout(loadingTimeout);
	loadingTimeout = null;
}

function onVideoError(): void {
	isLoading.value = false;
	hasError.value = true;

	if (!loadingTimeout) {
		return;
	}

	clearTimeout(loadingTimeout);
	loadingTimeout = null;
}

function onTogglePlayPause(): void {
	if (!videoElement.value) {
		return;
	}

	if (isPlaying.value) {
		videoElement.value.pause();
	} else {
		videoElement.value.play();
	}
}

function onToggleMute(): void {
	if (!videoElement.value) {
		return;
	}

	isMuted.value = !isMuted.value;
	videoElement.value.muted = isMuted.value;
}

function handleVolumeChange(event: Event): void {
	const target = event.target as HTMLInputElement;
	const newVolume = parseFloat(target.value);

	volume.value = newVolume;

	if (!videoElement.value) {
		return;
	}

	videoElement.value.volume = volume.value;

	if (volume.value === 0) {
		isMuted.value = true;
		videoElement.value.muted = true;
	}

	if (isMuted.value && volume.value > 0) {
		isMuted.value = false;
		videoElement.value.muted = false;
	}
}

onMounted(() => {
	if (!videoElement.value) {
		hasError.value = true;
		return;
	}

	loadingTimeout = setTimeout(() => {
		if (isLoading.value) {
			isLoading.value = false;
		}
	}, 3000);

	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					videoElement.value?.play();
				} else {
					videoElement.value?.pause();
				}
			});
		},
		{ threshold: 0.5 },
	);

	if (videoContainer.value) {
		observer.observe(videoContainer.value);
	}

	videoElement.value.addEventListener('play', () => {
		isPlaying.value = true;
	});

	videoElement.value.addEventListener('pause', () => {
		isPlaying.value = false;
	});
});

onUnmounted(() => {
	if (observer) {
		observer.disconnect();
	}

	if (loadingTimeout) {
		clearTimeout(loadingTimeout);
	}
});
</script>

<style scoped>
.video-section {
	width: 100%;
	margin: 0 auto;
	padding: 1rem;
	max-width: 1100px;
}

.video-container {
	width: 100%;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	border-radius: 12px;

	padding-bottom: 56.25%;
	box-shadow: var(--shadow-xl);
	background: var(--bg-secondary);
}

.video-container iframe,
.video-container .local-video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.video-overlay {
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	pointer-events: none;
	justify-content: center;
	background: oklch(0 0 0 / 0);
	transition: background 0.3s ease;
}

.video-container:hover .video-overlay {
	background: oklch(0 0 0 / 0.5);
}

.play-pause-btn {
	opacity: 0;
	width: 80px;
	height: 80px;
	border: none;
	display: flex;
	cursor: pointer;
	border-radius: 50%;
	align-items: center;
	pointer-events: auto;
	transform: scale(0.8);
	justify-content: center;
	transition: all 0.3s ease;
	background: oklch(1 0 0 / 0.95);
	color: oklch(0.1569 0.0138 285.82);
	box-shadow: 0 0.25rem 0.75rem oklch(0 0 0 / 0.3);
}

.dark .play-pause-btn {
	color: oklch(1 0 0);
	background: oklch(0.1569 0.0138 285.82 / 0.95);
}

.video-container:hover .play-pause-btn {
	opacity: 1;
	transform: scale(1);
}

.play-pause-btn:hover {
	background: oklch(1 0 0);
	transform: scale(1.1);
}

.dark .play-pause-btn:hover {
	background: oklch(0.1569 0.0138 285.82);
}

.play-pause-btn:active {
	transform: scale(0.95);
}

.play-pause-btn:focus-visible {
	outline: 3px solid oklch(1 0 0);
	outline-offset: 4px;
}

.dark .play-pause-btn:focus-visible {
	outline-color: oklch(0.1569 0.0138 285.82);
}

.play-pause-btn svg {
	width: 36px;
	height: 36px;
}

@media (prefers-reduced-motion: reduce) {
	.play-pause-btn,
	.video-overlay {
		transition: none;
	}

	.play-pause-btn:hover {
		transform: scale(1);
	}
}

@media (max-width: 768px) {
	.play-pause-btn {
		width: 64px;
		height: 64px;
	}

	.play-pause-btn svg {
		width: 28px;
		height: 28px;
	}
}

.video-loading-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--vp-c-bg-soft);
	z-index: 5;
	border-radius: 12px;
}

.video-error {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 400px;
	border-radius: 12px;
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-divider);
}

.video-error p {
	color: var(--vp-c-text-2);
	font-size: 1rem;
}

.spinner {
	width: 48px;
	height: 48px;
	border: 4px solid var(--vp-c-divider);
	border-top-color: var(--vp-c-brand-1);
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

@media (prefers-reduced-motion: reduce) {
	.spinner {
		animation: none;
		border-top-color: var(--vp-c-brand-1);
	}
}

.video-controls {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 0.75rem;
	background: oklch(0 0 0 / 0.7);
	backdrop-filter: blur(8px);
	border-radius: 2rem;
	opacity: 0;
	transition: opacity 0.3s ease;
	z-index: 15;
}

.video-container:hover .video-controls {
	opacity: 1;
}

.volume-btn {
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0;
	transition: transform 0.2s ease;
}

.volume-btn:hover {
	transform: scale(1.1);
}

.volume-btn:focus-visible {
	outline: 2px solid white;
	outline-offset: 2px;
	border-radius: 4px;
}

.volume-btn svg {
	width: 20px;
	height: 20px;
}

.volume-slider {
	width: 80px;
	height: 4px;
	-webkit-appearance: none;
	appearance: none;
	background: oklch(1 0 0 / 0.3);
	border-radius: 2px;
	outline: none;
	cursor: pointer;
}

.volume-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 14px;
	height: 14px;
	background: white;
	border-radius: 50%;
	cursor: pointer;
	transition: transform 0.2s ease;
}

.volume-slider::-webkit-slider-thumb:hover {
	transform: scale(1.2);
}

.volume-slider::-moz-range-thumb {
	width: 14px;
	height: 14px;
	background: white;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	transition: transform 0.2s ease;
}

.volume-slider::-moz-range-thumb:hover {
	transform: scale(1.2);
}

.volume-slider:focus-visible {
	outline: 2px solid white;
	outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
	.video-controls {
		transition: none;
	}

	.volume-btn,
	.volume-slider::-webkit-slider-thumb,
	.volume-slider::-moz-range-thumb {
		transition: none;
	}

	.volume-btn:hover {
		transform: none;
	}

	.volume-slider::-webkit-slider-thumb:hover,
	.volume-slider::-moz-range-thumb:hover {
		transform: none;
	}
}

@media (max-width: 768px) {
	.video-controls {
		bottom: 0.5rem;
		right: 0.5rem;
		padding: 0.4rem 0.6rem;
	}

	.volume-slider {
		width: 60px;
	}
}
</style>