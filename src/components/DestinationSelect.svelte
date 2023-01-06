<script lang="ts">
	import {
		destination,
		moon,
		mars,
		europa,
		titan,
	} from "../utils/svelte/destinationStore";
</script>

<div>
	<ul class="flex space-x-12 justify-center font-barlow">
		<li>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(moon)}>MOON</button
			>
		</li>
		<li>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(mars)}>MARS</button
			>
		</li>
		<li>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(europa)}>EUROPA</button
			>
		</li>
		<li>
			<button
				class="text-sm tracking-widest"
				on:click={() => destination.set(titan)}>TITAN</button
			>
		</li>
	</ul>
</div>
