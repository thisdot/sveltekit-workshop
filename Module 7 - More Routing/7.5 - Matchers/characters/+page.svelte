<script lang="ts">
	import type { PageData } from './$types'
  export let data: PageData;
</script>

<svelte:head>
  <title>Characters</title>
</svelte:head>

<h1>Characters</h1>

<ul>
	{#each data.characters as { id, image, name, occupation }}
	<li>
			<a href={`/characters/${id}`} class="picture">
				<img src={image} alt={name} />
			</a>
			<div>
				<a href={`/characters/${id}`}><b>{name}</b></a>
				<p class="occupation">{occupation ? occupation : 'Unknown'}<p>
			</div>
	</li>
	{/each}
</ul>

<style>
	li {
		display: flex;
		gap: 2rem;
	}

	a {
		text-decoration: none;
	}

	.picture {
		display: flex;
		height: 100px;
		width: 100px;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.occupation {
		color: grey;
	}
</style>
