<script>
	import {
		CalendarMonthSolid,
		ChartPieSolid,
		ClipboardSolid,
		GridSolid,
		MailBoxSolid,
		UserSettingsSolid
	} from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	let showSincButt = false;

	onMount(() => {
		showSincButt = window.innerWidth < 768;
	});
</script>

<button
	data-drawer-target="default-sidebar"
	data-drawer-toggle="default-sidebar"
	aria-controls="default-sidebar"
	type="button"
	class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
>
	<span class="sr-only">Open sidebar</span>
	<svg
		class="h-6 w-6"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			clip-rule="evenodd"
			fill-rule="evenodd"
			d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
		></path>
	</svg>
</button>

<aside
	id="default-sidebar"
	class="my-aside absolute left-0 top-0 z-30 h-screen w-64 -translate-x-full shadow-2xl transition-transform sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full overflow-y-auto bg-gray-200 px-3 py-4 dark:bg-gray-900">
		<ul class="space-y-2 font-medium">
			{#if showSincButt}
				<li>
					<a
						href="/sincronizar"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<GridSolid size={'lg'} class="text-gray-400" />
						<span class="ms-3 flex-1 whitespace-nowrap">Sincronizar</span>
						<span
							class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</a>
				</li>
			{/if}
			<li>
				<a
					href="/nuevo"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<ChartPieSolid size="lg" class="text-gray-500 dark:text-gray-400" />
					<span class="ms-3">Nuevo</span>
					<span
						class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
						>5</span
					>
				</a>
			</li>
			<li>
				<a
					href="/pendientes"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<MailBoxSolid size="lg" class="text-gray-500 dark:text-gray-400" />
					<span class="ms-3 flex-1 whitespace-nowrap">Pendientes</span>
					<span
						class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
						>1</span
					>
					<span
						class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-green-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
						>0</span
					>
				</a>
			</li>
			<li>
				<a
					href="/historial"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<CalendarMonthSolid size="lg" class="text-gray-500 dark:text-gray-400" />

					<span class="ms-3 flex-1 whitespace-nowrap">Historial</span>
				</a>
			</li>
			<li>
				<a
					href="/sesion"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<UserSettingsSolid size="lg" class="text-gray-500 dark:text-gray-400" />

					<span class="ms-3 flex-1 whitespace-nowrap">Mi sesion</span>
				</a>
			</li>
			<li>
				<a
					href="/info"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<ClipboardSolid size="lg" class="text-gray-500 dark:text-gray-400" />

					<span class="ms-3 flex-1 whitespace-nowrap">Info</span>
				</a>
			</li>
			<li>
				<a
					href="/sign-out"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<svg
						class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 16"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
						/>
					</svg>
					<span class="ms-3 flex-1 whitespace-nowrap">Sign Out</span>
				</a>
			</li>
		</ul>
	</div>
</aside>

<style>
	.my-aside {
		margin-top: 76px;
	}
</style>
