import { writable } from "svelte/store";
import Moon from "../../assets/destination/image-moon.webp";
import Mars from "../../assets/destination/image-mars.webp";
import Europa from "../../assets/destination/image-europa.webp";
import Titan from "../../assets/destination/image-titan.webp";

type destination = {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	desc: string;
	distance: string;
	travelTime: string;
};

export const moon: destination = {
	image: {
		alt: "Moon",
		src: Moon,
	},
	title: "MOON",
	desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
	distance: "384,400",
	travelTime: "3 days",
};

export const mars: destination = {
	image: {
		alt: "Mars",
		src: Mars,
	},
	title: "MARS",
	desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
	distance: "225 MIL.",
	travelTime: "9 months",
};

export const europa: destination = {
	image: {
		alt: "Europa",
		src: Europa,
	},
	title: "EUROPA",
	desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
	distance: "628 MIL.",
	travelTime: "3 years",
};

export const titan: destination = {
	image: {
		alt: "Titan",
		src: Titan,
	},
	title: "TITAN",
	desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
	distance: "1.6 BIL.",
	travelTime: "7 years",
};

export const destination = writable(moon);
