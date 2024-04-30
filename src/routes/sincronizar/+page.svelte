<script>
	import { Alert } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import GoHome from '../../components/GoHome.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';

	let sincronized = false;

	onMount(() => {
		setTimeout(() => {
			sincronized = true;
		}, 1000);
	});

</script>

<div class="p-4">
	<SectionTitle title="Sincronización" />
	<div class="info">
		{#if !sincronized}
			<Alert border color="yellow">
				<InfoCircleSolid slot="icon" class="h-4 w-4" />
				<span class="font-medium">Listo para sincronizar.</span>
				Por favor no cierre el navegador...
			</Alert>
		{/if}
		{#if sincronized}
			<Alert border color="green">
				<InfoCircleSolid slot="icon" class="h-4 w-4" />
				<span class="font-medium">Success alert!</span>
				Change a few things up and try submitting again.
			</Alert>
			<GoHome />
		{/if}
		
	</div>
</div>

<style>
	div {
		text-align: center;
	}
	.info {
		margin: 40px;
	}
</style>
