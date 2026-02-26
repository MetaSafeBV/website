<template>
	<div class="home">
		<ThemeToggle />
		<section class="hero">
			<div class="container">
				<img :src="logoSrc" alt="Logo" class="hero-logo" />
				<h1 class="hero-title">
					Lorem Ipsum Dolor
					<span class="gradient-text">Sit Amet Consectetur</span>
				</h1>
				<p class="hero-subtitle">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div class="hero-actions">
					<a
						:href="constructLocaleWithLocaleSegment(locale, '/product/')"
						class="btn btn-primary"
					>
						Product
					</a>
					<a
						:href="constructLocaleWithLocaleSegment(locale, '/about/')"
						class="btn btn-secondary"
					>
						About Us
					</a>
				</div>
			</div>
		</section>
		<section class="section video-highlight">
			<div class="container">
				<h2 class="section-title">Lorem Ipsum Video</h2>
				<p class="section-subtitle">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				</p>
				<VideoSection :videoUrl="videoSrc" />
			</div>
		</section>
		<section class="section features">
			<div class="container">
				<h2 class="section-title">Lorem Ipsum Dolor</h2>
				<div class="features-grid">
					<FeatureCard
						v-for="props in FEATURE_CARDS"
						:key="props.title"
						:title="props.title"
						:description="props.description"
						:iconColor="props.iconColor"
						:icon="props.icon"
					/>
				</div>
			</div>
		</section>
		<section class="section stats">
			<div class="container">
				<div class="stats-grid">
					<StatItem
						v-for="stat in STATS"
						:key="stat.label"
						:number="stat.number"
						:label="stat.label"
					/>
				</div>
			</div>
		</section>
		<section class="section team-section">
			<div class="container">
				<h2 class="section-title">Lorem Ipsum Team</h2>
				<p class="section-subtitle">
					Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</p>
				<div class="team-grid">
					<TeamMemberCard
						v-for="props in TEAM_MEMBERS"
						:key="props.name"
						:name="props.name"
						:role="props.role"
						:image="props.image"
						:description="props.description"
						:social="props.social"
					/>
				</div>
				<div class="team-actions">
					<a
						:href="constructLocaleWithLocaleSegment(locale, '/team/')"
						class="btn btn-primary btn-lg"
					>
						Meet the Team
					</a>
				</div>
			</div>
		</section>
		<section class="section news-section">
			<div class="container">
				<div class="news-content">
					<h2 class="news-title">Want to Know More?</h2>
					<p class="news-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore.
					</p>
					<a
						:href="constructLocaleWithLocaleSegment(locale, '/news/')"
						class="btn btn-primary"
					>
						Read Our News</a
					>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import FeatureCard from "../components/FeatureCard.vue";
import VideoSection from "../components/VideoSection.vue";
import TeamMemberCard from "../components/TeamMemberCard.vue";
import ThemeToggle from "../components/ThemeToggle.vue";
import { FEATURE_CARDS, TEAM_MEMBERS, STATS } from "./home-data";
import { constructLocaleWithLocaleSegment } from "../utils/pathHelper";
import StatItem from "../components/StatItem.vue";
// @ts-expect-error - svg import
import logoSrc from "../assets/svg/logo.svg";
// @ts-expect-error - svg import
import videoSrc from "../assets/video/AMSIA.mp4";

const props = withDefaults(
	defineProps<{
		locale?: string;
	}>(),
	{
		locale: "en",
	},
);
</script>

<style scoped>
.home {
	flex: 1;
	margin: 0;
	padding: 0;
	width: 100%;
	display: flex;
	overflow: hidden;
	min-height: 100vh;
	flex-direction: column;
	justify-content: space-between;
}

.home :deep(.vp-doc) {
	max-width: none;
	padding: 0;
	margin: 0;
}

.home :deep(.vp-doc h2) {
	border-top: none !important;
}

.home :deep(h1),
.home :deep(h2),
.home :deep(h3),
.home :deep(h4),
.home :deep(h5),
.home :deep(h6) {
	border-top: none !important;
}

.section {
	width: 100%;
	padding: 5rem 0;
}

.container {
	display: flex;
	padding: 0 2rem;
	margin: 0 auto;
	max-width: 1200px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.hero {
	width: 100%;
	display: flex;
	padding: 2rem 0;
	min-height: 100vh;
	text-align: center;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		135deg,
		var(--bg-primary) 0%,
		var(--bg-secondary) 100%
	);
}

.hero-logo {
	width: 200px;
	height: auto;
}

.hero-title {
	font-weight: 700;
	line-height: 1.2;
	margin: 0 0 1.5rem 0;
	color: var(--text-primary);
	font-size: clamp(2.5rem, 5vw, 4rem);
}

.gradient-text {
	background-clip: text;
	background: linear-gradient(
		135deg,
		var(--color-primary) 0%,
		var(--color-secondary) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.hero-subtitle {
	max-width: 700px;
	line-height: 1.6;
	margin: 0 auto 2.5rem;
	color: var(--text-secondary);
	font-size: clamp(1rem, 2vw, 1.125rem);
}

.hero-actions {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	display: flex;
	font-weight: 600;
	font-size: 0.875rem;
	border-radius: 0.5rem;
	text-decoration: none;
	max-width: fit-content;
	padding: 0.5rem 1.75rem;
	transition: all 0.3s ease;
	border: 1px solid transparent;
}

.btn-primary {
	color: white;
	background: var(--color-primary);
}

.btn-primary:hover {
	color: white;
	transform: translateY(-2px);
	box-shadow: var(--shadow-lg);
	background: var(--color-primary-dark);
}

.btn-secondary {
	background: transparent;
	color: var(--text-primary);
	border-color: var(--border-color);
}

.btn-secondary:hover {
	transform: translateY(-2px);
	color: var(--color-secondary);
	border-color: var(--color-secondary);
}

.btn-lg {
	font-size: 1rem;
	padding: 0.875rem 2rem;
}

.section-title {
	font-size: clamp(2rem, 4vw, 3rem);
	font-weight: 700;
	text-align: center;
	color: var(--text-primary);
	margin: 0 0 1rem 0;
}

.section-subtitle {
	font-size: 1rem;
	text-align: center;
	color: var(--text-secondary);
	max-width: 600px;
	margin: 0 auto 3rem;
	line-height: 1.6;
}

.video-highlight {
	width: 100%;
	background: transparent;
	margin-top: 0;
}

.features {
	width: 100%;
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
}

.stats {
	width: 100%;
	background: var(--bg-secondary);
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 3rem;
	width: 100%;
	text-align: center;
}

.team-section {
	width: 100%;
	background: var(--bg-primary);
}

.team-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
}

.team-actions {
	display: flex;
	justify-content: center;
	margin-top: 3rem;
}

.news-section {
	width: 100%;
	background: linear-gradient(
		135deg,
		var(--color-primary) 0%,
		var(--color-secondary) 100%
	);
	margin-top: auto;
	padding-bottom: 5rem;
}

.news-content {
	gap: 1rem;
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.news-title {
	color: white;
	font-size: 2rem;
	font-weight: 700;
}

.news-text {
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.9);
	max-width: 600px;
	margin: 0 auto 2rem;
	line-height: 1.6;
}

.news-section .btn-primary {
	background: white;
	color: var(--color-primary);
	border-color: white;
}

.news-section .btn-primary:hover {
	background: rgba(255, 255, 255, 0.9);
	color: var(--color-primary);
	transform: translateY(-2px);
}

@media (max-width: 768px) {
	.section {
		padding: 3rem 0;
	}

	.hero {
		padding: 5rem 0 4rem;
	}

	.container {
		padding: 0 1.5rem;
	}

	.features-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.team-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
}
</style>
