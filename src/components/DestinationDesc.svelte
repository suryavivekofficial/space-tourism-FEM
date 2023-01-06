<script lang="ts">
	import { destination } from "../utils/svelte/destinationStore";
</script>

<h1>{$destination.title}</h1>
<p>{$destination.desc}</p>
<h3>{$destination.distance}</h3>
<h3>{$destination.travelTime}</h3>
