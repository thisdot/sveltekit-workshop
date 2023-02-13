import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script>
	let count = 0;
</script>

<button>Clicked {count} times</button>
`
			}
		]
	});
};
