<script lang="ts">
	import '@sveltejs/site-kit/styles/index.css';
	import '@sveltejs/site-kit/styles/code.css';
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 100vh;
	}
</style>
