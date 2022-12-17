<script lang="ts">
	import Logo from "../assets/shared/logo.svg";
	import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
	import MenuClose from "../assets/shared/icon-close.svg";
	import { fly } from "svelte/transition";

	let visible = false;
	// import { isNavOpen } from "../stores/navStore";
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
				<aside
					transition:fly={{ x: 200, duration: 1000 }}
					class=" h-screen z-10 absolute bg-white opacity-5 text-white backdrop-blur-3xl -right-8 bottom-0 top-0"
				>
					<button on:click={() => (visible = false)}>
						<img src={MenuClose} alt="Close Menu" />
					</button>
					<ul class="">
						<li><a href="/">00 Home</a></li>
						<li><a href="/destination">01 Destination</a></li>
						<li><a href="/crew">02 Crew</a></li>
						<li><a href="/technology">03 Technology</a></li>
					</ul>
				</aside>
			{/if}
		</div>
	</nav>
</header>
