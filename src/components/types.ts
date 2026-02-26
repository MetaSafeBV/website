import { Component } from "vue";

export interface VideoSectionProps {
	videoUrl: string;
	title?: string;
}

export interface TeamMemberCardProps {
	name: string;
	role: string;
	image: string;
	description?: string;
	social?: {
		linkedin?: string;
		twitter?: string;
		github?: string;
	};
}

export interface FeatureCardProps {
	title: string;
	description: string;
	icon?: string;
	iconColor?: string;
}

export interface StatItemProps {
	number: String;
	label: String;
}
