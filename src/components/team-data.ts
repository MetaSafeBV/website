export interface TeamMember {
	name: string;
	role: string;
	description: string;
	photo: string;
	social: Array<{
		type: string;
		url: string;
		icon: string;
	}>;
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Bernard',
		role: 'Co-Founder & CEO',
		description:
			"Leading MetaSafe's vision of bringing metamaterials out of the lab and into the real world.",
		photo: '/assets/team/Bernard_C12_0740_head.jpg',
		social: [
			{
				type: 'LinkedIn',
				url: 'https://www.linkedin.com/in/ennisbl/',
				icon: 'fab fa-linkedin',
			},
			{
				type: 'Email',
				url: 'mailto:bernard.ennis@metamaterialworks.com',
				icon: 'fas fa-envelope',
			},
		],
	},
	{
		name: 'Corentin',
		role: 'Co-Founder & CSO',
		description:
			'Leading scientific research and development initiatives in dissipative mechanical metamaterials.',
		photo: '/assets/team/Corentin_C12_0783_profile.jpg',
		social: [
			{
				type: 'LinkedIn',
				url: 'https://www.linkedin.com/in/corentin-coulais-187b02254/',
				icon: 'fab fa-linkedin',
			},
			{
				type: 'Website',
				url: 'https://coulaislab.com/',
				icon: 'fas fa-globe',
			},
			{
				type: 'Email',
				url: 'mailto:coulais@uva.nl',
				icon: 'fas fa-envelope',
			},
		],
	},
	{
		name: 'Spyros',
		role: 'Mechanical Engineer',
		description: 'Turning metamaterials science into mechanical systems.',
		photo: '/assets/team/Spyros_head.jpg',
		social: [
			{
				type: 'LinkedIn',
				url: 'https://www.linkedin.com/in/spyridon-fyllaridis/',
				icon: 'fab fa-linkedin',
			},
			{
				type: 'Email',
				url: 'mailto:s.fyllaridis@uva.nl',
				icon: 'fas fa-envelope',
			},
		],
	},
];