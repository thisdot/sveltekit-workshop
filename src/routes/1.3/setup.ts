import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script></script>`
			},
			{
				name: 'Nested',
				type: 'svelte',
				source: `<p>I am the child component</p>`
			}
		]
	});
};
