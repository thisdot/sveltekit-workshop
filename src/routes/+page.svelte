<script lang="ts">
  import hero from '$lib/images/hero.png';
  import small from '$lib/images/hero-small.png';
  let subjects = 'Trainees';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Hello SvelteKit {subjects}!</h1>

<img src={hero} alt="My Hero Avatar" height="100" width="100" />

<img src={small} alt="My Smaller Hero Avatar" />

<div class="hero" />

<style>
  h1 {
    color: rebeccapurple;
    flex: 0 1 0;
  }

  .hero {
    background-image: url('$lib/images/hero.png');
    background-repeat: no-repeat;
    background-size: 100px;
  }
</style>
