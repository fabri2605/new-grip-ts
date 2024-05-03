<script>
	import GoHome from '../../components/GoHome.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import srvData from '../../components/data.json';
	import { Button, Tabs, TabItem, Search } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid,
		SearchSolid
	} from 'flowbite-svelte-icons';

	let selectables = [
		{
			title: 'Hoy',
			select: 'hoy',
			icon: BriefcaseSolid
		},
		{
			title: 'Ayer',
			select: 'ayer',
			icon: GridSolid
		},
		{
			title: 'Esta Semana',
			select: 'sem',
			icon: AdjustmentsVerticalSolid
		},
		{
			title: 'Mas..',
			select: 'mas',
			icon: ClipboardSolid
		},
		{
			title: 'Busqueda',
			select: 'busqueda',
			icon: SearchSolid
		}
	];
	let selected = '';
	let value = '';
	let searched = [];

	const selecting = (section) => {
		/* selected = section; */
	};

	const searching = () => {
		searched = srvData.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()));
	};
</script>

<div class="p-4">
	<SectionTitle title="Historial" />
	<Tabs
		tabStyle="underline"
		defaultClass="flex justify-around flex-wrap"
		contentClass="bg-transparent"
	>
		{#each selectables as item}
			<TabItem open={item.select === 'hoy'} on:click={() => selecting(item.select)}>
				<div slot="title" class="flex items-center gap-2">
					<svelte:component this={item.icon} size="md" />
					{item.title}
				</div>
				{#if selected !== 'busqueda'}
					&nbsp;
					<Pagination data={srvData} filter={selected} filterAttr={'type'} pageSize={5} type={1} />
				{/if}
			</TabItem>
		{/each}
	</Tabs>

	{#if selected === 'busqueda'}
		<div class="search-bar m-auto">
			<Search bind:value>
				<Button on:click={searching}>Search</Button>
				&nbsp;
			</Search>
			&nbsp;
		</div>
		{#if searched.length}
			<Pagination data={searched} pageSize={6} />
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
