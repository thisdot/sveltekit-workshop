<script lang="ts">
	import '../styles.css';
	let subjects = 'Trainees';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/characters">Characters</a>
</nav>

<h1>Hello SvelteKit {subjects}!</h1>

<style>
	h1 {
		color: rebeccapurple;
	}
</style>
