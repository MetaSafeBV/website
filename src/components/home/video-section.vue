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
import type { VideoSectionProps } from '~/components/home/types';

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
	/* 16:9 aspect ratio */
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
	/* white with slight transparency */
	background: oklch(1 0 0 / 0.95);
	border: none;
	border-radius: 50%;
	/* slate-950 */
	color: oklch(0.1569 0.0138 285.82);
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
	/* slate-950 with slight transparency */
	background: oklch(0.1569 0.0138 285.82 / 0.95);
	/* white */
	color: oklch(1 0 0);
}

.video-container:hover .play-pause-btn {
	opacity: 1;
	transform: scale(1);
}

.play-pause-btn:hover {
	/* solid white */
	background: oklch(1 0 0);
	transform: scale(1.1);
}

.dark .play-pause-btn:hover {
	/* solid slate-950 */
	background: oklch(0.1569 0.0138 285.82);
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