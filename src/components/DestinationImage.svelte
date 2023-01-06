<script lang="ts">
	import { fade } from "svelte/transition";
	import { destination } from "../utils/svelte/destinationStore";
</script>

<div class="w-1/2">
	{#key $destination}
		<img
			in:fade
			src={$destination.image.src}
			alt={$destination.image.alt}
		/>
	{/key}
</div>
