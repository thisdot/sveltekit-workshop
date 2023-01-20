<script lang="ts">
  import '../styles.css'
</script>

<nav>
  <a href="/">Home</a>
  <a href="/characters">Characters</a>
</nav>

<main>
  <slot />
</main>

<style>
  main {
    padding: 1rem;
    max-width: 800px;
    margin: auto;
  }
</style>