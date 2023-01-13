<script lang="ts">
  import '../../styles.css'
</script>

<main>
  <slot />
</main>

<nav>
  <a href="/">Return to Website</a>
</nav>
<style>
  main {
    border: 10px solid rebeccapurple;
    padding: 2rem;
  }

  nav {
    text-align: right;
  }
</style>