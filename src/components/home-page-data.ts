import { FeatureCardProps } from './types';

export const BENEFIT_CARDS = [
	{
		title: 'Significant Weight Reduction',
		description:
			'Without compromising crash performance, enabling increased driving range and reduced CO₂ footprint.',
		iconColor: 'var(--color-secondary)',
		icon: 'fa-solid fa-weight-hanging',
	},
	{
		title: 'Tuneable, High-Energy Absorption',
		description: 'Compact form factor delivers superior protection in minimal space.',
		iconColor: 'var(--color-primary)',
		icon: 'fa-solid fa-gauge',
	},
	{
		title: 'Manufacturing Compatibility',
		description: 'Works with industrial manufacturing routes',
		iconColor: 'var(--color-accent)',
		icon: 'fa-solid fa-industry',
	},
	{
		title: 'Cost-Neutral Integration',
		description: 'Seamlessly integrates into existing battery‑box designs without premium costs.',
		iconColor: 'var(--color-secondary)',
		icon: 'fa-solid fa-money-bill-wave',
	},
] as const satisfies FeatureCardProps[];