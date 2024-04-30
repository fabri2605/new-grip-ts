<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid
	} from 'flowbite-svelte-icons';
	import Pagination from '../../components/Pagination.svelte';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';
	import { onMount } from 'svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';

	let selected = 'Borradores';

	const selecting = (section) => {
		selected = section;
	};

	onMount(() => {
		let aux = document.getElementsByClassName('PRIME');
		aux = [aux[0]];
	});
</script>

<div class="p-4">
	<SectionTitle title="Pendientes" />
	<Tabs tabStyle="underline" defaultClass="flex justify-around flex-wrap">
		<TabItem open on:click={() => selecting('Borradores')}>
			<div slot="title" class="flex items-center gap-2">
				<BriefcaseSolid size="md" />
				Borradores
			</div>
			<!-- <p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Profile:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p> -->
		</TabItem>
		<TabItem on:click={() => selecting('Completar')}>
			<div slot="title" class="flex items-center gap-2">
				<GridSolid size="md" />
				Completar
			</div>
		</TabItem>
		<TabItem on:click={() => selecting('Revisar')}>
			<div slot="title" class="flex items-center gap-2">
				<AdjustmentsVerticalSolid size="md" />
				Revisar
			</div>
		</TabItem>
		<TabItem on:click={() => selecting('Emitidos')}>
			<div slot="title" class="flex items-center gap-2">
				<ClipboardSolid size="md" />
				Emitidos
			</div>
		</TabItem>
	</Tabs>
	<Pagination data={srvData} filter={selected} filterAttr={'type'} pageSize={7} />

	<GoHome />
</div>

<style>
	div {
		text-align: center;
	}
</style>
