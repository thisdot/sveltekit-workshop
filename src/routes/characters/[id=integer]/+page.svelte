<script lang="ts">
	import Character from '$lib/components/character.svelte';
	export let data;

	$: character = data.character;
</script>

<svelte:head>
	<title>{character.name} | Characters</title>
</svelte:head>

<Character {...character} />

<a href="/characters">Back</a>
