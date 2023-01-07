/// <reference types="astro/client" />

export type NavLinkType = {
	serial: number;
	href: string;
	linkText: string;
	isActive: boolean;
};

export type destinationType = {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	desc: string;
	distance: string;
	travelTime: string;
};
