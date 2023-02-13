import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script>
	import Nested from './Nested.svelte';
</script>

<p>These styles...</p>
<Nested />

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>							
`
			},
			{
				name: 'Nested',
				type: 'svelte',
				source: `<p>...don't affect this element</p>`
			}
		]
	});
};
