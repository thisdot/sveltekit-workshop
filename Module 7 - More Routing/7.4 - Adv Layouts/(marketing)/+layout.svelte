<script lang="ts">
  import logo from '$lib/images/svelte-kit.svg'
  import '../../styles.css'
</script>

<header>
  <figure>
    <a href="/"><img class="logo" src={logo} alt="The SvelteKit Blog" /></a>
  </figure>

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

  figure {
    margin: 0;
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
  .logo {
    height: 2em;
  }
</style>