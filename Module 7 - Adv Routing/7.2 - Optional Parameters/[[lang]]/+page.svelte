<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>SvelteKit Training</title>
</svelte:head>

<h1>Advanced Routing ({ data.lang })</h1>

<nav>
  <a href="/">English (/)</a>
  <a href="/fr">French (/fr)</a>
  <a href="/es">Spanish (/es)</a>
</nav>