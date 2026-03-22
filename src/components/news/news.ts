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