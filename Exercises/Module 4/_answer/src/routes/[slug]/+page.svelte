<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData;

  $: ({ title, content, theme } = data);

  const themes = {
    A: 'svelte',
    B: 'programming',
    C: 'code',
    D: 'javascript'
  };
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<article>
  <header class={themes[theme]}>
    <h1>{data.title}</h1>
  </header>
  <div class="main">{@html data.content}</div>
</article>

<style>
  h1 {
    color: white;
    text-shadow: 1px 1px 3px black, 3px 3px 3px black;
    margin-bottom: 3rem;
    max-width: min(800px, 90%);
    margin: 1rem auto 2rem;
  }

  header {
    background-color: rebeccapurple;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem 3rem;
    margin: 2rem -2rem;
  }

  .main {
    max-width: min(800px, 90%);
    margin: auto;
  }

  .svelte {
    background-image: linear-gradient(
      rgba(102,51,153, 0.2),
      rgba(102,51,153, 0.2)
    ), url('$lib/images/themeA.jpg')
  }

  .programming {
    background-image: linear-gradient(
      rgba(102,51,153, 0.2),
      rgba(102,51,153, 0.2)
    ), url('$lib/images/themeB.jpg')
  }

  .code {
    background-image: linear-gradient(
      rgba(102,51,153, 0.2),
      rgba(102,51,153, 0.2)
    ), url('$lib/images/themeC.jpg')
  }

  .javascript {
    background-image: linear-gradient(
      rgba(255,255,0, 0.5),
      rgba(255,255,0, 0.4)
    ), url('$lib/images/themeD.jpg')
  }
</style>