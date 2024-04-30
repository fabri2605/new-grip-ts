<script>
	import GoHome from '../../components/GoHome.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import srvData from '../../components/data.json';
	import { Tabs, TabItem, GradientButton } from 'flowbite-svelte';
	import {
		BriefcaseSolid,
		GridSolid,
		AdjustmentsVerticalSolid,
		ClipboardSolid
	} from 'flowbite-svelte-icons';

	let selected = 0;

	const selecting = (num) => {
		selected = num;
	};
</script>

<div class="p-4">
	<SectionTitle title="Mi sesión" />

	<Tabs tabStyle="underline" defaultClass="flex justify-around flex-wrap">
		<TabItem open on:click={() => selecting(0)}>
			<div slot="title" class="flex items-center gap-2">
				<BriefcaseSolid size="md" />
				Sesión
			</div>
			<!-- <p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Profile:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p> -->
		</TabItem>
		<TabItem on:click={() => selecting(1)}>
			<div slot="title" class="flex items-center gap-2">
				<GridSolid size="md" />
				Preferencias
			</div>
		</TabItem>
		<TabItem on:click={() => selecting(2)}>
			<div slot="title" class="flex items-center gap-2">
				<AdjustmentsVerticalSolid size="md" />
				Credenciales
			</div>
		</TabItem>
		<TabItem on:click={() => selecting(3)}>
			<div slot="title" class="flex items-center gap-2">
				<ClipboardSolid size="md" />
				Mas Info
			</div>
		</TabItem>
	</Tabs>

	<div class="cards-list">
		{#if selected === 0}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Mi sesión</h1>
		{:else if selected === 1}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Mis preferencias</h1>
		{:else if selected === 2}
			<div>
				<GradientButton color="blue">Cambiar contraseña</GradientButton>
			</div>
		{:else}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Información del dispositivo</h1>
		{/if}
	</div>

	<GoHome />
</div>

<style>
	.cards-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-content: center;
		justify-content: center;
	}
</style>
