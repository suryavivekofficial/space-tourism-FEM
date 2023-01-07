<script lang="ts">
	import {
		destination,
		destinations,
	} from "../utils/svelte/destinationStore";

	const classList =
		"relative px-1 after:content-[''] after:h-1 after:w-full after:absolute text-white after:-bottom-2 after:left-0 after:bg-white";
</script>

<div>
	<ul class="flex space-x-12 justify-center font-barlow">
		<li
			class={$destination.title === "MOON"
				? classList
				: "px-1 text-voilet"}
		>
			<button
				class="text-sm tracking-widest "
				on:click={() => destination.set(destinations[0])}>MOON</button
			>
		</li>
		<li
			class={$destination.title === "MARS"
				? classList
				: "px-1 text-voilet"}
		>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(destinations[1])}>MARS</button
			>
		</li>
		<li
			class={$destination.title === "EUROPA"
				? classList
				: "px-1 text-voilet"}
		>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(destinations[2])}>EUROPA</button
			>
		</li>
		<li
			class={$destination.title === "TITAN"
				? classList
				: "px-1 text-voilet"}
		>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(destinations[3])}>TITAN</button
			>
		</li>
	</ul>
</div>
