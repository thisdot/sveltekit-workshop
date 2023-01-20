<script lang="ts">
  import Character from './character.svelte'
  import type { PageData } from './$types';
  export let data: PageData;

  $: character = data.character;
</script>

<svelte:head>
  <title>{character.name} | Characters</title>
</svelte:head>

<Character {...character} />
