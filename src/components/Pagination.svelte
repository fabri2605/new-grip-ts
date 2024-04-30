<script>
	import { Listgroup } from 'flowbite-svelte';
	import Carding from './Carding.svelte';
	export let data = [];
	export let filter = '';
	export let filterAttr = '';
	export let pageSize = 5;
	export let type = 1;

	let actualPage = 0;
	$: totalItems = filter ? data.filter((e) => e[filterAttr] === filter).length : data.length;
	$: totalPages = Math.ceil(totalItems / pageSize);

	$: {
		actualPage = 0;
		makingPages(filter ? data.filter((e) => e[filterAttr] === filter) : data, pageSize);
	}

	let showingData = [];

	const makingPages = (arr, size) => {
		showingData = [];
		for (let j = 0; j < Math.ceil(arr.length / size); j++) {
			showingData.push([]);
			for (let i = 0; i < size; i++) {
				showingData[j] = [...showingData[j], arr[size * j + i]];
			}
			showingData[j] = showingData[j].filter((e) => e !== undefined);
		}
		showingData = showingData;
	};

	makingPages(data, pageSize);

	let nonSelectedClass =
		'flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	let selectedClass =
		'flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
</script>

{#if showingData}
	{#if type == 1}
		<Listgroup
			items={filter
				? showingData[actualPage].filter((e) => e[filterAttr] === filter)
				: showingData[actualPage]}
			let:item
			class="w-100"
		>
			<div
				style="text-align: left"
				class="m-2 cursor-pointer text-gray-900 transition-colors duration-300 dark:text-white"
			>
				<a href="/forms/{item.id}">
					{item.title}<!--  Formulario prueba 18-01-2024 11:43:08 -->
				</a>
			</div>
		</Listgroup>
	{/if}
	{#if type == 2}
		<div class="flex flex-wrap justify-center align-center direction-row gap-4">
			{#each filter ? showingData[actualPage].filter((e) => e[filterAttr] === filter) : showingData[actualPage] as item}
				<Carding title={item.title} subtitle={item?.subtitle} version={item?.version} active={item?.active} id={item?.id} />
			{/each}
		</div>
	{/if}
	&nbsp;
	<div>
		<nav aria-label="Page navigation example">
			<ul class="inline-flex -space-x-px text-sm">
				<li>
					<a
						on:click={() => actualPage !== 0 && actualPage--}
						href="#"
						class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Previous</a
					>
				</li>
				{#each Array(totalPages) as _, idx}
					<li>
						<a
							on:click={() => (actualPage = idx)}
							href="#"
							class={actualPage === idx ? selectedClass : nonSelectedClass}>{idx + 1}</a
						>
					</li>
				{/each}
				<li>
					<a
						on:click={() => actualPage !== totalPages - 1 && actualPage++}
						href="#"
						class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Next</a
					>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<style>
</style>
