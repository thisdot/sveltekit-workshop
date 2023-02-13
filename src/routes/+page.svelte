<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: movies = data?.movies ?? [];
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Movie Log</h1>

<table>
  <thead>
    <tr>
      <th class="name">name</th>
      <th class="release">release</th>
      <th class="rating">rating</th>
      <th class="comment">comment</th>
    </tr>
  </thead>
  <tbody>
  {#each movies as movie}
    <tr>
      <td class="name">{movie.name}</td>
      <td class="release">{movie.release}</td>
      <td class="rating">{movie.rating}</td>
      <td class="comment">{movie.comment}</td>
  {/each}
  <tbody>
</table>
