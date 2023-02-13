<script lang="ts">
  import '../styles.css'
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <slot />
</main>

<style>
main {
  padding: 0 3rem 3rem;
}
</style>

