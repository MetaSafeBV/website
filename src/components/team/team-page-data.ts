import { type LeadershipCardProps } from '~/components/team/leadership-card';

import BernardEnnisSrc from '~/assets/team/Bernard_C12_0740_head.jpg';
import CorentinCoulaisSrc from '~/assets/team/Corentin_C12_0783_profile.jpg';
import SpyrosFyllaridisSrc from '~/assets/team/Spyros_head.jpg';

export interface TeamMemberCardProps {
	imageSrc: string;
	imageAlt: string;
	name: string;
	role: string;
	description: string;
	social: {
		linkedin?: string;
		mailto?: string;
		website?: string;
	};
}

export interface TeamPageProps {
	teamMembers: TeamMemberCardProps[];
}

export const LEADERSHIP_MEMBERS = [
	{
		name: 'Bernard Ennis',
		role: 'Co-Founder & CEO',
		expertise: '30+ years industrial experience in Automotive, Marine and Electrical sectors',
		imageSrc: BernardEnnisSrc,
		imageAlt: 'Bernard Ennis, Co-Founder and CEO of MetaSafe',
	},
	{
		name: 'Corentin Coulais',
		role: 'Co-Founder & CSO',
		expertise: 'Associate Professor, University of Amsterdam',
		imageSrc: CorentinCoulaisSrc,
		imageAlt: 'Corentin Coulais, Co-Founder and Chief Scientific Officer of MetaSafe',
	},
] as const satisfies LeadershipCardProps[];

export const TEAM_MEMBERS = [
	{
		imageSrc: BernardEnnisSrc,
		imageAlt: 'Bernard Ennis, Co-Founder and CEO',
		name: 'Bernard',
		role: 'Co-Founder & CEO',
		description:
			"Leading MetaSafe's vision of bringing metamaterials out of the lab and into the real world.",
		social: {
			linkedin: 'https://www.linkedin.com/in/ennisbl/',
			mailto: 'mailto:bernard.ennis@metamaterialworks.com',
		},
	},
	{
		imageSrc: CorentinCoulaisSrc,
		imageAlt: 'Corentin Coulais, Co-Founder and Chief Scientific Officer',
		name: 'Corentin',
		role: 'Co-Founder & CSO',
		description:
			'Leading scientific research and development initiatives in dissipative mechanical metamaterials.',
		social: {
			linkedin: 'https://www.linkedin.com/in/corentin-coulais-187b02254/',
			website: 'https://coulaislab.com/',
			mailto: 'mailto:coulais@uva.nl',
		},
	},
	{
		imageSrc: SpyrosFyllaridisSrc,
		imageAlt: 'Spyros Fyllaridis, Mechanical Engineer',
		name: 'Spyros',
		role: 'Mechanical Engineer',
		description: 'Turning metamaterials science into mechanical systems.',
		social: {
			linkedin: 'https://www.linkedin.com/in/spyridon-fyllaridis/',
			mailto: 'mailto:s.fyllaridis@uva.nl',
		},
	},
] as const satisfies TeamMemberCardProps[];