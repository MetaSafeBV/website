<template>
	<div class="home">
		<theme-toggle />
		<section class="hero">
			<div class="container">
				<img :src="logoSrc" alt="Logo" class="hero-logo" />
				<h1 class="hero-title">
					We absorb shocks
					<span class="gradient-text">so you don't have to.</span>
				</h1>
				<p class="hero-subtitle">
					MetaSafe BV is a wholly owned subsidiary of MetaMaterial Works BV.
				</p>
				<div class="hero-actions">
					<a :href="constructLocaleWithLocaleSegment(locale, '/product/')" class="btn btn-primary">
						Product
					</a>
					<a :href="constructLocaleWithLocaleSegment(locale, '/about/')" class="btn btn-secondary">
						About Us
					</a>
				</div>
			</div>
		</section>
		<section class="section video-highlight">
			<div class="container">
				<h2 class="section-title">Understanding MetaSafe</h2>
				<p class="section-subtitle">
					The science and technology behind MetaSafe's advanced protection solutions.
				</p>
				<video-section :videoUrl="videoSrc" />
			</div>
		</section>
		<section class="section features">
			<div class="container">
				<h2 class="section-title">Key Features</h2>
				<p class="section-subtitle">
					Discover the innovative features that make MetaSafe's protection solutions stand out.
				</p>
				<div class="features-grid">
					<feature-card
						v-for="props in BENEFIT_CARDS"
						:key="props.title"
						:title="props.title"
						:description="props.description"
						:iconColor="props.iconColor"
						:icon="props.icon"
					/>
				</div>
			</div>
		</section>
		<section class="section team-section">
			<div class="container">
				<h2 class="section-title">Leadership</h2>
				<p class="section-subtitle">
					MetaSafe is led by experienced co-founders combining academic research excellence with
					industrial expertise
				</p>
				<div class="leadership-card-container">
					<leadership-card
						v-for="leadershipMember in LEADERSHIP_MEMBERS"
						:key="leadershipMember.name"
						v-bind="leadershipMember"
					/>
				</div>
				<div class="team-actions">
					<a
						:href="constructLocaleWithLocaleSegment(locale, '/team/')"
						class="btn btn-primary btn-lg"
					>
						Meet the Full Team
					</a>
				</div>
			</div>
		</section>
		<section class="section news-section">
			<div class="container">
				<div class="news-content">
					<div class="news-tagline">
						<h2 class="news-title">Want to Know More?</h2>
						<p class="news-text">
							Stay updated with the latest news, insights, and developments from MetaSafe.
						</p>
					</div>
					<a :href="constructLocaleWithLocaleSegment(locale, '/news/')" class="btn btn-primary">
						Read Our News
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import VideoSection from '../components/video-section.vue';
import ThemeToggle from '../components/theme-toggle.vue';
import FeatureCard from './feature-card.vue';
import { BENEFIT_CARDS } from './home-page-data';
import { LEADERSHIP_MEMBERS } from './team/team-page-data';
import { constructLocaleWithLocaleSegment } from '../utils/path-helper';
import LeadershipCard from './team/leadership-card.vue';

// @ts-expect-error - png import
import logoSrc from '../assets/branding/MetaSafe_logo_3.2.png';
// @ts-expect-error - svg import
import videoSrc from '../assets/video/AMSIA.mp4';

const props = withDefaults(
	defineProps<{
		locale?: string;
	}>(),
	{
		locale: 'en',
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
	background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
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
	background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
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

.leadership-card-container {
	gap: 1rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

.team-actions {
	display: flex;
	justify-content: center;
	margin-top: 3rem;
}

.news-section {
	width: 100%;
	background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
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

.news-tagline {
	gap: 0.75rem;
	display: flex;
	align-items: center;
	padding-bottom: 2rem;
	flex-direction: column;
}

.news-title {
	margin: 0;
	color: white;
	font-size: 2rem;
	font-weight: 700;
}

.news-text {
	margin: 0;
	font-size: 1rem;
	line-height: 1.6;
	color: rgba(255, 255, 255, 0.9);
}

.news-section .btn-primary {
	background: white;
	color: var(--color-primary);
	border-color: white;
}

.news-section .btn-primary:hover {
	color: white;
	transform: translateY(-2px);
	box-shadow: var(--shadow-lg);
	background: var(--color-primary);
	border-color: var(--color-primary);
	transition: all 0.3s ease;
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
}
</style>