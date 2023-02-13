import type { SvelteComponent } from 'svelte';

export const setup = (repl: SvelteComponent) => {
	repl.set({
		components: [
			{
				name: 'App',
				type: 'svelte',
				source: `<script>
import Box from './Box.svelte';
</script>

<h2>Hello!</h2>
`
			},
			{
				name: 'Box',
				type: 'svelte',
				source: `
<div class="box">

</div>

<style>
.box {
	display: flex;
	flex-direction: column;
	width: 300px;
	border: 1px solid #aaa;
	border-radius: 2px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	padding: 1em;
	margin: 0 0 1em 0;
}
</style>
`
			}
		]
	});
};
