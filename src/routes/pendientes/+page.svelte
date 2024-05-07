<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid
	} from 'flowbite-svelte-icons';
	import PersonalPagination from '../../components/Pagination/PersonalPagination.ts';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';
	import { onMount } from 'svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';

	let selectables = [
		{
			title: 'Borradores',
			select: 'Borradores',
			icon: BriefcaseSolid
		},
		{
			title: 'Completar',
			select: 'Completar',
			icon: GridSolid
		},
		{
			title: 'Revisar',
			select: 'Revisar',
			icon: AdjustmentsVerticalSolid
		},
		{
			title: 'Emitidos',
			select: 'Emitidos',
			icon: ClipboardSolid
		}
	];

	let selected = 'Borradores';

	const selecting = (section : string) => {
		selected = section;
	};

	onMount(() => {
		let aux : any = document.getElementsByClassName('PRIME');
		aux = [aux[0]];
	});
</script>

<div class="p-4">
	<SectionTitle title="Pendientes" />
	<Tabs
		tabStyle="underline"
		defaultClass="flex justify-around flex-wrap m-0"
		contentClass="bg-transparent"
	>
		{#each selectables as item}
			<TabItem open={item.select === 'Borradores'} on:click={() => selecting(item.select)}>
				<div slot="title" class="flex items-center gap-2">
					<svelte:component this={item.icon} size="md" />
					{item.title}
				</div>
			</TabItem>
		{/each}
	</Tabs>
	&nbsp;
	<PersonalPagination data={srvData} filterin={selected} filterAttr={'type'} pageSize={7} />

	<GoHome />
</div>

<style>
	div {
		text-align: center;
	}
</style>
