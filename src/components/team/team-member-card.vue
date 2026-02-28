<template>
	<article class="team-card" role="listitem">
		<div class="team-photo">
			<img :src="imageSrc" :alt="imgAlt" loading="lazy" />
		</div>
		<div class="team-info">
			<div class="team-header">
				<h3>{{ name }}</h3>
				<p class="team-role">{{ role }}</p>
			</div>
			<p class="team-description">
				{{ description }}
			</p>
			<div class="team-social">
				<a
					v-if="social.linkedin"
					:href="social.linkedin"
					:aria-label="`${name}'s LinkedIn profile`"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-linkedin" aria-hidden="true"></i>
				</a>
				<a v-if="social.mailto" :href="social.mailto" :aria-label="`Email ${name}`">
					<i class="fas fa-envelope" aria-hidden="true"> </i>
				</a>
				<a
					v-if="social.website"
					:href="social.website"
					:aria-label="`${name}'s website`"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fas fa-globe" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type TeamMemberCardProps } from '~/components/team/team-page-data';

const props = defineProps<TeamMemberCardProps>();

const imgAlt = computed<string>(() => {
	return props.imageAlt || `Photo of ${props.name}`;
});
</script>

<style scoped>
.team-card {
	gap: 1.5rem;
	height: 100%;
	display: flex;
	text-align: center;
	padding: 2rem 1.5rem;
	border-radius: 0.75rem;
	flex-direction: column;
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-divider);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
}

.team-card:hover {
	border: 1px solid var(--vp-c-brand);
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.team-photo {
	display: flex;
	justify-content: center;
}

.team-photo img {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid var(--vp-c-brand);
}

.team-info {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.team-header {
	gap: 0.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
}

.team-header p {
	margin: 0;
}

.team-info h3 {
	margin: 0;
	font-weight: 600;
	font-size: 1.5rem;
	color: var(--vp-c-text-1);
}

.team-role {
	font-weight: 600;
	font-size: 0.875rem;
	letter-spacing: 0.5px;
	color: var(--vp-c-brand);
	text-transform: uppercase;
}

.team-description {
	flex: 1;
	line-height: 1.5;
	font-size: 0.875rem;
	color: var(--vp-c-text-2);
}

.team-social {
	gap: 1rem;
	display: flex;
	padding-top: 1rem;
	margin-top: auto;
	justify-content: center;
}

.team-social a {
	font-size: 1.2rem;
	color: var(--vp-c-text-3);
	transition: color 0.3s ease;
}

.team-social a:hover {
	color: var(--vp-c-indigo-2);
}

.team-social a:focus-visible {
	outline: 2px solid var(--vp-c-brand-1);
	outline-offset: 4px;
	border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
	.team-card {
		transition: none;
	}

	.team-card:hover {
		transform: none;
	}

	.team-social a {
		transition: none;
	}
}

@media (max-width: 768px) {
	.team-card {
		padding: 1rem;
	}
}
</style>