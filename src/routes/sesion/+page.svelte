<script lang="ts">
	import GoHome from '../../components/GoHome.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import { Tabs, TabItem, GradientButton } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid
	} from 'flowbite-svelte-icons';

	let selectables = [
		{
			title: 'Sesión',
			select: 0,
			icon: BriefcaseSolid
		},
		{
			title: 'Preferencias',
			select: 1,
			icon: GridSolid
		},
		{
			title: 'Credenciales',
			select: 2,
			icon: AdjustmentsVerticalSolid
		},
		{
			title: 'Mas Info',
			select: 3,
			icon: ClipboardSolid
		}
	];

	let selected = 0;

	const selecting = (num : number) => {
		selected = num;
	};
</script>

<div class="p-4">
	<SectionTitle title="Mi sesión" />

	<Tabs
		tabStyle="underline"
		defaultClass="flex justify-around flex-wrap"
		contentClass="bg-transparent"
	>
		{#each selectables as item}
			<TabItem open={item.select === 0} on:click={() => selecting(item.select)}>
				<div slot="title" class="flex items-center gap-2">
					<svelte:component this={item.icon} size="md" />
					{item.title}
				</div>
				&nbsp;
				<!-- Content -->
			</TabItem>
		{/each}
	</Tabs>

	{#if selected == 0}
		<h1 class="mb-2 text-center tracking-tight text-gray-900 dark:text-white">Mi sesión</h1>
	{/if}
	{#if selected == 1}
		<h1 class="mb-2 text-center tracking-tight text-gray-900 dark:text-white">Mis preferencias</h1>
	{/if}
	{#if selected == 2}
		<div class="text-center">
			<GradientButton color="blue">Cambiar contraseña</GradientButton>
		</div>
	{/if}
	{#if selected == 3}
		<h1 class="mb-2 text-center tracking-tight text-gray-900 dark:text-white">
			Información del dispositivo
		</h1>
	{/if}

	<GoHome />
</div>

<style>
</style>
