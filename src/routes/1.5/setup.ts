import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script>
	let count = 1;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Count: {count}
</button>
`
			}
		]
	});
};
