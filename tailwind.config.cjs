/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				homeBgMobile:
					"url('/src/assets/home/background-home-mobile.jpg')",
				homeBgDesktop:
					"url('/src/assets/home/background-home-desktop.jpg')",
				homeBgTablet:
					"url('/src/assets/home/background-home-tablet.jpg')",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			darkBlue: "#0B0D17",
			voilet: "#D0D6F9",
			white: "#ffffff",
		},
		fontFamily: {
			bellefair: ["Bellefair", "serif"],
			barlow: ["Barlow Condensed", "sans-serif"],
		},
	},
	plugins: [],
};
