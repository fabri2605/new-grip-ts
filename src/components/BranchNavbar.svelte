<script>
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { CloudArrowUpSolid, CodePullRequestSolid, GridSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	export let darkModed;
	let darked = true;
	let beganBlack = true;

	$: {
		if (beganBlack) {
			darked = darkModed;
		} else {
			darked = !darkModed;
		}
	}

	onMount(() => {
		beganBlack = localStorage.getItem('color-theme') === 'dark';
	});
</script>

<Navbar class="bg-gray-0 shadow-xl dark:bg-gray-600 z-40">
	<NavBrand class="m-2 w-40" href="/">
		{#if darked}
			<img alt="logo" src="/dark-logo.svg" id="navbar-logo" />
		{/if}
		{#if !darked}
			<img alt="logo" src="/logo.svg" id="navbar-logo" />
		{/if}
	</NavBrand>
	<NavUl>
		<NavLi href="/" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
			<CloudArrowUpSolid size={'lg'} class="text-gray-300" />
			<span class="ms-3 flex-1 whitespace-nowrap">Sincronizar</span>
		</NavLi>
	</NavUl>
</Navbar>
