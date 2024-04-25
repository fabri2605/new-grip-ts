<script>
	import { Button } from 'flowbite-svelte';
	import Pagination from '../../components/Pagination.svelte';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';

	let selected = 'Borradores';

	const selecting = (section) => {
		selected = section;
	};
</script>

<div class="m-2 text-center p-4">
	<h1 class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pendientes</h1>

	<div class="navbar">
		<Button outline={selected !== 'Borradores'} on:click={() => selecting('Borradores')}
			>Borradores</Button
		>
		<Button outline={selected !== 'Completar'} on:click={() => selecting('Completar')}
			>Completar</Button
		>
		<Button outline={selected !== 'Revisar'} on:click={() => selecting('Revisar')}>Revisar</Button>
		<Button outline={selected !== 'Emitidos'} on:click={() => selecting('Emitidos')}
			>Emitidos</Button
		>
	</div>

	<Pagination data={srvData} filter={selected} filterAttr={'type'} pageSize={7} />

	<GoHome />
</div>

<style>
	div {
		text-align: center;
	}
	.navbar {
		margin: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 30px;
	}
</style>
