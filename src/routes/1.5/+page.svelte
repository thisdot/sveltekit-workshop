<script lang="ts">
	import Repl from '$lib/Repl';
	import { onMount } from 'svelte';
	import { setup } from './setup';
	import type { SvelteComponent } from 'svelte';

	let repl: SvelteComponent;

	onMount(() => {
		setup(repl);
	});
</script>

<Repl bind:this={repl} />
