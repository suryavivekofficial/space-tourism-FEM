<script lang="ts">
	export let path: string;

	import Logo from "../assets/shared/logo.svg";
	import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
	import MenuClose from "../assets/shared/icon-close.svg";
	import { fly } from "svelte/transition";
	import NavLinks from "./NavLinks.svelte";

	let visible = false;
</script>

<header class="flex items-center justify-between p-6 md:p-0">
	<div class="md:px-8">
		<img src={Logo} alt="logo" />
	</div>
	<nav class="md:w-3/5">
		<div class="hidden md:flex justify-between bg-white/5 p-6 pr-8">
			<NavLinks {path} />
		</div>

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
					<NavLinks {path} />
				</div>
			{/if}
		</div>
	</nav>
</header>
