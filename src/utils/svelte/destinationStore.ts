import { writable } from "svelte/store";
import Moon from "../../assets/destination/image-moon.webp";
import Mars from "../../assets/destination/image-mars.webp";
import Europa from "../../assets/destination/image-europa.webp";
import Titan from "../../assets/destination/image-titan.webp";
import type { destinationType } from "../../env";

export const destinations: destinationType[] = [
	{
		title: "MOON",
		image: {
			alt: "Moon",
			src: Moon,
		},
		desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 KM",
		travelTime: "3 days",
	},

	{
		title: "MARS",
		image: {
			alt: "Mars",
			src: Mars,
		},
		desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 MIL. KM",
		travelTime: "9 months",
	},

	{
		title: "EUROPA",
		image: {
			alt: "Europa",
			src: Europa,
		},
		desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 MIL. KM",
		travelTime: "3 years",
	},

	{
		title: "TITAN",
		image: {
			alt: "Titan",
			src: Titan,
		},
		desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 BIL. KM",
		travelTime: "7 years",
	},
];

export const destination = writable(destinations[0]);
