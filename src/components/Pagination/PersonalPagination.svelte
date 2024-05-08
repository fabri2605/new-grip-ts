<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { formObj } from '../Interfaces';

	export let data: Array<formObj> = [];

	let showingData: Array<Array<formObj>> = [];
	export let filterin: keyof formObj | '' = '';
	export let filterAttr = '';
	export let pageSize = 5;

	let actualPage = 0;
	$: totalItems = filterin
		? data.filter((e: formObj) => e[filterAttr as keyof formObj] === filterin).length
		: data.length;
	$: totalPages = Math.ceil(totalItems / pageSize);

	$: {
		actualPage = 0;
		makingPages(filterin ? data.filter((e: any) => e[filterAttr] === filterin) : data, pageSize);
	}

	const makingPages = (arr: Array<formObj>, size: number) => {
		showingData = [];
		for (let j = 0; j < Math.ceil(arr.length / size); j++) {
			showingData.push([]);
			for (let i = 0; i < size; i++) {
				showingData[j] = [...showingData[j], arr[size * j + i]];
			}
			showingData[j] = showingData[j].filter((e: any) => e !== undefined);
		}
		showingData = showingData;
	};

	const sortTable = (some: string) => {
		/* console.log(some); */
	};

	makingPages(data, pageSize);
	let nonSelectedClass =
		'flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	let selectedClass =
		'flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
</script>

{#if showingData.length}
	<Table hoverable={true} shadow class="baby shadow-lg">
		<!-- <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
			Our products
			<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
		  </caption> -->
		<TableHead>
			<TableHeadCell on:click={() => sortTable('id')}>ID</TableHeadCell
			><!-- class="cursor-pointer" -->
			<TableHeadCell on:click={() => sortTable('title')}>Titulo</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('version')}>Version</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('active')}>Activo</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('desc')}>Descripcion</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('type')}>Tipo</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each filterin ? showingData[actualPage].filter((e) => e[filterAttr] === filterin) : showingData[actualPage] as item}
				<TableBodyRow
					on:click={() => {
						window.location.href = String(item.id);
					}}
					class="cursor-pointer"
				>
					<TableBodyCell>{item.id}</TableBodyCell>
					<TableBodyCell>{item.title}</TableBodyCell>
					<TableBodyCell>{item.version}</TableBodyCell>
					<TableBodyCell
						class={item.active
							? 'text-green-600 dark:text-green-600'
							: 'text-red-500 dark:text-red-500'}
						>{item.active ? 'Activo' : 'No activo'}</TableBodyCell
					>
					<TableBodyCell>{item.subtitle}</TableBodyCell>
					<TableBodyCell>{item.type}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	&nbsp;
	<div>
		<nav aria-label="Page navigation example">
			<ul class="inline-flex -space-x-px text-sm">
				<li>
					<a
						href="#no-action"
						on:click={(event) => {
							event.preventDefault();
							actualPage !== 0 && actualPage--;
						}}
						class="ms-0 flex h-8 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Previous</a
					>
				</li>
				{#each Array(totalPages) as _, idx}
					<li>
						<a
							href="#no-action"
							on:click={(event) => {
								event.preventDefault();
								actualPage = idx;
							}}
							class="{actualPage === idx ? selectedClass : nonSelectedClass} cursor-pointer"
							>{idx + 1}</a
						>
					</li>
				{/each}
				<li>
					<a
						href="#no-action"
						on:click={(event) => {
							event.preventDefault();
							actualPage !== totalPages - 1 && actualPage++;
						}}
						class="flex h-8 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Next</a
					>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<style>
</style>
