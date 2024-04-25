<script>
	import '../app.pcss';
	import { DarkMode } from 'flowbite-svelte';
	import SideNavBar from '../components/SideNavBar.svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';

	let btnClass =
		'align-center text-black dark:text-primary-yellow hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 right-0 duration-100';

	let darkModed = true;
</script>

<SideNavBar {darkModed} />
<div class="sm:ml-64">
	<button class="absolute right-0 top-0 m-4" on:click={() => (darkModed = !darkModed)}>
		<DarkMode {btnClass} />
	</button>
	<slot />
	<a href="/nuevo" class="newForm text-white fixed right-10 bottom-10 bg-lime-700 rounded-full p-4 cursor-pointer">
		<PlusOutline />
	</a>
</div>

<style>
	.newForm{
		transition: 1s;
	}
	.newForm:hover{
		transform: rotateZ(90deg);
	}
</style>
