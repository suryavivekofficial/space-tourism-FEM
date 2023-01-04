<script lang="ts">
	export let serial: number;
	export let href: string;
	export let linkText: string;
	export let isActive: boolean;
</script>

<li
	class={`flex ml-6 md:ml-0 justify-between relative after:content-[''] after:h-full after:w-1 md:after:h-1 md:after:w-[110%] after:absolute  after:left-0 md:after:-bottom-6 hover:after:bg-white hover:after:opacity-50 after:duration-300 ${
		isActive ? "after:bg-white" : ""
	}`}
>
	<a {href}>
		<span class="font-bold mx-2 md:hidden lg:inline-block">0{serial}</span>
		<span class="text-xl font-barlow md:text-base">{linkText}</span>
	</a>
</li>
