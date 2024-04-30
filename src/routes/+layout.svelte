<script>
	import '../app.pcss';
	import { DarkMode } from 'flowbite-svelte';
	import SideNavbar from '../components/SideNavbar.svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';
	import BranchNavbar from '../components/BranchNavbar.svelte';

	let btnClass =
		'align-center text-black dark:text-primary-yellow hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 right-0 duration-100';

	let darkModed = true;
</script>

<BranchNavbar {darkModed} />
<div>
	<SideNavbar />
	<button class="absolute right-4 top-17 m-4" on:click={() => (darkModed = !darkModed)}>
		<DarkMode {btnClass} />
	</button>
	<div class="sm:ml-64">
		<slot />
		<a
			href="/nuevo"
			class="newForm fixed bottom-10 right-10 cursor-pointer rounded-full bg-lime-700 p-4 text-white"
		>
			<PlusOutline />
		</a>
	</div>
</div>

<style>
	.newForm {
		transition: 1s;
	}
	.newForm:hover {
		transform: rotateZ(90deg);
	}
</style>
