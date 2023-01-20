<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  $: movies = data?.movies ?? [];

  let loading = false;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Movie Log</h1>

<!-- <form use:enhance={() => {
          console.log('BEFORE ACTIONS')
          loading = true;
          return ({ result, update }) => {
            console.log('AFTER ACTION', result)
            loading = false;
            update()
          }  
        }} method="post" action="?/logMovie"> -->
<form use:enhance method="post" action="?/logMovie">
  <label for="name">Name</label>
  <input id="name" name="name" value={form?.name ?? null} />

  <label for="release">Release</label>
  <input type="number" id="release" name="release" value={form?.release ?? null} />

  <label for="rating">Rating</label>
  <select id="rating" name="rating" value={form?.rating ?? ''} >
    <option>Select a rating</option>
    <option value="1">1 Stars ⭐️</option>
    <option value="2">2 Stars ⭐️⭐️</option>
    <option value="3">3 Stars ⭐️⭐️⭐️</option>
    <option value="4">4 Stars ⭐️⭐️⭐️⭐️</option>
    <option value="5">5 Stars ⭐️⭐️⭐️⭐️⭐️</option>
  </select>

  <label for="comment">Comment:</label>
  <textarea id="comment" name="comment" placeholder="What did you think?" value={form?.comment ?? ''} />

  <div class="submission">
    <span class="error">{form?.errorMessage ?? ''}</span>
    <button type="submit">
      { loading ? '...loading' : 'Log The Movie' }
    </button>
  </div>
</form>

<table>
  <thead>
    <tr>
      <th class="name">name</th>
      <th class="release">release</th>
      <th class="rating">rating</th>
      <th class="comment">comment</th>
      <th class="action"></th>
    </tr>
  </thead>
  <tbody>
  {#each movies as movie}
    <tr>
      <td class="name">{movie.name}</td>
      <td class="release">{movie.release}</td>
      <td class="rating">{movie.rating}</td>
      <td class="comment">{movie.comment}</td>
      <td class="action">
        <form use:enhance method="post" action='?/deleteMovie'>
          <button type="submit" name="movieToDelete" value={movie.id}>Delete</button>
        </form>
      </td>
  {/each}
  <tbody>
</table>
