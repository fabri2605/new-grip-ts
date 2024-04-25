<script>
	import { Card } from 'flowbite-svelte';
	export let title = 'Noteworthy technology acquisitions 2021';
	export let subtitle =
		'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.';
	export let version = 1;
	export let id = 1;
	export let active = false;

	const activated = active ? 'Activo' : 'En edición';
	const activeClass = active ? "text-green-800 dark:text-green-500" : "text-primary-800 dark:text-primary-700"
</script>

<Card href="/forms/{id}"> 
	<div class="card-container flex">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">{subtitle}</p>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">vrs. {version}</p>
		<p class={"font-normal leading-tight " + activeClass}>{activated}</p>
	</div>
</Card>

<style>
	h5 {
		overflow: hidden;
		white-space: nowrap; /* Don't forget this one */
		text-overflow: ellipsis;
	}
	.card-container {
		flex-direction: column;
		align-content: center;
		justify-content: space-between;
		transition: 1s;
	}
</style>
