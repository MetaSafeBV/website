<template>
	<div class="video-section">
		<div class="video-container" ref="videoContainer" @click="togglePlayPause">
			<video
				ref="videoElement"
				:src="props.videoUrl"
				:title="props.title"
				muted
				playsinline
				autoplay="true"
				allow="
					accelerometer;
					autoplay;
					clipboard-write;
					encrypted-media;
					gyroscope;
					picture-in-picture;
				"
				class="local-video"
			></video>
			<div class="video-overlay">
				<button
					class="play-pause-btn"
					@click.stop="togglePlayPause"
					:aria-label="isPlaying ? 'Pause video' : 'Play video'"
				>
					<svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
						<path d="M8 5v14l11-7z" />
					</svg>
					<svg v-else viewBox="0 0 24 24" fill="currentColor">
						<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, ref } from 'vue';
import type { VideoSectionProps } from './types';

const props = defineProps<VideoSectionProps>();

const videoElement = useTemplateRef('videoElement');
const videoContainer = useTemplateRef('videoContainer');
const isPlaying = ref(true);

let observer: IntersectionObserver | null = null;

const togglePlayPause = () => {
	if (videoElement.value) {
		if (isPlaying.value) {
			videoElement.value.pause();
		} else {
			videoElement.value.play();
		}
	}
};

onMounted(() => {
	if (videoElement.value) {
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

		// Sync isPlaying state with actual video state
		videoElement.value.addEventListener('play', () => {
			isPlaying.value = true;
		});
		videoElement.value.addEventListener('pause', () => {
			isPlaying.value = false;
		});
	}
});

onUnmounted(() => {
	if (observer) {
		observer.disconnect();
	}
});
</script>

<style scoped>
.video-section {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}

.video-container {
	position: relative;
	width: 100%;
	padding-bottom: 56.25%; /* 16:9 aspect ratio */
	border-radius: 12px;
	overflow: hidden;
	box-shadow: var(--shadow-xl);
	background: var(--bg-secondary);
	cursor: pointer;
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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: oklch(0 0 0 / 0);
	transition: background 0.3s ease;
	pointer-events: none;
	z-index: 10;
}

.video-container:hover .video-overlay {
	background: oklch(0 0 0 / 0.5);
}

.play-pause-btn {
	width: 80px;
	height: 80px;
	background: oklch(1 0 0 / 0.95); /* white with slight transparency */
	border: none;
	border-radius: 50%;
	color: oklch(0.1569 0.0138 285.82); /* slate-950 */
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	opacity: 0;
	transform: scale(0.8);
	pointer-events: auto;
	box-shadow: 0 4px 12px oklch(0 0 0 / 0.3);
}

.dark .play-pause-btn {
	background: oklch(0.1569 0.0138 285.82 / 0.95); /* slate-950 with slight transparency */
	color: oklch(1 0 0); /* white */
}

.video-container:hover .play-pause-btn {
	opacity: 1;
	transform: scale(1);
}

.play-pause-btn:hover {
	background: oklch(1 0 0); /* solid white */
	transform: scale(1.1);
}

.dark .play-pause-btn:hover {
	background: oklch(0.1569 0.0138 285.82); /* solid slate-950 */
}

.play-pause-btn:active {
	transform: scale(0.95);
}

.play-pause-btn svg {
	width: 36px;
	height: 36px;
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
</style>