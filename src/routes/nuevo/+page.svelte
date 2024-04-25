<script>
	import Pagination from '../../components/Pagination.svelte';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';
</script>

<div class="text-center p-4">
	<h1 class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agregar un nuevo registro ...</h1>
	&nbsp;

	<Pagination data={srvData} type={2} pageSize={6} />

	<GoHome />
</div>

<style>
</style>
