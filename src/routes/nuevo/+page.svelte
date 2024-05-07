<script lang="ts">
	import PersonalPagination from '../../components/Pagination/PersonalPagination.ts';
	import GoHome from '../../components/GoHome.svelte';
	import srvData from '../../components/data.json';
	import SectionTitle from '../../components/SectionTitle.svelte';
</script>

<div class="text-center p-4">
	<SectionTitle title="Agregar un nuevo registro ..." />
	&nbsp;

	<PersonalPagination data={srvData} pageSize={6} />

	<GoHome />
</div>

<style>
</style>
