<script>
	import { Button, GradientButton } from 'flowbite-svelte';
	import GoHome from '../../components/GoHome.svelte';

	let selected = 0;

	const selecting = (num) => {
		selected = num;
	};
</script>

<div class="p-4 text-center">
	<h1 class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mi sesión</h1>

	<div class="navbar">
		{#each [0, 1, 2, 3] as index}
			<Button
				on:click={() => selecting(index)}
				outline={selected !== index}
				color={'blue'}
			>
				{#if index === 0}
					Sesión
				{:else if index === 1}
					Preferencias
				{:else if index === 2}
					Credenciales
				{:else}
					Mas info
				{/if}
			</Button>
		{/each}
	</div>

	<div class="cards-list">
		{#if selected === 0}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Mi sesión</h1>
		{:else if selected === 1}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Mis preferencias</h1>
		{:else if selected === 2}
			<GradientButton color="teal">Cambiar contraseña</GradientButton>
		{:else}
			<h1 class="mb-2 tracking-tight text-gray-900 dark:text-white">Información del dispositivo</h1>
		{/if}
	</div>

	<GoHome />
</div>

<style>
	.navbar {
		margin: 40px;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: space-around;
		gap: 30px;
	}

	.cards-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-content: center;
		justify-content: center;
	}
</style>
