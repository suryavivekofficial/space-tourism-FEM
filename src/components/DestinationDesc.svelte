<script lang="ts">
	import { destination } from "../utils/svelte/destinationStore";
	import { fade } from "svelte/transition";
</script>

{#key $destination}
	<div in:fade class="divide-y divide-['#383B4B'] p-4 md:w-9/12">
		<div class="py-4 mb-4 md:my-4">
			<h1 class="font-bellefair text-6xl text-center md:text-7xl">
				{$destination.title}
			</h1>
			<p class="text-center text-sm text-voilet leading-6 md:text-lg">
				{$destination.desc}
			</p>
		</div>
		<div
			class="py-6 text-center space-y-4 mt-4 md:flex md:items-center md:space-y-0 md:justify-evenly"
		>
			<div class="md:space-y-4">
				<span
					class="font-barlow text-sm tracking-widest text-voilet uppercase"
				>
					AVG. DISTANCE
				</span>
				<h4 class="font-bellefair text-3xl uppercase">
					{$destination.distance}
				</h4>
			</div>
			<div class="md:space-y-4">
				<span
					class="font-barlow text-sm tracking-widest text-voilet uppercase"
					>EST. TRAVEL TIME</span
				>
				<h4 class="font-bellefair text-3xl uppercase">
					{$destination.travelTime}
				</h4>
			</div>
		</div>
	</div>
{/key}
