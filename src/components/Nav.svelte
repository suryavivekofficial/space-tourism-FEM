<script lang="ts">
	import Logo from "../assets/shared/logo.svg";
	import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
	import MenuClose from "../assets/shared/icon-close.svg";
	import { fly } from "svelte/transition";

	let visible = true;
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
				<div
					transition:fly={{ x: 200, duration: 2000 }}
					class="z-10 absolute bg-white text-darkBlue top-0 bottom-0 left-1/2"
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
				</div>
			{/if}
		</div>
	</nav>
</header>
