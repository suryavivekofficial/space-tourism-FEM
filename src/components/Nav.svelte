<script lang="ts">
	export let path: string;

	import type { NavLinkType } from "../env";
	import Logo from "../assets/shared/logo.svg";
	import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
	import MenuClose from "../assets/shared/icon-close.svg";
	import { fly } from "svelte/transition";
	import NavLink from "./NavLink.svelte";

	let visible = false;

	const navInfo: NavLinkType[] = [
		{
			serial: 0,
			href: "/",
			linkText: "HOME",
			isActive: path === "home",
		},
		{
			serial: 1,
			href: "/destination",
			linkText: "DESTINATION",
			isActive: path === "destination",
		},
		{
			serial: 2,
			href: "/crew",
			linkText: "CREW",
			isActive: path === "crew",
		},
		{
			serial: 3,
			href: "/technology",
			linkText: "TECHNOLOGY",
			isActive: path === "technology",
		},
	];
</script>

<header class="flex items-center justify-between p-6 md:p-0 lg:py-6">
	<div class="md:px-8">
		<img src={Logo} alt="logo" />
	</div>
	<nav
		class="md:w-3/5 lg:w-7/12 relative lg:before:absolute lg:before:right-[97%] lg:before:top-1/2 lg:before:content-[''] lg:before:h-px lg:before:w-7/12 lg:before:z-10 lg:before:bg-white"
	>
		<!-- Desktop & Tablet Nav -->
		<div
			class="hidden md:flex justify-around bg-white/5 p-6 pr-8 lg:px-12 backdrop-blur-3xl"
		>
			<ul
				class="space-y-4 md:space-y-0 md:flex w-full md:justify-between uppercase tracking-wider"
			>
				<NavLink {...navInfo[0]} />
				<NavLink {...navInfo[1]} />
				<NavLink {...navInfo[2]} />
				<NavLink {...navInfo[3]} />
			</ul>
		</div>

		<!-- Mobile Nav -->
		<div class="md:hidden">
			<button on:click={() => (visible = true)}>
				<img src={HamburgerMenu} alt="Open Menu" />
			</button>

			{#if visible}
				<div
					transition:fly={{ x: 200, duration: 500 }}
					class="z-10 w-[70vw] backdrop-blur-3xl fixed bg-white/5 text-white opacity-100 top-0 bottom-0 right-0"
				>
					<button
						on:click={() => (visible = false)}
						class="w-full py-10 px-8"
					>
						<img src={MenuClose} alt="Close Menu" class="ml-auto" />
					</button>
					<ul
						class="space-y-4 md:space-y-0 md:flex w-full md:justify-between uppercase tracking-wider"
					>
						<NavLink {...navInfo[0]} />
						<NavLink {...navInfo[1]} />
						<NavLink {...navInfo[2]} />
						<NavLink {...navInfo[3]} />
					</ul>
				</div>
			{/if}
		</div>
	</nav>
</header>
