<script lang="ts">
	import SendForm from '../../components/SendForm.svelte';
	import GoHome from '../../components/GoHome.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
</script>

<div  class="p-4">
	<SectionTitle title="Info" />
	<p class="mb-2 tracking-tight text-gray-900 dark:text-white">Informacion adicional sobre el sitio y/o dispositivo.</p>

    <div class="m-4 tracking-tight text-gray-900 dark:text-white">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum dicta quae dolorem recusandae quisquam atque cupiditate repudiandae quasi adipisci ex, odit repellat quidem, hic incidunt quis maiores, fuga et nesciunt quam nihil. Animi, deserunt. Id ipsum, consequuntur dolorum dolore optio veritatis asperiores reiciendis sunt possimus obcaecati hic consectetur modi.</p>
    </div>
	&nbsp;
    <SendForm />
	<GoHome />
</div>

<style>
	div {
		text-align: center;
	}
</style>
