<script lang="ts">
	import { page } from '$app/stores';
	import Character from '$lib/components/character.svelte';
</script>

<Character name={`${$page.status}: ${$page.error?.message}`} />

<a href="/characters">Back</a>
