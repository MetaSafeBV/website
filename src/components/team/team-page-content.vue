<template>
	<div class="team-page">
		<div class="team-header">
			<h1>Meet Our Team</h1>
			<p class="team-intro">
				Our dedicated team brings together expertise in materials science, engineering, and
				innovation to deliver cutting-edge protection solutions.
			</p>
		</div>
		<div class="team-list-container">
			<team-member-card
				v-for="member in teamMembers"
				:key="member.name"
				:name="member.name"
				:role="member.role"
				:description="member.description"
				:imageSrc="member.imageSrc"
				:imageAlt="member.imageAlt"
				:social="member.social"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TeamPageProps } from './team-page-data';
import TeamMemberCard from './team-member-card.vue';

defineProps<TeamPageProps>();
</script>

<style scoped>
.team-header {
	text-align: center;
	margin-bottom: 3rem;
}

.team-header h1 {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: var(--vp-c-text-1);
}

.team-intro {
	font-size: 1.1rem;
	color: var(--vp-c-text-2);
	max-width: 700px;
	margin: 0 auto;
	line-height: 1.6;
}

.team-list-container {
	gap: 1.5rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
}

@media (max-width: 768px) {
	.team-header h1 {
		font-size: 2rem;
	}

	.team-intro {
		font-size: 1rem;
	}
}
</style>