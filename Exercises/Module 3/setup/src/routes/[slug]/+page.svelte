<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData;

  $: ({ title, content } = data);
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<article>
  <h1>{data.title}</h1>
  <div class="main">{data.content}</div>
</article>

<style>
  .main {
    max-width: min(800px, 90%);
    margin: auto;
  }
</style>