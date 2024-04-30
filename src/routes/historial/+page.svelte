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
		ClipboardSolid
	} from 'flowbite-svelte-icons';

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
	<SectionTitle title="Historial" />

	<Tabs tabStyle="underline" defaultClass="flex justify-around flex-wrap">
		<TabItem open on:click={() => selecting('hoy')}>
			<div slot="title" class="flex items-center gap-2">
				<BriefcaseSolid size="md" />
				Hoy
			</div>
			<!-- <p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Profile:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p> -->
		</TabItem>
		<TabItem on:click={() => selecting('ayer')}>
			<div slot="title" class="flex items-center gap-2">
				<GridSolid size="md" />
				Ayer
			</div>
		</TabItem>
		<TabItem on:click={() => selecting('semana')}>
			<div slot="title" class="flex items-center gap-2">
				<AdjustmentsVerticalSolid size="md" />
				Esta Semana
			</div>
		</TabItem>
		<TabItem on:click={() => selecting('mas')}>
			<div slot="title" class="flex items-center gap-2">
				<ClipboardSolid size="md" />
				Mas..
			</div>
		</TabItem>
		<TabItem on:click={() => selecting('busqueda')}>
			<div slot="title" class="flex items-center gap-2">
				<ClipboardSolid size="md" />
				Busqueda
			</div>
		</TabItem>
	</Tabs>

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
