<script lang="ts">
	import GoHome from '../../components/GoHome.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import srvData from '../../components/data.json';
	import PersonalPagination from '../../components/Pagination/PersonalPagination.svelte';
	import { Button, Tabs, TabItem, Search } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid,
		SearchSolid
	} from 'flowbite-svelte-icons';

	import type { formObj } from '../../components/Interfaces';

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
	let searched: Array<formObj> = [];

	const selecting = (section : string) => {
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
					<PersonalPagination data={srvData} pageSize={5} />
					<!-- <Pagination data={srvData} filter={selected} filterAttr={'type'} pageSize={5} type={1} /> -->
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
			<PersonalPagination data={searched} pageSize={6} />
		{/if}
	{/if}

	<GoHome />
</div>

<style>
	div {
		text-align: center;
	}
	.search-bar {
		width: 500px;
	}
</style>
