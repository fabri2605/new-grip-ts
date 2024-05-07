<script>
	import {
		Drawer,
		Button,
		CloseButton,
		Label,
		Input,
		Textarea,
		P,
		A
	} from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';

	let hidden3 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<div class="text-center">
	<Button on:click={() => (hidden3 = false)}>Contactenos!</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id="sidebar3">
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
		>
			<InfoCircleSolid class="me-2.5 h-4 w-4" />Contact us
		</h5>
		<CloseButton on:click={() => (hidden3 = true)} class="mb-4 dark:text-white" />
	</div>
	<form action="#" class="mb-6">
		<div class="mb-6">
			<Label for="email" class="mb-2 block">Tu email</Label>
			<Input id="email" name="email" required placeholder="name@company.com" />
		</div>
		<div class="mb-6">
			<Label for="subject" class="mb-2 block">Asunto</Label>
			<Input id="subject" name="subject" required placeholder="Como podemos ayudarlo ..." />
		</div>
		<div class="mb-6">
			<Label for="message" class="mb-2">Tu mensaje</Label>
			<Textarea id="message" placeholder="Tu mensaje..." rows="4" name="message" />
		</div>
		<Button type="submit" class="w-full">Enviar</Button>
	</form>
	<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
		<A href="/" class="text-primary-600 hover:underline dark:text-primary-500">treme@company.com</A>
	</P>
	<P class="text-sm text-gray-500 dark:text-gray-400">
		<A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>
	</P>
</Drawer>
