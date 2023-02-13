import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script>
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	});
</script>

<h1>The time is {formatter.format(Date.now())}</h1>
`
			}
		]
	});
};
