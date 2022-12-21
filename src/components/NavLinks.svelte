<script lang="ts">
	export let path: string;

	const classList = `relative after:content-[''] after:h-full after:w-1 md:after:h-1 md:after:w-full after:absolute after:bg-white after:right-0 md:after:-bottom-6`;

	$: homeActiveClasses = path === "home" ? classList : "";
	$: destinationActiveClasses = path === "destination" ? classList : "";
	$: crewActiveClasses = path === "crew" ? classList : "";
	$: technologyActiveClasses = path === "technology" ? classList : "";
</script>

<ul class="space-y-4 md:space-y-0 md:flex w-full md:justify-between uppercase">
	<li class={`flex ml-6 md:ml-0 justify-between ${homeActiveClasses}`}>
		<a href="/" class="">
			<span class="font-bold mx-2 md:hidden">00</span>
			<span class="text-xl font-barlow md:text-base">Home</span>
		</a>
	</li>

	<li class={`flex ml-6 md:ml-0 justify-between ${destinationActiveClasses}`}>
		<a href="/destination" class="">
			<span class="font-bold mx-2 md:hidden">01</span>
			<span class="text-xl font-barlow md:text-base">Destination</span>
		</a>
	</li>

	<li class="flex ml-6 md:ml-0 justify-between {crewActiveClasses}">
		<a href="/crew" class="">
			<span class="font-bold mx-2 md:hidden">02</span>
			<span class="text-xl font-barlow md:text-base">Crew</span>
		</a>
	</li>

	<li class="flex ml-6 md:ml-0 justify-between {technologyActiveClasses}">
		<a href="/technology" class="">
			<span class="font-bold mx-2 md:hidden">03</span>
			<span class="text-xl font-barlow md:text-base">Technology</span>
		</a>
	</li>
</ul>
