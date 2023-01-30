<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageAction } from './$types';

  export let form: PageAction;
</script>

<h1>Login</h1>

<form use:enhance method="post">
    <label for="username">Username</label>
    <input id="username" name="username" value={form?.username?.value ?? ''} required />
    {#if form?.username?.reason}
      <div class="error">{form.username.reason}</div>
    {/if}

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
    {#if form?.password}
      <div class="error">{form.password.reason}</div>
    {/if}

    <button>Login</button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    grid-template-rows: repeat(1fr, 1fr);
    max-width: min(90%, 400px);
    margin: auto;
  }

  .error {
    grid-column: 2 / 3;
    margin-top: -1rem;
    font-size: 0.8em;
    color: red;
  }
</style>