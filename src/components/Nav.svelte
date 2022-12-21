<script lang="ts">
	export let path: string;

	import Logo from "../assets/shared/logo.svg";
	import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
	import MenuClose from "../assets/shared/icon-close.svg";
	import { fly } from "svelte/transition";

	let visible = false;
</script>

<header class="flex items-center justify-between">
	<div>
		<img src={Logo} alt="logo" />
	</div>
	<nav>
		<div class="lg:hidden">
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
					<ul class="space-y-4">
						<li class="flex ml-6 justify-between">
							<a href="/" class="">
								<span class="font-bold mx-2">00</span>
								<span>Home</span>
							</a>
							{#if path === "home"}
								<span class="h-6 w-1 bg-white" />
							{/if}
						</li>
						<li class="flex ml-6 justify-between">
							<a href="/destination" class="">
								<span class="font-bold mx-2">01</span>
								<span>Destination</span>
							</a>
							{#if path === "destination"}
								<span class="h-6 w-1 bg-white" />
							{/if}
						</li>
						<li class="flex ml-6 justify-between">
							<a href="/crew" class="">
								<span class="font-bold mx-2">02</span>
								<span>Crew</span>
							</a>
							{#if path === "crew"}
								<span class="h-6 w-1 bg-white" />
							{/if}
						</li>
						<li class="flex ml-6 justify-between">
							<a href="/technology" class="">
								<span class="font-bold mx-2">03</span>
								<span>Technology</span>
							</a>
							{#if path === "technology"}
								<span class="h-6 w-1 bg-white" />
							{/if}
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
</header>
