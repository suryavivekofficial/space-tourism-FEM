<script lang="ts">
	import { destination } from "../utils/svelte/destinationStore";
	import { fade } from "svelte/transition";
</script>

{#key $destination}
	<div in:fade class="divide-y px-6">
		<div class="py-4 mb-4">
			<h1 class="font-bellefair text-6xl text-center">
				{$destination.title}
			</h1>
			<p class="text-center text-sm text-voilet leading-6">
				{$destination.desc}
			</p>
		</div>
		<div class="py-6 text-center space-y-8 mt-4">
			<div>
				<span
					class="font-barlow text-sm tracking-widest text-voilet uppercase"
				>
					AVG. DISTANCE
				</span>
				<h4 class="font-bellefair text-3xl uppercase">
					{$destination.distance}
				</h4>
			</div>
			<div>
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
