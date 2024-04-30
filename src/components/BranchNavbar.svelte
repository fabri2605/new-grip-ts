<script>
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { CodePullRequestSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	export let darkModed;
    let darked = true;
	let beganBlack = true;

	$: {
		if(beganBlack){
			darked = darkModed;
		}else{
			darked = !darkModed;
		}
	}

	onMount(() => {
		beganBlack = localStorage.getItem('color-theme') === 'dark';
	});
</script>

<Navbar class="bg-gray-0 dark:bg-gray-600 shadow-xl">
	<NavBrand class="w-40 m-2" href="/">
		{#if darked}
			<img alt="logo" src="/dark-logo.svg" id="navbar-logo" />
		{/if}
		{#if !darked}
			<img alt="logo" src="/logo.svg" id="navbar-logo" />
		{/if}
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/" class="flex gap-2">
            Sinc
            <CodePullRequestSolid />
        </NavLi>
	</NavUl>
</Navbar>
