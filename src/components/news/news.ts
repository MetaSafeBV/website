export interface NewsItemProps {
	title: string;
	description: string;
	createdAt: string;
	imgPath: string;
	link: string;
	creationDate: string;
}

export interface NewsPageProps {
	items: NewsItemProps[];
}

export const NEWS_ITEMS = [
	{
		title: '🚀 VYTL Works selected as Hello Tomorrow Deep Tech Pioneer 2026',
		description:
			"We're thrilled to announce that **VYTL Works** has been selected as one of the prestigious **Hello Tomorrow Deep Tech Pioneers** for 2026!",
		createdAt: 'February 2026',
		imageSrc: '/assets/news/VYTL_Works-Has-Been-Selected-As.png',
		imgAlt: 'VYTL Works selected as Hello Tomorrow Deep Tech Pioneer 2026 announcement',
		link: '/en/news/vytl-works-selected-26/',
		creationDate: '2026-02-27',
	},
] as const satisfies NewsItemProps[];