import { withBase } from 'vitepress';

export interface NewsItemProps {
	title: string;
	description?: string;
	createdAt: string;
	imageSrc: string;
	imgAlt: string;
	link: string;
	creationDate: string;
}

export interface NewsPageProps {
	items: NewsItemProps[];
}

export const NEWS_ITEMS = [
	{
		title: '🚀 MetaSafe Selected as Hello Tomorrow Deep Tech Pioneer 2026',
		description:
			"We're thrilled to announce that **MetaSafe** has been selected as one of the prestigious **Hello Tomorrow Deep Tech Pioneers** for 2026!",
		createdAt: 'February 2026',
		imageSrc: withBase('/assets/news/Metamaterial_Works-Has-Been-Selected-As.png'),
		imgAlt: 'MetaSafe selected as Hello Tomorrow Deep Tech Pioneer 2026 announcement',
		link: withBase('/en/news/metasafe-selected-26/'),
		creationDate: '2026-02-27',
	},
] as const satisfies NewsItemProps[];