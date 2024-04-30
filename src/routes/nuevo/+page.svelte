<script>
	import Pagination from '../../components/Pagination.svelte';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';
	import SectionTitle from '../../components/SectionTitle.svelte';
</script>

<div class="text-center p-4">
	<SectionTitle title="Agregar un nuevo registro ..." />
	&nbsp;

	<Pagination data={srvData} type={1} pageSize={6} />

	<GoHome />
</div>

<style>
</style>
