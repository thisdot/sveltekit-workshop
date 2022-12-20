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
  <p>{data.content}</p>
</article>

<style>
  h1 {
    color: rebeccapurple;
    margin-bottom: 3rem;
  }

  article {
    margin: auto;
    max-width: min(800px, 90%)
  }
</style>