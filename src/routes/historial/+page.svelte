<script>
	import { Button, Search } from 'flowbite-svelte';
	import GoHome from '../../components/GoHome.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import srvData from '../../components/data.json';

	let selected = '';
	let value = '';
	let searched = [];

	const selecting = (section) => {
		/* selected = section; */
	};

	const searching = () => {
		console.log(value);
		searched = srvData.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()));
	};
</script>

<div class="p-4">
	<h1 class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Historial</h1>

	<div class="navbar">
		<Button on:click={() => selecting('hoy')} outline={selected !== 0} color={'purple'}>Hoy</Button>
		<Button on:click={() => selecting('ayer')} outline={selected !== 1} color={'purple'}
			>Ayer</Button
		>
		<Button on:click={() => selecting('semana')} outline={selected !== 2} color={'purple'}
			>Esta Semana</Button
		>
		<Button on:click={() => selecting('mas')} outline={selected !== 3} color={'purple'}
			>Mas...</Button
		>
		<Button on:click={() => selecting('busqueda')} outline={selected !== 4} color={'purple'}
			>Busquedas...</Button
		>
	</div>

	{#if selected !== 'busqueda'}
		<Pagination data={srvData} filter={selected} filterAttr={'type'} pageSize={5} type={1} />
	{/if}

	{#if selected === 'busqueda'}
		<div class="search-bar m-auto">
			<Search bind:value>
				<Button on:click={searching}>Search</Button>
				&nbsp;
			</Search>
			&nbsp;
		</div>
		{#if searched.length}
			<Pagination data={searched} pageSize={6} type={2} />
		{/if}
	{/if}

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
	.search-bar {
		width: 500px;
	}
</style>
