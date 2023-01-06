<script lang="ts">
	import { destination } from "../utils/svelte/destinationStore";
</script>

<img src={$destination.image.src} alt={$destination.image.alt} />
