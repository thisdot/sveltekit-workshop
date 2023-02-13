<script lang="ts">
	import '../../styles.css';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
		padding: 0 2rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 1rem 2rem;
	}

	nav {
		display: flex;
		align-items: center;
	}

	nav > a {
		margin-right: 1rem;
	}
	nav > a:last-of-type {
		margin-right: 0;
	}
</style>
