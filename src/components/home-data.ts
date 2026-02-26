import { FeatureCardProps, StatItemProps, TeamMemberCardProps } from "./types";

export const FEATURE_CARDS = [
	{
		title: "Consectetur",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
		iconColor: "var(--color-secondary)",
		icon: "fas fa-rocket",
	},
	{
		title: "Adipiscing",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
		iconColor: "var(--color-primary)",
		icon: "fas fa-lightbulb",
	},
	{
		title: "Eiusmod",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
		iconColor: "var(--color-accent)",
		icon: "fas fa-shield-alt",
	},
	{
		title: "Tempor",
		description:
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		iconColor: "var(--color-secondary)",
		icon: "fas fa-cog",
	},
] as const satisfies FeatureCardProps[];

export const TEAM_MEMBERS = [
	{
		name: "Lorem Ipsum",
		role: "Dolor Sit",
		image: "https://via.placeholder.com/400x400/FF5758/FFFFFF?text=LI",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Consectetur Elit",
		role: "Adipiscing",
		image: "https://via.placeholder.com/400x400/00A6A6/FFFFFF?text=CE",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
		social: {
			linkedin: "#",
			github: "#",
		},
	},
	{
		name: "Tempor Incididunt",
		role: "Eiusmod",
		image: "https://via.placeholder.com/400x400/4AB3F4/FFFFFF?text=TI",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
		social: {
			linkedin: "#",
			twitter: "#",
		},
	},
] as const satisfies TeamMemberCardProps[];

// demo data
export const STATS = [
	{ number: "10+", label: "Lorem Ipsum" },
	{ number: "500+", label: "Dolor Sit" },
	{ number: "50+", label: "Consectetur" },
	{ number: "99%", label: "Adipiscing" },
] as const satisfies StatItemProps[];
